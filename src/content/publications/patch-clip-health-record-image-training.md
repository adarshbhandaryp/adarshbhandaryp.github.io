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
plainLanguageSummary: "PatchCLIP extends CLIP-style medical image-text training with patch-level alignment to improve region-specific evidence localization."
contribution: "The paper introduces a patch embedding loss for region-specific contrastive image-report training."
method: "Patch embeddings are contrasted with text embeddings, generating patch-wise prediction maps during inference in addition to global classification scores."
keyResults:
  - "PubMed reports state-of-the-art performance across eight chest X-ray abnormality detection tasks."
  - "Patch prediction maps reduced false positives at comparable sensitivity compared with saliency maps."
  - "The paper includes public code from Siemens Healthineers."
relevance: "Patch-level localization strengthens the evidentiary value of medical image-text models by connecting global predictions to local image regions."
links:
  paper: "https://www.nature.com/articles/s41598-026-52235-x"
  doi: "10.1038/s41598-026-52235-x"
  code: "https://github.com/Siemens-Healthineers/patch-clip"
image: "/home/publication-figures/patchclip-diagram.svg"
imageAlt: "Patch-based output and evaluation diagram for PatchCLIP"
figureCaption: "Local visual summary of PatchCLIP patch-level contrastive learning."
sourceUrl: "https://www.nature.com/articles/s41598-026-52235-x"
sourceLabel: "Nature source"
tags:
  - "Vision-Language Models"
  - "Contrastive Learning"
  - "Medical AI"
featured: false
---
