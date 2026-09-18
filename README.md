# Pulse Wall

A Sanity-powered showcase of repost campaigns and promoter spotlights. Built for the [Sanity Challenge](https://dev.to/devteam/join-the-sanity-challenge-2500-in-prizes-for-five-winners-514m) (Path Two: vibe-coded, Next.js + Sanity).

Pulse Wall is a spin-off of [Pulse](https://github.com/siyanbolagiggs1/pulse), a community-powered social promotion marketplace. Rather than reimplement Pulse's full backend (Go API, MongoDB, Paystack), this project reuses Pulse's Next.js UI and turns the campaign marketplace into pure content: every campaign and promoter spotlight lives in Sanity, editable in Studio, and renders live on the site with no redeploy.

## Stack

- Next.js 14 (App Router)
- Sanity Studio v3, embedded at `/studio`
- `next-sanity` for querying (GROQ) + live content
- Tailwind CSS + shadcn/ui components, carried over from Pulse

## What's content-driven

- **Campaigns** — title, business, platform, cover image, payout rate, and a `vibeScore` (0-100, how strange/fun the campaign is, purely for flavor)
- **Promoter spotlights** — name, avatar, quote, a reference back to the campaign they reposted

No real accounts, wallets, or payments here, this is the public showcase layer, illustrative numbers only.

## Setup

1. `npm install`
2. Create a free Sanity project at [sanity.io](https://sanity.io) (no cost — see the free tier)
3. Copy `.env.example` to `.env.local` and fill in `NEXT_PUBLIC_SANITY_PROJECT_ID`
4. `npm run dev`
5. Visit `/studio` and add a few campaigns and spotlights
6. Visit `/` to see them on the Wall

## Build process

This project was scaffolded and built with [Claude Code](https://claude.com/claude-code), reusing components from the [Pulse](https://github.com/siyanbolagiggs1/pulse) repo and wiring in Sanity from scratch. Build session notes/transcripts are linked in the challenge submission post.
