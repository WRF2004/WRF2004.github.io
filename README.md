# Ruifeng Wang · 王睿风

Personal academic homepage, hosted by **GitHub Pages** at:

**https://wrf2004.github.io/**

The homepage is plain HTML, CSS, and JavaScript. There is no Node.js install or application build step. GitHub Pages publishes changes from the existing `master` branch.

## Content and design

- `index.html`: biography, research, projects, education, awards, and both languages.
- `site/style.css`: responsive layout, colors, typography, dark mode, and print styling.
- `site/app.js`: language and theme preferences and section navigation.
- `site/favicon.svg`: RW monogram.
- `_config.yml`: GitHub Pages settings; excludes the old template's demonstration pages.
- `404.html`, `robots.txt`, and `sitemap.xml`: error page and search indexing.

To edit bilingual text, update **both** `data-en` and `data-zh` on the corresponding element in `index.html`. Keep the element's default content equal to `data-en` so the English page also works without JavaScript. Both language attributes may contain HTML; use single quotes inside attribute values as in the existing examples. Language and theme choices are stored only in the visitor's browser.

The profile photo is `site/portrait.jpg`, supplied by Ruifeng Wang. The original image is preserved; CSS adapts its frame for desktop and mobile. The contact link points to the public GitHub profile. Add a public email address only when ready to display it.

## Publication record

The research entry intentionally links to **arXiv:2404.00971v2 (2024)**, which lists Ruifeng Wang as a coauthor. It is labeled a preprint; no conference or journal acceptance is claimed. The later version has a different author list and title, so do not silently replace the versioned link.

## Local preview

From the repository directory, run:

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000/. No backend, API keys, analytics, or third-party JavaScript are required.

## Deployment and recovery

Push or commit edits to `master` and check the **pages build and deployment** run in the repository's Actions tab. GitHub Pages uses the repository root as the publishing source. The existing Academic Pages files are retained as source, with sample content excluded by `_config.yml`. To restore the former homepage, revert the homepage update commit, including `_config.yml`.

## Checks performed

- Browser inspection of the English and Chinese page.
- Language switching, light/dark theme switching, and saved preferences.
- Section anchors, expandable project details, and BibTeX disclosure.
- Local HTML/asset and JavaScript syntax checks.

The CSS includes mobile and print layouts. Update the footer date and sitemap date when changing content.
