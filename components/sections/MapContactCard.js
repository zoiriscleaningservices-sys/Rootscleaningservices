import React from 'react';

export default function MapContactCard({ locationName = 'Visit Our HQ', locationAddress = 'Richmond, VA' }) {
  return (
    <section className="map-section relative">
      <div className="map-overlay"></div>
      <iframe
        className="gmap"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101235.03155700816!2d-77.53856277977461!3d37.5246604675402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b111095799c9ed%3A0xbfd83e6de2423cc5!2sRichmond%2C%20VA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container absolute inset-0 d-flex flex-end align-center z-10" style={{ pointerEvents: 'none' }}>
        <div className="map-contact-card reveal delay-2" style={{ pointerEvents: 'auto' }}>
          <img
            src="/images/logo.png"
            alt="Roots Cleaning Logo"
            style={{ width: '90px', height: 'auto', marginBottom: '1rem', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))' }}
          />
          <h3>{locationName}</h3>
          <p className="text-sm mb-4">We dispatch our highly trained crews from our central hub directly to your door.</p>
          <ul className="contact-grid">
            <li><strong>📍 Address:</strong> {locationAddress}</li>
            <li><strong>📞 Phone:</strong> (804) 873-7546</li>
            <li><strong>✉️ Email:</strong> info@rootscleaningservices.com</li>
          </ul>
          <a href="/contact" className="btn btn-primary mt-4 w-full text-center">Contact Dispatch</a>
        </div>
      </div>
    </section>
  );
}
