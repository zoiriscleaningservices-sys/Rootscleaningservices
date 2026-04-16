import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer-ultra">
      <div className="container relative z-10">
        <div className="footer-grid-ultra">
          <div className="footer-col-main">
            <img src="/images/logo.png" alt="Roots Cleaning Logo" className="footer-logo" />
            <p className="footer-desc">
              Providing top-tier, detail-obsessed cleaning solutions for high-end residential and commercial estates. We don't just clean; we restore, protect, and perfect your spaces down to the microscopic root.
            </p>
            <div className="contact-info-blocks">
              <div className="contact-block">
                <span className="cb-icon">📍</span>
                <span>Richmond, Virginia Headquarters</span>
              </div>
              <div className="contact-block">
                <span className="cb-icon">📞</span>
                <span>(804) 873-7546</span>
              </div>
              <div className="contact-block">
                <span className="cb-icon">✉️</span>
                <span>info@rootscleaningservices.com</span>
              </div>
            </div>
          </div>

          <div className="footer-col-links">
            <h4>Premium Services</h4>
            <ul className="footer-links-list">
              <li><Link href="/services#carpet">Advanced Carpet Care</Link></li>
              <li><Link href="/services#upholstery">Delicate Upholstery</Link></li>
              <li><Link href="/services#commercial">Commercial Lobbies</Link></li>
              <li><Link href="/services#tile">Tile & Grout Restoration</Link></li>
              <li><Link href="/services#pets">Pet Odor Elimination</Link></li>
              <li><Link href="/services#deep-clean">Deep Home Sanitation</Link></li>
            </ul>
          </div>

          <div className="footer-col-links">
            <h4>Coverage Areas</h4>
            <ul className="footer-links-list">
              <li><Link href="/richmond-va/cleaning-services">Richmond</Link></li>
              <li><Link href="/midlothian-va/cleaning-services">Midlothian</Link></li>
              <li><Link href="/chesterfield-va/cleaning-services">Chesterfield</Link></li>
              <li><Link href="/henrico-va/cleaning-services">Henrico</Link></li>
              <li><Link href="/mechanicsville-va/cleaning-services">Mechanicsville</Link></li>
              <li><Link href="/short-pump-va/cleaning-services">Short Pump</Link></li>
            </ul>
          </div>

          <div className="footer-col-social">
            <h4>Connect</h4>
            <div className="social-login-icons">
               {/* Simplified SVGs for React - keeping wrapper shapes */}
               <div className="socialcontainer">
                  <div className="social-icon-1" style={{ width: '40px', height: '40px', background: '#000', borderRadius: '50%' }}></div>
               </div>
               <div className="socialcontainer" style={{ marginLeft: '10px' }}>
                  <div className="social-icon-2" style={{ width: '40px', height: '40px', background: 'linear-gradient(72.44deg, #ff7a00, #ff0169, #d300c5)', borderRadius: '50%' }}></div>
               </div>
            </div>
            <div className="trust-badge mt-4">
              <div className="stars">★★★★★</div>
              <p>5-Star Rated in Richmond</p>
            </div>
          </div>
        </div>

        <div className="footer-cta-card" style={{ marginTop: '2rem', marginBottom: '4rem', width: '100%' }}>
          <div className="cta-content">
            <h2>Ready for a <span>Spotless</span> Environment?</h2>
            <p>Book your premium cleaning service today and experience the gold standard of hygiene.</p>
          </div>
          <Link href="/contact" className="btn btn-accent btn-large glow-effect">Get Your Free Estimate</Link>
        </div>

        <div className="footer-bottom-modern">
          <p>&copy; 2026 Roots Cleaning Services. All Rights Reserved. Fully Licensed & Insured.</p>
          <div className="bottom-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/sitemap.xml">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
