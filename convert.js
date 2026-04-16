const fs = require('fs');
const path = require('path');

function convertToJSX(html) {
  return html
    .replace(/class=/g, 'className=')
    .replace(/<br>/g, '<br />')
    .replace(/<hr>/g, '<hr />')
    .replace(/<input(.*?)>/g, (m, c) => (c.endsWith('/') ? m : `<input${c} />`))
    .replace(/<img(.*?)>/g, (m, c) => (c.endsWith('/') ? m : `<img${c} />`))
    .replace(/style="([^"]*)"/g, (match, styleStr) => {
      const parts = styleStr.split(';').filter(p => p.trim());
      const styleObj = {};
      parts.forEach(p => {
        let [key, val] = p.split(':');
        if (key && val) {
          key = key.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
          styleObj[key] = val.trim();
        }
      });
      return \`style={{\${JSON.stringify(styleObj).slice(1, -1)}}}\`;
    })
    .replace(/<!--(.*?)-->/g, '')
    .replace(/images\//g, '/images/');
}

let html = fs.readFileSync('_html_backup/index.html', 'utf8');

const startIndex = html.indexOf('</header>') + '</header>'.length;
const endIndex = html.indexOf('<footer class="footer-ultra">');

let content = html.substring(startIndex, endIndex);
content = convertToJSX(content);

const pageJs = \`
import MapContactCard from '../components/sections/MapContactCard';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const locationName = 'Richmond, VA';
  const serviceName = 'Residential and Commercial Cleaning';

  return (
    <>
      \${content}
    </>
  );
}
\`;

fs.writeFileSync('app/page.js', pageJs);

let seoPageJs = \`
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
    title: \\\`\${serviceName} in \${locationName} | Premium Services\\\`,
    description: \\\`Looking for \${serviceName.toLowerCase()} in \${locationName}? We provide top-tier, detail-obsessed cleaning solutions for residential and commercial estates.\\\`,
  };
}

export default async function SeoLandingPage({ params }) {
  const resolvedParams = await params;
  const { seo_slug } = resolvedParams;
  const { locationName, serviceName } = getSeoMetadataBySlug(seo_slug);

  return (
    <>
      \${content.replace(/Richmond, VA/g, '{locationName}').replace(/Top-Tier, Detail-Obsessed Cleaning Solutions/g, '{serviceName}')}
    </>
  );
}
\`;

fs.writeFileSync('app/[seo_slug]/page.js', seoPageJs);
