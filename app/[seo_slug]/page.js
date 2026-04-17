
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
      title: `⭐ Top Cleaning Services in ${data.locationName} | 5-Star Rated`,
      description: `✨ Looking for the best cleaning services in ${data.locationName}? Our veteran-certified cleaners remove 99.9% of dirt. Claim your FREE quote from Roots Cleaning today!`
    };
  }

  return {
    title: `⭐ #1 ${data.service.name} in ${data.locationName} | Free Quotes`,
    description: `✨ Experience premium ${data.service.name.toLowerCase()} in ${data.locationName}. 5-star certified. ${data.service.heroDescription} Get a FREE estimate!`,
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

  
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CleaningService",
        "name": `${data.isLocationHub ? 'Premium Cleaning Services' : data.service.name} in ${locationName}`,
        "description": heroDescription,
        "areaServed": {
          "@type": "City",
          "name": locationName
        },
        "url": `https://www.rootscleaningservices.com/${seo_slug}`,
        "telephone": "(804) 873-7546",
        "priceRange": "$$",
        "image": "https://www.rootscleaningservices.com/images/logo.png",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "128"
        },
        "openingHours": "Mo-Su 08:00-18:00"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is included in a standard cleaning?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our standard cleaning includes dusting, vacuuming, mopping, and bathroom sanitation to keep your home fresh and spotless."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide your own cleaning supplies?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! We bring premium, eco-friendly cleaning supplies and equipment to ensure a perfect clean safely."
            }
          },
          {
            "@type": "Question",
            "name": "How do I book a cleaning service?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Booking is easy and only takes 60 seconds! Just give us a call at (804) 873-7546 or click Get Your Free Quote on our site."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} /><main>
        <section className="hero-modern">
            <div className="hero-bg-image"></div>
            <div className="hero-gradient-mask"></div>
            <div className="container hero-content text-left reveal">
                <div className="hero-badge">Est. 2025 • Top-Rated</div>
                <h1 className="hero-headline">{heroTitle}.<br /><span className="typewriter text-accent" data-phrases={typewriterData}></span><span className="cursor text-accent">|</span></h1>
                <p className="text-lead text-white" style={{"marginLeft": "0", "maxWidth": "500px"}}>{heroDescription}</p>
                <div className="hero-buttons" style={{"justifyContent": "flex-start", "marginTop": "2rem"}}>
                    <a href="contact.html" className="btn btn-accent btn-large glow-effect">Get Your Free Quote</a>
                    <a href="services.html" className="btn btn-outline btn-large">View Portfolio</a>
                </div>
            </div>
            
            
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
        </section>

        
        <section className="section section-dark" id="services" style={{"paddingTop": "6rem"}}>
            <div className="container">
                <div className="section-header reveal d-flex justify-between align-center">
                    <div style={{"maxWidth": "600px"}}>
                        <h2 className="section-title">Masterful Services</h2>
                        <p className="text-lead text-white" style={{"marginLeft": "0"}}>Beyond standard vacuuming. We utilize advanced heat extraction and encapsulation technology.</p>
                    </div>
                </div>
                
                <div className="carousel-wrapper relative">
                    <button className="carousel-btn prev carousel-nav-absolute left-nav hidden-mobile" aria-label="Previous">&larr;</button>
                    <button className="carousel-btn next carousel-nav-absolute right-nav hidden-mobile" aria-label="Next">&rarr;</button>
                    <div className="carousel-viewport">
                    <div className="services-carousel-track" id="serviceCarousel">

                     {SERVICES.map((s, idx) => (
                        <a href={`/${s.id}-in-${locationId}`} key={s.id} className="card-3d" data-tilt>
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
                        </a>
                     ))}

</div>
</div>
</div>
</div>
</section>
<section className="section section-light" style={{"position": "relative", "overflow": "hidden"}}>
<div className="bg-shape"></div>
            
            <div className="container relative z-10">
                <div className="split-layout">
                    <div className="split-image reveal delay-1">
                        <div className="mascot-modern">
                            <img src="/images/logo.png" alt="Roots Cleaning Services Mascot" className="badge-img shadow-xl" />
                            <div className="badge-ring"></div>
                        </div>
                    </div>
                    <div className="split-content reveal delay-2 pl-4">
                        <div className="badge-pill mb-2">The Difference</div>
                        <h2 className="display-3 font-serif line-tight">It All Starts at the Roots.</h2>
                        <p className="text-lg text-gray mt-4 mb-6">
                            Other companies clean the surface layer. We deploy advanced heat-extraction 
                            that reaches the absolute root of the fiber, sanitizing and removing 99.9% of allergens.
                        </p>
                        <ul className="clean-list">
                            <li>
                                <div className="icon-circle">✓</div>
                                <div><strong>Eco-Friendly Solvents</strong> <br /><span className="text-sm">Safe for pets and high-end fabrics.</span></div>
                            </li>
                            <li>
                                <div className="icon-circle">✓</div>
                                <div><strong>Rapid Dry Technology</strong> <br /><span className="text-sm">Walk on your carpets in hours, not days.</span></div>
                            </li>
                            <li>
                                <div className="icon-circle">✓</div>
                                <div><strong>Certified Veterans</strong> <br /><span className="text-sm">Background-checked, insured, and experienced.</span></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        
        <section className="section bg-offwhite" id="faq">
            <div className="container reveal">
                <div className="text-center mb-12">
                    <h2 className="section-title text-primary">Frequently Asked Questions</h2>
                    <p className="text-lead mx-auto">Everything you need to know about our cleaning processes.</p>
                </div>
                
                <div className="faq-container">
                    <div className="faq-item active">
                        <button className="faq-question">
                            <span>How soon can we walk on the carpets after cleaning?</span>
                            <span className="faq-icon">+</span>
                        </button>
                        <div className="faq-answer">
                            <div className="answer-inner">
                                Thanks to our advanced moisture extraction technology, most carpets are completely dry and ready for normal traffic within 2 to 4 hours. We can also provide complementary shoe covers if you need immediate access.
                            </div>
                        </div>
                    </div>
                    
                    <div className="faq-item">
                        <button className="faq-question">
                            <span>Are your cleaning products safe for pets and children?</span>
                            <span className="faq-icon">+</span>
                        </button>
                        <div className="faq-answer">
                            <div className="answer-inner">
                                Absolutely. We exclusively use highly-rated, biodegradable, and non-toxic cleaning solutions. Our process leaves behind zero harmful chemical residue, making it completely safe for your entire family and pets.
                            </div>
                        </div>
                    </div>

                    <div className="faq-item">
                        <button className="faq-question">
                            <span>Do you guarantee the removal of all stains?</span>
                            <span className="faq-icon">+</span>
                        </button>
                        <div className="faq-answer">
                            <div className="answer-inner">
                                While we utilize the industry's most advanced stain removal techniques and succeed where others fail, no company can honestly guarantee 100% removal of every chemical dye or acid stain. However, we guarantee that if we can't remove it, no one can.
                            </div>
                        </div>
                    </div>

                    <div className="faq-item">
                        <button className="faq-question">
                            <span>Do I need to move furniture before you arrive?</span>
                            <span className="faq-icon">+</span>
                        </button>
                        <div className="faq-answer">
                            <div className="answer-inner">
                                We ask that you remove small items (lamps, plants, fragile decor). Our technicians will carefully move light furniture like chairs and tables. For extremely heavy items (beds, grand pianos, large dressers), we use specialized wands to clean as far underneath as possible without moving them.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        
        
        <section className="ti-reviews-section">
            <div className="container">
                <h2 className="ti-title">Here's What People Say About Us</h2>
                <div className="ti-flex-container">
                    
                    
                    <div className="ti-summary-box">
                        <img src="/images/logo.png" alt="Roots Cleaning Services" style={{"maxWidth": "110px", "marginBottom": "12px", "borderRadius": "8px"}} />
                        <div className="ti-summary-title">EXCELLENT</div>
                        <div className="ti-stars"><svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg><svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg><svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg><svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg><svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg></div>
                        <div className="ti-based-on">Based on <strong>6 reviews</strong></div>
                        <div className="ti-google-logo-main"><svg viewBox="0 0 272 92" width="100" height="34"><path fill="#4285f4" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/><path fill="#ea4335" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/><path fill="#4285f4" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13V64.74h-.34c-2.27 2.75-6.55 5.2-11.68 5.2-11.09 0-21.25-9.66-21.25-22.77 0-13.02 10.16-22.77 21.25-22.77 5.12 0 9.41 2.36 11.68 5.05h.34v-3.11h9.25zm-8.56 20.92c0-7.5-5.2-13.44-11.68-13.44-6.56 0-11.84 5.96-11.84 13.44 0 7.4 5.29 13.44 11.84 13.44 6.47 0 11.68-5.96 11.68-13.44z"/> <path fill="#34a853" d="M225 3v65.61h-9.83V3H225z"/> <path fill="#fbbc05" d="M262.01 54.54l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.26 0-13.19 9.5-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.06zm-22.76-7.9l20.41-8.48c-1.1-2.18-3.95-3.7-7.39-3.7-4.62 0-11 3.53-13.02 12.18z"/> <path fill="#4285f4" d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 13.79-6.64 18.36-4.45 4.35-10.25 6.82-18.44 6.82-15.12 0-27.35-12.18-27.35-27.22S27.27 8.42 42.4 8.42c8.24 0 14.03 3.2 18.48 7.39l-6.82 6.82c-3.23-3-7.56-5.38-11.66-5.38-9.08 0-16.3 7.5-16.3 16.55s7.22 16.55 16.3 16.55c5.38 0 10.15-2.22 12.86-6 2.22-2.91 3.33-6.52 3.66-10.75h-23.63z"/></svg></div>
                    </div>

                    
                    <div className="ti-reviews-carousel-wrapper">
                        
                        <div className="ti-carousel-btn prev">
                            <svg viewBox="0 0 24 24"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/></svg>
                        </div>
                        <div className="ti-carousel-btn next">
                            <svg viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
                        </div>

                        
                        <div className="ti-reviews-track">
                            
                            
                            <div className="ti-card">
                                <div className="ti-card-header">
                                    <div className="ti-avatar" style={{"backgroundColor": "#00897b"}}>D</div>
                                    <div className="ti-user-info">
                                        <span className="ti-name">Doreen Miller</span>
                                        <span className="ti-date">6 months ago</span>
                                    </div>
                                    <svg className="ti-google-icon" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
                                </div>
                                <div className="ti-card-stars">
                                    <svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg><svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg><svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg><svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg><svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg> <div className="ti-verified"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg></div>
                                </div>
                                <p className="ti-review-text">Excellent service. Very nice, came last minute notice. 👍🏼👍🏼 thanks</p>
                                
                            </div>

                            
                            <div className="ti-card">
                                <div className="ti-card-header">
                                    <div className="ti-avatar" style={{"backgroundColor": "#512da8"}}>T</div>
                                    <div className="ti-user-info">
                                        <span className="ti-name">Tweet Indigenous</span>
                                        <span className="ti-date">7 months ago</span>
                                    </div>
                                    <svg className="ti-google-icon" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
                                </div>
                                <div className="ti-card-stars">
                                    <svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg><svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg><svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg><svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg><svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg> <div className="ti-verified"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg></div>
                                </div>
                                <p className="ti-review-text">Best cleaning service ever Jesse did a great job cleaning our staircase and second bedroom will be hiring him every three months.</p>
                                
                            </div>

                            
                            <div className="ti-card">
                                <div className="ti-card-header">
                                    <div className="ti-avatar-img" style={{"backgroundColor": "#ccc", "backgroundImage": "url('/images/hero.jpg')", "backgroundSize": "cover", "backgroundPosition": "center"}}></div>
                                    <div className="ti-user-info">
                                        <span className="ti-name">Mariah Porfily</span>
                                        <span className="ti-date">7 months ago</span>
                                    </div>
                                    <svg className="ti-google-icon" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
                                </div>
                                <div className="ti-card-stars">
                                    <svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg><svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg><svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg><svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg><svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg> <div className="ti-verified"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg></div>
                                </div>
                                <p className="ti-review-text">I was in a pinch my carpet cleaner canceled on me 2 days before my move out inspection Luis was able to be there in a few hours and have it done in an hour</p>
                                
                            </div>

                            
                            <div className="ti-card">
                                <div className="ti-card-header">
                                    <div className="ti-avatar" style={{"backgroundColor": "#ef6c00"}}>M</div>
                                    <div className="ti-user-info">
                                        <span className="ti-name">Mario</span>
                                        <span className="ti-date">7 months ago</span>
                                    </div>
                                    <svg className="ti-google-icon" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
                                </div>
                                <div className="ti-card-stars">
                                    <svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg><svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg><svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg><svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg><svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg> <div className="ti-verified"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg></div>
                                </div>
                                <p className="ti-review-text">This cleaning company make your home so clean and it adorable price I will let them clean my home again</p>
                            </div>

                        </div>
                        
                        
                        <div className="ti-badge-container">
                            <a href="#" className="ti-trustindex-badge">
                                Verified by Trustindex 
                                <svg viewBox="0 0 24 24"><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>




        
        <section className="map-section relative">
            <div className="map-overlay"></div>
            
            <iframe className="gmap" src={`https://maps.google.com/maps?q=${encodeURIComponent(locationName)}&t=&z=13&ie=UTF8&iwloc=&output=embed`} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            
            <div className="container absolute inset-0 d-flex flex-end align-center z-10" style={{"pointerEvents": "none"}}>
                <div className="map-contact-card reveal delay-2" style={{"pointerEvents": "auto"}}>
                    <img src="/images/logo.png" alt="Roots Cleaning Logo" style={{"width": "90px", "height": "auto", "marginBottom": "1rem", "filter": "drop-shadow(0 2px 4px rgba(0,0,0,0.15))"}} />
                    <h3>{locationName} Cleaners</h3>
                    <p className="text-sm mb-4">We dispatch our highly trained crews from our central hub directly to your door.</p>
                    <ul className="contact-grid">
                        <li><strong>📍 Address:</strong> Richmond, VA</li>
                        <li><strong>📞 Phone:</strong> (804) 873-7546</li>
                        <li><strong>✉️ Email:</strong> info@rootscleaningservices.com</li>
                    </ul>
                    <a href="contact.html" className="btn btn-primary mt-4 w-full text-center">Contact Dispatch</a>
                </div>
            </div>
        </section>
        </main>
    </>
  );
}
