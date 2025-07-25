import EllipseBackground from '../assets/ael-section/Ellipse 811.svg';
import AELVideo from '../assets/ael-section/Canvas AEL (Second Scroll.mp4';
import Icon1 from '../assets/ael-section/Icon1.svg';
import Icon2 from '../assets/ael-section/Icon2.svg';
import Icon3 from '../assets/ael-section/Icon3.svg';
import CTAButton from '../../../components/CTAButton';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import '../styles/AELSection.css';

const AELSection = () => {
    const features = [
        {
            icon: Icon1,
            title: "AI HighPoint Automation",
            description: "Finds peak scenes to trigger forms/polls"
        },
        {
            icon: Icon2,
            title: "Canvas Fingerprint",
            badge: "Coming soon",
            description: "Maps emotion & action signals to viewer intent"
        },
        {
            icon: Icon3,
            title: "Flexible Pricing Models",
            description: "Based on  usage, client type, or unlock volume"
        }
    ];

    const [sectionRef, isVisible] = useScrollAnimation();
    const [textRef, isTextVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });
    const [imageRef, isImageVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });
    const [featuresRef, isFeaturesVisible] = useScrollAnimation({ rootMargin: '-50px 0px' });

    return (
        <section ref={sectionRef} className={`ael-section fade-in-section ${isVisible ? 'visible' : ''}`}>
            <div className="ael-background">
                <img src={EllipseBackground} alt="" className="ael-ellipse" />
            </div>
            <div className="ael-container">
                <div className="ael-content">
                    <div ref={textRef} className={`ael-text slide-in-left ${isTextVisible ? 'visible' : ''}`}>
                        <div className="section-accent"></div>
                        <h2 className="ael-title">
                            Canvas AEL: The Adaptive Engine That Captures Emotion. Triggers Action.
                        </h2>
                        <div ref={featuresRef} className={`ael-features fade-in-section ${isFeaturesVisible ? 'visible' : ''}`}>
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="ael-feature-card"
                                    style={{ transitionDelay: isFeaturesVisible ? `${index * 150}ms` : '0ms' }}
                                >
                                    <div className="ael-feature-icon">
                                        <img src={feature.icon} alt={feature.title} />
                                    </div>
                                    <div className="ael-feature-content">
                                        <div className="ael-feature-header">
                                            <h3 className="ael-feature-title">{feature.title}</h3>
                                        </div>
                                        {feature.badge && <span className="ael-feature-badge">{feature.badge}</span>}
                                        {feature.description && (
                                            <p className="ael-feature-description">{feature.description}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="ael-cta-container">
                            <CTAButton
                                name='Request demo'
                            />
                        </div>
                    </div>
                    <div ref={imageRef} className={`ael-image slide-in-right ${isImageVisible ? 'visible' : ''}`}>
                        <video
                            src={AELVideo}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="ael-video"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AELSection;
