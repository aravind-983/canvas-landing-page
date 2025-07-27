import HeroVideo from '../assets/hero-section/About page.mov';
import CTAButton from '../../../components/CTAButton';
import useScrollAnimation from '../../..//hooks/useScrollAnimation';
import '../styles/HeroSection.css';

const HeroSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation();
  const [textRef, isTextVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });
  const [imageRef, isImageVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });


  return (
    <section ref={sectionRef} className={`about-hero-section fade-in-section ${isVisible ? 'visible' : ''}`}>
      {/* Ellipse background */}
      <div className="about-hero-container">
        <div className="hero-content">
          <div ref={textRef} className={`hero-text slide-in-left ${isTextVisible ? 'visible' : ''}`}>
            <h1 className="about-hero-title">
            Turn Attention Into Revenue. Seamlessly.
            </h1>
            <p className="about-hero-description">
            Canvas AEL (Adaptive Engagement Layer) unlocks value from every viewer interaction—with zero flow break.
            </p>
            <div className="hero-cta-container">
            <CTAButton 
              name='Request Demo' 
            />
            </div>
          </div>
          <div ref={imageRef} className={`hero-image slide-in-right ${isImageVisible ? 'visible' : ''}`}>
            <video 
              src={HeroVideo} 
              className="hero-video" 
              autoPlay 
              loop 
              muted 
              playsInline
              onMouseEnter={(e) => e.target.style.pointerEvents = 'none'}
              onMouseLeave={(e) => e.target.style.pointerEvents = 'auto'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;