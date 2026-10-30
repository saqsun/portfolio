export interface GameStoreLinks {
  current: { name: string; href: string }[];
  previous?: string[];
}

// Checked October 30, 2026. Historical mobile listings are not download links.
// Original publisher links: https://plexonic.com/panda-jam/ and /paint-monsters/.
// Former iOS IDs: Roofbot 1148435076, Parallyzed 1281730264, Panda Jam 559353119.
// Tapventures and Bricks Versus iOS release history: their appstor.io listings.
export const gameStores: Record<string, GameStoreLinks> = {
  roofbot: {
    current: [
      {
        name: "Steam",
        href: "https://store.steampowered.com/app/545660/Roofbot/",
      },
    ],
    previous: ["App Store", "Google Play"],
  },
  parallyzed: {
    current: [
      {
        name: "Steam",
        href: "https://store.steampowered.com/app/545670/Parallyzed/",
      },
    ],
    previous: ["App Store", "Google Play"],
  },
  "panda-jam": {
    current: [],
    previous: ["App Store", "Google Play", "Facebook", "Amazon Appstore"],
  },
  "paint-monsters": {
    current: [
      {
        name: "App Store",
        href: "https://apps.apple.com/us/app/paint-monsters/id795264363",
      },
    ],
    previous: ["Google Play", "Facebook", "Amazon Appstore"],
  },
  tapventures: {
    current: [],
    previous: ["App Store", "Google Play"],
  },
  dune: {
    current: [
      {
        name: "App Store",
        href: "https://apps.apple.com/us/app/dune/id1291851950",
      },
      {
        name: "Google Play",
        href: "https://play.google.com/store/apps/details?id=io.voodoo.dune",
      },
      { name: "Browser", href: "/projects/games/voodo_dune/index.html" },
    ],
  },
  "solitaire-klondike-chronicles": {
    current: [
      { name: "Yandex Games", href: "https://yandex.ru/games/app/170461" },
    ],
  },
  "flipper-dunk-3d": {
    current: [
      {
        name: "CrazyGames",
        href: "https://www.crazygames.com/game/flipper-dunk-3d",
      },
    ],
  },
  "break-crush": {
    current: [
      { name: "Yandex Games", href: "https://yandex.ru/games/app/171326" },
    ],
  },
  "bricks-versus": {
    current: [
      { name: "Browser", href: "/projects/games/bricks_versus/index.html" },
    ],
    previous: ["App Store"],
  },
};
