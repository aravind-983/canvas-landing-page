import CTAButton from '../../../components/CTAButton';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import '../styles/workSection.css';

// Import assets
import WorkImage1 from '../assets/work-section/Work-Image1.png';
import WorkImage2 from '../assets/work-section/Work-Image2.png';
import WorkImage3 from '../assets/work-section/Work-Image3.png';
import WorkImage4 from '../assets/work-section/Work-Image4.png';
import Ellipse812 from '../assets/work-section/Ellipse 812.svg';

import TapIntoSportsVideo from '../assets/work-section/Tap into live sports.mp4';
import DeploySDKVideo from '../assets/work-section/Deploy Canvas SDKs.mp4';
import CaptureFirstPartyDataVideo from '../assets/work-section/Capture first party data.mp4';
import AnalyzeVideo from '../assets/work-section/Analyze in real-time.mp4';

const workStepVideos = [
    {
        id: 1,
        video: TapIntoSportsVideo,
        image: WorkImage1,
        alt: "Tap into Live Sports APIs process"
    },
    {
        id: 2,
        video: DeploySDKVideo,
        image: WorkImage2,
        alt: "Deploy Canvas SDKs process"
    },
    {
        id: 3,
        video: CaptureFirstPartyDataVideo,
        image: WorkImage3,
        alt: "Capture First-Party Data process"
    },
    {
        id: 4,
        video: AnalyzeVideo,
        image: WorkImage4,
        alt: "Analyze in Real Time process"
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
                            <h3 className="work-step-title">Tap into Live Sports
                                APIs</h3>
                            <p className="work-step-description">
                                Integrate with providers like Stats Perform or Sportradar for real-time event data.
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
                            <h3 className="work-step-title">Deploy Canvas SDKs
                            </h3>
                            <p className="work-step-description">
                                Lightweight overlays—polls, predictions, reactions—triggered by live moments.
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
                                Capture fan intent and emotion—without disrupting the stream.
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

                            <h3 className="work-step-title">Analyze in Real Time</h3>
                            <p className="work-step-description">Monetize with leads, conversions etc. track it live through the engagement dashboard
                            </p>
                        </div>
                        <div className="work-step-badge" data-step="Step 4">Step 4</div>
                    </div>
                </div>

                {/* Bottom Content */}
                <div ref={bottomRef} className={`work-bottom-content fade-in-section ${isBottomVisible ? 'visible' : ''}`}>
                    <h3 className="work-bottom-title">
                        Canvas is built as adaptive infrastructure. 
                        <span className="work-bottom-highlight">No player dependency.</span> Works across CMS, OTT, and live feeds
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