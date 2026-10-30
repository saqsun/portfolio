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

Edit `src/data/Profile.ts` for biography, experience, and open-source projects;
`src/data/Skills.ts` for skills; and `src/data/Testimonials.ts` for recommendations.
Games use `GamesData.ts`, `FeaturedGames.ts`, `GameMedia.ts`, and `GameStores.ts`.
Playable ads use `AdsData.ts`, `AdDetails.ts`, and `AdPreviews.ts` in `src/data/`.
Run `npm run dev` for local preview, `npm run check` for source checks, and
`npm run build` for the GitHub Pages output in `dist/`.

## Preview media

Active previews live in `public/videos/`, with source attribution in each folder's
`sources.txt`. Each MP4 needs a matching `.mobile.mp4` variant (720 × 420); desktop
previews are 1200 × 700. Both use silent H.264 with fast-start metadata.
`VideoPreview` loads videos only while visible and uses poster images for reduced
motion, data-saving connections, and hidden tabs. Keep poster paths in the data
files alongside the corresponding videos. Posters are WebP images from the first
frame of the edited video; SVG logos stay vector. Keep the JPEG social-sharing
image for link previews.

`public/projects/` contains standalone hosted game and playable-ad builds. Preserve
these folders when cleaning portfolio assets: their files can be loaded internally
by the games or accessed through direct URLs.

### Optional WebM variants

Run `python3 scripts/optimize-preview-videos.py` (requires FFmpeg with libvpx-vp9)
after changing the MP4 masters. It compares each VP9 candidate against its MP4,
retains only variants at least 10% smaller with SSIM ≥ 0.98, and writes
`src/data/VideoFormats.json` plus `public/videos/optimization-report.json`.
The threshold is an automated filter; visually review new accepted encodes too.
Run `npm run format` after regenerating the manifest.

Safari and iOS browsers always use H.264 MP4. Other browsers use an accepted WebM
only when VP9 is supported, falling back to MP4 on loading or decoding failure.
Do not remove MP4 masters or mobile variants. Changing a video requires regenerating
its poster and optional WebM variant to keep the loop and transition aligned.
