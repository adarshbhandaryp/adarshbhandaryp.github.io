---
title: "Attention-Guided Erasing: A Novel Augmentation Method for Enhancing Downstream Breast Density Classification"
authors:
  - "Bhandary Panambur A"
  - "Yu H"
  - "Bhat S"
  - "Madhu P"
  - "Bayer S"
  - "Maier A"
venue: "BVM 2024 - German Workshop on Medical Image Computing, Erlangen, Germany"
year: 2024
type: "workshop"
status: "Published"
abstract: "This paper introduces Attention-Guided Erasing for breast density classification, using DINO attention maps to guide erasing during transfer learning."
plainLanguageSummary: "Attention-Guided Erasing improves breast-density transfer learning by preserving attention-derived tissue regions while stochastically suppressing less informative background."
contribution: "The work presents AGE as a targeted augmentation strategy for BI-RADS breast density classification in mammography."
method: "DINO attention maps from a Vision Transformer are used to identify relevant mammography regions; background regions are erased with random probabilities during transfer learning."
keyResults:
  - "On VinDr-Mammo, the reported mean F1-score was 0.5910."
  - "The method outperformed no-AGE and random-erasing baselines reported at 0.5594 and 0.5691 mean F1."
  - "The improvement was reported as statistically significant with p < 0.0001."
relevance: "Breast density directly affects screening sensitivity, making robust automated density assessment relevant for risk stratification and workflow support."
links:
  paper: "https://www.springerprofessional.de/attention-guided-erasing/26751488"
  arxiv: "arXiv:2401.03912"
image: "/home/bvm2024.jpeg"
imageAlt: "Oral presentation on Attention-Guided Erasing at BVM 2024"
figureCaption: "Presentation photo from BVM 2024. Method details are linked via arXiv."
sourceUrl: "https://arxiv.org/abs/2401.03912"
sourceLabel: "arXiv source"
tags:
  - "Mammography"
  - "Data Augmentation"
  - "Breast Density"
featured: true
---
