import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <header className="navbar">
        <div className="container nav-container">
            <a href="/" className="logo">
                <img src="/images/logo.png" alt="Roots Cleaning Services Logo" />
            </a>
            
            <nav className="nav-links">
                <a href="/" className="nav-link active">Home</a>
                <a href="/services" className="nav-link">Services</a>
                <a href="#faq" className="nav-link">FAQ</a>
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
