# Levin's Toy - Static Website Ready for GitHub Pages

Your premium handcrafted toy website has been fully configured for static deployment to GitHub Pages.

## What's Included

- **Homepage** - Hero section, features, products gallery, brand story
- **Contact Page** - Contact form (uses mailto), FAQ, contact options
- **Social Media** - Facebook, Instagram, YouTube, LinkedIn links in footer
- **Premium Design** - Scandinavian aesthetic with warm colors
- **Fully Responsive** - Works perfectly on mobile, tablet, desktop
- **Static Export** - No server needed, pure HTML/CSS/JavaScript
- **GitHub Actions** - Automatic deployment on every push

## Files Changed for Static Deployment

```
├── next.config.mjs          # ✅ Added output: 'export' for static export
├── app/contact/page.tsx     # ✅ Updated form to use mailto:
├── .github/
│   └── workflows/
│       └── deploy.yml       # ✅ NEW: GitHub Actions deployment workflow
├── .nojekyll                # ✅ NEW: Prevents Jekyll processing
├── DEPLOY_TO_GITHUB.md      # ✅ NEW: Quick start guide
└── GITHUB_PAGES_SETUP.md    # ✅ NEW: Detailed setup guide
```

## Quick Deployment Steps

### 1. Create GitHub Repository
Go to https://github.com/new and create a **public** repository.

### 2. Push Code to GitHub

```bash
cd /path/to/v0-project
git init
git add .
git commit -m "Initial commit: Levin's Toy website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

Replace `YOUR-USERNAME` and `YOUR-REPO` with your GitHub username and repository name.

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in left sidebar)
3. Under "Source", select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click **Save**

### 4. Done!

- GitHub Actions automatically builds and deploys your site
- Site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO/`
- Takes 1-5 minutes for deployment to complete

## Before You Deploy

Update these critical details in your code:

### 1. Contact Email
**File:** `app/contact/page.tsx` and `app/page.tsx`

Find and replace:
```typescript
mailto:contact@levinstoy.com
```
With your actual email address.

### 2. WhatsApp Number
**File:** `app/contact/page.tsx`

Replace:
```javascript
href="https://wa.me/1234567890"
```
With your WhatsApp business number (format: country code + number, no + symbol)

Example: `https://wa.me/923451234567` for Pakistan

### 3. Phone Number
**File:** `app/contact/page.tsx`

Replace:
```javascript
href="tel:+1234567890"
```
With your actual phone number.

### 4. Social Media Links
**Files:** `app/page.tsx` and `app/contact/page.tsx`

Update these links with your actual profiles:
- Facebook: Already has your profile link ✅
- Instagram: Already has your profile link ✅
- YouTube: Update with your channel link
- LinkedIn: Update with your business profile link

## How Contact Form Works

Since GitHub Pages is static (no server), the contact form uses a **mailto** approach:

1. User fills out the form
2. Clicks "Send Message"
3. Their default email client opens
4. Pre-filled with form data
5. User clicks "Send" to send the email

**Alternative approaches** (if you want real backend):
- Deploy to Vercel instead (supports Next.js serverless functions)
- Use a third-party service like Formspree or Basin
- Add a backend API elsewhere

## Project Structure

```
/vercel/share/v0-project/
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Homepage
│   └── contact/
│       └── page.tsx         # Contact page
├── public/
│   └── images/              # All your toy images
├── next.config.mjs          # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS config
├── package.json             # Dependencies
└── .github/
    └── workflows/
        └── deploy.yml       # GitHub Actions workflow
```

## Build and Test Locally

```bash
# Install dependencies
npm install

# Build static site
npm run build

# Output will be in the 'out' directory
# You can serve it with any static server:
npx serve out

# Then open http://localhost:3000
```

## Deployment Automation

Every time you push to `main` branch:

1. GitHub Actions automatically triggers
2. Installs dependencies
3. Builds the static site
4. Deploys to GitHub Pages
5. Site updates within 2-5 minutes

Monitor the build status in the **Actions** tab of your repository.

## Features & Capabilities

✅ **Mobile Responsive** - Works on all devices
✅ **Fast Performance** - Pure static HTML
✅ **SEO Optimized** - Proper metadata and Open Graph tags
✅ **Social Media Integration** - All platforms linked
✅ **Premium Design** - Modern Scandinavian aesthetic
✅ **Image Optimization** - All images included
✅ **No Backend Required** - Fully static deployment

## Need Help?

- See `DEPLOY_TO_GITHUB.md` for quick 5-minute setup
- See `GITHUB_PAGES_SETUP.md` for detailed instructions
- Check [GitHub Pages Docs](https://docs.github.com/en/pages)
- Check [Next.js Static Export Docs](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports)

## Domain & Custom Setup

After your site is live on GitHub Pages, you can:
- Use your own domain
- Add SSL/HTTPS (automatic with GitHub Pages)
- Configure custom DNS

See `GITHUB_PAGES_SETUP.md` for domain setup instructions.

## Summary

Your website is **production-ready**. Just push to GitHub and enable Pages. Your Levin's Toy website will be live on the internet in minutes!
