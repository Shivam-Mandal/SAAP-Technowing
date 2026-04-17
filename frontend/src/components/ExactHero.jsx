import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { useRef } from 'react';
import AnimatedCounter from './AnimatedCounter';
import './Hero.css';

function RotatingStars() {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 15;
    ref.current.rotation.y -= delta / 20;
  });
  return (
    <group ref={ref}>
      <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={2} />
    </group>
  );
}

export default function Hero() {
  return (
    <section className="exact-hero" id="home">
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
        <Canvas camera={{ position: [0, 0, 1] }}>
          <RotatingStars />
        </Canvas>
      </div>
      <div className="exact-hero__glow"></div>

      <div className="container exact-hero__container">

        <div className="exact-hero__content">
          <h1 className="exact-hero__title">
            Technology to Fuel your <span className="exact-hero__title-blue">Digital Enterprise</span>
          </h1>

          <p className="exact-hero__subtitle">
            Our powerful eCommerce platform BuyyBox powers modern marketplace solutions. Built to scale, driven by data.
          </p>

          <div className="exact-hero__actions">
            <a href="https://buyybox.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary exact-hero__btn group">
              Explore BuyyBox
              <span className="exact-hero__icon-circle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--primary-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </span>
            </a>
            <button className="btn btn-outline exact-hero__btn">
              Learn More
            </button>
          </div>

          <div className="exact-hero__stats">
            <div className="exact-hero__stat">
              <span className="exact-hero__stat-val"><AnimatedCounter end="10" suffix="k+" duration={2000} /></span>
              <span className="exact-hero__stat-label">Active Users</span>
            </div>
            <div className="exact-hero__stat-div"></div>
            <div className="exact-hero__stat">
              <span className="exact-hero__stat-val"><AnimatedCounter end="50" suffix="+" duration={2000} /></span>
              <span className="exact-hero__stat-label">Integrations</span>
            </div>
            <div className="exact-hero__stat-div"></div>
            <div className="exact-hero__stat">
              <span className="exact-hero__stat-val"><AnimatedCounter end="99.9" suffix="%" duration={2000} /></span>
              <span className="exact-hero__stat-label">Uptime SLA</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
