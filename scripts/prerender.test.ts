import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { test } from "node:test";
import { loadEnv } from "vite";

const projectDirectory = resolve(import.meta.dirname, "..");
const { VITE_PRODUCTION_URL } = loadEnv(
  "production",
  projectDirectory,
  "VITE_",
);
const origin = VITE_PRODUCTION_URL.replace(/\/$/, "");
const pages = [
  {
    path: "/",
    file: "index.html",
    heading: "Hi, I’m Sargis Sargsyan",
    cards: 16,
  },
  { path: "/404/", file: "404.html", heading: "Page not found", cards: 0 },
];

for (const page of pages) {
  test(`${page.path} ships visible HTML and route-specific metadata`, async () => {
    const html = await readFile(
      resolve(projectDirectory, "dist", page.file),
      "utf8",
    );
    const root = html.match(/<div id="root">([\s\S]*)<\/div>/)?.[1];
    assert.ok(root, "Page content must exist before JavaScript runs");
    const heading = root
      .match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1]
      .replace(/<!--[\s\S]*?-->/g, "");
    assert.equal(heading, page.heading);
    if (page.path === "/") {
      assert.match(root, /<img[^>]+src="\/img\/avatars\/sargis-sargsyan.webp"/);
    }
    assert.equal((root.match(/<article\b/g) ?? []).length, page.cards);
    assert.doesNotMatch(root, /Loading page…|opacity:0(?:;|")/);
    assert.doesNotMatch(
      root,
      /<video\b/,
      "Videos must remain client-only and lazy",
    );
    assert.ok(html.includes(`rel="canonical" href="${origin}${page.path}"`));
    assert.ok(
      html.includes(
        `content="${page.path === "/404/" ? "noindex, nofollow" : "index, follow"}"`,
      ),
    );
    assert.doesNotMatch(html, /%VITE_/);
    for (const href of html.matchAll(/href="([^"]+)"/g)) {
      const url = new URL(href[1], origin);
      if (url.origin === origin) {
        assert.ok(
          !["/games", "/ads", "/resume", "/contact"].includes(
            url.pathname.replace(/\/$/, ""),
          ),
          `Stale page link: ${href[1]}`,
        );
      }
    }
    assert.match(html, /<script type="module"[^>]+src="\/assets\//);
  });
}

test("sitemap lists only the homepage", async () => {
  const sitemap = await readFile(
    resolve(projectDirectory, "dist/sitemap.xml"),
    "utf8",
  );
  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(
    (match) => match[1],
  );
  assert.deepEqual(urls, [`${origin}/`]);
});
