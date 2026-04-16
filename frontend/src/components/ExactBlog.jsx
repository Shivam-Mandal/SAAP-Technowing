import './Blog.css';

export default function ExactBlog() {
  const posts = [
    {
      title: "Building scalable marketplaces in 2026",
      desc: "An deep dive into architectural patterns for high-volume eCommerce platforms.",
      meta: "Technology • Apr 15, 2026",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "The role of data analytics in sales growth",
      desc: "How real-time analytics predict trends and significantly improve conversion rates.",
      meta: "Analytics • Apr 12, 2026",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "UI/UX best practices for B2B dashboards",
      desc: "Creating intuitive interfaces for enterprise users to manage complex datasets.",
      meta: "Design • Apr 10, 2026",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section className="exact-blog section">
      <div className="container">
        
        <h2 className="section-title section-title-center">Latest News & Insights</h2>
        <p className="section-desc section-desc-center">Stay updated with the latest technological advancements and ecosystem announcements.</p>

        <div className="exact-blog__grid">
          {posts.map((post, i) => (
            <div key={i} className="exact-blog__card">
              <div 
                className="exact-blog__image" 
                style={{ backgroundImage: `url(${post.image})` }}
              ></div>
              <div className="exact-blog__content">
                <span className="exact-blog__meta">{post.meta}</span>
                <h3 className="exact-blog__title">{post.title}</h3>
                <p className="exact-blog__desc">{post.desc}</p>
                <a href="#" className="exact-blog__link">
                  Read Article
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
