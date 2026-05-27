---
title: "AUCReshaping: Improved Sensitivity at High-Specificity"
authors:
  - "Bhat S"
  - "Mansoor A"
  - "Georgescu B"
  - "Panambur AB"
  - "et al."
venue: "Scientific Reports"
year: 2023
type: "journal"
status: "Published"
abstract: "AUCReshaping is a training strategy for improving sensitivity at clinically important high-specificity operating points."
plainLanguageSummary: "AUCReshaping optimizes classifier behavior near clinically relevant high-specificity operating points rather than treating the full ROC curve uniformly."
contribution: "The paper introduces a loss modification that gives extra weight to positive samples misclassified near high-specificity thresholds."
method: "During training, the method identifies errors at selected high-specificity decision thresholds, boosts those samples, and backpropagates an augmented cross-entropy loss."
keyResults:
  - "The paper reports sensitivity improvements across multiple test datasets."
  - "The method is evaluated for chest X-ray and mammography-style classification settings."
  - "The authors emphasize that optimal boosting depends on the chosen operating point and dataset."
relevance: "Many clinical AI systems are deployed under strict false-positive constraints, making operating-point-aware optimization directly relevant."
links:
  paper: "https://www.nature.com/articles/s41598-023-48482-x"
  doi: "10.1038/s41598-023-48482-x"
image: "/home/publication-figures/aucreshaping-roc.svg"
imageAlt: "Illustration of ROC curve reshaping toward higher sensitivity at high specificity"
figureCaption: "Local visual summary of the high-specificity ROC operating point described in the Scientific Reports article."
sourceUrl: "https://www.nature.com/articles/s41598-023-48482-x"
sourceLabel: "Nature source"
tags:
  - "Model Evaluation"
  - "Sensitivity"
  - "High Specificity"
featured: false
bibtex: "TODO: Add BibTeX."
---
