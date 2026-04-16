import './ServicesGrid.css';

export default function ExactServices() {
  const services = [
    { 
      title: "eCommerce Solutions", 
      desc: "End-to-end multi-vendor marketplace development and seamless shopping experiences.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80",
      icon: <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.2 9.3a1 1 0 001 .7h10.4a1 1 0 001-.7L17 13M9 18h6" />
    },
    { 
      title: "Custom Web Apps", 
      desc: "Scalable web applications engineered for high performance and enterprise security.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
      icon: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    },
    { 
      title: "UI/UX Design", 
      desc: "Conversion-focused user interfaces and user experiences that captivate your audience.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80",
      icon: <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    },
    { 
      title: "Cloud Strategy", 
      desc: "Cloud architecture, migration, and management for resilient global infrastructure.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
      icon: <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    },
    { 
      title: "API Integrations", 
      desc: "Seamless third-party integrations and custom reliable API layer development.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
      icon: <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
    },
    { 
      title: "Data & Analytics", 
      desc: "Advanced business intelligence tools and predictive analytics custom panels.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      icon: <path d="M3 3v18h18M18 9l-5-5-4 4-5-5" />
    }
  ];

  return (
    <section className="exact-services section">
      <div className="container">
        
        <div className="exact-services__header">
          <h2 className="section-title">Comprehensive Services</h2>
          <p className="section-desc">
            We offer a full spectrum of digital engineering services designed to help you build, launch, and dominate your market.
          </p>
        </div>

        <div className="exact-services__grid">
          {services.map((srv, i) => (
            <div key={i} className="exact-services__card group">
              
              <div className="exact-services__image-wrapper">
                <div 
                  className="exact-services__image"
                  style={{ backgroundImage: `url(${srv.image})` }}
                ></div>
                <div className="exact-services__image-overlay"></div>
                
                <div className="exact-services__icon-floating">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {srv.icon}
                  </svg>
                </div>
              </div>

              <div className="exact-services__content">
                <h3 className="exact-services__title">{srv.title}</h3>
                <p className="exact-services__desc">{srv.desc}</p>
                
                <a href="#" className="exact-services__link">
                  Learn more 
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
