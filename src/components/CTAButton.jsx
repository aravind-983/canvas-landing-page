import ArrowRight from '../assets/ctabutton/Arrow-right.svg';
import '../styles/CTAButton.css';
import { useFormModal } from '../contexts/FormModalContext';

const CTAButton = ({ 
    className = '', 
    name = 'Request demo', 
    backgroundColor = '',
    textColor = '',
    onClick
  }) => {
  const { openModal } = useFormModal();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (name.toLowerCase().includes('request demo')) {
      openModal();
    } else {
      console.log(`${name} clicked`);
    }
  };

  return (
    <button className={`cta-button ${className}`} onClick={handleClick} style={{
        backgroundColor : backgroundColor,
        color : textColor
    }}>
      <span>{name}</span>
      <div className="cta-icon">
        <div className="gradient-bar">
          <img src={ArrowRight} alt="Arrow right" className="arrow-icon" />
        </div>
      </div>
    </button>
  );
};

export default CTAButton;
