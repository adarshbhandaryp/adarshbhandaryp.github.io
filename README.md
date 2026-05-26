# Adarsh Bhandary Panambur - Portfolio Website

Astro + Tailwind CSS academic portfolio for a medical imaging and deep learning researcher.

The site is configured for GitHub Pages at:

```text
https://adarshbhandaryp.github.io/home/
```

## Project Structure

- `src/pages/index.astro`: Homepage.
- `src/pages/publications/index.astro`: Filterable publication archive.
- `src/pages/publications/[slug].astro`: Publication mini-blog detail pages.
- `src/content/publications`: Markdown publication entries.
- `src/content/config.ts`: Publication content schema.
- `src/components`: Reusable UI sections and cards.
- `src/data`: Profile, project, experience, education, skill, and gallery data.
- `public`: Static assets served under the `/home/` base path.

## Local Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Open:

```text
http://localhost:4321/home/
```

Build for production:

```bash
npm run build
```

## Adding a Publication

1. Create a new Markdown file in `src/content/publications/`.

   Use a URL-safe filename, for example:

   ```text
   src/content/publications/my-new-paper.md
   ```

2. Fill the frontmatter fields.

   ```yaml
   ---
   title: "Paper Title"
   authors:
     - "Author A"
     - "Author B"
   venue: "Conference or Journal"
   year: 2026
   type: "conference"
   status: "Published"
   abstract: "TODO: Add abstract."
   plainLanguageSummary: "TODO: Add a short summary."
   contribution: "TODO: Add contribution summary."
   method: "TODO: Add method overview."
   keyResults:
     - "TODO: Add verified key result."
   relevance: "TODO: Explain clinical or research relevance."
   links:
     paper: "https://example.com/paper"
     code: "https://github.com/example/repo"
     doi: "10.xxxx/example"
     arxiv: "arXiv:0000.00000"
   image: "/home/example-thumbnail.jpg"
   imageAlt: "Thumbnail description"
   tags:
     - "Mammography"
     - "Deep Learning"
   featured: false
   bibtex: "TODO: Add BibTeX."
   ---
   ```

   Supported `type` values are `journal`, `conference`, `workshop`, `preprint`, `thesis`, and `patent`.

3. Add any thumbnail image to `public/`.

   Reference it with the GitHub Pages base path:

   ```yaml
   image: "/home/thumbnail.jpg"
   ```

4. Run:

   ```bash
   npm run build
   ```

## Deployment

The repository uses GitHub Actions for GitHub Pages deployment. Push to `main`, then ensure repository settings use:

```text
Settings > Pages > Build and deployment > GitHub Actions
```

The Astro base path is configured in `astro.config.mjs` as `/home`.
