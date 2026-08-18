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

const researchFigure = z.object({
  src: z.string(),
  alt: z.string(),
  caption: z.string(),
  label: z.string().optional(),
  sourceUrl: z.string().url().optional(),
  sourceLabel: z.string().optional(),
  orientation: z.enum(['landscape', 'portrait', 'square']).default('landscape'),
  width: z.number().int().positive().optional(),
  height: z.number().int().positive().optional(),
});

const storyMetric = z.object({
  value: z.string(),
  label: z.string(),
  detail: z.string().optional(),
  tone: z.enum(['default', 'positive', 'caution']).default('default'),
});

const storyCard = z.object({
  label: z.string(),
  title: z.string(),
  body: z.string(),
  tone: z.enum(['default', 'positive', 'caution']).default('default'),
});

const storySection = z.object({
  id: z.string(),
  label: z.string(),
  title: z.string(),
  duration: z.string().optional(),
  body: z.array(z.string()).default([]),
  pipeline: z.array(z.string()).optional(),
  metrics: z.array(storyMetric).optional(),
  comparisons: z.array(storyMetric).optional(),
  figures: z.array(researchFigure).optional(),
  cards: z.array(storyCard).optional(),
});

const visualStory = z.object({
  readTime: z.string(),
  shortTitle: z.string(),
  researchQuestion: z.string(),
  storyIntro: z.string(),
  heroFigure: researchFigure,
  signalStats: z.array(storyMetric).default([]),
  sections: z.array(storySection),
  personalContribution: z.string().optional(),
  takeaway: z.array(storyCard),
});

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
    figureCaption: z.string().optional(),
    sourceUrl: z.string().url().optional(),
    sourceLabel: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    citation: z.string().optional(),
    bibtex: z.string().optional(),
    story: visualStory.optional(),
  }),
});

export const collections = { publications };
