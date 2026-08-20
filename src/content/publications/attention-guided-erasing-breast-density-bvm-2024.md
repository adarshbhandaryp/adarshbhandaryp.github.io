---
title: "Attention-Guided Erasing: A Novel Augmentation Method for Enhancing Downstream Breast Density Classification"
authors:
  - "Adarsh Bhandary Panambur"
  - "Hui Yu"
  - "Sheethal Bhat"
  - "Prathmesh Madhu"
  - "Siming Bayer"
  - "Andreas Maier"
venue: "Bildverarbeitung für die Medizin (BVM) 2024, Erlangen, 13–18"
year: 2024
type: "workshop"
status: "Published"
peerReviewed: true
abstract: "Automatic BI-RADS breast density classification is particularly relevant in populations with a high prevalence of extremely dense breasts. Conventional deep-learning pipelines typically use a separate network to segment background tissue or the pectoralis muscle before classification, which requires high-quality annotations. This paper introduces Attention-Guided Erasing (AGE): a Vision Transformer is pretrained with DINO on the target mammography cohort, the self-attention map of a selected head is thresholded into a binary mask, and the region outside that mask is erased with a given probability during downstream transfer learning. On the VinDr-Mammo test set AGE reaches a mean macro F1-score of 0.5910, outperforming no-erasing and random-erasing baselines."
plainLanguageSummary: "Breast density affects how much a mammogram can hide, so automating BI-RADS density assessment matters — but the usual pipeline needs a separate segmentation network trained on radiologist annotations. This paper skips that. A Vision Transformer is pretrained with DINO on the target cohort with no labels, one of its attention heads is thresholded into a binary mask that roughly follows dense tissue, and everything outside is erased at random during fine-tuning. On the VinDr-Mammo test set of 4,000 images this reached mean macro F1 0.5910, against 0.5594 without erasing and 0.5691 with random erasing. The rarest class, density A, improved most."
contribution: "Introduces attention-guided erasing and shows that a self-supervised attention head can substitute for a supervised tissue-segmentation step in BI-RADS density classification."
method: "DINO self-supervised pretraining of an ImageNet-initialized DeiT-small ViT (patch size 16, 224 × 224, batch size 32, 300 epochs) on the VinDr-Mammo training split. The self-attention of the six final-layer heads on the [CLS] token is inspected; the head whose activation covers a small pixel count is taken as a proxy for breast tissue and thresholded into a binary mask. Background outside the mask is erased with probability P during downstream four-class transfer learning (50 epochs, batch size 8, Adam, LR 5e-6, early stopping)."
keyResults:
  - "VinDr-Mammo test set (n=4,000): mean macro F1 0.5910 (0.017) with AGE at P=0.6, versus 0.5594 (0.026) with no erasing and 0.5691 (0.020) with random erasing (p < 0.0001)."
  - "Published single-view baselines on the same test split: ResNet-34 0.504 and EfficientNet-B2 0.5525."
  - "Random erasing degraded steadily as its probability rose (0.5691 → 0.5503 from P=0.2 to P=0.8) while AGE stayed above the baseline at every probability."
  - "Per-class mean F1 for the rare density-A class rose from 0.0847 to 0.2158; densities C and D changed marginally in the other direction."
  - "Standard deviations narrowed with AGE, consistent with a regularization effect."
relevance: "Dense breast tissue reduces mammographic sensitivity, and its prevalence is high in several Asian screening populations — the VinDr-Mammo cohort is 76% density C. Automating the assessment without an annotation-hungry segmentation stage makes it deployable on more cohorts."
limitation: "Single dataset, single task, and the gains on the two majority density classes were slightly negative — the headline improvement is driven by the rare classes."
links:
  paper: "https://link.springer.com/chapter/10.1007/978-3-658-44037-4_8"
  doi: "10.1007/978-3-658-44037-4_8"
  arxiv: "arXiv:2401.03912"
tags:
  - "Self-Supervised Learning"
  - "Medical Imaging"
featured: false
citation: "A. Bhandary Panambur, H. Yu, S. Bhat, P. Madhu, S. Bayer, A. Maier. Attention-Guided Erasing: A Novel Augmentation Method for Enhancing Downstream Breast Density Classification. Bildverarbeitung für die Medizin (BVM) 2024, pp. 13–18. doi:10.1007/978-3-658-44037-4_8"
story:
  readTime: "1 min read"
  shortTitle: "AGE for breast density"
  researchQuestion: "Can attention replace a segmentation network?"
  storyIntro: "Replace the supervised tissue-segmentation step in breast density classification with one attention head from a model that was never given a label."
  heroFigure:
    src: "/research/attention-guided-erasing-breast-density-bvm-2024/age-density-method.webp"
    alt: "Method diagram: an input mammogram passes through a DINO-pretrained Vision Transformer backbone, producing six attention head visualizations, which are converted into six binary masks; after mask selection the result is a single attention-guided erased mammogram showing only the dense tissue region"
    caption: "Input mammogram → DINO-pretrained ViT → six attention heads → six binary masks → selected mask → erased image. No segmentation labels anywhere in the chain."
    label: "FIG 1 / METHOD"
    sourceLabel: "My figure — from the paper and my PhD thesis"
    sourceUrl: "https://arxiv.org/abs/2401.03912"
    orientation: "landscape"
    width: 1600
    height: 1158
  signalStats:
    - value: "20,000"
      label: "Mammograms"
      detail: "VinDr-Mammo · 5,000 patients"
    - value: "0.5910"
      label: "Macro F1"
      detail: "Baseline without erasing: 0.5594"
      tone: "positive"
    - value: "0.0847 → 0.2158"
      label: "Density A F1"
      detail: "The rarest class: 100 images total"
      tone: "positive"
    - value: "05×"
      label: "Runs per setting"
  sections:
    - id: "question"
      label: "01 / THE QUESTION"
      title: "Why segment before you classify?"
      body:
        - "The standard density pipeline trains one network to remove background and pectoralis muscle, then a second to classify. That first network needs radiologist annotations or hand-tuned image processing, which is exactly what a new cohort will not have."
        - "The question was whether a self-supervised model already knows enough about where breast tissue is to skip that step."
    - id: "idea"
      label: "02 / THE IDEA"
      title: "One attention head, thresholded into a mask."
      body:
        - "A DeiT-small ViT is pretrained with DINO on the VinDr-Mammo training split — no labels. Of its six final-layer attention heads, the one whose activation covers only a small number of pixels turns out to track dense tissue; it is thresholded into a binary mask."
        - "During fine-tuning, everything outside that mask is erased with probability P. The classifier is pushed towards the tissue and away from the background, without anyone drawing a contour."
      pipeline:
        - "VinDr-Mammo"
        - "DINO pretraining"
        - "Attention head"
        - "Binary mask"
        - "Erase background"
        - "4-class density model"
    - id: "tested"
      label: "03 / WHAT WE TESTED"
      title: "A heavily imbalanced screening cohort."
      body:
        - "VinDr-Mammo: 20,000 full-field digital mammograms from 5,000 patients at two Hanoi hospitals, BI-RADS density annotated by consensus of three radiologists. Density C dominates with 15,292 of the 20,000 images; density A has just 100."
        - "AGE was compared against no erasing and against random erasing at four probabilities, five runs each, on the original 4,000-image test split."
      metrics:
        - value: "100"
          label: "Density A images"
          detail: "Of 20,000 total"
        - value: "15,292"
          label: "Density C images"
          detail: "The majority class"
        - value: "4,000"
          label: "Test images"
          detail: "Original released split"
        - value: "04"
          label: "Erasing probabilities"
          detail: "P = 0.2 / 0.4 / 0.6 / 0.8"
    - id: "result"
      label: "04 / MAIN RESULT"
      title: "Random erasing gets worse with more erasing. Guided erasing does not."
      body:
        - "AGE reached mean macro F1 0.5910 at P=0.6, ahead of no erasing (0.5594), random erasing (0.5691) and the published ResNet-34 and EfficientNet-B2 single-view baselines (0.504 and 0.5525)."
        - "The mechanism shows in the probability sweep: random erasing decays as you erase more, because it starts removing tissue. AGE stays above the baseline throughout — it only ever removes background."
      table:
        caption: "Mean macro F1 (standard deviation) on the VinDr-Mammo test set, n = 4,000, over 5 runs."
        columns: ["Method", "P = 0.2", "P = 0.4", "P = 0.6", "P = 0.8"]
        rows:
          - cells: ["Random erasing", "0.5691", "0.5617", "0.5522", "0.5503"]
          - cells: ["Attention-guided erasing", "0.5774", "0.5731", "0.5910", "0.5747"]
            highlight: true
        footnote: "No-erasing baseline: 0.5594. Published single-view baselines on the same split: ResNet-34 0.504, EfficientNet-B2 0.5525. Two-tailed unpaired t-test, p < 0.0001."
      comparisons:
        - value: "0.5594 → 0.5910"
          label: "Macro F1"
          detail: "No erasing → AGE at P = 0.6"
          tone: "positive"
        - value: "0.0847 → 0.2158"
          label: "Density A F1"
          detail: "Rarest class, 100 images"
          tone: "positive"
        - value: "0.8672 → 0.8610"
          label: "Density C F1"
          detail: "Majority class — slightly worse"
          tone: "caution"
    - id: "matters"
      label: "05 / WHY IT MATTERS"
      title: "It became the method the rest of the work is built on."
      body:
        - "Removing the annotated segmentation stage is what makes density assessment portable to a cohort that has labels but no masks."
        - "This paper is the origin of the attention-guided erasing line: the journal follow-up tested it across five tasks and three modalities, and found both where it generalizes and where it stops."
  limitation: "One dataset, one task. The overall gain comes from the rare density classes, while the two majority classes moved marginally in the wrong direction — a trade-off worth knowing before deploying it."
---
