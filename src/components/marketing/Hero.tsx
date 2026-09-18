import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 text-center sm:py-28">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Community-powered social promotion,
        <br className="hidden sm:block" /> curated live from Sanity
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
        Businesses run repost campaigns. Promoters earn money sharing them.
        Every campaign and spotlight on this page is content, edited in Sanity Studio, no rebuild required.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button asChild size="lg"><a href="#wall">Browse the Wall</a></Button>
        <Button asChild size="lg" variant="outline"><Link href="/studio">Open Studio</Link></Button>
      </div>
    </section>
  );
}
