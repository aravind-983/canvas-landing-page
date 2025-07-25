import { useState } from 'react';
import Stars from '../assets/product-section/Stars.svg';
import EllipseBackground from '../assets/product-section/Ellipse 810.svg';
import MonetizeVideo1 from '../assets/product-section/Monetize videos/Cue points.mov';
import MonetizeVideo2 from '../assets/product-section/Monetize videos/Answer poll.mov';
import MonetizeVideo3 from '../assets/product-section/Monetize videos/Behavorial.mov';
import EngageVideo1 from '../assets/product-section/Engage videos/Trigger real-time overlays.mp4';
import EngageVideo2 from '../assets/product-section/Engage videos/Capture fan data.mp4';
import EngageVideo3 from '../assets/product-section/Engage videos/Built on live sports.mp4';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import '../styles/ProductSection.css';

const monetizeCards = [
    {
        video: MonetizeVideo1,
        desc: 'Insert cue-based forms, polls, or paywalls',
    },
    {
        video: MonetizeVideo2,
        desc: 'Capture first-party data (emails, intent) without disrupting UX',
    },
    {
        video: MonetizeVideo3,
        desc: 'Unlock new revenue via behavioral data signals',
    },
];

const engageCards = [
    {
        video: EngageVideo1,
        desc: 'Trigger real-time overlays for enhanced engagement.',
    },
    {
        video: EngageVideo2,
        desc: 'Capture fan data seamlessly during live events.',
    },
    {
        video: EngageVideo3,
        desc: 'Built on live sports technology for maximum impact.',
    },
];

const descText = ["Trigger forms, paywalls, and data CTAs inside the stream — no pause, just smarter timing.", "Let fans react, vote, and predict live — emotion-aware overlays turn attention into signal data."];


const ProductSection = () => {
    const [activeProduct, setActiveProduct] = useState('monetize');

    const [sectionRef, isVisible] = useScrollAnimation();
    const [headerRef, isHeaderVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });
    const [toggleRef, isToggleVisible] = useScrollAnimation({ rootMargin: '-50px 0px' });

    const handleToggle = () => {
        setActiveProduct((prev) => (prev === 'monetize' ? 'engage' : 'monetize'));
    };

    return (
        <section
            ref={sectionRef}
            className={`product-section fade-in-section ${isVisible ? 'visible' : ''}`}
        >
            <div className="hover-background-overlay"></div>
            <div className="product-ellipse">
                <img src={EllipseBackground} alt="" />
            </div>
            <div className="product-container">
                <div
                    ref={headerRef}
                    className={`product-header scale-in ${isHeaderVisible ? 'visible' : ''}`}
                >
                    <div className="header-content">
                        <div className="stars-cluster">
                            <img src={Stars} alt="" className="star-cluster" />
                        </div>
                        <h2 className="product-title">
                            Two Products. One Adaptive Intelligence
                            <br />
                            Backbone.
                        </h2>
                    </div>
                </div>

                <div
                    ref={toggleRef}
                    className={`product-toggle fade-in-section ${isToggleVisible ? 'visible' : ''}`}
                >
                    <span className={`toggle-label ${activeProduct === 'monetize' ? 'active' : ''}`}>
                        Canvas Monetize
                    </span>
                    <button
                        className="toggle-switch"
                        onClick={handleToggle}
                        aria-label="Toggle between Canvas Monetize and Canvas Engage"
                    >
                        <div className={`toggle-handle ${activeProduct === 'monetize' ? 'left' : 'right'}`} />
                    </button>
                    <span className={`toggle-label ${activeProduct === 'engage' ? 'active' : ''}`}>
                        Canvas Engage
                    </span>
                </div>
                <p className="product-desc">
                    <span className={`desc-text ${activeProduct === 'monetize' ? 'visible' : 'hidden'}`}>
                        {descText[0]}
                    </span>
                    <span className={`desc-text ${activeProduct === 'engage' ? 'visible' : 'hidden'}`}>
                        {descText[1]}
                    </span>
                </p>


                {/* Scrollable container */}
                <div className={`card-transition-wrapper ${activeProduct}`}>
                    <div className={`card-group fade-slide ${activeProduct === 'monetize' ? 'visible' : 'hidden'}`}>
                        {monetizeCards.map((card, idx) => (
                            <div
                                className="product-feature-card"
                                key={`monetize-${idx}`}
                            >
                                <div className="card-thumbnail">
                                    <video
                                        src={card.video}
                                        className="product-video"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        disablePictureInPicture
                                        controlsList="nodownload nofullscreen noremoteplayback"
                                    />
                                </div>
                                <p className="card-description">{card.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className={`card-group fade-slide ${activeProduct === 'engage' ? 'visible' : 'hidden'}`}>
                        {engageCards.map((card, idx) => (
                            <div
                                className="product-feature-card"
                                key={`engage-${idx}`}
                            >
                                <div className="card-thumbnail">
                                    <video
                                        src={card.video}
                                        className="product-video"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        disablePictureInPicture
                                        controlsList="nodownload nofullscreen noremoteplayback"
                                    />
                                </div>
                                <p className="card-description">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </section>
    );
};

export default ProductSection;
