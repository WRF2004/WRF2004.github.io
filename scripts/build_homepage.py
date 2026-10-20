#!/usr/bin/env python3
"""Generate a self-contained GitHub Pages homepage. Standard library only."""
import base64
import gzip
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
# In this development workspace, the public files live in dist/. In the
# GitHub repository, they live directly at the root.
PUBLIC = ROOT / 'dist' if (ROOT / 'dist/index.html').exists() else ROOT
html = (ROOT / '_source/index.html').read_text(encoding='utf-8')
css = (PUBLIC / 'site/style.css').read_text(encoding='utf-8')
js = (PUBLIC / 'site/app.js').read_text(encoding='utf-8')
html = html.replace('<!-- INLINE_STYLES -->', '<style>\n' + css + '\n</style>')
html = html.replace('<!-- INLINE_SCRIPTS -->', '<script>\n' + js + '\n</script>')
for token, filename in [('__PORTRAIT_SMALL__', 'portrait-160.webp'),
                        ('__PORTRAIT_LARGE__', 'portrait-480.webp')]:
    data = base64.b64encode((PUBLIC / 'site' / filename).read_bytes()).decode('ascii')
    html = html.replace(token, 'data:image/webp;base64,' + data)
assert '<!-- INLINE_' not in html and '__PORTRAIT_' not in html
(PUBLIC / 'index.html').write_text(html, encoding='utf-8')
data = html.encode('utf-8')
print(f'Homepage: {len(data):,} bytes; gzip estimate: {len(gzip.compress(data)):,} bytes')
