import './Footer.css';

const footerLinks = {
  Product: [
    { label: 'BuyyBox Platform', href: '#ecosystem' },
    { label: 'Features', href: '#ecosystem' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Marketplace', href: '#ecosystem' },
    { label: 'Integrations', href: '#services' },
  ],
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Careers', href: '#contact' },
    { label: 'Blog', href: '#blog' },
    { label: 'Press', href: '#about' },
    { label: 'Partners', href: '#contact' },
  ],
  Resources: [
    { label: 'Documentation', href: '#' },
    { label: 'API Reference', href: '#' },
    { label: 'Help Center', href: '#' },
    { label: 'Community', href: '#' },
    { label: 'Status Page', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'GDPR', href: '#' },
  ],
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#home" className="footer__logo" onClick={scrollToTop}>
              <div className="footer__logo-icon">
                <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                  <path d="M14 2L26 8V20L14 26L2 20V8L14 2Z" fill="url(#footerLogoGrad)" />
                  <path d="M14 10L20 13V19L14 22L8 19V13L14 10Z" fill="white" fillOpacity="0.9" />
                  <defs>
                    <linearGradient id="footerLogoGrad" x1="2" y1="2" x2="26" y2="26" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#60a5fa" />
                      <stop offset="1" stopColor="#a78bfa" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="footer__logo-text">SAAP Technowing</span>
            </a>
            <p className="footer__tagline">
              Building the future of ecommerce with BuyyBox — the next-generation 
              multi-vendor marketplace platform.
            </p>
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M16 2L10.5 9M10.5 9L16 16H12L8.5 11.5M10.5 9L6 2H2L8.5 11.5M8.5 11.5L2 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="2" y="2" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M6 8V12M6 6V6.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M10 12V9.5C10 8.67 10.67 8 11.5 8C12.33 8 13 8.67 13 9.5V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 1C4.58 1 1 4.58 1 9C1 12.54 3.29 15.53 6.47 16.59C6.87 16.66 7.02 16.42 7.02 16.21V14.78C4.73 15.27 4.27 13.73 4.27 13.73C3.91 12.81 3.39 12.57 3.39 12.57C2.66 12.07 3.44 12.08 3.44 12.08C4.25 12.14 4.68 12.91 4.68 12.91C5.4 14.12 6.58 13.75 7.05 13.55C7.12 13.03 7.33 12.67 7.56 12.46C5.76 12.25 3.87 11.52 3.87 8.50C3.87 7.63 4.18 6.92 4.70 6.36C4.62 6.15 4.35 5.34 4.77 4.25C4.77 4.25 5.45 4.03 7.01 5.05C7.65 4.87 8.34 4.78 9.02 4.78C9.70 4.78 10.39 4.87 11.03 5.05C12.58 4.03 13.26 4.25 13.26 4.25C13.68 5.34 13.41 6.15 13.33 6.36C13.85 6.92 14.16 7.63 14.16 8.50C14.16 11.53 12.27 12.25 10.46 12.45C10.75 12.71 11.01 13.21 11.01 13.98V16.21C11.01 16.42 11.15 16.67 11.56 16.59C14.73 15.53 17.02 12.54 17.02 9C17 4.58 13.42 1 9 1Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="1" y="3" width="16" height="12" rx="3" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M7 6.5L12 9L7 11.5V6.5Z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer__links">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="footer__link-group">
                <h4 className="footer__link-title">{category}</h4>
                <ul className="footer__link-list">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="footer__link">{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer__newsletter">
          <div className="footer__newsletter-content">
            <h4 className="footer__newsletter-title">Subscribe to our newsletter</h4>
            <p className="footer__newsletter-desc">Get the latest updates, articles, and resources.</p>
          </div>
          <form className="footer__newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              className="footer__newsletter-input"
              placeholder="Enter your email"
              required
            />
            <button type="submit" className="btn btn-primary btn-sm">
              Subscribe
            </button>
          </form>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} SAAP Technowing. All rights reserved.
          </p>
          <div className="footer__bottom-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
