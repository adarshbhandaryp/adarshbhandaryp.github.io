---
title: "Re-thinking Mammography Transfer Learning: The Dataset-Informed Transfer Learning (DITL) Framework for Breast Cancer Screening and Lesion Diagnosis"
authors:
  - "Adarsh Bhandary Panambur"
  - "Siming Bayer"
  - "Andreas Maier"
venue: "arXiv preprint (accepted at the International Conference on Computer Vision and Image Processing, CVIP 2025 — in print)"
year: 2026
type: "preprint"
status: "Preprint · CVIP 2025 in print"
peerReviewed: false
abstract: "Enhancing downstream mammography classification is difficult across both small ROI datasets and large screening cohorts because of severe class imbalance. Conventional transfer learning rarely models dataset-specific characteristics, and recent neighbourhood-informed strategies rely on rigid formulations that limit scalability. DITL derives three properties from a self-supervised feature space — per-sample difficulty from k-nearest-neighbour label purity, the mean of the nearest same-class neighbours, and the mean of the farthest different-class neighbours — with k set adaptively to the square root of the dataset size. These drive an adaptive difficulty-weighted cross-entropy (A-DWCE, hyperparameter-free) and an adaptive neighbourhood triplet loss (A-NR-Triplet, learnable margin). Across four cohorts and five tasks, DITL improves over cross-entropy, focal loss and prior work with negligible training overhead."
plainLanguageSummary: "My earlier neighbourhood-based loss worked on one small dataset but did not scale: the difficulty weights were hand-set, the triplet margin was fixed, and the number of neighbours had to be tuned per dataset. DITL replaces all three with quantities the dataset supplies itself — difficulty from nearest-neighbour label purity in a self-supervised feature space, a learnable margin, and k set to the square root of the dataset size. Neighbour statistics are precomputed offline, so training cost barely changes. Across VinDr-Mammo, CDD-CESM and two CBIS-DDSM subsets it beats cross-entropy, focal loss and my own previous best, reaching macro F1 0.609 on VinDr-Mammo breast density."
contribution: "Removes the three hand-tuned parts of dataset-aware training — heuristic difficulty weights, fixed triplet margin, manually chosen neighbour count — and shows the resulting hyperparameter-free objective scales from 116-image ROI test sets to a 4,000-image screening test set."
method: "DINO (ViT-S/16) or SimCLR (ResNet-18) pretraining, then offline extraction of three dataset properties per sample using FAISS with k = ceil(sqrt(N)): difficulty = 1 − k-NN label purity (normalized within each mini-batch), the mean nearest same-class feature, and the mean farthest different-class features. Training objective L_DITL = L_A-DWCE + L_A-NR-Triplet, where the triplet margin is softplus-parameterized and learned. Adam, learning rate 5e-6, early stopping on validation loss."
keyResults:
  - "VinDr-Mammo breast density (test n=4,000): macro F1 0.576 (cross-entropy) → 0.584 (focal) → 0.591 (my earlier AGE method) → 0.609 with DITL, p < 0.0001; accuracy 0.786 → 0.838."
  - "VinDr-Mammo BI-RADS categorization (test n=4,000): macro F1 0.570 → 0.585 with DITL (p < 0.0001)."
  - "CDD-CESM ROI classification with DINO features (test n=116): accuracy 0.838 → 0.860, F1 0.799 → 0.835, AUC 0.931 → 0.943."
  - "CBIS-DDSM calcification ROIs: F1 0.685 → 0.693; mass ROIs: F1 0.561 → 0.572."
  - "Focal loss still holds the best AUC on the calcification and mass ROI tasks — DITL does not win every metric, and the paper says so."
relevance: "Every cohort has its own imbalance and difficulty structure. Letting the objective read that structure off the data, instead of asking a researcher to guess it, is what makes a training recipe transferable between a 1,000-image ROI set and a 20,000-image screening cohort."
limitation: "Absolute gains are modest on some tasks, focal loss retains the best AUC on two of them, and the work is confined to mammography and to retrospective public datasets."
links:
  paper: "https://arxiv.org/abs/2607.26043"
  arxiv: "arXiv:2607.26043"
tags:
  - "Foundation Models"
  - "Self-Supervised Learning"
  - "Medical Imaging"
featured: true
citation: "A. Bhandary Panambur, S. Bayer, A. Maier. Re-thinking Mammography Transfer Learning: The Dataset-Informed Transfer Learning (DITL) Framework for Breast Cancer Screening and Lesion Diagnosis. arXiv:2607.26043, 2026."
story:
  readTime: "1 min read"
  shortTitle: "Dataset-Informed Transfer Learning"
  researchQuestion: "What if the dataset sets its own hyperparameters?"
  storyIntro: "Take the three quantities I previously hand-tuned — sample difficulty, triplet margin, neighbour count — and derive all of them from the data's own self-supervised feature space instead."
  heroFigure:
    src: "/research/dataset-informed-transfer-learning-framework/ditl-framework.webp"
    alt: "DITL framework diagram: whole-image and ROI mammography inputs feed a three-stage circle of self-supervised pretraining without labels, dataset property extraction with labels, and dataset-informed transfer learning; a feature-space scatter and a nearest-neighbour analysis panel show difficulty level, k-nearest and k-farthest features"
    caption: "Three stages: self-supervised pretraining with no labels, offline extraction of difficulty and neighbour statistics from the feature space, then transfer learning driven by those properties."
    label: "FIG 1 / FRAMEWORK"
    sourceLabel: "My figure — from the preprint and my PhD thesis"
    orientation: "portrait"
    width: 1200
    height: 1343
  signalStats:
    - value: "04"
      label: "Cohorts"
      detail: "VinDr-Mammo · CDD-CESM · CBIS-DDSM ×2"
    - value: "05"
      label: "Tasks"
      detail: "Whole-image and ROI level"
    - value: "0.609"
      label: "VinDr density macro F1"
      detail: "Previous best of mine: 0.591"
      tone: "positive"
    - value: "0"
      label: "Loss hyperparameters to tune"
      detail: "k, margin and weights are all derived"
      tone: "positive"
  sections:
    - id: "question"
      label: "01 / THE QUESTION"
      title: "My own previous method did not scale."
      body:
        - "The earlier neighbourhood-representation loss worked, but it needed a hand-set difficulty weight, a fixed triplet margin found by sweeping, and a neighbour count chosen per dataset. On a 116-image ROI set that is tolerable; on a 20,000-image screening cohort it is not."
        - "It had also only ever been evaluated on one dataset."
    - id: "idea"
      label: "02 / THE IDEA"
      title: "Read the three quantities off the feature space."
      body:
        - "Difficulty becomes one minus the label purity of a sample's k nearest neighbours in the self-supervised feature space, normalized per mini-batch — no confidence heuristic, no γ to tune. The triplet margin becomes a learnable softplus parameter. And k is simply the square root of the dataset size."
        - "All neighbour statistics are computed once, offline, with FAISS. Training cost is essentially unchanged."
      pipeline:
        - "SSL pretraining"
        - "Feature bank"
        - "k = √N neighbours"
        - "Difficulty + neighbours"
        - "A-DWCE + A-NR-Triplet"
        - "Fine-tuned model"
    - id: "tested"
      label: "03 / WHAT WE TESTED"
      title: "From a 116-image ROI set to a 4,000-image screening test set."
      body:
        - "Five tasks across four cohorts: breast density and BI-RADS categorization on VinDr-Mammo, plus ROI classification on CDD-CESM and the CBIS-DDSM calcification and mass subsets. Both DINO/ViT and SimCLR/ResNet backbones."
        - "Baselines were cross-entropy, focal loss, published prior state of the art, and my own earlier AGE result on the same test split. Five runs each."
      metrics:
        - value: "4,000"
          label: "VinDr test images"
          detail: "Density and BI-RADS"
        - value: "116"
          label: "CDD-CESM test ROIs"
        - value: "326"
          label: "Calcification test ROIs"
        - value: "378"
          label: "Mass test ROIs"
    - id: "result"
      label: "04 / MAIN RESULT"
      title: "It beats my previous best, and it admits where it loses."
      body:
        - "On the largest cohort, VinDr-Mammo breast density, macro F1 goes from 0.576 with plain cross-entropy to 0.609 with DITL — past focal loss and past my own AGE result of 0.591 — with accuracy up from 0.786 to 0.838."
        - "It is not a clean sweep: focal loss keeps the best AUC on the calcification and mass ROI tasks. The gains are largest exactly where they should be, in the small-data ROI settings and on under-represented classes."
      table:
        caption: "VinDr-Mammo breast density, test set n = 4,000. Mean values as reported."
        columns: ["Method", "Accuracy", "Macro F1", "AUC"]
        rows:
          - cells: ["Cross-entropy", "0.786", "0.576", "0.928"]
          - cells: ["Focal loss", "0.802", "0.584", "0.940"]
          - cells: ["Nguyen et al. (prior SOTA)", "—", "0.552", "—"]
          - cells: ["AGE (my earlier work)", "0.796", "0.591", "0.931"]
          - cells: ["A-DWCE only", "0.837", "0.596", "0.940"]
          - cells: ["DITL", "0.838", "0.609", "0.942"]
            highlight: true
        footnote: "Standard deviations and the full ROI-level tables for both DINO and SimCLR backbones are in the preprint. Two-tailed unpaired t-test, p < 0.0001."
    - id: "matters"
      label: "05 / WHY IT MATTERS"
      title: "A recipe you can move between cohorts."
      body:
        - "The practical value is not the extra 1.8 points of F1. It is that the same objective runs unchanged on a small ROI dataset and a national screening cohort, because there is nothing left to tune."
        - "It also improves recognition of the rare, high-risk categories that matter most in screening and that plain cross-entropy quietly ignores."
  limitation: "This is a preprint and has not completed peer review. Gains are modest on some tasks, focal loss still wins AUC on two of them, and everything here is mammography on retrospective public data."
---
