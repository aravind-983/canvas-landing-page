import useScrollAnimation from '../../../hooks/useScrollAnimation';
import CTAButton from '../../../components/CTAButton';
import '../styles/ImpactSection.css';

const ImpactSection = () => {
    const [sectionRef, isVisible] = useScrollAnimation();
    const [statsRef, isStatsVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });
    const [ctaRef, isCtaVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });

    return (
        <section ref={sectionRef} className={`impact-section fade-in-section ${isVisible ? 'visible' : ''}`}>
            {/* Top Section - Statistics */}
            <div className="impact-stats-section">
                <div className="impact-stats-container">
                    <h2 className="impact-stats-title">Where we're going?</h2>
                    <p className="impact-stats-subtitle">
                    We’re unlocking a new layer of monetization — one built on <br /> behavior, not just views.
                    </p>
                    
                    <h3 className="impact-partners-title">Our partners are seeing:</h3>
                    
                    <div ref={statsRef} className={`impact-stats-grid scale-in ${isStatsVisible ? 'visible' : ''}`}>
                        {/* Stat 1 - Data Capture */}
                        <div className="impact-stat-item">
                            <div className="impact-stat-number">
                                2–3X
                                <span className="impact-stat-arrow up">▲</span>
                            </div>
                            <div className="impact-stat-label">Boosts in data capture</div>
                        </div>

                        {/* Stat 2 - Revenue Lift */}
                        <div className="impact-stat-item">
                            <div className="impact-stat-number">
                                20–30%
                                <span className="impact-stat-arrow up">▲</span>
                            </div>
                            <div className="impact-stat-label">Revenue lift</div>
                        </div>

                        {/* Stat 3 - Viewer Churn */}
                        <div className="impact-stat-item">
                            <div className="impact-stat-number">
                                5%
                                <span className="impact-stat-arrow down">▼</span>
                            </div>
                            <div className="impact-stat-label">In viewer churn</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section - CTA */}
            <div className="impact-cta-section">
                <div ref={ctaRef} className={`impact-cta-container fade-in-section ${isCtaVisible ? 'visible' : ''}`}>
                    <p className="impact-cta-description">
                        Canvas is more than an engagement skin — it's a signal engine
                        that monetizes behavior across every video surface.
                    </p>
                    
                    <div className="impact-cta-button-container">
                        <CTAButton 
                            name="Request Demo"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ImpactSection;