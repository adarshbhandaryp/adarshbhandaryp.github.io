---
title: "Exemplar Med-DETR: Toward Generalized and Robust Lesion Detection in Mammogram Images and Beyond"
authors:
  - "Sheethal Bhat"
  - "Bogdan Georgescu"
  - "Adarsh Bhandary Panambur"
  - "Mathias Zinnen"
  - "Tri-Thien Nguyen"
  - "Awais Mansoor"
  - "Karim Khalifa Elbarbary"
  - "Siming Bayer"
  - "Florin-Cristian Ghesu"
  - "Sasa Grbic"
  - "Andreas Maier"
venue: "Medical Image Computing and Computer Assisted Intervention (MICCAI) 2025, LNCS, 205–215"
year: 2025
type: "conference"
status: "Published"
peerReviewed: true
abstract: "Lesion detection in medical images has to survive dense anatomy, domain shift between populations, and differences between imaging modalities. Exemplar Med-DETR derives class-specific exemplar features inside the detector and fuses them with image features through cross-attention, trained iteratively, so that detection is anchored to learned prototypes rather than to appearance alone. The method is evaluated on mammography for mass and calcification detection, on an out-of-distribution external cohort, and on chest X-ray and angiography."
plainLanguageSummary: "Detectors trained on one mammography cohort tend to collapse on another, especially in dense breasts. Exemplar Med-DETR learns class-specific exemplar features inside the model and fuses them with image features through cross-attention, so detection is anchored to prototypes rather than to raw appearance. On the Vietnamese VinDr-Mammo cohort it reports mAP 0.70 for mass and 0.55 for calcification detection — a 16 percentage-point absolute improvement over the previous state of the art — and roughly a twofold gain on an out-of-distribution Chinese cohort. It also transfers to chest X-ray and angiography, improving by 4 and 7 points. I contributed as a co-author."
contribution: "Exemplar-guided detection with cross-attention fusion and iterative training, tested for cross-population and cross-modality robustness rather than only on a single benchmark. I contributed as a co-author."
method: "Class-specific exemplar features are derived within the detector and fused with image features via cross-attention, with iterative training that refines the exemplars alongside the detection heads."
keyResults:
  - "VinDr-Mammo: mAP 0.70 for mass detection and 0.55 for calcifications, an absolute improvement of 16 percentage points over the previous state of the art."
  - "Out-of-distribution CMMD (Chinese) cohort: approximately a twofold gain in lesion detection performance."
  - "Beyond mammography: mAP 0.25 for mass detection in chest X-ray and 0.37 for stenosis detection in angiography, improvements of 4 and 7 percentage points respectively."
relevance: "Detection performance that does not survive a change of population or scanner is not clinically usable. This paper treats cross-cohort robustness as the headline result rather than a supplementary table."
limitation: "Absolute mAP on the harder tasks (calcifications, chest X-ray masses) remains modest, and evaluation is retrospective."
links:
  paper: "https://arxiv.org/abs/2507.19621"
  pdf: "https://papers.miccai.org/miccai-2025/paper/2054_paper.pdf"
  doi: "10.1007/978-3-032-04978-0_20"
  arxiv: "arXiv:2507.19621"
tags:
  - "Detection / Localization"
  - "Medical Imaging"
  - "Foundation Models"
featured: false
citation: "S. Bhat, B. Georgescu, A. Bhandary Panambur, M. Zinnen, T.-T. Nguyen, A. Mansoor, K. K. Elbarbary, S. Bayer, F.-C. Ghesu, S. Grbic, A. Maier. Exemplar Med-DETR: Toward Generalized and Robust Lesion Detection in Mammogram Images and Beyond. MICCAI 2025, pp. 205–215. doi:10.1007/978-3-032-04978-0_20"
---
