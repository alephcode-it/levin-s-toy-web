# Customization Checklist Before Deploying

Before pushing your website to GitHub Pages, update these files with your actual business information.

## Critical Updates

### 1. Contact Email Address

**Files to update:**
- `app/contact/page.tsx` (2 places)
- `app/page.tsx` (1 place)

**Search for:** `contact@levinstoy.com`

**Replace with:** Your actual email address (e.g., `info@yourcompany.com`)

```typescript
// Example change in app/contact/page.tsx line ~42
const mailtoLink = `mailto:contact@levinstoy.com?subject=...`
// Should become:
const mailtoLink = `mailto:YOUR-EMAIL@example.com?subject=...`
```

### 2. WhatsApp Business Number

**File:** `app/contact/page.tsx`

**Search for:** `https://wa.me/1234567890`

**Replace with:** Your WhatsApp number (format: country code + number)

```javascript
// Example:
// Pakistan: https://wa.me/923451234567
// USA: https://wa.me/14155552671
// UK: https://wa.me/442071838750
href="https://wa.me/1234567890"
// Should become:
href="https://wa.me/YOUR_COUNTRY_CODE_AND_NUMBER"
```

### 3. Phone Number

**File:** `app/contact/page.tsx`

**Search for:** `tel:+1234567890`

**Replace with:** Your actual phone number

```javascript
// Current:
href="tel:+1234567890"
// Should become:
href="tel:+1234567890"  // Your actual number
```

### 4. YouTube Channel

**Files to update:**
- `app/contact/page.tsx`
- `app/page.tsx`

**Search for:** `https://www.youtube.com/`

**Replace with:** Your YouTube channel URL

```javascript
// Current:
href="https://www.youtube.com/"
// Should become:
href="https://www.youtube.com/@yourchannelname"
// or
href="https://www.youtube.com/channel/YOUR_CHANNEL_ID"
```

### 5. LinkedIn Profile

**Files to update:**
- `app/contact/page.tsx`
- `app/page.tsx`

**Search for:** `https://www.linkedin.com/`

**Replace with:** Your LinkedIn business page

```javascript
// Current:
href="https://www.linkedin.com/"
// Should become:
href="https://www.linkedin.com/company/your-company-name"
// or
href="https://www.linkedin.com/in/your-profile"
```

### 6. Facebook & Instagram (Already Done ✅)

These are already updated with your links:
- ✅ Facebook: https://web.facebook.com/profile.php?id=61570263980470
- ✅ Instagram: https://www.instagram.com/levinstoy_woodentoy/

No changes needed for these!

## Optional Enhancements

### Add Order Now Button Functionality

The "Order Now" button in the navbar currently doesn't link anywhere.

**Files:** `app/page.tsx` and `app/contact/page.tsx`

**Option 1: Link to WhatsApp**
```javascript
// Current:
<button className="px-6 py-2 rounded-full font-medium text-white transition-all hover-lift"
  style={{ backgroundColor: '#8B5E3C' }}>
  Order Now
</button>

// Change to:
<a href="https://wa.me/YOUR_NUMBER" target="_blank" rel="noopener noreferrer"
  className="px-6 py-2 rounded-full font-medium text-white transition-all hover-lift"
  style={{ backgroundColor: '#8B5E3C' }}>
  Order Now
</a>
```

**Option 2: Link to Shop**
```javascript
<a href="/#products"
  className="px-6 py-2 rounded-full font-medium text-white transition-all hover-lift"
  style={{ backgroundColor: '#8B5E3C' }}>
  Order Now
</a>
```

### Customize Footer Text

**File:** `app/page.tsx` and `app/contact/page.tsx`

**Line:** Look for `© 2024 Levin's Toy`

Update year and company name as needed.

### Update Metadata

**File:** `app/layout.tsx`

Update the metadata object with your information:
```typescript
export const metadata: Metadata = {
  title: "Your Company - Your Tagline",
  description: "Your company description here...",
  keywords: "your, keywords, here",
  // ... etc
}
```

## Common Customizations

### Add Your Logo
1. Replace the text logo with an image logo
2. Create `public/logo.png`
3. Update navbar to use `<Image src="/logo.png" alt="Logo" />`

### Change Colors
Edit the color variables in `app/globals.css`:
```css
:root {
  --wood-brown: #8B5E3C;        /* Change this */
  --soft-beige: #D8C3A5;        /* Change this */
  --sage-green: #A3B18A;        /* Change this */
  --cream-bg: #F8F5F1;          /* Change this */
  --dark-text: #2B2B2B;         /* Change this */
  --light-gray: #E8E6E1;        /* Change this */
}
```

### Add Products with Links
Edit the product cards section in `app/page.tsx` to link to your products or Shopify store.

### Update FAQ Section
Replace FAQ items in `app/contact/page.tsx` with your actual FAQs.

## Testing Before Deploy

After making changes:

```bash
# Install dependencies
npm install

# Build the site
npm run build

# The 'out' directory contains your static site
# You can preview it locally by opening:
# out/index.html in your browser
```

## When Ready to Deploy

```bash
git add .
git commit -m "Update business information before deploy"
git push origin main
```

The GitHub Actions workflow will automatically:
1. Build your updated site
2. Deploy to GitHub Pages
3. Your site updates live

## Deploy Checklist

Before pushing to GitHub:
- [ ] Updated contact email
- [ ] Updated WhatsApp number
- [ ] Updated phone number
- [ ] Updated YouTube link
- [ ] Updated LinkedIn link
- [ ] Verified Facebook & Instagram links
- [ ] Updated "Order Now" button link
- [ ] Verified all images load correctly
- [ ] Tested locally with `npm run build`
- [ ] Reviewed homepage for any outdated info
- [ ] Reviewed contact page for accuracy

## After Deployment

Once live:
1. Test all links work
2. Verify form opens email correctly
3. Check mobile responsiveness
4. Test all social media links
5. Verify images load properly

## Need Help?

Refer to:
- `DEPLOY_TO_GITHUB.md` - Quick deployment steps
- `GITHUB_PAGES_SETUP.md` - Detailed setup instructions
- `README_GITHUB_PAGES.md` - Complete overview
