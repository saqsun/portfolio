# Portfolio Webpage

This repository contains the code for my personal portfolio webpage. It showcases my projects, skills, and experience.

## Features

- **Projects:** Explore the various projects I've worked on.
- **Skills:** Learn about my skills and expertise.
- **About Me:** Get to know me and my background.
- **Contact:** Reach out to me through various channels.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Portfolio UI

The homepage adapts [Magic UI Portfolio](https://github.com/magicuidesign/portfolio)
using React, TypeScript, Vite, Tailwind CSS, local shadcn/ui components, and Motion.
The imported template's MIT notice is in `licenses/magic-ui-portfolio-LICENSE`.
Next.js is not required; `next-themes` supplies the standalone React theme provider.

Data is grouped by feature in `src/data/`, with lowercase kebab-case filenames:

- `home/`: profile, skills, testimonials, and work achievements.
- `games/`: game listings, details, preview media, tags, and stores.
- `ads/`: playable-ad listings, details, and previews.
- `media/`: the video-format manifest.
- `site/`: route metadata shared by the app and static-route build script.

The shared project type and URL helper live in `src/lib/project.ts`.

Source imports use aliases configured in `tsconfig.app.json` and `vite.config.ts`: `#components/*`,
`#pages/*`, `#data/*`, `#lib/*`, `#styles/*`, and `#src/*` for source-root files.
Omit TypeScript extensions, for example `#components/ui/Badge`. Keep `.json` and
`.css` extensions for data and stylesheet imports.

Use `nvm use` to select the pinned Node version, then `npm ci` to install dependencies.

Run `npm run dev` for local preview, `npm run check` for source checks, and
`npm run build` for the GitHub Pages output in `dist/`.

## Static rendering

`npm run build` bundles the client, then renders the existing page components into
`dist/index.html`, `dist/games/index.html`, and `dist/ads/index.html`. It also renders
`404.html` with noindex metadata. Rendering runs only during the build; deployment
still uses static GitHub Pages hosting.

`src/entry-server.tsx` supplies eager pages to avoid loading placeholders in HTML.
The browser hydrates that HTML and keeps lazy route chunks, theme controls, and
video loading. Entrance effects leave prerendered content visible without JavaScript.
A temporary Vite server bundle is removed after rendering and is never deployed.

Run `npm run test:prerender` after a build to check generated content and metadata.

## Preview media

Active previews live in `public/videos/`, with source attribution in each folder's
`sources.txt`. Each MP4 needs a matching `.mobile.mp4` variant (720 × 420); desktop
previews are 1200 × 700. Both use silent H.264 with fast-start metadata.
`VideoPreview` loads videos only while visible and uses poster images for reduced
motion, data-saving connections, and hidden tabs. Keep poster paths in the data
files alongside the corresponding videos. Posters are WebP images from the first
frame of the edited video. Company and skill logos use normalized WebP assets.
Keep the JPEG social-sharing
image for link previews.

`public/projects/` contains standalone hosted game and playable-ad builds. Preserve
these folders when cleaning portfolio assets: their files can be loaded internally
by the games or accessed through direct URLs.

### Optional WebM variants

Existing WebM variants are mapped in `src/data/media/video-formats.json`. Keep this
manifest aligned with the available files when replacing previews.

Safari and iOS browsers always use H.264 MP4. Other browsers use an accepted WebM
only when VP9 is supported, falling back to MP4 on loading or decoding failure.
Do not remove MP4 masters or mobile variants. Changing a video requires regenerating
its poster and optional WebM variant to keep the loop and transition aligned.
