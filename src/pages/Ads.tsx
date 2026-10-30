import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { ProjectCard } from "../components/project-card";
import BlurFade from "../components/magicui/blur-fade";
import ads from "../data/AdsData";
import { adPreviews } from "../data/AdPreviews";
import { adDetails } from "../data/AdDetails";

export default function Ads() {
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
                Playable Ads
              </span>
              <div className="h-px flex-1 bg-linear-to-l from-transparent via-border to-transparent" />
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              A little play. A lasting impression.
            </h1>
            <p className="text-balance text-muted-foreground md:text-lg">
              Interactive ads I made or heavily contributed to. Open a card to
              try the experience.
            </p>
          </div>
        </BlurFade>
      </header>
      <section
        aria-label="Playable ad collection"
        className="grid grid-cols-1 gap-3 sm:grid-cols-2"
      >
        {ads.map((ad) => (
          <ProjectCard
            key={ad.id}
            templateStyle
            landscape
            websiteLabel={null}
            title={adDetails[ad.id].title}
            href={ad.targetUrl}
            image={adPreviews[ad.id]?.poster ?? ad.iconUrl}
            video={adPreviews[ad.id]?.video}
            description={adDetails[ad.id].description}
            tags={adDetails[ad.id].tags}
          />
        ))}
      </section>
      <div className="flex flex-col items-start justify-between gap-4 rounded-xl border p-6 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-base font-semibold">Explore the full games</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Released titles across browser, mobile, and PC.
          </p>
        </div>
        <Link
          to="/games/"
          className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-80"
        >
          View games <ArrowUpRight size={14} />
        </Link>
      </div>
    </div>
  );
}
