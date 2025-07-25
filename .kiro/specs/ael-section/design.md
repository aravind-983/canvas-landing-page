# Design Document

## Overview

The AEL section will be implemented as a React functional component that showcases Canvas AEL's adaptive engagement technology. The design features a two-column layout with feature cards on the left and a product demonstration image on the right, enhanced by a decorative background ellipse.

## Architecture

### Component Structure
```
src/
├── components/
│   ├── AELSection.jsx      # Main AEL section component
│   └── CTAButton.jsx       # Reused CTA button component
└── styles/
    └── AELSection.css      # AEL section styles
```

### Layout Strategy
- **Desktop (1440px+)**: Two-column layout with features left, image right
- **Tablet (768px-1439px)**: Scaled two-column layout with adjusted spacing
- **Mobile (<768px)**: Single column with stacked content

## Components and Interfaces

### AELSection Component
```jsx
const AELSection = () => {
  const features = [
    {
      icon: Icon1,
      title: "AI HighPoint Automation",
      description: "Identifies peak engagement segments to lock — automatically",
      hasHighlight: true
    },
    {
      icon: Icon2,
      title: "Canvas Fingerprint",
      description: "Builds unique viewer interaction profiles based on contextual cues and consumption signals",
      badge: "Coming Soon",
      hasHighlight: false
    },
    {
      icon: Icon3,
      title: "Tiered pricing: by instance, per client, or data-unlock revenue share",
      description: "",
      hasHighlight: false
    }
  ];

  return (
    <section className="ael-section">
      <div className="ael-background">
        <img src={EllipseBackground} alt="" className="ael-ellipse" />
      </div>
      <div className="ael-container">
        <div className="ael-content">
          <div className="ael-text">
            <div className="section-accent"></div>
            <h2 className="ael-title">
              Canvas AEL: The Adaptive Engine That Captures Emotion. Triggers Action.
            </h2>
            <div className="ael-features">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
            <CTAButton />
          </div>
          <div className="ael-image">
            <img src={AELImage} alt="Canvas AEL Interface" />
          </div>
        </div>
      </div>
    </section>
  );
};
```

### FeatureCard Component
```jsx
const FeatureCard = ({ icon, title, description, badge, hasHighlight }) => {
  return (
    <div className={`feature-card ${hasHighlight ? 'highlighted' : ''}`}>
      <div className="feature-icon">
        <img src={icon} alt="" />
      </div>
      <div className="feature-content">
        <div className="feature-header">
          <h3 className="feature-title">{title}</h3>
          {badge && <span className="feature-badge">{badge}</span>}
        </div>
        {description && <p className="feature-description">{description}</p>}
      </div>
    </div>
  );
};
```

## Data Models

### Feature Interface
```javascript
{
  icon: string,           // Path to icon SVG
  title: string,          // Feature title
  description?: string,   // Feature description (optional)
  badge?: string,         // Badge text (optional)
  hasHighlight: boolean   // Whether to highlight the card
}
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
  --ael-padding: 120px 0;
  --ael-gap: 60px;
  --ael-max-width: 1200px;
  --ael-accent-color: #FD9D43;
  --ael-title-color: #000000;
  --ael-text-color: #666666;
  --ael-bg-color: #FFFFFF;
  --ael-card-border: #E5E5E5;
  --ael-card-highlight: #3FD1CC;
}
```

### Background Ellipse Positioning
```css
.ael-background {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: -1;
}

.ael-ellipse {
  position: absolute;
  top: -20%;
  right: -10%;
  width: 50%;
  height: auto;
  opacity: 0.6;
}
```

### Feature Cards Layout
```css
.ael-features {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 40px 0;
}

.feature-card {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px;
  border: 1px solid var(--ael-card-border);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.feature-card.highlighted {
  border-color: var(--ael-card-highlight);
  background: rgba(63, 209, 204, 0.05);
}
```

### Responsive Grid Layout
```css
.ael-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--ael-gap);
  align-items: center;
  max-width: var(--ael-max-width);
  margin: 0 auto;
  padding: 0 32px;
}

@media (max-width: 768px) {
  .ael-content {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
}
```

## Visual Design Elements

### Section Accent
- Golden accent line above the title
- 4px height, 60px width
- Color: `#FD9D43`

### Typography Hierarchy
- **Title**: Montserrat, 700 weight, 48px desktop / 32px mobile
- **Feature Titles**: Montserrat, 600 weight, 18px
- **Feature Descriptions**: Montserrat, 400 weight, 14px
- **Badge**: Montserrat, 500 weight, 12px

### Feature Card States
- **Default**: Light gray border, white background
- **Highlighted**: Teal border, light teal background
- **Hover**: Subtle shadow and transform

### Badge Styling
- "Coming Soon" badge with rounded corners
- Teal background color
- White text, small font size
- Positioned next to feature title

## Image Optimization

### AEL Product Image
- Maintain aspect ratio across all devices
- Implement responsive sizing using CSS `max-width: 100%`
- Add proper alt text for accessibility
- Consider lazy loading for performance

### Feature Icons
- SVG icons for crisp rendering at all sizes
- Consistent sizing (24px x 24px)
- Proper color theming
- Optimized for web delivery

### Background Ellipse
- Use as decorative element with empty alt attribute
- Position absolutely to avoid layout interference
- Implement responsive scaling
- Optimize SVG for web delivery

## Error Handling

### Image Loading
- Fallback handling for missing images
- Progressive enhancement approach
- Proper error boundaries for component failures

### Responsive Behavior
- Graceful degradation for unsupported CSS features
- Flexible layout that adapts to content changes
- Touch-friendly interaction areas on mobile

## Testing Strategy

### Visual Testing
- Cross-browser compatibility testing
- Responsive design validation across breakpoints
- Feature card interaction testing
- Background element positioning accuracy

### Accessibility Testing
- Screen reader compatibility
- Keyboard navigation support
- Color contrast validation
- Focus management testing

## Implementation Notes

### Z-Index Management
- AEL background: `z-index: -1`
- AEL content: `z-index: 1`
- Ensure proper stacking context

### Performance Considerations
- Optimize image sizes for different breakpoints
- Implement efficient CSS for background positioning
- Consider using CSS transforms for better performance
- Minimize layout recalculations

### Content Strategy
- Ensure feature descriptions are easily editable
- Implement proper semantic HTML structure
- Consider internationalization requirements
- Plan for content management system integration