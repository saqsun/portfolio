import { ProjectCard } from "./project-card";
import ads from "../data/AdsData";
import { adPreviews } from "../data/AdPreviews";
import { adDetails } from "../data/AdDetails";

export function PlayableAdGrid() {
  return (
    <section
      aria-label="Playable ad collection"
      className="grid grid-cols-1 gap-3 sm:grid-cols-2"
    >
      {ads.map((ad) => {
        const details = adDetails[ad.id];
        const preview = adPreviews[ad.id];
        return (
          <ProjectCard
            key={ad.id}
            templateStyle
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
