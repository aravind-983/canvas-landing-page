import CTAButton from '../../../components/CTAButton';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import '../styles/workSection.css';

// Import assets
import WorkImage1 from '../assets/work-section/Work-Image1.png';
import WorkImage2 from '../assets/work-section/Work-Image2.png';
import WorkImage3 from '../assets/work-section/Work-Image3.png';
import WorkImage4 from '../assets/work-section/Work-Image4.png';
import Ellipse812 from '../assets/work-section/Ellipse 812.svg';

// Import video assets
import CuePointsVideo from '../assets/work-section/Cue points.mov';
import TriggerInteractionsVideo from '../assets/work-section/Trigger Smart Interactions.mov';
import CaptureDataVideo from '../assets/work-section/Capture first party data.mov';
import DriveRevenueVideo from '../assets/work-section/Drive revenue & Insights.mp4';

const workStepVideos = [
    {
        id: 1,
        video: CuePointsVideo,
        image: WorkImage1,
        alt: "Define Cue-points process"
    },
    {
        id: 2,
        video: TriggerInteractionsVideo,
        image: WorkImage2,
        alt: "Trigger Smart Interactions process"
    },
    {
        id: 3,
        video: CaptureDataVideo,
        image: WorkImage3,
        alt: "Capture First-Party Data process"
    },
    {
        id: 4,
        video: DriveRevenueVideo,
        image: WorkImage4,
        alt: "Drive Revenue & Insights process"
    }
];

const WorkSection = () => {
    const [sectionRef, isVisible] = useScrollAnimation();
    const [titleRef, isTitleVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });
    const [gridRef, isGridVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });
    const [bottomRef, isBottomVisible] = useScrollAnimation({ rootMargin: '-50px 0px' });

    return (
        <section ref={sectionRef} className={`work-section fade-in-section ${isVisible ? 'visible' : ''}`}>
            <div className="hover-background-overlay"></div>
            {/* Background ellipse */}
            <img src={Ellipse812} alt="" className="work-ellipse-812" />

            <div className="work-container">
                {/* Section Title */}
                <h2 ref={titleRef} className={`work-title fade-in-section ${isTitleVisible ? 'visible' : ''}`}>How It works?</h2>

                {/* Work Steps Grid */}
                <div ref={gridRef} className={`work-steps-grid scale-in ${isGridVisible ? 'visible' : ''}`}>
                    {/* Step 1 */}
                    <div className="work-step-card">
                        <div className="work-step-video-container">
                            <video
                                src={workStepVideos[0].video}
                                className="work-step-video"
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="metadata"
                                disablePictureInPicture
                                controlsList="nodownload nofullscreen noremoteplayback"
                                alt={workStepVideos[0].alt}
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    const img = document.createElement('img');
                                    img.src = workStepVideos[0].image;
                                    img.alt = workStepVideos[0].alt;
                                    img.style.width = '100%';
                                    img.style.height = '100%';
                                    img.style.objectFit = 'cover';
                                    e.target.parentNode.appendChild(img);
                                }}
                            />
                        </div>
                        <div className="work-step-content">
                            <h3 className="work-step-title">Define Cue-points</h3>
                            <p className="work-step-description">
                                AI-powered detection or manual tagging of cue-points
                            </p>
                        </div>
                        <div className="work-step-badge" data-step="Step 1">Step 1</div>
                    </div>

                    {/* Step 2 */}
                    <div className="work-step-card">
                        <div className="work-step-video-container">
                            <video
                                src={workStepVideos[1].video}
                                className="work-step-video"
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="metadata"
                                disablePictureInPicture
                                controlsList="nodownload nofullscreen noremoteplayback"
                                alt={workStepVideos[1].alt}
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    const img = document.createElement('img');
                                    img.src = workStepVideos[1].image;
                                    img.alt = workStepVideos[1].alt;
                                    img.style.width = '100%';
                                    img.style.height = '100%';
                                    img.style.objectFit = 'cover';
                                    e.target.parentNode.appendChild(img);
                                }}
                            />
                        </div>
                        <div className="work-step-content">
                            <h3 className="work-step-title">Trigger Smart Interactions</h3>
                            <p className="work-step-description">
                                Overlay forms, polls, or unlocks based on in-stream
                            </p>
                        </div>
                        <div className="work-step-badge" data-step="Step 2">Step 2</div>
                    </div>

                    {/* Step 3 */}
                    <div className="work-step-card">
                        <div className="work-step-video-container">
                            <video
                                src={workStepVideos[2].video}
                                className="work-step-video"
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="metadata"
                                disablePictureInPicture
                                controlsList="nodownload nofullscreen noremoteplayback"
                                alt={workStepVideos[2].alt}
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    const img = document.createElement('img');
                                    img.src = workStepVideos[2].image;
                                    img.alt = workStepVideos[2].alt;
                                    img.style.width = '100%';
                                    img.style.height = '100%';
                                    img.style.objectFit = 'cover';
                                    e.target.parentNode.appendChild(img);
                                }}
                            />
                        </div>
                        <div className="work-step-content">
                            <h3 className="work-step-title">Capture First-Party Data</h3>
                            <p className="work-step-description">
                                Capture first-party data — emails, intent, payments
                            </p>
                        </div>
                        <div className="work-step-badge" data-step="Step 3">Step 3</div>
                    </div>

                    {/* Step 4 */}
                    <div className="work-step-card">
                        <div className="work-step-video-container">
                            <video
                                src={workStepVideos[3].video}
                                className="work-step-video"
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="metadata"
                                disablePictureInPicture
                                controlsList="nodownload nofullscreen noremoteplayback"
                                alt={workStepVideos[3].alt}
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    const img = document.createElement('img');
                                    img.src = workStepVideos[3].image;
                                    img.alt = workStepVideos[3].alt;
                                    img.style.width = '100%';
                                    img.style.height = '100%';
                                    img.style.objectFit = 'cover';
                                    e.target.parentNode.appendChild(img);
                                }}
                            />
                        </div>
                        <div className="work-step-content">
                            <h3 className="work-step-title">Drive Revenue & Insights</h3>
                            <p className="work-step-description">
                                Feed this into real-time dashboards or existing DMPs
                            </p>
                        </div>
                        <div className="work-step-badge" data-step="Step 4">Step 4</div>
                    </div>
                </div>

                {/* Bottom Content */}
                <div ref={bottomRef} className={`work-bottom-content fade-in-section ${isBottomVisible ? 'visible' : ''}`}>
                    <h3 className="work-bottom-title">
                        Canvas is built as adaptive infrastructure.
                        <span className="work-bottom-highlight"> No player dependency.</span> Works across CMS, OTT, and live feeds
                    </h3>

                    <div className="work-cta-container">
                        <CTAButton
                            name="Request demo"
                            className="work-cta-button"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkSection;