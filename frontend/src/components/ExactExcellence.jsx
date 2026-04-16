import './Excellence.css';

export default function ExactExcellence() {
  const items = [
    { title: "High Conversions", desc: "Optimized checkout flows and fast load times." },
    { title: "SEO Optimized", desc: "Built with SEO best practices and clean semantic code." },
    { title: "Secure Data", desc: "Bank-level security and rigid data compliance frameworks." },
    { title: "Scalable Architecture", desc: "Ready to handle traffic spikes and enterprise loads." },
    { title: "Responsive Design", desc: "Flawless mobile, tablet, and desktop experiences." },
    { title: "24/7 Support", desc: "Priority technical support backing you up at all times." }
  ];

  return (
    <section className="exact-excellence section section-bg-light">
      <div className="container">
        
        <h2 className="section-title section-title-center">Built for Excellence</h2>
        <p className="section-desc section-desc-center">
          Our solutions represent the cutting edge of digital performance, engineered to maximize ROI.
        </p>

        <div className="exact-excellence__grid">
          {items.map((item, i) => (
            <div key={i} className="exact-excellence__item">
              <div className="exact-excellence__icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary-blue)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div>
                <h3 className="exact-excellence__title">{item.title}</h3>
                <p className="exact-excellence__desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
