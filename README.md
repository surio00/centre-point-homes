# Centre Point Homes Website

A modern, responsive real estate website built with React, TypeScript, and Vite - deployed as a static site.

## Features

- 🏠 **Property Listings** - Showcase featured properties with detailed information and video tours
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 📧 **Contact Form** - Integrated contact form with email notifications via Formspree
- 🎨 **Modern UI** - Clean design with Tailwind CSS and shadcn/ui components  
- ⚡ **Fast Performance** - Static site deployment for optimal loading speeds
- 🇮🇳 **India Localized** - Prices in INR, Pune addresses, Indian phone numbers

## Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation

1. **Clone or download the project**
   ```bash
   cd CentrePointHomes
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Visit: `http://localhost:5173`

### Stopping the Server
- Press `Ctrl + C` in the terminal to stop the server

## Project Structure

```
CentrePointHomes/
├── client/                 # React application
│   ├── public/            # Static assets
│   │   └── assets/        # Images, logos
│   └── src/
│       ├── components/    # React components
│       │   ├── ui/       # shadcn/ui components
│       │   ├── hero-section.tsx
│       │   ├── featured-properties.tsx
│       │   ├── contact-section.tsx
│       │   └── ...
│       ├── pages/         # Page components
│       └── lib/           # Utilities
├── dist/                  # Built static site
├── package.json          # Dependencies and scripts
├── vite.config.ts        # Vite configuration
└── vercel.json           # Deployment configuration
```

## Customization

### Adding Properties
Edit `client/src/components/featured-properties.tsx`:
```javascript
const properties = [
  {
    id: 1,
    title: "Your Property Title",
    price: "₹5,20,00,000",
    address: "Your Address, Pune, Maharashtra",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2400,
    image: "https://your-image-url.com/photo.jpg",
    videoId: "YOUR_GOOGLE_DRIVE_VIDEO_ID" // Optional
  }
];
```

### Changing Content
- **Hero Section**: `client/src/components/hero-section.tsx`
- **About Section**: `client/src/components/about-section.tsx`  
- **Services**: `client/src/components/services-section.tsx`
- **Contact Info**: `client/src/components/contact-section.tsx`

### Updating Images
- **Logo**: Replace `client/public/assets/logo.jpeg`
- **Property Images**: Update image URLs in the properties array

## Contact Form Setup

The contact form uses **Formspree** for email notifications:

1. **Create Formspree Account**:
   - Go to [https://formspree.io/](https://formspree.io/)
   - Sign up with your email address
   - Create a new form

2. **Update Form ID**:
   - Copy your Formspree form ID
   - Update `client/src/components/contact-section.tsx`:
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

3. **Test Contact Form**:
   - Submit a test message through your website
   - You should receive an email notification

## Video Integration

Properties can include Google Drive video tours:

1. **Upload video to Google Drive**
2. **Make video publicly viewable**
3. **Copy the file ID from the Google Drive URL**
4. **Add videoId to property in featured-properties.tsx**

## Available Scripts

- `npm run dev` - Start development server (localhost:5173)
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run preview` - Preview production build locally
- `npm run check` - Run TypeScript type checking

## Deployment

This is a **static site** that can be deployed to any static hosting provider:

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect GitHub repo to Vercel
3. Deploy automatically - Vercel will detect Vite configuration

### Other Options
- **Netlify**: Drag and drop the `dist/` folder after running `npm run build`
- **GitHub Pages**: Use the `dist/` folder as deployment source
- **Any Static Host**: Upload contents of `dist/` folder

### Build for Production
```bash
npm run build
```
The built site will be in the `dist/` directory.

## Technology Stack

- **Frontend**: React, TypeScript, Tailwind CSS, shadcn/ui
- **Build Tool**: Vite
- **Deployment**: Static site hosting (Vercel, Netlify, etc.)
- **Forms**: Formspree for email notifications
- **Routing**: Wouter (client-side only)

## Troubleshooting

### Port Already in Use
If you get "EADDRINUSE" error:
```bash
# Check what's using the port  
lsof -i :5173

# Kill the process
kill -9 <PID>
```

### Development Server Won't Start
1. Make sure Node.js is installed (`node --version`)
2. Install dependencies (`npm install`)
3. Check if port 5173 is available
4. Use `Ctrl + C` to stop the server properly

### Contact Form Not Working
1. Verify Formspree form ID is correct
2. Check Formspree dashboard for submissions
3. Ensure form is not in test mode

## License

This project is licensed under the MIT License.

## Support

For issues or questions, please check the troubleshooting section above.