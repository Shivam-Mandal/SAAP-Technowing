import { useState, useRef } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './VideoIntro.css';

export default function VideoIntro() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const sectionRef = useScrollAnimation();

  const handlePlay = () => {
    setIsPlaying(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch((err) => {
          console.error('Video play failed:', err);
        });
      }
    }, 0);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <section className="exact-video section" ref={sectionRef}>
      <div className="container">

        <div className="exact-video__header scroll-animate" data-animate="fade-up">
          <h2 className="section-title section-title-center">We are creative agency...<br />We build digital experiences.</h2>
        </div>

        <div className="exact-video__player-wrapper scroll-animate" data-animate="zoom-in" data-delay="200">
          <div className="exact-video__player">
            <div className={`exact-video__player-bg${isPlaying ? ' exact-video__player-bg--hidden' : ''}`}></div>

            {!isPlaying && (
              <button className="exact-video__play-btn" onClick={handlePlay}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
              </button>
            )}

            {isPlaying && (
              <video
                ref={videoRef}
                className="exact-video__video"
                src="/saap.mp4"
                controls
                onEnded={handleVideoEnd}
              />
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
