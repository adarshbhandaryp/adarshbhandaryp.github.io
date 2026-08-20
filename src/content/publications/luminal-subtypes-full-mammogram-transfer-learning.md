---
title: "Classification of Luminal Subtypes in Full Mammogram Images Using Transfer Learning"
authors:
  - "Adarsh Bhandary Panambur"
  - "Prathmesh Madhu"
  - "Andreas Maier"
venue: "arXiv preprint 2301.09282"
year: 2023
type: "preprint"
status: "Preprint"
peerReviewed: false
abstract: "Molecular subtype is normally established from tissue, not imaging. This preprint asks whether a full-field mammogram carries any signal for luminal versus non-luminal classification when only image-level labels are available. A ResNet-18 is transferred from a breast abnormality classification task and fine-tuned on the public CMMD dataset."
plainLanguageSummary: "Molecular subtype is determined from tissue, so the question here is whether the mammogram itself carries any usable signal for it. A ResNet-18 was transferred from a breast abnormality classification task and fine-tuned on the public CMMD dataset for luminal versus non-luminal classification, using image-level labels only — no tumour outlines. It reached mean AUC 0.6688 and mean F1 0.6693 on the test set, a statistically significant improvement over the baseline (p < 0.0001). That is well above chance and well below anything clinically usable, which is the honest reading of the result."
contribution: "Establishes a weakly supervised baseline for image-level luminal subtype prediction on a public mammography dataset, and reports it as a modest signal rather than a clinical capability."
method: "A ResNet-18 pretrained on a breast abnormality classification task is fine-tuned for luminal versus non-luminal classification on full-field CMMD mammograms using image-level labels only."
keyResults:
  - "Mean AUC 0.6688 and mean F1 0.6693 on the CMMD test set."
  - "The improvement over the baseline was statistically significant at p < 0.0001."
  - "Uses image-level labels only, with no pixel-level tumour annotation."
relevance: "A useful reference point for how much molecular information a mammogram plausibly carries under weak supervision — and a reminder that a significant improvement can still be far from a clinically useful one."
limitation: "A preprint with no peer review, a single public dataset, and performance around AUC 0.67 that is not clinically actionable."
links:
  paper: "https://arxiv.org/abs/2301.09282"
  arxiv: "arXiv:2301.09282"
tags:
  - "Medical Imaging"
  - "Self-Supervised Learning"
featured: false
citation: "A. Bhandary Panambur, P. Madhu, A. Maier. Classification of Luminal Subtypes in Full Mammogram Images Using Transfer Learning. arXiv:2301.09282, 2023."
---
