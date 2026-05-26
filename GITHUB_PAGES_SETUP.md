# GitHub Pages Deployment Guide

This website has been configured for static deployment to GitHub Pages. Follow these steps to deploy your site.

## Prerequisites

- A GitHub account
- Git installed on your computer
- Node.js and npm installed

## Step-by-Step Deployment

### 1. Create a GitHub Repository

1. Go to [github.com](https://github.com) and log in
2. Click the **+** icon in the top right and select **New repository**
3. Name your repository (e.g., `levins-toy-website`)
4. Choose "Public" (required for free GitHub Pages)
5. Click **Create repository**

### 2. Push Your Code to GitHub

```bash
# Navigate to your project directory
cd /path/to/v0-project

# Initialize git (if not already initialized)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Levin's Toy website"

# Add remote repository (replace with your repo URL)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Configure GitHub Pages Settings

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Scroll down to **Pages** (left sidebar)
4. Under "Source", select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **Save**

> Note: If the `gh-pages` branch doesn't exist yet, it will be created automatically when the GitHub Actions workflow runs.

### 4. GitHub Actions Will Handle Deployment

- The workflow file (`.github/workflows/deploy.yml`) is already configured
- Every time you push to the `main` branch, it will:
  1. Install dependencies
  2. Build the static site
  3. Deploy to GitHub Pages
- Check the **Actions** tab to see the build status

### 5. Access Your Live Site

Your site will be available at:
- `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

For example: `https://johndoe.github.io/levins-toy-website/`

**Note:** It may take a few minutes for GitHub Pages to process your first deployment.

## How It Works

### Static Site Generation

This project uses Next.js with static export (`output: 'export'`), which:
- Builds your site to plain HTML, CSS, and JavaScript
- No Node.js server required to run the site
- Perfect for GitHub Pages

### Contact Form

The contact form uses a `mailto:` fallback approach:
- When users click "Send Message", it opens their email client
- The form data is pre-populated in the email
- Users send the email directly to your address

To customize the email address, edit the contact form in `app/contact/page.tsx`:
```typescript
const mailtoLink = `mailto:YOUR-EMAIL@example.com?subject=...`
```

## Building Locally

To test the build before pushing to GitHub:

```bash
# Install dependencies
npm install

# Build static site
npm run build

# The output will be in the 'out' directory
# Preview by opening: out/index.html in your browser
```

## Troubleshooting

### Site Shows 404 or Blank Page

1. Check the **Actions** tab - ensure the build succeeded
2. Wait a few minutes for GitHub Pages to deploy
3. Verify the repository is **Public**
4. Check Pages settings point to `gh-pages` branch

### Build Fails in GitHub Actions

1. Go to **Actions** tab
2. Click the failed workflow
3. Look at the error messages
4. Common fixes:
   - Ensure `package.json` exists
   - Check that all dependencies are listed in `package.json`

### Links Not Working on Deployed Site

Make sure you're using relative links (e.g., `/contact/` not `contact/`). The site is built with `trailingSlash: true` for GitHub Pages compatibility.

## Future Deployments

Once set up, deployment is automatic:
1. Make changes to your code
2. Commit and push to `main` branch
3. GitHub Actions builds and deploys automatically
4. Site updates within minutes

## Custom Domain (Optional)

To use a custom domain:

1. Go to repository **Settings** → **Pages**
2. Under "Custom domain", enter your domain
3. Configure DNS records with your domain registrar
4. GitHub will provide instructions

## More Help

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Next.js Static Export](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports)
