import { useEffect, useRef } from 'react';
import './Services.css';

const services = [
  {
    id: 1,
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M4 8L16 2L28 8V20L16 26L4 20V8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M4 8L16 14L28 8" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M16 14V26" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: 'Custom Software Development',
    description: 'Tailored software solutions built with modern architectures, microservices, and scalable infrastructure for your unique business needs.',
    tags: ['React', 'Node.js', 'Cloud', 'API'],
  },
  {
    id: 2,
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="6" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M10 26H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 22V26" stroke="currentColor" strokeWidth="2"/>
        <circle cx="16" cy="14" r="3" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: 'Ecommerce Solutions',
    description: 'End-to-end ecommerce platforms with payment integration, inventory management, and seamless user experience powered by BuyyBox technology.',
    tags: ['BuyyBox', 'Payments', 'Marketplace'],
  },
  {
    id: 3,
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 28V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 28V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 28V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Data & Analytics',
    description: 'Transform raw data into actionable insights with custom dashboards, BI tools, and AI-powered analytics for smarter business decisions.',
    tags: ['AI/ML', 'Dashboards', 'Big Data'],
  },
  {
    id: 4,
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4C10 4 4 8 4 16C4 24 10 28 16 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 4C22 4 28 8 28 16C28 24 22 28 16 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4"/>
        <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 4V12" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 20V28" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: 'Cloud & DevOps',
    description: 'Cloud-native infrastructure, CI/CD pipelines, containerization, and managed services for maximum reliability and performance.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
  },
  {
    id: 5,
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="4" width="12" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M18 8H24C25.1046 8 26 8.89543 26 10V22C26 23.1046 25.1046 24 24 24H18" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="20" r="1.5" fill="currentColor"/>
      </svg>
    ),
    title: 'Mobile Development',
    description: 'Cross-platform mobile applications built with React Native delivering native-like performance for iOS and Android.',
    tags: ['React Native', 'iOS', 'Android'],
  },
  {
    id: 6,
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 20C20.4183 20 24 16.4183 24 12C24 7.58172 20.4183 4 16 4C11.5817 4 8 7.58172 8 12C8 16.4183 11.5817 20 16 20Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M4 28C4 24 8 20 16 20C24 20 28 24 28 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'UI/UX Design',
    description: 'Research-driven design systems, prototyping, and user experience strategy that converts visitors into loyal customers.',
    tags: ['Figma', 'Design Systems', 'UX Research'],
  },
];

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.svc__animate').forEach((el, i) => {
              el.style.animationDelay = `${i * 0.08}s`;
              el.classList.add('svc__animate--visible');
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
    <section className="services section" id="services" ref={sectionRef}>
      <div className="container">
        <div className="services__header svc__animate">
          <span className="section-label">Our Services</span>
          <h2 className="section-title">
            Full-Stack <span className="gradient-text">Digital Services</span>
          </h2>
          <p className="section-subtitle" style={{margin: '0 auto', textAlign: 'center'}}>
            From concept to deployment, we deliver complete technology solutions 
            that drive growth and competitive advantage.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <div key={service.id} className="services__card svc__animate">
              <div className="services__card-number">0{service.id}</div>
              <div className="services__card-icon">{service.icon}</div>
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-desc">{service.description}</p>
              <div className="services__card-tags">
                {service.tags.map((tag) => (
                  <span key={tag} className="services__tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
