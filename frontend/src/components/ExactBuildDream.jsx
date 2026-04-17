import useScrollAnimation from '../hooks/useScrollAnimation';
import './BuildDream.css';

export default function ExactBuildDream() {
  useScrollAnimation();
  return (
    <section className="exact-build section" id="contact">
      <div className="container exact-build__container">

        <div className="exact-build__image scroll-animate" data-animate="fade-right">
          {/* Mock image placeholder representing team working */}
        </div>

        <div className="exact-build__content scroll-animate" data-animate="fade-left">
          <h2 className="exact-build__title">Build Your Dream Website</h2>
          <p className="exact-build__desc">Join forces with our engineering team to construct robust digital experiences from the ground up.</p>

          <form className="exact-build__form" onSubmit={e => e.preventDefault()}>
            <div className="exact-build__form-row">
              <div className="exact-build__input-group">
                <label>Full Name</label>
                <input type="text" placeholder="John Doe" required />
              </div>
              <div className="exact-build__input-group">
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" required />
              </div>
            </div>

            <div className="exact-build__form-row">
              <div className="exact-build__input-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="+1 (555) 000-0000" />
              </div>
              <div className="exact-build__input-group">
                <label>Company</label>
                <input type="text" placeholder="Your Company" />
              </div>
            </div>

            <button type="submit" className="btn btn-primary exact-build__btn">Submit Request</button>
          </form>
        </div>

      </div>
    </section>
  );
}
