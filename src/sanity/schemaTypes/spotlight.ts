import { defineField, defineType } from "sanity";

export const spotlight = defineType({
  name: "spotlight",
  title: "Promoter Spotlight",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Promoter name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "avatar", title: "Avatar", type: "image", options: { hotspot: true } }),
    defineField({ name: "quote", title: "Quote", type: "text", validation: (r) => r.required() }),
    defineField({
      name: "campaign",
      title: "Campaign reposted",
      type: "reference",
      to: [{ type: "campaign" }],
    }),
    defineField({
      name: "earned",
      title: "Earned (illustrative)",
      type: "number",
      description: "Display number only, no real money.",
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "quote", media: "avatar" },
  },
});
