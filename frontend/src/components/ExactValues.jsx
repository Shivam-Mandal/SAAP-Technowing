import './Values.css';

export default function ExactValues() {
  return (
    <section className="exact-values section">
      <div className="container">
        
        <div className="exact-values__grid">
          
          <div className="exact-values__item">
            <div className="exact-values__circle exact-values__circle--cyan">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <h3 className="exact-values__title">INNOVATION</h3>
            <p className="exact-values__desc">Continuously pushing the boundaries of ecommerce technology to deliver next-generation solutions.</p>
          </div>

          <div className="exact-values__item">
            <div className="exact-values__circle exact-values__circle--green">
               <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3 className="exact-values__title">RELIABILITY</h3>
            <p className="exact-values__desc">Built to scale with guaranteed 99.9% uptime, ensuring your marketplace is always open for business.</p>
          </div>

          <div className="exact-values__item">
            <div className="exact-values__circle exact-values__circle--orange">
               <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
            </div>
            <h3 className="exact-values__title">GROWTH</h3>
            <p className="exact-values__desc">Data-driven architecture designed to maximize conversions and drive explosive revenue growth.</p>
          </div>

        </div>

      </div>
    </section>
  );
}
