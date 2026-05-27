---
title: "Attention-Guided Erasing for Enhanced Transfer Learning in Breast Abnormality Classification"
authors:
  - "Panambur AB"
  - "Bhat S"
  - "Yu H"
  - "Madhu P"
  - "Bayer S"
  - "Maier A"
venue: "International Journal of Computer Assisted Radiology and Surgery"
year: 2025
type: "journal"
status: "Published"
abstract: "This journal article evaluates Attention-Guided Erasing as a self-supervised, task-specific augmentation strategy across image-level and patch-level mammography classification tasks."
plainLanguageSummary: "AGE uses self-supervised attention maps to guide stochastic erasing, preserving task-relevant mammography regions during transfer learning."
contribution: "The journal article tests whether Attention-Guided Erasing generalizes beyond a single task across digital mammography, contrast-enhanced mammography, and patch-level abnormality classification."
method: "A DINO-pretrained Vision Transformer produces attention-head maps. Selected maps are converted to binary masks, used for stochastic erasing, and evaluated during downstream transfer learning."
keyResults:
  - "Reported statistically significant mean F1-score gains across four of five evaluated classification tasks."
  - "Image-level gains were reported for breast density in digital mammography and malignancy in contrast-enhanced mammography."
  - "The mass classification task showed only marginal improvement, marking a useful boundary case."
relevance: "The work targets a practical transfer-learning limitation in medical imaging: improving task-specific representation learning when annotated data are limited."
links:
  paper: "https://pubmed.ncbi.nlm.nih.gov/39812891/"
  doi: "10.1007/s11548-024-03317-6"
image: "/home/publication-figures/age-method-overview.jpg"
imageAlt: "Overview diagram of the Attention-Guided Erasing methodology"
figureCaption: "Method overview from the open-access AGE journal article."
sourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11929719/"
sourceLabel: "PMC source"
tags:
  - "Mammography"
  - "Transfer Learning"
  - "Breast Abnormality Classification"
featured: true
bibtex: "TODO: Add BibTeX."
---
