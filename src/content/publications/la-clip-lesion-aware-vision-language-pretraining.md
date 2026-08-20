---
title: "Lesion-Aware AI for Mammography: Multi-Dataset Pretraining with ROI-Guided Contrastive Learning and Clinical Image Retrieval"
authors:
  - "Adarsh Bhandary Panambur"
  - "Tri-Thien Nguyen"
  - "Siming Bayer"
  - "Andreas Maier"
venue: "European Congress of Radiology (ECR) 2026, scientific exhibit C-15780"
year: 2026
type: "conference"
status: "Accepted"
peerReviewed: true
abstract: "Contrastive image-text pretraining for mammography usually aligns a whole image with a whole report, which lets a model succeed on global cues while ignoring the lesion. This work introduces region-of-interest guidance into multi-dataset contrastive pretraining so that localized pathology contributes directly to the learned representation, and evaluates the resulting embeddings for clinical image retrieval."
plainLanguageSummary: "Global contrastive pretraining lets a mammography model align on breast density or view rather than on the lesion, because those cues are enough to match an image to its report. This work adds region-of-interest guidance to multi-dataset contrastive pretraining, so localized pathology has to contribute to the representation, and then tests the embeddings on clinical image retrieval — finding visually and diagnostically similar prior cases. Accepted as a scientific exhibit at ECR 2026; quantitative results are not yet publicly available."
contribution: "Brings lesion-region guidance into mammography image-text pretraining across multiple datasets, and evaluates the representation by retrieval rather than only by downstream classification."
method: "Region-of-interest guidance is incorporated into a contrastive image-text pretraining objective across multiple mammography datasets, and the resulting embeddings are evaluated for clinical image retrieval."
keyResults:
  - "Accepted as an ECR 2026 scientific exhibit (DOI 10.26044/ecr2026/C-15780). Quantitative results are not yet publicly available."
relevance: "Retrieval is a use case radiologists already have — find me a similar prior case — and it is a harder test of a representation than a single classification head."
limitation: "Conference exhibit; no peer-reviewed full paper and no public numbers yet."
links:
  doi: "10.26044/ecr2026/C-15780"
tags:
  - "Vision-Language Models"
  - "Foundation Models"
  - "Medical Imaging"
featured: false
citation: "A. Bhandary Panambur, T.-T. Nguyen, S. Bayer, A. Maier. Lesion-Aware AI for Mammography: Multi-Dataset Pretraining with ROI-Guided Contrastive Learning and Clinical Image Retrieval. ECR 2026, C-15780. doi:10.26044/ecr2026/C-15780"
---
