import './Pricing.css';

export default function ExactPricing() {
  const plans = [
    { title: "Starter", price: "$29", desc: "Perfect for new marketplaces starting mapping out their future.", features: ["Up to 100 sellers", "Basic Analytics", "Standard Support", "Community Access", "Limited API calls"] },
    { title: "Basic", price: "$49", desc: "For growing businesses looking to expand their reach across platforms.", features: ["Up to 500 sellers", "Advanced Analytics", "Priority Support", "Email Campaigns", "Standard API Access"] },
    { title: "Pro", price: "$99", desc: "For established marketplaces generating consistent traffic.", features: ["Unlimited sellers", "Predictive Analytics", "24/7 Phone Support", "Custom integrations", "Unlimited API Access"], featured: true },
    { title: "Enterprise", price: "$299", desc: "For global enterprises needing highest level of scale.", features: ["Multi-region deployment", "Custom Data Models", "Dedicated Account Manager", "White-glove SLA", "Custom security"] }
  ];

  return (
    <section className="exact-pricing section section-bg-light" id="pricing">
      <div className="container">
        <h2 className="section-title section-title-center">Pricing Plans</h2>
        <p className="section-desc section-desc-center">Scale without limits. Choose the plan that perfectly matches your current stage of growth.</p>

        <div className="exact-pricing__grid">
          {plans.map((plan, i) => (
            <div key={i} className={`exact-pricing__card ${plan.featured ? 'exact-pricing__card--featured' : ''}`}>
              <h3 className="exact-pricing__title">{plan.title}</h3>
              <div className="exact-pricing__price">
                <span className="exact-pricing__currency">$</span>{plan.price}<span className="exact-pricing__period">/mo</span>
              </div>
              <p className="exact-pricing__desc">{plan.desc}</p>

              <ul className="exact-pricing__features">
                {plan.features.map((f, j) => (
                  <li key={j} className="exact-pricing__feature">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    {f}
                  </li>
                ))}
              </ul>

              <button className={`btn ${plan.featured ? 'btn-white' : 'btn-outline'} exact-pricing__btn`}>Get Started</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
