import { CollectionHeader } from "../components/collection-header";
import { CollectionLink } from "../components/collection-link";
import { GameGrid } from "../components/game-grid";

export default function Games() {
  return (
    <div className="mx-auto max-w-2xl space-y-12">
      <CollectionHeader
        label="Games"
        title="Built to be played"
        description="Released titles I made or heavily contributed to, across browser, mobile, and PC."
      />
      <GameGrid />
      <CollectionLink
        title="More interactive work"
        description="Explore my playable ads."
        href="/ads/"
        label="Playable ads"
      />
    </div>
  );
}
