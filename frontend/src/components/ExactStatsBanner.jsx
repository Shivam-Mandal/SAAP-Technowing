import AnimatedCounter from './AnimatedCounter';
import './StatsBanner.css';

export default function ExactStatsBanner() {
  return (
    <section className="exact-statsbanner">
      <div className="container">
        <h2 className="exact-statsbanner__title">Trusted by millions of users</h2>

        <div className="exact-statsbanner__grid">

          <div className="exact-statsbanner__item">
            <div className="exact-statsbanner__val"><AnimatedCounter end="5000" suffix="+" duration={2000} /></div>
            <div className="exact-statsbanner__label">Marketplaces Launched</div>
          </div>

          <div className="exact-statsbanner__item">
            <div className="exact-statsbanner__val"><AnimatedCounter end="10000" suffix="+" duration={2200} /></div>
            <div className="exact-statsbanner__label">Developers Using Platform</div>
          </div>

          <div className="exact-statsbanner__item">
            <div className="exact-statsbanner__val"><AnimatedCounter end="1000" suffix="+" duration={1800} /></div>
            <div className="exact-statsbanner__label">Enterprise Brands</div>
          </div>

          <div className="exact-statsbanner__item">
            <div className="exact-statsbanner__val"><AnimatedCounter end="99.9" suffix="%" duration={2000} /></div>
            <div className="exact-statsbanner__label">CSAT Score</div>
          </div>

        </div>
      </div>
    </section>
  );
}
