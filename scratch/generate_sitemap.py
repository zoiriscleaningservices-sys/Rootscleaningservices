import re
import os
from datetime import datetime, timezone

os.makedirs('public', exist_ok=True)

with open('data/seoDb.js', 'r', encoding='utf-8') as f:
    content = f.read()

loc_chunk, serv_chunk = content.split('export const SERVICES')
locs = re.findall(r"id:\s*'([^']+)'", loc_chunk)
servs = re.findall(r"id:\s*'([^']+)'", serv_chunk.split('export function')[0])

base_url = 'https://www.rootscleaningservices.com/'

url_data = []

# Homepage
url_data.append({
    'url': base_url,
    'priority': '1.0',
    'changefreq': 'daily'
})

# Core Pages
url_data.append({
    'url': base_url + 'services/',
    'priority': '0.9',
    'changefreq': 'monthly'
})
url_data.append({
    'url': base_url + 'contact/',
    'priority': '0.9',
    'changefreq': 'monthly'
})

# Location Hubs
for l in locs:
    url_data.append({
        'url': base_url + f"{l}/",
        'priority': '0.9',
        'changefreq': 'weekly'
    })

# Long-tail service+location pages
for l in locs:
    for s in servs:
        url_data.append({
            'url': base_url + f"{s}-in-{l}/",
            'priority': '0.8',
            'changefreq': 'weekly'
        })

date_str = datetime.now(timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')

xml = ['<?xml version="1.0" encoding="UTF-8"?>']
xml.append('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')

for item in url_data:
    xml.append('  <url>')
    xml.append(f"    <loc>{item['url']}</loc>")
    xml.append(f"    <lastmod>{date_str}</lastmod>")
    xml.append(f"    <changefreq>{item['changefreq']}</changefreq>")
    xml.append(f"    <priority>{item['priority']}</priority>")
    xml.append('  </url>')

xml.append('</urlset>')

with open('public/sitemap.xml', 'w', encoding='utf-8') as f:
    f.write('\n'.join(xml))

print(f"Generated {len(url_data)} URLs with tiered SEO priority.")
