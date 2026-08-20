---
title: "BE-WISER: Class-Aware Weak Slice-Level Supervision for Breast MRI"
authors:
  - "Adarsh Bhandary Panambur"
  - "Tri-Thien Nguyen"
  - "Saahil Islam"
  - "Michael Uder"
  - "Sebastian Bickelhaupt"
  - "Andreas Maier"
  - "Siming Bayer"
venue: "Research Square preprint (in review)"
year: 2026
type: "preprint"
status: "Preprint · in review"
peerReviewed: false
abstract: "BE-WISE showed that a single radiologist-marked slice per breast MRI examination can supervise both diagnosis and coarse lesion localization, but its slice-level head was binary: lesion or no lesion. BE-WISER extends that supervision to class-aware slice semantics, so each slice inside the weak lesion region inherits the breast-level class (benign or malignant) and everything else is labelled normal. A shared SwinV2-Tiny slice encoder feeds an attention-based multiple-instance-learning branch for the breast-level decision and a three-class slice head trained with Gaussian-weighted cross-entropy. On the latest multicenter ODELIA release the framework improves both classification and localization over BE-WISE, and a two-stage pseudo-annotation protocol recovers most of the performance when only half the exams have a radiologist-marked slice."
plainLanguageSummary: "BE-WISE could say which slice contained something; BE-WISER says what that something is. Each slice inside the Gaussian region around the radiologist's marked slice inherits the exam's class — benign or malignant — while the rest are labelled normal, so the slice head becomes three-class instead of binary. On the latest multicenter ODELIA release (926 / 230 / 292 examinations from six institutions) this reached breast-level AUC 0.864 and an ODELIA score of 0.699, against 0.807 and 0.591 for a breast-level baseline. Localization also improved: Hit@1 rose from 0.554 to 0.632 and the mean slice distance fell from 2.838 to 2.505 slices."
contribution: "Turns weak slice supervision from a binary lesion cue into explicit normal / benign / malignant slice semantics, and shows that pseudo weak slice labels can stand in for radiologist annotations on half the cohort at a cost of about 4.5 points of ODELIA score."
method: "Shared ImageNet-pretrained SwinV2-Tiny encoder over 36 axial slices per breast (pre-contrast, latest post-contrast, early subtraction as 3 channels). An ABMIL branch pools slice embeddings into a three-class breast-level logit; a parallel slice head (LayerNorm → linear → GELU → dropout → linear, softmax over classes) produces per-slice class probabilities. Slices with Gaussian target t_i ≥ 0.5 inherit the breast-level class, others are normal, and the slice loss is cross-entropy weighted by (1 + t_i). L = α·L_global + (1−α)·L_slice with α as an EMA-controlled dynamic parameter in [0.3, 0.9]. Five seeds, AdamW, LR 5e-6, batch size 8."
keyResults:
  - "Breast-level, independent test set of 292 examinations, focal loss: AUC 0.864 (0.004) and ODELIA score 0.699 (0.027)."
  - "Against the breast-level baseline (0.807 / 0.591) that is +5.7 pp AUC and +10.8 pp ODELIA score; against the Medical Slice Transformer (0.753 / 0.523), +11.1 pp and +17.6 pp."
  - "Over BE-WISE, +1.2 pp AUC and +2.6 pp ODELIA score with focal loss."
  - "Localization improved over BE-WISE: mean slice distance 2.838 → 2.505 slices, Hit@1 0.554 → 0.632, Hit@5 0.804 → 0.843."
  - "Reduced-label protocol: 50% slice-annotated only scores 0.595; adding the remaining 50% with breast-level labels only reaches 0.641; adding pseudo weak slice supervision reaches 0.654, against 0.699 for the fully annotated cohort."
  - "Paired testing showed the ODELIA-score improvements over the baselines were significant at p < 0.0001."
relevance: "It answers the practical question a clinical partner asks first: what happens if we can only annotate half the exams? The pseudo-supervision result gives a defensible answer rather than an assumption."
limitation: "Supervision still comes from one representative slice per exam, so it provides weak localization rather than lesion delineation and may not capture multifocal disease or non-mass enhancement. Pseudo weak annotations inherit errors from the first-stage model, and external validation and reader studies are still needed."
links:
  paper: "https://www.researchsquare.com/article/rs-9855612/v1"
  doi: "10.21203/rs.3.rs-9855612/v1"
tags:
  - "Explainable AI"
  - "Detection / Localization"
  - "Medical Imaging"
featured: false
citation: "A. Bhandary Panambur, T.-T. Nguyen, S. Islam, M. Uder, S. Bickelhaupt, A. Maier, S. Bayer. BE-WISER: Class-Aware Weak Slice-Level Supervision for Breast MRI. Research Square preprint, 2026. doi:10.21203/rs.3.rs-9855612/v1"
story:
  readTime: "1 min read"
  shortTitle: "BE-WISER"
  researchQuestion: "What if only half the exams can be annotated?"
  storyIntro: "Give the slice-level head a class instead of a yes/no, then test what happens when a radiologist marks only half the cohort and a first-stage model guesses the rest."
  heroFigure:
    src: "/research/be-wiser-class-aware-slice-supervision/bewiser-framework.webp"
    alt: "BE-WISER architecture: pre-contrast, post-contrast and subtraction inputs go through a SwinV2-Tiny slice encoder into slice embeddings, which split into a breast-level classifier module with ABMIL attention, feature aggregation, global head and global logits, and a weak slice-level lesion localization branch with a slice head, slice logits and per-slice class probabilities over normal, benign and malignant"
    caption: "The slice head now outputs three classes per slice rather than a single lesion probability, so slice-level evidence carries benign / malignant semantics."
    label: "FIG 1 / FRAMEWORK"
    sourceLabel: "My figure — from the preprint"
    orientation: "landscape"
    width: 1429
    height: 737
  signalStats:
    - value: "292"
      label: "Test examinations"
      detail: "Six institutions · ODELIA latest release"
    - value: "0.864"
      label: "Breast-level AUC"
      detail: "Baseline: 0.807"
      tone: "positive"
    - value: "2.505"
      label: "Mean slice distance"
      detail: "BE-WISE: 2.838 slices"
      tone: "positive"
    - value: "50%"
      label: "Slice annotations needed"
      detail: "Pseudo supervision covers the rest"
  sections:
    - id: "question"
      label: "01 / THE QUESTION"
      title: "Binary slice supervision throws information away."
      body:
        - "BE-WISE trained its slice head to answer one question: is there a lesion on this slice? But the exam-level label already says whether that lesion is benign or malignant, and that information was going unused at slice level."
        - "The second question was harder and more practical: how much does performance drop if only half the exams get a radiologist-marked slice?"
    - id: "idea"
      label: "02 / THE IDEA"
      title: "Give every slice a class, not a flag."
      body:
        - "Slices inside the Gaussian region around the marked slice inherit the exam's class; the remainder are labelled normal, and normal exams are normal throughout. The slice head becomes a three-way softmax, weighted by (1 + t) so slices nearer the marked one count more."
        - "For the reduced-label setting, a first-stage model trained on the annotated half predicts pseudo weak slice targets for the unannotated half."
      pipeline:
        - "36 slices × 3 sequences"
        - "SwinV2-Tiny encoder"
        - "ABMIL breast branch"
        - "3-class slice head"
        - "Gaussian-weighted loss"
        - "Diagnosis + slice evidence"
    - id: "tested"
      label: "03 / WHAT WE TESTED"
      title: "A larger, more heterogeneous ODELIA release."
      body:
        - "926 training, 230 validation and 292 test examinations from six institutions — a bigger and more institutionally diverse cohort than BE-WISE used. The test set was evaluated exactly once, from the checkpoint with the best validation AUC."
        - "Baselines: a Medical Slice Transformer, a breast-level-only classifier sharing the same encoder, and BE-WISE itself, each with cross-entropy and with focal loss, over five seeds."
      metrics:
        - value: "926"
          label: "Training examinations"
        - value: "462 / 464"
          label: "Reduced-label split"
          detail: "Slice-annotated vs treated as unlabelled"
        - value: "05"
          label: "Random seeds"
        - value: "36"
          label: "Slices per breast"
          detail: "224 × 224, DCE pre / post / subtraction"
    - id: "result"
      label: "04 / MAIN RESULT"
      title: "Better diagnosis, better localization, and a usable annotation budget."
      body:
        - "With focal loss, BE-WISER reaches AUC 0.864 and ODELIA score 0.699 — 10.8 points of ODELIA score above the breast-level baseline and 2.6 above BE-WISE. Localization improves in the same direction: Hit@1 0.554 → 0.632."
        - "The reduced-label result is the one worth quoting to a clinical partner. Annotating half the cohort and pseudo-labelling the rest gets to 0.654, most of the way to the fully annotated 0.699."
      table:
        caption: "Breast-level classification on the independent 292-exam test set, mean (standard deviation) over five seeds."
        columns: ["Model", "AUC (CE)", "ODELIA (CE)", "AUC (focal)", "ODELIA (focal)"]
        rows:
          - cells: ["Medical Slice Transformer", "0.746 (0.038)", "0.503 (0.031)", "0.753 (0.032)", "0.523 (0.063)"]
          - cells: ["Breast-level baseline", "0.796 (0.076)", "0.578 (0.117)", "0.807 (0.037)", "0.591 (0.069)"]
          - cells: ["BE-WISE", "0.849 (0.010)", "0.669 (0.016)", "0.852 (0.006)", "0.673 (0.005)"]
          - cells: ["BE-WISER", "0.856 (0.017)", "0.692 (0.043)", "0.864 (0.004)", "0.699 (0.027)"]
            highlight: true
        footnote: "ODELIA score = mean of AUC, sensitivity at 90% specificity and specificity at 90% sensitivity. Paired testing: p < 0.0001 for BE-WISER over the baselines."
      figures:
        - src: "/research/be-wiser-class-aware-slice-supervision/bewiser-odelia-summary.webp"
          alt: "Dot plot of ODELIA score comparing breast-level baselines with cross-entropy and focal loss, BE-WISE, BE-WISER, and three reduced-label variants labelled 50% S, 50% S plus 50% NS, and 50% S plus 50% PS"
          caption: "Full-data ladder on the left; the reduced-label experiment on the right. S = slice-annotated, NS = breast-level labels only, PS = pseudo weak slice supervision."
          label: "FIG 2 / RESULTS"
          sourceLabel: "My figure — from the preprint"
          orientation: "landscape"
          width: 1075
          height: 488
    - id: "evidence"
      label: "05 / WHAT THE MODEL SHOWS"
      title: "The predicted peak lands on the radiologist's slice."
      body:
        - "For correctly localized cases the predicted positive-class probability rises exactly where the Gaussian target sits. Averaged over the test set the BE-WISER profiles are smoother and more lesion-centred than BE-WISE's, with fewer off-target spikes on malignant cases."
        - "Even for exams the model classifies as normal by mistake, the slice probability often still peaks near the annotated lesion slice — which is precisely the case where a reviewer would want to look."
      figures:
        - src: "/research/be-wiser-class-aware-slice-supervision/bewiser-localized-malignant.webp"
          alt: "Three rows of breast MRI, each showing pre-contrast, post-contrast and subtraction images alongside a slice probability profile in which the predicted red curve peaks under the green Gaussian target at the radiologist-indicated slice"
          caption: "Correctly localized malignant examples. Green: Gaussian weak target. Red: predicted positive-class probability. Dashed line: the slice the radiologist marked."
          label: "FIG 3 / LOCALIZATION"
          sourceLabel: "My figure — from the preprint"
          orientation: "landscape"
          width: 1500
          height: 993
    - id: "matters"
      label: "06 / WHY IT MATTERS"
      title: "It prices the annotation."
      body:
        - "Most weak-supervision papers show that weak labels work. This one quantifies what halving the annotation budget costs, which is the number that decides whether a multicentre study happens."
        - "The slice-level output stays what it was designed to be: decision-support evidence for a radiologist to check, not an autonomous read."
  limitation: "Still a preprint, still one slice per exam, and pseudo weak annotations inherit the first-stage model's mistakes. External validation and reader studies have not been done."
---
