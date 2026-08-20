# FINAL WEBSITE RESEARCH AUDIT

Date of audit: 19 August 2026
Scope: `C:\Work\home` (website) · `C:\Work\PhD_Thesis` (read-only source) · public bibliographic record
Build: `npm run validate:stories` passes · `npm run build` produces 54 pages · axe-core WCAG 2.1 AA clean on 6 pages × 2 motion settings

**Read section 9 first.** Three claims previously on the site could not be verified from public sources, and one publication title has been corrected. Those are the only items standing between this site and removing the "FACTUALLY NOT CHECKED" notice.

---

## 1. Publications detected

23 entries after the audit (was 21). All are in `src/content/publications/`.

| # | Slug | Type | Author position | Visual brief |
|---|---|---|---|---|
| 1 | `attention-guided-erasing-transfer-learning-breast-abnormality` | journal | first | yes |
| 2 | `attention-guided-erasing-breast-density-bvm-2024` | workshop | first | yes |
| 3 | `random-histogram-equalization-breast-calcification` | workshop | first | yes |
| 4 | `neighborhood-representation-loss-cesm` | conference | first | yes |
| 5 | `dataset-informed-transfer-learning-framework` | preprint | first | yes |
| 6 | `mammoblip-mammography-report-generation` | conference | first | yes |
| 7 | `explainable-mammography-vlm` | preprint | joint first | yes |
| 8 | `be-wise-breast-mri-explanation` | conference | first | yes |
| 9 | `be-wiser-class-aware-slice-supervision` | preprint | first | yes |
| 10 | `luminal-subtypes-full-mammogram-transfer-learning` | preprint | first | no |
| 11 | `foundational-models-mammography-radiological-reasoning` | preprint | first | no |
| 12 | `skin-fold-positioning-error-classification` | preprint | first | no |
| 13 | `la-clip-lesion-aware-vision-language-pretraining` | conference | first | no |
| 14 | `ai-assistance-vietnamese-mammography-cohort` | conference | first | no |
| 15 | `ai-assisted-detection-high-breast-density` | conference | first | no |
| 16 | `ai-performance-breast-lesions-mri-chinese-cohort` | conference | second | no |
| 17 | `exemplar-med-detr-lesion-detection` | conference | third | no |
| 18 | `mm-detr-multiview-multimodal-mammography` | workshop | second | no |
| 19 | `opportunistic-risk-stratification-low-dose-chest-ct` | conference | second | no |
| 20 | `aucreshaping-high-specificity` | journal | fourth | no |
| 21 | `patch-clip-health-record-image-training` | journal | sixth | no |
| 22 | `unstained-white-blood-cell-classification` | journal (abstract) | third | no |
| 23 | `unlocking-a-medical-device-patent` | patent | first inventor | no |

**Added during this audit (2):**

- `be-wiser-class-aware-slice-supervision` — BE-WISER was in the thesis and on Research Square under CC BY 4.0, but was missing from the site entirely.
- `explainable-mammography-vlm` — thesis chapter 7 with its own author list and its own results. It is a *different manuscript* from entry 11; see section 9.

**Nothing was removed.** All 21 original entries are still present.

---

## 2. Online verification

Priority order used: DOI/publisher → arXiv → PubMed/PMC → official proceedings → FAU CRIS and Pattern Recognition Lab pages. Google Scholar, DBLP and Semantic Scholar were used for discovery only.

| Entry | Verified venue | DOI / ID | Source used | Status |
|---|---|---|---|---|
| Attention-guided erasing (journal) | Int J Comput Assist Radiol Surg **20(3), 433–440**, 2025 | `10.1007/s11548-024-03317-6` | Crossref, Springer, PubMed 39812891 | **CONFIRMED** · CC BY 4.0 |
| Attention-Guided Erasing (BVM) | BVM 2024, Erlangen, **pp. 13–18** | `10.1007/978-3-658-44037-4_8` · arXiv:2401.03912 | Springer, arXiv | **CONFIRMED** — DOI was missing from the site before, now added |
| Random Histogram Equalization | BVM 2022, Heidelberg, **pp. 173–178** | `10.1007/978-3-658-36932-3_38` · arXiv:2205.01684 | Springer, arXiv | **CONFIRMED** — arXiv ID added |
| Neighborhood representation loss (CESM) | SPIE Medical Imaging 2024: CAD, **vol. 12927, 129270F** | `10.1117/12.3004102` | SPIE Digital Library, OpenAlex | **CONFIRMED** |
| DITL framework | arXiv preprint; CVIP 2025 in print | arXiv:2607.26043 | arXiv | **CORRECTED** — real title located; site previously showed a working title with no link |
| MammoBLIP | 2025 IEEE NSS/MIC/RTSD, Yokohama | `10.1109/NSS/MIC/RTSD57106.2025.11286311` | Crossref, FAU CRIS | **CORRECTED TITLE** — see section 9 |
| Explainable mammography VLM | none — manuscript in preparation | — | thesis chapter + source manuscript | **UNPUBLISHED**, labelled as such |
| BE-WISE | BVM 2026, **pp. 10–17** | `10.1007/978-3-658-51100-5_2` | Springer, Crossref | **CONFIRMED** — DOI was absent from the site before |
| BE-WISER | Research Square preprint, posted 2 June 2026, in review | `10.21203/rs.3.rs-9855612/v1` | Research Square | **CONFIRMED** · CC BY 4.0 |
| Luminal subtypes | arXiv only — **no peer-reviewed venue found** | arXiv:2301.09282 | arXiv | **CONFIRMED as preprint** |
| Foundational models in mammography | journal submission, internal review | — | thesis `lit.bib` | **UNPUBLISHED**, labelled |
| Skin fold positioning error | journal submission, internal review | — | site + Siemens co-author list | **UNPUBLISHED**, labelled |
| Lesion-aware AI for mammography | ECR 2026, exhibit **C-15780** | `10.26044/ecr2026/C-15780` | FAU CRIS, NHR@FAU publication list | **TITLE CORRECTED** — see section 9 |
| Vietnamese cohort | ECR 2024, EPOS **C-16214** | `10.26044/ecr2024/C-16214` | EPOS (myESR) | **CONFIRMED** — AUC/sensitivity values retrieved and added |
| High breast density cohort | ECR 2025, EPOS **C-21046** | `10.26044/ecr2025/C-21046` | EPOS (myESR) | **CONFIRMED** — cohort size, ICC and the 97%/21% figures added |
| Chinese breast MRI cohort | ECR 2025, EPOS **C-21110** | `10.26044/ecr2025/C-21110` | EPOS (myESR) | **CONFIRMED** |
| Exemplar Med-DETR | MICCAI 2025, LNCS, **pp. 205–215** | `10.1007/978-3-032-04978-0_20` · arXiv:2507.19621 | Springer, arXiv | **CONFIRMED** — DOI added; full author list corrected from "et al." |
| MM-DETR | Deep-Breath Workshop, MICCAI 2025, **pp. 258–267** | `10.1007/978-3-032-05559-0_26` | Springer, Crossref | **CONFIRMED** |
| Opportunistic LDCT risk | BVM 2026, **pp. 427–434** | `10.1007/978-3-658-51100-5_84` | Springer | **CONFIRMED** — DOI added; accuracy/AUC values added |
| AUCReshaping | Scientific Reports **13, 21097**, 2023 | `10.1038/s41598-023-48482-x` | Nature, Crossref, PMC10689839 | **CONFIRMED** · CC BY 4.0 — full author list added |
| PatchCLIP | Scientific Reports **16, 14688**, 2026 | `10.1038/s41598-026-52235-x` | Nature, Crossref | **CONFIRMED** · CC BY 4.0 — full author list added |
| Unstained WBC | Int J Lab Hematol **45(S3), 3–137** (ISLH symposium abstract) | `10.1111/ijlh.14149` | FAU CRIS, Wiley | **CONFIRMED** — corrected from "journal article" to conference abstract; dataset size and F1 added |
| EP 3644550 A1 | European patent application | EP 3644550 A1 | previously-cited patentimages PDF | **NOT RE-VERIFIED** — see section 9 |

Metadata changes applied across the archive:

- Author names expanded from initials to full published forms and `et al.` placeholders replaced with the complete author lists (Exemplar Med-DETR, AUCReshaping, PatchCLIP, MM-DETR, Opportunistic LDCT).
- Volume, issue and page numbers added where the publisher record has them.
- DOIs added for 6 entries that previously had none.
- `type` corrected for the unstained-WBC entry (journal article → conference abstract in a journal supplement) and for DITL, luminal subtypes, BE-WISER and the two under-review manuscripts (→ `preprint`).
- New `peerReviewed` boolean drives a visible "not peer reviewed" banner on the 5 entries that need it.

---

## 3. Summary status

All 23 entries have a new `plainLanguageSummary` written from verified source material — the thesis LaTeX where it exists, otherwise the published abstract and the publisher record. Range 76–106 words, mean 95; the validator enforces 60–140 and reports outliers.

| Entry | Written from | Verified against | Words |
|---|---|---|---|
| Attention-guided erasing (journal) | thesis `paper-03` | IJCARS open-access article | 106 |
| AGE (BVM 2024) | thesis `paper-02` | arXiv:2401.03912 abstract | 102 |
| Random Histogram Equalization | thesis `paper-01` | arXiv:2205.01684 abstract | 96 |
| Neighborhood representation loss | thesis `paper-04` | SPIE record | 101 |
| DITL | thesis `paper-05` | arXiv:2607.26043 abstract | 104 |
| MammoBLIP | thesis `paper-06` + `tns.tex` | Crossref record | 103 |
| Explainable mammography VLM | thesis `paper-07` + source manuscript | internal only | 93 |
| BE-WISE | thesis `paper-09` | Springer/Crossref abstract | 100 |
| BE-WISER | thesis `paper-08` | Research Square abstract | 102 |
| Luminal subtypes | arXiv abstract | arXiv | 93 |
| Vietnamese cohort | EPOS exhibit | EPOS results page | 90 |
| High density cohort | EPOS exhibit | EPOS results page | 92 |
| Chinese MRI cohort | EPOS exhibit | EPOS results page | 99 |
| Exemplar Med-DETR | arXiv abstract | Springer record | 102 |
| MM-DETR | Springer record | Springer abstract | 92 |
| Opportunistic LDCT | Springer record | Springer abstract | 90 |
| AUCReshaping | Nature article | Crossref licence data | 95 |
| PatchCLIP | Nature article | Crossref licence data | 91 |
| Unstained WBC | IJLH abstract | FAU CRIS | 95 |
| Foundational models | thesis `lit.bib` | — (no results disclosed) | 87 |
| Skin fold | site + co-author list | — (no results disclosed) | 85 |
| Lesion-aware AI (ECR 2026) | FAU CRIS record | ECR record | 100 |
| EP 3644550 A1 | patent record | — | 76 |

Nine entries additionally have a **1-minute visual brief**: `THE QUESTION → THE IDEA → WHAT WE TESTED → MAIN RESULT → WHY IT MATTERS`, plus a `LIMITATION` block, real figures and a small result table. The old ~4-minute eight-section format was replaced.

Every entry also has a `limitation` field. In several cases this is the thesis's own stated limitation, quoted in substance rather than paraphrased away.

---

## 4. Figure status

Thesis figure sources were resolved by parsing every `\includegraphics` in the nine contribution chapters and following the paths. **There is no `\graphicspath` in the thesis**, so all relative paths resolve against `C:\Work\PhD_Thesis\`.

| Publication | Thesis figures found | Online figures available | Selected for the site | Why |
|---|---|---|---|---|
| AGE (journal) | 3 — `images/age_updated/{AGE_Updated_Final,attn_updated,qualitative}.pdf` | same figures in the CC BY 4.0 article | all 3 | Complete method → attention → qualitative chain. Rendered from the thesis PDFs (vector) rather than downloaded, so they are sharper than the publisher rasters. |
| AGE (BVM 2024) | 1 — `images/age/3454-fig1.pdf` | arXiv preprint | 1 (method) | The only figure in the paper; conveys the whole pipeline. Replaces the conference photo that was on this card. |
| Random Histogram Equalization | 4 EPS — `images/rhe/3258-img{1..4}.eps` | arXiv preprint | 2 (`img1`, `img3`) | `img1` is the Grad-CAM P=0 vs P=0.4 contrast — the fastest explanation of the result. `img3` is the full-equalization failure case, which is the paper's most interesting finding. `img2`/`img4` are near-duplicates of the two chosen. |
| Neighborhood representation loss | 3 — `images/dwnr/{Figures.pdf, miccairesults-1.png, miccairesults-2.png}` | none (paywalled SPIE) | 2 (`Figures.pdf`, `miccairesults-1`) | The 3-stage method composite, plus the cleaner of the two ablation plots. `miccairesults-2` is 25 grouped bars — unreadable at web scale. |
| DITL | 1 — `images/ditl/final_figure.pdf` | arXiv | 1 (framework) | Only figure in the paper. |
| MammoBLIP | 1 — `MammoBLIP.pdf` in the contribution folder | none (IEEE) | 1 (pipeline) | Only genuine figure; it also embeds a real input/generated report pair. |
| Explainable mammography VLM | 0 in the thesis tree — 2 recovered from `C:\Work\BAIOMED\MammoVLMBaio\` | none | 2 (architecture, token attention) | The token-level attention grid is the single strongest visual on the site. |
| BE-WISE | 9 — `images/bewise/*` | none (paywalled Springer) | 4 (framework, per-class AUC, margin ablation, slice profiles) | Full method + result + qualitative set. |
| BE-WISER | 0 in the thesis tree — 10 recovered from `C:\Work\Latex\final_bewise_ijcars\Figures\` | Research Square CC BY 4.0 | 3 (framework, localized malignant cases, ODELIA summary) | Method, the strongest qualitative case, and the chart that carries both the full-data ladder and the reduced-label result. |
| 14 remaining entries | none | some (see section 8) | 0 — text-only cards | No figure of mine exists for these. A text-only card is correct here. |

19 figures imported, 1.37 MB total, all WebP, all author-created:

```
attention-guided-erasing-breast-density-bvm-2024/age-density-method.webp                       1600x1158    75 KB
attention-guided-erasing-transfer-learning-breast-abnormality/age-attention-heads.webp         1382x991    109 KB
attention-guided-erasing-transfer-learning-breast-abnormality/age-method-overview.webp         1800x937    130 KB
attention-guided-erasing-transfer-learning-breast-abnormality/age-qualitative-comparison.webp  1440x922    126 KB
be-wise-breast-mri-explanation/bewise-framework.webp                                           1800x879     80 KB
be-wise-breast-mri-explanation/bewise-margin-ablation.webp                                     1600x615     49 KB
be-wise-breast-mri-explanation/bewise-per-class-auc.webp                                       1400x770     42 KB
be-wise-breast-mri-explanation/bewise-slice-profiles.webp                                      1800x367     52 KB
be-wiser-class-aware-slice-supervision/bewiser-framework.webp                                  1429x737     72 KB
be-wiser-class-aware-slice-supervision/bewiser-localized-malignant.webp                        1500x993     62 KB
be-wiser-class-aware-slice-supervision/bewiser-odelia-summary.webp                             1075x488     35 KB
dataset-informed-transfer-learning-framework/ditl-framework.webp                               1200x1343   107 KB
explainable-mammography-vlm/vlm-explainable-architecture.webp                                  1497x647     83 KB
explainable-mammography-vlm/vlm-token-attention.webp                                            706x724     68 KB
mammoblip-mammography-report-generation/mammoblip-pipeline.webp                                1300x1603   139 KB
neighborhood-representation-loss-cesm/dwnr-method-overview.webp                                1900x471     86 KB
neighborhood-representation-loss-cesm/dwnr-neighbor-ablation.webp                              1400x752     12 KB
random-histogram-equalization-breast-calcification/rhe-full-equalization-failure.webp          1009x349     34 KB
random-histogram-equalization-breast-calcification/rhe-gradcam-comparison.webp                 1009x349     27 KB
```

Conversion pipeline: PDF → PNG at 200 dpi (`pdftocairo`), EPS → PNG at 200 dpi (`ghostscript`, `-dEPSCrop`), whitespace trimmed, 14–18 px white margin added back, resized to ≤1900 px wide, encoded as WebP q88. **No figure was cropped in a way that changes its scientific content**; the only edit is uniform whitespace trimming. `bewise-slice-profiles.webp` is the one composite: two of the paper's own subfigures (correct vs misclassified malignant) placed side by side with a white gutter, which is how the paper itself presents them.

Nothing in `C:\Work\PhD_Thesis` was modified. Files there are read-only and were only read.

---

## 5. Grad-CAM / attention assets

| Asset | Source | Used | Where |
|---|---|---|---|
| Grad-CAM, calcification patch, P=0 vs P=0.4 | `images/rhe/3258-img1.eps` | yes | hero figure of the RHE brief |
| Grad-CAM, full-equalization failure case | `images/rhe/3258-img3.eps` | yes | RHE brief, "main result" |
| Grad-CAM, `3258-img2.eps` / `3258-img4.eps` | thesis | no | near-duplicates of the above |
| DINO attention heads, 5 tasks × 6 heads, selected head in red | `images/age_updated/attn_updated.pdf` | yes | AGE journal brief |
| Attention → mask → erased image chain, 5 tasks | `images/age_updated/qualitative.pdf` | yes | AGE journal brief |
| Attention heads + binary masks (density) | `images/age/3454-fig1.pdf` | yes | AGE BVM brief |
| Token-level attention, one heatmap per generated report token | `C:\Work\BAIOMED\MammoVLMBaio\AttentionVisualization.png` | yes | Explainable VLM brief |
| Slice-probability profiles vs Gaussian target (6 panels) | `images/bewise/3759-{Normal,Benign,Malignant,mis_*}.png` | 2 of 6 | BE-WISE brief |
| Localization case panels (pre/post/sub + profile) | `final_bewise_ijcars/Figures/good_hit_malignant_cases.pdf` | yes | BE-WISER brief |
| Benign / misclassified localization panels | `final_bewise_ijcars/Figures/{good_hit_benign,benign_as_normal,malignant_as_normal}_hit_cases.pdf` | no | staged and available; held back to keep the briefs at 1 minute |
| Averaged lesion-centred slice profiles (4 panels) | `final_bewise_ijcars/Figures/average_test_slice_profiles_*.png` | no | staged and available |

No Grad-CAM or attention visualization was altered, recoloured or re-scaled other than uniform resizing.

---

## 6. Result visualizations

| Type | Asset | Used |
|---|---|---|
| Per-class AUC bar chart with error bars | `images/bewise/3759-auc_per_class_bewise_final.pdf` | yes — BE-WISE brief |
| Margin (σ) ablation, AUC + ODELIA score | `images/bewise/3759-ablation.png` | yes — BE-WISE brief |
| ODELIA score ladder + reduced-label experiment | `final_bewise_ijcars/Figures/odelia_score_summary.pdf` | yes — BE-WISER brief |
| Neighbour-count ablation line plot | `images/dwnr/miccairesults-1.png` | yes — CESM brief |
| Neighbour × margin grouped bars (25 bars) | `images/dwnr/miccairesults-2.png` | no — too dense for web |
| Joint-margin ablation | `images/bewise/joint_margin_ablation_test_odelia.png` | **no — see section 9** |

Papers 01, 02, 03 and 05 contain **no result plot at all**. Rather than generate charts from their tables (which would be my rendering of the data, not theirs), those results are shown as **native HTML tables** with exact reported values, the metric name, the dataset, the test-set size and the significance level. Six such tables were built:

- AGE journal: 5 tasks × 3 methods macro F1 + p-values
- AGE BVM: random erasing vs AGE across 4 probabilities
- RHE: 6 probabilities × 4 metrics (including the P=1 failure row)
- CESM: 4 losses × accuracy / F1 / AUC
- DITL: 6 methods × accuracy / macro F1 / AUC on VinDr-Mammo density
- BE-WISE: 5 models × AUC / ODELIA score
- BE-WISER: 4 models × AUC / ODELIA under CE and focal loss
- MammoBLIP: 5 datasets + overall × BLEU / ROUGE-1 / BERT-F1 / SBERT
- Explainable VLM: 4 metrics vs the MammoBLIP baseline

Each table carries a footnote pointing to the paper for the full results, and no table cherry-picks: the AGE table includes the non-significant mass row, the RHE table includes the failure row, and the DITL entry states in prose that focal loss still holds the best AUC on two tasks.

---

## 7. Removed synthetic and decorative publication images

These were AI-generated or decorative illustrations standing in for research figures. All references are removed from the content and components. **The files are still on disk** — I cannot delete files on your machine, so remove them yourself:

```powershell
Remove-Item C:\Work\home\public\publication-figures -Recurse
```

| File | Was used for | Why removed |
|---|---|---|
| `public/publication-figures/mammography-ai-roc.svg` | ECR 2024 Vietnamese cohort **and** ECR 2025 density cohort | A hand-drawn "ROC-like" SVG used on two different studies, showing neither study's actual curve. |
| `public/publication-figures/breast-mri-ai-interface.svg` | ECR 2025 Chinese MRI cohort | Invented mock-up of an AI interface. |
| `public/publication-figures/aucreshaping-roc.svg` | AUCReshaping (Scientific Reports) | Illustration of the concept, not the paper's figure. |
| `public/publication-figures/patchclip-diagram.svg` | PatchCLIP (Scientific Reports) | Invented diagram. |
| `public/publication-figures/age-method-overview.jpg` | AGE journal entry + homepage fallback | A real figure, but a low-resolution raster. Superseded by `age-method-overview.webp` rendered from the thesis vector PDF. |

Two conference **photographs** were also removed from publication cards, where a photo of a person presenting was standing in for the paper's science:

| File | Was used for | Now |
|---|---|---|
| `public/bvm2024.jpeg` | AGE BVM 2024 publication card | replaced by the paper's method figure; photo still on `/talks/` |
| `public/spie.jpeg` | CESM SPIE 2024 publication card | replaced by the paper's method figure; photo still on `/talks/` |

The `image` / `imageAlt` / `figureCaption` / `sourceUrl` / `sourceLabel` fields were removed from the content schema entirely, so no entry can carry a decorative thumbnail again. A publication either has a real figure inside its `story.heroFigure`, or it gets a text-only card.

---

## 8. Copyright and manual review

Everything imported is a figure you created, taken either from your own thesis or from your own manuscript source folders. **No publisher graphic was downloaded.** Web fetching was used only for text metadata.

| Item | Licence position | Action |
|---|---|---|
| AGE journal figures | Article is **CC BY 4.0** (confirmed via Crossref licence metadata). Figures rendered from your thesis originals. | Published, with attribution and a link to the PMC copy. |
| AGE BVM 2024, RHE BVM 2022, BE-WISE BVM 2026, MM-DETR, Exemplar Med-DETR, Opportunistic LDCT | Springer chapters with **text-and-data-mining licence only, no CC BY**. | Only your own thesis-source figures used. No publisher PDF was scraped. Springer's author-reuse terms normally permit reuse of your own figures on a personal site, but **check your specific copyright transfer agreement** if you want to be strict. |
| CESM (SPIE) | Paywalled proceedings, no open licence found. | Figure taken from your thesis source, not from the SPIE PDF. Same author-reuse caveat as above. |
| MammoBLIP (IEEE) | No open-access evidence found. | Figure taken from your own `MammoBLIP.pdf`. IEEE permits authors to reuse their own figures on a personal website with a full citation, which the page carries. |
| BE-WISER (Research Square) | **CC BY 4.0** confirmed. | Published freely. |
| AUCReshaping, PatchCLIP (Scientific Reports) | **CC BY 4.0** confirmed — figures *would* be reusable with attribution. | **MANUAL DECISION REQUIRED (optional).** You are a co-author, not first author. I deliberately did not import figures from co-authored papers, per the "use my figures" rule. If you want them, both are CC BY 4.0 and legally reusable. |
| ECR EPOS exhibits (3) | Standard ESR/myESR copyright, not CC BY. Posters may also contain patient imagery. | **MANUAL RIGHTS REVIEW REQUIRED — nothing imported.** Do not lift poster graphics without checking ESR terms and the source institutions' consent. |
| `C:\Work\PhD_Thesis\publications\Journal of Forensic Sciences.pdf` | Publisher PDF sitting in the thesis tree | **Ignored.** Not referenced by any chapter and not your work as far as I can tell. Flagged in case it is misfiled. |

Patient imagery: every medical image on the site comes from a **public research dataset** — VinDr-Mammo, CBIS-DDSM, CDD-CESM, CMMD, INbreast, KAU-BCMD, RSNA, and the ODELIA Breast MRI Challenge release. No institution-internal cohort imagery is published. The West China Hospital, Hanoi Medical University Hospital and University Clinic Erlangen studies are represented by **text only**.

---

## 9. Scientific uncertainty — needs your factual verification

Clear these five items before removing the "FACTUALLY NOT CHECKED" notice.

### 9.1 MICCAI ODELIA Challenge 2025 "4th place" — REMOVED from the site pending evidence

This claim was previously in `profile.json`, `projects.json` and the Ask-Adarsh answers. Extensive searching (grand-challenge.org leaderboard, FAU CRIS, FAU LME pages, general web) found **no public record of your team on that leaderboard**.

I removed the ranking rather than publish an unverifiable placement on a public site, and replaced it with what *is* verifiable: that BE-WISE and BE-WISER are built and benchmarked on the multicenter ODELIA Breast MRI dataset and report the ODELIA score. **If you have a leaderboard screenshot, a certificate, or a public URL that shows the placement, send it and it goes straight back in** — it is a genuinely strong signal and I would rather have it on the page.

### 9.2 MammoBLIP title — CORRECTED

- Site had: *"MammoBLIP: End-to-End Mammography Report Generation Using a Curated, Standardized Multi-Institutional Public Dataset"*
- Published title (verified via Crossref, and matching your thesis chapter heading): *"MammoBLIP: End-to-End Mammography Report Generation with Vision-Language Models and Public Multi-Institutional Datasets"*

The old string is the name of the containing folder in your thesis tree, i.e. an earlier working title. The site now uses the published one. **Confirm this is right.**

### 9.3 "LA-CLIP" → the accepted ECR 2026 title — CORRECTED

- Site had: *"LA-CLIP: Lesion-Aware Vision-Language Pretraining for Mammography via ROI-Guided Contrastive Learning"*
- Verified accepted record (FAU CRIS, DOI `10.26044/ecr2026/C-15780`): *"Lesion-Aware AI for Mammography: Multi-Dataset Pretraining with ROI-Guided Contrastive Learning and Clinical Image Retrieval"*

The acronym "LA-CLIP" appears nowhere in the public record. The page now uses the accepted title and notes the previous working title in the summary. The **slug is still `la-clip-…`** — rename the file if you want the URL to match.

### 9.4 Two distinct VLM manuscripts — please confirm they really are distinct

| | Entry 11 | Entry 7 (new) |
|---|---|---|
| Title | Towards Foundational Models in Mammography: Leveraging Vision-Language Models for Radiological Reasoning | Explainable Vision-Language Models for Mammography Report Generation |
| Authors | Panambur, Bhat, Nguyen, Bayer, Maier | Panambur†, Sakr†, Nguyen, Maier, Bayer |
| Evidence | `lit.bib` key `panambur2025foundation`, "Journal submission", "Under internal review" | thesis chapter `paper-07`, source at `C:\Work\BAIOMED\MammoVLMBaio\` — **no bib entry anywhere** |
| Results shown | none | ROUGE-1 0.877 / ROUGE-2 0.843 / ROUGE-L 0.874 / exact match 0.524 |

Different author lists, so I treated them as two works and kept both. **If they are the same manuscript under two titles, delete one entry.** Also note entry 7 publishes results from a manuscript with no venue — say the word and I will strip the numbers back to a title-only card.

### 9.5 Patent EP 3644550 A1 — could not be re-verified in this session

The entry keeps what the site already had (inventors Panambur, Hager, Kuth; status *withdrawn*; the `patentimages` PDF link). Google Patents and Espacenet could not be fetched in this session, and a general search did not surface the record. **Check the EPO register** and confirm the inventor list and legal status. The page already says "withdrawn" and tells the reader to re-check, which is the honest framing for a withdrawn application.

### 9.6 Numbers I deliberately did not repeat verbatim

Your own texts contain a few loose or inconsistent figures. The site uses the raw values instead of the derived claims:

| Thesis / paper wording | Actual value | What the site says |
|---|---|---|
| AGE BVM: "significant gain of more than **3.5%**" (0.5594 → 0.5910) | **3.16** percentage points | quotes both raw F1 values, no percentage claim |
| DITL: "**relative** improvement of +1.8% in F1" over AGE | 1.8 percentage points **absolute** (relative would be 3.05%) | quotes 0.591 → 0.609 |
| CESM: best margin stated as **α = 0.2** in one paragraph and **α = 0.4** in another | figure annotation supports α = 0.4 | the margin value is not stated on the site |
| AGE journal conclusion: "three datasets, four tasks" | methods describe 4 dataset entries and 5 tasks (T1–T5) | site says five tasks across three public cohorts |
| BE-WISE: "**1,000 breasts**" split 814 / 102 / 104 | sums to 1,020 | site quotes the three split sizes, not the total |
| BE-WISE: "earliest" vs "early" vs "late" post-contrast in three places | inconsistent | site says "post-contrast" without an early/late claim |
| Papers 08/09 write "%" where they mean percentage points | — | site writes "pp" or "percentage points" |
| DITL: "nearly 0.5% gain" over Nebbia et al. | not reproducible from any table in the chapter | omitted |
| Experience: "~100,000 medical images curated" | verifiable figure is **81,076** images from five public datasets (MammoBLIP) | site says 81,076 |

`images/bewise/joint_margin_ablation_test_odelia.png` is **unreferenced by any thesis chapter**, and there is nothing in the sources saying whether it belongs to BE-WISE or BE-WISER. Not used. Tell me which paper it belongs to and it can be added.

---

## 10. Confidentiality — deliberately withheld

| Withheld | Reason |
|---|---|
| NHR@FAU project names, partner names, and the specifics of any current applied-AI project | Your instruction. The AI Systems section describes architecture and capability only, and carries a visible note saying so. |
| Any figure or result from the two under-review manuscripts beyond what is in the thesis abstract | Not public. The skin-fold and foundational-models entries contain **zero numbers**. |
| Institution-internal patient imagery from West China Hospital, Hanoi Medical University Hospital, University Clinic Erlangen | Never published. Those studies are text-only. |
| Named hospitals as sources of the ODELIA cohort | The papers say "multiple European institutions" and do not name them; neither does the site. |
| Siemens Healthineers product names and prototype internals | Product names appear only where the public record already names them (the ECR exhibits). Prototype internals: withheld. |
| `C:\Work` folders staged but not published: everything in `MammoVLMBaio` and `final_bewise_ijcars` except the 5 figures listed in section 4 | Only what the pages needed. |
| The BE-WISER annotation tool repo (`github.com/adarshbhandaryp/BEWISE_Tool`) | The preprint says it "will be made publicly available". I could not confirm it is live, so it is not linked. Confirm and it can be added as a Code link. |

No confidential content appears anywhere in this report.

---

## 11. What changed in the site itself

**Branding.** `ABP · RESEARCH OS` → `ADARSH BHANDARY P.` in the nav, footer, README and the removed constellation core. The phrase "Research OS" appears nowhere. No replacement product name was invented.

**Modes.** The `RESEARCH | RECRUITER` toggle is gone — markup, the `localStorage` key, the `setMode` handler, and all 12 `body[data-mode='recruiter']` CSS rules including the `[data-research-depth]` hiding rule in `global.css`. Where a section had two copies, the better one was kept and rewritten; nothing was dropped.

**Hero.** Headline metrics (`~100K images`, `#4 MICCAI ODELIA`, `FAU × Siemens × WCH`, `MEDICAL AI`) replaced by five expertise signals. Positioning line and one-sentence statement rewritten. The portrait keeps a subtle concept-node treatment with rotating research keywords (`SELF-SUPERVISION`, `MULTIMODALITY`, …) and no scan lines, brackets or biometric framing. `SCROLL TO INITIALIZE`, `IDEA FORMING...`, `RESEARCH MIND / ABP`, `IDEAS IN MOTION / 2026` and the `impact-hud` block are gone. Background particle count reduced 46 → 34 and opacity lowered.

**Sections.** Homepage is now: hero → AI Systems / Applied GenAI (8-stage chain + stack + current work) → From Data to Intelligence (6 stages, rewritten) → Featured Research (4 stories, small cards) → How the Work Evolved (new, 8 stages) → Skills (new, 6 groups) → Experience → Publications → Contact. Removed from the page: the fake GPU-cluster "DISTRIBUTED COMPUTE FABRIC" diagram and the research constellation graph. Renamed: `PUBLIC ENGINEERING EVIDENCE` → `WHAT I AM WORKING ON NOW`, `06 / FIELD NOTES / TALKS / RECOGNITION` → `TALKS / PRESENTING THE WORK`, `08 / CONNECT / BUILD THE NEXT USEFUL SYSTEM.` → `08 / CONTACT / GET IN TOUCH.`, `DRAG / SCROLL TO TRACE THE JOURNEY →` removed.

**Publication pages.** Story format cut from ~4 minutes / 8 sections to **1 minute / 5 sections + limitation**. `00 / PAPER SIGNAL / THE RESEARCH IN ONE PASS` → `IN ONE SENTENCE`; the `08 / 30-SECOND SUMMARY / THE PAPER, END TO END` block removed; per-section "20 sec" duration badges removed. Abstracts are collapsed behind `View original abstract + citation`. Added: native result tables, a "not peer reviewed" banner, a limitation section, and figure provenance labels ("My figure — from the paper and my PhD thesis"). `ScholarlyArticle` structured data now carries `sameAs`/`identifier` (DOI), `creativeWorkStatus`, and `isPartOf` only for journal articles.

**Archive.** Tags collapsed to a canonical set of nine so the topic filter is short: Self-Supervised Learning, Vision-Language Models, Multimodal AI, Foundation Models, Medical Imaging, Explainable AI, Clinical Validation, LLM / GenAI, Detection / Localization. Text-only cards get a designed year plate instead of fake artwork.

**Accessibility.** 21 low-contrast colours on dark surfaces raised to `#8ba0b8` (≥4.5:1 against all three dark surfaces). The CV page's fixed nav now has a solid dark backdrop — its white text was previously rendering on a light background at 1.09:1. Pipeline stages no longer sit at 0.45 opacity before the IntersectionObserver fires. axe-core (wcag2a/aa, wcag21a/aa) reports zero moderate-or-worse violations across homepage, archive, a visual brief, a text-only page, CV and talks, in both normal and `prefers-reduced-motion` settings. No horizontal overflow at 1440, 834 or 390 px.

---

## 12. Files now unreferenced (safe to delete)

Astro will not build these and they are not imported anywhere. I cannot delete files on your machine.

```powershell
Remove-Item C:\Work\home\public\publication-figures -Recurse
Remove-Item C:\Work\home\src\components\ScaleSection.astro
Remove-Item C:\Work\home\src\components\ResearchConstellation.astro
Remove-Item C:\Work\home\src\components\research\PaperTakeaway.astro
Remove-Item C:\Work\home\src\data\researchGraph.json
Remove-Item C:\Work\home\src\data\capabilities.json
Remove-Item C:\Work\home\src\data\projects.json
Remove-Item C:\Work\home\src\data\impact.json
Remove-Item C:\Work\home\src\data\dummy.json
Remove-Item C:\Work\home\src\data\research-story-sources.json
Remove-Item C:\Work\home\auth_test.txt
Remove-Item C:\Work\home\RESEARCH_STORY_IMPORT_REPORT.md
```

`projects.json` and `impact.json` contain the ODELIA placement claim discussed in 9.1 — if you restore that claim, restore it in `src/data/experience.json` where the rest of the trajectory lives, not in these orphans.

---

## 13. Recruiter test

Checked against the six target roles (AI Research Scientist, Applied Scientist, Research Engineer, Multimodal AI Engineer, Medical AI Scientist, LLM / GenAI Research Engineer). Time to answer, reading top to bottom:

| Question | Answered by | Seconds |
|---|---|---|
| Who is he? | hero name + role line | 2 |
| What does he specialize in? | five expertise signals | 5 |
| Can he work with LLMs / VLMs? | expertise signal 2 and 3, then the AI Systems chain | 8 |
| Can he build actual AI systems? | AI Systems / Applied GenAI section, 8-stage chain + stack | 15 |
| Can he work with GPUs / HPC? | same section: GPU inference, SLURM, HPC clusters, distributed training | 18 |
| What research has he done? | Featured Research, 4 cards with real figures | 25 |
| What has he built? | same 4 cards + the current-work row | 25 |
| Has he published? | Publications ledger, 23 entries with DOIs | 30 |
| Has he worked with real clinical data? | Experience: West China Hospital, Hanoi cohorts, University Clinic Erlangen annotations | 35 |
| Where is his CV? | hero button, nav command palette, experience section, contact | 3 |
| How do I contact him? | hero social row and contact section | 3 |

The two weakest answers are "what has he built" (research artefacts are strong, but there is no shipped-product evidence — the confidentiality constraint makes that unavoidable) and "has he worked with real clinical data" (correct but at position 7, because it lives in Experience). If you want the clinical dimension earlier, the fourth expertise signal already names it — consider moving one clinical validation study into the Featured Research set.

---

## 14. Verification performed

- 23 publications cross-checked against Crossref, Springer, Nature, SPIE, IEEE, PubMed/PMC, arXiv, Research Square, ESR/EPOS, FAU CRIS and the FAU Pattern Recognition Lab pages.
- All nine thesis contribution chapters read in full; every `\includegraphics` path resolved and every result table transcribed.
- Every number on the site traced back to a thesis table, a published abstract or a publisher record. Nine internal inconsistencies found and handled (section 9.6).
- `npm run validate:stories`: 23 entries, 9 visual briefs, 19 figure references, 0 errors, 0 warnings — every figure path resolves on disk and no orphan assets.
- `npm run build`: 54 pages, no errors.
- Rendered at 1440 / 834 / 390 px: homepage, archive, two visual briefs, a text-only page, CV, talks. No console errors, no page errors, no horizontal overflow.
- axe-core WCAG 2.1 AA: clean on all six pages under both normal and reduced-motion settings.
- Long titles, publications without figures, publications with four figures, result tables and the `/home/…` legacy redirect route all render correctly.
