import { CollectionHeader } from "../components/collection-header";
import { CollectionLink } from "../components/collection-link";
import { PlayableAdGrid } from "../components/playable-ad-grid";

export default function Ads() {
  return (
    <div className="mx-auto max-w-2xl space-y-12">
      <CollectionHeader
        label="Playable Ads"
        title="A little play. A lasting impression."
        description="Interactive ads I made or heavily contributed to. Open a card to try the experience."
      />
      <PlayableAdGrid />
      <CollectionLink
        title="Explore the full games"
        description="Released titles across browser, mobile, and PC."
        href="/games/"
        label="View games"
      />
    </div>
  );
}
