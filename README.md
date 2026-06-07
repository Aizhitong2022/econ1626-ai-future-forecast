# The $39 AI Plan Moment: Australia's AI Abundance Stack

Student: Zhixian Meng, s4034214

Course: ECON1626 Economics of Artificial Intelligence

Assessment: Assessment 3 AI Future Forecast Interactive Web Essay

Live website: https://aizhitong2022.github.io/econ1626-ai-future-forecast/

GitHub Pages link: `https://aizhitong2022.github.io/econ1626-ai-future-forecast/`

## Project Overview

This repository contains a working draft / near-final interactive web essay about a possible AI future forecast for Australia's economy by 2027-2030.

The project began as a Day 1 GitHub Pages scaffold and has now been developed into a structured static website with essay sections, evidence tables, references, an interactive illustrative forecast timeline, scenario interaction, and an AI abundance stack interaction.

## File Structure

```text
index.html
README.md
assets/
  css/
    style.css
  js/
    main.js
  data/
    token-pricing-milestones.csv
    token-economy-proxies.csv
    ai-infrastructure-australia.csv
  img/
    hero-rainforest-shrub.png
notes/
  research-log.md
  ai-use-log.md
  source-map.md
```

## How to Run Locally

Open `index.html` directly in a web browser.

No build step, package manager, server, or external framework is required.

The project intentionally avoids React, Vite, npm, Tailwind, Bootstrap, external fonts, CDNs, analytics scripts, and large libraries.

## Development Workflow

1. Add research notes to `notes/research-log.md`.
2. Record AI tool use in `notes/ai-use-log.md`.
3. Map each future claim to a verified source in `notes/source-map.md`.
4. Update the essay sections in `index.html`.
5. Keep all citations and data traceable to checked sources.
6. Test the page by opening `index.html` directly before committing changes.
7. Test the live GitHub Pages site after pushing changes to `master`.

## GitHub Pages

The live GitHub Pages site is published from the `master` branch at `/`.

## AI Tools Used

AI tool use is recorded in `notes/ai-use-log.md`. AI outputs were used for research mapping, structure, drafting support, implementation support, and checking support, but were not treated as sources.

## Data and Sources

Evidence is drawn from official Australian sources, academic economics literature, company documentation, and reputable news sources listed in the essay references and mapped in `notes/source-map.md`.

The `assets/data` folder contains CSV copies of the evidence tables used in the web essay. These files support transparency and reproducibility; the visible website still uses real HTML tables for accessibility.

## Reproducibility Note

This site uses plain HTML, CSS, and JavaScript only. It is designed to work by opening `index.html` directly and to render cleanly on GitHub Pages.

All important content is real HTML text rather than text embedded in images.

## Commit History Note

Meaningful commits document the staged development of the scaffold, layout, interactions, logs, documentation, final draft integration, responsive tables, and deployment checks.
