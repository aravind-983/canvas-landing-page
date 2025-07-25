# Project Structure

## Root Level Organization

```
├── public/           # Static assets served directly
├── src/             # Source code
├── .kiro/           # Kiro AI assistant configuration
├── node_modules/    # Dependencies (auto-generated)
├── package.json     # Project configuration and dependencies
├── vite.config.js   # Vite build configuration
├── eslint.config.js # ESLint configuration
└── index.html       # Entry HTML file
```

## Source Directory (`src/`)

```
src/
├── components/      # Reusable React components (empty, ready for use)
├── assets/         # Static assets (images, icons, etc.)
├── styles/         # Additional CSS files (empty, ready for use)
├── App.jsx         # Main application component
├── App.css         # Application-specific styles
├── main.jsx        # React application entry point
└── index.css       # Global styles
```

## File Naming Conventions

- **Components**: PascalCase for files and exports (`App.jsx`, `MyComponent.jsx`)
- **Styles**: kebab-case or match component name (`App.css`, `index.css`)
- **Assets**: lowercase with descriptive names (`react.svg`, `logo.png`)
- **Utilities**: camelCase for JavaScript files

## Import Patterns

- Relative imports for local files (`./App.jsx`, `./assets/react.svg`)
- Absolute imports from public directory (`/vite.svg`)
- CSS imports alongside component imports
- ES6 module syntax throughout

## Component Organization

- Each major component should have its own file in `src/components/`
- Component-specific styles can be co-located or in `src/styles/`
- Shared assets go in `src/assets/`
- Global styles in `src/index.css`