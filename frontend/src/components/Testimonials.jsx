import { useEffect, useRef } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    quote: "BuyyBox transformed our business completely. We went from a single storefront to a thriving multi-vendor marketplace in just weeks.",
    author: "Sarah Chen",
    role: "CEO, StyleVault",
    avatar: "SC",
    color: "#3b82f6",
  },
  {
    quote: "The analytics and seller management tools are incredible. We can see exactly what's working and optimize in real-time.",
    author: "Marcus Johnson",
    role: "CTO, TechMart Global",
    avatar: "MJ",
    color: "#8b5cf6",
  },
  {
    quote: "SAAP Technowing's team delivered a custom integration that saved us 200+ hours per month. Their expertise is unmatched.",
    author: "Priya Sharma",
    role: "Operations Head, GreenGoods",
    avatar: "PS",
    color: "#10b981",
  },
];

const logos = [
  'TechMart', 'StyleVault', 'GreenGoods', 'CloudSync', 'DataWave', 'PixelForge'
];

export default function Testimonials() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.test__animate').forEach((el, i) => {
              el.style.animationDelay = `${i * 0.1}s`;
              el.classList.add('test__animate--visible');
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
    <section className="testimonials section" id="testimonials" ref={sectionRef}>
      <div className="container">
        <div className="testimonials__header test__animate">
          <span className="section-label">Success Stories</span>
          <h2 className="section-title">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="section-subtitle" style={{margin: '0 auto', textAlign: 'center'}}>
            See how companies are growing with SAAP Technowing's solutions.
          </p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonials__card test__animate">
              <div className="testimonials__quote-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M10 8H6C4.89543 8 4 8.89543 4 10V14C4 15.1046 4.89543 16 6 16H8C8 17.1046 7.10457 18 6 18V20C8.20914 20 10 18.2091 10 16V8Z" fill="currentColor" fillOpacity="0.15"/>
                  <path d="M22 8H18C16.8954 8 16 8.89543 16 10V14C16 15.1046 16.8954 16 18 16H20C20 17.1046 19.1046 18 18 18V20C20.2091 20 22 18.2091 22 16V8Z" fill="currentColor" fillOpacity="0.15"/>
                </svg>
              </div>
              <p className="testimonials__quote">{t.quote}</p>
              <div className="testimonials__author">
                <div className="testimonials__avatar" style={{background: t.color}}>
                  {t.avatar}
                </div>
                <div>
                  <div className="testimonials__name">{t.author}</div>
                  <div className="testimonials__role">{t.role}</div>
                </div>
              </div>
              <div className="testimonials__stars">
                {[...Array(5)].map((_, si) => (
                  <svg key={si} width="16" height="16" viewBox="0 0 16 16" fill="#f59e0b">
                    <path d="M8 1L10 5.5H15L11 8.5L12.5 13L8 10.5L3.5 13L5 8.5L1 5.5H6L8 1Z"/>
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials__logos test__animate">
          <p className="testimonials__logos-label">Trusted by innovative companies</p>
          <div className="testimonials__logos-grid">
            {logos.map((logo) => (
              <div key={logo} className="testimonials__logo">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
