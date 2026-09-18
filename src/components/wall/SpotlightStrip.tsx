import Image from "next/image";
import { urlFor } from "@/sanity/image";
import type { SanitySpotlight } from "@/types/sanity";

export function SpotlightStrip({ spotlights }: { spotlights: SanitySpotlight[] }) {
  if (spotlights.length === 0) return null;

  return (
    <div className="mt-16">
      <h3 className="text-center text-lg font-semibold text-muted-foreground">Promoter spotlights</h3>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {spotlights.map((s) => {
          const avatarUrl = s.avatar ? urlFor(s.avatar).width(80).height(80).url() : null;
          return (
            <div key={s._id} className="flex gap-3 rounded-lg border border-border bg-card p-4">
              {avatarUrl ? (
                <Image src={avatarUrl} alt="" width={40} height={40} className="h-10 w-10 shrink-0 rounded-full object-cover" />
              ) : (
                <div className="h-10 w-10 shrink-0 rounded-full bg-muted" />
              )}
              <div>
                <p className="text-sm font-medium">{s.name}</p>
                {s.campaignTitle && <p className="text-xs text-muted-foreground">on {s.campaignTitle}</p>}
                <p className="mt-1 text-sm italic text-muted-foreground">&ldquo;{s.quote}&rdquo;</p>
                {s.earned !== undefined && (
                  <p className="mt-1 text-xs text-muted-foreground">~${s.earned} earned</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
