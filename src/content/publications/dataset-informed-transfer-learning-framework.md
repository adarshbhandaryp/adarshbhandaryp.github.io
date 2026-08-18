---
title: "Re-thinking Mammography Transfer Learning: The Dataset-Informed Transfer Learning (DITL) Framework for Breast Cancer Screening and Lesion Diagnosis"
authors:
  - "Bhandary Panambur A"
  - "Bayer S"
  - "Maier A"
venue: "International Conference on Computer Vision and Image Processing"
year: 2025
type: "conference"
status: "In print / arXiv preprint"
abstract: "DITL integrates dataset-derived difficulty signals with neighborhood-based triplet supervision to improve mammography classification across large whole-image cohorts and smaller lesion-level datasets."
plainLanguageSummary: "DITL adapts transfer learning to the structure and difficulty of each mammography dataset instead of treating every training sample and target task identically."
contribution: "Introduces a dataset-informed objective that combines adaptive difficulty-weighted cross-entropy with adaptive neighborhood representation triplet learning."
method: "Self-supervised features estimate local label purity for per-sample weighting, while a learnable-margin triplet objective encourages intra-class compactness and inter-class separation."
keyResults:
  - "Reported statistically significant gains across accuracy, F1-score, and AUC on large-scale whole-image breast-density classification (p < 0.0001)."
  - "Reported consistent, statistically significant improvements on smaller region-of-interest datasets (p < 0.0001)."
  - "Accepted and presented at CVIP 2025; the manuscript was submitted to arXiv on 28 July 2026."
relevance: "Dataset-informed model transfer can reduce brittle generalization in mammography tasks where target labels are expensive and domain shifts are common."
links:
  paper: "https://arxiv.org/abs/2607.26043"
  pdf: "https://arxiv.org/pdf/2607.26043"
  arxiv: "arXiv:2607.26043"
image: "/home/cvip2025.jpeg"
imageAlt: "Presentation on Dataset-Informed Transfer Learning at CVIP 2025"
figureCaption: "Oral presentation of DITL at CVIP 2025, IIT Ropar, India."
sourceUrl: "https://arxiv.org/abs/2607.26043"
sourceLabel: "arXiv preprint"
tags:
  - "Mammography"
  - "Transfer Learning"
  - "Breast Cancer Screening"
featured: true
bibtex: "@article{panambur2026ditl, title={Re-thinking Mammography Transfer Learning: The Dataset-Informed Transfer Learning (DITL) Framework for Breast Cancer Screening and Lesion Diagnosis}, author={Bhandary Panambur, Adarsh and Bayer, Siming and Maier, Andreas}, journal={arXiv preprint arXiv:2607.26043}, year={2026}}"
---
