import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-container">
        <Link href="/" className="logo">
          <img src="/images/logo.png" alt="Roots Cleaning Services Logo" />
        </Link>
        
        <nav className="nav-links">
          <Link href="/" className="nav-link active">Home</Link>
          <Link href="/services" className="nav-link">Services</Link>
          <Link href="/#faq" className="nav-link">FAQ</Link>
          <Link href="/contact" className="nav-link btn btn-accent">Get a Quote</Link>
        </nav>
        
        <button className="mobile-toggle" aria-label="Toggle menu">
          <span className="bar bar-1"></span>
          <span className="bar bar-2"></span>
          <span className="bar bar-3"></span>
        </button>
      </div>
    </header>
  );
}
