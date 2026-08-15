#!/usr/bin/env bash
#
# Script de mise à jour et déploiement du portfolio (Linux / macOS).
#
# Le déploiement réel se fait via GitHub Actions (.github/workflows/deploy.yml)
# à chaque push sur "main". Ce script prépare et déclenche ce déploiement :
#   1. commit des changements en cours (si besoin)
#   2. fusion de la branche courante dans "main" (si besoin)
#   3. installation des dépendances + lint + build local (vérification)
#   4. push de "main" vers origin, ce qui lance le déploiement GitHub Pages
#
# Usage :
#   ./scripts/deploy.sh          # mode interactif
#   ./scripts/deploy.sh --yes    # ne pose aucune question (CI / automatisation)
#   ./scripts/deploy.sh --skip-build   # saute la vérification de build locale

set -euo pipefail

# --- Couleurs pour les messages -------------------------------------------
if [ -t 1 ]; then
    C_RESET='\033[0m'; C_BOLD='\033[1m'; C_GREEN='\033[32m'; C_YELLOW='\033[33m'; C_RED='\033[31m'
else
    C_RESET=''; C_BOLD=''; C_GREEN=''; C_YELLOW=''; C_RED=''
fi

info()  { printf "%b\n" "${C_BOLD}==>${C_RESET} $1"; }
warn()  { printf "%b\n" "${C_YELLOW}!!${C_RESET} $1"; }
error() { printf "%b\n" "${C_RED}Erreur:${C_RESET} $1" >&2; }
ok()    { printf "%b\n" "${C_GREEN}OK${C_RESET} $1"; }

# --- Options ----------------------------------------------------------------
ASSUME_YES=0
SKIP_BUILD=0
for arg in "$@"; do
    case "$arg" in
        --yes|-y) ASSUME_YES=1 ;;
        --skip-build) SKIP_BUILD=1 ;;
        --help|-h)
            sed -n '2,15p' "$0" | sed 's/^# \{0,1\}//'
            exit 0
            ;;
        *)
            error "Option inconnue : $arg (voir --help)"
            exit 1
            ;;
    esac
done

confirm() {
    # confirm "question" -> renvoie 0 (oui) ou 1 (non)
    if [ "$ASSUME_YES" -eq 1 ]; then
        return 0
    fi
    read -r -p "$1 [o/N] " reply
    case "$reply" in
        [oOyY]*) return 0 ;;
        *) return 1 ;;
    esac
}

# --- Se placer à la racine du dépôt ----------------------------------------
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$REPO_ROOT"

if ! command -v git >/dev/null 2>&1; then
    error "git est introuvable dans le PATH."
    exit 1
fi
if ! command -v npm >/dev/null 2>&1; then
    error "npm est introuvable dans le PATH. Installez Node.js avant de continuer."
    exit 1
fi
if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
    error "$REPO_ROOT n'est pas un dépôt git."
    exit 1
fi

MAIN_BRANCH="main"
CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD)"
info "Dépôt : $REPO_ROOT (branche courante : $CURRENT_BRANCH)"

# --- 1. Commit des changements en cours -------------------------------------
if [ -n "$(git status --porcelain)" ]; then
    warn "Des changements ne sont pas commités sur '$CURRENT_BRANCH' :"
    git status --short
    if confirm "Committer ces changements maintenant ?"; then
        if [ "$ASSUME_YES" -eq 1 ]; then
            COMMIT_MSG="Mise à jour du site ($(date '+%Y-%m-%d %H:%M'))"
        else
            read -r -p "Message de commit [Mise à jour du site] : " COMMIT_MSG
            COMMIT_MSG="${COMMIT_MSG:-Mise à jour du site}"
        fi
        git add -A
        git commit -m "$COMMIT_MSG"
        ok "Changements commités."
    else
        error "Impossible de continuer avec des changements non commités."
        exit 1
    fi
else
    ok "Aucun changement en attente sur '$CURRENT_BRANCH'."
fi

# --- 2. Fusion dans main -----------------------------------------------------
if [ "$CURRENT_BRANCH" != "$MAIN_BRANCH" ]; then
    warn "Vous n'êtes pas sur '$MAIN_BRANCH' (branche courante : $CURRENT_BRANCH)."
    if ! confirm "Fusionner '$CURRENT_BRANCH' dans '$MAIN_BRANCH' et déployer ?"; then
        error "Déploiement annulé : restez sur '$MAIN_BRANCH' pour publier le site."
        exit 1
    fi
    git fetch origin "$MAIN_BRANCH"
    git checkout "$MAIN_BRANCH"
    git pull --ff-only origin "$MAIN_BRANCH"
    if ! git merge --no-edit "$CURRENT_BRANCH"; then
        error "Conflit lors de la fusion de '$CURRENT_BRANCH' dans '$MAIN_BRANCH'."
        error "Résolvez les conflits manuellement, committez, puis relancez ce script."
        exit 1
    fi
    ok "'$CURRENT_BRANCH' fusionnée dans '$MAIN_BRANCH'."
else
    info "Récupération des derniers changements distants..."
    git pull --ff-only origin "$MAIN_BRANCH"
fi

# --- 3. Dépendances, lint et build de vérification --------------------------
info "Installation des dépendances (npm install)..."
npm install

info "Vérification du code (npm run lint)..."
npm run lint

if [ "$SKIP_BUILD" -eq 1 ]; then
    warn "Build locale sautée (--skip-build)."
else
    info "Build locale de vérification (npm run build)..."
    if ! npm run build; then
        warn "Le build a échoué, nouvelle tentative avec NODE_OPTIONS=--openssl-legacy-provider..."
        NODE_OPTIONS=--openssl-legacy-provider npm run build
    fi
    ok "Build locale réussie (dist/ généré, non poussé : le déploiement se fait via GitHub Actions)."
fi

# --- 4. Push vers origin/main -> déclenche le déploiement GitHub Pages ------
info "Envoi de '$MAIN_BRANCH' vers origin (déclenche le déploiement GitHub Pages)..."
git push origin "$MAIN_BRANCH"

REPO_URL="$(git config --get remote.origin.url | sed -E 's#git@github.com:#https://github.com/#; s#\.git$##')"
ok "Site poussé sur '$MAIN_BRANCH'."
echo
echo "Suivez le déploiement ici : ${REPO_URL}/actions"
echo "Le site sera à jour sur : https://doritothechips.github.io/portfolio/ (quelques minutes)"
