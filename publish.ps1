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
Raise type scale, cut homepage text, restore motion; fix blank /talks/ page

- Type scale: nothing renders below 12px (previous floor was 10px, with 363 of
  379 text elements sitting at 10-13px); body copy now renders at 14-15px
- Homepage word count 2855 -> 1993:
  - Publication ledger rows drop the 100-word summary in favour of the one
    reported result per paper (test AUC, BLEU, macro F1)
  - Featured research cards show a one-sentence hook plus two reported metrics
  - Experience shows three bullets per role, linking to the full CV for the rest
  - AI-systems stack and skills lists become chip sets
- Restore motion, all gated behind prefers-reduced-motion:
  - Six animated stage glyphs in "From data to intelligence" (patch grid,
    embedding bars, image-text alignment, reasoning tree, serving lanes,
    validation ring)
  - A highlight travelling 01 -> 08 through the AI-systems chain
  - Scroll-drawn rails and node pulses on the trajectory timeline
  - Figure zoom and light sweep on research cards; hover rails on list rows
  - Reported numbers count up on scroll; scroll-position bar under the nav
- Fix: /talks/ rendered completely blank in production. The reveal
  IntersectionObserver existed only on the homepage, so that page's .reveal
  elements stayed at opacity 0 permanently. Moved into BaseLayout so no page
  can render reveal markup without it, plus a scroll fallback that catches
  content an anchor jump skips past
- Fix: venue, year and status no longer print twice where the venue string
  already contains them; results from work that has not been peer reviewed
  render in amber rather than mint and always carry the label

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