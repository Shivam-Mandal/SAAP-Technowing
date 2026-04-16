import { useEffect, useRef } from 'react';
import './Pricing.css';

const plans = [
  {
    name: 'Starter',
    price: '49',
    period: '/month',
    description: 'Perfect for individuals and small businesses getting started.',
    features: [
      'Up to 100 products',
      '1 seller account',
      'Basic analytics dashboard',
      'Email support',
      'Standard checkout',
      'SSL certificate',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Professional',
    price: '149',
    period: '/month',
    description: 'Best for growing businesses and multi-vendor stores.',
    features: [
      'Up to 5,000 products',
      '25 seller accounts',
      'Advanced analytics & reports',
      'Priority support (24/7)',
      'Custom checkout & branding',
      'API access & webhooks',
      'Multi-currency support',
      'SEO tools',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large-scale marketplaces with custom requirements.',
    features: [
      'Unlimited products',
      'Unlimited sellers',
      'Custom analytics & BI',
      'Dedicated account manager',
      'White-label solution',
      'Custom API integrations',
      'SLA guarantee (99.99%)',
      'On-premise deployment option',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export default function Pricing() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.price__animate').forEach((el, i) => {
              el.style.animationDelay = `${i * 0.12}s`;
              el.classList.add('price__animate--visible');
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
    <section className="pricing section" id="pricing" ref={sectionRef}>
      <div className="container">
        <div className="pricing__header price__animate">
          <span className="section-label">Pricing</span>
          <h2 className="section-title">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="section-subtitle" style={{margin: '0 auto', textAlign: 'center'}}>
            Choose the plan that suits your marketplace size. 
            All plans include a 14-day free trial.
          </p>
        </div>

        <div className="pricing__grid">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`pricing__card price__animate ${plan.popular ? 'pricing__card--popular' : ''}`}
            >
              {plan.popular && (
                <div className="pricing__badge">Most Popular</div>
              )}
              <div className="pricing__card-header">
                <h3 className="pricing__plan-name">{plan.name}</h3>
                <p className="pricing__plan-desc">{plan.description}</p>
                <div className="pricing__price">
                  {plan.price !== 'Custom' && <span className="pricing__currency">$</span>}
                  <span className="pricing__amount">{plan.price}</span>
                  {plan.period && <span className="pricing__period">{plan.period}</span>}
                </div>
              </div>
              <ul className="pricing__features">
                {plan.features.map((feature, fi) => (
                  <li key={fi} className="pricing__feature">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M4 9L7.5 12.5L14 6" stroke={plan.popular ? '#3b82f6' : '#10b981'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} pricing__cta`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
