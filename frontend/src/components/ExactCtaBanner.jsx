import './CtaBanner.css';

export default function ExactCtaBanner() {
  return (
    <section className="exact-ctabanner section">
      <div className="container">
        
        <div className="exact-ctabanner__card">
          <h2 className="exact-ctabanner__title">Ready to launch your business?</h2>
          <p className="exact-ctabanner__desc">
            Subscribe to our newsletter for the latest product updates and ecosystem news.
          </p>

          <form className="exact-ctabanner__form" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Email Address..." className="exact-ctabanner__input" required/>
            <button type="submit" className="exact-ctabanner__btn">Subscribe</button>
          </form>
        </div>

      </div>
    </section>
  );
}
