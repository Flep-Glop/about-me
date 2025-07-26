# Luke Lussier Portfolio Site

A professional single-page portfolio website for Luke Lussier, Senior Medical Physics Resident, showcasing innovative tools for the medical physics community.

## Live Site
- **Development**: `http://localhost:3000`
- **Production**: To be deployed on Vercel

## Project Overview
This portfolio site is designed to be accessed via QR code on business cards at AAPM conferences, showcasing:
- **Rogue Resident**: An innovative educational roguelike for medical physics training
- **QuickWrite**: A clinical documentation tool for streamlined MPC writeups

## Technical Stack
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel
- **Fonts**: Inter (Google Fonts)

## Features
- ✅ Mobile-first responsive design
- ✅ Professional medical/scientific aesthetic
- ✅ Fast loading for conference environments
- ✅ SEO optimized with proper metadata
- ✅ Accessible navigation and interactions
- ✅ Project image galleries with descriptions
- ✅ Contact information and social links

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd portfolio-site

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to view the site.

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure
```
portfolio-site/
├── public/
│   └── images/           # Project screenshots and photos
├── src/
│   └── app/
│       ├── globals.css   # Global styles
│       ├── layout.tsx    # Root layout with SEO metadata
│       └── page.tsx      # Main portfolio page
└── README.md
```

## Deployment

### Vercel (Recommended)
1. Push code to GitHub/GitLab
2. Connect repository to Vercel
3. Deploy automatically on each push to main branch

### Manual Deployment
```bash
npm run build
npm run start
```

## Design Specifications
- **Primary Color**: Deep blue (#1e40af)
- **Secondary Color**: Warm amber (#f59e0b)
- **Accent Color**: Teal (#14b8a6)
- **Background**: Light gray (#f9fafb)
- **Typography**: Inter font family

## Mobile Optimization
- Touch-friendly button sizes (min 44px)
- Stacked layout on screens < 768px
- Optimized images with proper alt text
- Fast loading on conference WiFi

## Contact
For questions or updates:
- **Email**: lussierl@uthscsa.edu
- **Phone**: (210) 639-3003
- **Institution**: Mays Cancer Center, UT Health San Antonio

---
Built with ❤️ for the medical physics community
