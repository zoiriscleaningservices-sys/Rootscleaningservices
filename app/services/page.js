
import MapContactCard from '@/components/sections/MapContactCard';
import Link from 'next/link';
import Image from 'next/image';

export default function Services() {
  return (
    <>
      

    <main>
        
        <section className="hero-modern" style={{"height": "60vh", "minHeight": "400px"}}>
            <div className="hero-bg-image" style={{"backgroundImage": "url('/images/service_deepclean.png')", "animation": "none"}}></div>
            <div className="hero-gradient-mask" style={{"background": "linear-gradient(0deg, rgba(22,44,38,1) 0%, rgba(22,44,38,0.7) 100%)"}}></div>
            <div className="container hero-content text-center reveal" style={{"paddingTop": "120px"}}>
                <h1 className="hero-headline line-tight mb-4">Our Services.<br /><span className="typewriter text-accent" data-phrases='["Every Space.", "Every Routine.", "Every Detail.", "Done Right."]'></span><span className="cursor text-accent">|</span></h1>
                <p className="text-lead text-white mx-auto">Dedicated solutions tailored to your unique cleaning needs.</p>
            </div>
            
            
            <div className="marquee-container" style={{"bottom": "0"}}>
                <div className="marquee-track">
                    <span>ADVANCED CARPET EXTRACTION</span> <span className="dot">•</span>
                    <span>PET STAIN REMOVAL</span> <span className="dot">•</span>
                    <span>DELICATE FABRICS</span> <span className="dot">•</span>
                    <span>HIGH-TRAFFIC COMMERCIAL LOBBIES</span> <span className="dot">•</span>
                    <span>HOTEL MAINTENANCE</span> <span className="dot">•</span>
                    <span>ADVANCED CARPET EXTRACTION</span> <span className="dot">•</span>
                    <span>PET STAIN REMOVAL</span> <span className="dot">•</span>
                    <span>DELICATE FABRICS</span> <span className="dot">•</span>
                    <span>HIGH-TRAFFIC COMMERCIAL LOBBIES</span> <span className="dot">•</span>
                    <span>HOTEL MAINTENANCE</span> <span className="dot">•</span>
                </div>
            </div>
        </section>

        
        <section id="carpet" className="section section-light" style={{"paddingTop": "6rem"}}>
            <div className="container split-layout">
                <div className="split-content reveal">
                    <div className="badge-pill mb-2">01 / Residential</div>
                    <h2 className="display-3">Advanced Carpet Cleaning</h2>
                    <p className="text-lg text-gray mt-4 mb-6">Over time, carpets absorb dirt, allergens, and odors that vacuuming alone can't remove. Our hot water extraction method penetrates deep into the fibers, loosening embedded grime.</p>
                    <ul className="clean-list">
                        <li><div className="icon-circle">✓</div><div><strong>Stain & Spot Removal</strong></div></li>
                        <li><div className="icon-circle">✓</div><div><strong>Odor Neutralization</strong></div></li>
                        <li><div className="icon-circle">✓</div><div><strong>Fast-Drying Solutions</strong></div></li>
                    </ul>
                    <a href="/contact" className="btn btn-accent mt-4" style={{"padding": "0.8rem 2rem"}}>Get a Quote</a>
                </div>
                <div className="split-image reveal delay-2">
                    <img src="/images/service_carpet.png" alt="Carpet Cleaning" className="shadow-xl" style={{"borderRadius": "var(--radius-md)"}} />
                </div>
            </div>
        </section>

        <section id="upholstery" className="section bg-offwhite">
            <div className="container split-layout" style={{"direction": "rtl"}}>
                <div className="split-content reveal" style={{"direction": "ltr"}}>
                    <div className="badge-pill mb-2">02 / Fabrics</div>
                    <h2 className="display-3">Delicate Upholstery Care</h2>
                    <p className="text-lg text-gray mt-4 mb-6">Your furniture requires special attention. We apply specialized, low-moisture cleaning solutions that safely remove dirt without causing shrinkage.</p>
                    <ul className="clean-list">
                        <li><div className="icon-circle">✓</div><div><strong>Safe for Delicate Materials</strong></div></li>
                        <li><div className="icon-circle">✓</div><div><strong>Revitalizes Color Integrity</strong></div></li>
                        <li><div className="icon-circle">✓</div><div><strong>Extends Furniture Lifespan</strong></div></li>
                    </ul>
                    <a href="/contact" className="btn btn-accent mt-4" style={{"padding": "0.8rem 2rem"}}>Get a Quote</a>
                </div>
                <div className="split-image reveal delay-2" style={{"direction": "ltr"}}>
                    <img src="/images/service_upholstery.png" alt="Upholstery Care" className="shadow-xl" style={{"borderRadius": "var(--radius-md)"}} />
                </div>
            </div>
        </section>

        <section id="commercial" className="section section-light">
            <div className="container split-layout">
                <div className="split-content reveal">
                    <div className="badge-pill mb-2">03 / Corporate</div>
                    <h2 className="display-3">Commercial & Retail</h2>
                    <p className="text-lg text-gray mt-4 mb-6">First impressions matter. We provide large-scale, after-hours deep cleaning tailored for massive footprints, ensuring your business stays pristine.</p>
                    <ul className="clean-list">
                        <li><div className="icon-circle">✓</div><div><strong>High-Traffic Lane Therapy</strong></div></li>
                        <li><div className="icon-circle">✓</div><div><strong>Flexible After-Hours Service</strong></div></li>
                        <li><div className="icon-circle">✓</div><div><strong>Minimal Disruption</strong></div></li>
                    </ul>
                    <a href="/contact" className="btn btn-accent mt-4" style={{"padding": "0.8rem 2rem"}}>Get a Quote</a>
                </div>
                <div className="split-image reveal delay-2">
                    <img src="/images/service_commercial.png" alt="Commercial Cleaning" className="shadow-xl" style={{"borderRadius": "var(--radius-md)"}} />
                </div>
            </div>
        </section>

        <section id="tile" className="section bg-offwhite">
            <div className="container split-layout" style={{"direction": "rtl"}}>
                <div className="split-content reveal" style={{"direction": "ltr"}}>
                    <div className="badge-pill mb-2">04 / Hard Floors</div>
                    <h2 className="display-3">Tile & Grout Cleaning</h2>
                    <p className="text-lg text-gray mt-4 mb-6">Porous grout lines absorb spills and dirt over time, becoming permanently discolored. Our high-pressure steam extraction blasts away years of buildup instantly.</p>
                    <ul className="clean-list">
                        <li><div className="icon-circle">✓</div><div><strong>Restores Original Grout Color</strong></div></li>
                        <li><div className="icon-circle">✓</div><div><strong>High-Pressure Sterilization</strong></div></li>
                        <li><div className="icon-circle">✓</div><div><strong>Optional Clear Sealer</strong></div></li>
                    </ul>
                    <a href="/contact" className="btn btn-accent mt-4" style={{"padding": "0.8rem 2rem"}}>Get a Quote</a>
                </div>
                <div className="split-image reveal delay-2" style={{"direction": "ltr"}}>
                    <img src="/images/service_tile.png" alt="Tile and Grout Cleaning" className="shadow-xl" style={{"borderRadius": "var(--radius-md)"}} />
                </div>
            </div>
        </section>

        <section id="pets" className="section section-light">
            <div className="container split-layout">
                <div className="split-content reveal">
                    <div className="badge-pill mb-2">05 / Specialized</div>
                    <h2 className="display-3">Pet Odor Removal</h2>
                    <p className="text-lg text-gray mt-4 mb-6">Pets are family, but accidents happen. Standard cleaning only masks the smell. We use specialized enzyme-based treatments that actually consume the odor-causing bacteria.</p>
                    <ul className="clean-list">
                        <li><div className="icon-circle">✓</div><div><strong>Locates Hidden Stains via UV</strong></div></li>
                        <li><div className="icon-circle">✓</div><div><strong>Enzymatic Breakdown technology</strong></div></li>
                        <li><div className="icon-circle">✓</div><div><strong>Safe for Pets and Children</strong></div></li>
                    </ul>
                    <a href="/contact" className="btn btn-accent mt-4" style={{"padding": "0.8rem 2rem"}}>Get a Quote</a>
                </div>
                <div className="split-image reveal delay-2">
                    <img src="/images/service_pet.png" alt="Pet Odor Removal" className="shadow-xl" style={{"borderRadius": "var(--radius-md)"}} />
                </div>
            </div>
        </section>

        <section id="rugs" className="section bg-offwhite">
            <div className="container split-layout" style={{"direction": "rtl"}}>
                <div className="split-content reveal" style={{"direction": "ltr"}}>
                    <div className="badge-pill mb-2">06 / Premium</div>
                    <h2 className="display-3">Area & Oriental Rugs</h2>
                    <p className="text-lg text-gray mt-4 mb-6">Delicate weaves like silk and wool require extremely gentle handling. We provide safe, pH-balanced washing that prevents color bleeding while removing deep-seated dirt.</p>
                    <ul className="clean-list">
                        <li><div className="icon-circle">✓</div><div><strong>Dye Bleeding Prevention</strong></div></li>
                        <li><div className="icon-circle">✓</div><div><strong>Fringe Detail Cleaning</strong></div></li>
                        <li><div className="icon-circle">✓</div><div><strong>Preserves Antique Value</strong></div></li>
                    </ul>
                    <a href="/contact" className="btn btn-accent mt-4" style={{"padding": "0.8rem 2rem"}}>Get a Quote</a>
                </div>
                <div className="split-image reveal delay-2" style={{"direction": "ltr"}}>
                    <img src="/images/service_rug.png" alt="Oriental Rug Washing" className="shadow-xl" style={{"borderRadius": "var(--radius-md)"}} />
                </div>
            </div>
        </section>

        <section id="deep-clean" className="section section-light">
            <div className="container split-layout">
                <div className="split-content reveal">
                    <div className="badge-pill mb-2">07 / In-Depth</div>
                    <h2 className="display-3">Deep Home Cleaning</h2>
                    <p className="text-lg text-gray mt-4 mb-6">Our most intensive package. We scrub baseboards, disinfect high-touch surfaces, and ensure no corner is left untouched, guaranteeing absolute hygiene.</p>
                    <ul className="clean-list">
                        <li><div className="icon-circle">✓</div><div><strong>Dust & Allergen Mitigation</strong></div></li>
                        <li><div className="icon-circle">✓</div><div><strong>Comprehensive Detail Scrub</strong></div></li>
                        <li><div className="icon-circle">✓</div><div><strong>Reset Your Home's Baseline</strong></div></li>
                    </ul>
                    <a href="/contact" className="btn btn-accent mt-4" style={{"padding": "0.8rem 2rem"}}>Get a Quote</a>
                </div>
                <div className="split-image reveal delay-2">
                    <img src="/images/service_deepclean.png" alt="Deep Home Cleaning" className="shadow-xl" style={{"borderRadius": "var(--radius-md)"}} />
                </div>
            </div>
        </section>

        <section id="kitchen-bath" className="section bg-offwhite">
            <div className="container split-layout" style={{"direction": "rtl"}}>
                <div className="split-content reveal" style={{"direction": "ltr"}}>
                    <div className="badge-pill mb-2">08 / Sanitation</div>
                    <h2 className="display-3">Kitchen & Bath Care</h2>
                    <p className="text-lg text-gray mt-4 mb-6">The spaces that demand the highest hygiene standards. We specialize in hard water stain removal, heavy degreasing, and making appliances shine like new.</p>
                    <ul className="clean-list">
                        <li><div className="icon-circle">✓</div><div><strong>Heavy Duty Degreasing</strong></div></li>
                        <li><div className="icon-circle">✓</div><div><strong>Soap Scum Elimination</strong></div></li>
                        <li><div className="icon-circle">✓</div><div><strong>Fixture Polishing</strong></div></li>
                    </ul>
                    <a href="/contact" className="btn btn-accent mt-4" style={{"padding": "0.8rem 2rem"}}>Get a Quote</a>
                </div>
                <div className="split-image reveal delay-2" style={{"direction": "ltr"}}>
                    <img src="/images/service_kitchen.png" alt="Kitchen Cleaning" className="shadow-xl" style={{"borderRadius": "var(--radius-md)"}} />
                </div>
            </div>
        </section>

        <section id="move-out" className="section section-light">
            <div className="container split-layout">
                <div className="split-content reveal">
                    <div className="badge-pill mb-2">09 / Relocation</div>
                    <h2 className="display-3">Move-In & Move-Out</h2>
                    <p className="text-lg text-gray mt-4 mb-6">Guaranteeing a flawless handover for landlords, or ensuring a perfectly sterilized blank canvas for you when moving into a new home.</p>
                    <ul className="clean-list">
                        <li><div className="icon-circle">✓</div><div><strong>Inside Cabinets & Drawers</strong></div></li>
                        <li><div className="icon-circle">✓</div><div><strong>Appliance Interiors</strong></div></li>
                        <li><div className="icon-circle">✓</div><div><strong>Maximize Security Deposit Returns</strong></div></li>
                    </ul>
                    <a href="/contact" className="btn btn-accent mt-4" style={{"padding": "0.8rem 2rem"}}>Get a Quote</a>
                </div>
                <div className="split-image reveal delay-2">
                    <img src="/images/service_moveout.png" alt="Move Out Cleaning" className="shadow-xl" style={{"borderRadius": "var(--radius-md)"}} />
                </div>
            </div>
        </section>

        <section id="standard" className="section bg-offwhite">
            <div className="container split-layout" style={{"direction": "rtl"}}>
                <div className="split-content reveal" style={{"direction": "ltr"}}>
                    <div className="badge-pill mb-2">10 / Recurring</div>
                    <h2 className="display-3">Standard Maid Service</h2>
                    <p className="text-lg text-gray mt-4 mb-6">Weekly or bi-weekly maintenance. Let us manage the dusting, vacuuming, and surface wiping so you can reclaim your precious free time.</p>
                    <ul className="clean-list">
                        <li><div className="icon-circle">✓</div><div><strong>Consistent Quality Checks</strong></div></li>
                        <li><div className="icon-circle">✓</div><div><strong>Trusted & Vetted Staff</strong></div></li>
                        <li><div className="icon-circle">✓</div><div><strong>Customizable Checklists</strong></div></li>
                    </ul>
                </div>
                <div className="split-image reveal delay-2" style={{"direction": "ltr"}}>
                    <img src="/images/service_maid.png" alt="Maid Service" className="shadow-xl" style={{"borderRadius": "var(--radius-md)"}} />
                </div>
            </div>
        </section>
        <section className="section section-dark" id="faq">
            <div className="container reveal">
                <div className="text-center mb-12">
                    <h2 className="section-title text-white">Service Specific FAQs</h2>
                </div>
                
                <div className="faq-container">
                    <div className="faq-item active">
                        <button className="faq-question">
                            <span>Can you clean wool and silk rugs?</span>
                            <span className="faq-icon">+</span>
                        </button>
                        <div className="faq-answer">
                            <div className="answer-inner">
                                Yes. Natural fibers like wool and silk require delicate pH-balanced detergents and colder water extraction to prevent shrinking and color bleeding. Our technicians are specially trained to handle high-end rugs.
                            </div>
                        </div>
                    </div>
                    <div className="faq-item">
                        <button className="faq-question">
                            <span>What is your pet odor removal process?</span>
                            <span className="faq-icon">+</span>
                        </button>
                        <div className="faq-answer">
                            <div className="answer-inner">
                                For severe pet odors, surface cleaning isn't enough. We use advanced enzymatic treatments that actually break down the odor-causing bacteria at the molecular level, right down to the carpet padding.
                            </div>
                        </div>
                    </div>
                    <div className="faq-item">
                        <button className="faq-question">
                            <span>Do you offer protective coatings?</span>
                            <span className="faq-icon">+</span>
                        </button>
                        <div className="faq-answer">
                            <div className="answer-inner">
                                Absolutely. We offer an optional post-cleaning application of premium fabric and carpet protector (like Scotchgard). This creates an invisible barrier against future spills, giving you more time to wipe them up before they stain permanently.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
        <section className="map-section relative">
            <div className="map-overlay"></div>
            
            <iframe className="gmap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101235.03155700816!2d-77.53856277977461!3d37.5246604675402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b111095799c9ed%3A0xbfd83e6de2423cc5!2sRichmond%2C%20VA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            
            <div className="container absolute inset-0 d-flex flex-end align-center z-10" style={{"pointerEvents": "none"}}>
                <div className="map-contact-card reveal delay-2" style={{"pointerEvents": "auto"}}>
                    <img src="/images/logo.png" alt="Roots Cleaning Logo" style={{"width": "90px", "height": "auto", "marginBottom": "1rem", "filter": "drop-shadow(0 2px 4px rgba(0,0,0,0.15))"}} />
                    <h3>Visit Our HQ</h3>
                    <p className="text-sm mb-4">We dispatch our highly trained crews from our central hub directly to your door in Richmond.</p>
                    <ul className="contact-grid">
                        <li><strong>📍 Address:</strong> Richmond, VA</li>
                        <li><strong>📞 Phone:</strong> (804) 873-7546</li>
                        <li><strong>✉️ Email:</strong> info@rootscleaningservices.com</li>
                    </ul>
                    <a href="/contact" className="btn btn-primary mt-4 w-full text-center">Contact Dispatch</a>
                </div>
            </div>
        </section>
    </main>
    
    </>
  );
}
