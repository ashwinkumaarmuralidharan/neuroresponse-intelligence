# Quick Start Guide

Get your NeuroResponse Intelligence website up and running in minutes!

## 🚀 Fastest Path to Deployment

### Step 1: Install Node.js
- Download from [nodejs.org](https://nodejs.org/) (version 18+)
- Verify: `node --version` and `npm --version`

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Test Locally
```bash
npm run dev
```
Visit http://localhost:3000

### Step 4: Build
```bash
npm run build
```

### Step 5: Deploy

**Option A: Cloudflare Pages (Easiest)**
1. Push code to GitHub
2. Go to [cloudflare.com/pages](https://pages.cloudflare.com)
3. Connect repository
4. Build settings:
   - Build command: `npm run build`
   - Output directory: `out`
5. Deploy!

**Option B: GitHub Pages (Automated)**
1. Push code to GitHub
2. Go to repository Settings → Pages
3. Enable GitHub Pages
4. The workflow will auto-deploy on push!

## 📝 Before Deploying

Update these files with your actual information:

1. **Domain** (in 3 files):
   - `app/sitemap.ts` - line 5
   - `app/robots.ts` - line 9
   - `public/robots.txt` - line 3

2. **Contact Email**:
   - `app/contact/page.tsx` - line 6

## ✅ Verify Build

After building, verify everything is correct:
```bash
npm run verify
```

## 📚 Need More Help?

- **Setup details**: See [SETUP.md](./SETUP.md)
- **Full deployment guide**: See [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Project overview**: See [README.md](./README.md)

## 🎉 You're Done!

Your site is ready to go live. All pages are built, SEO-optimized, and accessible.
