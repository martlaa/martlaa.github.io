# Mart Laanpere — Research · Design · Impact

Personal academic and EdTech portfolio, built with al-folio 1.x and Jekyll Scholar.

## Preview

Run `docker compose up -d`, then open http://localhost:8080/.

## Content

- `_pages`: English pages; `_pages/et.md` is an explicit language availability page.
- `_projects`: reusable project case studies, including featured flags and categories.
- `_bibliography/papers.bib`: curated publication metadata and source links.
- `_data/navigation.json`: English and future Estonian navigation.
- `_data/profiles.json`: verified public profile links.
- `assets/css/portfolio.css` and `assets/js/portfolio.js`: isolated presentation and small UI behaviours.
- `CONTENT-SOURCES.md`: factual provenance and outstanding content.

## Deployment

GitHub Actions builds and publishes `martlaa/martlaa.github.io` at the account root. Production baseurl is empty; no custom domain is configured. The prototype repository remains separate.

## Upstream

Based on https://github.com/alshedivat/al-folio at commit 2fec8d3a9c99450328cee59a6a6114e26055d86e. Runtime gems remain pinned by Gemfile.lock. Original MIT licence retained; project images and marks belong to their respective owners.
