import { defineField, defineType } from "sanity";

export const campaign = defineType({
  name: "campaign",
  title: "Campaign",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "business", title: "Business name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "platform",
      title: "Platform",
      type: "string",
      options: { list: ["instagram", "twitter"] },
      validation: (r) => r.required(),
    }),
    defineField({ name: "targetUrl", title: "Target URL", type: "url" }),
    defineField({ name: "image", title: "Cover image", type: "image", options: { hotspot: true } }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({
      name: "payoutRate",
      title: "Payout rate (per repost, illustrative)",
      type: "number",
      description: "Shown as a display number only, no real payments happen here.",
    }),
    defineField({
      name: "vibeScore",
      title: "Vibe score",
      type: "number",
      description: "0-100. A playful, made-up score for how strange/fun this campaign is.",
      validation: (r) => r.min(0).max(100),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: { list: ["active", "completed"] },
      initialValue: "active",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "business", media: "image" },
  },
});
