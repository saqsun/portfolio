import type { Project } from "./Project";

export default [
  {
    id: "solitaire-klondike-chronicles",
    name: "Solitaire: Klondike Chronicles",
    targetUrl: "https://yandex.ru/games/app/170461",
  },
  {
    id: "flipper-dunk-3d",
    name: "Flipper Dunk 3D",
    targetUrl: "https://www.crazygames.com/game/flipper-dunk-3d",
  },
  {
    id: "break-&-crush-icon",
    name: "Break & Crush",
    targetUrl: "https://yandex.ru/games/app/171326",
  },
  {
    id: "dune!",
    name: "Dune!",
    targetUrl: "/projects/games/voodo_dune/index.html",
  },
  {
    id: "bricks-versus",
    name: "Bricks Versus",
    targetUrl: "/projects/games/bricks_versus/index.html",
  },
  {
    id: "tapventures",
    name: "Tapventures",
    targetUrl: "https://tapventures.en.uptodown.com/android",
  },
  {
    id: "roofbot",
    name: "Roofbot",
    targetUrl: "https://store.steampowered.com/app/545660/Roofbot/",
  },
  {
    id: "panda-jam",
    name: "Panda Jam",
    targetUrl: "https://panda-jam.en.uptodown.com/android",
  },
  {
    id: "paint-monsters",
    name: "Paint Monsters",
    targetUrl: "https://paint-monsters.en.uptodown.com/android",
  },
  {
    id: "parallyzed",
    name: "Parallyzed",
    targetUrl: "https://store.steampowered.com/app/545670/Parallyzed/",
  },
] satisfies readonly Omit<Project, "iconUrl">[];
