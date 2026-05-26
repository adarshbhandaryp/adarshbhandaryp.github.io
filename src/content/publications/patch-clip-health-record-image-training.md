---
title: "PatchCLIP enables region specific contrastive health record and image joint training with patch embedding loss"
authors:
  - "Bhat S"
  - "Mansoor A"
  - "Georgescu B"
  - "et al."
venue: "Scientific Reports"
year: 2026
type: "journal"
status: "Published"
abstract: "PatchCLIP adds patch-level contrastive learning so image-text models can localize medical findings, not only classify whole images."
plainLanguageSummary: "The method teaches CLIP-style models to point to suspicious image regions by aligning text with local patch embeddings."
contribution: "The paper introduces a patch embedding loss for region-specific contrastive image-report training."
method: "Patch embeddings are contrasted with text embeddings, generating patch-wise prediction maps during inference in addition to global classification scores."
keyResults:
  - "PubMed reports state-of-the-art performance across eight chest X-ray abnormality detection tasks."
  - "Patch prediction maps reduced false positives at comparable sensitivity compared with saliency maps."
  - "The paper includes public code from Siemens Healthineers."
relevance: "Localization is essential for trustworthy medical AI; patch-level supervision bridges image-report pretraining and finding-level evidence."
links:
  paper: "https://www.nature.com/articles/s41598-026-52235-x"
  doi: "10.1038/s41598-026-52235-x"
  code: "https://github.com/Siemens-Healthineers/patch-clip"
image: "https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs41598-026-52235-x/MediaObjects/41598_2026_52235_Fig2_HTML.png"
imageAlt: "Patch-based output and evaluation diagram for PatchCLIP"
figureCaption: "Patch-based evaluation diagram from the open Scientific Reports article."
sourceUrl: "https://www.nature.com/articles/s41598-026-52235-x"
sourceLabel: "Nature source"
tags:
  - "Vision-Language Models"
  - "Contrastive Learning"
  - "Medical AI"
featured: false
bibtex: "TODO: Add BibTeX."
---
