import { copyFile } from "node:fs/promises";
import { resolve } from "node:path";

const outputDirectory = resolve(import.meta.dirname, "../dist");

await copyFile(
  resolve(outputDirectory, "index.html"),
  resolve(outputDirectory, "404.html"),
);
