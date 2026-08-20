---
title: "MammoBLIP: End-to-End Mammography Report Generation with Vision-Language Models and Public Multi-Institutional Datasets"
authors:
  - "Adarsh Bhandary Panambur"
  - "Sebastian Wind"
  - "Siming Bayer"
  - "Andreas Maier"
venue: "2025 IEEE Nuclear Science Symposium, Medical Imaging Conference and Room Temperature Semiconductor Detector Conference (NSS/MIC/RTSD), Yokohama"
year: 2025
type: "conference"
status: "Published"
peerReviewed: true
abstract: "Breast imaging AI is largely task-specific: lesion detection, risk stratification or malignancy classification, each in isolation. None of these produce the structured, comprehensive report a radiologist writes. MammoBLIP is an end-to-end vision-language framework that generates mammography reports directly from an image. A frozen EVA-CLIP Vision Transformer supplies patch features, a lightweight MedBLIP-style transformer projects image and text into a shared 256-dimensional space with a symmetric contrastive loss, and a frozen BioMedLM decoder generates the report autoregressively. The model is trained on 81,076 mammograms curated from five public repositories with a unified preprocessing and label-to-report pipeline, and evaluated on 13,242 held-out report pairs."
plainLanguageSummary: "Most breast imaging AI outputs a single number. This work asks whether a model can instead write the structured report — laterality, view, abnormality type, BI-RADS category, malignancy grade — directly from a mammogram. Five public datasets were curated into one standardized 81,076-image corpus with reports derived from their labels. A frozen EVA-CLIP vision encoder and a frozen BioMedLM language model are joined by a small trained bridge transformer, so only the bridge and projection heads are learned. On 13,242 held-out report pairs the generated text reached BLEU 65.36, ROUGE-1 0.75, BERT-F1 0.88 and SBERT similarity 0.91, at roughly a seventh-grade reading level."
contribution: "Two things: a standardized 81,076-image multi-institutional mammography corpus with clinically structured reports derived from existing labels, and a compute-efficient end-to-end report-generation model in which both large backbones stay frozen."
method: "Frozen EVA-CLIP ViT patch features and tokenized text are projected by a trainable MedBLIP-style transformer into a shared 256-D space and aligned with a symmetric contrastive loss. The image embedding is injected between the prompt and the target report tokens for a frozen BioMedLM decoder, with cross-entropy computed only over the report segment. AdamW, cosine annealing, 10% warm-up, mixed precision, 10 epochs on a single NVIDIA Quadro RTX 8000."
keyResults:
  - "Overall on 13,242 test report pairs: BLEU 65.36, ROUGE-1 0.75, ROUGE-2 0.70, METEOR 0.76, BERT-F1 0.88, BERT-recall 0.90, SBERT similarity 0.91."
  - "Average Flesch–Kincaid grade level of the generated reports was 7.04."
  - "Best per-dataset performance on KAU-BCMD (BLEU 85.86, ROUGE-1 0.92, BERT-F1 0.96); weakest on INbreast (BLEU 53.01, ROUGE-1 0.70, BERT-F1 0.86)."
  - "Training corpus: 81,076 images from VinDr-Mammo, RSNA, CMMD, INbreast and KAU-BCMD, split 59,089 / 8,745 / 13,242."
relevance: "A model that produces a structured report rather than a score can be checked sentence by sentence, and could extend screening capacity where radiology specialists are scarce. Freezing both backbones also makes the approach reproducible on a single GPU."
limitation: "No baseline comparison and no ablation are reported, and the metrics are lexical and semantic overlap with label-derived reports — not a reader study. Clinically relevant evaluation is left to future work."
links:
  doi: "10.1109/NSS/MIC/RTSD57106.2025.11286311"
tags:
  - "Vision-Language Models"
  - "LLM / GenAI"
  - "Medical Imaging"
featured: true
citation: "A. Bhandary Panambur, S. Wind, S. Bayer, A. Maier. MammoBLIP: End-to-End Mammography Report Generation with Vision-Language Models and Public Multi-Institutional Datasets. 2025 IEEE NSS/MIC/RTSD, Yokohama, Japan, 2025. doi:10.1109/NSS/MIC/RTSD57106.2025.11286311"
story:
  readTime: "1 min read"
  shortTitle: "MammoBLIP"
  researchQuestion: "Can a mammogram be turned straight into a report?"
  storyIntro: "Freeze a vision foundation model, freeze a biomedical LLM, train only the small bridge between them — and see how close the generated report gets to the reference."
  heroFigure:
    src: "/research/mammoblip-mammography-report-generation/mammoblip-pipeline.webp"
    alt: "MammoBLIP pipeline: five public dataset sources feed a standardized preprocessing step; a mammogram goes through a frozen EVA-CLIP image encoder and the paired report through a tokenizer, both into the MammoBLIP transformer, whose projected embeddings drive a frozen BioMedLM to produce a generated radiology report"
    caption: "Five public repositories are standardized into one corpus. Only the MammoBLIP transformer and the projection heads are trained; EVA-CLIP and BioMedLM stay frozen (marked f)."
    label: "FIG 1 / PIPELINE"
    sourceLabel: "My figure — from the paper and my PhD thesis"
    orientation: "portrait"
    width: 1300
    height: 1603
  signalStats:
    - value: "81,076"
      label: "Mammograms curated"
      detail: "VinDr · RSNA · CMMD · INbreast · KAU"
    - value: "13,242"
      label: "Test report pairs"
      detail: "Held out across all five sources"
    - value: "65.36"
      label: "BLEU overall"
      tone: "positive"
    - value: "7.04"
      label: "Flesch–Kincaid grade"
      detail: "Readability of generated reports"
  sections:
    - id: "question"
      label: "01 / THE QUESTION"
      title: "A BI-RADS score is not a report."
      body:
        - "Breast imaging models are built one task at a time — detect a mass, classify malignancy, estimate risk. A radiologist instead writes a paragraph that ties laterality, view, findings, BI-RADS category and a recommendation together."
        - "Whether an image-to-text model can produce that paragraph for mammography had not been examined at scale."
    - id: "idea"
      label: "02 / THE IDEA"
      title: "Train the bridge, not the backbones."
      body:
        - "A frozen EVA-CLIP Vision Transformer supplies patch features; a frozen BioMedLM writes the text. Between them sits a small trainable transformer that projects image and text into one 256-dimensional space, aligned with a symmetric contrastive loss."
        - "The image embedding is inserted between the prompt and the target tokens, and the language loss is computed only over the report. Everything fits on one GPU."
      pipeline:
        - "Mammogram"
        - "Frozen EVA-CLIP"
        - "Bridge transformer"
        - "Shared 256-D space"
        - "Frozen BioMedLM"
        - "Structured report"
    - id: "tested"
      label: "03 / WHAT WE TESTED"
      title: "One corpus out of five public repositories."
      body:
        - "VinDr-Mammo, RSNA, CMMD, INbreast and KAU-BCMD were put through a single DICOM-to-PNG, cropping and normalization pipeline, and their structured labels were converted into consistent radiology-style reports."
        - "Stratified sampling kept the clinical-attribute distributions comparable across splits."
      metrics:
        - value: "59,089"
          label: "Train images"
        - value: "8,745"
          label: "Validation images"
        - value: "13,242"
          label: "Test images"
        - value: "05"
          label: "Public sources"
          detail: "All openly licensed"
    - id: "result"
      label: "04 / MAIN RESULT"
      title: "Fluent and semantically close — and dataset-dependent."
      body:
        - "Over all 13,242 test pairs the generated reports reached BLEU 65.36, ROUGE-1 0.75, BERT-F1 0.88 and SBERT similarity 0.91, at a reading level around grade seven."
        - "The spread between sources is the more interesting number: standardized, homogeneous reporting (KAU) is far easier to reproduce than an older, more heterogeneous cohort (INbreast)."
      table:
        caption: "Reported generation metrics by test dataset (test-set size in brackets)."
        columns: ["Dataset", "BLEU", "ROUGE-1", "BERT-F1", "SBERT"]
        rows:
          - cells: ["KAU-BCMD (334)", "85.86", "0.92", "0.96", "0.93"]
          - cells: ["VinDr-Mammo (4,000)", "75.45", "0.84", "0.92", "0.92"]
          - cells: ["RSNA (8,285)", "60.66", "0.71", "0.86", "0.91"]
          - cells: ["CMMD (560)", "56.12", "0.71", "0.86", "0.90"]
          - cells: ["INbreast (63)", "53.01", "0.70", "0.86", "0.93"]
          - cells: ["Overall (13,242)", "65.36", "0.75", "0.88", "0.91"]
            highlight: true
        footnote: "Values exactly as reported. No internal baseline or ablation was run, so these are absolute scores rather than a comparison."
    - id: "matters"
      label: "05 / WHY IT MATTERS"
      title: "Text output is checkable output."
      body:
        - "A generated report can be read and corrected line by line, which a single probability cannot. That makes it a more useful object for clinical scrutiny — and a better starting point for grounding and explainability work."
        - "This model became the baseline for the follow-up work on token-level attention grounding."
  limitation: "There is no baseline model, no ablation and no reader study, and the references are reports derived from dataset labels rather than free-text clinical dictation. High overlap scores therefore say the model learned the label-to-report mapping well, not that it is clinically reliable."
---
