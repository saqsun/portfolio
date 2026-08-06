import { copyFile, mkdir, readFile } from "node:fs/promises";
import { resolve } from "node:path";

const projectDirectory = resolve(import.meta.dirname, "..");
const outputDirectory = resolve(projectDirectory, "dist");
const sourceHtml = resolve(outputDirectory, "index.html");
const routeMetadata = JSON.parse(
  await readFile(
    resolve(projectDirectory, "src/data/RouteMetadata.json"),
    "utf8",
  ),
);

const indexableRoutes = Object.entries(routeMetadata).filter(
  ([path, metadata]) => path !== "/" && metadata.indexable,
);

await Promise.all(
  indexableRoutes.map(async ([path]) => {
    const routeDirectory = resolve(outputDirectory, path.slice(1));

    await mkdir(routeDirectory, { recursive: true });
    await copyFile(sourceHtml, resolve(routeDirectory, "index.html"));
  }),
);

await copyFile(sourceHtml, resolve(outputDirectory, "404.html"));
