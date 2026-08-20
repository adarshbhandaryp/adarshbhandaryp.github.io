---
title: "AUCReshaping: improved sensitivity at high-specificity"
authors:
  - "Sheethal Bhat"
  - "Awais Mansoor"
  - "Bogdan Georgescu"
  - "Adarsh B. Panambur"
  - "Florin C. Ghesu"
  - "Saahil Islam"
  - "Kai Packhäuser"
  - "Dalia Rodríguez-Salas"
  - "Sasa Grbic"
  - "Andreas Maier"
venue: "Scientific Reports, 13, article 21097"
year: 2023
type: "journal"
status: "Published · open access (CC BY 4.0)"
peerReviewed: true
abstract: "Clinical AI systems are usually deployed under a hard false-positive constraint, which means only a narrow region of the ROC curve matters. Standard training treats the whole curve uniformly. AUCReshaping modifies the training objective to reshape the ROC curve towards higher sensitivity at a chosen high-specificity operating point: at each step the method identifies positive samples misclassified near that threshold, boosts their contribution, and backpropagates an augmented cross-entropy loss. The approach is evaluated on chest X-ray, mammography and a non-medical fraud-detection dataset."
plainLanguageSummary: "A screening AI is only ever used at one operating point — the one where false positives are acceptable — yet models are trained to optimize the whole ROC curve. AUCReshaping changes the loss so that positive cases misclassified near a chosen high-specificity threshold get extra weight, pulling sensitivity up exactly where it will be read off. Evaluated on chest X-ray (16,953 training images), mammography (20,000 images) and credit-card fraud detection (285,299 transactions), it reports sensitivity gains of 2 to 40 percentage points at high-specificity operating points depending on the dataset and the threshold chosen."
contribution: "An operating-point-aware training objective, rather than a post-hoc threshold adjustment, for settings with a strict false-positive budget. I contributed as a co-author on the medical imaging side."
method: "During training the method locates positive samples that fall on the wrong side of a selected high-specificity decision threshold, boosts their weight, and backpropagates an augmented cross-entropy loss, so gradient pressure concentrates on the region of the curve that will actually be used at deployment."
keyResults:
  - "Sensitivity improvements reported in the range of 2 to 40 percentage points at high-specificity operating points, depending on dataset and threshold."
  - "Evaluated on chest X-ray (16,953 training images), mammography (20,000 images) and credit-card fraud detection (285,299 transactions, 492 fraud cases)."
  - "Baseline AUCs across the evaluated tasks ranged from 0.77 to 0.98."
  - "The authors note that the optimal amount of boosting depends on the chosen operating point and the dataset."
relevance: "Most deployed clinical classifiers live under a fixed false-positive budget. Optimizing for the point of use rather than the average over all thresholds is closer to how these systems are actually evaluated in practice."
limitation: "The gain depends on the operating point and dataset, and there is no single boosting setting that works everywhere — the method adds a decision that has to be made per deployment."
links:
  paper: "https://www.nature.com/articles/s41598-023-48482-x"
  doi: "10.1038/s41598-023-48482-x"
tags:
  - "Medical Imaging"
  - "Clinical Validation"
featured: false
citation: "S. Bhat, A. Mansoor, B. Georgescu, A. B. Panambur, F. C. Ghesu, S. Islam, K. Packhäuser, D. Rodríguez-Salas, S. Grbic, A. Maier. AUCReshaping: improved sensitivity at high-specificity. Scientific Reports, 13:21097, 2023. doi:10.1038/s41598-023-48482-x"
---
