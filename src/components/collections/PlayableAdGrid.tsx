import { ProjectCard } from "#components/collections/ProjectCard";
import ads from "#data/ads/ads";
import { adPreviews } from "#data/ads/previews";
import { adDetails } from "#data/ads/details";

export function PlayableAdGrid({ limit }: { limit?: number }) {
  return (
    <section
      aria-label="Playable ad collection"
      className="grid grid-cols-1 gap-3 sm:grid-cols-2"
    >
      {ads.slice(0, limit).map((ad) => {
        const details = adDetails[ad.id];
        const preview = adPreviews[ad.id];
        return (
          <ProjectCard
            key={ad.id}
            landscape
            websiteLabel={null}
            title={details.title}
            href={ad.targetUrl}
            image={preview?.poster ?? ad.iconUrl}
            video={preview?.video}
            description={details.description}
            tags={details.tags}
          />
        );
      })}
    </section>
  );
}
