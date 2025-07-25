import CTAButton from '../../../components/CTAButton';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import '../styles/monetizeFeatures.css';

// Import assets
import MonetizeIcon1 from '../assets/monetize-features/monetize-icon1.svg';
import MonetizeIcon2 from '../assets/monetize-features/monetize-icon2.svg';
import MonetizeIcon3 from '../assets/monetize-features/monetize-Icon3.svg';
import Ellipse811 from '../assets/monetize-features/Ellipse 811.svg';

const MonetizeFeatures = () => {
    const [sectionRef, isVisible] = useScrollAnimation();
    const [leftRef, isLeftVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });
    const [rightRef, isRightVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });

    return (
        <section ref={sectionRef} className={`monetize-features-section fade-in-section ${isVisible ? 'visible' : ''}`}>
            {/* Background ellipse */}
            <img src={Ellipse811} alt="" className="monetize-ellipse-811" />

            <div className="monetize-features-container">
                {/* Left Column - Main Content */}
                <div ref={leftRef} className={`monetize-main-content slide-in-left ${isLeftVisible ? 'visible' : ''}`}>
                    <h2 className="monetize-main-title">
                        Canvas Monetize weaves revenue natively.<br />
                        No interruptions.
                    </h2>

                    <p className="monetize-main-description">
                        Turn every interaction into revenue with precision AI.
                    </p>

                    <div className="monetize-cta-container">
                        <CTAButton
                            name="Request demo"
                            className="monetize-cta-button"
                        />
                    </div>
                </div>

                {/* Right Column - Features List */}
                <div ref={rightRef} className={`monetize-features-list slide-in-right ${isRightVisible ? 'visible' : ''}`}>
                    {/* Feature 1 */}
                    <div className="monetize-feature-item">
                        <div className="monetize-feature-icon">
                            <img src={MonetizeIcon1} alt="Dynamic Revenue Overlays" />
                        </div>
                        <div className="monetize-feature-content">
                            <h3 className="monetize-feature-title">Dynamic Revenue Overlays</h3>
                            <p className="monetize-feature-description">
                                Deploy smart monetization at peak moments—boost revenue through seamless micro-interactions.
                            </p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="monetize-feature-item">
                        <div className="monetize-feature-icon">
                            <img src={MonetizeIcon2} alt="AI-Powered SSAI Integration" />
                        </div>
                        <div className="monetize-feature-content">
                            <h3 className="monetize-feature-title">Works with or without SSAI stack.</h3>
                            <p className="monetize-feature-description">
                                Advanced SSAI maps content peaks for perfect ad timing—boost CPMs by 40% with precise targeting.
                            </p>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="monetize-feature-item">
                        <div className="monetize-feature-icon">
                            <img src={MonetizeIcon3} alt="Context-Aware Monetization" />
                        </div>
                        <div className="monetize-feature-content">
                            <h3 className="monetize-feature-title">Context-Aware Monetization</h3>
                            <p className="monetize-feature-description">
                                Offer advertisers rich insights and premium placements that boost engagement and conversions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MonetizeFeatures;
