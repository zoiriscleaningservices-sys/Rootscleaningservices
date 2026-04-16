import MapContactCard from '../components/sections/MapContactCard';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const locationName = 'Richmond, VA';
  const serviceName = 'Residential and Commercial Cleaning';

  return (
    <>
      <section className="hero">
        <div className="hero-gradient-mask"></div>
        <div className="hero-grid">
          <div className="hero-content reveal">
            <div className="badge-modern mb-4">
              <span className="badge-text" style={{ fontSize: '1rem', padding: '6px 12px' }}>📍 Headquarters in {locationName}</span>
            </div>
            <h1>Premium <span>Cleaning Solutions</span> <br/>in {locationName}</h1>
            <p className="hero-subtitle">
              Providing top-tier, detail-obsessed cleaning solutions for high-end residential and commercial estates. We don't just clean; we restore, protect, and perfect your spaces down to the microscopic root.
            </p>
            <div className="hero-buttons">
              <Link href="/contact" className="btn btn-primary btn-large glow-effect">Get a Quote</Link>
              <Link href="/services" className="btn btn-secondary btn-large">Explore Services</Link>
            </div>
            
            <div className="hero-trust mt-4">
              <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>✓ Eco-Friendly Elements</span>
              <span className="mx-2" style={{ color: 'var(--clr-primary)' }}>•</span>
              <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>✓ Fully Licensed</span>
              <span className="mx-2" style={{ color: 'var(--clr-primary)' }}>•</span>
              <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>✓ Background Checked</span>
            </div>
          </div>
          
          <div className="hero-visual reveal delay-1">
            <div className="hero-image-wrapper">
              <img src="/images/hero-clean.jpg" alt="Cleaning Solutions in Richmond" className="hero-image" />
            </div>
            <div className="experience-badge bounce">
              <strong>15+</strong>
              <span>Years<br/>Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-light" id="services">
        <div className="container">
          <div className="section-header text-center reveal">
            <h2 className="section-title">Our Capabilities</h2>
            <p style={{ color: '#666', maxWidth: '600px', margin: '0 auto' }}>From daily maintenance to deep restorative cleaning, our specialized teams are equipped for every challenge.</p>
          </div>
          
          <div className="services-carousel-wrapper">
            <div className="services-carousel-track">

              <div className="card-3d reveal delay-1">
                <div className="card-inner">
                  <div className="card-front" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.8)), url(/images/carpet.jpg)' }}>
                    <div className="card-content">
                      <h3>Advanced Carpet Care</h3>
                      <p>Deep extraction methodology removing allergens and stubborn stains.</p>
                      <Link href="/services" className="btn-text mt-3">Learn More →</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-3d reveal delay-2">
                <div className="card-inner">
                  <div className="card-front" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.8)), url(/images/upholstery.jpg)' }}>
                    <div className="card-content">
                      <h3>Delicate Upholstery</h3>
                      <p>Revitalize your furniture with fiber-specific cleansing solutions.</p>
                      <Link href="/services" className="btn-text mt-3">Learn More →</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-3d reveal delay-3">
                <div className="card-inner">
                  <div className="card-front" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.8)), url(/images/tile.jpg)' }}>
                    <div className="card-content">
                      <h3>Tile & Grout Restoration</h3>
                      <p>Power-washing porous grout lines back to brilliant white.</p>
                      <Link href="/services" className="btn-text mt-3">Learn More →</Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <MapContactCard locationName="Richmond Hub" locationAddress="Richmond, VA" />
    </>
  );
}
