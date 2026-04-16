"use client"
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname() || '/';
  
  // Silo Insulation Logic
  let homeLink = "/";
  let serviceLink = "/services";
  
  // If the user's mapped URL is a geographical page (e.g., ends in -va)
  if (pathname.includes('-va')) {
    // If it's a specific child service inside a location hub
    if (pathname.includes('-in-')) {
      const parts = pathname.split('-in-');
      if (parts.length === 2) {
        homeLink = `/${parts[1]}`;
      }
    } else {
      // It's the parent hub itself
      homeLink = pathname;
    }
  }
  
  // The Location Hub serves as the local "Services" directory grid
  if (homeLink !== "/") {
      serviceLink = homeLink;
  }

  return (
    <>
      <header className="navbar">
        <div className="container nav-container">
            <a href={homeLink} className="logo">
                <img src="/images/logo.png" alt="Roots Cleaning Services Logo" />
            </a>
            
            <nav className="nav-links">
                <a href={homeLink} className="nav-link active">Home</a>
                <a href={serviceLink} className="nav-link">Services</a>
                <a href={`${homeLink}#faq`} className="nav-link">FAQ</a>
                <a href="/contact" className="nav-link btn btn-accent">Get a Quote</a>
            </nav>
            
            <button className="mobile-toggle" aria-label="Toggle menu">
                <span className="bar bar-1"></span>
                <span className="bar bar-2"></span>
                <span className="bar bar-3"></span>
            </button>
        </div>
    </header>
    </>
  );
}
