# Deploy to GitHub Pages in 5 Minutes

Your Levin's Toy website is now ready for static deployment. Here's the quickest way to get it live:

## Quick Start (Copy & Paste)

### Step 1: Create a GitHub Repository
Go to https://github.com/new and create a new public repository.

### Step 2: Copy Your Repository URL
After creating the repo, copy the HTTPS URL (looks like: `https://github.com/YOUR-USERNAME/YOUR-REPO.git`)

### Step 3: Push to GitHub

```bash
# Navigate to your project
cd /path/to/v0-project

# Initialize and push to GitHub
git init
git add .
git commit -m "Initial commit: Levin's Toy website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. Go to your repo on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select `gh-pages` branch
4. Click **Save**

### Step 5: Wait for Deployment
- GitHub Actions will automatically build and deploy your site
- Check the **Actions** tab to see progress
- Your site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO/`

## What Changed for Static Deployment

✅ **Next.js configured for static export** (`next.config.mjs`)
✅ **GitHub Actions workflow added** (`.github/workflows/deploy.yml`)
✅ **Contact form uses mailto** (no backend needed)
✅ **All images included** in public folder
✅ **Ready for GitHub Pages**

## Customizations Needed

Before deploying, update these files:

### 1. Contact Email
Edit `app/contact/page.tsx` (search for `contact@levinstoy.com`):
```typescript
const mailtoLink = `mailto:YOUR-EMAIL@example.com?subject=...`
```

### 2. WhatsApp & Phone Numbers
Edit `app/contact/page.tsx` and `app/page.tsx`:
- Replace `+1234567890` with your actual numbers
- Replace WhatsApp placeholder with your link

### 3. Business Details
Update footer/contact info in both pages with your real details.

## That's It!

Your website is now deployed as a fully static, fast site on GitHub Pages. Every time you push changes to `main`, it automatically rebuilds and deploys.

For detailed setup, see `GITHUB_PAGES_SETUP.md`.
