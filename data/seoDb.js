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
  { 
    id: 'cleaning-services', 
    name: 'Cleaning Services',
    shortName: 'Cleaning Group',
    tagline: 'Standard Cleaning.',
    typewriter: '["Total Home Care.", "Unmatched Freshness.", "Spotless Perfection."]',
    heroDescription: 'Experience comprehensive cleaning services designed for your lifestyle. We handle the dirty work so you can relax in a spotless environment.',
    marquee: 'PREMIUM CLEANING SERVICE',
    image: '/images/service_carpet.png'
  },
  { 
    id: 'house-cleaning', 
    name: 'House Cleaning',
    shortName: 'Residential',
    tagline: 'Home Cleaning.',
    typewriter: '["Dust-Free Living.", "Sanitized Surfaces.", "Sparkling Floors."]',
    heroDescription: 'Our dedicated house cleaning transforms your living space into a sanctuary. Detailed, reliable, and completely customized to your home layout.',
    marquee: 'EXPERT HOUSE CLEANING',
    image: '/images/service_maid.png'
  },
  { 
    id: 'deep-cleaning', 
    name: 'Deep Cleaning',
    shortName: 'Deep Clean',
    tagline: 'Intensive Scrub.',
    typewriter: '["Baseboards Scrubbed.", "Grime Eradicated.", "Total Reset."]',
    heroDescription: 'Go beyond the surface. We extract years of embedded dirt, grease, and dust from the most hard-to-reach areas for absolute hygiene.',
    marquee: 'ULTIMATE DEEP CLEANING',
    image: '/images/service_deepclean.png'
  },
  { 
    id: 'move-out-cleaning', 
    name: 'Move-Out Cleaning',
    shortName: 'Move Out',
    tagline: 'Seamless Transitions.',
    typewriter: '["Deposit Recovery.", "Empty Home Scrub.", "Flawless Inspections."]',
    heroDescription: 'Ensure a smooth transition. We meticulously prepare empty properties to satisfy strict landlord and buyer inspections.',
    marquee: 'MOVE IN / MOVE OUT',
    image: '/images/service_moveout.png'
  },
  { 
    id: 'carpet-cleaning', 
    name: 'Carpet Cleaning',
    shortName: 'Carpets',
    tagline: 'Deep Extraction.',
    typewriter: '["Stain Removal.", "Odor Elimination.", "Rapid Drying."]',
    heroDescription: 'Revive your plush carpets. Our high-heat extraction methodology removes allergens and dirt down to the foundational padding.',
    marquee: 'ADVANCED CARPET CARE',
    image: '/images/service_carpet.png'
  },
  { 
    id: 'commercial-cleaning', 
    name: 'Commercial Cleaning',
    shortName: 'Corporate',
    tagline: 'Business Maintenance.',
    typewriter: '["After Hours Care.", "Retail Ready.", "Office Sanitization."]',
    heroDescription: 'Impress your clients and protect your workforce. We offer tailored, high-capacity janitorial services for corporate and retail footprints.',
    marquee: 'COMMERCIAL SANITIZATION',
    image: '/images/service_commercial.png'
  }
];

export function generateAllSlugs() {
  const slugs = [];
  
  // 1. Generate Location Hub Slugs
  LOCATIONS.forEach(location => {
    slugs.push({
      seo_slug: location.id,
      isLocationHub: true,
      locationName: location.name,
      locationId: location.id
    });
  });

  // 2. Generate Service Landing Slugs
  LOCATIONS.forEach(location => {
    SERVICES.forEach(service => {
      slugs.push({
        seo_slug: `${service.id}-in-${location.id}`,
        isLocationHub: false,
        locationName: location.name,
        service: service
      });
    });
  });
  
  return slugs;
}

export function getSeoMetadataBySlug(slug) {
  const allParams = generateAllSlugs();
  const match = allParams.find(p => p.seo_slug === slug);
  if (match) return match;
  
  // Fallbacks
  return { 
    seo_slug: slug, 
    isLocationHub: false,
    locationName: 'Richmond, VA', 
    service: SERVICES[0]
  };
}
