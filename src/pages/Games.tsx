import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { ProjectCard } from "../components/project-card";
import BlurFade from "../components/magicui/blur-fade";
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

export default function Games() {
  return (
    <div className="mx-auto max-w-2xl space-y-12">
      <header className="space-y-8">
        <Link
          to="/"
          className="inline-flex min-h-11 items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft size={14} /> Back to home
        </Link>
        <BlurFade delay={0.04}>
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex w-full items-center">
              <div className="h-px flex-1 bg-linear-to-r from-transparent via-border to-transparent" />
              <span className="rounded-xl border bg-primary px-4 py-1 text-sm font-medium text-background">
                Games
              </span>
              <div className="h-px flex-1 bg-linear-to-l from-transparent via-border to-transparent" />
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Built to be played
            </h1>
            <p className="text-balance text-muted-foreground md:text-lg">
              Released titles I made or heavily contributed to, across browser,
              mobile, and PC.
            </p>
          </div>
        </BlurFade>
      </header>
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
      <div className="flex flex-col items-start justify-between gap-4 rounded-xl border p-6 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-base font-semibold">More interactive work</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Explore my playable ads.
          </p>
        </div>
        <Link
          to="/ads/"
          className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-80"
        >
          Playable ads <ArrowUpRight size={14} />
        </Link>
      </div>
    </div>
  );
}
