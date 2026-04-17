import { useEffect, useRef } from 'react';

export default function useScrollAnimation() {
    const sectionRef = useRef(null);

    useEffect(() => {
        // Check if user prefers reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Add animation class to the elements inside the section
                        const elements = entry.target.querySelectorAll('.scroll-animate');
                        elements.forEach((el) => {
                            // Apply delay if specified in data attribute
                            const delay = el.getAttribute('data-delay');
                            if (delay) {
                                el.style.transitionDelay = `${delay}ms`;
                            }
                            el.classList.add('scroll-animated');
                        });
                        // Optional: unobserve after animating to only animate once
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.15 // Trigger when 15% of the element is visible
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return sectionRef;
}
