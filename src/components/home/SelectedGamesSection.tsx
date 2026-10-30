import BlurFade from "../effects/BlurFade";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { ProjectCard } from "../collections/ProjectCard";
import games from "../../data/games/games";
import { gameCovers } from "../../data/games/media";
import { gameTags } from "../../data/games/tags";
import { gameDetails } from "../../data/games/details";

const selectedGames = games.filter((game) =>
  [
    "solitaire-klondike-chronicles",
    "flipper-dunk-3d",
    "break-&-crush-icon",
    "bricks-versus",
  ].includes(game.id),
);

export default function SelectedGamesSection() {
  return (
    <section id="games">
      <BlurFade delay={0.52}>
        <div className="flex min-h-0 flex-col gap-y-8">
          <div className="flex flex-col items-center justify-center gap-y-4">
            <div className="flex w-full items-center">
              <div className="h-px flex-1 bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
              <div className="z-10 rounded-xl border bg-primary px-4 py-1">
                <span className="text-sm font-medium text-background">
                  Selected Games
                </span>
              </div>
              <div className="h-px flex-1 bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
            </div>
            <div className="flex flex-col items-center justify-center gap-y-3">
              <h2 className="text-center text-3xl! font-bold tracking-tighter sm:text-4xl!">
                Built to be played
              </h2>
              <p className="text-center text-balance text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                Released titles I made or heavily contributed to.
              </p>
            </div>
          </div>
          <div className="mx-auto grid w-full max-w-[800px] sm:auto-rows-fr grid-cols-1 gap-3 sm:grid-cols-2">
            {selectedGames.map((game, index) => (
              <BlurFade
                key={game.id}
                delay={0.56 + index * 0.05}
                className="h-full"
              >
                <ProjectCard
                  templateStyle
                  websiteLabel={null}
                  title={game.name}
                  href={game.targetUrl}
                  image={gameCovers[game.id]}
                  landscape
                  video={gameCovers[game.id]
                    ?.replace("/img/projects/", "/videos/games/")
                    .replace("-cover.webp", ".mp4")}
                  tags={gameTags[game.id]}
                  description={gameDetails[game.id].description}
                />
              </BlurFade>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/games/"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border bg-card px-4 text-sm font-medium text-card-foreground transition-colors hover:bg-muted"
            >
              All games <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
            <Link
              to="/ads/"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border bg-card px-4 text-sm font-medium text-card-foreground transition-colors hover:bg-muted"
            >
              Playable ads <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
