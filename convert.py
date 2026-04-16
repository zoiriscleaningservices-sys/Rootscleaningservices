import os
import json
import re

with open("_html_backup/index.html", "r", encoding="utf-8") as f:
    html = f.read()

start_tag = "</header>"
end_tag = '<footer class="footer-ultra">'
start_idx = html.find(start_tag) + len(start_tag)
end_idx = html.find(end_tag)

content = html[start_idx:end_idx]

# Basic conversions
content = content.replace("class=", "className=")
content = content.replace("<br>", "<br />")
content = content.replace("<hr>", "<hr />")
content = re.sub(r'<img(.*?)(?<!/)>', r'<img\1 />', content)
content = re.sub(r'<input(.*?)(?<!/)>', r'<input\1 />', content)

# remove html comments
content = re.sub(r'<!--(.*?)-->', '', content, flags=re.DOTALL)
# fix image sources
content = content.replace('images/', '/images/')

# Handle style properties to React objects
def style_replacement(match):
    style_str = match.group(1)
    parts = [p.strip() for p in style_str.split(';') if p.strip()]
    style_obj = {}
    for p in parts:
        if ':' in p:
            k, v = p.split(':', 1)
            k = k.strip()
            v = v.strip()
            # camelCase
            k = re.sub(r'-([a-z])', lambda m: m.group(1).upper(), k)
            style_obj[k] = v
    # convert style_obj to string like { "background": "transparent", ... }
    json_str = json.dumps(style_obj)
    # return React style prop
    return 'style={' + json_str + '}'

content = re.sub(r'style="([^"]*)"', style_replacement, content)


page_js_template = """
import MapContactCard from '../components/sections/MapContactCard';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const locationName = 'Richmond, VA';
  const serviceName = 'Residential and Commercial Cleaning';

  return (
    <>
""" + content + """
    </>
  );
}
"""

with open("app/page.js", "w", encoding="utf-8") as f:
    f.write(page_js_template)

# For dynamic SEO page
seo_content = content.replace("Richmond, VA", "{locationName}").replace("Visit Our HQ", "{locationName}")

seo_page_js_template = """
import { generateAllSlugs, getSeoMetadataBySlug } from '../../data/seoDb';
import MapContactCard from '../../components/sections/MapContactCard';
import Link from 'next/link';
import Image from 'next/image';

export function generateStaticParams() {
  const slugs = generateAllSlugs();
  return slugs.map((slug) => ({
    seo_slug: slug.seo_slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { seo_slug } = resolvedParams;
  const { locationName, serviceName } = getSeoMetadataBySlug(seo_slug);
  
  return {
    title: `${serviceName} in ${locationName} | Premium Services`,
    description: `Looking for ${serviceName.toLowerCase()} in ${locationName}? We provide top-tier, detail-obsessed cleaning solutions for residential and commercial estates.`,
  };
}

export default async function SeoLandingPage({ params }) {
  const resolvedParams = await params;
  const { seo_slug } = resolvedParams;
  const { locationName, serviceName } = getSeoMetadataBySlug(seo_slug);

  return (
    <>
""" + seo_content + """
    </>
  );
}
"""

with open("app/[seo_slug]/page.js", "w", encoding="utf-8") as f:
    f.write(seo_page_js_template)

print("success")
