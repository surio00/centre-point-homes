# Centre Point Homes Website

A modern, responsive real estate website built with React, TypeScript, and Express.js.

## Features

- 🏠 **Property Listings** - Showcase featured properties with detailed information
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 📧 **Contact Form** - Integrated contact form for client inquiries
- 🎨 **Modern UI** - Clean design with Tailwind CSS and shadcn/ui components
- ⚡ **Fast Performance** - Built with Vite for optimal loading speeds

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
   - Visit: `http://localhost:3000`

### Stopping the Server
- Press `Ctrl + C` in the terminal to stop the server properly

## Project Structure

```
CentrePointHomes/
├── client/                 # Frontend React app
│   ├── public/            # Static assets
│   │   └── assets/        # Images, logos
│   └── src/
│       ├── components/    # React components
│       ├── pages/         # Page components
│       └── lib/           # Utilities
├── server/                # Backend Express server
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   └── storage.ts        # Data storage
├── shared/               # Shared types and schemas
└── package.json         # Dependencies and scripts
```

## Customization

### Adding Properties
Edit `client/src/components/featured-properties.tsx`:
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
- **Hero Background**: Edit the `backgroundImage` URL in `hero-section.tsx`
- **Property Images**: Update image URLs in the properties array

### Contact Form Data
- **Email Notifications**: Contact form submissions are sent to your email
- **Backup Storage**: Also stored in memory at `http://localhost:3000/api/contact-submissions`
- **Setup Required**: Configure email settings (see Email Setup section below)

## Email Setup

To receive contact form submissions via email:

### Option 1: Gmail (Recommended)
1. **Create environment file**:
   ```bash
   cp .env.example .env
   ```

2. **Configure Gmail**:
   - Enable 2-factor authentication on your Gmail account
   - Generate an App Password: [Google Account Settings > Security > App Passwords](https://myaccount.google.com/apppasswords)
   - Edit `.env` file:
     ```env
     EMAIL_USER=your-email@gmail.com
     EMAIL_PASS=your-16-character-app-password
     CONTACT_EMAIL=your-email@gmail.com
     ```

### Option 2: Other Email Providers
Edit `.env` file with your SMTP settings:
```env
SMTP_HOST=smtp.your-provider.com
SMTP_PORT=587
EMAIL_USER=your-email@your-domain.com
EMAIL_PASS=your-password
CONTACT_EMAIL=your-email@your-domain.com
```

### Test Email Setup
After configuration, restart your server and submit a test contact form.

## Available Scripts

- `npm run dev` - Start development server (port 3000)
- `npm run build` - Build for production
- `npm run start` - Start production server (port 5000)
- `npm run check` - Run TypeScript type checking

## Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm run start
```

The production server runs on port 5000 and serves both the API and static files.

## Troubleshooting

### Port Already in Use
If you get "EADDRINUSE" error:
```bash
# Check what's using the port
lsof -i :3000

# Kill the process
kill -9 <PID>

# Or kill all server processes
pkill -f "tsx server/index.ts"
```

### Server Won't Start
1. Make sure Node.js is installed (`node --version`)
2. Install dependencies (`npm install`)
3. Check if port 3000 is available
4. Use `Ctrl + C` to stop the server properly

## Technology Stack

- **Frontend**: React, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Express.js, Node.js
- **Build Tool**: Vite
- **Database**: In-memory storage (can be upgraded to PostgreSQL)
- **Routing**: Wouter (client-side), Express (server-side)

## License

This project is licensed under the MIT License.

## Support

For issues or questions, please check the troubleshooting section or contact your developer.