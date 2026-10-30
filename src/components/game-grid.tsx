import { ProjectCard } from "./project-card";
import games from "../data/GamesData";
import { additionalGamePreviews, gameCovers } from "../data/GameMedia";
import { featuredGameDescriptions } from "../data/FeaturedGames";
import { gameTags } from "../data/GameTags";

const gameOrder = [
  "roofbot",
  "parallyzed",
  "panda-jam",
  "paint-monsters",
  "tapventures",
  "dune!",
  "solitaire-klondike-chronicles",
  "flipper-dunk-3d",
  "break-&-crush-icon",
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
        const preview = additionalGamePreviews[game.id];
        const cover = gameCovers[game.id];
        return (
          <ProjectCard
            key={game.id}
            templateStyle
            landscape
            websiteLabel={null}
            title={game.name}
            href={game.targetUrl}
            image={preview?.poster ?? cover}
            video={
              preview?.video ??
              cover
                ?.replace("/img/projects/", "/videos/games/")
                .replace("-cover.webp", ".mp4")
            }
            description={featuredGameDescriptions[game.id].description}
            tags={gameTags[game.id]}
          />
        );
      })}
    </section>
  );
}
