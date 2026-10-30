import { ProjectCard } from "./ProjectCard";
import games from "../../data/games/games";
import { gamePreviews } from "../../data/games/media";
import { gameDetails } from "../../data/games/details";
import { gameTags } from "../../data/games/tags";

const gameOrder = [
  "roofbot",
  "parallyzed",
  "panda-jam",
  "paint-monsters",
  "tapventures",
  "dune",
  "solitaire-klondike-chronicles",
  "flipper-dunk-3d",
  "break-crush",
  "bricks-versus",
];
const orderedGames = [...games].sort(
  (a, b) => gameOrder.indexOf(a.id) - gameOrder.indexOf(b.id),
);

export function GameGrid() {
  return (
    <section
      aria-label="Games"
      className="grid grid-cols-1 gap-3 sm:grid-cols-2"
    >
      {orderedGames.map((game) => {
        const preview = gamePreviews[game.id];
        return (
          <ProjectCard
            key={game.id}
            landscape
            websiteLabel={null}
            title={game.name}
            href={game.targetUrl}
            image={preview.poster}
            video={preview.video}
            description={gameDetails[game.id].description}
            tags={gameTags[game.id]}
          />
        );
      })}
    </section>
  );
}
