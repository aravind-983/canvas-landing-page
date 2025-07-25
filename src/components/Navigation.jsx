import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import DropdownArrow from '../assets/navigation/Drop-down-arrow.svg';
import '../styles/Navigation.css';

const Navigation = ({ isMobile, isOpen }) => {
    const navigate = useNavigate();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    
    const navItems = [
        { label: 'Products', hasDropdown: true },
        { label: 'About' },
        { label: 'Resources', isInactive: true },
        { label: 'FAQ' }
    ];

    const dropdownItems = [
        { label: 'Canvas Monetize', path: '/monetize' },
        { label: 'Canvas Engage', path: '/engage' }
    ];

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleNavClick = (item, e) => {
        e.preventDefault();
        
        if (item.label === 'Products' && item.hasDropdown) {
            setDropdownOpen(!dropdownOpen);
        } else if (item.label === 'About') {
            navigate('/about');
        } else {
            // For other nav items, keep the current behavior
            console.log(`${item.label} clicked`);
        }
    };

    const handleDropdownItemClick = (item, e) => {
        e.preventDefault();
        navigate(item.path);
        setDropdownOpen(false);
    };

    const getNavItemClass = (item) => {
        let className = 'nav-item';
        if (item.hasDropdown) className += ' has-dropdown';
        if (item.isInactive) className += ' inactive';
        return className;
    };

    const navigationClass = isMobile
        ? `navigation mobile ${isOpen ? 'open' : ''}`
        : 'navigation desktop';

    return (
        <nav className={navigationClass}>
            {navItems.map((item) => (
                <div key={item.label} className="nav-item-container" ref={item.hasDropdown ? dropdownRef : null}>
                    <a
                        href="#"
                        className={getNavItemClass(item)}
                        onClick={(e) => handleNavClick(item, e)}
                    >
                        {item.label}
                        {item.hasDropdown && (
                            <img 
                                src={DropdownArrow} 
                                alt="Dropdown" 
                                className={`dropdown-icon ${dropdownOpen ? 'rotated' : ''}`} 
                            />
                        )}
                    </a>
                    {item.hasDropdown && dropdownOpen && (
                        <div className="dropdown-menu">
                            {dropdownItems.map((dropdownItem) => (
                                <a
                                    key={dropdownItem.label}
                                    href="#"
                                    className="dropdown-item"
                                    onClick={(e) => handleDropdownItemClick(dropdownItem, e)}
                                >
                                    {dropdownItem.label}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </nav>
    );
};

export default Navigation;