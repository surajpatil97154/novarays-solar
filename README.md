# NovaRays - Solar Energy Solutions Website

A modern, responsive website for NovaRays, a premium solar energy solutions company. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

✨ **Modern Design**
- Responsive layout (mobile, tablet, desktop)
- Dark mode support
- Smooth animations and transitions
- Professional color scheme

📱 **Key Sections**
- Hero banner with compelling value proposition
- Services showcase (6 solar solutions)
- Testimonials from satisfied customers
- Call-to-action sections
- Contact form with lead capture
- Comprehensive footer

🎯 **Business Features**
- Lead capture form with free quote requests
- Customer testimonials
- Service details
- Social proof (customer counts, savings statistics)
- Mobile-optimized contact options

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom React components
- **Hosting Ready**: Vercel, Netlify compatible

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone/Download the project
cd NovaRays

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
  ├── app/
  │   ├── layout.tsx          # Root layout
  │   ├── page.tsx            # Homepage
  │   └── globals.css         # Global styles
  ├── components/
  │   ├── Header.tsx          # Navigation header
  │   ├── Hero.tsx            # Hero section
  │   ├── Services.tsx        # Services showcase
  │   ├── Testimonials.tsx    # Customer testimonials
  │   ├── CTASection.tsx      # Call-to-action
  │   ├── ContactModal.tsx    # Lead capture form
  │   └── Footer.tsx          # Footer
  └── lib/                    # Utilities (for future)
public/
  └── images/                 # Static images/logo
```

## Customization

### Update Company Info
- Edit [src/components/Header.tsx](src/components/Header.tsx) for navigation
- Edit [src/components/Footer.tsx](src/components/Footer.tsx) for contact info
- Edit [src/app/layout.tsx](src/app/layout.tsx) for meta tags

### Change Colors
Update color scheme in [tailwind.config.ts](tailwind.config.ts):
- `primary`: #FFB800 (Yellow/Gold)
- `secondary`: #1e40af (Blue)
- `dark`: #0f172a (Dark Blue)

### Add Logo
Place logo image in `public/images/` and reference in [src/components/Header.tsx](src/components/Header.tsx)

## Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Build locally
npm run build

# Deploy the 'out' or '.next' directory
# Or use Netlify UI with GitHub/GitLab integration
```

### Deploy to AWS/GCP/Azure
Build the Next.js project and deploy as a serverless function or container.

## Performance Optimization

- Image optimization via Next.js Image component
- Automatic code splitting
- CSS optimization via Tailwind
- TypeScript for type safety

## SEO

- Meta tags in layout.tsx
- Semantic HTML
- Mobile-responsive design
- Fast load times

## Features for Future Implementation

- [ ] Blog section for solar tips
- [ ] Calculator for ROI estimation
- [ ] Photo gallery of installations
- [ ] Integration with CMS (Contentful, Strapi)
- [ ] Email notifications for leads
- [ ] Admin dashboard for lead management
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Online booking system
- [ ] Payment integration

## Contributing

Contributions are welcome! Feel free to submit PRs for improvements.

## License

MIT License - feel free to use this template for your projects.

## Support

For questions or support, contact: info@novarays.com

---

**Built with ❤️ for sustainable energy**
