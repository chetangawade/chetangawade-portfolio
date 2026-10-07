# Chetan Gawade | DevOps Engineer Portfolio

Personal portfolio website: a **static site** (plain HTML, CSS, JavaScript) with no build step, no framework and no backend.

🔗 **Live:** https://chetangawade.github.io/chetangawadeportfolio/

## Sections

Home · About · Experience · Key Projects · Skills · Certifications · Education & Achievements · Earlier Web Projects · Contact

## Features

- Dark / light theme toggle (remembers your choice)
- Fully responsive (mobile, tablet, desktop) with a mobile menu
- Typing animation, scroll-reveal animations, active nav highlighting, back-to-top button
- Downloadable resume
- Contact form that opens the visitor's email app with the message pre-filled (works on a static host, no server needed)
- Optimized images (~0.6 MB total instead of ~18 MB)
- Tool & technology icons on every skill (Devicon, Simple Icons, Boxicons)
- No JS libraries. Only Google Fonts and the icon sets are loaded from CDNs.

## Folder structure

```
chetangawade-portfolio/
├── index.html                 # the whole site
├── assets/
│   ├── css/style.css          # all styles (colors at the top in :root)
│   ├── js/main.js             # menu, theme, animations, contact form
│   ├── img/                   # favicon, web-project thumbnails
│   └── resume/Chetan_Gawade_DevOps_Engineer_Resume.pdf
└── projects/                  # earlier front-end projects (linked from the site)
```

## Run locally

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000

## Deploy to GitHub Pages

1. Replace the contents of the `chetangawadeportfolio` repo with this folder's contents (keep `index.html` at the repo root).
2. Commit and push:
   ```bash
   git add -A
   git commit -m "Redesign portfolio as DevOps Engineer"
   git push origin main
   ```
3. On GitHub, open **Settings → Pages → Source: Deploy from a branch → `main` / `(root)`**.
4. The site updates at https://chetangawade.github.io/chetangawadeportfolio/ within a minute or two.

## Updating content

| To change | Edit |
|---|---|
| Text, jobs, projects, skills, certifications | `index.html` (each section is clearly commented) |
| Resume | Replace `assets/resume/Chetan_Gawade_DevOps_Engineer_Resume.pdf` (keep the same name) |
| Colors | `--accent` / `--accent-2` in `assets/css/style.css` (`:root` for dark, `[data-theme="light"]` for light) |
| Rotating titles in the hero | `roles` array in `assets/js/main.js` |
