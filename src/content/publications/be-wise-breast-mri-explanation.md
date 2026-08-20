---
title: "BE-WISE: Breast MRI Evaluation with Weakly-Informed Slice-Level Explanation"
authors:
  - "Adarsh Bhandary Panambur"
  - "Tri-Thien Nguyen"
  - "Siming Bayer"
  - "Andreas Maier"
venue: "Bildverarbeitung für die Medizin (BVM) 2026, 10–17"
year: 2026
type: "conference"
status: "Published"
peerReviewed: true
abstract: "Breast MRI offers superior soft-tissue contrast and lesion conspicuity compared with mammography, but deep learning on volumetric multi-sequence exams normally requires fine-grained lesion or voxel annotations. BE-WISE asks whether a single radiologist-marked slice per examination is enough supervision for both diagnosis and localization. Pre-contrast, post-contrast and subtraction volumes are stacked as three channels and encoded slice-wise by a shared Swin-Tiny Transformer. A slice-level lesion predictor is trained against a Gaussian target centred on the annotated slice, while an attention-based multiple-instance-learning branch aggregates the same embeddings into a three-class breast-level diagnosis. On the multicenter ODELIA Breast MRI dataset the joint objective improves both breast-level discrimination and the spatial plausibility of the slice-level evidence."
plainLanguageSummary: "Breast MRI models usually need lesions outlined voxel by voxel, which does not scale. BE-WISE asks how far one annotated slice per exam gets you. Pre-contrast, post-contrast and subtraction volumes are stacked and encoded slice by slice with a shared Swin-Tiny transformer. One branch predicts a per-slice lesion probability against a Gaussian target centred on the radiologist's slice; the other pools the same embeddings by attention into a normal / benign / malignant decision. On the multicenter ODELIA dataset this reached test AUC 0.8683 and an ODELIA score of 0.7098, against 0.7968 and 0.5695 for a medical slice transformer baseline."
contribution: "A multi-sequence weakly supervised breast MRI framework in which one Gaussian-shaped slice target improves both the global diagnosis and where the model says the evidence is — without any voxel-level labels."
method: "Pre-contrast, late post-contrast and subtraction volumes stacked as 3 channels (B, 32, 3, 224, 224) and encoded by a shared Swin-Tiny transformer into (B, 32, 768) slice embeddings. A slice-level lesion predictor (LayerNorm → linear → GELU → dropout → linear → sigmoid) is trained with binary cross-entropy against a Gaussian target centred on the annotated slice, with all-zero targets for normal cases. An ABMIL attention branch aggregates the same embeddings for three-class classification. Joint loss L = α·L_global + (1−α)·L_slice; best Gaussian margin σ = 3, focal γ = 0.5."
keyResults:
  - "Test AUC 0.8683 (0.014) and ODELIA score 0.7098 (0.02) for BE-WISE with focal loss."
  - "Medical Slice Transformer baseline: AUC 0.7968 (0.019), ODELIA score 0.5695 (0.026) — BE-WISE is +7.2 and +14.0 percentage points ahead."
  - "Breast-level classifier alone with focal loss reached AUC 0.8447 (0.002) / ODELIA 0.6629 (0.010); adding slice-level guidance is what closes the remaining gap."
  - "Gains were statistically significant: p < 0.001 for AUC and p < 0.01 for the ODELIA score."
  - "Per-class AUC improves most for benign cases, the hardest of the three classes."
  - "Gaussian margin ablation peaks at σ = 3 (AUC 0.858, ODELIA 0.681); larger margins over-smooth."
relevance: "Annotation cost is the reason most breast MRI deep learning stays in the lab. One marked slice per exam is something a radiologist can realistically provide, and the resulting per-slice probability curve gives a reviewer somewhere to look."
limitation: "A single annotated slice gives approximate guidance only; annotation variability, lesion extent and size-dependent performance were out of scope. BE-WISE is positioned as an assistive cue, not an autonomous decision system."
links:
  paper: "https://link.springer.com/chapter/10.1007/978-3-658-51100-5_2"
  doi: "10.1007/978-3-658-51100-5_2"
tags:
  - "Explainable AI"
  - "Medical Imaging"
  - "Detection / Localization"
featured: true
citation: "A. Bhandary Panambur, T.-T. Nguyen, S. Bayer, A. Maier. BE-WISE: Breast MRI Evaluation with Weakly-informed Slice-level Explanation. Bildverarbeitung für die Medizin (BVM) 2026, pp. 10–17. doi:10.1007/978-3-658-51100-5_2"
story:
  readTime: "1 min read"
  shortTitle: "BE-WISE"
  researchQuestion: "How much can one annotated slice teach a 3D model?"
  storyIntro: "Give a volumetric breast MRI model exactly one radiologist-marked slice per exam, shape it into a Gaussian target, and ask whether both the diagnosis and the localization improve."
  heroFigure:
    src: "/research/be-wise-breast-mri-explanation/bewise-framework.webp"
    alt: "BE-WISE architecture: pre-contrast, post-contrast and subtraction MRI volumes stacked into a (32, 3, 224, 224) tensor, encoded by a shared Swin-Tiny slice encoder into (32, 768) embeddings, then split into a slice-level lesion predictor producing a per-slice probability curve and a breast-level classifier producing normal, benign or malignant"
    caption: "Three DCE sequences are stacked and encoded slice-wise. One branch predicts per-slice lesion probability against the Gaussian target (σ = 3); the other pools the same embeddings by attention into a three-class diagnosis."
    label: "FIG 1 / FRAMEWORK"
    sourceLabel: "My figure — from the paper and my PhD thesis"
    orientation: "landscape"
    width: 1800
    height: 879
  signalStats:
    - value: "500"
      label: "DCE breast MRI cases"
      detail: "ODELIA · multiple European institutions"
    - value: "01"
      label: "Annotated slice per exam"
      detail: "No voxel labels used"
    - value: "0.8683"
      label: "Test AUC"
      detail: "vs 0.7968 for the MST baseline"
      tone: "positive"
    - value: "+14.0"
      label: "pp ODELIA score"
      detail: "0.5695 → 0.7098"
      tone: "positive"
  sections:
    - id: "question"
      label: "01 / THE QUESTION"
      title: "Voxel labels do not scale; do we need them?"
      body:
        - "Breast MRI detection and segmentation pipelines rely on expert voxel-level annotation of 3D multi-sequence volumes. That is expensive, slow, and the reason most of this work never reaches a multicentre cohort."
        - "A board-certified radiologist can, however, mark the single slice that best shows the abnormality in seconds. Is that enough?"
    - id: "idea"
      label: "02 / THE IDEA"
      title: "Turn one slice into a soft target."
      body:
        - "The marked slice becomes the centre of a Gaussian over slice index, so neighbouring slices get partial credit — lesions do span consecutive slices. Normal exams get an all-zero target."
        - "A shared Swin-Tiny encoder feeds two heads: a per-slice lesion probability trained against that Gaussian, and an attention-pooled three-class breast-level classifier. One joint loss, both objectives."
      pipeline:
        - "Pre / post / subtraction"
        - "Swin-Tiny slice encoder"
        - "Slice embeddings"
        - "Gaussian slice target"
        - "ABMIL pooling"
        - "Normal / benign / malignant"
    - id: "tested"
      label: "03 / WHAT WE TESTED"
      title: "A multicentre challenge cohort, against progressively stronger baselines."
      body:
        - "500 DCE breast MRI cases from multiple European institutions in the ODELIA Breast MRI Challenge dataset, split at breast level with class and institutional balance preserved. Roughly 67% normal, 13% benign, 20% malignant."
        - "Baselines were built up in steps: a Medical Slice Transformer, then the breast-level classifier alone with cross-entropy, then with focal loss, then with slice-level guidance added."
      metrics:
        - value: "814"
          label: "Training breasts"
        - value: "102"
          label: "Validation breasts"
        - value: "104"
          label: "Test breasts"
        - value: "32"
          label: "Axial slices per breast"
          detail: "Resampled to 224 × 224"
    - id: "result"
      label: "04 / MAIN RESULT"
      title: "The slice signal helps the diagnosis, not just the picture."
      body:
        - "Each component adds something, but the slice-level branch is what pushes AUC past 0.86 and the ODELIA score past 0.70. Against the Medical Slice Transformer that is +7.2 pp AUC and +14.0 pp ODELIA score."
        - "The per-class breakdown shows the gain concentrated on benign cases — the class that is hardest to separate and the one where weak spatial guidance has the most to add."
      table:
        caption: "Test-set performance on the ODELIA cohort, mean (standard deviation). CE = cross-entropy."
        columns: ["Model", "Test AUC", "ODELIA score"]
        rows:
          - cells: ["Medical Slice Transformer (CE)", "0.7968 (0.019)", "0.5695 (0.026)"]
          - cells: ["Breast-level classifier only (CE)", "0.8147 (0.007)", "0.5899 (0.025)"]
          - cells: ["Breast-level classifier (focal)", "0.8447 (0.002)", "0.6629 (0.010)"]
          - cells: ["BE-WISE (CE)", "0.8580 (0.002)", "0.6810 (0.04)"]
          - cells: ["BE-WISE (focal)", "0.8683 (0.014)", "0.7098 (0.02)"]
            highlight: true
        footnote: "ODELIA score = mean of AUC, sensitivity at 90% specificity and specificity at 90% sensitivity. Significance: p < 0.001 (AUC), p < 0.01 (ODELIA)."
      figures:
        - src: "/research/be-wise-breast-mri-explanation/bewise-per-class-auc.webp"
          alt: "Grouped bar chart of per-class test AUC with error bars for normal, benign and malignant, comparing the breast-level classifier with cross-entropy, with focal loss, and BE-WISE with focal loss"
          caption: "Per-class AUC on the test set. The benign class — the hardest to discriminate — gains the most from slice-level guidance."
          label: "FIG 2 / PER-CLASS AUC"
          sourceLabel: "My figure — from the paper and my PhD thesis"
          orientation: "landscape"
          width: 1400
          height: 770
        - src: "/research/be-wise-breast-mri-explanation/bewise-margin-ablation.webp"
          alt: "Two line plots showing test AUC and test ODELIA score against the Gaussian margin parameter sigma from 1 to 7, both peaking at sigma equals 3"
          caption: "Margin ablation: performance peaks at σ = 3. Wider Gaussians over-smooth and lose localization precision."
          label: "FIG 3 / MARGIN ABLATION"
          sourceLabel: "My figure — from the paper and my PhD thesis"
          orientation: "landscape"
          width: 1600
          height: 615
    - id: "evidence"
      label: "05 / WHAT THE MODEL SHOWS"
      title: "The per-slice curve is the explanation."
      body:
        - "For correct cases the predicted probability peaks at or next to the slice the radiologist marked. For misclassified cases the curve is flatter or shifted — which is itself informative, because it shows where the model was looking when it got the answer wrong."
        - "Normal exams stay uniformly low, so the branch is not simply firing on every volume."
      figures:
        - src: "/research/be-wise-breast-mri-explanation/bewise-slice-profiles.webp"
          alt: "Two side-by-side slice probability plots over 32 slices: a correctly classified malignant case where the predicted probability peaks near the radiologist-annotated slice, and a misclassified malignant case where the activation is shifted away from it"
          caption: "Left: malignant case predicted malignant — the predicted probability (red) tracks the Gaussian prior (green) around the annotated slice (dashed). Right: malignant case predicted benign — the activation is shifted."
          label: "FIG 4 / SLICE PROFILES"
          sourceLabel: "My figure — from the paper and my PhD thesis"
          orientation: "landscape"
          width: 1800
          height: 367
    - id: "matters"
      label: "06 / WHY IT MATTERS"
      title: "Cheap supervision, inspectable output."
      body:
        - "One slice per exam is an annotation budget a clinical partner can actually agree to, and the result is a model whose evidence a radiologist can check in one glance rather than trust on faith."
        - "It also gives a human-in-the-loop path: verify, correct or discard the suggested slice, and feed that back."
  limitation: "One marked slice is approximate guidance, not lesion delineation — it will not capture multifocal disease or non-mass enhancement well. Annotation variability and lesion-size effects were not analysed, and no reader study was run."
---
