import { useNavigate } from 'react-router-dom';
import EllipseBackground from '../assets/hero-section/Ellipse 809.svg';
import HeroVideo from '../assets/hero-section/Landing page 1st scroll video.mp4';
import CTAButton from '../../../components/CTAButton';
import useScrollAnimation from '../../..//hooks/useScrollAnimation';
import '../styles/HeroSection.css';

const HeroSection = () => {
  const navigate = useNavigate();
  const [sectionRef, isVisible] = useScrollAnimation();
  const [textRef, isTextVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });
  const [imageRef, isImageVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });

  const handleMonetizeClick = () => {
    navigate('/monetize');
  };

  const handleEngageClick = () => {
    navigate('/engage');
  }


  return (
    <section ref={sectionRef} className={`hero-section fade-in-section ${isVisible ? 'visible' : ''}`}>
      {/* Ellipse background */}
      <div className="hero-background">
        <img src={EllipseBackground} alt="" className="hero-ellipse" />
      </div>
      <div className="hero-container">
        <div className="hero-content">
          <div ref={textRef} className={`hero-text slide-in-left ${isTextVisible ? 'visible' : ''}`}>
            <h1 className="hero-title">
            Turn Attention Into Revenue. Seamlessly.
            </h1>
            <p className="hero-description">
            Canvas AEL (Adaptive Engagement Layer) unlocks value from every viewer interaction—with zero flow break.
            </p>
            <div className="hero-cta-container">
            <CTAButton 
              name='Explore Monetize' 
              onClick={handleMonetizeClick}
            />
            <CTAButton 
            name='Explore  Engage'  
            onClick={handleEngageClick}
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