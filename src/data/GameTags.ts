import games from "./GamesData";
import { featuredGameDescriptions } from "./FeaturedGames";
import { gameStores } from "./GameStores";

export const gameTags = Object.fromEntries(
  games.map((game) => [
    game.id,
    [
      ...featuredGameDescriptions[game.id].tags,
      ...new Set([
        ...gameStores[game.id].current.map((store) => store.name),
        ...(gameStores[game.id].previous ?? []),
      ]),
    ],
  ]),
);
