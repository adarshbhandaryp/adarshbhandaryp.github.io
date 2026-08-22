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
  return publication.data.plainLanguageSummary;
}

/**
 * Venue, year and status as parts of one line, without repeating themselves.
 * Several venue strings already carry the year ("BVM 2026, 10-17") or the status
 * ("Manuscript in preparation - no venue yet"), so those parts are dropped rather
 * than printed twice. Work that has not been peer reviewed always says so.
 */
export function publicationMetaParts(publication: PublicationEntry) {
  const { venue, year, status, peerReviewed } = publication.data;
  const haystack = venue.toLowerCase();
  const parts = [venue];

  if (!haystack.includes(String(year))) parts.push(String(year));

  for (const part of (status ?? '').split('·').map((piece) => piece.trim()).filter(Boolean)) {
    if (!haystack.includes(part.toLowerCase())) parts.push(part);
  }

  if (!peerReviewed && !parts.join(' ').toLowerCase().includes('not peer reviewed')) {
    parts.push('not peer reviewed');
  }

  return parts;
}

export function publicationMetaLine(publication: PublicationEntry) {
  return publicationMetaParts(publication).join(' · ');
}

export function externalPublicationLinks(publication: PublicationEntry) {
  const links = publication.data.links;

  return [
    links.paper && { label: 'Paper', href: links.paper },
    links.doi && { label: 'DOI', href: links.doi.startsWith('http') ? links.doi : `https://doi.org/${links.doi}` },
    links.arxiv && { label: 'arXiv', href: links.arxiv.startsWith('http') ? links.arxiv : `https://arxiv.org/abs/${links.arxiv.replace(/^arXiv:/i, '')}` },
    links.pdf && { label: 'PDF', href: links.pdf },
    links.code && { label: 'Code', href: links.code },
    links.project && { label: 'Project', href: links.project },
    links.slides && { label: 'Slides', href: links.slides },
    links.poster && { label: 'Poster', href: links.poster },
  ].filter(Boolean) as { label: string; href: string }[];
}
