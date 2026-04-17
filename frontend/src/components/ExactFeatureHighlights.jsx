import { motion } from 'framer-motion';
import './ExactFeatureHighlights.css';

const featureCards = [
  {
    title: 'Innovation',
    description:
      'Continuously pushing the boundaries of ecommerce technology to deliver next-generation solutions.',
    cardClassName: 'feature-card-innovation',
    iconClassName: 'feature-icon-innovation',
    iconAnimation: {
      scale: [1, 1.05, 1],
    },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: 'Reliability',
    description:
      'Built to scale with guaranteed 99.9% uptime, ensuring your marketplace is always open for business.',
    cardClassName: 'feature-card-reliability',
    iconClassName: 'feature-icon-reliability',
    iconAnimation: {
      scale: [1, 1.03, 1],
    },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="M22 4 12 14.01l-3-3" />
      </svg>
    ),
  },
  {
    title: 'Growth',
    description:
      'Data-driven architecture designed to maximize conversions and drive explosive revenue growth.',
    cardClassName: 'feature-card-growth',
    iconClassName: 'feature-icon-growth',
    iconAnimation: {
      y: [0, -4, 0],
    },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
      </svg>
    ),
  },
];

const cardTransition = {
  duration: 0.5,
  ease: [0.22, 1, 0.36, 1],
};

function ExactFeatureHighlights() {
  return (
    <section className="feature-section">
      <div className="feature-section__background" aria-hidden="true">
        <motion.span
          className="feature-orb feature-orb--cyan"
          animate={{ x: [0, 24, 0], y: [0, -18, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.span
          className="feature-orb feature-orb--teal"
          animate={{ x: [0, -18, 0], y: [0, 22, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.span
          className="feature-orb feature-orb--orange"
          animate={{ x: [0, 12, 0], y: [0, -14, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container">
        <motion.div
          className="feature-section__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="feature-section__eyebrow">Core Advantages</span>
          <h2 className="feature-section__title">Technology that feels dependable, modern, and built to grow.</h2>
          <p className="feature-section__description">
            A refined feature grid with calm motion, stronger visual hierarchy, and premium interaction details designed
            for a production company website.
          </p>
        </motion.div>

        <div className="feature-grid">
          {featureCards.map((card, index) => (
            <motion.article
              key={card.title}
              className={`feature-card ${card.cardClassName}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ ...cardTransition, delay: index * 0.15 }}
              whileHover={{
                y: -6,
                scale: 1.02,
                boxShadow: '0 28px 70px -30px rgba(15, 23, 42, 0.28)',
              }}
            >
              <div className="feature-card__surface" />
              <div className="feature-card__glow" />
              <motion.div
                className={`feature-card__icon ${card.iconClassName}`}
                animate={card.iconAnimation}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.1 }}
              >
                {card.icon}
              </motion.div>
              <h3 className="feature-card__title">{card.title}</h3>
              <p className="feature-card__description">{card.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExactFeatureHighlights;
