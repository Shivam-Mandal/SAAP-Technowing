import { useEffect, useRef } from 'react';
import './CtaBanner.css';

export default function CtaBanner() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('cta-banner--visible');
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="cta-banner" ref={sectionRef}>
      <div className="container">
        <div className="cta-banner__card">
          <div className="cta-banner__bg">
            <div className="cta-banner__orb cta-banner__orb--1"></div>
            <div className="cta-banner__orb cta-banner__orb--2"></div>
          </div>
          <div className="cta-banner__content">
            <h2 className="cta-banner__title">
              Ready to Launch Your Marketplace?
            </h2>
            <p className="cta-banner__desc">
              Join hundreds of businesses already thriving on BuyyBox. 
              Start your 14-day free trial today — no credit card required.
            </p>
            <div className="cta-banner__actions">
              <a href="#contact" className="btn btn-lg" style={{
                background: 'white',
                color: '#1a91f5',
                fontWeight: 700
              }}>
                Get Started Free
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M7 4L12 9L7 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#pricing" className="btn btn-lg" style={{
                background: 'rgba(255,255,255,0.15)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.25)'
              }}>
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
