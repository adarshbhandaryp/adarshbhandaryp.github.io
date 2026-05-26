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
plainLanguageSummary: "Instead of optimizing only the global AUC, this method nudges the model toward the part of the ROC curve that matters most for low false-positive workflows."
contribution: "The paper introduces a loss modification that gives extra weight to positive samples misclassified near high-specificity thresholds."
method: "During training, the method identifies errors at selected high-specificity decision thresholds, boosts those samples, and backpropagates an augmented cross-entropy loss."
keyResults:
  - "The paper reports sensitivity improvements across multiple test datasets."
  - "The method is evaluated for chest X-ray and mammography-style classification settings."
  - "The authors emphasize that optimal boosting depends on the chosen operating point and dataset."
relevance: "Clinical classifiers are often deployed at strict false-positive limits; this work directly optimizes that operating region."
links:
  paper: "https://www.nature.com/articles/s41598-023-48482-x"
  doi: "10.1038/s41598-023-48482-x"
image: "https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs41598-023-48482-x/MediaObjects/41598_2023_48482_Fig4_HTML.png"
imageAlt: "Illustration of ROC curve reshaping toward higher sensitivity at high specificity"
figureCaption: "ROC operating-point illustration from the open Scientific Reports article."
sourceUrl: "https://www.nature.com/articles/s41598-023-48482-x"
sourceLabel: "Nature source"
tags:
  - "Model Evaluation"
  - "Sensitivity"
  - "High Specificity"
featured: false
bibtex: "TODO: Add BibTeX."
---
