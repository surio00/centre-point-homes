# Real Estate Website - Centre Point Homes

## Overview

This is a modern real estate website built with React, TypeScript, and Express.js. The application provides a professional platform for Centre Point Homes to showcase their services, display properties, and handle client contact inquiries. The site features a clean, responsive design with a focus on user experience and lead generation.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with custom styling
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Validation**: Zod schemas for type-safe data validation
- **Session Management**: Express sessions with PostgreSQL store

### Development Architecture
- **Monorepo Structure**: Shared types and schemas between client and server
- **Hot Reload**: Vite middleware integrated with Express in development
- **Type Safety**: End-to-end TypeScript with shared schema definitions

## Key Components

### Database Schema
- **Users Table**: Basic user authentication structure (future expansion)
- **Contact Submissions Table**: Stores client inquiries with contact details, service requests, and messages
- **Shared Schema**: Centralized type definitions and validation rules

### API Endpoints
- `POST /api/contact`: Handles contact form submissions with validation
- `GET /api/contact-submissions`: Admin endpoint for retrieving all contact submissions

### Frontend Pages and Components
- **Home Page**: Single-page application with multiple sections
- **Navigation**: Sticky header with smooth scrolling to sections
- **Hero Section**: Property search interface with filters
- **Featured Properties**: Property listings with details and images
- **About Section**: Company information and statistics
- **Services Section**: Real estate services offered
- **Testimonials**: Client reviews and ratings
- **Contact Form**: Lead generation with service selection and validation
- **Footer**: Company information and navigation links

### UI Component System
- **Design System**: shadcn/ui with "new-york" style variant
- **Theme**: Light/dark mode support with CSS custom properties
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: Radix UI ensures ARIA compliance and keyboard navigation

## Data Flow

### Contact Form Submission
1. User fills out contact form with personal details and service inquiry
2. React Hook Form validates inputs client-side using Zod schemas
3. Form data is submitted to `/api/contact` endpoint via TanStack Query mutation
4. Server validates data using shared Zod schema from `@shared/schema`
5. Validated data is stored in PostgreSQL database via Drizzle ORM
6. Success/error response triggers appropriate user feedback via toast notifications

### Property Search (Future Enhancement)
- Hero section includes property search filters (location, type, price range)
- Currently displays static featured properties
- Architecture supports future integration with property database

## External Dependencies

### Core Frontend Dependencies
- React ecosystem (React, React DOM, React Hook Form)
- TanStack Query for server state management
- Radix UI components for accessible primitives
- Tailwind CSS and class-variance-authority for styling
- Wouter for routing
- Date-fns for date manipulation

### Core Backend Dependencies
- Express.js for server framework
- Drizzle ORM with PostgreSQL dialect
- Neon Database serverless driver
- Connect-pg-simple for session storage
- Zod for validation

### Development Dependencies
- Vite with React plugin
- TypeScript with ES modules
- ESBuild for production builds
- TSX for development server

## Deployment Strategy

### Production Build Process
1. **Frontend Build**: Vite compiles React application to static assets in `dist/public`
2. **Backend Build**: ESBuild bundles server code to `dist/index.js`
3. **Database Migration**: Drizzle Kit pushes schema changes to PostgreSQL

### Environment Configuration
- **Database**: PostgreSQL connection via `DATABASE_URL` environment variable
- **Development**: Local development server with Vite middleware
- **Production**: Served static assets with Express.js API backend

### Hosting Requirements
- Node.js runtime environment
- PostgreSQL database (Neon Database recommended)
- Environment variables for database connection
- Static file serving capability

## Changelog

```
Changelog:
- July 04, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```