# Ruifeng Wang · 王睿风

Personal academic homepage, hosted by **GitHub Pages** at:

**https://wrf2004.github.io/**

The homepage uses plain HTML, CSS, and JavaScript. GitHub Pages publishes the generated `index.html` from the existing `master` branch. No server or Node.js dependencies are required.

## Content and design

- `_source/index.html`: editable biography, research, projects, education, awards, and both languages.
- `index.html`: generated self-contained homepage with inline CSS, JavaScript, and compressed portraits.
- `site/style.css`: responsive layout, colors, typography, dark mode, and print styling.
- `site/app.js`: language and theme preferences and section navigation.
- `site/favicon.svg`: RW monogram.
- `_config.yml`: GitHub Pages settings; excludes the old template's demonstration pages.
- `404.html`, `robots.txt`, and `sitemap.xml`: error page and search indexing.

To edit bilingual text, update **both** `data-en` and `data-zh` on the corresponding element in `_source/index.html`. Keep the element's default content equal to `data-en` so the English page also works without JavaScript. Both language attributes may contain HTML; use single quotes inside attribute values as in the existing examples. Language and theme choices are stored only in the visitor's browser. After changing content, CSS, or JavaScript, run `python3 scripts/build_homepage.py` and commit the updated `index.html` alongside the source edits.

The original profile photo is preserved as `site/portrait.jpg` (408,262 bytes), but the homepage does not request it. The compressed variants are `site/portrait-160.webp` (3,458 bytes) for mobile and `site/portrait-480.webp` (17,728 bytes) for desktop. Both are inlined in the HTML to avoid an additional network round trip. `site/portrait-480.jpg` is a fallback for browsers without WebP support. CSS presents the photo in grayscale. The contact link points to the public GitHub profile. Add a public email address only when ready to display it.

## Publication record

The research entry intentionally links to **arXiv:2404.00971v2 (2024)**, which lists Ruifeng Wang as a coauthor. It is labeled a preprint; no conference or journal acceptance is claimed. The later version has a different author list and title, so do not silently replace the versioned link.

## Local preview

From the repository directory, run:

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000/. No backend, API keys, analytics, or third-party JavaScript are required.

## Performance

Modern browsers render the homepage using one HTML request: the CSS, JavaScript, favicon, and responsive WebP portraits are embedded. There are no web fonts, image hosts, or external scripts on the rendering path. The generated page is about 62 KB before HTTP compression; the build script reports its size and a gzip estimate. Repository size and the retained original photo do not increase a page visit's transfer size.

This removes avoidable resource round trips and stale CSS/HTML combinations, but cannot eliminate latency in the visitor's connection to GitHub Pages. A measurement from the development environment before optimization showed HTML time to first byte around 8.2 seconds. That measurement is route-specific, not a benchmark for every visitor. Improving a slow HTML connection requires changing the whole site's delivery path, rather than just using an image host.

## Deployment and recovery

The repository also includes `vercel.json` and `scripts/export_site.py` for an alternate Vercel deployment. The export has been verified locally; a Vercel account must still be connected and the project deployed before a new URL exists. See [DEPLOYMENT.md](DEPLOYMENT.md) for exact settings and verification steps. GitHub Pages continues to use the existing root homepage.

Push or commit edits to `master` and check the **pages build and deployment** run in the repository's Actions tab. GitHub Pages uses the repository root as the publishing source. The existing Academic Pages files are retained as source, with sample content excluded by `_config.yml`. To restore the former homepage, revert the homepage update commit, including `_config.yml`.

## Checks performed

- Browser inspection of the English and Chinese page.
- Language switching, light/dark theme switching, and saved preferences.
- Section anchors, expandable project details, and BibTeX disclosure.
- Local HTML/asset and JavaScript syntax checks.

The CSS includes mobile and print layouts. Update the footer date and sitemap date when changing content.
