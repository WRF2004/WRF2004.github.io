# Alternate delivery through Vercel

The GitHub Pages site remains at https://wrf2004.github.io/. The same public homepage can also be deployed on Vercel to test a different delivery path. This configuration does not create a Vercel project, activate CDN service, change DNS, or guarantee faster access on every network.

## Ready-to-use project settings

| Setting | Value |
| --- | --- |
| GitHub repository | `WRF2004/WRF2004.github.io` |
| Production branch | `master` |
| Root directory | Repository root |
| Framework | Other / no framework |
| Install command | Empty (skip installation) |
| Build command | `python3 scripts/export_site.py` |
| Output directory | `public` |
| Environment variables | None |

`vercel.json` supplies these settings. The empty install command prevents installation of dependencies from the retained Academic Pages template. The exporter regenerates the homepage from its editable source and copies only the six files needed to serve it, its 404 page, indexing files, and legacy-image fallback.

The modern-browser homepage remains self-contained. The original full-size photo, template samples, source files, and development previews are excluded from the alternate site's output. The homepage's canonical URL stays on GitHub Pages while this is an alternate delivery test.

## Connection and deployment

Authorize your Vercel account and import the repository above. If the Vercel GitHub integration requests repository access, select this repository. Use the existing `master` branch as the production branch. Review the detected settings against the table, deploy, and retain the production URL returned by Vercel. Do not construct a guessed project URL.

For a public personal homepage, check that production visitors are not required to sign into Vercel. Preview-deployment protection is a separate setting. No domain purchase is necessary to test Vercel's generated production URL. If the import creates a new repository instead of linking this one, stop and select the existing repository.

## Cache policy

The configuration allows browsers to reuse content for two minutes and asks Vercel's CDN to cache it for a day with background revalidation. Deployments provide versioned static output. The two-minute browser cache is a deliberate short freshness tradeoff for repeat visits.

## Local verification

```sh
python3 scripts/export_site.py
python3 -m http.server 8000 --directory public
```

The generated `public/` directory should contain only:

```text
index.html
404.html
robots.txt
sitemap.xml
site/style.css
site/portrait-480.jpg
```

After deployment, compare both URLs from the same network, including a first visit and a repeat visit. Record HTML time to first byte, total load time, HTTP status, and CDN cache headers. Confirm the portrait and language/theme controls work, and that an unknown path returns a real 404. A successful local export is not evidence of a successful Vercel deployment.

## Maintenance

Edit `_source/index.html`, `site/style.css`, and `site/app.js` in GitHub. Run `python3 scripts/build_homepage.py` and commit the generated root `index.html` for GitHub Pages. A connected Vercel project independently runs the exporter when it builds. Do not commit `public/`, local Vercel state, API tokens, or credentials.
