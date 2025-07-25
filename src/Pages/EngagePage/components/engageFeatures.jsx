import CTAButton from '../../../components/CTAButton';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import '../styles/engageFeatures.css';

// Import assets
import MonetizeIcon1 from '../assets/engage-features/engage-icon1.svg';
import MonetizeIcon2 from '../assets/engage-features/engage-icon2.svg';
import MonetizeIcon3 from '../assets/engage-features/engage-icon3.svg';
import Ellipse811 from '../assets/engage-features/Ellipse 811.svg';

const EngageFeatures = () => {
    const [sectionRef, isVisible] = useScrollAnimation();
    const [leftRef, isLeftVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });
    const [rightRef, isRightVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });

    return (
        <section ref={sectionRef} className={`engage-features-section fade-in-section ${isVisible ? 'visible' : ''}`}>
            {/* Background ellipse */}
            <img src={Ellipse811} alt="" className="engage-ellipse-811" />
            
            <div className="engage-features-container">
                {/* Left Column - Main Content */}
                <div ref={leftRef} className={`engage-main-content slide-in-left ${isLeftVisible ? 'visible' : ''}`}>
                    <h2 className="engage-main-title">
                    Engage Fans in the Moment, Not After It 
                    with Canvas Engage.
                    </h2>
                    
                    <p className="engage-main-description">
                    Tap into fan intent, live reactions, or sponsor conversions at cue-level.
                    </p>
                    
                    <div className="engage-cta-container">
                        <CTAButton 
                            name="Request demo"
                            className="engage-cta-button"
                        />
                    </div>
                </div>

                {/* Right Column - Features List */}
                <div ref={rightRef} className={`engage-features-list slide-in-right ${isRightVisible ? 'visible' : ''}`}>
                    {/* Feature 1 */}
                    <div className="engage-feature-item">
                        <div className="engage-feature-icon">
                            <img src={MonetizeIcon1} alt="Dynamic Revenue Overlays" />
                        </div>
                        <div className="engage-feature-content">
                            <h3 className="engage-feature-title">Contextual Interaction Triggers</h3>
                            <p className="engage-feature-description">
                            Polls, reactions, CTAs at live game shifts powered by AI
                            </p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="engage-feature-item">
                        <div className="engage-feature-icon">
                            <img src={MonetizeIcon2} alt="AI-Powered SSAI Integration" />
                        </div>
                        <div className="engage-feature-content">
                            <h3 className="engage-feature-title">Works with or without SSAI stack.</h3>
                            <p className="engage-feature-description">
                                Advanced SSAI maps content peaks for perfect ad timing—boost CPMs by 40% with precise targeting.
                            </p>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="engage-feature-item">
                        <div className="engage-feature-icon">
                            <img src={MonetizeIcon3} alt="Context-Aware Monetization" />
                        </div>
                        <div className="engage-feature-content">
                            <h3 className="engage-feature-title">Context-Aware Monetization</h3>
                            <p className="engage-feature-description">
                                Offer advertisers rich insights and premium placements that boost engagement and conversions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EngageFeatures;
