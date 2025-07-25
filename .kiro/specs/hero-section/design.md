# Design Document

## Overview

The hero section will be implemented as a React functional component that creates an engaging first impression below the header. The design features a two-column layout on desktop with text content on the left and a product demonstration image on the right, supported by a decorative background ellipse that enhances visual appeal without affecting functionality.

## Architecture

### Component Structure
```
src/
├── components/
│   ├── HeroSection.jsx     # Main hero section component
│   └── CTAButton.jsx       # Reused CTA button component
└── styles/
    └── HeroSection.css     # Hero section styles
```

### Layout Strategy
- **Desktop (1440px+)**: Two-column layout with 60/40 split (text/image)
- **Tablet (768px-1439px)**: Scaled two-column layout with adjusted spacing
- **Mobile (<768px)**: Single column with text stacked above image

## Components and Interfaces

### HeroSection Component
```jsx
const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <img src={EllipseBackground} alt="" className="hero-ellipse" />
      </div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Turn user interactions into monetization and momentum
            </h1>
            <p className="hero-description">
              Canvas AEL (Adaptive Engagement Layer) transforms passive 
              content into a behavioral engine that drives real-time data and revenue
            </p>
            <CTAButton />
          </div>
          <div className="hero-image">
            <img src={SwipeUpAd} alt="Product demonstration" />
          </div>
        </div>
      </div>
    </section>
  );
};
```

### Background Ellipse Implementation
The ellipse will be positioned using CSS absolute positioning outside the normal document flow:
- `position: absolute` to remove from DOM flow
- `z-index: -1` to place behind content
- `pointer-events: none` to prevent interaction interference
- Responsive positioning using CSS custom properties

## Data Models

### Typography Hierarchy
```javascript
const TYPOGRAPHY = {
  heroTitle: {
    fontFamily: 'Montserrat',
    fontSize: {
      desktop: '48px',
      tablet: '40px',
      mobile: '32px'
    },
    fontWeight: 700,
    lineHeight: 1.2
  },
  heroDescription: {
    fontFamily: 'Montserrat',
    fontSize: {
      desktop: '18px',
      tablet: '16px',
      mobile: '16px'
    },
    fontWeight: 400,
    lineHeight: 1.6
  }
};
```

### Layout Breakpoints
```javascript
const BREAKPOINTS = {
  mobile: '768px',
  tablet: '1440px',
  desktop: '1441px'
};
```

## Styling Architecture

### CSS Custom Properties
```css
:root {
  --hero-padding: 80px 0;
  --hero-gap: 60px;
  --hero-max-width: 1440px;
  --font-family-montserrat: 'Montserrat', sans-serif;
  --hero-title-color: #000000;
  --hero-text-color: #333333;
  --hero-bg-color: #FFFFFF;
}
```

### Background Ellipse Positioning
```css
.hero-background {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: -1;
}

.hero-ellipse {
  position: absolute;
  top: -20%;
  right: -10%;
  width: 60%;
  height: auto;
  opacity: 0.8;
}
```

### Responsive Grid Layout
```css
.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--hero-gap);
  align-items: center;
  max-width: var(--hero-max-width);
  margin: 0 auto;
  padding: 0 32px;
}

@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
}
```

## Font Integration

### Montserrat Font Import
```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
```

### Font Application Strategy
- Import Montserrat with required weights (400, 500, 600, 700)
- Apply to hero section specifically while maintaining existing Nunito for header
- Ensure fallback fonts for loading states
- Optimize font loading with `font-display: swap`

## Image Optimization

### Product Image (Swipe up ad 1.png)
- Maintain aspect ratio across all devices
- Implement responsive sizing using CSS `max-width: 100%`
- Add proper alt text for accessibility
- Consider lazy loading for performance

### Background Ellipse (Ellipse 809.svg)
- Use as decorative element with empty alt attribute
- Position absolutely to avoid layout interference
- Optimize SVG for web delivery
- Implement responsive scaling

## Error Handling

### Image Loading
- Fallback handling for missing images
- Progressive enhancement approach
- Proper error boundaries for component failures

### Font Loading
- Fallback to system fonts if Montserrat fails
- Font loading optimization strategies
- Prevent layout shift during font loading

### Responsive Behavior
- Graceful degradation for unsupported CSS features
- Flexible layout that adapts to content changes
- Touch-friendly interaction areas on mobile

## Testing Strategy

### Visual Testing
- Cross-browser compatibility testing
- Responsive design validation across breakpoints
- Typography rendering consistency
- Background element positioning accuracy

### Performance Testing
- Image loading optimization
- Font loading performance
- Layout shift measurements
- Mobile performance validation

### Accessibility Testing
- Screen reader compatibility
- Keyboard navigation support
- Color contrast validation
- Focus management testing

## Implementation Notes

### Z-Index Management
- Hero background: `z-index: -1`
- Hero content: `z-index: 1`
- Ensure proper stacking context

### Performance Considerations
- Optimize image sizes for different breakpoints
- Implement efficient CSS for background positioning
- Consider using CSS transforms for better performance
- Minimize layout recalculations

### Content Strategy
- Ensure text content is easily editable
- Implement proper semantic HTML structure
- Consider internationalization requirements
- Plan for content management system integration