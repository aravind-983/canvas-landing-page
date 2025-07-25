import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CTAButton from '../../../components/CTAButton';
import PlayIcon from '../assets/video-section/Play.png';
import MonetizeVideo from '../assets/video-section/Monetize Page.mov';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import '../styles/videoSection.css';

const VideoSection = () => {
    const videoRef = useRef(null);
    const navigate = useNavigate();
    const [sectionRef, isVisible] = useScrollAnimation();

    // Auto-play video when component mounts (always playing)
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch((error) => {
                console.log("Auto-play failed:", error);
            });
        }
    }, []);

    const handleWatchDemo = () => {
        navigate('/monetize/video');
    };

    return (
        <section ref={sectionRef} className={`video-section fade-in-section ${isVisible ? 'visible' : ''}`}>
            <div className="video-container">
                <div className="video-player-wrapper">
                    {/* Background Video */}
                    <video
                        ref={videoRef}
                        className="background-video"
                        muted
                        loop
                        poster=""
                    >
                        <source src={MonetizeVideo} type="video/mp4" />
                        <source src={MonetizeVideo} type="video/quicktime" />
                        Your browser does not support the video tag.
                        source</video>

                    {/* Video Overlay Content */}
                    <div className="video-overlay">
                        <div className="video-content">
                            <div className="video-text-content">
                                <h1 className="video-title">
                                    Turn Attention Into Revenue. Instantly
                                </h1>
                                <p className="video-description">
                                    Canvas Monetize inserts data-triggered & AI-driven overlays — forms, CTAs, paywalls — and context-aware SSAs!
                                </p>
                                <p className="video-subtitle">
                                    Built as infrastructure — not a front-end widget.
                                </p>

                                <div className="video-cta-container">
                                    <CTAButton
                                        name="Request demo"
                                        className="video-cta-button"
                                    />
                                </div>
                            </div>

                            {/* Watch Demo Video Button */}
                            <div className="watch-demo-container">
                                <button
                                    className="watch-demo-button"
                                    onClick={handleWatchDemo}
                                    aria-label="Watch demo video"
                                >
                                    <img
                                        src={PlayIcon}
                                        alt="Play"
                                        className="play-icon"
                                    />
                                    <span className="watch-demo-text">
                                        Watch demo video
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default VideoSection;