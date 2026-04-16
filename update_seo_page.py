import os
import re

with open("app/page.js", "r", encoding="utf-8") as f:
    text = f.read()

# We extract the content between `return (\n    <>\n` and `\n    </>\n  );`
start = text.find("<main>")
end = text.rfind("</main>") + len("</main>")

jsx_content = text[start:end]

# Make Hero dynamic
jsx_content = jsx_content.replace(
    '<h1 className="hero-headline">Deep Cleaning.<br /><span className="typewriter text-accent"></span><span className="cursor text-accent">|</span></h1>',
    '<h1 className="hero-headline">{heroTitle}.<br /><span className="typewriter text-accent" data-phrases={typewriterData}></span><span className="cursor text-accent">|</span></h1>'
)

jsx_content = jsx_content.replace(
    '<p className="text-lead text-white" style={{"marginLeft": "0", "maxWidth": "500px"}}>\n                    We extract years of embedded dirt, returning your luxurious carpets and delicate upholstery to their original showroom glory. Experience true pristine perfection.\n                </p>',
    '<p className="text-lead text-white" style={{"marginLeft": "0", "maxWidth": "500px"}}>{heroDescription}</p>'
)

# Marquee logic
marquee_block = """
            <div className="marquee-container">
                <div className="marquee-track">
                    <span>{marqueeText}</span> 
                    <span className="dot">•</span>
                    <span>{locationName.toUpperCase()}</span>
                    <span className="dot">•</span>
                    <span>ECO-FRIENDLY</span>
                    <span className="dot">•</span>
                    <span>5-STAR EXPERTS</span>
                    <span className="dot">•</span>
                    <span>{marqueeText}</span> 
                    <span className="dot">•</span>
                    <span>{locationName.toUpperCase()}</span>
                    <span className="dot">•</span>
                    <span>ECO-FRIENDLY</span>
                    <span className="dot">•</span>
                    <span>5-STAR EXPERTS</span>
                    <span className="dot">•</span>
                    <span>{marqueeText}</span> 
                    <span className="dot">•</span>
                    <span>{locationName.toUpperCase()}</span>
                    <span className="dot">•</span>
                    <span>ECO-FRIENDLY</span>
                    <span className="dot">•</span>
                    <span>5-STAR EXPERTS</span>
                    <span className="dot">•</span>
                    <span>{marqueeText}</span> 
                    <span className="dot">•</span>
                    <span>{locationName.toUpperCase()}</span>
                    <span className="dot">•</span>
                    <span>ECO-FRIENDLY</span>
                    <span className="dot">•</span>
                    <span>5-STAR EXPERTS</span>
                    <span className="dot">•</span>
                </div>
            </div>
"""

# Replace existing marquee block
import re
jsx_content = re.sub(r'<div className="marquee-container">.*?</div>\s*</section>', marquee_block.strip() + '\n        </section>', jsx_content, flags=re.DOTALL)


# Dynamically replace map text if needed:
jsx_content = jsx_content.replace(
    '<h3>Visit Our HQ</h3>',
    '<h3>{locationName} Cleaners</h3>'
)
jsx_content = jsx_content.replace(
    '<li><strong>dY"? Address:</strong> Richmond, VA</li>',
    '<li><strong>📍 Area:</strong> {locationName}</li>'
)

# Make the links silo-friendly
# Find all `<a href="/services` inside `services-carousel-track`
# It's better to just swap it entirely with a dynamic `.map` over SERVICES in JS.
# But for exact layout preservation we'll just rewrite the URLs for the 6 available services if we want to.
# Let's dynamically map the 6 services over `SERVICES` in the file.
dynamic_carousel = """
                     {SERVICES.map((s, idx) => (
                        <Link href={`/${s.id}-in-${locationId}`} key={s.id} className="card-3d" data-tilt>
                            <div className="card-image" style={{backgroundImage: `url('${s.image}')`}}></div>
                            <div className="card-content-glass">
                                <span className="service-tag">0{idx + 1} / {s.shortName}</span>
                                <h3>{s.name}</h3>
                                <p>{s.tagline}</p>
                                <span className="animated-button explore-text-btn">
                                  <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                                  </svg>
                                  <span className="text">View Details</span>
                                  <span className="circle"></span>
                                  <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                                  </svg>
                                </span>
                            </div>
                        </Link>
                     ))}
"""
jsx_content = re.sub(r'<div className="services-carousel-track".*?<div className="bg-shape"></div>', 
                     f'<div className="services-carousel-track" id="serviceCarousel">\n{dynamic_carousel}\n</div>\n</div>\n</div>\n</section>\n<section className="section section-light" style={{"position": "relative", "overflow": "hidden"}}>\n<div className="bg-shape"></div>', 
                     jsx_content, flags=re.DOTALL)


seo_page_code = """
import { generateAllSlugs, getSeoMetadataBySlug, SERVICES } from '../../data/seoDb';
import Link from 'next/link';

export function generateStaticParams() {
  const slugs = generateAllSlugs();
  return slugs.map((slug) => ({
    seo_slug: slug.seo_slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { seo_slug } = resolvedParams;
  const data = getSeoMetadataBySlug(seo_slug);
  
  if (data.isLocationHub) {
    return {
      title: `Top Cleaning Services in ${data.locationName}`,
      description: `Discover the best premium cleaning services in ${data.locationName}. We provide 5-star residential and commercial solutions.`
    };
  }

  return {
    title: `${data.service.name} in ${data.locationName} | Roots Cleaning`,
    description: data.service.heroDescription,
  };
}

export default async function SeoLandingPage({ params }) {
  const resolvedParams = await params;
  const { seo_slug } = resolvedParams;
  const data = getSeoMetadataBySlug(seo_slug);

  const heroTitle = data.isLocationHub ? data.locationName : data.service.tagline;
  const heroDescription = data.isLocationHub ? `Delivering unmatched cleaning standards across ${data.locationName}. From residential refreshing to deep commercial scrubbing, choose your service below.` : data.service.heroDescription;
  const typewriterData = data.isLocationHub ? '["Trusted Cleaners.", "Top-Rated Service.", "Local Experts."]' : data.service.typewriter;
  const marqueeText = data.isLocationHub ? 'PREMIUM SERVICES' : data.service.marquee;
  const locationName = data.locationName;
  
  // Extract location id for creating local silo links
  const locationId = data.isLocationHub ? data.seo_slug : data.seo_slug.split('-in-')[1];

  return (
    <>
""" + jsx_content + """
    </>
  );
}
"""

with open("app/[seo_slug]/page.js", "w", encoding="utf-8") as f:
    f.write(seo_page_code)

print("success")
