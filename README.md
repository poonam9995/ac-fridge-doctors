# AC-Fridge Doctors Website

A modern, responsive Next.js website for AC-Fridge Doctors - a professional AC and refrigerator repair service business.

## Features

- 🎨 Modern, beautiful UI with Tailwind CSS
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ Fast and optimized with Next.js 15
- 🎯 SEO-friendly
- 📧 Contact form for customer inquiries
- 🛠️ Service pages with detailed information
- 📞 24/7 emergency service information
- ✨ Smooth animations and transitions

## Pages

- **Home** - Hero section, services overview, why choose us
- **Services** - Detailed service information, brands we service
- **About** - Company story, values, and commitment
- **Contact** - Contact form and business information

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd ac-fridge-doctors
```

2. Install dependencies (already done):
```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Customization

### Update Contact Information

Update the phone number and email in:
- `app/components/Navbar.tsx`
- `app/components/Footer.tsx`
- `app/contact/page.tsx`
- `app/page.tsx`

### Change Colors

The primary color scheme uses blue. To change colors, update Tailwind classes in the components:
- Blue: `bg-blue-600`, `text-blue-600`, etc.
- Replace with your preferred color (e.g., `bg-green-600`)

### Add Logo

Replace the icon in `app/components/Navbar.tsx` and `app/components/Footer.tsx` with your company logo image.

### Update Metadata

Edit `app/layout.tsx` to update the site title and description for SEO.

## Project Structure

```
ac-fridge-doctors/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx       # Navigation bar
│   │   ├── Footer.tsx       # Footer component
│   │   └── ServiceCard.tsx  # Reusable service card
│   ├── about/
│   │   └── page.tsx         # About page
│   ├── contact/
│   │   └── page.tsx         # Contact page with form
│   ├── services/
│   │   └── page.tsx         # Services page
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── public/                  # Static files
├── package.json
└── README.md
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

### Other Hosting Options

The built site can be deployed to:
- Netlify
- AWS Amplify
- Digital Ocean
- Any Node.js hosting service

## Support

For issues or questions, please contact your development team.

## License

Copyright © 2025 AC-Fridge Doctors. All rights reserved.
