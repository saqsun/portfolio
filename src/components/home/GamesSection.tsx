import BlurFade from "#components/effects/BlurFade";
import { GameGrid } from "#components/collections/GameGrid";

export default function GamesSection() {
  return (
    <section id="games" className="scroll-mt-8">
      <BlurFade delay={0.52}>
        <div className="flex min-h-0 flex-col gap-y-8">
          <div className="flex flex-col items-center justify-center gap-y-4">
            <div className="flex w-full items-center">
              <div className="h-px flex-1 bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
              <div className="z-10 rounded-xl border bg-primary px-4 py-1">
                <span className="text-sm font-medium text-background">
                  Games
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
          <GameGrid />
        </div>
      </BlurFade>
    </section>
  );
}
