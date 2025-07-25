# Design Document

## Overview

The responsive header component will be built as a React functional component that adapts to different screen sizes while maintaining the visual design from Figma. The header uses flexbox for layout management and CSS media queries for responsive behavior.

## Architecture

### Component Structure
```
src/
├── components/
│   ├── Header.jsx          # Main header component
│   ├── Navigation.jsx      # Navigation menu component
│   └── CTAButton.jsx       # Call-to-action button component
└── styles/
    ├── Header.css          # Header-specific styles
    ├── Navigation.css      # Navigation styles
    └── CTAButton.css       # CTA button styles
```

### Layout Strategy
- **Desktop (1440px+)**: Horizontal layout with logo left, navigation center, CTA right
- **Tablet (768px-1439px)**: Scaled version of desktop layout with adjusted spacing
- **Mobile (<768px)**: Logo left, hamburger menu right, collapsible navigation

## Components and Interfaces

### Header Component
```jsx
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <header className="header">
      <div className="header-container">
        <Logo />
        <Navigation isMobile={isMobileMenuOpen} />
        <CTAButton />
        <MobileMenuToggle onClick={toggleMobileMenu} />
      </div>
    </header>
  );
};
```

### Navigation Component
```jsx
const Navigation = ({ isMobile }) => {
  const navItems = [
    { label: 'Products', hasDropdown: true },
    { label: 'Pricing' },
    { label: 'Resources', isInactive: true },
    { label: 'FAQ' }
  ];
  
  return (
    <nav className={`navigation ${isMobile ? 'mobile' : 'desktop'}`}>
      {navItems.map(item => <NavItem key={item.label} {...item} />)}
    </nav>
  );
};
```

### CTAButton Component
```jsx
const CTAButton = () => {
  return (
    <button className="cta-button">
      <span>Request demo</span>
      <div className="cta-icon">
        <div className="gradient-bar"></div>
      </div>
    </button>
  );
};
```

## Data Models

### Navigation Item Interface
```javascript
{
  label: string,
  hasDropdown?: boolean,
  isInactive?: boolean,
  href?: string
}
```

### Responsive Breakpoints
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
  --header-bg: #FAFAFA;
  --header-shadow: 0px 0px 86px rgba(0, 0, 0, 0.25);
  --header-height: 105px;
  --header-border-radius: 24px;
  --font-family: 'Nunito', sans-serif;
  --cta-bg: #000000;
  --cta-text: #FFFFFF;
  --gradient: linear-gradient(108.37deg, #FD9D43 4.46%, #EDBF1B 31.06%, #3FD1CC 62.02%, #5B5FD1 97.33%);
}
```

### Responsive Design Strategy
1. **Mobile-first approach**: Base styles for mobile, then scale up
2. **Flexbox layout**: For flexible positioning and alignment
3. **CSS Grid**: For complex layout areas if needed
4. **Relative units**: Use rem, em, and percentages for scalability
5. **Media queries**: Breakpoint-based responsive behavior

### Key Style Classes
- `.header`: Main container with background, shadow, and border-radius
- `.header-container`: Inner container with max-width and padding
- `.logo`: Logo positioning and sizing
- `.navigation`: Navigation menu with flexbox layout
- `.nav-item`: Individual navigation items with hover states
- `.cta-button`: Call-to-action button with gradient icon
- `.mobile-menu-toggle`: Hamburger menu for mobile

## Error Handling

### Image Loading
- Fallback for logo if CanvasLogo.svg fails to load
- Alt text for accessibility
- Proper error boundaries for component failures

### Responsive Behavior
- Graceful degradation for unsupported CSS features
- Fallback layouts for extreme screen sizes
- Touch-friendly interaction areas on mobile

### Navigation States
- Active/inactive state management
- Dropdown menu error handling
- Mobile menu toggle state persistence

## Testing Strategy

### Unit Tests
- Component rendering with different props
- Mobile menu toggle functionality
- Navigation item click handlers
- Responsive breakpoint behavior

### Integration Tests
- Header integration with main app
- Navigation routing functionality
- CTA button click behavior

### Visual Regression Tests
- Desktop layout matches Figma design
- Mobile layout adapts correctly
- Hover and active states work properly

### Accessibility Tests
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance
- Focus management for mobile menu

## Implementation Notes

### Font Integration
- Import Nunito font from Google Fonts or local files
- Ensure font weights 600 and 700 are available
- Fallback to system fonts if Nunito fails to load

### Asset Management
- Use CanvasLogo.svg from src/assets/
- Optimize SVG for web delivery
- Implement proper image lazy loading if needed

### Performance Considerations
- Minimize CSS bundle size
- Use CSS-in-JS only if necessary
- Implement efficient re-rendering for mobile menu
- Consider using CSS transforms for animations