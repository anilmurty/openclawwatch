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

- `index.html` — entire landing page (HTML, CSS, JS all inline). Large file (~1800 lines).
- `api/waitlist.js` — Vercel serverless function for waitlist signup via Resend API
- `vercel.json` — Vercel routing config
- `og-image.png` — Open Graph social preview image
- `.claude/landing-page-design.md` — detailed design spec for the landing page

## Design System

CSS custom properties defined in `:root` of `index.html`:
- Dark theme: `--navy`, `--blue`, `--green`, `--amber`, `--red`
- Fonts: Bricolage Grotesque (headings), IBM Plex Sans (body), IBM Plex Mono (code/terminal)
