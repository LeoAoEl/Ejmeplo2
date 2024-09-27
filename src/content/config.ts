import { defineCollection, z } from "astro:content";

const pets = defineCollection({
  schema: z.object({
    name: z.string(),
    age: z.number(),
    dueno: z.string(),
    image: z.string(),
    description: z.string(),
  }),
});

export const collections = { pets };
