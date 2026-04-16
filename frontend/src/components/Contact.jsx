import { useState, useEffect, useRef } from 'react';
import './Contact.css';

export default function Contact() {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.contact__animate').forEach((el, i) => {
              el.style.animationDelay = `${i * 0.1}s`;
              el.classList.add('contact__animate--visible');
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section className="contact section" id="contact" ref={sectionRef}>
      <div className="container">
        <div className="contact__wrapper">
          <div className="contact__info contact__animate">
            <span className="section-label" style={{background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.9)'}}>Contact Us</span>
            <h2 className="contact__title">
              Let's Build Something <span style={{color: '#60a5fa'}}>Incredible</span> Together
            </h2>
            <p className="contact__desc">
              Ready to launch your marketplace or need a custom solution? 
              Get in touch and let's discuss how we can help.
            </p>

            <div className="contact__details">
              <div className="contact__detail">
                <div className="contact__detail-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3 5L10 10L17 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div>
                  <div className="contact__detail-label">Email</div>
                  <div className="contact__detail-value">hello@saaptechnowing.com</div>
                </div>
              </div>
              <div className="contact__detail">
                <div className="contact__detail-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M2 3H6L8 8L5.5 9.5C6.57096 11.6715 8.32855 13.429 10.5 14.5L12 12L17 14V18C17 18.5523 16.5523 19 16 19C8.26801 19 2 12.732 2 5C2 4.44772 2.44772 4 3 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className="contact__detail-label">Phone</div>
                  <div className="contact__detail-value">+91 (800) 123-4567</div>
                </div>
              </div>
              <div className="contact__detail">
                <div className="contact__detail-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 11C11.6569 11 13 9.65685 13 8C13 6.34315 11.6569 5 10 5C8.34315 5 7 6.34315 7 8C7 9.65685 8.34315 11 10 11Z" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M10 19C10 19 17 14 17 8C17 4.13401 13.866 1 10 1C6.13401 1 3 4.13401 3 8C3 14 10 19 10 19Z" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div>
                  <div className="contact__detail-label">Office</div>
                  <div className="contact__detail-value">India</div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact__form-wrapper contact__animate">
            {submitted ? (
              <div className="contact__success">
                <div className="contact__success-icon">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="22" stroke="#10b981" strokeWidth="2"/>
                    <path d="M15 24L21 30L33 18" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="contact__success-title">Message Sent!</h3>
                <p className="contact__success-text">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__form-row">
                  <div className="contact__field">
                    <label htmlFor="contact-name" className="contact__label">Full Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      className="contact__input"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="contact-email" className="contact__label">Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      className="contact__input"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div className="contact__field">
                  <label htmlFor="contact-company" className="contact__label">Company</label>
                  <input
                    id="contact-company"
                    type="text"
                    className="contact__input"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={e => setFormData({...formData, company: e.target.value})}
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="contact-message" className="contact__label">Message</label>
                  <textarea
                    id="contact-message"
                    className="contact__textarea"
                    placeholder="Tell us about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-lg contact__submit">
                  Send Message
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M16 2L7 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 2L11 16L7 11L2 7L16 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
