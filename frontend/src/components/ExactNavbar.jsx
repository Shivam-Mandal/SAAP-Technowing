import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="exact-nav">
      <div className="container exact-nav__container">
        
        <div className="exact-nav__logo">
          <div className="exact-nav__logo-icon"></div>
          <span className="exact-nav__logo-blue">SAAP</span> <span className="exact-nav__logo-dark">Technowing</span>
        </div>

        <div className="exact-nav__links">
          <a href="#" className="exact-nav__link active">Home</a>
          <a href="#" className="exact-nav__link">Features</a>
          <a href="#" className="exact-nav__link">About</a>
          <a href="#" className="exact-nav__link">Pages</a>
          <a href="#" className="exact-nav__link">Blog</a>
          <a href="#" className="exact-nav__link">Contact</a>
        </div>

        <div className="exact-nav__actions">
          <button className="exact-nav__icon-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
          <button className="exact-nav__icon-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
          </button>
          <button className="btn btn-primary exact-nav__btn">Get Started</button>
        </div>

      </div>
    </nav>
  );
}
