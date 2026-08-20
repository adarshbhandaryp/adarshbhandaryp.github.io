---
title: "PatchCLIP enables region specific contrastive health record and image joint training with patch embedding loss"
authors:
  - "Sheethal Bhat"
  - "Awais Mansoor"
  - "Bogdan Georgescu"
  - "Mathias Zinnen"
  - "Pranjal Sahu"
  - "Adarsh B. Panambur"
  - "Florin C. Ghesu"
  - "Sasa Grbic"
  - "Andreas Maier"
venue: "Scientific Reports, 16, article 14688"
year: 2026
type: "journal"
status: "Published · open access (CC BY 4.0)"
peerReviewed: true
abstract: "CLIP-style medical image-text models align a whole image with a whole report, which is enough to classify but not to localize. PatchCLIP adds a patch embedding loss that contrasts image-patch-level embeddings against text embeddings, so that at inference the model produces patch-wise prediction maps alongside the global score. Evaluated across eight chest X-ray abnormality detection tasks, the approach reports state-of-the-art performance and substantially fewer false positives at comparable sensitivity than saliency-based localization."
plainLanguageSummary: "Contrastive image-text models in radiology align a whole image with a whole report, so their explanations have to be reverse-engineered with saliency methods afterwards. PatchCLIP instead trains a patch-level contrastive objective, so localization is part of the model rather than a post-hoc interpretation. At inference it emits patch-wise prediction maps as well as a global score. Across eight chest X-ray abnormality detection tasks the paper reports state-of-the-art performance and substantially fewer false positives at comparable sensitivity than saliency-map baselines. Code is released publicly by Siemens Healthineers. I contributed as a co-author."
contribution: "A patch embedding loss for region-specific contrastive image-report training, so that localization is learned rather than inferred after the fact. I contributed as a co-author."
method: "Image-patch embeddings are contrasted against text embeddings during joint image-report training, producing patch-wise prediction maps at inference in addition to the global classification score."
keyResults:
  - "Reports state-of-the-art performance across eight chest X-ray abnormality detection tasks."
  - "Patch prediction maps substantially reduced false positives at comparable sensitivity compared with saliency-based localization."
  - "Public code release: github.com/Siemens-Healthineers/patch-clip."
relevance: "If a medical image-text model is going to be used as evidence, the region it points at has to come from the model's own objective and not from a saliency approximation applied afterwards."
limitation: "Evaluation is on chest radiography abnormality detection benchmarks; transfer to other modalities is not established in this paper."
links:
  paper: "https://www.nature.com/articles/s41598-026-52235-x"
  doi: "10.1038/s41598-026-52235-x"
  code: "https://github.com/Siemens-Healthineers/patch-clip"
tags:
  - "Vision-Language Models"
  - "Explainable AI"
  - "Detection / Localization"
featured: false
citation: "S. Bhat, A. Mansoor, B. Georgescu, M. Zinnen, P. Sahu, A. B. Panambur, F. C. Ghesu, S. Grbic, A. Maier. PatchCLIP enables region specific contrastive health record and image joint training with patch embedding loss. Scientific Reports, 16:14688, 2026. doi:10.1038/s41598-026-52235-x"
---
