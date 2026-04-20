import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import ExactCareer from '../components/ExactCareer';
import { useEffect } from 'react';
import './CareerPage.css';

const AnimatedShape = () => {
    return (
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
            <Sphere visible args={[1, 100, 200]} scale={2.5}>
                <MeshDistortMaterial
                    color="#3b82f6"
                    attach="material"
                    distort={0.5}
                    speed={2}
                    roughness={0.2}
                />
            </Sphere>
        </Float>
    );
};

export default function CareerPage() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when the page opens
    }, []);

    return (
        <div className="career-page">
            {/* Hero Section */}
            <section className="career-hero">
                <div className="career-hero__content">
                    <h1 className="career-hero__title">
                        Build the <span>Future</span> With Us
                    </h1>
                    <p className="career-hero__subtitle">
                        Join a fast-growing, innovative team dedicated to transforming B2B commerce. Discover your next big opportunity and make an impact on a global scale.
                    </p>
                    <button className="btn btn-primary career-hero__cta" onClick={() => document.getElementById('careers').scrollIntoView({ behavior: 'smooth' })}>
                        View Open Positions
                    </button>
                </div>
                <div className="career-hero__3d-container">
                    <Canvas camera={{ position: [0, 0, 5] }}>
                        <ambientLight intensity={0.8} />
                        <directionalLight position={[2, 2, 5]} intensity={1.5} />
                        <AnimatedShape />
                        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
                    </Canvas>
                </div>
            </section>

            {/* Our Culture Section */}
            <section className="career-culture">
                <div className="container">
                    <div className="career-culture__header">
                        <h2>Why SAAP Technowing?</h2>
                        <p>We believe in fostering an environment where talent thrives. Our culture is built on continuous learning, innovation, and mutual support.</p>
                    </div>
                    <div className="career-culture__grid">
                        <div className="culture-card">
                            <div className="culture-card__icon">🚀</div>
                            <h3>Innovation First</h3>
                            <p>We work with cutting-edge tech and aren't afraid to experiment with new ideas to solve complex problems.</p>
                        </div>
                        <div className="culture-card">
                            <div className="culture-card__icon">🤝</div>
                            <h3>Collaborative Spirit</h3>
                            <p>Our best work happens when diverse minds come together. We value teamwork and open communication.</p>
                        </div>
                        <div className="culture-card">
                            <div className="culture-card__icon">📈</div>
                            <h3>Growth Mindset</h3>
                            <p>Your career trajectory is important to us. We provide the mentorship and resources to help you level up.</p>
                        </div>
                        <div className="culture-card">
                            <div className="culture-card__icon">🌍</div>
                            <h3>Global Impact</h3>
                            <p>What we build here touches businesses worldwide. You'll work on products that matter and drive real change.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The existing ExactCareer section containing the Jobs and Perks */}
            <ExactCareer />
        </div>
    );
}
