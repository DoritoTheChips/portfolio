#
# Script de mise à jour et deploiement du portfolio (Windows / PowerShell).
#
# Le deploiement reel se fait via GitHub Actions (.github/workflows/deploy.yml)
# a chaque push sur "main". Ce script prepare et declenche ce deploiement :
#   1. commit des changements en cours (si besoin)
#   2. fusion de la branche courante dans "main" (si besoin)
#   3. installation des dependances + lint + build local (verification)
#   4. push de "main" vers origin, ce qui lance le deploiement GitHub Pages
#
# Usage :
#   .\scripts\deploy.ps1                # mode interactif
#   .\scripts\deploy.ps1 -Yes           # ne pose aucune question
#   .\scripts\deploy.ps1 -SkipBuild     # saute la verification de build locale
#
# Si l'execution de scripts est bloquee par la politique PowerShell, lancez :
#   powershell -ExecutionPolicy Bypass -File .\scripts\deploy.ps1

param(
    [switch]$Yes,
    [switch]$SkipBuild
)

$ErrorActionPreference = "Stop"

function Write-Info  ($msg) { Write-Host "==> $msg" -ForegroundColor Cyan }
function Write-Warn  ($msg) { Write-Host "!! $msg" -ForegroundColor Yellow }
function Write-Ok    ($msg) { Write-Host "OK $msg" -ForegroundColor Green }
function Write-ErrorMsg ($msg) { Write-Host "Erreur: $msg" -ForegroundColor Red }

function Confirm-Action ($question) {
    if ($Yes) { return $true }
    $reply = Read-Host "$question [o/N]"
    return ($reply -match '^[oOyY]')
}

function Invoke-Checked ($command, $cmdArgs) {
    & $command @cmdArgs
    if ($LASTEXITCODE -ne 0) {
        throw "La commande '$command $($cmdArgs -join ' ')' a échoué (code $LASTEXITCODE)."
    }
}

# --- Se placer a la racine du depot -----------------------------------------
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$RepoRoot = Resolve-Path (Join-Path $ScriptDir "..")
Set-Location $RepoRoot

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-ErrorMsg "git est introuvable dans le PATH."
    exit 1
}
if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
    Write-ErrorMsg "npm est introuvable dans le PATH. Installez Node.js avant de continuer."
    exit 1
}
git rev-parse --is-inside-work-tree *> $null
if ($LASTEXITCODE -ne 0) {
    Write-ErrorMsg "$RepoRoot n'est pas un depot git."
    exit 1
}

$MainBranch = "main"
$CurrentBranch = (git rev-parse --abbrev-ref HEAD).Trim()
Write-Info "Depot : $RepoRoot (branche courante : $CurrentBranch)"

try {
    # --- 1. Commit des changements en cours ---------------------------------
    $statusOutput = git status --porcelain
    if ($statusOutput) {
        Write-Warn "Des changements ne sont pas commités sur '$CurrentBranch' :"
        git status --short
        if (Confirm-Action "Committer ces changements maintenant ?") {
            if ($Yes) {
                $commitMsg = "Mise à jour du site ($(Get-Date -Format 'yyyy-MM-dd HH:mm'))"
            } else {
                $commitMsg = Read-Host "Message de commit [Mise à jour du site]"
                if ([string]::IsNullOrWhiteSpace($commitMsg)) { $commitMsg = "Mise à jour du site" }
            }
            git add -A
            git commit -m "$commitMsg"
            Write-Ok "Changements commités."
        } else {
            Write-ErrorMsg "Impossible de continuer avec des changements non commités."
            exit 1
        }
    } else {
        Write-Ok "Aucun changement en attente sur '$CurrentBranch'."
    }

    # --- 2. Fusion dans main -------------------------------------------------
    if ($CurrentBranch -ne $MainBranch) {
        Write-Warn "Vous n'êtes pas sur '$MainBranch' (branche courante : $CurrentBranch)."
        if (-not (Confirm-Action "Fusionner '$CurrentBranch' dans '$MainBranch' et déployer ?")) {
            Write-ErrorMsg "Déploiement annulé : restez sur '$MainBranch' pour publier le site."
            exit 1
        }
        git fetch origin $MainBranch
        git checkout $MainBranch
        git pull --ff-only origin $MainBranch
        git merge --no-edit $CurrentBranch
        if ($LASTEXITCODE -ne 0) {
            Write-ErrorMsg "Conflit lors de la fusion de '$CurrentBranch' dans '$MainBranch'."
            Write-ErrorMsg "Résolvez les conflits manuellement, committez, puis relancez ce script."
            exit 1
        }
        Write-Ok "'$CurrentBranch' fusionnée dans '$MainBranch'."
    } else {
        Write-Info "Récupération des derniers changements distants..."
        git pull --ff-only origin $MainBranch
    }

    # --- 3. Dependances, lint et build de verification -----------------------
    Write-Info "Installation des dépendances (npm install)..."
    Invoke-Checked "npm" @("install")

    Write-Info "Vérification du code (npm run lint)..."
    Invoke-Checked "npm" @("run", "lint")

    if ($SkipBuild) {
        Write-Warn "Build locale sautée (-SkipBuild)."
    } else {
        Write-Info "Build locale de vérification (npm run build)..."
        & npm run build
        if ($LASTEXITCODE -ne 0) {
            Write-Warn "Le build a échoué, nouvelle tentative avec NODE_OPTIONS=--openssl-legacy-provider..."
            $env:NODE_OPTIONS = "--openssl-legacy-provider"
            try {
                Invoke-Checked "npm" @("run", "build")
            } finally {
                Remove-Item Env:\NODE_OPTIONS -ErrorAction SilentlyContinue
            }
        }
        Write-Ok "Build locale réussie (dist/ généré, non poussé : le déploiement se fait via GitHub Actions)."
    }

    # --- 4. Push vers origin/main -> declenche le deploiement GitHub Pages ---
    Write-Info "Envoi de '$MainBranch' vers origin (déclenche le déploiement GitHub Pages)..."
    Invoke-Checked "git" @("push", "origin", $MainBranch)

    $repoUrl = (git config --get remote.origin.url) -replace 'git@github.com:', 'https://github.com/' -replace '\.git$', ''
    Write-Ok "Site poussé sur '$MainBranch'."
    Write-Host ""
    Write-Host "Suivez le déploiement ici : $repoUrl/actions"
    Write-Host "Le site sera à jour sur : https://doritothechips.github.io/portfolio/ (quelques minutes)"
}
catch {
    Write-ErrorMsg $_.Exception.Message
    exit 1
}
