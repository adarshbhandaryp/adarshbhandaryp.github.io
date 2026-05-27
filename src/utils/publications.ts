import { getCollection, type CollectionEntry } from 'astro:content';
import { sitePath } from './site';

export type PublicationEntry = CollectionEntry<'publications'>;

export async function getPublications() {
  const publications = await getCollection('publications');

  return publications.sort((a, b) => {
    if (b.data.year !== a.data.year) return b.data.year - a.data.year;
    return a.data.title.localeCompare(b.data.title);
  });
}

export function getPublicationUrl(slug: string) {
  return sitePath(`publications/${slug}/`);
}

export function getPublicationSummary(publication: PublicationEntry) {
  const summary = publication.data.plainLanguageSummary || publication.data.contribution;
  return summary.replace(/^TODO:\s*/i, 'TODO: ');
}

export function externalPublicationLinks(publication: PublicationEntry) {
  const links = publication.data.links;

  return [
    links.paper && { label: 'Paper', href: links.paper },
    links.pdf && { label: 'PDF', href: links.pdf },
    links.doi && { label: 'DOI', href: links.doi.startsWith('http') ? links.doi : `https://doi.org/${links.doi}` },
    links.arxiv && { label: 'arXiv', href: links.arxiv.startsWith('http') ? links.arxiv : `https://arxiv.org/abs/${links.arxiv.replace(/^arXiv:/i, '')}` },
    links.code && { label: 'Code', href: links.code },
    links.project && { label: 'Project', href: links.project },
    links.slides && { label: 'Slides', href: links.slides },
    links.poster && { label: 'Poster', href: links.poster },
  ].filter(Boolean) as { label: string; href: string }[];
}
