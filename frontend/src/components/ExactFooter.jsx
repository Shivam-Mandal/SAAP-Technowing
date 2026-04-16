import './FooterExact.css';

export default function ExactFooter() {
  return (
    <footer className="exact-footer">
      <div className="container">
        
        <div className="exact-footer__newsletter">
          <div>
            <h3 className="exact-footer__title">SAAP Technowing</h3>
            <p className="exact-footer__desc">Join our newsletter to stay up to date on features and releases.</p>
          </div>
          <form className="exact-footer__form" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>

        <div className="exact-footer__grid">
          
          <div className="exact-footer__col">
            <h4 className="exact-footer__heading">About Us</h4>
            <p className="exact-footer__text">
              We are a team of passionate engineers building the infrastructure for the next generation of digital commerce.
            </p>
          </div>
          
          <div className="exact-footer__col">
            <h4 className="exact-footer__heading">Company</h4>
            <a href="#" className="exact-footer__link">About</a>
            <a href="#" className="exact-footer__link">Careers</a>
            <a href="#" className="exact-footer__link">Blog</a>
            <a href="#" className="exact-footer__link">Contact</a>
          </div>

          <div className="exact-footer__col">
            <h4 className="exact-footer__heading">Product</h4>
            <a href="#" className="exact-footer__link">BuyyBox Features</a>
            <a href="#" className="exact-footer__link">Pricing</a>
            <a href="#" className="exact-footer__link">Integrations</a>
            <a href="#" className="exact-footer__link">API Reference</a>
          </div>

          <div className="exact-footer__col">
            <h4 className="exact-footer__heading">Legal</h4>
            <a href="#" className="exact-footer__link">Privacy Policy</a>
            <a href="#" className="exact-footer__link">Terms of Service</a>
            <a href="#" className="exact-footer__link">Cookie Policy</a>
          </div>

        </div>

        <div className="exact-footer__bottom">
          <p>© {new Date().getFullYear()} SAAP Technowing. All rights reserved.</p>
          <div className="exact-footer__social">
            {/* Social Icons Placeholders */}
            <a href="#" aria-label="Twitter"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg></a>
            <a href="#" aria-label="LinkedIn"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg></a>
          </div>
        </div>

      </div>
    </footer>
  );
}
