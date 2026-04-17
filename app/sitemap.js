import { generateAllSlugs } from '../data/seoDb';

export default function sitemap() {
  const baseUrl = 'https://www.rootscleaningservices.com';
  
  // Base routes
  const routes = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/services/`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/contact/`,
      lastModified: new Date().toISOString(),
    }
  ];

  const slugs = generateAllSlugs();
  const dynamicRoutes = slugs.map((s) => ({
    url: `${baseUrl}/${s.seo_slug}/`,
      lastModified: new Date().toISOString(),
  }));

  return [...routes, ...dynamicRoutes];
}
