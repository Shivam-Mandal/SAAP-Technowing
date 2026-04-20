import ExactPricing from '../components/ExactPricing';
import ExactMacbook from '../components/ExactMacbook';
import './PricingPage.css';
import { useEffect } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei';

const FloatingShapes = () => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
            <Float speed={2.5} rotationIntensity={2} floatIntensity={3}>
                <Sphere visible args={[1, 64, 64]} scale={1.8} position={[-5, 1, -2]}>
                    <MeshDistortMaterial color="#3b82f6" attach="material" distort={0.4} speed={2} roughness={0.2} metalness={0.8} />
                </Sphere>
            </Float>
            <Float speed={2} rotationIntensity={3} floatIntensity={2}>
                <Sphere visible args={[1, 64, 64]} scale={1.2} position={[5, 2, -3]}>
                    <MeshDistortMaterial color="#8b5cf6" attach="material" distort={0.6} speed={3} roughness={0.1} metalness={0.5} />
                </Sphere>
            </Float>
            <Float speed={1.5} rotationIntensity={1} floatIntensity={4}>
                <Sphere visible args={[1, 64, 64]} scale={2.5} position={[0, -4, -6]}>
                    <MeshDistortMaterial color="#0ea5e9" attach="material" distort={0.2} speed={1.5} roughness={0.4} metalness={0.9} />
                </Sphere>
            </Float>
        </>
    );
};

export default function PricingPage() {
    useScrollAnimation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when the page opens
    }, []);

    return (
        <div className="pricing-page">
            <section className="pricing-hero">
                <div className="pricing-hero__3d-bg">
                    <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                        <FloatingShapes />
                        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
                    </Canvas>
                </div>
                <div className="pricing-hero__content">
                    <h1 className="pricing-hero__title scroll-animate" data-animate="zoom-in" style={{ transitionDelay: '100ms' }}>
                        Simple, predictable pricing for <span>growth</span>
                    </h1>
                    <p className="pricing-hero__subtitle scroll-animate" data-animate="fade-up" style={{ transitionDelay: '200ms' }}>
                        Whether you are just starting your first marketplace or scaling a global enterprise, we have a plan built precisely for your needs. No hidden fees.
                    </p>
                </div>
            </section>

            {/* MacBook Dashboard Showcase */}
            <ExactMacbook />

            {/* Existing ExactPricing component with the pricing grid */}
            <ExactPricing />

            <section className="pricing-faq">
                <div className="container">
                    <h2 className="section-title section-title-center scroll-animate" data-animate="zoom-in">Frequently Asked Questions</h2>
                    <div className="pricing-faq__list">
                        <div className="pricing-faq__item scroll-animate" data-animate="fade-up" style={{ transitionDelay: '0ms' }}>
                            <div className="pricing-faq__item-bg"></div>
                            <h3>Can I switch plans later?</h3>
                            <p>Absolutely. You can upgrade or downgrade your plan at any time. Prorated charges will be applied automatically to your account so you only pay for what you use.</p>
                        </div>
                        <div className="pricing-faq__item scroll-animate" data-animate="fade-up" style={{ transitionDelay: '100ms' }}>
                            <div className="pricing-faq__item-bg"></div>
                            <h3>What payment methods do you accept?</h3>
                            <p>We accept all major credit cards, PayPal, and for Enterprise plans, we can securely arrange invoice-based wire transfers.</p>
                        </div>
                        <div className="pricing-faq__item scroll-animate" data-animate="fade-up" style={{ transitionDelay: '200ms' }}>
                            <div className="pricing-faq__item-bg"></div>
                            <h3>Is there a setup fee?</h3>
                            <p>No, there are no hidden setup fees. The monthly or annual price you see is exactly what you pay for standard platform access.</p>
                        </div>
                        <div className="pricing-faq__item scroll-animate" data-animate="fade-up" style={{ transitionDelay: '300ms' }}>
                            <div className="pricing-faq__item-bg"></div>
                            <h3>Do you offer custom integrations?</h3>
                            <p>Yes! Custom integrations are natively supported on our Pro and Enterprise plans. Reach out to our sales engineering team for specifics.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
