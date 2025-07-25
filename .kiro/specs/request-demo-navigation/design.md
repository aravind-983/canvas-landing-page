# Design Document

## Overview

This design implements a navigation system that allows all "Request Demo" buttons throughout the application to navigate users to the form section in the details section of the landing page. The solution provides a seamless user experience by combining React Router navigation with smooth DOM scrolling.

## Architecture

The solution follows a centralized approach using a custom React hook that handles both navigation and scrolling logic. This ensures consistency across all "Request Demo" buttons while maintaining code reusability.

### Key Components:
1. **Custom Hook (`useRequestDemoNavigation`)** - Centralized navigation logic
2. **Enhanced CTAButton Component** - Updated to support the navigation functionality
3. **Form Section Target** - The existing form section with ID `form-section` in DetailsSection.jsx

## Components and Interfaces

### 1. Custom Hook: `useRequestDemoNavigation`

```javascript
// src/hooks/useRequestDemoNavigation.js
import { useNavigate, useLocation } from 'react-router-dom';

const useRequestDemoNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToRequestDemo = () => {
    const scrollToForm = () => {
      const formSection = document.getElementById('form-section');
      if (formSection) {
        formSection.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    };

    if (location.pathname === '/') {
      // Already on landing page, just scroll
      scrollToForm();
    } else {
      // Navigate to landing page first, then scroll
      navigate('/');
      // Use setTimeout to ensure DOM is ready after navigation
      setTimeout(scrollToForm, 100);
    }
  };

  return { navigateToRequestDemo };
};

export default useRequestDemoNavigation;
```

### 2. Enhanced CTAButton Component

The CTAButton component will be updated to automatically handle "Request Demo" navigation when no custom onClick is provided and the button name contains "Request Demo" or "Request demo".

```javascript
// Updated CTAButton.jsx
import { useRequestDemoNavigation } from '../hooks/useRequestDemoNavigation';

const CTAButton = ({ 
    className = '', 
    name = 'Request demo', 
    backgroundColor = '',
    textColor = '',
    onClick
  }) => {
  const { navigateToRequestDemo } = useRequestDemoNavigation();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (name.toLowerCase().includes('request demo')) {
      navigateToRequestDemo();
    } else {
      console.log(`${name} clicked`);
    }
  };

  // Rest of component remains the same
};
```

### 3. Form Section Target

The existing form section in `src/Pages/LandingPage/components/DetailsSection.jsx` already has the correct ID (`form-section`) and will serve as the scroll target.

## Data Models

### Navigation State
- **Current Location**: Tracked via `useLocation()` hook
- **Target Element**: DOM element with ID `form-section`
- **Navigation Function**: Returned from custom hook

### Button Configuration
- **Button Name**: String that determines if auto-navigation should trigger
- **Custom onClick**: Optional override for default behavior
- **Navigation Trigger**: Activated when name contains "request demo" (case-insensitive)

## Error Handling

### Navigation Errors
- **Missing Form Section**: If `form-section` element is not found, navigation will complete but scrolling will be skipped silently
- **Navigation Failure**: React Router navigation errors will be handled by the router itself
- **Timing Issues**: setTimeout ensures DOM is ready after navigation before attempting to scroll

### Fallback Behavior
- **No Custom Hook**: If hook fails to load, buttons will fall back to console.log behavior
- **Scroll Failure**: If scrollIntoView fails, user will still be on the correct page
- **Browser Compatibility**: Uses standard scrollIntoView with smooth behavior (graceful degradation for older browsers)

## Testing Strategy

### Unit Tests
1. **Hook Testing**: Test `useRequestDemoNavigation` hook behavior
   - Test navigation when already on landing page
   - Test navigation from other pages
   - Test scroll behavior after navigation

2. **Component Testing**: Test CTAButton integration
   - Test automatic navigation trigger for "Request Demo" buttons
   - Test custom onClick override behavior
   - Test case-insensitive name matching

### Integration Tests
1. **End-to-End Navigation**: Test complete user journey
   - Click "Request Demo" from each page
   - Verify landing on correct form section
   - Test smooth scrolling behavior

2. **Cross-Page Testing**: Test from all pages containing "Request Demo" buttons
   - Header component (all pages)
   - Footer component (all pages)
   - MonetizePage components
   - EngagePage components
   - AboutPage components
   - LandingPage components

### Manual Testing Checklist
- [ ] Test from Header on each page
- [ ] Test from Footer on each page
- [ ] Test from MonetizePage sections
- [ ] Test from EngagePage sections
- [ ] Test from AboutPage sections
- [ ] Test from LandingPage sections
- [ ] Verify smooth scrolling behavior
- [ ] Test on different screen sizes
- [ ] Test browser back/forward behavior

## Implementation Notes

### Performance Considerations
- **Lazy Loading**: Hook only executes navigation logic when called
- **DOM Query Optimization**: Form section lookup only happens during navigation
- **Memory Management**: No persistent state or event listeners

### Accessibility
- **Keyboard Navigation**: Standard button behavior maintained
- **Screen Readers**: No impact on existing accessibility features
- **Focus Management**: Form section will receive focus after scroll

### Browser Compatibility
- **Modern Browsers**: Full smooth scrolling support
- **Legacy Browsers**: Graceful degradation to instant scroll
- **Mobile Devices**: Touch-friendly navigation maintained