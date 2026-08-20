---
title: "Attention-guided erasing for enhanced transfer learning in breast abnormality classification"
authors:
  - "Adarsh Bhandary Panambur"
  - "Sheethal Bhat"
  - "Hui Yu"
  - "Prathmesh Madhu"
  - "Siming Bayer"
  - "Andreas Maier"
venue: "International Journal of Computer Assisted Radiology and Surgery, 20(3), 433–440"
year: 2025
type: "journal"
status: "Published · open access (CC BY 4.0)"
peerReviewed: true
abstract: "Purpose: We evaluate the effectiveness and generalizability of attention-guided erasing (AGE), a data augmentation technique initially proposed for breast density classification, across various tasks in breast abnormality classification and different mammographic imaging modalities. Methods: A Vision Transformer is pretrained with DINO on the target dataset; self-attention maps of the final-layer attention heads are converted into binary masks that preserve regions of interest while background regions are erased with a random probability during downstream transfer learning. The attention head is treated as a hyperparameter and selected by validation F1-score. Results: AGE achieved the best mean macro F1-score in all five evaluated tasks, with statistically significant improvements in four of them. Conclusion: Self-supervised attention can provide a task-aware augmentation policy without pixel-level annotations, but the benefit depends on whether the relevant structure is localized within the input."
plainLanguageSummary: "Transfer learning helps when medical imaging datasets are small, but common augmentations such as random erasing are blind to anatomy and can delete the very evidence a classifier needs. This paper uses the self-attention maps of a DINO-pretrained Vision Transformer — trained on the target cohort without any labels — as the erasing policy: keep what the model attends to, erase the surrounding background at random. The attention head is chosen per task by validation F1. Across five mammography classification tasks on VinDr-Mammo, CDD-CESM and CBIS-DDSM, mean macro F1 improved significantly in four. The fifth, mass ROIs, barely moved because the lesion already filled the crop."
contribution: "Shows that attention-guided erasing generalizes beyond its original breast-density task to whole-image and ROI-level classification across digital mammography, contrast-enhanced mammography and scanned-film mammography — and identifies the condition under which it stops working."
method: "DINO self-supervised pretraining of a ViT-S/16 on the target dataset, conversion of the six final-layer [CLS] attention maps into binary masks by thresholding, stochastic erasing of the non-attended region during downstream fine-tuning, and per-task selection of the attention head by highest validation macro F1 over six candidate runs."
keyResults:
  - "Breast density on VinDr-Mammo (test n=4,000): mean macro F1 0.5594 ± 0.026 with no erasing, 0.5691 ± 0.020 with random erasing, 0.5910 ± 0.017 with AGE (p < 0.0001)."
  - "Whole-image malignancy on CDD-CESM (test n=116): 0.6076 ± 0.045 → 0.6406 ± 0.048 → 0.6579 ± 0.010 with AGE (p < 0.0001), with the standard deviation dropping roughly fourfold."
  - "Calcification ROIs on CBIS-DDSM (test n=326): 0.6803 ± 0.016 → 0.6846 ± 0.017 → 0.6892 ± 0.007 (p < 0.0001)."
  - "CEM lesion ROIs (test n=116): 0.7617 ± 0.023 → 0.7859 ± 0.012 → 0.7920 ± 0.026 (p = 0.0227)."
  - "Mass ROIs on CBIS-DDSM (test n=378): 0.5530 ± 0.007 → 0.5537 ± 0.016 with AGE — not statistically significant."
relevance: "Annotation is the binding constraint in medical imaging. A method that derives its own augmentation policy from unlabelled data, and reports honestly where that policy has no leverage, is more useful than one tuned to a single benchmark."
limitation: "All five tasks use retrospective public datasets, and the attention maps are weak localizations used to shape augmentation — not lesion contours and not clinical explanations."
links:
  paper: "https://link.springer.com/article/10.1007/s11548-024-03317-6"
  pdf: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11929719/"
  doi: "10.1007/s11548-024-03317-6"
tags:
  - "Self-Supervised Learning"
  - "Medical Imaging"
  - "Explainable AI"
featured: true
citation: "A. Bhandary Panambur, S. Bhat, H. Yu, P. Madhu, S. Bayer, A. Maier. Attention-guided erasing for enhanced transfer learning in breast abnormality classification. International Journal of Computer Assisted Radiology and Surgery, 20(3):433–440, 2025. doi:10.1007/s11548-024-03317-6"
story:
  readTime: "1 min read"
  shortTitle: "Attention-Guided Erasing"
  researchQuestion: "Can a model decide what not to erase?"
  storyIntro: "Use a self-supervised model's own attention to choose which pixels an augmentation is allowed to destroy — then check the four tasks where that helps and the one where it does not."
  heroFigure:
    src: "/research/attention-guided-erasing-transfer-learning-breast-abnormality/age-method-overview.webp"
    alt: "Three-panel diagram: DINO self-supervised pretraining with a student and teacher ViT-S, conversion of six attention heads into binary masks and erased images, and transfer learning with attention-head selection by validation F1"
    caption: "(a) DINO pretraining on the target cohort. (b) The six final-layer attention heads become binary masks and erased inputs. (c) Each head is tried during transfer learning; the one with the highest validation F1 is kept."
    label: "FIG 1 / METHOD"
    sourceLabel: "My figure — from the paper and my PhD thesis"
    sourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11929719/"
    orientation: "landscape"
    width: 1800
    height: 937
  signalStats:
    - value: "05"
      label: "Classification tasks"
      detail: "Whole-image and ROI-level"
    - value: "03"
      label: "Public cohorts"
      detail: "VinDr-Mammo · CDD-CESM · CBIS-DDSM"
    - value: "05×"
      label: "Runs per setting"
      detail: "Mean macro F1 ± std reported"
    - value: "4 / 5"
      label: "Significant gains"
      detail: "Mass ROIs were the exception"
      tone: "positive"
  sections:
    - id: "question"
      label: "01 / THE QUESTION"
      title: "Random erasing does not know what a lesion is."
      body:
        - "Random erasing cuts out an arbitrary rectangle to regularize training. On a mammogram it can just as easily remove the dense tissue or the calcification cluster the classifier is supposed to learn from."
        - "So: could a model that has never seen a label still say which pixels are worth keeping?"
    - id: "idea"
      label: "02 / THE IDEA"
      title: "Let self-supervised attention be the erasing policy."
      body:
        - "A ViT-S/16 is pretrained with DINO on the target cohort. Its six final-layer attention maps are thresholded into binary masks; everything outside the mask is erased with a chosen probability during fine-tuning."
        - "Which head to trust is task-dependent, so each of the six is tried and the one with the best validation F1 is used — never the test set."
      pipeline:
        - "Mammogram"
        - "DINO pretraining"
        - "Attention heads"
        - "Binary mask"
        - "Guided erasing"
        - "Fine-tuned classifier"
    - id: "tested"
      label: "03 / WHAT WE TESTED"
      title: "Five tasks, three cohorts, whole images and small crops."
      body:
        - "Two whole-image tasks (BI-RADS breast density in digital mammography, malignancy in contrast-enhanced mammography) and three ROI-level tasks (calcification, CEM lesions, masses). Every setting was run five times against a no-erasing and a random-erasing baseline."
      metrics:
        - value: "20,000"
          label: "VinDr-Mammo images"
          detail: "5,000 patients · 4,000-image test set"
        - value: "1,003"
          label: "CDD-CESM images"
          detail: "Cairo University · normal / benign / malignant"
        - value: "326"
          label: "Calcification test ROIs"
          detail: "CBIS-DDSM"
        - value: "378"
          label: "Mass test ROIs"
          detail: "CBIS-DDSM"
    - id: "result"
      label: "04 / MAIN RESULT"
      title: "It works where attention can isolate the evidence."
      body:
        - "AGE gave the best mean macro F1 in all five tasks, significantly so in four. On CEM whole images it also cut run-to-run variance about fourfold — the augmentation is acting as a regularizer, not just a lucky seed."
        - "The mass task is the honest counter-example: the lesion already occupies most of the crop, so there is almost no disposable background to erase and the gain vanishes into the noise."
      table:
        caption: "Mean macro F1-score ± standard deviation over 5 runs, as reported in the paper. NE = no erasing, RE = random erasing."
        columns: ["Task (test size)", "NE", "RE", "AGE", "p"]
        rows:
          - cells: ["Breast density, VinDr-Mammo (4,000)", "0.5594", "0.5691", "0.5910", "< 0.0001"]
            highlight: true
          - cells: ["Malignancy, CDD-CESM image (116)", "0.6076", "0.6406", "0.6579", "< 0.0001"]
            highlight: true
          - cells: ["Calcification ROI, CBIS-DDSM (326)", "0.6803", "0.6846", "0.6892", "< 0.0001"]
          - cells: ["Lesion ROI, CDD-CESM (116)", "0.7617", "0.7859", "0.7920", "0.0227"]
          - cells: ["Mass ROI, CBIS-DDSM (378)", "0.5530", "0.5471", "0.5537", "n.s."]
        footnote: "Standard deviations, per-class scores and the full ablation over erasing probabilities are in the open-access paper. Two-tailed unpaired t-test; n.s. = not significant."
      figures:
        - src: "/research/attention-guided-erasing-transfer-learning-breast-abnormality/age-attention-heads.webp"
          alt: "Grid of five task rows, each showing an input mammogram followed by six DINO attention maps, with the selected head outlined in red"
          caption: "The six attention heads for each task (T1 density, T2 CEM malignancy, T3 calcification ROI, T4 CEM ROI, T5 mass ROI). Red marks the head selected by validation performance."
          label: "FIG 2 / ATTENTION HEADS"
          sourceLabel: "My figure — from the paper and my PhD thesis"
          sourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11929719/"
          orientation: "landscape"
          width: 1382
          height: 991
        - src: "/research/attention-guided-erasing-transfer-learning-breast-abnormality/age-qualitative-comparison.webp"
          alt: "Five task rows showing input mammogram, selected attention map, binary mask and the resulting attention-guided erased image, two examples per row"
          caption: "Input → selected attention → binary mask → erased image, for two examples of each task. This is what the classifier actually sees during training."
          label: "FIG 3 / WHAT AGE DOES"
          sourceLabel: "My figure — from the paper and my PhD thesis"
          sourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11929719/"
          orientation: "landscape"
          width: 1440
          height: 922
    - id: "matters"
      label: "05 / WHY IT MATTERS"
      title: "The dataset can supply its own augmentation policy."
      body:
        - "No radiologist masks, no extra annotation budget — the augmentation is derived from unlabelled images of the same cohort, which is the setting most medical imaging projects are actually in."
        - "And because the method is reported as conditional rather than universal, it is usable: you can predict in advance whether it will help a given task."
  limitation: "The attention maps are weak, dataset-derived localizations used to shape augmentation. They are not lesion segmentations, and they should not be read as an explanation of a diagnosis. All results are retrospective."
---
