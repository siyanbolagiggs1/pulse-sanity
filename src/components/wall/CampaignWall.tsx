import { client } from "@/sanity/client";
import { campaignsQuery, spotlightsQuery } from "@/sanity/queries";
import type { SanityCampaign, SanitySpotlight } from "@/types/sanity";
import { CampaignCard } from "./CampaignCard";
import { SpotlightStrip } from "./SpotlightStrip";

export const revalidate = 60;

export async function CampaignWall() {
  const [campaigns, spotlights] = await Promise.all([
    client.fetch<SanityCampaign[]>(campaignsQuery),
    client.fetch<SanitySpotlight[]>(spotlightsQuery),
  ]);

  return (
    <section id="wall" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-center text-2xl font-bold sm:text-3xl">The Wall</h2>
      <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-muted-foreground">
        Live from Sanity. Add, edit, or retire a campaign in Studio and it shows up here, no redeploy.
      </p>

      {campaigns.length === 0 ? (
        <p className="mt-10 text-center text-sm text-muted-foreground">
          No campaigns yet.{" "}
          <a href="/studio" className="underline">
            Add one in Studio
          </a>
          .
        </p>
      ) : (
        <div className="mt-10 flex gap-4 overflow-x-auto pb-4">
          {campaigns.map((c) => (
            <CampaignCard key={c._id} campaign={c} />
          ))}
        </div>
      )}

      <SpotlightStrip spotlights={spotlights} />
    </section>
  );
}
