import CTAButton from '../../../components/CTAButton';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import '../styles/clientStats.css';

// Import assets
import Image1 from '../assets/client-stats/Image1.png';
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
                                <img src={Image1} alt="Mascot Robot" />
                            </div>
                            <blockquote className="testimonial-quote">
                            “We didn’t know we were missing these signals until Canvas showed us.” 
                            </blockquote>
                            <cite className="testimonial-author">
                            - Founder, Animaker
                            </cite>
                        </div>
                    </div>

                    {/* Right Side - Statistics Card */}
                    <div className="client-stats-card-right">
                        <div className="client-stats-grid">
                            <div className="client-stat-item">
                                <div className="client-stat-number">3X</div>
                                <div className="client-stat-label">Higher video completion</div>
                            </div>

                            <div className="client-stat-item">
                                <div className="client-stat-number">40%</div>
                                <div className="client-stat-label">Data capture boost</div>
                            </div>

                            <div className="client-stat-item">
                                <div className="client-stat-number">5-10%</div>
                                <div className="client-stat-label">Better campaign outcomes</div>
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