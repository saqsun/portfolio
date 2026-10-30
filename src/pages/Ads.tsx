import { CollectionHeader } from "../components/collections/CollectionHeader";
import { CollectionLink } from "../components/collections/CollectionLink";
import { PlayableAdGrid } from "../components/collections/PlayableAdGrid";

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
