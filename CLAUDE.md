# CLAUDE.md

This file provides guidance for Claude (and other AI coding assistants) when working in this repository.

## Project overview

This is a static, single-page portfolio website built with **Vue 2** (Options API) and **Vue CLI**. It's a fork of the [gamedev-portfolio](https://github.com/schouffy/gamedev-portfolio) template, used as the personal portfolio of **Rodin** (GitHub: `DoritoTheChips`), a game developer looking primarily for a Level Designer role. There is no backend; content is either static markup in views/components or dynamically rendered from TypeScript data files.

**The whole UI is in French** — nav labels, back links, footer, page copy and `.env` metadata. Keep any new copy in French too.

Deployed to GitHub Pages at `https://doritothechips.github.io/portfolio/` via GitHub Actions on every push to `main`.

## Commands

```bash
npm install                       # install dependencies
npm run serve                     # local dev server with hot reload
npm run build                     # production build -> dist/
npm run lint                      # eslint
```

If `npm run serve` / `npm run build` fails with an OpenSSL error (`ERR_OSSL_EVP_UNSUPPORTED`) on a modern local Node version, run with the legacy provider flag:

```bash
# PowerShell
$env:NODE_OPTIONS = '--openssl-legacy-provider'; npm run build

# bash
NODE_OPTIONS=--openssl-legacy-provider npm run build
```

Note: CI runs on Node 16, which doesn't need this flag (see `.github/workflows/deploy.yml`).

### Publishing

`scripts/deploy.sh` (Linux/macOS) and `scripts/deploy.ps1` (Windows) commit pending changes, merge the current branch into `main` if needed, run `npm install`/`lint`/`build` as a local sanity check, then push `main` to `origin` — the actual deploy is GitHub Actions building and publishing on that push. Both accept a "skip confirmation prompts" flag and a "skip the local build check" flag; run either with `--help` / `-SkipBuild` etc. to see the exact flags.

## Tech stack

- Vue 2.6 + vue-router 3 (hash mode, no server-side routing needed)
- TypeScript
- Vue CLI 4 (webpack under the hood)
- Less for styling

## Project structure

- `src/views/` — top-level pages (`About`, `Resume`, `Projects`, `ProjectDetails`, `Snippets`, `SnippetDetails`, `Contact`, `404`). Mostly static markup you edit directly.
  - `About` is the real intro (background, ENJMIN, Unity → Godot, alternance, the Level Designer job search) plus the owner's profile photo (`assets/pfp.png`, floated beside the text above 620px), and links to `/projects`, three project detail pages, and `/contact`.
  - `Snippets` is the view behind the **"Réalisations"** section (the file, component name and data stay `Snippet*`; only the UI label and the route were renamed). It lists the non-game work (music stashes, Source maps, game mods/cheats, unreleased Hoora prototypes, a 3D model, and Cinema 4D renders), followed by a "Plus à venir" note.
  - `Resume` shows the CV designed in Figma: a WebP render of the single page (`assets/cv/cv-rodin-zemour.webp`, 1400 px wide for a 760 px column) linking to the PDF, which is shipped untouched so its embedded fonts and its clickable links to Steam / itch.io / LinkedIn / YouTube survive. Re-render the WebP from the PDF whenever the CV is updated, and keep the size mentioned in the download link in sync. `SkillRate.vue` is still unused but kept for a future skills section.
  - `Contact` still has the upstream template's placeholder links; the owner will replace them with real handles.
- `src/components/` — reusable components (`Header`, `Footer`, `ItemList`, `ItemDetails`, `SkillRate`). `ItemList` renders vertical list rows for both Projects and Snippets; `ItemDetails` is the shared body for both detail pages. Keep them generic — don't fork a per-item-kind copy.
- `src/data/` — `ProjectData.ts` / `ProjectsData.ts` (23 real projects in one list, each with an `isPublished` flag, set to `true` only when the entry offers a playable or installable artifact — Steam, itch.io, Roblox, a store listing, or a direct download; a GitHub source link on its own, an unreleased prototype, or a build that has since been pulled all count as unpublished) and `SnippetData.ts` / `SnippetsData.ts` (the non-game work; snippets have a `type` field kept as metadata — `music | code | video | model | level | misc`, it no longer drives any visual tag — and an optional `projectIds` list of related project ids). List rows and detail pages are rendered dynamically from these files — edit data here rather than hardcoding HTML per project.
- `src/css/variables.less` — theme colors and other Less variables, including `@linkColor` / `@linkHoverColor` (the hyperlink blue), the translucent black surfaces used over the background photo (`@pageScrimColor` for the full-viewport scrim, `@panelBgColor` / `@panelHoverBgColor` for panels and nav tabs) and the derived accent colors: `@publishedAccentColor` / `@unpublishedAccentColor` for projects. Snippets use a fixed off-white accent (`@textColor`), the same value as `@publishedAccentColor`.
- `src/css/projects.less` — required home for any custom CSS referenced from project / snippet detail HTML in the data files. The block is scoped to the detail page's `.item-content` container, so class names like `.paragraph`, `iframe.youtube`, `.pc-screenshot`, `.phone-screenshot`, `.notice`, `.closing-note`, `.caption`, `video`, `audio` and `pre` only style content inside a detail page.
- `src/router/index.ts` — route definitions (hash-based). Routes: `/about`, `/resume`, `/projects`, `/projects/:id`, `/realisations`, `/realisations/:id`, `/contact`, `/404`. `/` redirects to `/projects` so the site opens on the projects list; the former `/snippets` and `/snippets/:id` paths redirect to their `/realisations` equivalents, and `*` redirects to `/404`. Uses `scrollBehavior` to reset scroll on navigation.
- `public/` — static assets copied as-is into the build. Project media lives under `public/assets/projects/`:
  - `public/assets/projects/icons/<slug>.png` — list thumbnails (note `vectorier.webp` is the one webp). **Keep them at 256 px on their longest side**; they render at 90 px, and a full-resolution source here is decoded on the main thread when the list paints — `bagarre.png` used to be 8184×7152 and cost 793 ms of decode on its own, which froze the projects tab and the background parallax with it.
  - `public/assets/projects/<slug>/<file>` — per-project `.mp4` captures, `.png` screenshots, `.wav` tracks and the odd downloadable (`double-tap-rom.nes`), referenced from `ProjectsData.ts` as `assets/projects/<slug>/<file>` (root-relative-ish, which resolves correctly under the hash router and the `/portfolio/` public path).
  - `public/assets/snippets/<slug>/<file>` — same convention for snippet media (`colontags/` with its `chaos/` subfolder of adaptive tracks, `flstudio/`, `ultrabox/`, `sus_minion/`).
  - `public/assets/pfp.png` — the profile photo used on the About page.
 - `public/assets/cv/` — the CV PDF and its WebP render, used by the `Resume` view.
 - `public/assets/background.png` — the page background photo (4968×2960, its stray white bottom strip cropped off so mirrored tiles stay seamless).
  - Some filenames contain spaces (e.g. `extra safe toy.ogg`); percent-encode them as `%20` in the data files.
  - Roughly 843 MB in total, and Vue CLI's CopyPlugin copies all of `public/` into `dist/`, so builds are slow and heavy (several minutes). That's expected, not a hang. Note GitHub Pages recommends staying under 1 GB per site, so the media budget is nearly spent — compress new videos before adding them.
- `.env` — site metadata (title, description, production URL), in French. Requires restarting `npm run serve` after changes.

## Deployment

- `vue.config.js` sets `publicPath: '/portfolio/'` in production so built asset URLs resolve correctly on the project's GitHub Pages path. If the repo is ever renamed or moved to a `<user>.github.io` root site, update this value accordingly.
- `.github/workflows/deploy.yml` builds the app (`npm install` + `npm run build`) and publishes `dist/` to GitHub Pages via `actions/deploy-pages`. GitHub Pages is configured with build source "GitHub Actions" (not a `gh-pages` branch).
- GitHub Pages only serves from **public** repositories on the GitHub Free plan. If the repo is private, Pages is disabled until it's made public again (or the account is upgraded to Pro/Team/Enterprise).

## Conventions / gotchas

- Router uses default hash mode, so no server rewrite rules are needed for deep links on GitHub Pages. Deep links like `/#/projects/dashlab` resolve to real routed pages.
- Project ids are readable slugs matching the asset folder name where one exists (`dashlab`, `bagarre`, `let-me-cook`, `drun`, `wrong-place`, …). Changing an id breaks any existing deep link.
- Three projects have no icon file (`ub2ft`, `color-finder`, `wario-ware-music-player`). They pass an empty `iconUrl` and `ItemList` renders a neutral initial-letter placeholder instead of a broken image — don't invent an icon path for them.
- Detail pages (`/projects/:id`, `/realisations/:id`) render through the shared `router-view` in `App.vue`, so they behave like any other top-level page (with `Header`, `Footer`, `h1`, back link). An unknown `:id` redirects to `/404`.
- **The page sits on a parallax background photo.** `App.vue` renders a fixed, `z-index: -1` layer (`.page-background`) holding a stack of `assets/background.png` tiles; every other tile is flipped with `scaleY(-1)` so a page taller than one tile reads as a mirror instead of a seam. The stack is translated by `scroll × 0.3` on a `requestAnimationFrame`, and the tile count is derived from that offset plus the viewport height, so tiles are added as you scroll down. That update deliberately measures nothing but `window` — reading the page height there would force a layout on every scrolled frame and make the parallax stutter. `prefers-reduced-motion: reduce` drops the factor to 0. Because of that negative z-index, only `html` may carry a background color — a background on `body` would paint over the photo.
- Every surface on top of the photo is translucent black rather than an opaque grey: a `@pageScrimColor` scrim over the whole viewport (the `.page-background::after` pseudo-element) keeps copy readable, and panels — list rows, "Projets liés", the footer, `.notice`, `pre`, nav tabs — use `@panelBgColor` / `@panelHoverBgColor`. Use those variables instead of authoring new `rgba(0, 0, 0, …)` values.
- **Link styling is centralized.** The global `a` rule in `App.vue` makes every link hyperlink blue and permanently underlined; don't re-declare `color` / `text-decoration` per component. The only two deliberate opt-outs are `Header.vue`'s nav tabs and `ItemList.vue`'s whole-row links, which are navigation chrome rather than text links and stay `@textColor` with no underline — both say so in a comment.
- `Header.vue` styles `.router-link-active` alongside `.router-link-exact-active` so the active nav tab stays highlighted while on a detail page (e.g. `/projects/dashlab` still highlights `Projets`). Tab order is Projets, Réalisations, À propos, CV, Contact. No tab points at `/`, so none of them needs the `exact` prop.
- Accent colors are never authored per item. `ItemList` / `ItemDetails` put a class on the row / content (`.is-published` or `.is-unpublished` for projects, `.is-snippet` for snippets) and the color lives in the stylesheet, reading the variables from `variables.less`. The unpublished project accent is `mix(@textColor, @contentBgColor, 50%)`, i.e. the off-white dimmed halfway into the page background. Snippets don't show a type badge and always get the fixed off-white `@textColor` accent, the same value used for published projects.
- A snippet with a non-empty `projectIds` renders a "Projets liés" footer on its detail page, linking to `/projects/:id`. Ids that don't match anything in `ProjectsData` are silently skipped, and the footer is not rendered at all when nothing resolves.
- Embedded media (iframes, images, videos, audio) inside `.item-content` is forced to `display: block` and flush with the left edge of the content column — there is no centering class, so don't reintroduce one.
- Project detail HTML follows a fixed shape: `.paragraph` blocks for the description and for embedded media, a `.notice` box for "available on Steam / itch.io / Roblox / GitHub" links, an optional `.caption` above a video, and a final `.closing-note` block for the author's personal comment (separated by a top border and italicized).
- Keep large images optimized — the build warns on assets over ~244 KiB (e.g. project screenshots/gifs). Media under `public/` is copied verbatim and isn't subject to that warning.
- Heavy images/gifs used inside project or snippet detail HTML are loaded on demand when opening that page; use `Helpers.preloadImages` (in `App.vue`) if something needs to be preloaded. Videos and audio use `preload="metadata"` / `preload="none"` so opening a detail page doesn't pull hundreds of MB.
- This template is licensed GNU LGPL (see `LICENSE`); it asks (not requires) keeping a link back to the original template repo in the footer.
