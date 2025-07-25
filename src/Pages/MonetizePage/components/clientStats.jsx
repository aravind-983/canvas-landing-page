import CTAButton from '../../../components/CTAButton';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import '../styles/clientStats.css';

// Import assets
import OTTLogo from '../assets/client-stats/OTT.png';
import Ellipse813 from '../assets/client-stats/Ellipse 813.svg';

const ClientStats = () => {
    const [sectionRef, isVisible] = useScrollAnimation();
    const [titleRef, isTitleVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });
    const [cardRef, isCardVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });

    return (
        <section ref={sectionRef} className={`client-stats-section fade-in-section ${isVisible ? 'visible' : ''}`}>
            {/* Background ellipse */}
            <img src={Ellipse813} alt="" className="client-stats-ellipse-813" />

            <div className="client-stats-container">
                {/* Section Title */}
                <h2 ref={titleRef} className={`client-stats-title fade-in-section ${isTitleVisible ? 'visible' : ''}`}>What our clients are saying?</h2>

                {/* Main Content Container */}
                <div ref={cardRef} className={`client-stats-card scale-in ${isCardVisible ? 'visible' : ''}`}>
                    {/* Left Side - Testimonial Card */}
                    <div className="client-testimonial-card">
                        <div className="client-testimonial">
                            <div className="client-logo">
                                <img src={OTTLogo} alt="OTT Studio" />
                            </div>
                            <blockquote className="testimonial-quote">
                            “Canvas gave us data we never had — and revenue we never expected. ”
                            </blockquote>
                            <cite className="testimonial-author">
                             — James, Founder, OTT Studio
                            </cite>
                        </div>
                    </div>

                    {/* Right Side - Statistics Card */}
                    <div className="client-stats-card-right">
                        <div className="client-stats-grid">
                            <div className="client-stat-item">
                                <div className="client-stat-number">2X</div>
                                <div className="client-stat-label">Increase in First-party-data capture</div>
                            </div>

                            <div className="client-stat-item">
                                <div className="client-stat-number">22%</div>
                                <div className="client-stat-label">Boost in revenue per user</div>
                            </div>

                            <div className="client-stat-item">
                                <div className="client-stat-number">35%</div>
                                <div className="client-stat-label">Reduction in viewer churn</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="client-stats-cta-container">
                    <CTAButton
                        name="Request demo"
                        className="client-stats-cta-button"
                    />
                </div>
            </div>
        </section>
    );
};

export default ClientStats;