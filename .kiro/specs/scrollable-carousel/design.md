# Design Document

## Overview

The scrollable carousel enhancement transforms the existing fade-based carousel into a horizontally scrollable interface while preserving all current functionality. The design leverages modern CSS scroll-snap properties combined with JavaScript touch/mouse event handling to create smooth, intuitive navigation. The implementation maintains the existing visual design, automatic rotation, and responsive behavior while adding manual scroll controls.

## Architecture

### Component Structure
The enhancement builds upon the existing Carousel component without breaking changes:

```
Carousel Component
├── Existing Structure (preserved)
│   ├── carousel-section
│   ├── carousel-container  
│   ├── carousel-title-container
│   └── carousel-content
└── New Scrollable Layer
    ├── scrollable-container (new wrapper)
    ├── scroll-content (slides container)
    ├── touch/mouse event handlers
    └── scroll position management
```

### Scroll Implementation Strategy
- **CSS Scroll Snap**: Primary mechanism for smooth slide transitions
- **JavaScript Event Handling**: Touch and mouse interaction management
- **Hybrid Approach**: Combines CSS scroll behavior with JS control for optimal UX

## Components and Interfaces

### Enhanced Carousel Component

**New State Management:**
```javascript
const [isUserInteracting, setIsUserInteracting] = useState(false);
const [scrollPosition, setScrollPosition] = useState(0);
const [touchStart, setTouchStart] = useState(null);
const [isDragging, setIsDragging] = useState(false);
```

**New Refs:**
```javascript
const scrollContainerRef = useRef(null);
const interactionTimeoutRef = useRef(null);
```

### Scroll Container Interface

**CSS Structure:**
- `.scrollable-container`: Outer wrapper with overflow-x: scroll
- `.scroll-content`: Inner container with display: flex
- `.scroll-slide`: Individual slide wrapper
- Scroll-snap properties for smooth slide alignment

**JavaScript Interface:**
- `handleTouchStart(event)`: Captures initial touch position
- `handleTouchMove(event)`: Tracks touch movement and prevents default when horizontal
- `handleTouchEnd(event)`: Determines if swipe threshold met and triggers slide change
- `handleMouseDown(event)`: Initiates mouse drag interaction
- `handleMouseMove(event)`: Tracks mouse drag movement
- `handleMouseUp(event)`: Completes mouse drag interaction
- `handleWheel(event)`: Processes horizontal mouse wheel events

### Scroll Position Management

**Slide Navigation:**
```javascript
const scrollToSlide = (slideIndex) => {
  const container = scrollContainerRef.current;
  const slideWidth = container.offsetWidth;
  container.scrollTo({
    left: slideIndex * slideWidth,
    behavior: 'smooth'
  });
};
```

**Position Synchronization:**
- Monitor scroll position changes
- Update currentSlide state based on scroll position
- Sync with existing automatic rotation logic

## Data Models

### Touch Interaction Model
```javascript
interface TouchInteraction {
  startX: number;
  startY: number;
  currentX: number;
  currentY: number;
  deltaX: number;
  deltaY: number;
  isHorizontal: boolean;
  threshold: number; // 50px minimum for slide change
}
```

### Scroll State Model
```javascript
interface ScrollState {
  currentSlide: number;
  isUserInteracting: boolean;
  scrollPosition: number;
  totalSlides: number;
  slideWidth: number;
  autoRotationPaused: boolean;
}
```

## Error Handling

### Touch Event Conflicts
- **Issue**: Touch events conflicting with page scroll
- **Solution**: Detect horizontal vs vertical swipes, only preventDefault for horizontal
- **Fallback**: If touch detection fails, maintain existing automatic rotation

### Browser Compatibility
- **Issue**: CSS scroll-snap support varies
- **Solution**: Feature detection with graceful degradation
- **Fallback**: JavaScript-only slide transitions for unsupported browsers

### Performance Considerations
- **Issue**: Frequent scroll event firing
- **Solution**: Throttle scroll event handlers using requestAnimationFrame
- **Optimization**: Use passive event listeners where possible

### Accessibility Concerns
- **Issue**: Screen readers and keyboard navigation
- **Solution**: Maintain ARIA labels and add keyboard event handlers
- **Enhancement**: Add focus management for slide transitions

## Testing Strategy

### Unit Tests
- Touch event handler logic
- Scroll position calculations
- Slide transition functions
- Timer reset functionality
- State synchronization between manual and automatic modes

### Integration Tests
- Touch gesture recognition accuracy
- Mouse interaction responsiveness
- Automatic rotation pause/resume behavior
- Responsive design compatibility
- Cross-browser scroll behavior

### User Experience Tests
- Swipe gesture sensitivity tuning
- Scroll smoothness across devices
- Visual feedback during interactions
- Performance on low-end devices
- Accessibility with screen readers

### Device-Specific Tests
- iOS Safari touch handling
- Android Chrome scroll behavior
- Desktop mouse wheel interactions
- Tablet hybrid touch/mouse scenarios
- Various screen sizes and orientations

## Implementation Notes

### CSS Scroll-Snap Configuration
```css
.scrollable-container {
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch; /* iOS momentum scrolling */
}

.scroll-slide {
  scroll-snap-align: start;
  flex-shrink: 0;
  width: 100%;
}
```

### Event Handler Optimization
- Use passive listeners for scroll events
- Implement touch event throttling
- Add proper cleanup in useEffect hooks
- Handle edge cases for rapid interactions

### Responsive Considerations
- Maintain existing breakpoint behavior
- Adjust touch target sizes for mobile
- Optimize scroll sensitivity per device type
- Preserve quote positioning across scroll states

### Performance Optimizations
- Lazy load slide content if expanded beyond 2 slides
- Use CSS transforms for smooth animations
- Minimize DOM manipulations during scroll
- Implement efficient state update patterns