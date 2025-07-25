import useScrollAnimation from '../../../hooks/useScrollAnimation';
import '../styles/BenefitsSection.css';

// Import assets
import Icon1 from '../assets/benefits-section/Icon1.svg';
import Icon2 from '../assets/benefits-section/Icon2.png';
import Icon3 from '../assets/benefits-section/Icon3.svg';
import Icon4 from '../assets/benefits-section/Icon4.svg';

const BenefitsSection = () => {
    const [sectionRef, isVisible] = useScrollAnimation();
    const [titleRef, isTitleVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });
    const [cardsRef, isCardsVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });

    return (
        <section ref={sectionRef} className={`benefits-section fade-in-section ${isVisible ? 'visible' : ''}`}>
            <div className="benefits-container">
                {/* Section Title */}
                <h2 ref={titleRef} className={`benefits-title fade-in-section ${isTitleVisible ? 'visible' : ''}`}>
                    Why we're different?
                </h2>

                {/* Benefits Cards */}
                <div ref={cardsRef} className={`benefits-cards-container scale-in ${isCardsVisible ? 'visible' : ''}`}>
                    {/* Card 1 - Built for Modern Stacks */}
                    <div className="benefits-card benefits-card-1">
                        <div className="benefits-card-content">
                            <div className="benefits-icon">
                                <img src={Icon1} alt="Built for Modern Stacks" />
                            </div>
                            <h3 className="benefits-card-title">Built for Modern Stacks</h3>
                            <p className="benefits-card-description">
                                Lightweight SDKs, REST APIs, SSAI-agnostic. Deployed across OTT, FAST, and CMS platforms.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 - Privacy-First by Design */}
                    <div className="benefits-card benefits-card-2">
                        <div className="benefits-card-content">
                            <div className="benefits-icon">
                                <img src={Icon2} alt="Privacy-First by Design" />
                            </div>
                            <h3 className="benefits-card-title">Privacy-First by Design</h3>
                            <p className="benefits-card-description">
                                Capture real viewer intent — without cookies or logins.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 - Seamless to Deploy */}
                    <div className="benefits-card benefits-card-3">
                        <div className="benefits-card-content">
                            <div className="benefits-icon">
                                <img src={Icon3} alt="Seamless to Deploy" />
                            </div>
                            <h3 className="benefits-card-title">Seamless to Deploy</h3>
                            <p className="benefits-card-description">
                                Plug into any CMS, player, or backend. No viewer disruption.
                            </p>
                        </div>
                    </div>

                    {/* Card 4 - Real-Time Intelligence */}
                    <div className="benefits-card benefits-card-4">
                        <div className="benefits-card-content">
                            <div className="benefits-icon">
                                <img src={Icon4} alt="Real-Time Intelligence" />
                            </div>
                            <h3 className="benefits-card-title">Real-Time Intelligence</h3>
                            <p className="benefits-card-description">
                                Know when, why, and how users engage. Trigger actions that matter.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default  BenefitsSection;