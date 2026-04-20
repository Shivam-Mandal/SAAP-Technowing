import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import './ExactMacbook.css';

gsap.registerPlugin(ScrollTrigger);

export default function ExactMacbook() {
    const containerRef = useRef(null);
    const stickyRef = useRef(null);
    const titleRef = useRef(null);
    const assemblyRef = useRef(null);
    const lidRef = useRef(null);
    const phoneRef = useRef(null);

    useGSAP(() => {
        let mm = gsap.matchMedia();

        mm.add("(min-width: 769px)", () => {
            // 1. Initial State
            gsap.set(assemblyRef.current, { scale: 1.3, y: -100 });
            gsap.set(lidRef.current, { rotateX: -60, transformStyle: "preserve-3d" });
            gsap.set(titleRef.current, { opacity: 1, y: 0 });
            gsap.set(phoneRef.current, { y: 200, opacity: 0 }); // Phone starts hidden and lower

            // 2. Setup Timeline with ScrollTrigger
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=2000", // The scroll duration (distance)
                    scrub: 1,
                    pin: stickyRef.current, // Pin the laptop section
                    anticipatePin: 1,
                }
            });

            // 3. Animation Steps
            tl.to(titleRef.current, {
                opacity: 0,
                y: -30,
                duration: 1.5,
                ease: "power1.inOut"
            }, 0)
                .to(assemblyRef.current, {
                    scale: 1.05,
                    y: -30, // Moves slightly down as it opens, keeping the base visible
                    duration: 4,
                    ease: "power2.inOut"
                }, 0)
                .to(lidRef.current, {
                    rotateX: 0,
                    duration: 4,
                    ease: "power2.inOut"
                }, 0)
                .to(phoneRef.current, {
                    y: 0,
                    opacity: 1,
                    duration: 3,
                    ease: "back.out(1.2)"
                }, 1.5); // Phone animation starts halfway through the laptop opening
        });

        // Mobile responsiveness: no pinning, simple reveal
        mm.add("(max-width: 768px)", () => {
            gsap.set(assemblyRef.current, { scale: 0.9, opacity: 0 });
            gsap.set(lidRef.current, { rotateX: 0 });
            gsap.set(titleRef.current, { opacity: 0, y: 30 });
            gsap.set(phoneRef.current, { y: 50, opacity: 0 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    end: "top 30%",
                    scrub: 1,
                }
            });

            tl.to(titleRef.current, { opacity: 1, y: 0, duration: 1 }, 0)
                .to(assemblyRef.current, { scale: 1, opacity: 1, duration: 1.5 }, 0.5)
                .to(phoneRef.current, { y: 0, opacity: 1, duration: 1.5 }, 1.0);
        });

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="mac-scroll-outer">
            <div ref={stickyRef} className="mac-scroll-sticky">
                {/* Title */}
                <div ref={titleRef} className="mac-scroll-title">
                    <h3>The Ultimate Dashboard</h3>
                    <p>Everything you need is built right into our application. Scroll down to look inside.</p>
                </div>

                {/* Perspective Container */}
                <div className="mac-perspective">
                    <div ref={assemblyRef} className="mac-assembly">

                        {/* SCREEN (LID) */}
                        <div ref={lidRef} className="mac-lid">
                            <div className="mac-screen-frame">

                                {/* Uniform Top Bezel */}
                                <div className="mac-bezel-top-slim"></div>

                                {/* Actual Display Area for Image */}
                                <div className="mac-display-area">
                                    <div className="mac-real-notch"></div>
                                    <img
                                        src="/dashboard-preview.png"
                                        alt="SAAP Technowing Dashboard"
                                        draggable={false}
                                    />
                                    <div className="mac-screen-reflection"></div>
                                </div>

                                {/* Bottom Bezel */}
                                <div className="mac-bezel-bottom">
                                    <span className="mac-logo">MacBook Air</span>
                                </div>
                            </div>
                        </div>

                        {/* BASE (Front-facing metallic bar) */}
                        <div className="mac-base-front">
                            <svg viewBox="0 0 1200 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="macBaseSkin" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#252733" />
                                        <stop offset="30%" stopColor="#1a1c26" />
                                        <stop offset="100%" stopColor="#08090d" />
                                    </linearGradient>
                                    <linearGradient id="macBaseTopEdge" x1="0" y1="0" x2="1" y2="0">
                                        <stop offset="0%" stopColor="#11131a" />
                                        <stop offset="3%" stopColor="#43495c" />
                                        <stop offset="15%" stopColor="#303545" />
                                        <stop offset="50%" stopColor="#212430" />
                                        <stop offset="85%" stopColor="#303545" />
                                        <stop offset="97%" stopColor="#43495c" />
                                        <stop offset="100%" stopColor="#11131a" />
                                    </linearGradient>
                                </defs>

                                {/* Drop Shadow underneath base */}
                                <path d="M 10 28 C 10 28 600 45 1190 28 C 1190 28 600 38 10 28 Z" fill="#000" opacity="0.3" />

                                {/* Main Base Path */}
                                <path
                                    d="M 12 1 L 1188 1 
                                       C 1200 1 1200 4 1198 12 
                                       C 1196 22 1184 28 1160 28
                                       L 40 28
                                       C 16 28 4 22 2 12
                                       C 0 4 0 1 12 1 Z"
                                    fill="url(#macBaseSkin)"
                                />

                                {/* Top Edge Highlight Reflex */}
                                <path
                                    d="M 16 0 L 1184 0 
                                       C 1192 0 1198 2 1198 8 
                                       C 1198 8 1198 12 1194 1 
                                       L 6 1 
                                       C 2 12 2 8 2 8 
                                       C 2 2 8 0 16 0 Z"
                                    fill="url(#macBaseTopEdge)"
                                    opacity="0.9"
                                />

                                {/* Center Indent */}
                                <path d="M 500 0 C 500 6 510 10 530 10 L 670 10 C 690 10 700 6 700 0 Z" fill="#0b0d12" />
                            </svg>
                        </div>

                        {/* SMARTPHONE */}
                        <div ref={phoneRef} className="phone-assembly">
                            <div className="phone-screen">
                                <div className="phone-notch"></div>
                                <div className="phone-display-area">
                                    <img
                                        src="/dashboard-preview.png"
                                        alt="Mobile Dashboard Preview"
                                        draggable={false}
                                    />
                                    <div className="mac-screen-reflection"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
