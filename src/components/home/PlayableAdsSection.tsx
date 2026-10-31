import { useCallback, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { PlayableAdGrid } from "#components/collections/PlayableAdGrid";
import ads from "#data/ads/ads";

export default function PlayableAdsSection() {
  const [expanded, setExpanded] = useState(false);
  const section = useRef<HTMLElement>(null);

  const toggleExpanded = useCallback(() => {
    setExpanded(!expanded);
    if (expanded) {
      // Restore a useful position after removing the extra rows from the page.
      requestAnimationFrame(() => {
        section.current?.scrollIntoView({
          behavior: "instant",
          block: "start",
        });
      });
    }
  }, [expanded]);

  return (
    <section id="ads" ref={section} className="scroll-mt-8 space-y-8">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="flex w-full items-center">
          <div className="h-px flex-1 bg-linear-to-r from-transparent via-border to-transparent" />
          <span className="rounded-xl border bg-primary px-4 py-1 text-sm font-medium text-background">
            Playable Ads
          </span>
          <div className="h-px flex-1 bg-linear-to-l from-transparent via-border to-transparent" />
        </div>
        <h2 className="text-3xl! font-bold tracking-tighter sm:text-4xl!">
          A little play. A lasting impression.
        </h2>
        <p className="text-balance text-muted-foreground md:text-lg">
          Interactive ads I made or heavily contributed to. Open a card to try
          the experience.
        </p>
      </div>
      <div id="playable-ad-collection">
        {/* Extra cards and their media are only mounted when requested. */}
        <PlayableAdGrid limit={expanded ? undefined : 4} />
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls="playable-ad-collection"
          onClick={toggleExpanded}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border bg-card px-4 text-sm font-medium text-card-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {expanded ? "Show fewer" : `Show all ${ads.length} playable ads`}
          {expanded ? (
            <ChevronUp size={16} aria-hidden="true" />
          ) : (
            <ChevronDown size={16} aria-hidden="true" />
          )}
        </button>
      </div>
    </section>
  );
}
