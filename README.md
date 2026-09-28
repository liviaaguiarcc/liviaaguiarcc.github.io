# Personal Portfolio

Portfolio focused on Data Science, NLP and multilingual language technology.

## Stack

- HTML
- CSS
- JavaScript
- GitHub Pages

## Structure

```text
/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   ├── icons/
│   └── screenshots/
├── projects/
│   ├── hanlevel.html
│   ├── nsmc.html
│   └── hanparal.html
├── README.md
└── .gitignore
```

## Run locally

Open `index.html` directly in a browser.

Or start a local server:

```bash
python -m http.server
```

Then open `http://localhost:8000`.

## Deployment

This repository is designed for GitHub Pages.

1. Use a repository named `USERNAME.github.io`.
2. Push the `main` branch to GitHub.
3. Open `https://USERNAME.github.io`.

If GitHub Pages is not active automatically, go to `Settings > Pages` and select
the `main` branch as the source.

## Updating Projects

- Edit homepage project cards in `index.html`.
- Edit case studies in `projects/hanlevel.html`, `projects/nsmc.html` and
  `projects/hanparal.html`.
- Replace placeholder links such as `GITHUB_URL`, `LIVE_DEMO_URL` and
  `DEVPOST_URL` with verified URLs.

## Replacing Images

Place screenshots in `assets/screenshots/` and update the related project page.

Suggested files:

- `assets/screenshots/nsmc-length-distribution.png`
- `assets/screenshots/nsmc-label-distribution.png`
- `assets/screenshots/nsmc-features.png`
