import { groq } from "next-sanity";

export const campaignsQuery = groq`
  *[_type == "campaign" && status == "active"] | order(vibeScore desc) {
    _id,
    title,
    business,
    platform,
    targetUrl,
    image,
    description,
    payoutRate,
    vibeScore
  }
`;

export const spotlightsQuery = groq`
  *[_type == "spotlight"] | order(_createdAt desc) {
    _id,
    name,
    avatar,
    quote,
    earned,
    "campaignTitle": campaign->title
  }
`;
