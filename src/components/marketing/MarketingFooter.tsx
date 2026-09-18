import Link from "next/link";

export function MarketingFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div>
            <p className="text-lg font-bold text-primary">Pulse Wall</p>
            <p className="text-sm text-muted-foreground">A Sanity-powered showcase of repost campaigns</p>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-6">
            <a href="#wall" className="text-sm text-muted-foreground hover:text-foreground">The Wall</a>
            <Link href="/studio" className="text-sm text-muted-foreground hover:text-foreground">Studio</Link>
            <a
              href="https://github.com/siyanbolagiggs1/pulse-sanity"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              GitHub
            </a>
          </nav>
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground sm:text-left">
          Built for the{" "}
          <a
            href="https://dev.to/devteam/join-the-sanity-challenge-2500-in-prizes-for-five-winners-514m"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-foreground"
          >
            Sanity Challenge
          </a>
          . © {new Date().getFullYear()} Pulse Wall.
        </p>
      </div>
    </footer>
  );
}
