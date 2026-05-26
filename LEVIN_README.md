# Levin's Toy - Premium Handcrafted Wooden Toys Website

A modern, elegant, and premium website for Levin's Toy - a brand specializing in handcrafted Montessori-inspired wooden toys.

## ✨ Features

### Design Excellence
- **Premium Scandinavian Design**: Minimal, elegant, and emotionally engaging
- **Modern Color Palette**: 
  - Warm Wood Brown (#8B5E3C)
  - Soft Beige (#D8C3A5)
  - Sage Green (#A3B18A)
  - Cream Background (#F8F5F1)
  - Dark Typography (#2B2B2B)

### Fully Responsive
- Desktop-optimized layouts
- Tablet-friendly design
- Mobile-first responsive approach
- Smooth navigation across all devices

### Premium Interactions
- Smooth scroll animations
- Fade-up effects on section load
- Floating animations on hero elements
- Card hover transforms with scale and lift effects
- Glassmorphism navbar with smooth transitions
- Image hover zoom effects

### Key Sections
1. **Sticky Glassmorphism Navbar** - Transparent blur effect with navigation links and CTA button
2. **Hero Section** - Large emotional heading with premium imagery and floating background elements
3. **Why Parents Love Us** - 6 premium feature cards highlighting Montessori principles, eco-friendliness, and safety
4. **Featured Collection** - Premium product showcase with image overlays and gradient effects
5. **Brand Story** - Emotional storytelling about craftsmanship and sustainability
6. **Moments of Joy** - Beautiful masonry gallery of children enjoying toys
7. **Call-to-Action Banner** - Prominent section encouraging orders with WhatsApp integration
8. **Premium Footer** - Complete footer with company info, links, and AlephCode Technologies attribution

## 📁 Project Structure

```
/vercel/share/v0-project/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Main homepage component
│   ├── globals.css         # Global styles, animations, and custom utilities
├── public/
│   └── images/             # All brand imagery (15 high-quality images)
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── next.config.mjs         # Next.js configuration
```

## 🎨 Design System

### Color Tokens
```css
--wood-brown: #8B5E3C       /* Primary brand color */
--soft-beige: #D8C3A5       /* Accent color */
--sage-green: #A3B18A       /* Secondary accent */
--cream-bg: #F8F5F1         /* Background */
--dark-text: #2B2B2B        /* Text color */
--light-gray: #E8E6E1       /* Borders and dividers */
```

### Typography
- **Headlines**: Bold, large (up to 60px), using system fonts for clarity
- **Body Text**: Clean sans-serif, 16-18px, with 1.6 line height
- **Maximum 2 font families**: System fonts for optimal performance

### Spacing
- Uses Tailwind's spacing scale (4px base unit)
- Generous whitespace for premium feel
- Consistent 20px-40px section padding

### Animations
- `fadeUp`: 0.6s ease-out entrance animation
- `floatDelay`: 6s infinite floating effect
- `slideInLeft/Right`: 0.6s entrance from sides
- `softGlow`: Subtle box-shadow pulsing effect

### Effects
- **Glass Morphism**: Backdrop blur on navbar (10px)
- **Premium Shadows**: 
  - Soft: `0 10px 40px rgba(0,0,0,0.08)`
  - Medium: `0 20px 60px rgba(0,0,0,0.12)`
  - Premium: `0 30px 80px rgba(0,0,0,0.15)`
- **Hover Effects**: Scale 1.05, lift -12px, smooth transitions

## 🖼️ Images Included

All 15 high-quality images are organized in `/public/images/`:

- **Cover Images** (3): `cover1.jpg`, `cover2.jpg`, `cover3.jpg`
- **Product Images** (7): `image1.jpg`, `image3.jpg` through `image7.jpg`
- **Logo Files** (2): `logo.jpg`, `logo1.jpg`
- **Additional Assets** (2): `immage2.jpg`, `Screenshot` files

## 🚀 Getting Started

### Installation
```bash
# Clone the project
git clone <repository-url>
cd v0-project

# Install dependencies
pnpm install
# or
npm install

# Run development server
pnpm dev
# or
npm run dev
```

### View the Website
Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Responsive Breakpoints

- **Mobile**: Under 768px - Stacked layouts, hidden navigation
- **Tablet**: 768px-1024px - 2-column grids
- **Desktop**: 1024px+ - Full 3-column grids and horizontal navigation

## 🔧 Customization

### Update Brand Colors
Edit `/app/globals.css` color variables:
```css
:root {
  --wood-brown: #8B5E3C;
  --soft-beige: #D8C3A5;
  /* ... */
}
```

### Modify Content
Edit `/app/page.tsx` to update:
- Headings and descriptions
- Feature cards
- Product showcases
- Brand story text
- Social media links

### Add New Images
1. Place images in `/public/images/`
2. Reference them in `page.tsx`: `src="/images/filename.jpg"`
3. Update image alt text for accessibility

## 🌐 Deployment

### GitHub Pages
1. Update `next.config.mjs` for static export
2. Build: `npm run build`
3. Push `out/` directory to GitHub Pages branch

### Vercel
1. Connect repository to Vercel
2. Vercel auto-detects Next.js
3. Click "Deploy"
4. Custom domain configuration available

### Other Hosting
1. Build: `npm run build`
2. Start server: `npm start`
3. Or use static export for CDN hosting

## ♿ Accessibility

- ✅ Semantic HTML (main, nav, section, footer)
- ✅ Proper heading hierarchy (h1 → h6)
- ✅ Alt text on all images
- ✅ Color contrast ratios (WCAG AA compliant)
- ✅ Keyboard navigation support
- ✅ Screen reader optimized

## 📊 SEO Optimization

- ✅ Dynamic meta tags and Open Graph
- ✅ Structured heading hierarchy
- ✅ Mobile-optimized viewport settings
- ✅ Fast image loading with Next.js Image
- ✅ Semantic HTML structure

## 🎯 Performance

- Next.js Image Optimization
- CSS animations (GPU-accelerated)
- Minimal JavaScript (Client Component optimization)
- Lazy loading for images below fold

## 📧 Contact & Support

**Powered by**: [AlephCode Technologies](https://alephcode.com/)

## 📄 License

© 2024 Levin's Toy. All rights reserved.

---

**Built with**: Next.js 16, React 19, Tailwind CSS, TypeScript
