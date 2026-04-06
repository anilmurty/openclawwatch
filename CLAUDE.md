# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

OpenClawWatch is an open-source, OTel-native observability tool for autonomous AI agents. This repo contains the **landing page** hosted at [opencla.watch](https://opencla.watch). The actual CLI tool is not in this repo yet.

## Architecture

- **Static site** — single `index.html` with all CSS/JS inline (no build step, no bundler, no framework)
- **Serverless API** — `api/waitlist.js` is a Vercel serverless function that adds emails to a Resend audience
- **Deployed on Vercel** — configured via `vercel.json` (clean URLs, API rewrites)
- **Analytics** — Google Analytics (G-C3WCWQW0WR) with custom event tracking

## Development

No build or install step. Open `index.html` in a browser to preview. For the API function, deploy to Vercel or use `vercel dev` (requires Vercel CLI and `.env.local` with `RESEND_API_KEY` and `RESEND_AUDIENCE_ID`).

## Key Files

- `index.html` — entire landing page (HTML, CSS, JS all inline). Large file (~1900 lines). Use line-targeted reads.
- `api/waitlist.js` — Vercel serverless function (POST `/api/waitlist`) that adds emails to a Resend audience. Requires env vars `RESEND_API_KEY` and `RESEND_AUDIENCE_ID`.
- `vercel.json` — Vercel routing config (clean URLs, `/api/waitlist` rewrite)
- `og-image.png` — Open Graph social preview image (1200×630)
- `.claude/landing-page-design.md` — detailed design spec for the landing page

## index.html Structure

The file is organized top-to-bottom as: `<style>` (~lines 35–1150) → `<body>` HTML sections (~lines 1150–1680) → `<script>` (~lines 1680–1900). Major HTML sections in order: hero (with terminal demo), "the problem", features, comparison table, waitlist CTA, footer.

## Hero Terminal

The interactive terminal demo has tab labels defined in **three separate places** that must be kept in sync:
1. HTML `<button>` elements (e.g. `<button class="step-tab" ...>onboard</button>`)
2. The `steps` array `label` property in the `<script>` block
3. The `tabNames` array in the `<script>` block

When renaming a tab, update all three.

## Design System

CSS custom properties defined in `:root` of `index.html`:
- Dark theme: `--navy`, `--blue`, `--green`, `--amber`, `--red`
- Fonts: Bricolage Grotesque (headings), IBM Plex Sans (body), IBM Plex Mono (code/terminal)
