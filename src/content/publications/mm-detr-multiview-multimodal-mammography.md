---
title: "MM-DETR: Emulating the Diagnostic Clinical Workflow in Multi-view Multi-modal Mammography Mass Detection"
authors:
  - "Karim Khalifa Elbarbary"
  - "Adarsh Bhandary Panambur"
  - "Sheethal Bhat"
  - "Siming Bayer"
  - "Andreas Maier"
venue: "Deep-Breath Workshop, MICCAI 2025, LNCS, 258–267"
year: 2025
type: "workshop"
status: "Published"
peerReviewed: true
abstract: "Radiologists read mammograms as paired projections, comparing the craniocaudal and mediolateral oblique views of the same breast before committing to a finding. Most detectors instead treat each image independently. MM-DETR adds bidirectional cross-attention fusion between the paired views inside a DETR-style detector, so evidence from one projection can inform the other before lesion prediction."
plainLanguageSummary: "A radiologist never reads one mammographic projection in isolation — the craniocaudal and mediolateral oblique views are compared before a finding is called. Most detectors ignore that. MM-DETR adds bidirectional cross-attention between the paired views inside a DETR-style detector, so evidence in one projection can support or suppress a detection in the other. On VinDr-Mammo it reports mass-detection mAP 0.654 against 0.580 for Mammo-CLIP — 7.4 points higher in absolute terms, which the paper states as a 12.8% relative margin — and a 5.9% lower false-negative rate in the dense-breast (density C) cases where single-view reading struggles most. I co-supervised and co-authored this work."
contribution: "Bidirectional cross-view fusion inside a detection transformer, evaluated specifically on the dense-breast subgroup where single-view detection is weakest. I co-supervised and co-authored the work."
method: "A DETR-style detector with a bidirectional cross-attention fusion module that exchanges information between the paired craniocaudal and mediolateral oblique feature maps before the lesion prediction heads."
keyResults:
  - "VinDr-Mammo mass detection mAP 0.654, against 0.580 for Mammo-CLIP: +7.4 points absolute, reported in the paper as a 12.8% relative margin."
  - "5.9% reduction in false negatives for density C (heterogeneously dense) cases relative to a single-view baseline."
relevance: "Cross-view fusion is not an architectural flourish here; it mirrors how the reading is actually done, and the improvement is largest in exactly the subgroup where mammographic sensitivity is known to fall."
limitation: "Single public cohort, mass detection only, and no prospective or reader evaluation."
links:
  paper: "https://link.springer.com/chapter/10.1007/978-3-032-05559-0_26"
  doi: "10.1007/978-3-032-05559-0_26"
tags:
  - "Detection / Localization"
  - "Multimodal AI"
  - "Medical Imaging"
featured: false
citation: "K. K. Elbarbary, A. Bhandary Panambur, S. Bhat, S. Bayer, A. Maier. MM-DETR: Emulating the Diagnostic Clinical Workflow in Multi-view Multi-modal Mammography Mass Detection. Deep-Breath Workshop, MICCAI 2025, pp. 258–267. doi:10.1007/978-3-032-05559-0_26"
---
