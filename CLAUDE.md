# CLAUDE.md

This file provides guidance for Claude (and other AI coding assistants) when working in this repository.

## Project overview

This is a static, single-page portfolio website built with **Vue 2** (Options API) and **Vue CLI**. It's a fork of the [gamedev-portfolio](https://github.com/schouffy/gamedev-portfolio) template, intended to showcase game dev / other projects, a resume, and contact info. There is no backend; content is either static markup in views/components or dynamically rendered from TypeScript data files.

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
- `src/components/` — reusable components (`Header`, `Footer`, `ItemList`, `ItemDetails`, `SkillRate`). `ItemList` renders vertical list rows for both Projects and Snippets; `ItemDetails` is the shared body for both detail pages.
- `src/data/` — `ProjectData.ts` / `ProjectsData.ts` (all 9 projects merged into one list, each with an `isPublished` flag, set to `true` only when the description offers a playable or installable artifact — a store badge, an itch.io build, a browser/WebGL build, or a direct download; a GitHub source link on its own counts as unpublished) and `SnippetData.ts` / `SnippetsData.ts` (small music / code / video snippets, each with a `type` field kept as metadata — it no longer drives any visual tag — and an optional `projectIds` list of related project ids). List rows and detail pages are rendered dynamically from these files — edit data here rather than hardcoding HTML per project.
- `src/css/variables.less` — theme colors and other Less variables, including the derived accent colors: `@publishedAccentColor` / `@unpublishedAccentColor` for projects. Snippets use a fixed off-white accent (`@textColor`), the same value as `@publishedAccentColor`.
- `src/css/projects.less` — required home for any custom CSS referenced from project / snippet detail HTML in the data files. The block is scoped to the detail page's `.item-content` container, so class names like `.paragraph`, `.center`, `iframe.youtube`, `.pc-screenshot`, `.phone-screenshot`, `.notice`, and `pre` only style content inside a detail page.
- `src/router/index.ts` — route definitions (hash-based). Routes: `/`, `/resume`, `/projects`, `/projects/:id`, `/snippets`, `/snippets/:id`, `/contact`, `/404`, plus a `*` redirect to `/404`. Uses `scrollBehavior` to reset scroll on navigation.
- `public/` — static assets (images, icons, downloadables) copied as-is into the build.
- `.env` — site metadata (title, description, production URL). Requires restarting `npm run serve` after changes.

## Deployment

- `vue.config.js` sets `publicPath: '/portfolio/'` in production so built asset URLs resolve correctly on the project's GitHub Pages path. If the repo is ever renamed or moved to a `<user>.github.io` root site, update this value accordingly.
- `.github/workflows/deploy.yml` builds the app (`npm install` + `npm run build`) and publishes `dist/` to GitHub Pages via `actions/deploy-pages`. GitHub Pages is configured with build source "GitHub Actions" (not a `gh-pages` branch).
- GitHub Pages only serves from **public** repositories on the GitHub Free plan. If the repo is private, Pages is disabled until it's made public again (or the account is upgraded to Pro/Team/Enterprise).

## Conventions / gotchas

- Router uses default hash mode, so no server rewrite rules are needed for deep links on GitHub Pages. Deep links like `/#/projects/project-1` or `/#/snippets/snippet-battle-hymn` resolve to real routed pages.
- Detail pages (`/projects/:id`, `/snippets/:id`) render through the shared `router-view` in `App.vue`, so they behave like any other top-level page (with `Header`, `Footer`, `h1`, back link). An unknown `:id` redirects to `/404`.
- Both `Header.vue` and the global `a` rule in `App.vue` style `.router-link-active` alongside `.router-link-exact-active` so the active nav item stays highlighted while on a detail page (e.g. `/projects/project-1` still highlights `Projects`). The `/` link uses the `exact` prop so it isn't marked active on every route.
- Accent colors are never authored per item. `ItemList` / `ItemDetails` put a class on the row / content (`.is-published` or `.is-unpublished` for projects, `.is-snippet` for snippets) and the color lives in the stylesheet, reading the variables from `variables.less`. The unpublished project accent is `mix(@textColor, @contentBgColor, 50%)`, i.e. the off-white dimmed halfway into the page background. Snippets don't show a type badge and always get the fixed off-white `@textColor` accent, the same value used for published projects.
- A snippet with a non-empty `projectIds` renders a "Related projects" footer on its detail page, linking to `/projects/:id`. Ids that don't match anything in `ProjectsData` are silently skipped, and the footer is not rendered at all when nothing resolves.
- Keep large images optimized — the build warns on assets over ~244 KiB (e.g. project screenshots/gifs).
- Heavy images/gifs used inside project or snippet detail HTML are loaded on demand when opening that page; use `Helpers.preloadImages` (in `App.vue`) if something needs to be preloaded.
- This template is licensed GNU LGPL (see `LICENSE`); it asks (not requires) keeping a link back to the original template repo in the footer.
