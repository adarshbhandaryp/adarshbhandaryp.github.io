import { getPublications } from '../utils/publications';
import { sitePath } from '../utils/site';

const origin = 'https://adarshbhandaryp.github.io';
const absolute = (path = '') => new URL(sitePath(path), origin).toString();

export async function GET() {
  const publications = await getPublications();
  const pages = [
    { url: absolute(), priority: '1.0' },
    { url: absolute('publications/'), priority: '0.9' },
    { url: absolute('cv/'), priority: '0.9' },
    { url: absolute('talks/'), priority: '0.6' },
    ...publications.map((publication) => ({ url: absolute(`publications/${publication.slug}/`), priority: publication.data.featured ? '0.8' : '0.6' })),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((page) => `  <url><loc>${page.url}</loc><lastmod>2026-08-18</lastmod><priority>${page.priority}</priority></url>`).join('\n')}
</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
