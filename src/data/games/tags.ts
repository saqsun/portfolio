import games from "#data/games/games";
import { gameDetails } from "#data/games/details";
import { gameStores } from "#data/games/stores";

export const gameTags = Object.fromEntries(
  games.map((game) => [
    game.id,
    [
      ...gameDetails[game.id].tags,
      ...new Set([
        ...gameStores[game.id].current.map((store) => store.name),
        ...(gameStores[game.id].previous ?? []),
      ]),
    ],
  ]),
);
