import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import CanvasLogo from '../assets/header/CanvasLogo.png';
import Navigation from './Navigation';
import CTAButton from './CTAButton';
import '../styles/Header.css';



const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isAboutPage = location.pathname === '/about';
    
    const handleClickLogo = () => {
        navigate('/')
    }
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="header">
            <div className="header-container">
                <div className="logo" >
                <button onClick={handleClickLogo} className='logo-button-header'>
                    <img src={CanvasLogo} alt="Canvas Logo" />
                </button>
                </div>

                <Navigation isMobile={false} />


                <div className="header-right">
                    <CTAButton 
                        className="desktop-cta" 
                        name={isAboutPage ? "Join" : "Request demo"}
                    />
                    <CTAButton 
                        className="mobile-cta" 
                        name={isAboutPage ? "Join" : "Request demo"}
                    />
                    <button
                        className="mobile-menu-toggle"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>

            <Navigation isMobile={true} isOpen={isMobileMenuOpen} />
        </header>
    );
};

export default Header;