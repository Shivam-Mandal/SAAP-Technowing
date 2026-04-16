import { useEffect, useRef } from 'react';
import './About.css';

const companyValues = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Innovation First',
    description: 'Pushing boundaries with cutting-edge technology solutions that redefine markets.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Rapid Delivery',
    description: 'Agile development methodologies ensuring fast time-to-market without compromise.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M23 21V19C22.9986 17.1771 21.765 15.5857 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 3.13C17.7699 3.58317 19.0078 5.17799 19.0078 7.005C19.0078 8.83201 17.7699 10.4268 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Customer Centric',
    description: 'Every solution is crafted with deep understanding of user needs and business goals.',
  },
];

const stats = [
  { number: '50+', label: 'Projects Delivered' },
  { number: '25+', label: 'Team Members' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '5+', label: 'Years Experience' },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.about__animate').forEach((el, i) => {
              el.style.animationDelay = `${i * 0.1}s`;
              el.classList.add('about__animate--visible');
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about section" id="about" ref={sectionRef}>
      <div className="container">
        <div className="about__header about__animate">
          <span className="section-label">About Us</span>
          <h2 className="section-title">
            Company <span className="gradient-text">Builders</span> at Heart
          </h2>
          <p className="section-subtitle">
            SAAP Technowing is a software company dedicated to building transformative 
            digital products. We specialize in ecommerce, SaaS platforms, and enterprise solutions.
          </p>
        </div>

        <div className="about__grid">
          <div className="about__story about__animate">
            <div className="about__story-card">
              <div className="about__story-badge">Our Story</div>
              <h3 className="about__story-title">
                From Vision to Leading Tech Company
              </h3>
              <p className="about__story-text">
                Founded with a mission to democratize ecommerce, SAAP Technowing 
                has grown into a technology powerhouse. Our flagship product, BuyyBox, 
                represents the culmination of years of research, development, and deep 
                understanding of marketplace dynamics.
              </p>
              <p className="about__story-text">
                We believe technology should empower businesses of all sizes. That's why 
                we built BuyyBox — a complete ecommerce ecosystem that levels the playing 
                field for sellers worldwide.
              </p>
              <div className="about__story-stats">
                {stats.map((stat) => (
                  <div key={stat.label} className="about__story-stat">
                    <span className="about__story-stat-number">{stat.number}</span>
                    <span className="about__story-stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="about__values">
            {companyValues.map((value, i) => (
              <div key={i} className="about__value-card about__animate">
                <div className="about__value-icon">{value.icon}</div>
                <div className="about__value-content">
                  <h4 className="about__value-title">{value.title}</h4>
                  <p className="about__value-desc">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
