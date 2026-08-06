import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { loadEnv } from "vite";

const projectDirectory = resolve(import.meta.dirname, "..");
const outputDirectory = resolve(projectDirectory, "dist");
const sourceHtml = resolve(outputDirectory, "index.html");
const baseHtml = await readFile(sourceHtml, "utf8");
const { VITE_PRODUCTION_URL } = loadEnv(
  "production",
  projectDirectory,
  "VITE_PRODUCTION_URL",
);
const routeMetadata = JSON.parse(
  await readFile(
    resolve(projectDirectory, "src/data/RouteMetadata.json"),
    "utf8",
  ),
);

if (!VITE_PRODUCTION_URL) {
  throw new Error("VITE_PRODUCTION_URL is required to generate static routes");
}

const productionUrl = VITE_PRODUCTION_URL.replace(/\/$/, "");

function escapeAttribute(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function replaceRequired(html, pattern, replacement) {
  if (!pattern.test(html)) {
    throw new Error(`Could not find metadata matching ${pattern}`);
  }

  return html.replace(pattern, replacement);
}

function injectMetadata(html, path, metadata) {
  const title = escapeAttribute(metadata.title);
  const description = escapeAttribute(metadata.description);
  const canonicalUrl = `${productionUrl}${path}`;
  const robots = metadata.indexable ? "index, follow" : "noindex, nofollow";

  const replacements = [
    [/<title>.*?<\/title>/, `<title>${title}</title>`],
    [
      /<meta name="description" content="[^"]*" \/>/,
      `<meta name="description" content="${description}" />`,
    ],
    [
      /<meta name="robots" content="[^"]*" \/>/,
      `<meta name="robots" content="${robots}" />`,
    ],
    [
      /<link rel="canonical" href="[^"]*" \/>/,
      `<link rel="canonical" href="${canonicalUrl}" />`,
    ],
    [
      /<meta property="og:title" content="[^"]*" \/>/,
      `<meta property="og:title" content="${title}" />`,
    ],
    [
      /<meta property="og:description" content="[^"]*" \/>/,
      `<meta property="og:description" content="${description}" />`,
    ],
    [
      /<meta property="og:url" content="[^"]*" \/>/,
      `<meta property="og:url" content="${canonicalUrl}" />`,
    ],
    [
      /<meta name="twitter:title" content="[^"]*" \/>/,
      `<meta name="twitter:title" content="${title}" />`,
    ],
    [
      /<meta name="twitter:description" content="[^"]*" \/>/,
      `<meta name="twitter:description" content="${description}" />`,
    ],
  ];

  return replacements.reduce(
    (result, [pattern, replacement]) =>
      replaceRequired(result, pattern, replacement),
    html,
  );
}

const indexableRoutes = Object.entries(routeMetadata).filter(
  ([path, metadata]) => path !== "/" && metadata.indexable,
);

await Promise.all(
  indexableRoutes.map(async ([path, metadata]) => {
    const routeDirectory = resolve(outputDirectory, path.slice(1));

    await mkdir(routeDirectory, { recursive: true });
    await writeFile(
      resolve(routeDirectory, "index.html"),
      injectMetadata(baseHtml, path, metadata),
    );
  }),
);

await writeFile(
  resolve(outputDirectory, "404.html"),
  injectMetadata(baseHtml, "/404/", routeMetadata["/404/"]),
);
