import games from "./games";
import { gameDetails } from "./details";
import { gameStores } from "./stores";

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
