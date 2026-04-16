import { useEffect, useRef } from 'react';
import './Blog.css';

const posts = [
  {
    id: 1,
    category: 'Ecommerce',
    title: 'The Future of Multi-Vendor Marketplaces in 2026',
    excerpt: 'Explore how AI, personalization, and social commerce are reshaping the multi-vendor marketplace landscape.',
    date: 'Apr 12, 2026',
    readTime: '6 min read',
    gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
  },
  {
    id: 2,
    category: 'Technology',
    title: 'Building Scalable APIs: Lessons from BuyyBox',
    excerpt: 'How we engineered BuyyBox\'s API layer to handle millions of requests with sub-100ms latency.',
    date: 'Apr 8, 2026',
    readTime: '8 min read',
    gradient: 'linear-gradient(135deg, #f093fb, #f5576c)',
  },
  {
    id: 3,
    category: 'Business',
    title: 'From Startup to Scale: Growing Your Digital Marketplace',
    excerpt: 'Practical strategies and frameworks for scaling your ecommerce platform from 0 to 10,000 sellers.',
    date: 'Apr 3, 2026',
    readTime: '5 min read',
    gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)',
  },
];

export default function Blog() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.blog__animate').forEach((el, i) => {
              el.style.animationDelay = `${i * 0.1}s`;
              el.classList.add('blog__animate--visible');
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
    <section className="blog section" id="blog" ref={sectionRef}>
      <div className="container">
        <div className="blog__header blog__animate">
          <div className="blog__header-content">
            <span className="section-label">Blog & Insights</span>
            <h2 className="section-title">
              Latest from Our <span className="gradient-text">Blog</span>
            </h2>
            <p className="section-subtitle">
              Insights, tutorials, and industry perspectives from the SAAP Technowing team.
            </p>
          </div>
          <a href="#blog" className="btn btn-secondary blog__view-all">
            View All Posts
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div className="blog__grid">
          {posts.map((post) => (
            <article key={post.id} className="blog__card blog__animate">
              <div className="blog__card-image" style={{background: post.gradient}}>
                <span className="blog__card-category">{post.category}</span>
              </div>
              <div className="blog__card-content">
                <div className="blog__card-meta">
                  <span>{post.date}</span>
                  <span className="blog__card-dot">·</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="blog__card-title">{post.title}</h3>
                <p className="blog__card-excerpt">{post.excerpt}</p>
                <a href="#blog" className="blog__card-link">
                  Read Article
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
