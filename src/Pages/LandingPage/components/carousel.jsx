import { useState, useEffect, useRef } from 'react';
import RobotImage from '../assets/carousel/Image1.png';
import OTT from '../assets/carousel/ott-studio.png';
import UpperQuote from '../assets/carousel/upper_quote.png';
import LowerQuote from '../assets/carousel/lower_quote.png';
import CTAButton from '../../../components/CTAButton';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import '../styles/Carousel.css';

const Carousel = () => {
    const [sectionRef, isVisible] = useScrollAnimation();
    const [titleRef, isTitleVisible] = useScrollAnimation({ rootMargin: '-100px 0px' });
    const [contentRef, isContentVisible] = useScrollAnimation({ rootMargin: '-50px 0px' });

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isUserInteracting, setIsUserInteracting] = useState(false);
    const [touchStart, setTouchStart] = useState(null);
    const [mouseStart, setMouseStart] = useState(null);
    const [isDragging, setIsDragging] = useState(false);

    // Refs for scroll container and interaction timeout
    const scrollContainerRef = useRef(null);
    const interactionTimeoutRef = useRef(null);

    // Scroll to specific slide function
    const scrollToSlide = (slideIndex) => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const slideWidth = container.offsetWidth;
        container.scrollTo({
            left: slideIndex * slideWidth,
            behavior: 'smooth'
        });
    };

    // Touch event handlers
    const handleTouchStart = (e) => {
        const touch = e.touches[0];
        setTouchStart({
            x: touch.clientX,
            y: touch.clientY,
            time: Date.now()
        });
        setIsUserInteracting(true);
    };

    const handleTouchMove = (e) => {
        if (!touchStart) return;

        const touch = e.touches[0];
        const deltaX = touch.clientX - touchStart.x;
        const deltaY = touch.clientY - touchStart.y;

        // Determine if this is a horizontal swipe
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            // Prevent vertical scrolling when horizontal swipe is detected
            e.preventDefault();
        }
    };

    const handleTouchEnd = (e) => {
        if (!touchStart) return;

        const touch = e.changedTouches[0];
        const deltaX = touch.clientX - touchStart.x;
        const deltaY = touch.clientY - touchStart.y;
        const deltaTime = Date.now() - touchStart.time;

        // Check if it's a horizontal swipe with sufficient distance and speed
        const isHorizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY);
        const isSignificantSwipe = Math.abs(deltaX) > 50; // 50px threshold
        const isFastSwipe = deltaTime < 300; // 300ms threshold

        if (isHorizontalSwipe && (isSignificantSwipe || isFastSwipe)) {
            if (deltaX > 0) {
                // Swipe right - go to previous slide
                setCurrentSlide((prev) => (prev - 1 + 2) % 2);
            } else {
                // Swipe left - go to next slide
                setCurrentSlide((prev) => (prev + 1) % 2);
            }
        }

        setTouchStart(null);

        // Reset interaction timeout
        if (interactionTimeoutRef.current) {
            clearTimeout(interactionTimeoutRef.current);
        }
        interactionTimeoutRef.current = setTimeout(() => {
            setIsUserInteracting(false);
        }, 5000); // 5 seconds of inactivity
    };

    // Mouse event handlers
    const handleMouseDown = (e) => {
        setMouseStart({
            x: e.clientX,
            y: e.clientY,
            time: Date.now()
        });
        setIsDragging(true);
        setIsUserInteracting(true);
        e.preventDefault(); // Prevent text selection
    };

    const handleMouseMove = (e) => {
        if (!isDragging || !mouseStart) return;

        const deltaX = e.clientX - mouseStart.x;
        const deltaY = e.clientY - mouseStart.y;

        // Visual feedback during drag (optional - can be enhanced later)
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            e.preventDefault();
        }
    };

    const handleMouseUp = (e) => {
        if (!isDragging || !mouseStart) return;

        const deltaX = e.clientX - mouseStart.x;
        const deltaY = e.clientY - mouseStart.y;
        const deltaTime = Date.now() - mouseStart.time;

        // Check if it's a horizontal drag with sufficient distance
        const isHorizontalDrag = Math.abs(deltaX) > Math.abs(deltaY);
        const isSignificantDrag = Math.abs(deltaX) > 50; // 50px threshold
        const isFastDrag = deltaTime < 300; // 300ms threshold

        if (isHorizontalDrag && (isSignificantDrag || isFastDrag)) {
            if (deltaX > 0) {
                // Drag right - go to previous slide
                setCurrentSlide((prev) => (prev - 1 + 2) % 2);
            } else {
                // Drag left - go to next slide
                setCurrentSlide((prev) => (prev + 1) % 2);
            }
        }

        setMouseStart(null);
        setIsDragging(false);

        // Reset interaction timeout
        if (interactionTimeoutRef.current) {
            clearTimeout(interactionTimeoutRef.current);
        }
        interactionTimeoutRef.current = setTimeout(() => {
            setIsUserInteracting(false);
        }, 5000); // 5 seconds of inactivity
    };

    // Mouse wheel handler for horizontal scrolling
    const handleWheel = (e) => {
        // Check if it's a horizontal scroll (shift + wheel or trackpad horizontal)
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
            e.preventDefault();
            setIsUserInteracting(true);

            if (e.deltaX > 0) {
                // Scroll right - go to next slide
                setCurrentSlide((prev) => (prev + 1) % 2);
            } else {
                // Scroll left - go to previous slide
                setCurrentSlide((prev) => (prev - 1 + 2) % 2);
            }

            // Reset interaction timeout
            if (interactionTimeoutRef.current) {
                clearTimeout(interactionTimeoutRef.current);
            }
            interactionTimeoutRef.current = setTimeout(() => {
                setIsUserInteracting(false);
            }, 5000);
        }
    };

    // Keyboard event handler for accessibility
    const handleKeyDown = (e) => {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            setIsUserInteracting(true);
            setCurrentSlide((prev) => (prev - 1 + 2) % 2);

            // Reset interaction timeout
            if (interactionTimeoutRef.current) {
                clearTimeout(interactionTimeoutRef.current);
            }
            interactionTimeoutRef.current = setTimeout(() => {
                setIsUserInteracting(false);
            }, 5000);
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            setIsUserInteracting(true);
            setCurrentSlide((prev) => (prev + 1) % 2);

            // Reset interaction timeout
            if (interactionTimeoutRef.current) {
                clearTimeout(interactionTimeoutRef.current);
            }
            interactionTimeoutRef.current = setTimeout(() => {
                setIsUserInteracting(false);
            }, 5000);
        }
    };

    // Sync currentSlide with scroll position
    useEffect(() => {
        scrollToSlide(currentSlide);
    }, [currentSlide]);

    // Auto-scroll functionality
    useEffect(() => {
        if (isUserInteracting) return; // Don't auto-scroll when user is interacting

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % 2);
        }, 3000); // 3 seconds between slides

        return () => clearInterval(interval);
    }, [isUserInteracting]);

    // Cleanup effect for interaction timeout
    useEffect(() => {
        return () => {
            if (interactionTimeoutRef.current) {
                clearTimeout(interactionTimeoutRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className={`carousel-section fade-in-section ${isVisible ? 'visible' : ''}`}>
            <div className="carousel-container">
                <div ref={titleRef} className={`carousel-title-container scale-in ${isTitleVisible ? 'visible' : ''}`}>
                    <h2 className="carousel-title">
                        Canvas AEL: Powering <span className="highlight">ENGAGEMENT</span> & <span className="highlight">MONETIZATION</span>
                        <br />
                        across your content ecosystem
                    </h2>
                </div>

                <div ref={contentRef} className={`carousel-content slide-in-right ${isContentVisible ? 'visible' : ''}`}>
                    <div
                        ref={scrollContainerRef}
                        className="scrollable-container"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onWheel={handleWheel}
                        onKeyDown={handleKeyDown}
                        tabIndex={0}
                        role="region"
                        aria-label="Interactive carousel - use arrow keys to navigate"
                    >
                        <div className="scroll-content">
                            {/* Slide 1 - Robot */}
                            <div className="scroll-slide">
                                <div className="quote-container">
                                    {/* Upper Quote */}
                                    <img src={UpperQuote} alt="" className="upper-quote" />

                                    <div className="content-box">
                                        <div className="content-left">
                                            <div className="robot-container">
                                                <img src={RobotImage} alt="AI Robot" className="robot-image" />
                                            </div>
                                            <div className="testimonial-text">
                                                <p>"With Canvas AEL, we finally started unlocking real insights and conversions from our video content."</p>
                                            </div>
                                        </div>

                                        <div className="content-right">
                                            <div className="stats-container">
                                                <div className="stat-item">
                                                    <div className="stat-number">3X</div>
                                                    <div className="stat-label"><p>Higher video completion</p></div>
                                                </div>
                                                <div className="stat-item">
                                                    <div className="stat-number">40%</div>
                                                    <div className="stat-label"><p>Data capture boost</p></div>
                                                </div>
                                                <div className="stat-item">
                                                    <div className="stat-number">5-10%</div>
                                                    <div className="stat-label"><p>Better campaign outcomes</p></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Lower Quote */}
                                    <img src={LowerQuote} alt="" className="lower-quote" />
                                </div>
                            </div>

                            {/* Slide 2 - OTT Studio */}
                            <div className="scroll-slide">
                                <div className="quote-container">
                                    {/* Upper Quote */}
                                    <img src={UpperQuote} alt="" className="upper-quote" />

                                    <div className="content-box">
                                        <div className="content-left">
                                            <div className="robot-container">
                                                <div className="robot-container">
                                                    <img src={OTT} alt="OTT STUDIO" className="robot-image" />
                                                </div>
                                            </div>
                                            <div className="testimonial-text">
                                                <p>"Canvas gave us audience intelligence and monetization — without interrupting user flow."</p>
                                            </div>
                                        </div>

                                        <div className="content-right">
                                            <div className="stats-container">
                                                <div className="stat-item">
                                                    <div className="stat-number">2X</div>
                                                    <div className="stat-label"><p>Increase in First-party-data capture</p></div>
                                                </div>
                                                <div className="stat-item">
                                                    <div className="stat-number">22%</div>
                                                    <div className="stat-label"><p>Boost in revenue per user</p></div>
                                                </div>
                                                <div className="stat-item">
                                                    <div className="stat-number">35%</div>
                                                    <div className="stat-label"><p>Reduction in viewer churn</p></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Lower Quote */}
                                    <img src={LowerQuote} alt="" className="lower-quote" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-cta-container">
                        <CTAButton />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Carousel;