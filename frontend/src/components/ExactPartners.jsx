import './Partners.css';

export default function ExactPartners() {
  const partners = [
    { 
      name: "Globex", 
      desc: "Global shipping infrastructure and cross-border fulfillment network.",
      color: "#3b82f6", // Blue
      icon: <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>,
      size: "wide"
    },
    { 
      name: "TechCorp", 
      desc: "Backend processing power and scalable database optimization.",
      color: "#8b5cf6", // Purple
      icon: <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>,
      size: "wide"
    },
    { 
      name: "Innotech", 
      desc: "Payment gateways",
      color: "#10b981", // Emerald
      icon: <><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></>,
      size: "square"
    },
    { 
      name: "OmniSys", 
      desc: "Inventory sync",
      color: "#f59e0b", // Amber
      icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>,
      size: "square"
    },
    { 
      name: "DataFlow", 
      desc: "Analytics engine",
      color: "#f43f5e", // Rose
      icon: <><path d="M3 3v18h18"/><path d="M18 9l-5-5-4 4-5-5"/></>,
      size: "square"
    },
    { 
      name: "CloudNet", 
      desc: "Distributed hosting",
      color: "#0ea5e9", // Sky
      icon: <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>,
      size: "square"
    }
  ];

  return (
    <section className="exact-partners section">
      <div className="container">
        
        <div className="exact-partners__header">
          <span className="exact-partners__badge">Ecosystem</span>
          <h2 className="section-title">Trusted Partners</h2>
          <p className="section-desc">
            We collaborate with the world's leading technology providers to deliver robust, enterprise-scale solutions.
          </p>
        </div>

        <div className="exact-partners__bento">
          {partners.map((partner, i) => (
            <div 
              key={i} 
              className={`exact-partners__card exact-partners__card--${partner.size}`}
              style={{ '--brand-color': partner.color }}
            >
              <div className="exact-partners__glow"></div>
              <div className="exact-partners__content">
                <div className="exact-partners__logo-wrapper">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {partner.icon}
                  </svg>
                </div>
                <div className="exact-partners__info">
                  <h3 className="exact-partners__name">{partner.name}</h3>
                  <p className="exact-partners__desc">{partner.desc}</p>
                </div>
              </div>
              <div className="exact-partners__watermark">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  {partner.icon}
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="exact-partners__ticker-wrap">
          <div className="exact-partners__ticker">
            <span>More partners joining soon</span>
            <span className="exact-partners__dot">•</span>
            <span>Acme Inc</span>
            <span className="exact-partners__dot">•</span>
            <span>Nexus APIs</span>
            <span className="exact-partners__dot">•</span>
            <span>Global Web Ops</span>
            <span className="exact-partners__dot">•</span>
            <span>SecureAuth</span>
            <span className="exact-partners__dot">•</span>
             <span>More partners joining soon</span>
            <span className="exact-partners__dot">•</span>
            <span>Acme Inc</span>
            <span className="exact-partners__dot">•</span>
            <span>Nexus APIs</span>
          </div>
        </div>

      </div>
    </section>
  );
}
