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

## Tech stack

- Vue 2.6 + vue-router 3 (hash mode, no server-side routing needed)
- TypeScript
- Vue CLI 4 (webpack under the hood)
- Less for styling

## Project structure

- `src/views/` — top-level pages (`About`, `Resume`, `Projects`, `ProjectDetails`, `Snippets`, `SnippetDetails`, `Contact`, `404`). Mostly static markup you edit directly.
  - `About` is the real intro (background, ENJMIN, Unity → Godot, alternance, the Level Designer job search) and links to `/projects`, three project detail pages, and `/contact`.
  - `Resume` and `Snippets` are **intentionally empty for now** — the routes and nav entries are kept, each page just shows a heading and a short "à venir" line. Don't delete the views, routes, `SnippetData`/`SnippetsData`, `SkillRate.vue`, or the related-projects footer machinery; they're waiting for real content.
  - `Contact` still has the upstream template's placeholder links; the owner will replace them with real handles.
- `src/components/` — reusable components (`Header`, `Footer`, `ItemList`, `ItemDetails`, `SkillRate`). `ItemList` renders vertical list rows for both Projects and Snippets; `ItemDetails` is the shared body for both detail pages. Keep them generic — don't fork a per-item-kind copy.
- `src/data/` — `ProjectData.ts` / `ProjectsData.ts` (23 real projects in one list, each with an `isPublished` flag, set to `true` only when the entry offers a playable or installable artifact — Steam, itch.io, Roblox, a store listing, or a direct download; a GitHub source link on its own, an unreleased prototype, or a build that has since been pulled all count as unpublished) and `SnippetData.ts` / `SnippetsData.ts` (currently an empty list; snippets have a `type` field kept as metadata — it no longer drives any visual tag — and an optional `projectIds` list of related project ids). List rows and detail pages are rendered dynamically from these files — edit data here rather than hardcoding HTML per project.
- `src/css/variables.less` — theme colors and other Less variables, including the derived accent colors: `@publishedAccentColor` / `@unpublishedAccentColor` for projects. Snippets use a fixed off-white accent (`@textColor`), the same value as `@publishedAccentColor`.
- `src/css/projects.less` — required home for any custom CSS referenced from project / snippet detail HTML in the data files. The block is scoped to the detail page's `.item-content` container, so class names like `.paragraph`, `.center`, `iframe.youtube`, `.pc-screenshot`, `.phone-screenshot`, `.notice`, `.closing-note`, `.caption`, `video`, `audio` and `pre` only style content inside a detail page.
- `src/router/index.ts` — route definitions (hash-based). Routes: `/`, `/resume`, `/projects`, `/projects/:id`, `/snippets`, `/snippets/:id`, `/contact`, `/404`, plus a `*` redirect to `/404`. Uses `scrollBehavior` to reset scroll on navigation.
- `public/` — static assets copied as-is into the build. Project media lives under `public/assets/projects/`:
  - `public/assets/projects/icons/<slug>.png` — list thumbnails (note `vectorier.webp` is the one webp).
  - `public/assets/projects/<slug>/<file>` — per-project `.mp4` captures, `.png` screenshots and `.wav` tracks, referenced from `ProjectsData.ts` as `assets/projects/<slug>/<file>` (root-relative-ish, which resolves correctly under the hash router and the `/portfolio/` public path).
  - Roughly 358 MB in total, and Vue CLI's CopyPlugin copies all of `public/` into `dist/`, so builds are slow and heavy. That's expected, not a hang.
- `.env` — site metadata (title, description, production URL), in French. Requires restarting `npm run serve` after changes.

## Deployment

- `vue.config.js` sets `publicPath: '/portfolio/'` in production so built asset URLs resolve correctly on the project's GitHub Pages path. If the repo is ever renamed or moved to a `<user>.github.io` root site, update this value accordingly.
- `.github/workflows/deploy.yml` builds the app (`npm install` + `npm run build`) and publishes `dist/` to GitHub Pages via `actions/deploy-pages`. GitHub Pages is configured with build source "GitHub Actions" (not a `gh-pages` branch).
- GitHub Pages only serves from **public** repositories on the GitHub Free plan. If the repo is private, Pages is disabled until it's made public again (or the account is upgraded to Pro/Team/Enterprise).

## Conventions / gotchas

- Router uses default hash mode, so no server rewrite rules are needed for deep links on GitHub Pages. Deep links like `/#/projects/dashlab` resolve to real routed pages.
- Project ids are readable slugs matching the asset folder name where one exists (`dashlab`, `bagarre`, `let-me-cook`, `drun`, `wrong-place`, …). Changing an id breaks any existing deep link.
- Three projects have no icon file (`ub2ft`, `color-finder`, `wario-ware-music-player`). They pass an empty `iconUrl` and `ItemList` renders a neutral initial-letter placeholder instead of a broken image — don't invent an icon path for them.
- Detail pages (`/projects/:id`, `/snippets/:id`) render through the shared `router-view` in `App.vue`, so they behave like any other top-level page (with `Header`, `Footer`, `h1`, back link). An unknown `:id` redirects to `/404`.
- Both `Header.vue` and the global `a` rule in `App.vue` style `.router-link-active` alongside `.router-link-exact-active` so the active nav item stays highlighted while on a detail page (e.g. `/projects/dashlab` still highlights `Projets`). The `/` link uses the `exact` prop so it isn't marked active on every route.
- Accent colors are never authored per item. `ItemList` / `ItemDetails` put a class on the row / content (`.is-published` or `.is-unpublished` for projects, `.is-snippet` for snippets) and the color lives in the stylesheet, reading the variables from `variables.less`. The unpublished project accent is `mix(@textColor, @contentBgColor, 50%)`, i.e. the off-white dimmed halfway into the page background. Snippets don't show a type badge and always get the fixed off-white `@textColor` accent, the same value used for published projects.
- A snippet with a non-empty `projectIds` renders a "Projets liés" footer on its detail page, linking to `/projects/:id`. Ids that don't match anything in `ProjectsData` are silently skipped, and the footer is not rendered at all when nothing resolves.
- Project detail HTML follows a fixed shape: `.paragraph` blocks for the description, `.paragraph.center` for embedded media, a `.notice` box for "available on Steam / itch.io / Roblox / GitHub" links, an optional `.caption` above a video, and a final `.closing-note` block for the author's personal comment (separated by a top border and italicized).
- Keep large images optimized — the build warns on assets over ~244 KiB (e.g. project screenshots/gifs). Media under `public/` is copied verbatim and isn't subject to that warning.
- Heavy images/gifs used inside project or snippet detail HTML are loaded on demand when opening that page; use `Helpers.preloadImages` (in `App.vue`) if something needs to be preloaded. Videos and audio use `preload="metadata"` / `preload="none"` so opening a detail page doesn't pull hundreds of MB.
- This template is licensed GNU LGPL (see `LICENSE`); it asks (not requires) keeping a link back to the original template repo in the footer.
