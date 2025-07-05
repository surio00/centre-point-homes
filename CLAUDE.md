# Claude Development Notes - Centre Point Homes

## Project Overview
Centre Point Homes is a modern real estate website built as a **static site** using React, TypeScript, and Vite. The project has been simplified from a full-stack application to a clean, fast static site with third-party services for contact forms.

## Quick Commands

### Development
```bash
npm run dev        # Start development server (localhost:5173)
npm run build      # Build for production 
npm run preview    # Preview production build
npm run check      # TypeScript type checking
```

### Project Status
- ✅ **Static Site** - No server/database required
- ✅ **Contact Form** - Uses Formspree for email notifications
- ✅ **Video Integration** - Google Drive videos for property tours
- ✅ **India Localized** - INR pricing, Pune addresses
- ✅ **Mobile Responsive** - Works on all devices
- ✅ **Clean Build** - Removed 60+ unused files and dependencies

## Architecture

### Current Stack
- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Forms**: Formspree (email notifications)
- **Deployment**: Static hosting (Vercel)
- **Routing**: Wouter (client-side only)

### Key Components
- `hero-section.tsx` - Main landing section
- `featured-properties.tsx` - Property listings with videos
- `contact-section.tsx` - Contact form with Formspree integration
- `navigation.tsx` - Header with logo and menu
- `services-section.tsx` - Real estate services
- `about-section.tsx` - Company information
- `testimonials-section.tsx` - Customer reviews
- `footer.tsx` - Footer with contact info

## Contact Form Configuration

The contact form uses Formspree (free service) for email notifications:

### Current Setup
- **Form ID**: `xdkzvgya` (already configured)
- **Service**: https://formspree.io/f/xdkzvgya
- **Features**: Email notifications, form validation, spam protection

### Form Fields
- First Name (required)
- Last Name (required) 
- Email (required, validated)
- Phone (optional)
- Service Interest (required dropdown)
- Message (required, min 10 chars)

## Property Management

Properties are defined in `featured-properties.tsx`:

```javascript
const properties = [
  {
    id: 1,
    title: "Luxury Family Home",
    price: "₹5,20,00,000",
    address: "Koregaon Park, Pune, Maharashtra", 
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2400,
    image: "https://images.unsplash.com/...",
    videoId: "GOOGLE_DRIVE_FILE_ID" // Optional
  }
];
```

### Adding New Properties
1. Add new property object to the `properties` array
2. Include all required fields
3. Optionally add `videoId` for Google Drive video tours
4. Use high-quality images from Unsplash or property photos

## Video Integration

Properties can include Google Drive video tours:

### Setup Process
1. Upload video to Google Drive
2. Set sharing to "Anyone with the link can view"
3. Extract file ID from Google Drive URL
4. Add `videoId` to property configuration

### Video Dialog
- Clicking property card opens video dialog
- Uses Google Drive embed with responsive iframe
- Fallback to image if no video provided

## Deployment

### Current Setup
- **Platform**: Vercel (connected to GitHub)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Framework**: Vite (auto-detected)

### Deployment Process
1. Push changes to GitHub main branch
2. Vercel automatically builds and deploys
3. Live site updates within 1-2 minutes

## Contact Information

Current contact details (update as needed):
- **Address**: Koregaon Park, Pune, Maharashtra, India 411001
- **Phone**: +91 98765 43210
- **Email**: info@centrepointhomes.com
- **Hours**: Mon-Fri 9AM-6PM, Sat 9AM-4PM, Sun by appointment

## Development Notes

### Recently Cleaned Up
- ✅ Removed entire `/server` directory (Express.js backend)
- ✅ Removed `/api` directory (serverless functions)
- ✅ Removed database configuration (Drizzle ORM)
- ✅ Removed authentication code (Passport.js)
- ✅ Removed 28 unused shadcn/ui components
- ✅ Removed 25+ unused npm dependencies
- ✅ Removed Replit configuration files
- ✅ Simplified to static site architecture

### Bundle Size Optimization
- Reduced from 466KB to 399KB (67KB smaller)
- Removed React Query (server state management)
- Removed unused Radix UI components
- Clean, minimal dependency tree

### Performance
- ✅ Fast development server startup
- ✅ Quick builds (< 2 seconds)
- ✅ Small bundle size
- ✅ Static site performance benefits

## Troubleshooting

### Common Issues
1. **Port 5173 in use**: Kill process with `lsof -i :5173` then `kill -9 <PID>`
2. **Build fails**: Run `npm run check` to see TypeScript errors
3. **Contact form not working**: Verify Formspree form ID is correct
4. **Videos not loading**: Check Google Drive sharing permissions

### Development Tips
- Use `npm run dev` for hot reloading during development
- Run `npm run build` before deploying to test production build
- Check browser console for any JavaScript errors
- Test contact form thoroughly after any changes

## Future Enhancements

Potential improvements (if needed):
- Add property search/filter functionality
- Integrate with a headless CMS for dynamic content
- Add property detail pages with URL routing
- Implement image gallery for properties
- Add blog/news section
- Integrate with property management APIs

## Security Notes
- Static site deployment eliminates server vulnerabilities
- No database means no SQL injection risks
- Formspree handles form security and spam protection
- All secrets/keys are handled by third-party services