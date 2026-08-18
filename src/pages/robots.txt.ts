import { sitePath } from '../utils/site';

export function GET() {
  const sitemap = new URL(sitePath('sitemap.xml'), 'https://adarshbhandaryp.github.io').toString();
  return new Response(`User-agent: *\nAllow: ${sitePath()}\nSitemap: ${sitemap}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
