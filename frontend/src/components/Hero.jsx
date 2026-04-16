import { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('hero--visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
      {/* Background decoration */}
      <div className="hero__bg">
        <div className="hero__blob hero__blob--1"></div>
        <div className="hero__blob hero__blob--2"></div>
        <div className="hero__blob hero__blob--3"></div>
        <div className="hero__grid-overlay"></div>
      </div>

      <div className="hero__container container">
        <div className="hero__content">
          <div className="hero__badge animate-in">
            <span className="hero__badge-dot"></span>
            Introducing BuyyBox Marketplace
          </div>

          <h1 className="hero__title animate-in animate-delay-1">
            We Light Up Your{' '}
            <span className="hero__title-accent">Brand</span>{' '}
            With Digital Innovation
          </h1>

          <p className="hero__description animate-in animate-delay-2">
            SAAP Technowing builds cutting-edge digital solutions. Our flagship product,{' '}
            <strong>BuyyBox</strong>, is a next-generation ecommerce marketplace 
            empowering businesses to scale, sell, and succeed online.
          </p>

          <div className="hero__actions animate-in animate-delay-3">
            <a href="#ecosystem" className="btn btn-primary btn-lg">
              Explore BuyyBox
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M7 4L12 9L7 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#about" className="btn btn-secondary btn-lg">
              Learn More
            </a>
          </div>

          <div className="hero__stats animate-in animate-delay-4">
            <div className="hero__stat">
              <span className="hero__stat-number">500+</span>
              <span className="hero__stat-label">Active Sellers</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">10K+</span>
              <span className="hero__stat-label">Products Listed</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">99.9%</span>
              <span className="hero__stat-label">Uptime SLA</span>
            </div>
          </div>
        </div>

        <div className="hero__visual animate-in animate-delay-2">
          <div className="hero__mockup">
            <div className="hero__mockup-browser">
              <div className="hero__browser-dots">
                <span></span><span></span><span></span>
              </div>
              <div className="hero__browser-url">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1C3.7 1 1 3.7 1 7s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M1 7h12M7 1c1.7 1.8 2.6 3.8 2.6 6s-.9 4.2-2.6 6c-1.7-1.8-2.6-3.8-2.6-6S5.3 2.8 7 1z" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
                <span>buyybox.com</span>
              </div>
            </div>
            <div className="hero__mockup-content">
              <div className="hero__mockup-header">
                <div className="hero__mockup-logo">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect width="24" height="24" rx="6" fill="url(#bbGrad)"/>
                    <path d="M7 8h10M7 12h10M7 16h6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    <defs><linearGradient id="bbGrad" x1="0" y1="0" x2="24" y2="24"><stop stopColor="#1a91f5"/><stop offset="1" stopColor="#6366f1"/></linearGradient></defs>
                  </svg>
                  <span>BuyyBox</span>
                </div>
                <div className="hero__mockup-nav">
                  <span className="hero__mockup-nav-item">Home</span>
                  <span className="hero__mockup-nav-item">Products</span>
                  <span className="hero__mockup-nav-item">Sellers</span>
                </div>
              </div>
              <div className="hero__mockup-grid">
                <div className="hero__mockup-card hero__mockup-card--featured">
                  <div className="hero__mockup-card-img" style={{background: 'linear-gradient(135deg, #667eea, #764ba2)'}}></div>
                  <div className="hero__mockup-card-info">
                    <div className="hero__mockup-card-name"></div>
                    <div className="hero__mockup-card-price">$299</div>
                  </div>
                </div>
                <div className="hero__mockup-card">
                  <div className="hero__mockup-card-img" style={{background: 'linear-gradient(135deg, #f093fb, #f5576c)'}}></div>
                  <div className="hero__mockup-card-info">
                    <div className="hero__mockup-card-name"></div>
                    <div className="hero__mockup-card-price">$149</div>
                  </div>
                </div>
                <div className="hero__mockup-card">
                  <div className="hero__mockup-card-img" style={{background: 'linear-gradient(135deg, #4facfe, #00f2fe)'}}></div>
                  <div className="hero__mockup-card-info">
                    <div className="hero__mockup-card-name"></div>
                    <div className="hero__mockup-card-price">$199</div>
                  </div>
                </div>
                <div className="hero__mockup-card">
                  <div className="hero__mockup-card-img" style={{background: 'linear-gradient(135deg, #43e97b, #38f9d7)'}}></div>
                  <div className="hero__mockup-card-info">
                    <div className="hero__mockup-card-name"></div>
                    <div className="hero__mockup-card-price">$89</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <div className="hero__float hero__float--1">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2L12.5 7.5L18 10L12.5 12.5L10 18L7.5 12.5L2 10L7.5 7.5L10 2Z" fill="#f59e0b"/>
            </svg>
          </div>
          <div className="hero__float hero__float--2">
            <div className="hero__float-card">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 1L11 7H17L12 10.5L14 16.5L9 13L4 16.5L6 10.5L1 7H7L9 1Z" fill="#10b981"/>
              </svg>
              <span>4.9 Rating</span>
            </div>
          </div>
          <div className="hero__float hero__float--3">
            <div className="hero__float-card">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2 13L6 9L9 12L16 5" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>+127% Growth</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <div className="hero__scroll-line"></div>
      </div>
    </section>
  );
}
