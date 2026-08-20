---
title: "Enhancing downstream classification of breast abnormalities in contrast enhanced spectral mammography using a neighborhood representation loss"
authors:
  - "Adarsh Bhandary Panambur"
  - "Prathmesh Madhu"
  - "Siming Bayer"
  - "Andreas Maier"
venue: "SPIE Medical Imaging 2024: Computer-Aided Diagnosis, vol. 12927, 129270F"
year: 2024
type: "conference"
status: "Published"
peerReviewed: true
abstract: "Self-supervised learning improves representation quality but normally needs large amounts of data, which the contrast-enhanced spectral mammography (CESM) domain does not have. This paper proposes the Difficulty-Weighted Neighborhood Representation (DWNR) loss for downstream ROI classification in a small-data setting. After SimCLR pretraining, features for the whole training set are extracted once and used to find each sample's nearest same-class and farthest different-class neighbours. Those neighbours drive two terms: a difficulty-weighted cross-entropy, where difficulty comes from the class labels of the nearest neighbours, and a triplet loss that uses the precomputed representations directly instead of training a Siamese network. On the public CDD-CESM dataset the combined loss improves accuracy, F1 and AUC over cross-entropy and focal loss."
plainLanguageSummary: "Contrast-enhanced spectral mammography has too little public data for self-supervised learning to shine on its own. This work extracts features once after SimCLR pretraining, then uses each sample's nearest same-class and farthest different-class neighbours in that feature space to build the training loss: samples whose neighbours disagree with their own label are weighted as harder, and the same neighbours serve as triplet positives and negatives without a Siamese network. On the 116-ROI CDD-CESM test set this lifted three-class F1 from 0.8159 to 0.8413 and AUC from 0.9278 to 0.9350 over cross-entropy — the first reported ROI classification results on this dataset."
contribution: "A loss function that exploits the structure of a self-supervised feature space in a small-data setting, and the first reported ROI-level classification results on the public CDD-CESM subtracted CESM dataset."
method: "SimCLR pretraining of a ResNet-18 (from scratch and from ImageNet initialization) with NT-Xent at temperature 0.07, batch size 32, 500 epochs, on 2,919 CESM patches. Features from the 512-D representation layer are banked, and for each query the k nearest same-class (KNN) and k farthest different-class (KFN) features are precomputed by L2 distance. Difficulty-weighted cross-entropy assigns weight 0.9 to neighbours matching the query label and 0.1 otherwise; the neighbourhood triplet loss uses the precomputed KNN and KFN features as positives and negatives with margin α. Both terms are summed. Five runs, Adam, LR 5e-6, weighted random sampling."
keyResults:
  - "CDD-CESM ROI three-class test set (n=116), ImageNet + SimCLR track: accuracy 0.8448 → 0.8655, F1 0.8159 → 0.8413, AUC 0.9278 → 0.9350 from cross-entropy to DWNR (p < 0.0001)."
  - "Focal loss did not close the gap: 0.8397 accuracy and 0.8083 F1, below DWNR on both."
  - "From-scratch SimCLR track: F1 0.7150 (cross-entropy) → 0.7352 (DWNR); scratch without SSL was 0.6901."
  - "Per-class F1 for the benign class — the hardest — rose from 0.6589 with cross-entropy to 0.7058 with DWNR."
  - "Initializing a whole-image CESM classifier from the DWNR-trained ROI model beat ImageNet initialization by more than 4 points of F1 on BI-RADS management (0.7613 → 0.8088) and diagnosis (0.7640 → 0.8199)."
  - "Reported as the first comprehensive ROI classification results on the public CDD-CESM subtracted images."
relevance: "CESM is used exactly where mammography struggles — dense breasts and suspicious lesion management — but the public data are scarce. Methods that get more out of a thousand images are more useful here than methods that need a hundred thousand."
limitation: "One dataset, 116 test ROIs, and three tuned quantities (neighbour count, difficulty weights, triplet margin) that had to be swept per dataset — the limitation that motivated the later DITL framework."
links:
  paper: "https://www.spiedigitallibrary.org/conference-proceedings-of-spie/12927/129270F/Enhancing-downstream-classification-of-breast-abnormalities-in-contrast-enhanced-spectral/10.1117/12.3004102.full"
  doi: "10.1117/12.3004102"
tags:
  - "Self-Supervised Learning"
  - "Multimodal AI"
  - "Medical Imaging"
featured: false
citation: "A. Bhandary Panambur, P. Madhu, S. Bayer, A. Maier. Enhancing downstream classification of breast abnormalities in contrast enhanced spectral mammography using a neighborhood representation loss. Proc. SPIE Medical Imaging 2024: Computer-Aided Diagnosis, vol. 12927, 129270F. doi:10.1117/12.3004102"
story:
  readTime: "1 min read"
  shortTitle: "Neighbourhood representation loss"
  researchQuestion: "Can 1,000 images be enough if the loss knows the feature space?"
  storyIntro: "Extract self-supervised features once, look at each sample's nearest and farthest neighbours, and let that geometry decide which samples are hard and what the triplets should be."
  heroFigure:
    src: "/research/neighborhood-representation-loss-cesm/dwnr-method-overview.webp"
    alt: "Three-stage horizontal diagram: pretraining stage with self-supervised learning on a CNN over CESM training patches; precomputation stage where query features are compared by L2 distance against a feature bank to yield k-nearest and k-farthest features and neighbour labels; transfer learning stage where those features feed a neighbourhood triplet loss and a difficulty-weighted cross-entropy that sum to the DWNR loss"
    caption: "Pretrain with SimCLR, bank the features and precompute each sample's nearest same-class (green) and farthest different-class (red) neighbours, then use both in the loss. The neighbour search happens once, offline."
    label: "FIG 1 / METHOD"
    sourceLabel: "My figure — from the paper and my PhD thesis"
    orientation: "landscape"
    width: 1900
    height: 471
  signalStats:
    - value: "1,003"
      label: "CESM images"
      detail: "326 patients · Cairo University · public"
    - value: "116"
      label: "Test ROIs"
      detail: "Three-class: normal / benign / malignant"
    - value: "0.8413"
      label: "Test F1"
      detail: "Cross-entropy: 0.8159"
      tone: "positive"
    - value: "1st"
      label: "Reported ROI results"
      detail: "On CDD-CESM subtracted images"
  sections:
    - id: "question"
      label: "01 / THE QUESTION"
      title: "Self-supervision wants data this domain does not have."
      body:
        - "Contrast-enhanced spectral mammography is used when a mammogram is not enough — dense tissue, suspicious lesion management. The public data amount to about a thousand images."
        - "SimCLR pretraining helps, but not by much at that scale. The question was whether the loss function could extract more from the same features."
    - id: "idea"
      label: "02 / THE IDEA"
      title: "Ask the feature space which samples are hard."
      body:
        - "After pretraining, every training feature is banked once. For each sample, its nearest same-class and farthest different-class neighbours are found by L2 distance. If a sample's neighbours mostly carry a different label, it is a hard sample and gets more weight in the cross-entropy."
        - "The same neighbours serve as triplet positives and negatives directly, so there is no Siamese network and no online mining — the whole thing is precomputed."
      pipeline:
        - "SimCLR pretraining"
        - "Feature bank"
        - "Nearest / farthest neighbours"
        - "Difficulty weights"
        - "DWCE + triplet"
        - "ROI classifier"
    - id: "tested"
      label: "03 / WHAT WE TESTED"
      title: "Two initializations, four losses, one small dataset."
      body:
        - "CDD-CESM: 1,003 subtracted CESM images from 326 patients at Cairo University, with pixel-level lesion annotations. ROIs were extracted for benign and malignant lesions, with a fixed 512 × 512 centre crop for normals, split at patient level into 745 / 130 / 116."
        - "Cross-entropy, focal loss and DWNR were compared under both from-scratch and ImageNet-initialized SimCLR pretraining, five runs each."
      metrics:
        - value: "745"
          label: "Training ROIs"
        - value: "2,919"
          label: "SSL pretraining patches"
          detail: "≈4 per CESM image"
        - value: "116"
          label: "Test ROIs"
        - value: "05×"
          label: "Runs per setting"
    - id: "result"
      label: "04 / MAIN RESULT"
      title: "Two and a half points of F1 from the loss alone."
      body:
        - "In the ImageNet + SimCLR track, DWNR lifted F1 from 0.8159 to 0.8413 and AUC from 0.9278 to 0.9350 over cross-entropy, with focal loss landing below both. The gain concentrates on the benign class, where per-class F1 went from 0.6589 to 0.7058."
        - "It also transferred: initializing a whole-image CESM classifier from the DWNR-trained ROI model beat ImageNet initialization by more than four points of F1 on both BI-RADS management and diagnosis."
      table:
        caption: "CDD-CESM ROI classification, test set n = 116, ImageNet + SimCLR pretraining. Mean values over 5 runs."
        columns: ["Loss", "Accuracy", "F1", "AUC"]
        rows:
          - cells: ["Cross-entropy (ImageNet only)", "0.8379", "0.8130", "0.9252"]
          - cells: ["Cross-entropy + SSL", "0.8448", "0.8159", "0.9278"]
          - cells: ["Focal loss + SSL", "0.8397", "0.8083", "0.9320"]
          - cells: ["DWNR + SSL", "0.8655", "0.8413", "0.9350"]
            highlight: true
        footnote: "Standard deviations and the from-scratch SimCLR track are in the paper. Unpaired t-test, p < 0.0001 against cross-entropy and focal loss."
      figures:
        - src: "/research/neighborhood-representation-loss-cesm/dwnr-neighbor-ablation.webp"
          alt: "Line plot of mean F1-score against the number of neighbours K from 1 to 4 for the difficulty-weighted cross-entropy, with error bars, rising above a flat cross-entropy reference line and peaking at K equals 3"
          caption: "Ablation on the number of neighbours used to compute the difficulty weight. The difficulty-weighted term stays above the cross-entropy reference and peaks at k = 3."
          label: "FIG 2 / NEIGHBOUR ABLATION"
          sourceLabel: "My figure — from the paper and my PhD thesis"
          orientation: "landscape"
          width: 1400
          height: 752
    - id: "matters"
      label: "05 / WHY IT MATTERS"
      title: "And why I rebuilt it two years later."
      body:
        - "The result stands: geometry in a self-supervised feature space carries usable training signal in a small-data domain, and the improvement transfers to the whole-image task."
        - "But three quantities here had to be swept per dataset — neighbour count, difficulty weights, triplet margin. That is exactly the limitation the later DITL framework removes by deriving all three from the data."
  limitation: "A single public dataset with 116 test ROIs, and three hand-tuned hyperparameters that do not transfer between cohorts."
---
