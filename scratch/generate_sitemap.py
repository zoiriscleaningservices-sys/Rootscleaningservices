import re
import os
from datetime import datetime

os.makedirs('public', exist_ok=True)

with open('data/seoDb.js', 'r', encoding='utf-8') as f:
    content = f.read()

loc_chunk, serv_chunk = content.split('export const SERVICES')
locs = re.findall(r"id:\s*'([^']+)'", loc_chunk)
servs = re.findall(r"id:\s*'([^']+)'", serv_chunk.split('export function')[0])

base_urls = [
    'https://www.rootscleaningservices.com/',
    'https://www.rootscleaningservices.com/services/',
    'https://www.rootscleaningservices.com/contact/'
]

urls = base_urls + [f"https://www.rootscleaningservices.com/{l}/" for l in locs]
for l in locs:
    for s in servs:
        urls.append(f"https://www.rootscleaningservices.com/{s}-in-{l}/")

date_str = datetime.utcnow().strftime('%Y-%m-%dT%H:%M:%SZ')

xml = ['<?xml version="1.0" encoding="UTF-8"?>']
xml.append('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')

for u in urls:
    xml.append('  <url>')
    xml.append(f'    <loc>{u}</loc>')
    xml.append(f'    <lastmod>{date_str}</lastmod>')
    xml.append('    <changefreq>weekly</changefreq>')
    xml.append('    <priority>0.8</priority>')
    xml.append('  </url>')

xml.append('</urlset>')

with open('public/sitemap.xml', 'w') as f:
    f.write('\n'.join(xml))

print("Generated " + str(len(urls)) + " URLs.")
