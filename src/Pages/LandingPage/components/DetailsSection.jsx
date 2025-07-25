import React from 'react';
import '../styles/DetailsSection.css';
import CTAButton from '../../../components/CTAButton';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import { useFormModal } from '../../../contexts/FormModalContext';

// Import assets
import DetailsIcon1 from '../assets/details-section/details-icon1.svg';
import DetailsIcon2 from '../assets/details-section/details-icon2.svg';
import DetailsIcon3 from '../assets/details-section/details-icon3.svg';
import Ellipse812 from '../assets/details-section/Ellipse 812.svg';
import Ellipse813 from '../assets/details-section/Ellipse 813.svg';
import MeetDrapers from '../assets/details-section/the-drapers.svg';
import Mathrubumi from '../assets/details-section/mathrubhumi.svg';
import TheHindu from '../assets/details-section/the-hindu.svg';

const DetailsSection = () => {
    const [sectionRef, isVisible] = useScrollAnimation();
    const [titleRef, isTitleVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });
    const [featuresRef, isFeaturesVisible] = useScrollAnimation({ rootMargin: '-50px 0px' });
    const [bottomRef, isBottomVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });

    // Use shared form data from context
    const { formData, handleInputChange, handleSubmit } = useFormModal();

    return (
        <section ref={sectionRef} className={`details-section fade-in-section ${isVisible ? 'visible' : ''}`}>
            {/* Background ellipses */}
            <img src={Ellipse813} alt="" className="ellipse-813" />
            <img src={Ellipse812} alt="" className="ellipse-812" />

            <div className="details-container">
                {/* Top section with feature cards */}
                <div className="features-section">
                    <h2 ref={titleRef} className={`features-title scale-in ${isTitleVisible ? 'visible' : ''}`}>What powers Engagement & Monetization?</h2>

                    <div ref={featuresRef} className={`features-grid slide-in-up ${isFeaturesVisible ? 'visible' : ''}`}>
                        {/* Feature Card 1 */}
                        <div className="skew-wrapper">
                            <div className="details-feature-card-wrapper">

                                <div className="details-feature-card">
                                    <div className="feature-icon">
                                        <img src={DetailsIcon1} alt="First-Party Data Collection" />
                                    </div>
                                    <h3 className="feature-title">First-Party Data Collection</h3>
                                    <p className="feature-description">
                                        Zero-cookie capture from real moments and intent shifts
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Feature Card 2 */}
                        <div className="skew-wrapper">
                            <div className="details-feature-card-wrapper">

                                <div className="details-feature-card">
                                    <div className="feature-icon">
                                        <img src={DetailsIcon2} alt="Interaction Trigger Engine" />
                                    </div>
                                    <h3 className="feature-title">Interaction Trigger Engine</h3>
                                    <p className="feature-description">
                                        Forms appear during content spikes, not random ad breaks
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Feature Card 3 */}
                        <div className="skew-wrapper">
                            <div className="details-feature-card-wrapper">

                                <div className="details-feature-card">
                                    <div className="feature-icon">
                                        <img src={DetailsIcon3} alt="Platform Intelligence" />
                                    </div>
                                    <h3 className="feature-title">Platform Intelligence</h3>
                                    <p className="feature-description">
                                        Unified tracking across Fire TV, Web, Mobile
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom section with content and form */}
                <div ref={bottomRef} className={`bottom-section slide-in-right ${isBottomVisible ? 'visible' : ''}`}>
                    <div className="content-section">
                        <h2 className="content-title">Capture Value, Not Just Views.</h2>

                        <div className="featured-section">
                            <p className="featured-label">As Featured On</p>
                            <div className="details-logos-container">
                                <img src={MeetDrapers} alt="Meet The Drapers" className="details-logo" />
                                <img src={Mathrubumi} alt="Mathrubumi" className="details-logo" />
                                <img src={TheHindu} alt="The Hindu" className="details-logo" />
                            </div>
                        </div>
                    </div>

                    <div id="form-section" className="form-section">
                        <h3 className="form-title">Have Questions? Schedule a demo</h3>

                        <form onSubmit={handleSubmit} className="demo-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="firstName">First Name*</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName">Last Name*</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="email">Email*</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="companyName">Company Name</label>
                                    <input
                                        type="text"
                                        id="companyName"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className="details-cta-container">
                                <CTAButton
                                    name='Submit'
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailsSection;