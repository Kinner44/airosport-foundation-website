---
title: Foundation Website
type: project
status: copy-review
arm: foundation
company: airosport-foundation
owner: [[mike-kinner]]
updated: 2026-07-14
tags: [project, website, playmaker]
---

# Foundation Website

> The Airosport Foundation's public home. Job: **build trust, paint the vision,
> make becoming a [[playmaker-membership|PlayMaker]] effortless** — with a
> visible through-line to [[peak-play-performance]] and the [[airos-game-set]].
> Stack decision: [[2026-07-14-decision-crm-stack]].

## Tech
- **Custom static site** (hand-built HTML/CSS/JS — no Node on this Mac, so no
  Astro; a `build.sh` assembles pages from `_partials/` + `_src/pages/`);
  hosted free (Netlify Drop or Cloudflare Pages)
- **Repo location:** `~/Projects/airosport-foundation-website/` — *outside* the
  Google Drive vault (Drive sync + code don't mix). Edit `_src/` and
  `_partials/`, then run `./build.sh`. Local preview: ruby httpd, port 4180.
- Embeds: GHL "How do you want to play?" survey · Zeffy recurring ($17/mo) and
  one-time donation widgets — **placeholder blocks in code, marked with
  comments, interim mailto links until accounts are live**
- **Domains (per v4):** primary `airosportfoundation.org`; secondary
  `aosfoundation.org` redirects to primary — still to purchase

## Sitemap
| Page | Job | Primary CTA |
|---|---|---|
| Home | Vision + trust in 10 seconds | Become a PlayMaker |
| Our Story | The mission, Samuel (Mike-approved depth only) | Become a PlayMaker |
| Become a PlayMaker | Convert — $17/mo, where it goes | Zeffy recurring widget |
| For Nonprofits & Schools | Replace the stale golf tournament; pilot proof | Design your fundraiser (form) |
| Donate | One-time gifts | Zeffy one-time widget |
| Get Involved | Volunteers/champions self-identify | GHL survey |

**Through-line elements (every page):** nav/footer cross-links — *"Bring this to
your company"* → peakplaypro.com · *"Take play home"* → playairosport.com. Same
cross-branding to be added to the other two sites.

## Trust elements (above the fold or near it)
- 501(c)(3) approved — EIN + IRS determination (2026-07-14, see [[501c3-status]])
- Board chair [[mark-lucas]] — former Exec Director, US Association of Blind Athletes
- Named pilots: [[chip-in-for-charities]] · [[marys-home]] · [[ronald-mcdonald-house]]
- Real photos of real events (no stock) — **need: Mike's best 10–15 photos**
- "Where your $17 goes" transparency block

## Status
- [x] Sitemap + architecture (this doc) — 2026-07-14
- [x] Copy v4 (cowork session) synced into vault → [[website-copy-draft]] — 2026-07-14
- [x] **Site built from v4** — 13 pages, all links verified, mobile + desktop
  checked, WCAG-minded (skip link, focus states, keyboard nav) — 2026-07-14
- [ ] **Mike reviews in-browser — esp. `[MIKE-APPROVE]` Samuel blocks (home +
  founder page, drafted by Claude per v4 arc) and v4's review checklist** ← blocking launch
- [ ] Mike — buy domains · open Zeffy · send photos (site has labeled photo slots)
- [ ] Replace Zeffy/GHL placeholder blocks with real embeds; test end-to-end
- [ ] Deploy (Netlify Drop or Cloudflare Pages) + point domains
- [ ] Launch + add cross-links on playairosport.com / peakplaypro.com
- [ ] Post-launch: state charitable-solicitation registration check (v4 flag)

## Linked
[[airosport-foundation]] · [[playmaker-membership]] · [[website-copy-draft]] ·
[[crm-system]] · [[2026-07-14-decision-crm-stack]] · [[the-mission]]
