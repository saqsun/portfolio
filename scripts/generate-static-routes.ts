import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { tmpdir } from "node:os";
import { pathToFileURL } from "node:url";
import { build, loadEnv } from "vite";

const projectDirectory = resolve(import.meta.dirname, "..");
const outputDirectory = resolve(projectDirectory, "dist");
const sourceHtml = resolve(outputDirectory, "index.html");
const baseHtml = await readFile(sourceHtml, "utf8");
const { VITE_PRODUCTION_URL } = loadEnv(
  "production",
  projectDirectory,
  "VITE_PRODUCTION_URL",
);
type RouteMetadata = {
  title: string;
  description: string;
  indexable: boolean;
};

const routeMetadata: Record<string, RouteMetadata> = JSON.parse(
  await readFile(
    resolve(projectDirectory, "src/data/site/route-metadata.json"),
    "utf8",
  ),
);

if (!VITE_PRODUCTION_URL) {
  throw new Error("VITE_PRODUCTION_URL is required to generate static routes");
}

const productionUrl = VITE_PRODUCTION_URL.replace(/\/$/, "");

function escapeAttribute(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function replaceRequired(html: string, pattern: RegExp, replacement: string) {
  if (!pattern.test(html)) {
    throw new Error(`Could not find metadata matching ${pattern}`);
  }

  return html.replace(pattern, replacement);
}

function injectMetadata(html: string, path: string, metadata: RouteMetadata) {
  const title = escapeAttribute(metadata.title);
  const description = escapeAttribute(metadata.description);
  const canonicalUrl = `${productionUrl}${path}`;
  const robots = metadata.indexable ? "index, follow" : "noindex, nofollow";

  const replacements: [RegExp, string][] = [
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

// Bundle the same app for Node using Vite’s aliases, transforms, and Redact runtime.
// The temporary server bundle never ships with the static site.
const renderDirectory = await mkdtemp(
  resolve(tmpdir(), "portfolio-prerender-"),
);

try {
  await build({
    mode: "production",
    ssr: { noExternal: true },
    build: {
      ssr: "src/entry-server.tsx",
      outDir: renderDirectory,
      copyPublicDir: false,
      emptyOutDir: true,
      rollupOptions: { output: { entryFileNames: "entry-server.mjs" } },
    },
  });
  const { render } = (await import(
    pathToFileURL(resolve(renderDirectory, "entry-server.mjs")).href
  )) as { render: (path: string) => string };

  await Promise.all(
    Object.entries(routeMetadata).map(async ([path, metadata]) => {
      const html = injectMetadata(baseHtml, path, metadata).replace(
        '<div id="root"></div>',
        () => `<div id="root">${render(path)}</div>`,
      );
      const destination =
        path === "/404/" ? "404.html" : `${path.slice(1)}index.html`;
      const outputPath = resolve(outputDirectory, destination);
      await mkdir(resolve(outputPath, ".."), { recursive: true });
      await writeFile(outputPath, html);
    }),
  );
} finally {
  await rm(renderDirectory, { recursive: true, force: true });
}
