import './Hero.css';

export default function Hero() {
  return (
    <section className="exact-hero">
      <div className="exact-hero__glow"></div>
      
      <div className="container exact-hero__container">
        
        <div className="exact-hero__content">
          <h1 className="exact-hero__title">
            Technology to Fuel your <span className="exact-hero__title-blue">Digital Enterprise</span>
          </h1>
          
          <p className="exact-hero__subtitle">
            Our powerful eCommerce platform BuyyBox powers modern marketplace solutions. Built to scale, driven by data.
          </p>

          <div className="exact-hero__actions">
            <button className="btn btn-primary exact-hero__btn group">
              Explore BuyyBox 
              <span className="exact-hero__icon-circle">
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--primary-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </button>
            <button className="btn btn-outline exact-hero__btn">
              Learn More
            </button>
          </div>

          <div className="exact-hero__stats">
            <div className="exact-hero__stat">
              <span className="exact-hero__stat-val">10k+</span>
              <span className="exact-hero__stat-label">Active Users</span>
            </div>
            <div className="exact-hero__stat-div"></div>
            <div className="exact-hero__stat">
              <span className="exact-hero__stat-val">50+</span>
              <span className="exact-hero__stat-label">Integrations</span>
            </div>
            <div className="exact-hero__stat-div"></div>
            <div className="exact-hero__stat">
              <span className="exact-hero__stat-val">99.9%</span>
              <span className="exact-hero__stat-label">Uptime SLA</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
