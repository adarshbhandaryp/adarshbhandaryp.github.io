---
title: "Unstained White Blood Cell Classification Using Deep Learning"
authors:
  - "Hui Yu"
  - "F. Forster"
  - "Adarsh Bhandary Panambur"
  - "Anna Merino"
  - "Andreas Maier"
  - "G. Marquardt"
venue: "International Journal of Laboratory Hematology, 45(S3), 3–137 (ISLH XXXVI International Symposium abstract)"
year: 2023
type: "journal"
status: "Published (conference abstract)"
peerReviewed: true
abstract: "Staining is the standard preparation step before white blood cell morphology can be assessed, and it costs time and reagents. This abstract evaluates deep learning classification of unstained white blood cells across 14 classes, comparing a ResNet-18 against a transformer backbone in a two-stage pipeline with patient-wise splitting."
plainLanguageSummary: "White blood cell morphology is normally read after staining, which costs time and reagents. This study tested whether deep learning can classify unstained cells directly, across 14 classes, on a dataset of 339,885 unstained images from 233 patients split 70/17/13% at patient level. A two-stage pipeline reached mean weighted F1 of 90.33% with a ResNet-18 backbone and 91.77% with a transformer, a 1.44-point gain for the transformer. It is the one piece of my work outside radiology, and it is published as a conference abstract rather than a full paper. I contributed as a co-author."
contribution: "Extends medical image classification beyond radiology into laboratory hematology, on a large patient-wise-split unstained cell dataset. I contributed as a co-author."
method: "A two-stage classification pipeline over 14 white blood cell classes, comparing a ResNet-18 and a transformer backbone, with a patient-wise 70/17/13% train/validation/test split."
keyResults:
  - "Dataset of 339,885 unstained white blood cell images across 14 classes from 233 patients."
  - "Mean weighted F1 90.33% with the ResNet-18 backbone and 91.77% with the transformer backbone."
  - "The transformer gained 1.44 percentage points over ResNet-18 under the patient-wise splitting strategy."
relevance: "If unstained cells can be classified reliably, a preparation step and its reagent cost drop out of the hematology workflow."
limitation: "Published as a conference abstract in a journal supplement, so methodological detail is limited and the result has not had full-paper peer review."
links:
  doi: "10.1111/ijlh.14149"
tags:
  - "Medical Imaging"
featured: false
citation: "H. Yu, F. Forster, A. Bhandary Panambur, A. Merino, A. Maier, G. Marquardt. Unstained White Blood Cell Classification Using Deep Learning. International Journal of Laboratory Hematology, 45(S3):3–137, 2023. doi:10.1111/ijlh.14149"
---
