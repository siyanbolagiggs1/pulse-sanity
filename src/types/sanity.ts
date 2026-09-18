import type { Image } from "sanity";

export interface SanityCampaign {
  _id: string;
  title: string;
  business: string;
  platform: "instagram" | "twitter";
  targetUrl?: string;
  image?: Image;
  description?: string;
  payoutRate?: number;
  vibeScore?: number;
}

export interface SanitySpotlight {
  _id: string;
  name: string;
  avatar?: Image;
  quote: string;
  earned?: number;
  campaignTitle?: string;
}
