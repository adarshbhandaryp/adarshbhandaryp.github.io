---
title: "MM-DETR: Emulating the Diagnostic Clinical Workflow in Multi-view Multi-modal Mammography Mass Detection"
authors:
  - "Elbarbary K"
  - "Bhandary Panambur A"
  - "Bhat S"
  - "Bayer S"
  - "Maier A"
venue: "Deep-Brea3th Workshop, MICCAI"
year: 2025
type: "workshop"
status: "Published"
abstract: "MM-DETR is a multi-view, multi-modal mammography detector that uses paired CC and MLO views to emulate part of the radiologist reading workflow."
plainLanguageSummary: "The detector looks across both standard mammography views instead of treating each image in isolation."
contribution: "The workshop paper adds bidirectional cross-attention fusion to combine craniocaudal and mediolateral oblique views for mass detection."
method: "A DETR-style detector integrates information from paired mammography views through a cross-attention fusion module before lesion prediction."
keyResults:
  - "Springer reports mass detection mAP of 0.654 on VinDR-Mammo."
  - "The reported result outperforms Mammo-CLIP mAP 0.580 by an absolute 12.8% margin."
  - "The paper reports a 5.9% lower false-negative rate in DENSITY C cases versus a single-view baseline."
relevance: "Dense tissue can hide masses in one view; multi-view fusion better matches how radiologists compare mammograms."
links:
  paper: "https://link.springer.com/chapter/10.1007/978-3-032-05559-0_26"
  code: "https://github.com/MMDETR/MM-DETR"
sourceUrl: "https://link.springer.com/chapter/10.1007/978-3-032-05559-0_26"
sourceLabel: "Springer source"
tags:
  - "Mammography"
  - "Mass Detection"
  - "Multimodal Learning"
featured: false
bibtex: "TODO: Add BibTeX."
---
