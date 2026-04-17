import { useState, useEffect, useRef } from 'react';

export default function AnimatedCounter({ end, duration = 2000, suffix = '' }) {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setIsVisible(true);
        }, { threshold: 0.1 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;
        let startTime = null;
        const endVal = parseFloat(end);
        const hasDecimals = end.toString().includes('.');

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease out exponential for smoother finish
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const current = easeProgress * endVal;

            setCount(hasDecimals ? current.toFixed(1) : Math.floor(current));

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(endVal); // Snap to exact end value
            }
        };

        requestAnimationFrame(animate);
    }, [isVisible, end, duration]);

    // Format integer numbers cleanly with commas
    const formattedCount =
        typeof count === 'number' && !end.toString().includes('.')
            ? count.toLocaleString()
            : count;

    return <span ref={ref}>{formattedCount}{suffix}</span>;
}
