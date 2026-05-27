---
title: "MammoBLIP: End-to-End Mammography Report Generation with Vision-Language Models and Public Multi-Institutional Datasets"
authors:
  - "Bhandary Panambur A"
  - "Wind S"
  - "Bayer S"
  - "Maier A"
venue: "IEEE Medical Imaging Conference (MIC), Yokohama, Japan"
year: 2025
type: "conference"
status: "In print"
abstract: "MammoBLIP is an end-to-end mammography report generation framework built on MedBLIP-style vision-language modeling and a curated multi-source public dataset."
plainLanguageSummary: "MammoBLIP investigates end-to-end mammography report generation by aligning breast images with standardized radiology-style language."
contribution: "The work curates 81,076 mammography images from five public sources and trains a report-generation pipeline for structured mammography text."
method: "Images are encoded with a frozen EVA-CLIP Vision Transformer, aligned with text embeddings through a lightweight transformer, and used to condition BioMedLM report generation."
keyResults:
  - "The FAU-hosted manuscript reports overall BLEU 65.36, ROUGE-1 0.75, BERT-F1 0.88, and SBERT similarity 0.91."
  - "Training used standardized data from VinDR-Mammo, RSNA, CMMD, InBreast, and KAU."
  - "Only the transformer and projection heads were trained while the major backbone models remained frozen."
relevance: "Structured report generation provides a research path toward consistent multimodal breast imaging assistants and reduced documentation burden."
links:
  paper: "https://ieeexplore.ieee.org/document/11286311"
  pdf: "https://lme.tf.fau.de/wp-content/uploads/2020/08/MammoBLIP__End_to_End_Mammography_Report_Generation_Using_a_Curated__Standardized_Multi_Institutional_Public_Dataset-1.pdf"
image: "/home/ieee.jpeg"
imageAlt: "Presentation on MammoBLIP at IEEE Medical Imaging Conference 2025"
figureCaption: "Presentation photo from IEEE MIC 2025. The paper PDF contains the MammoBLIP pipeline overview."
sourceUrl: "https://lme.tf.fau.de/wp-content/uploads/2020/08/MammoBLIP__End_to_End_Mammography_Report_Generation_Using_a_Curated__Standardized_Multi_Institutional_Public_Dataset-1.pdf"
sourceLabel: "FAU PDF"
tags:
  - "Mammography"
  - "Vision-Language Models"
  - "Report Generation"
featured: true
bibtex: "TODO: Add BibTeX."
---
