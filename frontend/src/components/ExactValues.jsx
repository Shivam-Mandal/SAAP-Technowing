import useScrollAnimation from '../hooks/useScrollAnimation';
import './Values.css';

export default function ExactValues() {
  useScrollAnimation();
  return (
    <section className="exact-values section">
      <div className="container">

        <div className="exact-values__grid">

          <div className="exact-values__item scroll-animate" data-animate="zoom-in" style={{ transitionDelay: '0ms' }}>
            <div className="exact-values__circle exact-values__circle--cyan">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.2 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
            </div>
            <h3 className="exact-values__title">INNOVATION</h3>
            <p className="exact-values__desc">Continuously pushing the boundaries of ecommerce technology to deliver next-generation solutions.</p>
          </div>

          <div className="exact-values__item scroll-animate" data-animate="zoom-in" style={{ transitionDelay: '200ms' }}>
            <div className="exact-values__circle exact-values__circle--green">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
            </div>
            <h3 className="exact-values__title">RELIABILITY</h3>
            <p className="exact-values__desc">Built to scale with guaranteed 99.9% uptime, ensuring your marketplace is always open for business.</p>
          </div>

          <div className="exact-values__item scroll-animate" data-animate="zoom-in" style={{ transitionDelay: '400ms' }}>
            <div className="exact-values__circle exact-values__circle--orange">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
            </div>
            <h3 className="exact-values__title">GROWTH</h3>
            <p className="exact-values__desc">Data-driven architecture designed to maximize conversions and drive explosive revenue growth.</p>
          </div>

        </div>

      </div>
    </section>
  );
}
