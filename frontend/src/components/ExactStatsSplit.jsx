import './StatsSplit.css';

export default function ExactStatsSplit() {
  return (
    <section className="exact-stats-split section" id="about">
      <div className="container exact-stats-split__container">

        <div className="exact-stats-split__left">
          <h2 className="section-title">We believe in making things happen.</h2>
          <p className="section-desc">
            Our platform provides sellers with everything they need to succeed in the modern digital marketplace, ensuring maximum reach and reliability.
          </p>
          <button className="btn btn-primary">Discover More</button>
        </div>

        <div className="exact-stats-split__right">
          <div className="exact-stats-split__grid">

            <div className="exact-stats-split__card">
              <div className="exact-stats-split__val">10k+</div>
              <div className="exact-stats-split__label">Total Downloads</div>
            </div>

            <div className="exact-stats-split__card">
              <div className="exact-stats-split__val">50+</div>
              <div className="exact-stats-split__label">Happy Clients</div>
            </div>

            <div className="exact-stats-split__card">
              <div className="exact-stats-split__val">4.9/5</div>
              <div className="exact-stats-split__label">Reviews</div>
            </div>

            <div className="exact-stats-split__card">
              <div className="exact-stats-split__val">24/7</div>
              <div className="exact-stats-split__label">Support</div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
