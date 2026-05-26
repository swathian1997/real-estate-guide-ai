# Real Estate Guide AI - Angular 19

A modern mobile-first Real Estate Learning App built with Angular 19.

## Features

- **6 Screens**: Splash, Login, Home, Learn, AI Assistant, Profile
- **Premium Dark Theme** with gold accents
- **Mobile-first responsive design**
- **Angular Material UI** components
- **Standalone components** (default in Angular 19)
- **Lazy-loaded routes**
- **Bottom navigation** for mobile
- **Smooth animations** and transitions

## Prerequisites

- Node.js 18+ (20 recommended)
- npm 9+

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm start

# Open browser at http://localhost:4200
```

## Project Structure

```
src/app/
  screens/           # Page-level components
    splash/
    login/
    home/
    learn/
    assistant/
    profile/
  shared/            # Shared components
    bottom-nav/
    header/
  app.component.ts   # Root component
  app.config.ts      # App configuration
  app.routes.ts      # Routing configuration
src/styles/
  global.scss        # Global styles & theme
```

## Angular 19 Highlights

- Standalone components are now the default
- Updated to Angular Material 19
- Zone.js 0.15
- TypeScript 5.6
- Modern `provideRouter` and `provideAnimationsAsync` APIs

## Build for Production

```bash
ng build --configuration production
```
