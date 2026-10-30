// Concise gameplay summaries adapted from the published game listings.
// Unity: Koreez production director’s account of both games:
// https://wnhub.io/news/stores-and-publishing/item-12173
// Tapventures stack: https://www.youtube.com/watch?v=Lp1GRyUUoFM
// SALTR is credited on both Plexonic game pages. ActionScript/AIR are provisional.
// Dune tags refer to the hosted browser adaptation, verified in its bundled code.
export const gameDetails: Record<
  string,
  { description: string; source: string; tags: string[] }
> = {
  roofbot: {
    tags: ["Unity", "C#"],
    description:
      "Guide Roofie across shifting rooftops, placing colored energy balls into matching slots. Plan each move carefully as the architecture changes around you across more than 120 puzzles.",
    source: "https://store.steampowered.com/app/545660/Roofbot/",
  },
  parallyzed: {
    tags: ["Unity", "C#"],
    description:
      "Control twin sisters Red and Blue simultaneously through parallel dream worlds. Swap their positions and time each jump to overcome obstacles that test both their color and size.",
    source: "https://store.steampowered.com/app/545670/Parallyzed/",
  },
  "panda-jam": {
    // Provisional stack inferred from the author’s Plexonic experience.
    tags: ["ActionScript", "Adobe AIR", "SALTR"],
    description:
      "Collapse groups of matching cubes to rescue baby pandas. Travel through bamboo forests, volcanoes, and icy landscapes, using explosive power-ups to clear increasingly tricky boards.",
    source: "https://plexonic.com/panda-jam/",
  },
  "paint-monsters": {
    // Provisional stack inferred from the author’s Plexonic experience.
    tags: ["ActionScript", "Adobe AIR", "SALTR"],
    description:
      "Connect colorful paint monsters to defeat the Ink King and restore color to the world. Build combos, collect creatures, and unleash magical boosters across vibrant puzzle boards.",
    source: "https://plexonic.com/paint-monsters/",
  },
  tapventures: {
    tags: ["Java", "libGDX", "Overlap2D", "RoboVM", "Spine"],
    description:
      "Battle creatures on floating islands with every tap. Recruit and upgrade heroes, unlock spells, and take on powerful bosses while your companions keep earning gold between adventures.",
    source: "https://tapventures.appstor.io/",
  },
  dune: {
    tags: ["PixiJS", "GSAP", "HTML5"],
    description:
      "Build momentum along rolling dunes and launch into the air to score. Time each landing with the slope to keep your run alive and chain together higher, smoother jumps.",
    source: "https://apps.apple.com/us/app/id1291851950",
  },
  "solitaire-klondike-chronicles": {
    tags: ["TypeScript", "PixiJS", "GSAP"],
    description:
      "Classic Klondike solitaire with solvable deals, unlimited hints and undo. Earn points, unlock titles, and track your progress on the leaderboards.",
    source: "https://yandex.ru/games/app/170461",
  },
  "flipper-dunk-3d": {
    tags: ["TypeScript", "Three.js", "PixiJS", "Box2D", "GSAP"],
    description:
      "A one-button basketball challenge with pinball mechanics. Time each flip to send the ball through the hoop—simple controls that reward patience and precision.",
    source: "https://www.crazygames.com/game/flipper-dunk-3d",
  },
  "break-crush": {
    tags: ["TypeScript", "Three.js", "PixiJS", "Box2D", "GSAP"],
    description:
      "Take control of a crane-mounted crusher and demolish structures across more than 100 levels. Earn points and upgrade your machine for even more destruction.",
    source: "https://yandex.ru/games/app/171326",
  },
  "bricks-versus": {
    tags: ["TypeScript", "PixiJS", "Box2D", "GSAP"],
    description:
      "Draw lines to deflect the ball, smash your opponent’s bricks, and defend your castle. Turn the match around with power-ups and charged fireball shots.",
    source: "https://bricks-versus.appstor.io/",
  },
};
