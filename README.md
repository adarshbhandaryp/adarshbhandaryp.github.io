# adarshbhandaryp.github.io

Personal research and engineering site for **Adarsh Bhandary Panambur** — AI Research Scientist at NHR@FAU and PhD researcher at the Pattern Recognition Lab, FAU Erlangen-Nürnberg.

Built with Astro + Tailwind, deployed to GitHub Pages at:

```text
https://adarshbhandaryp.github.io/
```

## Editorial rules this site follows

These are deliberate constraints, not stylistic preferences. Breaking them is what makes a research site untrustworthy.

1. **No synthetic scientific imagery.** Every figure on a publication page is a figure I made, taken from the paper or from my PhD thesis. Where no real figure exists, the entry uses a clean text-only card. `npm run validate:stories` fails the build if an entry points at a generated illustration.
2. **Exact reported values only.** Numbers in tables and metric strips are transcribed from the paper or thesis, with the dataset, metric name and test-set size stated. No recomputed "improvements", no cherry-picking.
3. **Unreviewed work is labelled.** Anything without peer review carries `peerReviewed: false` and a status that says so, and the page shows a visible banner.
4. **Limitations are published.** Every entry carries a `limitation` field, and the visual briefs end on it rather than on a headline number.

## Project structure

- `src/pages/index.astro` — homepage
- `src/pages/publications/index.astro` — filterable publication archive
- `src/pages/publications/[slug].astro` — publication pages (1-minute visual brief, or text-only)
- `src/pages/cv/index.astro` — print-friendly CV
- `src/pages/talks/index.astro` — conference presentation photos
- `src/content/publications/` — one Markdown entry per publication
- `src/content/config.ts` — publication schema (Zod)
- `src/components/` — page sections
- `src/components/research/` — figure, table, metric and story components
- `src/data/` — profile, expertise, AI-systems chain, evolution, skills, experience, education
- `public/research/<slug>/` — real research figures, one folder per publication
- `scripts/validate-stories.mjs` — content QC (see below)

## Local development

```bash
npm install
npm run dev          # http://localhost:4321/
npm run validate:stories
npm run build
npm run check        # validate:stories && build
```

## Content QC

`npm run validate:stories` checks every publication entry before a build and exits non-zero on failure:

- required frontmatter fields present
- every figure `src` exists on disk under `public/`
- no entry references the removed `/publication-figures/` synthetic illustrations
- alt text is a real description, not a stub
- `plainLanguageSummary` is 60–140 words (target 80–120)
- entries with `peerReviewed: false` say so in `status`
- no marketing vocabulary ("groundbreaking", "revolutionary", …) and no leftover placeholders
- warns about files in `public/research/` that no entry references

## Adding a publication

1. Create `src/content/publications/my-paper.md`.
2. Fill the frontmatter. Minimum for a text-only entry:

   ```yaml
   ---
   title: "Exact published title"
   authors: ["Author A", "Author B"]
   venue: "Journal or proceedings, volume, pages"
   year: 2026
   type: "journal"          # journal | conference | workshop | preprint | thesis | patent
   status: "Published"
   peerReviewed: true
   abstract: "The real abstract."
   plainLanguageSummary: "80-120 words: problem, method, what was evaluated, main finding, why it matters."
   contribution: "What is new."
   method: "How, with the hyperparameters that were actually stated."
   keyResults:
     - "Exact reported value, with dataset and metric."
   relevance: "Why it matters."
   limitation: "What it does not show."
   links:
     paper: "https://…"
     doi: "10.xxxx/xxxxx"
   tags: ["Self-Supervised Learning", "Medical Imaging"]
   featured: false
   ---
   ```

3. For a 1-minute visual brief, add the `story` block (see any of the nine entries that have one). Put figures in `public/research/<slug>/` and give each a real caption plus a `sourceLabel` saying where it came from.
4. Keep `tags` inside the canonical set so the archive filter stays short: Self-Supervised Learning, Vision-Language Models, Multimodal AI, Foundation Models, Medical Imaging, Explainable AI, Clinical Validation, LLM / GenAI, Detection / Localization.
5. Run `npm run check`.

## Deployment

GitHub Actions deploys on push to `main`. The repository must be named `adarshbhandaryp.github.io` so Pages serves at the account root; no Astro `base` is configured. `src/pages/home/[...path].astro` keeps the old `/home/…` URLs redirecting to the current ones.

## Site status

The global accuracy notice has been removed (site reviewed and links verified before use in applications). To bring one back, restore the `.site-notice` block in `src/components/Nav.astro` and set `--notice-height` in `src/styles/global.css`.
