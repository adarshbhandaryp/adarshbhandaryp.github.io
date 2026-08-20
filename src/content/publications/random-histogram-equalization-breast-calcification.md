---
title: "Effect of Random Histogram Equalization on Breast Calcification Analysis Using Deep Learning"
authors:
  - "Adarsh Bhandary Panambur"
  - "Prathmesh Madhu"
  - "Andreas Maier"
venue: "Bildverarbeitung für die Medizin (BVM) 2022, Heidelberg, 173–178"
year: 2022
type: "workshop"
status: "Published"
peerReviewed: true
abstract: "Contrast enhancement is a standard pre-processing step for whole mammograms, but applying it to small calcification patches can destroy class-specific information: calcifications appear as bright spots, and equalizing such a patch amplifies noise along with signal. This paper treats histogram equalization as a stochastic augmentation instead of deterministic pre-processing, applying it with probability P during training only. On the CBIS-DDSM calcification subset a ResNet-50 trained with P = 0.4 improves over both no equalization and always-on equalization, and Grad-CAM shows the resulting model attending to the high-intensity calcification spots rather than diffuse surrounding tissue."
plainLanguageSummary: "Histogram equalization is usually applied to every mammogram before training. On small calcification crops that backfires — the bright spots that define the class get flattened into noise. This paper applies equalization only during training and only with probability P, so the model sees both versions. On the CBIS-DDSM calcification test set the three-class F1 rose from 0.6855 without equalization to 0.7071 at P = 0.4, while always equalizing dropped it to 0.6322. Grad-CAM makes the difference visible: at P = 0.4 the model attends to the calcification cluster; without it, attention is a diffuse blob."
contribution: "Shows that an image-enhancement operation is better used as a stochastic augmentation than as fixed pre-processing for patch-level calcification analysis, and demonstrates the mechanism with Grad-CAM rather than only with metrics."
method: "A pre-trained ResNet-50 with a 2- or 3-class head, inputs resized bilinearly to 224 × 224 and normalized to [0, 1]. Fixed augmentations: random horizontal and vertical flip and rotation at P = 0.5, random erasing at P = 0.1. Histogram equalization is applied at P ∈ {0, 0.2, 0.4, 0.6, 0.8, 1} — training-only for intermediate values, at both train and test time for P = 1. Weighted binary cross-entropy, Adam, LR 3.2e-6, weight decay 1e-4, 30 epochs, batch size 16, five runs per setting."
keyResults:
  - "Three-class task (malignant / benign / benign without callback) on the 326-image CBIS-DDSM test set: accuracy 0.6632 → 0.6840 and F1 0.6855 → 0.7071 from P = 0 to P = 0.4 (p < 0.0001)."
  - "Two-class task (follow-up / no follow-up): accuracy 0.9215 → 0.9325 and F1 0.8838 → 0.8973 (p < 0.0001)."
  - "Always-on equalization (P = 1, applied at train and test) was the worst setting: two-class F1 0.8103 and three-class F1 0.6322 — clearly below doing nothing."
  - "Dataset: 1,546 CBIS-DDSM calcification ROIs split 80:20 for train and validation, plus an independent 326-image test set."
relevance: "Calcification morphology and distribution are what distinguish precancerous from benign findings, and screening sensitivity for calcifications is low. Any pre-processing step that quietly erases that morphology is worth catching before it reaches a model."
limitation: "The data are digitized scanned-film mammograms from CBIS-DDSM, not digital mammography, and no ablation against other augmentation types was run."
links:
  paper: "https://link.springer.com/chapter/10.1007/978-3-658-36932-3_38"
  doi: "10.1007/978-3-658-36932-3_38"
  arxiv: "arXiv:2205.01684"
tags:
  - "Medical Imaging"
  - "Explainable AI"
featured: false
citation: "A. Bhandary Panambur, P. Madhu, A. Maier. Effect of Random Histogram Equalization on Breast Calcification Analysis Using Deep Learning. Bildverarbeitung für die Medizin (BVM) 2022, pp. 173–178. doi:10.1007/978-3-658-36932-3_38"
story:
  readTime: "1 min read"
  shortTitle: "Random histogram equalization"
  researchQuestion: "Is contrast enhancement helping or deleting the evidence?"
  storyIntro: "Stop applying histogram equalization to every calcification patch, apply it at random during training instead, and use Grad-CAM to check what changes."
  heroFigure:
    src: "/research/random-histogram-equalization-breast-calcification/rhe-gradcam-comparison.webp"
    alt: "Three panels side by side: a grayscale mammography calcification patch, a Grad-CAM heatmap from the model trained without equalization showing a broad diffuse hot region, and a Grad-CAM heatmap from the model trained with random equalization at P equals 0.4 showing a tighter hot region over the bright calcification"
    caption: "Input patch, then Grad-CAM for the model trained without equalization (P = 0) and with random equalization (P = 0.4). The P = 0.4 model concentrates on the high-intensity calcification instead of the surrounding tissue."
    label: "FIG 1 / GRAD-CAM"
    sourceLabel: "My figure — from the paper and my PhD thesis"
    sourceUrl: "https://arxiv.org/abs/2205.01684"
    orientation: "landscape"
    width: 1009
    height: 349
  signalStats:
    - value: "1,872"
      label: "Calcification ROIs"
      detail: "CBIS-DDSM · 326 held out for test"
    - value: "0.7071"
      label: "Three-class F1"
      detail: "0.6855 without equalization"
      tone: "positive"
    - value: "0.6322"
      label: "F1 if you always equalize"
      detail: "Worse than doing nothing"
      tone: "caution"
    - value: "P = 0.4"
      label: "Best probability"
      detail: "Swept from 0 to 1"
  sections:
    - id: "question"
      label: "01 / THE QUESTION"
      title: "Standard pre-processing, applied to the wrong scale."
      body:
        - "Histogram equalization is routine for whole mammograms. But a calcification is a small bright spot, and a crop around it is mostly that spot — equalize it and the morphology and distribution that define the class get flattened into noise."
        - "The question was whether the operation should be dropped, or just used differently."
    - id: "idea"
      label: "02 / THE IDEA"
      title: "Make it stochastic, and training-only."
      body:
        - "Apply equalization with probability P during training and never at test time, so the model sees both the raw and the enhanced view of the same patch and cannot rely on either."
        - "P was swept from 0 (never) to 1 (always, at train and test), five runs at each value, with a ResNet-50 on 2-class and 3-class versions of the task."
      pipeline:
        - "Calcification ROI"
        - "Equalize with prob. P"
        - "ResNet-50"
        - "2- or 3-class head"
        - "Grad-CAM check"
    - id: "tested"
      label: "03 / WHAT WE TESTED"
      title: "Two framings of the same clinical decision."
      body:
        - "CBIS-DDSM calcification ROIs: 1,546 images split 80:20 for training and validation, plus an independent 326-image test set. Labels come from verified pathology."
        - "The two-class task groups malignant and benign as \"needs follow-up\" against benign-without-callback; the three-class task keeps them separate."
      metrics:
        - value: "1,546"
          label: "Train + validation ROIs"
          detail: "80:20 split"
        - value: "326"
          label: "Independent test ROIs"
        - value: "06"
          label: "Probabilities swept"
          detail: "P = 0 to 1"
        - value: "05×"
          label: "Runs per setting"
    - id: "result"
      label: "04 / MAIN RESULT"
      title: "Sometimes is better than always — and better than never."
      body:
        - "At P = 0.4 the three-class F1 rose from 0.6855 to 0.7071 and the two-class F1 from 0.8838 to 0.8973, both at p < 0.0001."
        - "The instructive number is P = 1. Equalizing every image at train and test time is the worst setting of all — three-class F1 0.6322, well below doing nothing. Deterministic enhancement actively removes class information here."
      table:
        caption: "CBIS-DDSM calcification test set (n = 326), mean over 5 runs. P is the probability of histogram equalization during training; at P = 1 it is applied at test time as well."
        columns: ["P", "2-class accuracy", "2-class F1", "3-class accuracy", "3-class F1"]
        rows:
          - cells: ["0 (never)", "0.9215", "0.8838", "0.6632", "0.6855"]
          - cells: ["0.2", "0.9159", "0.8759", "0.6755", "0.6985"]
          - cells: ["0.4", "0.9325", "0.8973", "0.6840", "0.7071"]
            highlight: true
          - cells: ["0.6", "0.9196", "0.8770", "0.6687", "0.6969"]
          - cells: ["0.8", "0.9252", "0.8869", "0.6601", "0.6839"]
          - cells: ["1 (always)", "0.8724", "0.8103", "0.6252", "0.6322"]
        footnote: "Standard deviations are in the paper. Two-tailed unpaired t-test, p < 0.0001 for both tasks."
      figures:
        - src: "/research/random-histogram-equalization-breast-calcification/rhe-full-equalization-failure.webp"
          alt: "Three panels: an original mammography patch with a visible calcification cluster, the same patch after histogram equalization showing heavy noise amplification, and a Grad-CAM heatmap from the P equals 1 model in which the hot region covers the cluster but the prediction is wrong"
          caption: "Why always-on equalization fails: input, the equalized version, and Grad-CAM for the P = 1 model. It still finds the suspicious region, but the morphology it needed to classify it has been destroyed."
          label: "FIG 2 / THE FAILURE CASE"
          sourceLabel: "My figure — from the paper and my PhD thesis"
          sourceUrl: "https://arxiv.org/abs/2205.01684"
          orientation: "landscape"
          width: 1009
          height: 349
    - id: "matters"
      label: "05 / WHY IT MATTERS"
      title: "Check your pre-processing against the model's attention."
      body:
        - "The metric difference between P = 0 and P = 1 is a couple of points; the Grad-CAM difference explains why, and would have flagged the problem even without the sweep."
        - "This was the first paper of the thesis, and the augmentation it introduced is reused as part of the standard pipeline in the later contrast-enhanced mammography work."
  limitation: "CBIS-DDSM is digitized scanned-film mammography, not digital mammography, so the intensity statistics differ from a modern screening cohort. No comparison against other augmentation strategies was run."
---
