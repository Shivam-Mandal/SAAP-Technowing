import useScrollAnimation from '../hooks/useScrollAnimation';
import './Career.css';

export default function ExactCareer() {
    const sectionRef = useScrollAnimation();
    const openings = [
        {
            title: "Senior Full-Stack Developer",
            department: "Engineering",
            location: "Remote / Patna, India",
            type: "Full-time",
            desc: "Build and scale our BuyyBox marketplace platform using React, Node.js, and cloud-native technologies.",
            color: "#3b82f6"
        },
        {
            title: "UI/UX Designer",
            department: "Design",
            location: "Remote",
            type: "Full-time",
            desc: "Craft beautiful, intuitive interfaces for our B2B eCommerce platform and enterprise dashboards.",
            color: "#8b5cf6"
        },
        {
            title: "DevOps Engineer",
            department: "Infrastructure",
            location: "Patna, India",
            type: "Full-time",
            desc: "Manage CI/CD pipelines, cloud infrastructure, and ensure 99.9% uptime across all services.",
            color: "#10b981"
        },
        {
            title: "Digital Marketing Specialist",
            department: "Marketing",
            location: "Remote",
            type: "Full-time",
            desc: "Drive brand awareness and lead generation through SEO, content marketing, and paid campaigns.",
            color: "#f59e0b"
        },
        {
            title: "Business Development Executive",
            department: "Sales",
            location: "Patna, India",
            type: "Full-time",
            desc: "Identify and close enterprise deals, build client relationships, and expand our market reach.",
            color: "#f43f5e"
        },
        {
            title: "QA & Automation Engineer",
            department: "Engineering",
            location: "Remote / Patna, India",
            type: "Full-time",
            desc: "Ensure product quality through automated testing frameworks and comprehensive test strategies.",
            color: "#06b6d4"
        }
    ];

    const perks = [
        {
            icon: <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />,
            title: "Competitive Salary",
            desc: "Industry-leading compensation packages"
        },
        {
            icon: <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" />,
            title: "Remote Friendly",
            desc: "Work from anywhere in the world"
        },
        {
            icon: <><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></>,
            title: "Learning Budget",
            desc: "Annual allowance for courses & conferences"
        },
        {
            icon: <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />,
            title: "Health Benefits",
            desc: "Comprehensive health & wellness coverage"
        }
    ];

    return (
        <section className="exact-career section" id="careers" ref={sectionRef}>
            <div className="container">

                <div className="exact-career__header scroll-animate" data-animate="fade-up">
                    <span className="exact-career__badge">We're Hiring</span>
                    <h2 className="section-title section-title-center">Join Our Team</h2>
                    <p className="section-desc section-desc-center">
                        Be part of a passionate team building the future of digital commerce. We're looking for talented individuals who want to make an impact.
                    </p>
                </div>

                {/* Perks Section */}
                <div className="exact-career__perks">
                    {perks.map((perk, i) => (
                        <div key={i} className="exact-career__perk scroll-animate" data-animate="fade-up" data-delay={i * 100}>
                            <div className="exact-career__perk-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    {perk.icon}
                                </svg>
                            </div>
                            <h4 className="exact-career__perk-title">{perk.title}</h4>
                            <p className="exact-career__perk-desc">{perk.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Job Openings */}
                <h3 className="exact-career__openings-title scroll-animate" data-animate="fade-up">Open Positions</h3>

                <div className="exact-career__grid">
                    {openings.map((job, i) => (
                        <div key={i} className="exact-career__card scroll-animate" data-animate="zoom-in" data-delay={i * 100} style={{ '--accent': job.color }}>
                            <div className="exact-career__card-accent"></div>
                            <div className="exact-career__card-body">
                                <div className="exact-career__card-top">
                                    <span className="exact-career__dept">{job.department}</span>
                                    <span className="exact-career__type">{job.type}</span>
                                </div>
                                <h3 className="exact-career__job-title">{job.title}</h3>
                                <p className="exact-career__job-desc">{job.desc}</p>
                                <div className="exact-career__card-footer">
                                    <span className="exact-career__location">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                        {job.location}
                                    </span>
                                    <a href="mailto:careers@saaptechnowing.com" className="exact-career__apply-btn">
                                        Apply Now
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="exact-career__cta scroll-animate" data-animate="fade-up">
                    <p>Don't see a role that fits? We're always looking for great talent.</p>
                    <a href="mailto:careers@saaptechnowing.com" className="btn btn-primary">Send Your Resume</a>
                </div>

            </div>
        </section>
    );
}
