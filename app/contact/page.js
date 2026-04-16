
import MapContactCard from '@/components/sections/MapContactCard';
import Link from 'next/link';
import Image from 'next/image';

export default function Contact() {
  return (
    <>
      

    <main>
        
        <section className="hero-modern" style={{"height": "50vh", "minHeight": "350px"}}>
            <div className="hero-bg-image" style={{"backgroundImage": "url('/images/service_commercial.png')", "animation": "none"}}></div>
            <div className="hero-gradient-mask" style={{"background": "linear-gradient(0deg, rgba(22,44,38,1) 0%, rgba(22,44,38,0.5) 100%)"}}></div>
            <div className="container hero-content text-center reveal" style={{"paddingTop": "100px"}}>
                <h1 className="hero-headline line-tight mb-4">Let's Connect.<br /><span className="typewriter text-accent" data-phrases='["Request A Fast Quote.", "Schedule Your Clean.", "Talk To Dispatch.", "Experience Perfection."]'></span><span className="cursor text-accent">|</span></h1>
            </div>
        </section>

        <section className="section section-light" style={{"paddingTop": "4rem"}}>
            <div className="container split-layout">
                
                <div className="split-content reveal">
                    <div className="badge-pill mb-2">Ready to Book?</div>
                    <h2 className="display-3">Request a Free Quote</h2>
                    <p className="text-lg text-gray mt-4 mb-6">Whether you're dealing with an urgent pet stain, or scheduling a massive corporate cleaning rollout, we are ready to assist. Send us the details and we'll reply within working hours.</p>
                    
                    <ul className="clean-list">
                        <li>
                            <div className="icon-circle" style={{"background": "transparent", "color": "var(--clr-primary)", "border": "2px solid var(--clr-primary)"}}>📞</div>
                            <div><strong>Phone Support</strong> <br /><span className="text-sm">(804) 873-7546</span></div>
                        </li>
                        <li>
                            <div className="icon-circle" style={{"background": "transparent", "color": "var(--clr-primary)", "border": "2px solid var(--clr-primary)"}}>✉️</div>
                            <div><strong>Email Inquiry</strong> <br /><span className="text-sm">info@rootscleaningservices.com</span></div>
                        </li>
                        <li>
                            <div className="icon-circle" style={{"background": "transparent", "color": "var(--clr-primary)", "border": "2px solid var(--clr-primary)"}}>⏰</div>
                            <div><strong>Service Hours</strong> <br /><span className="text-sm">Mon - Sat: 8:00 AM - 6:00 PM</span></div>
                        </li>
                    </ul>
                </div>

                
                <div className="reveal delay-2">
                    <iframe src="https://api.leadconnectorhq.com/widget/form/44LcXGatJ0hdgEHEVlfk" style={{"width": "100%", "height": "100%", "border": "none", "borderRadius": "0px", "minHeight": "609px"}} id="inline-44LcXGatJ0hdgEHEVlfk" data-layout="{'id':'INLINE'}" data-trigger-type="alwaysShow" data-form-name="CBC - Contact Us" data-height="609" title="CBC - Contact Us - A2P Verified"></iframe>
<script src="https://link.msgsndr.com/js/form_embed.js"></script>
                </div>
            </div>
        </section>

        
        <section className="section bg-offwhite" id="faq">
            <div className="container reveal">
                <div className="text-center mb-12">
                    <h2 className="section-title text-primary">Booking & Quote FAQs</h2>
                    <p className="text-lead mx-auto">Common questions about scheduling and payment.</p>
                </div>
                
                <div className="faq-container">
                    <div className="faq-item active">
                        <button className="faq-question">
                            <span>How do you calculate your pricing?</span>
                            <span className="faq-icon">+</span>
                        </button>
                        <div className="faq-answer">
                            <div className="answer-inner">
                                For residential carpets, we charge purely by the square foot. We measure the cleanable area (skipping under heavy furniture if you choose not to move it), so you only pay for exactly what we clean.
                            </div>
                        </div>
                    </div>
                    <div className="faq-item">
                        <button className="faq-question">
                            <span>Are there any hidden fees or travel charges?</span>
                            <span className="faq-icon">+</span>
                        </button>
                        <div className="faq-answer">
                            <div className="answer-inner">
                                No. The quote we provide you based on dimensions and stain severity is exactly what you pay. We do not charge extra travel fees within a 30-mile radius of Richmond. 
                            </div>
                        </div>
                    </div>
                    <div className="faq-item">
                        <button className="faq-question">
                            <span>What is your cancellation policy?</span>
                            <span className="faq-icon">+</span>
                        </button>
                        <div className="faq-answer">
                            <div className="answer-inner">
                                We respectfully request at least 24 hours notice for any cancellations or schedule changes. Because we reserve a large block of time specifically for your property, late cancellations may incur a minimal rescheduling fee.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
        <section className="map-section relative">
            <div className="map-overlay"></div>
            
            <iframe className="gmap" src="https://maps.google.com/maps?q=Richmond%2C%20VA&t=&z=13&ie=UTF8&iwloc=&output=embed" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            
            <div className="container absolute inset-0 d-flex flex-end align-center z-10" style={{"pointerEvents": "none"}}>
                <div className="map-contact-card reveal delay-2" style={{"pointerEvents": "auto"}}>
                    <img src="/images/logo.png" alt="Roots Cleaning Logo" style={{"width": "90px", "height": "auto", "marginBottom": "1rem", "filter": "drop-shadow(0 2px 4px rgba(0,0,0,0.15))"}} />
                    <h3>Richmond Hub</h3>
                    <p className="text-sm mb-4">Proudly serving the greater Richmond metropolitan area.</p>
                    <ul className="contact-grid">
                        <li><strong>📍 Address:</strong> Richmond, VA</li>
                        <li><strong>📞 Dispatch:</strong> (804) 873-7546</li>
                        <li><strong>📧 Comm:</strong> hello@rootsclean.com</li>
                    </ul>
                </div>
            </div>
        </section>
    </main>
    
    </>
  );
}
