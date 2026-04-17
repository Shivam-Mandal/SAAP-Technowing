import useScrollAnimation from '../hooks/useScrollAnimation';
import './FooterExact.css';

export default function ExactFooter() {
  const sectionRef = useScrollAnimation();

  return (
    <footer className="exact-footer" ref={sectionRef}>
      <div className="container exact-footer__container scroll-animate" data-animate="fade-up">

        {/* Top Centered Section (Design 1 layout, Content 2 text + Custom Logo) */}
        <div className="exact-footer__newsletter-center">
          <img src="/logo.png" alt="SAAP Technowing Logo" className="exact-footer__logo" />
          <h2 className="exact-footer__nl-title">SAAP Technowing</h2>
          <p className="exact-footer__nl-subtitle">Join our newsletter to stay up to date on features and releases.</p>

          <form className="exact-footer__nl-form" onSubmit={e => e.preventDefault()}>
            <div className="exact-footer__input-group">
              <label>Email *</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <button type="submit" className="exact-footer__btn-join">Subscribe</button>
          </form>
        </div>

        <hr className="exact-footer__divider" />

        {/* 4 Column Layout perfectly modeling Image 1 design & Image 2 content */}
        <div className="exact-footer__grid-4">

          <div className="exact-footer__col-list">
            <h4>ABOUT US</h4>
            <p className="exact-footer__text-content">
              We are a team of passionate engineers building the infrastructure for the next generation of digital commerce.
            </p>
          </div>

          <div className="exact-footer__col-list">
            <h4>COMPANY</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="exact-footer__col-list">
            <h4>PRODUCT</h4>
            <ul>
              <li><a href="#">BuyyBox Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Integrations</a></li>
              <li><a href="#">API Reference</a></li>
            </ul>
          </div>

          <div className="exact-footer__col-list">
            <h4>LEGAL</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>

            {/* Socials & Copyright placed inside 4th column just like Image 1 design */}
            <div className="exact-footer__social-row">
              <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
              <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
              <a href="#" aria-label="X"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg></a>
              <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg></a>
              <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg></a>
            </div>

            <p className="exact-footer__copy-text">© {new Date().getFullYear()} SAAP Technowing. All rights reserved.</p>
          </div>

        </div>

      </div>
    </footer>
  );
}
