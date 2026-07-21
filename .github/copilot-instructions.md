# NovaRays Solar Website - Development Guide

## Project Overview
Modern Next.js 14 + TypeScript website for NovaRays solar company, inspired by solarsquare.in reference design.

## Tech Stack
- **Framework**: Next.js 14
- **Language**: TypeScript  
- **Styling**: Tailwind CSS + Custom CSS
- **UI State**: React Client Components
- **Deployment**: Vercel, Netlify, or traditional Node.js hosting

## Quick Start

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
# Open http://localhost:3000
```

### Production Build
```bash
npm run build
npm start
```

## Project Structure

```
NovaRays/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout, meta tags
│   │   ├── page.tsx         # Homepage
│   │   └── globals.css      # Global styles
│   ├── components/
│   │   ├── Header.tsx       # Navigation
│   │   ├── Hero.tsx         # Hero banner
│   │   ├── Services.tsx     # Services grid
│   │   ├── Testimonials.tsx # Customer reviews
│   │   ├── CTASection.tsx   # Call-to-action
│   │   ├── ContactModal.tsx # Lead form
│   │   └── Footer.tsx       # Footer
│   └── lib/                 # Utilities
├── public/
│   └── images/              # Logos, photos
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

## Key Features

### ✅ Implemented
- **Responsive Design**: Mobile-first, tested on all breakpoints
- **Lead Capture**: Contact form modal with form validation
- **Brand Colors**: Primary #FFB800 (gold), Secondary #1e40af (blue)
- **SEO Ready**: Meta tags, semantic HTML, schema support
- **Performance**: Image optimization, code splitting, CSS purging
- **Dark/Light**: Flexible color scheme ready for dark mode

### 🔄 Next Steps (TODO)
- [ ] Add real logo (public/images/logo.png)
- [ ] Integrate email service (SendGrid, Resend)
- [ ] Add analytics (GA4, Mixpanel)
- [ ] Create blog/resources section
- [ ] Add ROI calculator
- [ ] Setup contact form backend
- [ ] Add service detail pages
- [ ] Deployment to Vercel

## Customization Guide

### Update Company Info
1. **Logo**: Replace in [src/components/Header.tsx](src/components/Header.tsx)
2. **Contact**: Update [src/components/Footer.tsx](src/components/Footer.tsx)
3. **Services**: Edit [src/components/Services.tsx](src/components/Services.tsx)
4. **Testimonials**: Update [src/components/Testimonials.tsx](src/components/Testimonials.tsx)

### Color Scheme
Edit [tailwind.config.ts](tailwind.config.ts):
```ts
colors: {
  primary: '#FFB800',   // Change yellow
  secondary: '#1e40af', // Change blue
  dark: '#0f172a',      // Change dark
}
```

### Add New Sections
Create component in `src/components/` and import in [src/app/page.tsx](src/app/page.tsx)

## Development Workflow

### Add a Feature
```bash
# 1. Create component
touch src/components/YourComponent.tsx

# 2. Import in page.tsx
import YourComponent from '@/components/YourComponent'

# 3. Run dev server and test
npm run dev

# 4. Build and verify
npm run build
```

### Styling Guidelines
- Use Tailwind utility classes
- Global styles in `globals.css`
- Component-level CSS in component files
- Color tokens: `text-primary`, `bg-primary`, etc.

### Form Handling
Contact form in [src/components/ContactModal.tsx](src/components/ContactModal.tsx) currently logs to console. 

**To enable emails**:
1. Install email service: `npm install resend` (or SendGrid)
2. Create API route: `src/app/api/contact/route.ts`
3. Add environment variables to `.env.local`
4. Update form onSubmit handler

## Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
- Connect GitHub repo via Netlify UI
- Build command: `npm run build`
- Publish directory: `.next`

### Self-hosted
```bash
npm run build
npm start
# Server runs on port 3000
```

## Environment Variables
Create `.env.local`:
```
NEXT_PUBLIC_SITE_URL=https://novarays.com
# Add email service keys, analytics, etc.
```

## Performance Checklist
- [ ] Images optimized (use Next.js Image component)
- [ ] Lighthouse score > 90
- [ ] Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
- [ ] Compressed assets (Gzip)
- [ ] CDN enabled for images

## SEO Checklist
- [ ] Meta tags customized
- [ ] Open Graph tags added
- [ ] Structured data (JSON-LD)
- [ ] Sitemap created
- [ ] Robots.txt configured
- [ ] Analytics installed
- [ ] XML sitemap submitted to Google Search Console

## Common Tasks

### Clear Build Cache
```bash
rm -rf .next
npm run build
```

### Update Dependencies
```bash
npm update
npm outdated
```

### Fix Linting Issues
```bash
npm run lint -- --fix
```

### Type Check
```bash
npm run type-check
```

## Troubleshooting

**Build fails?**
- Clear `.next` folder: `rm -rf .next`
- Update dependencies: `npm install`
- Check Node version: `node --version` (need 18+)

**Port 3000 in use?**
```bash
npm run dev -- -p 3001
```

**TypeScript errors?**
```bash
npm run type-check
# Review tsconfig.json for strict mode settings
```

## Resources
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [React Best Practices](https://react.dev)

## Support & Maintenance
For updates or questions, refer to [README.md](README.md)
