import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MonetizeVideo from '../MonetizePage/assets/video-section/Monetize Page.mov';
import CloseIcon from './Close.png';
import './VideoPlayer.css';

const MonetizeVideoPlayer = () => {
    const videoRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch((error) => {
                console.log("Auto-play failed:", error);
            });
        }
    }, []);

    const handleClose = () => {
        navigate(-1); // Go back to previous page
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            handleClose();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className="video-player-fullscreen">
            <button className="video-player-close" onClick={handleClose} aria-label="Close video">
                <img src={CloseIcon} alt="Close" className="close-icon" />
            </button>
            
            <video
                ref={videoRef}
                className="video-player-video"
                controls
                autoPlay
                muted={false}
            >
                <source src={MonetizeVideo} type="video/mp4" />
                <source src={MonetizeVideo} type="video/quicktime" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default MonetizeVideoPlayer;