---
title: "Explainable Vision-Language Models for Mammography Report Generation"
authors:
  - "Adarsh Bhandary Panambur"
  - "Karim Mohamed Sakr"
  - "Tri-Thien Nguyen"
  - "Andreas Maier"
  - "Siming Bayer"
venue: "Manuscript in preparation — no venue yet"
year: 2026
type: "preprint"
status: "Manuscript in preparation · not peer reviewed"
peerReviewed: false
abstract: "Vision-language models are changing medical image understanding, but clinical translation in mammography is constrained by high-resolution grayscale imaging, subtle lesions, breast-density masking, and the need for interpretable evidence in a high-stakes screening setting. This work pairs domain-adapted SigLIP vision encoders with 4-billion-parameter language models and adds token-level attention visualization, so each generated report token can be mapped back to a spatial region of the mammogram. Six configurations were trained: two LLM backbones (Gemma 3 and the medically specialized MedGemma) crossed with three vision encoders (base vision tower, Mammo-SigLIP, Mammo-MedSigLIP), over the same 81,076-image public multi-institutional corpus used for MammoBLIP."
plainLanguageSummary: "This is the follow-up to MammoBLIP, and it asks a different question: not how good the report is, but whether you can see where each word came from. Domain-adapted SigLIP vision encoders are paired with 4B-parameter LLMs (Gemma 3 and MedGemma), and attention is aggregated across heads and layers to produce one heatmap per generated token. The best of six configurations reached ROUGE-1 0.877 and ROUGE-2 0.843, up 0.127 and 0.143 on MammoBLIP. The more interesting finding is negative: attention often lands on the right microcalcification cluster while the diagnosis is still wrong."
contribution: "Adds interpretable token-level grounding to mammography report generation, and documents that correct spatial grounding does not imply correct clinical interpretation — a gap that overlap metrics alone would hide."
method: "Domain-adapted SigLIP vision encoders (base vision tower, Mammo-SigLIP, Mammo-MedSigLIP) are projected into a 4B-parameter LLM (Gemma 3 or MedGemma). Structured annotations for view, laterality, abnormality type, pathology, BI-RADS category and breast density are converted into radiology-style reports and multi-turn question-answer pairs. For each generated token, attention weights are extracted, aggregated across heads and layers, and bicubically interpolated back to the input resolution to produce one heatmap per token."
keyResults:
  - "Best of six configurations: ROUGE-1 0.877, ROUGE-2 0.843, ROUGE-L 0.874, exact match 0.524."
  - "Against MammoBLIP: +0.127 absolute ROUGE-1 (approximately 17% relative) and +0.143 absolute ROUGE-2 (approximately 20% relative)."
  - "Six configurations trained: Gemma 3 and MedGemma (both 4B) crossed with a base vision tower, Mammo-SigLIP and Mammo-MedSigLIP."
  - "Qualitatively, diagnostic and recommendation tokens — calcification, BI-RADS 5, malignancy, urgent, biopsy — concentrate on the microcalcification cluster, while anatomical tokens such as laterality and view show a view-specific spatial bias."
  - "Correct spatial grounding did not guarantee correct clinical interpretation, exposing a gap between localization and reasoning."
relevance: "A report that comes with a per-token heatmap can be audited by a radiologist rather than accepted or rejected wholesale. Showing that grounding and diagnosis can diverge is a prerequisite for using these systems responsibly."
limitation: "The manuscript has not been peer reviewed, evaluation uses lexical-overlap metrics against label-derived reports with no reader study, and the paper does not identify which of the six configurations produced the best scores."
links: {}
tags:
  - "Vision-Language Models"
  - "LLM / GenAI"
  - "Explainable AI"
featured: true
citation: "A. Bhandary Panambur, K. M. Sakr, T.-T. Nguyen, A. Maier, S. Bayer. Explainable Vision–Language Models for Mammography Report Generation. Manuscript in preparation, 2026."
story:
  readTime: "1 min read"
  shortTitle: "Explainable mammography VLM"
  researchQuestion: "Can you see where each word of the report came from?"
  storyIntro: "Map every generated report token back to a region of the mammogram — then find out that the model can point at the right lesion and still reach the wrong conclusion."
  heroFigure:
    src: "/research/explainable-mammography-vlm/vlm-explainable-architecture.webp"
    alt: "Three-stage architecture: an input mammogram through a SigLIP vision encoder and linear projection into visual tokens, a text instruction through a tokenizer into text token embeddings, both combined into a Gemma 3 4B model with 34 transformer layers generating a report autoregressively, then attention weights extracted per token, aggregated across heads and layers and bicubically interpolated to produce one heatmap per generated token"
    caption: "Stage I encodes the mammogram with a domain-adapted SigLIP tower. Stage II generates the report with a 4B LLM. Stage III turns the attention behind each generated token into a heatmap over the input image."
    label: "FIG 1 / ARCHITECTURE"
    sourceLabel: "My figure — from the manuscript"
    orientation: "landscape"
    width: 1497
    height: 647
  signalStats:
    - value: "06"
      label: "Configurations trained"
      detail: "2 LLMs × 3 vision encoders"
    - value: "0.877"
      label: "ROUGE-1"
      detail: "MammoBLIP: 0.750"
      tone: "positive"
    - value: "+17%"
      label: "Relative ROUGE-1 gain"
      detail: "+0.127 absolute"
      tone: "positive"
    - value: "1 : 1"
      label: "Heatmap per token"
      detail: "Every generated word is grounded"
  sections:
    - id: "question"
      label: "01 / THE QUESTION"
      title: "A fluent report is not an accountable one."
      body:
        - "MammoBLIP could write a structured mammography report. It could not tell you which part of the image produced the phrase \"BI-RADS 5\" — and in screening, that is the part a radiologist needs in order to disagree with it."
        - "So the question became: can the report be grounded token by token, and does grounding actually track correctness?"
    - id: "idea"
      label: "02 / THE IDEA"
      title: "Domain-adapted SigLIP, an LLM, and one heatmap per token."
      body:
        - "Three vision encoders — a base tower, Mammo-SigLIP and Mammo-MedSigLIP — are each projected into two 4B-parameter language models, Gemma 3 and the medically specialized MedGemma. Six configurations in total."
        - "During generation, attention for each output token is aggregated across heads and layers and interpolated back to the input resolution. Every word in the report gets its own map."
      pipeline:
        - "Mammogram"
        - "Domain-adapted SigLIP"
        - "Projection"
        - "4B LLM (Gemma 3 / MedGemma)"
        - "Generated report"
        - "Per-token attention map"
    - id: "tested"
      label: "03 / WHAT WE TESTED"
      title: "The same corpus as MammoBLIP, so the comparison is fair."
      body:
        - "Over 81,076 full-field digital mammograms from the same five public multi-institutional sources, with structured annotations for view, laterality, abnormality type, pathology, BI-RADS category and breast density converted into reports and multi-turn question-answer pairs."
        - "Reporting quality was scored with ROUGE-1, ROUGE-2, ROUGE-L and exact match; grounding was assessed qualitatively through per-token attention case studies."
      metrics:
        - value: "81,076"
          label: "Mammograms"
          detail: "Same public corpus as MammoBLIP"
        - value: "4B"
          label: "LLM parameters"
          detail: "Gemma 3 and MedGemma"
        - value: "03"
          label: "Vision encoders"
          detail: "Base · Mammo-SigLIP · Mammo-MedSigLIP"
        - value: "0.524"
          label: "Exact match"
          detail: "Best configuration"
    - id: "result"
      label: "04 / MAIN RESULT"
      title: "Better text — and a warning about reading too much into attention."
      body:
        - "The best configuration reached ROUGE-1 0.877 and ROUGE-2 0.843, up 0.127 and 0.143 on MammoBLIP, which supports the case for adapting the vision encoder to mammography rather than using a general-purpose tower."
        - "The grounding maps behave sensibly: diagnostic and recommendation tokens converge on the microcalcification cluster while anatomical tokens show a view-specific bias. But correct localization and correct diagnosis came apart — a model can look in the right place and still be wrong."
      table:
        caption: "Report-generation metrics, best configuration versus the MammoBLIP baseline."
        columns: ["Metric", "MammoBLIP", "This work", "Δ"]
        rows:
          - cells: ["ROUGE-1", "0.750", "0.877", "+0.127"]
            highlight: true
          - cells: ["ROUGE-2", "0.700", "0.843", "+0.143"]
            highlight: true
          - cells: ["ROUGE-L", "0.740", "0.874", "+0.134"]
          - cells: ["Exact match", "—", "0.524", "—"]
        footnote: "MammoBLIP values are its reported overall test scores on 13,242 report pairs. The manuscript does not state which of the six configurations achieved the best result."
      figures:
        - src: "/research/explainable-mammography-vlm/vlm-token-attention.webp"
          alt: "Grid of attention heatmaps over a single mammogram, one panel per generated report token, including laterality, left, breast, view, craniocaudal, abnormality, calcification, BIRADS, 5, highly, suggestive, malignancy, recommend, urgent, tissue, diagnosis, biopsy, features, consistent, malignant and findings"
          caption: "One heatmap per generated token for a single case. The diagnostic and recommendation tokens — calcification, BI-RADS 5, malignancy, urgent, biopsy — converge on the same microcalcification cluster."
          label: "FIG 2 / TOKEN-LEVEL ATTENTION"
          sourceLabel: "My figure — from the manuscript"
          orientation: "portrait"
          width: 706
          height: 724
    - id: "matters"
      label: "05 / WHY IT MATTERS"
      title: "The negative result is the contribution."
      body:
        - "Per-token grounding gives a radiologist a way to audit a generated report sentence by sentence instead of trusting it as a block."
        - "And the finding that localization and diagnosis can diverge sets a limit on what attention maps are evidence for. Calibration and prospective validation have to come before any deployment claim."
  limitation: "Not peer reviewed. Evaluation is lexical overlap against label-derived reports, with no reader study and no clinical validation, and the manuscript does not say which configuration won."
---
