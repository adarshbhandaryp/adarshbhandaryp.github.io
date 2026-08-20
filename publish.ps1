<#
    publish.ps1 — stage, verify, commit and push the site.

    Usage (from anywhere):
        powershell -ExecutionPolicy Bypass -File C:\Work\home\publish.ps1

    Options:
        -SkipBuild     skip validate:stories + build (not recommended)
        -SkipCleanup   keep the unreferenced files instead of git rm-ing them
        -DryRun        show what would happen, change nothing

    It refuses to commit if the build fails, so a broken site cannot reach
    GitHub Pages. Nothing is pushed until the build is green.
#>

[CmdletBinding()]
param(
    [switch]$SkipBuild,
    [switch]$SkipCleanup,
    [switch]$DryRun
)

$ErrorActionPreference = 'Stop'
$repo = 'C:\Work\home'

function Step($msg) { Write-Host "`n=== $msg" -ForegroundColor Cyan }
function Ok($msg)   { Write-Host "    $msg" -ForegroundColor Green }
function Warn($msg) { Write-Host "    $msg" -ForegroundColor Yellow }
function Die($msg)  { Write-Host "`nABORTED: $msg" -ForegroundColor Red; exit 1 }

if (-not (Test-Path (Join-Path $repo '.git'))) { Die "no git repository at $repo" }
Set-Location $repo

# ---------------------------------------------------------------- sanity
Step 'Repository'
$branch = (git rev-parse --abbrev-ref HEAD).Trim()
$remote = (git remote get-url origin).Trim()
Ok "branch : $branch"
Ok "remote : $remote"
if ($branch -ne 'main') { Warn "you are on '$branch', not 'main' — GitHub Pages deploys from main" }

# ------------------------------------------------------------- cleanup
# Files that nothing references any more. Deleting them is optional; the site
# builds identically either way. -f because some are already untracked.
if (-not $SkipCleanup) {
    Step 'Removing unreferenced files'
    $dead = @(
        'src/data/research-story-sources.json',
        'src/data/projects.json',
        'src/data/capabilities.json',
        'src/data/researchGraph.json',
        'src/data/impact.json',
        'src/data/dummy.json',
        'src/components/ResearchConstellation.astro',
        'src/components/ScaleSection.astro',
        'public/publication-figures/aucreshaping-roc.svg',
        'public/publication-figures/breast-mri-ai-interface.svg',
        'public/publication-figures/mammography-ai-roc.svg',
        'public/publication-figures/patchclip-diagram.svg',
        'public/publication-figures/age-method-overview.jpg',
        'RESEARCH_STORY_IMPORT_REPORT.md'
    )
    foreach ($f in $dead) {
        if (Test-Path $f) {
            if ($DryRun) { Warn "would remove $f" }
            else { git rm -q -f --ignore-unmatch $f 2>$null; Ok "removed $f" }
        }
    }
    # The original JPEGs are superseded by the .webp versions but are your
    # source photos, so they are kept. To drop them too (saves ~2.4 MB):
    #   git rm -q public/bvm2024.jpeg public/cvip2025.jpeg public/ieee.jpeg `
    #             public/prs2025.jpeg public/spie.jpeg public/profile_photo.jpg
}

# --------------------------------------------------------------- verify
if (-not $SkipBuild) {
    Step 'Verifying content'
    npm run validate:stories
    if ($LASTEXITCODE -ne 0) { Die 'validate:stories failed — nothing committed' }
    Ok 'content checks passed'

    Step 'Building'
    npm run build
    if ($LASTEXITCODE -ne 0) { Die 'build failed — nothing committed' }
    Ok 'build succeeded'
}

# --------------------------------------------------------------- commit
Step 'Changes to commit'
git status --short
$pending = git status --porcelain
if (-not $pending) { Warn 'working tree is clean — nothing to commit'; exit 0 }

$message = @'
Replace Research OS branding with real identity; rebuild publications from thesis sources

- Remove ABP / Research OS branding and the Research|Recruiter mode toggle; one site for all readers
- Hero: 5 expertise signals replace the ~100K images / #4 ODELIA stat strip
- Import 19 real figures from the PhD thesis and manuscripts (Grad-CAM, attention maps,
  slice-probability profiles, per-class AUC, ablations, architecture diagrams)
- Delete all AI-generated publication illustrations; text-only cards where no real visual exists
- Verify all 23 publications against DOI/arXiv/PubMed/proceedings; fix 3 wrong titles and add
  DOIs for BE-WISE, MammoBLIP, MM-DETR, Exemplar Med-DETR, PatchCLIP and the ECR exhibits
- Add BE-WISER and the explainable mammography VLM as new entries
- Rewrite every summary from thesis LaTeX with exact reported metrics and dataset context
- Publication pages restructured to a 1-min brief; add scripts/validate-stories.mjs QC gate
- Correct LinkedIn URL and add Google Scholar across hero, contact, nav, CV and JSON-LD sameAs
- Add Talks to the main nav so the conference gallery is reachable without the command palette

Pre-application review:
- Fix MM-DETR mAP delta (7.4 points absolute, not 12.8%) and an off-by-one task count in AGE
- Remove an internal editorial note that was rendering on 20 pages via related-work cards
- Unify job title across page titles, CV header and JSON-LD; soften one unquantified SOTA claim
- Re-encode talk photos and portrait to WebP: 2.68 MB -> 0.98 MB
- Raise minimum text size from 7.7px to a 10px floor; add missing h1 on /talks/
- Truncate publication meta descriptions to ~155 chars for search snippets
- Remove the global accuracy notice now that every link and DOI has been verified

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_0152znbqXGJc5HpjctnfPsVV
'@

if ($DryRun) {
    Step 'Dry run — commit message that would be used'
    Write-Host $message
    Warn 'nothing staged, committed or pushed'
    exit 0
}

Step 'Committing'
git add -A
$tmp = Join-Path $env:TEMP 'site-commit-msg.txt'
$message | Set-Content -Path $tmp -Encoding UTF8
git commit -F $tmp
if ($LASTEXITCODE -ne 0) { Remove-Item $tmp -Force; Die 'git commit failed' }
Remove-Item $tmp -Force
Ok (git log -1 --oneline)

# ----------------------------------------------------------------- push
Step 'Pushing'
git push origin $branch
if ($LASTEXITCODE -ne 0) {
    Die @'
git push failed.

Most likely you need to authenticate. Either:
  * install GitHub CLI and run:  gh auth login
  * or push once from VS Code / GitHub Desktop so Windows Credential Manager stores the token
Then re-run this script — the commit is already made, so it will just push.
'@
}

Ok 'pushed'
Write-Host "`nGitHub Actions will now build and deploy." -ForegroundColor Cyan
Write-Host "  Actions : https://github.com/adarshbhandaryp/adarshbhandaryp.github.io/actions"
Write-Host "  Live in ~1-2 min : https://adarshbhandaryp.github.io/"
