# HS Tech Website - Project Instructions

## Project Overview

Premium, futuristic IT company website for HS Tech built with React.js + Vite + Tailwind CSS + Framer Motion + GSAP

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:

```bash
cd "d:\Projects\HS Tech"
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The application will open at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
HS Tech/
├── src/
│   ├── assets/images/        # Place founder.png and logo.png here
│   ├── components/           # Reusable components
│   ├── sections/             # Page sections
│   ├── hooks/                # Custom hooks
│   ├── animations/           # Animation variants
│   ├── utils/                # Utility functions
│   ├── data/                 # Content and configuration
│   ├── App.jsx               # Main component
│   ├── index.css             # Global styles
│   └── main.jsx              # Entry point
├── public/                   # Static assets
├── index.html                # HTML entry
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS configuration
├── package.json              # Dependencies
└── README.md                 # Documentation
```

## Key Files to Modify

### 1. Add Images

Place the following images in `src/assets/images/`:

- `founder.png` - Founder image
- `logo.png` - Company logo

### 2. Update Company Information

Edit `src/data/content.js`:

- Company name and contact info
- Services and technologies
- Project portfolio
- Team information

### 3. Customize Colors

Edit `tailwind.config.js` theme colors:

- Primary: `#0EA5FF` (Electric Blue)
- Secondary: `#C0C0C0` (Metallic Silver)
- Accent: `#38BDF8` (Cyan Glow)

### 4. Update Navigation

Modify `src/components/Navbar.jsx` for custom navigation links

## Features

✨ **Premium Design**

- Glassmorphism UI with neon glow
- Smooth animations and transitions
- Fully responsive
- Dark theme by default

🎬 **Advanced Animations**

- Framer Motion integration
- GSAP scroll animations
- Particle background
- Smooth page transitions

📱 **Responsive Design**

- Mobile-first approach
- Tablet and laptop optimized
- 4K screen support

🚀 **Performance**

- Lazy loading
- Code splitting
- Image optimization
- SEO optimized

## Sections

1. **Hero** - Landing section with CTA buttons
2. **About** - Company info and founder details
3. **Services** - 9 service categories
4. **Technologies** - Tech stack showcase
5. **Portfolio** - 3 featured projects with carousel
6. **Statistics** - Animated counters
7. **Process** - 5-step workflow
8. **Testimonials** - Client reviews
9. **Contact** - Contact form and information

## Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Hosting

The built files in `dist/` can be deployed to:

- Vercel (recommended)
- Netlify
- GitHub Pages
- AWS S3
- Any static hosting

### Vercel Deployment Example

```bash
npm install -g vercel
vercel
```

## Customization Guide

### Adding New Services

1. Open `src/data/content.js`
2. Add to `SERVICES` array
3. Update `src/sections/Services.jsx` if needed

### Adding Projects

1. Update `PORTFOLIO_PROJECTS` in `src/data/content.js`
2. Modify `src/sections/Portfolio.jsx` for layout changes

### Changing Colors

Edit color values in:

1. `tailwind.config.js` - Theme colors
2. `src/index.css` - CSS custom properties

### Adding Animations

Use Framer Motion variants in `src/animations/variants.js`

## Troubleshooting

### Port Already in Use

```bash
# Kill process on port 3000
npx kill-port 3000
npm run dev
```

### Dependencies Issues

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

```bash
# Clean build
npm run build -- --force
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimization

1. **Images**: Optimize and compress images before using
2. **Animations**: Test animations on mobile devices
3. **Lazy Loading**: Enable for below-the-fold content
4. **Code Splitting**: Vite handles this automatically

## SEO Optimization

- Meta tags in `index.html`
- Semantic HTML structure
- Mobile-friendly design
- Fast loading times
- Structured data ready

## Contact & Support

**HS Tech**

- Email: hs.techind@gmail.com
- Phone: +91 7024630069
- Address: Indore - Betma - 453001, Madhya Pradesh, India

## Development Notes

- Use `smooth-transition` class for smooth animations
- Use `glass` class for glassmorphism effect
- Use `gradient-text` for gradient text
- Use `hover-lift` for hover animations

## Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Add images to `src/assets/images/`
3. ✅ Update company info in `src/data/content.js`
4. ✅ Customize colors in `tailwind.config.js`
5. ✅ Run development server: `npm run dev`
6. ✅ Build for production: `npm run build`
7. ✅ Deploy to your hosting platform

---

**Last Updated:** June 10, 2026
**Built with:** React.js, Vite, Tailwind CSS, Framer Motion, GSAP
