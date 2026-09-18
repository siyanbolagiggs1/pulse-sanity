import Link from "next/link";
import Image from "next/image";
import { Link2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { urlFor } from "@/sanity/image";
import type { SanityCampaign } from "@/types/sanity";

function vibeLabel(score?: number) {
  if (score === undefined) return null;
  if (score >= 80) return "unhinged";
  if (score >= 60) return "delightfully weird";
  if (score >= 40) return "solidly normal";
  return "very serious";
}

export function CampaignCard({ campaign }: { campaign: SanityCampaign }) {
  const imageUrl = campaign.image ? urlFor(campaign.image).width(400).height(240).url() : null;

  return (
    <Link
      href={campaign.targetUrl || "#"}
      target={campaign.targetUrl ? "_blank" : undefined}
      rel={campaign.targetUrl ? "noreferrer" : undefined}
      className="flex w-64 shrink-0 snap-start flex-col overflow-hidden rounded-lg border border-border bg-card transition hover:bg-accent"
    >
      <div className="relative h-32 w-full shrink-0 bg-muted">
        {imageUrl ? (
          <Image src={imageUrl} alt="" fill className="object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <Link2 className="h-6 w-6 text-muted-foreground" />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-3">
        <div className="flex items-center justify-between gap-2">
          <p className="line-clamp-2 text-sm font-medium">{campaign.title}</p>
          <Badge variant="secondary" className="shrink-0 capitalize">{campaign.platform}</Badge>
        </div>
        <p className="text-xs text-muted-foreground">{campaign.business}</p>
        <div className="mt-auto flex items-center justify-between pt-1 text-xs text-muted-foreground">
          <span>{campaign.payoutRate ? `~$${campaign.payoutRate}/repost` : ""}</span>
          {vibeLabel(campaign.vibeScore) && (
            <span className="italic">{vibeLabel(campaign.vibeScore)}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
