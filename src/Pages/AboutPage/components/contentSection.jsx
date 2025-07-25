import useScrollAnimation from '../../../hooks/useScrollAnimation';
import '../styles/contentSection.css';

// Import assets
import Icon1 from '../assets/content-section/Icon1.svg';
import Icon2 from '../assets/content-section/Icon2.svg';
import GroupIcon1 from '../assets/content-section/Group icon1.svg';
import GroupIcon2 from '../assets/content-section/Group icon2.svg';
import GroupIcon3 from '../assets/content-section/Group icon3.svg';

const ContentSection = () => {
    const [sectionRef, isVisible] = useScrollAnimation();
    const [titleRef, isTitleVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });
    const [leftRef, isLeftVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });
    const [rightRef, isRightVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });

    return (
        <section ref={sectionRef} className={`content-section fade-in-section ${isVisible ? 'visible' : ''}`}>
            <div className="content-container">
                {/* Main Title */}
                <h2 ref={titleRef} className={`content-main-title fade-in-section ${isTitleVisible ? 'visible' : ''}`}>
                    Reimagining Content Interactions for the<br />
                    Attention Economy
                </h2>

                {/* Content Grid */}
                <div className="content-grid">
                    {/* Left Column */}
                    <div ref={leftRef} className={`content-left-column slide-in-left ${isLeftVisible ? 'visible' : ''}`}>
                        <p className="content-intro-text">
                            Canvas delivers two powerful products built<br />
                            on a single adaptive infrastructure:
                        </p>

                        {/* Monetize Product */}
                        <div className="content-product-item">
                            <div className="content-product-icon">
                                <img src={Icon1} alt="Monetize" />
                            </div>
                            <div className="content-product-info">
                                <h3 className="content-product-title">Monetize</h3>
                                <p className="content-product-description">
                                    Dynamic overlays for OTT & CMS platforms<br />
                                    that drive opt-ins, leads, and revenue.
                                </p>
                            </div>
                        </div>

                        {/* Engage Product */}
                        <div className="content-product-item">
                            <div className="content-product-icon">
                                <img src={Icon2} alt="Engage" />
                            </div>
                            <div className="content-product-info">
                                <h3 className="content-product-title">Engage</h3>
                                <p className="content-product-description">
                                    Real-time fan intelligence for sports and live<br />
                                    content, triggered by emotion and event<br />
                                    data.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div ref={rightRef} className={`content-right-column slide-in-right ${isRightVisible ? 'visible' : ''}`}>
                        <h3 className="content-powered-title">Both are powered by:</h3>

                        {/* Powered By Features */}
                        <div className="content-features-grid">
                            {/* Feature 1 */}
                            <div className="content-feature-item">
                                <div className="content-feature-icon group">
                                    <img src={GroupIcon1} alt="Smart cue-based triggers" />
                                </div>
                                <div className="content-feature-info">
                                    <h4 className="content-feature-title">Smart cue-based<br />triggers</h4>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="content-feature-item">
                                <div className="content-feature-icon group">
                                    <img src={GroupIcon2} alt="Behavioral AI + Heatmaps" />
                                </div>
                                <div className="content-feature-info">
                                    <h4 className="content-feature-title">Behavioral   AI +<br />Heatmaps</h4>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="content-feature-item">
                                <div className="content-feature-icon group">
                                    <img src={GroupIcon3} alt="First-party, cookie-free signal capture" />
                                </div>
                                <div className="content-feature-info">
                                    <h4 className="content-feature-title">First-party, cookie-<br />free signal capture</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContentSection;