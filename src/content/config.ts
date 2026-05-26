import { defineCollection, z } from 'astro:content';

const publicationLinks = z
  .object({
    paper: z.string().url().optional(),
    code: z.string().url().optional(),
    project: z.string().url().optional(),
    pdf: z.string().url().optional(),
    doi: z.string().optional(),
    arxiv: z.string().optional(),
    slides: z.string().url().optional(),
    poster: z.string().url().optional(),
  })
  .default({});

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    year: z.number(),
    type: z.enum(['journal', 'conference', 'workshop', 'preprint', 'thesis', 'patent']),
    status: z.string().optional(),
    abstract: z.string(),
    plainLanguageSummary: z.string(),
    contribution: z.string(),
    method: z.string(),
    keyResults: z.array(z.string()),
    relevance: z.string(),
    links: publicationLinks,
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    citation: z.string().optional(),
    bibtex: z.string().optional(),
  }),
});

export const collections = { publications };
