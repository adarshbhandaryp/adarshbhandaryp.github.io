# ADARSH // RESEARCH OS

Astro + Tailwind CSS research website for Adarsh Bhandary Panambur, spanning medical AI, multimodal foundation models, clinical translation, and HPC systems.

The site is configured for GitHub Pages at:

```text
https://adarshbhandaryp.github.io/
```

## Project Structure

- `src/pages/index.astro`: Cinematic research homepage.
- `src/pages/cv/index.astro`: Fast, printable recruiter CV.
- `src/pages/publications/index.astro`: Filterable publication archive.
- `src/pages/publications/[slug].astro`: Publication mini-blog detail pages.
- `src/content/publications`: Markdown publication entries.
- `src/content/config.ts`: Publication content schema.
- `src/components`: Reusable narrative, interaction, navigation, and publication components.
- `src/data`: Shared profile, impact, current work, capability, experience, and research graph data.
- `public`: Static assets served from the site root.

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
http://localhost:4321/
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
   image: "/example-thumbnail.jpg"
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
   image: "/thumbnail.jpg"
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

The repository must be named `adarshbhandaryp.github.io` so GitHub Pages serves this site at the account root. No Astro `base` is configured because the site deploys at `/`.

## Updating Current Work

Edit `src/data/current.json`. Each public item uses four fields:

```json
{
  "title": "",
  "description": "",
  "type": "Research",
  "status": "Active"
}
```

`Ask Adarsh` is a static, privacy-preserving interface. Its current answer index lives in `src/components/AskAdarsh.astro` and can later be replaced by a backend without changing the dialog UI.
