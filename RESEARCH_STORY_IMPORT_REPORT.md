# Research Story Import Report

Generated: 2026-08-18

The thesis repository at `C:\Work\PhD_Thesis` was treated as read-only. No thesis file was edited, renamed, moved, built, or deleted. Source paths below are repository-relative and are not rendered on the website.

## Successfully matched

| Website publication | Thesis source | Evidence | Import decision |
| --- | --- | --- | --- |
| Attention-Guided Erasing for Enhanced Transfer Learning in Breast Abnormality Classification | `chapters/contributions/paper-03-attention-guided-erasing-breast-cancer.tex` | Method name, authors, DOI/public article, task definitions, figures, and result values | Full visual story |
| MammoBLIP | `chapters/contributions/paper-06-mammoblip.tex` | Exact title, authors, IEEE record, public FAU manuscript, dataset counts, and pipeline figure | Full visual story |
| Dataset-Informed Transfer Learning | `chapters/contributions/paper-05-dataset-informed-transfer-learning.tex` | Title, authors, arXiv record, framework figure, datasets, and results | Full visual story |
| Attention-Guided Erasing for Breast Density | `chapters/contributions/paper-02-attention-guided-erasing-density.tex` | Method name, VinDR task, and matching F1 values | Matched; existing fallback page retained because the journal AGE story supersedes it |
| Difficulty-Weighted Neighborhood Representation | `chapters/contributions/paper-04-difficulty-weighted-neighborhood-representation.tex` | DWNR name, CDD-CESM cohort, and matching method/results | Matched; queued for a later visual story |
| Random Histogram Equalization | `chapters/contributions/paper-01-random-histogram-equalization.tex` | Calcification task, method, and publication record | Matched; queued for a later visual story |
| BE-WISE | `chapters/contributions/paper-09-be-wise.tex` | Exact title, author list, and BVM status | Matched but withheld pending public-figure/result review |

## Figures imported

| Publication | Source figure | Website asset | Public-status evidence |
| --- | --- | --- | --- |
| AGE | `images/age_updated/AGE_Updated_Final.pdf` (`age_overview`) | `public/research/attention-guided-erasing-transfer-learning-breast-abnormality/age-method-overview.webp` | Open-access PMC journal article |
| AGE | `images/age_updated/attn_updated.pdf` (`age_augmentation`) | `public/research/attention-guided-erasing-transfer-learning-breast-abnormality/age-attention-heads.webp` | Open-access PMC journal article |
| AGE | `images/age_updated/qualitative.pdf` (`age_qualitative`) | `public/research/attention-guided-erasing-transfer-learning-breast-abnormality/age-qualitative-comparison.webp` | Open-access PMC journal article |
| DITL | `images/ditl/final_figure.pdf` | `public/research/dataset-informed-transfer-learning-framework/ditl-framework.webp` | Public arXiv preprint 2607.26043 |
| MammoBLIP | `.../MammoBLIP.pdf` (`fig:overview`) | `public/research/mammoblip-mammography-report-generation/mammoblip-pipeline.webp` | Public FAU-hosted manuscript |

All imported figures were copied out through high-resolution rendering and WebP optimization. Originals remain unchanged.

## Skipped figures

- MammoBLIP `GradCAM_Combined.png`, `imageB1.png`, `imageB2.png`, and `imageB3.png`: present beside the manuscript source but not referenced by the matched public thesis section; omitted because public provenance was not sufficiently clear.
- DITL result tables: not imported as screenshots because the method figure communicates the contribution more clearly and the web story uses only verified aggregate findings.
- BE-WISE method, ablation, per-class, and slice-profile figures: withheld until the user confirms that the corresponding figures and numerical results are public in the accepted BVM version.
- BE-WISER figures and results: no matching website publication record and the thesis source is currently unpublished/preprint-sensitive.
- Explainable mammography VLM figures/results: the closest website item is under internal review, so no thesis-only material was exposed.
- RHE EPS figures: not selected for the first implementation; AGE, MammoBLIP, and DITL were the stated priorities and offer stronger visual narratives.

## Content not published

- No thesis-only BE-WISE or BE-WISER numerical results.
- No figures from internal-review mammography foundation-model work.
- No patient identifiers, DICOM metadata, private hospital identifiers, or unpublished collaboration details.
- No inferred first-person contribution statements. The available sources establish authorship but do not provide a sufficiently explicit contribution taxonomy.

## Publications needing manual review

1. **BE-WISE** — approve the exact BVM figures/results that may be published before enabling its visual story.
2. **BE-WISER** — decide whether it should become a new website publication entry after a public preprint or paper is available.
3. **Towards Foundational Models / explainable mammography VLM work** — confirm public status and which results are cleared for release.
4. **MammoBLIP qualitative/Grad-CAM files** — confirm that the unreferenced local figures appeared in a public manuscript before import.

## Architecture added

- Optional backward-compatible `story` schema in `src/content/config.ts`.
- Reusable research figures, metric strips, narrative sections, takeaway chain, and keyboard-accessible lightbox.
- Enhanced-story labels and real paper thumbnails in publication cards and flagship homepage links.
- Existing publications without `story` data retain the prior detail layout and URLs.
