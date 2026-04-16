import { useEffect, useRef } from 'react';
import './Ecosystem.css';

const ecosystemFeatures = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="2"/>
        <rect x="16" y="3" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="2"/>
        <rect x="3" y="16" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="2"/>
        <rect x="16" y="16" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: 'Multi-Vendor Store',
    description: 'Launch multi-vendor marketplace with independent seller dashboards, inventory, and analytics.',
    color: '#3b82f6',
    bgColor: 'rgba(59, 130, 246, 0.08)',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3L3 9L14 15L25 9L14 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M3 19L14 25L25 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 14L14 20L25 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Full Funnel Commerce',
    description: 'End-to-end commerce pipeline from product discovery to checkout, payments, and fulfillment.',
    color: '#8b5cf6',
    bgColor: 'rgba(139, 92, 246, 0.08)',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M21 15C21 19.9706 16.9706 24 12 24C7.02944 24 3 19.9706 3 15C3 10.0294 7.02944 6 12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M25 3L15 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M19 3H25V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Smart Analytics',
    description: 'Real-time dashboards, revenue tracking, customer insights, and AI-powered recommendations.',
    color: '#10b981',
    bgColor: 'rgba(16, 185, 129, 0.08)',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M2 12H22" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 2C14.5 5 15.5 8.5 15.5 12C15.5 15.5 14.5 19 12 22C9.5 19 8.5 15.5 8.5 12C8.5 8.5 9.5 5 12 2Z" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: 'Global Reach',
    description: 'Multi-currency, multi-language support with CDN delivery for worldwide accessibility.',
    color: '#0ea5e9',
    bgColor: 'rgba(14, 165, 233, 0.08)',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M12 15L9 12M12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M21 21L25 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'SEO Optimized',
    description: 'Built-in SEO tools, structured data, sitemaps, and meta management for maximum visibility.',
    color: '#f59e0b',
    bgColor: 'rgba(245, 158, 11, 0.08)',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M12 3V8L14 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 8L10 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M21 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M7.05 7.05L5.63 5.63" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M18.36 5.63L16.95 7.05" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 12C12 16.4183 8.41828 20 4 20H20C15.5817 20 12 16.4183 12 12Z" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: 'Powerful Content',
    description: 'Rich product pages with media galleries, variant selectors, and dynamic pricing displays.',
    color: '#ef4444',
    bgColor: 'rgba(239, 68, 68, 0.08)',
  },
];

export default function Ecosystem() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.eco__animate').forEach((el, i) => {
              el.style.animationDelay = `${i * 0.08}s`;
              el.classList.add('eco__animate--visible');
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="ecosystem section" id="ecosystem" ref={sectionRef}>
      <div className="container">
        <div className="ecosystem__header eco__animate">
          <span className="section-label">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1L8.5 5H13L9.5 7.5L10.5 12L7 9.5L3.5 12L4.5 7.5L1 5H5.5L7 1Z" fill="currentColor"/>
            </svg>
            BuyyBox Ecosystem
          </span>
          <h2 className="section-title">
            Complete Ecommerce <span className="gradient-text">Ecosystem</span>
          </h2>
          <p className="section-subtitle section-center" style={{margin: '0 auto'}}>
            Everything you need to launch, manage, and scale your online marketplace — 
            all in one powerful platform.
          </p>
        </div>

        <div className="ecosystem__grid">
          {ecosystemFeatures.map((feature, i) => (
            <div key={i} className="ecosystem__card eco__animate">
              <div className="ecosystem__card-icon" style={{ background: feature.bgColor, color: feature.color }}>
                {feature.icon}
              </div>
              <h3 className="ecosystem__card-title">{feature.title}</h3>
              <p className="ecosystem__card-desc">{feature.description}</p>
              <a href="#contact" className="ecosystem__card-link" style={{ color: feature.color }}>
                Learn more
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="ecosystem__cta eco__animate">
          <div className="ecosystem__cta-content">
            <p className="ecosystem__cta-text">
              Ready to build your marketplace with BuyyBox?
            </p>
            <a href="#contact" className="btn btn-primary">
              Start Building Free
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
