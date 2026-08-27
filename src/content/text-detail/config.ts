import { z, defineCollection } from "astro:content";
import { needsTranslation } from "../shared";

export const textDetailCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      featuredImage: image().optional(),
      featuredImageAlt: z.string().optional(),
      needsTranslation: needsTranslation(),
    }),
});
