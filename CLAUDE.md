# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on port 3000 (runs both client and server)
- `npm run build` - Build for production (builds client and server)
- `npm run start` - Start production server on port 5000
- `npm run check` - Run TypeScript type checking
- `npm run db:push` - Push database schema changes using Drizzle

## Server Management

**Starting the server:**
```bash
npm run dev
```

**Stopping the server properly:**
- Use `Ctrl + C` in the terminal where the server is running

**If port 3000 is already in use:**
```bash
# Check what's using port 3000:
lsof -i :3000

# Kill the process (replace PID with actual number):
kill -9 <PID>

# Or kill all tsx server processes:
pkill -f "tsx server/index.ts"
```

## Architecture Overview

This is a full-stack real estate website built with:

**Frontend (client/)**
- React with TypeScript
- Vite for build tooling
- TanStack Query for data fetching
- Wouter for routing
- Tailwind CSS with shadcn/ui components
- Component-based architecture with sections: hero, featured properties, about, services, testimonials, contact

**Backend (server/)**
- Express.js server with TypeScript
- Database: PostgreSQL with Drizzle ORM (with in-memory fallback for development)
- API routes for contact form submissions
- Development: Vite dev server integration on port 3000
- Production: Static file serving on port 5000

**Shared (shared/)**
- Database schemas with Drizzle and Zod validation
- Type definitions shared between client and server

**Key Technical Details:**
- Monorepo structure with client/server/shared directories
- Path aliases: `@` for client/src, `@shared` for shared directory
- Single port (5000) serves both API and client in all environments
- Database migrations in `./migrations` directory
- Contact form data stored in `contact_submissions` table
- User authentication schema exists but may not be fully implemented

**Component Structure:**
- Main app uses single-page layout with sectioned components
- UI components follow shadcn/ui patterns in `client/src/components/ui/`
- Custom hooks in `client/src/hooks/`
- Utility functions in `client/src/lib/`

## Content Editing Guide

### 1. Adding/Removing Properties
**File:** `client/src/components/featured-properties.tsx`
**Edit the `properties` array (lines 5-36):**
```javascript
const properties = [
  {
    id: 1,
    title: "Your Property Title",
    price: "$650,000",
    address: "123 Your Street, Your City",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2400,
    image: "https://your-image-url.com/photo.jpg"
  },
  // Add more properties here
];
```

### 2. Contact Form Data
**Where submissions are stored:** In-memory storage (resets when server restarts)
**To view submissions:** Visit `http://localhost:3000/api/contact-submissions`
**Data includes:** firstName, lastName, email, phone, service, message, createdAt

**For persistent storage:** Update `server/storage.ts` to use a real database

### 3. Editing Text Content
**Navigation:** `client/src/components/navigation.tsx`
**Hero Section:** `client/src/components/hero-section.tsx`
**About Section:** `client/src/components/about-section.tsx`
**Services:** `client/src/components/services-section.tsx`
**Testimonials:** `client/src/components/testimonials-section.tsx`
**Contact:** `client/src/components/contact-section.tsx`
**Footer:** `client/src/components/footer.tsx`

### 4. Changing Images
**Logo:** Replace `client/public/assets/logo.jpeg`
**Hero Background:** Edit line 16 in `client/src/components/hero-section.tsx`
**Property Images:** Change `image` URLs in the properties array
**Other Images:** Use Unsplash URLs or place in `client/public/assets/`

### 5. Statistics and Numbers
**About Section Stats:** Edit lines 2-7 in `client/src/components/about-section.tsx`
```javascript
const stats = [
  { value: "500+", label: "Properties Sold" },
  { value: "450+", label: "Happy Clients" },
  // Update these values
];
```

### 6. Company Information
**Page Title:** `client/index.html` line 6
**Company Name:** Multiple files use "Centre Point Homes" - search and replace
**Meta Descriptions:** `client/index.html` lines 7-9