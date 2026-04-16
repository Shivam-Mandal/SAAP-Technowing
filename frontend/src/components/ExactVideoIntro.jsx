import './VideoIntro.css';

export default function VideoIntro() {
  return (
    <section className="exact-video section">
      <div className="container">
        
        <div className="exact-video__header">
          <h2 className="section-title section-title-center">We are creative agency...<br/>We build digital experiences.</h2>
        </div>

        <div className="exact-video__player-wrapper">
          <div className="exact-video__player">
            <div className="exact-video__player-bg"></div>
            <button className="exact-video__play-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
