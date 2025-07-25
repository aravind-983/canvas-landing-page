import { useNavigate, useLocation } from 'react-router-dom';

const useRequestDemoNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToRequestDemo = () => {
    const scrollToForm = () => {
      try {
        const formSection = document.getElementById('form-section');
        if (formSection) {
          // Get header height from CSS variable with fallback
          const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 80;
          const elementPosition = formSection.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerHeight - 20; // 20px extra padding
          
          // Check if browser supports smooth scrolling
          if ('scrollBehavior' in document.documentElement.style) {
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          } else {
            // Fallback for older browsers
            window.scrollTo(0, offsetPosition);
          }
        } else {
          console.warn('Form section not found - navigation completed but scroll skipped');
        }
      } catch (error) {
        console.error('Error during scroll navigation:', error);
        // Fallback: try simple scrollIntoView
        const formSection = document.getElementById('form-section');
        if (formSection) {
          formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    try {
      if (location.pathname === '/') {
        // Already on landing page, just scroll
        scrollToForm();
      } else {
        // Navigate to landing page first, then scroll
        navigate('/');
        // Use setTimeout to ensure DOM is ready after navigation
        setTimeout(scrollToForm, 100);
      }
    } catch (error) {
      console.error('Error during navigation:', error);
      // Fallback: try to navigate to landing page without scrolling
      try {
        navigate('/');
      } catch (navError) {
        console.error('Critical navigation error:', navError);
      }
    }
  };

  return { navigateToRequestDemo };
};

export default useRequestDemoNavigation;