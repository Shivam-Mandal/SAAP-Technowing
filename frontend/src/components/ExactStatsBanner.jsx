import './StatsBanner.css';

export default function ExactStatsBanner() {
  return (
    <section className="exact-statsbanner">
      <div className="container">
        <h2 className="exact-statsbanner__title">Trusted by millions of users</h2>
        
        <div className="exact-statsbanner__grid">
          
          <div className="exact-statsbanner__item">
            <div className="exact-statsbanner__val">5,000+</div>
            <div className="exact-statsbanner__label">Marketplaces Launched</div>
          </div>
          
          <div className="exact-statsbanner__item">
            <div className="exact-statsbanner__val">10,000+</div>
            <div className="exact-statsbanner__label">Developers Using Platform</div>
          </div>
          
          <div className="exact-statsbanner__item">
            <div className="exact-statsbanner__val">1,000+</div>
            <div className="exact-statsbanner__label">Enterprise Brands</div>
          </div>
          
          <div className="exact-statsbanner__item">
            <div className="exact-statsbanner__val">99.9%</div>
            <div className="exact-statsbanner__label">CSAT Score</div>
          </div>

        </div>
      </div>
    </section>
  );
}
