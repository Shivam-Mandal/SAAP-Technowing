import useScrollAnimation from '../hooks/useScrollAnimation';
import './TechFeatures.css';

export default function ExactTechFeatures() {
  useScrollAnimation();
  const features = [
    { title: "Modular Codebase", desc: "Built with microservices architecture enabling rapid deployment of new independent components." },
    { title: "Global CDN", desc: "Assets distributed globally for millisecond response times regardless of user location." },
    { title: "Automated Backups", desc: "Continuous replication ensuring zero data loss and robust disaster recovery." },
    { title: "DDoS Protection", desc: "Enterprise-grade traffic filtering protecting your network 24/7." }
  ];

  return (
    <section className="exact-tech section" id="features">
      <div className="container">

        <h2 className="section-title section-title-center">Comprehensive Tech Features</h2>

        <div className="exact-tech__grid">
          {features.map((ft, i) => (
            <div key={i} className="exact-tech__item scroll-animate" data-animate="fade-right" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="exact-tech__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-cyan)" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
              </div>
              <h3 className="exact-tech__title">{ft.title}</h3>
              <p className="exact-tech__desc">{ft.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
