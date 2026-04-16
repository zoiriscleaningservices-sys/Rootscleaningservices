export const LOCATIONS = [
  { id: 'richmond-va', name: 'Richmond, VA' },
  { id: 'north-richmond-va', name: 'North Richmond, VA' },
  { id: 'south-richmond-va', name: 'South Richmond, VA' },
  { id: 'midlothian-va', name: 'Midlothian, VA' },
  { id: 'chesterfield-va', name: 'Chesterfield, VA' },
  { id: 'henrico-va', name: 'Henrico, VA' },
  { id: 'mechanicsville-va', name: 'Mechanicsville, VA' },
  { id: 'short-pump-va', name: 'Short Pump, VA' },
];

export const SERVICES = [
  { id: 'cleaning-services', name: 'Cleaning Services' },
  { id: 'house-cleaning', name: 'House Cleaning' },
  { id: 'deep-cleaning', name: 'Deep Cleaning' },
  { id: 'move-out-cleaning', name: 'Move Out Cleaning' },
  { id: 'carpet-cleaning', name: 'Carpet Cleaning' },
  { id: 'commercial-cleaning', name: 'Commercial Cleaning' }
];

export function generateAllSlugs() {
  const slugs = [];
  LOCATIONS.forEach(location => {
    SERVICES.forEach(service => {
      slugs.push({
        seo_slug: \`\${service.id}-in-\${location.id}\`,
        locationName: location.name,
        serviceName: service.name
      });
    });
  });
  return slugs;
}

export function getSeoMetadataBySlug(slug) {
  const allParams = generateAllSlugs();
  const match = allParams.find(p => p.seo_slug === slug);
  if (match) return match;
  
  // Fallback defaults if requested slug doesn't perfectly match exactly (or just generate from strings)
  const parts = slug.split('-in-');
  if (parts.length === 2) {
    const serviceName = parts[0].split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    const locationName = parts[1].split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    return { seo_slug: slug, locationName, serviceName };
  }
  return { seo_slug: slug, locationName: 'Richmond, VA', serviceName: 'Cleaning Services' };
}
