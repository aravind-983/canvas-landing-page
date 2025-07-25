# Technology Stack

## Core Technologies

- **React 19.1.0** - Latest React with modern features
- **Vite 7.0.4** - Build tool and dev server
- **JavaScript (ES2020+)** - Modern JavaScript with JSX support
- **CSS3** - Standard styling approach

## Build System

**Vite** is the primary build tool providing:
- Fast HMR (Hot Module Replacement)
- ES modules support
- Optimized production builds
- Plugin-based architecture

## Development Tools

- **ESLint** - Code linting with React-specific rules
- **React Hooks Plugin** - Enforces hooks rules
- **React Refresh Plugin** - Fast refresh during development

## Common Commands

```bash
# Development server with HMR
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview

# Run linter
npm run lint
```

## Code Quality Standards

- ESLint configuration enforces React best practices
- Unused variables allowed if they follow `^[A-Z_]` pattern (constants)
- React Hooks rules enforced
- ES2020+ syntax expected
- JSX support enabled