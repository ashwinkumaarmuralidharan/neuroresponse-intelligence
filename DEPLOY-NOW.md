# Deploy Now - Step by Step Guide

Follow these steps to get your website live in the next 10 minutes!

## 🚀 Quick Deployment (Cloudflare Pages - Easiest)

### Step 1: Install Node.js (if not installed)

1. Go to https://nodejs.org/
2. Download the LTS version (18 or higher)
3. Run the installer
4. **Restart your terminal/PowerShell** after installation

### Step 2: Run Setup Script

**Windows (PowerShell):**
```powershell
.\setup-and-deploy.ps1
```

**Or manually:**
```bash
npm install
npm run build
npm run verify
```

### Step 3: Push to GitHub

1. **Create a GitHub account** (if you don't have one): https://github.com/signup

2. **Create a new repository:**
   - Go to https://github.com/new
   - Name it: `neuroresponse-intelligence` (or any name)
   - Make it **Public** (required for free hosting)
   - Click "Create repository"

3. **Push your code:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - NeuroResponse Intelligence website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   git push -u origin main
   ```
   (Replace YOUR-USERNAME and YOUR-REPO-NAME with your actual values)

### Step 4: Deploy to Cloudflare Pages

1. **Go to Cloudflare Pages:**
   - Visit https://pages.cloudflare.com/
   - Sign in (create account if needed - it's free!)

2. **Create a project:**
   - Click "Create a project"
   - Click "Connect to Git"
   - Authorize Cloudflare to access GitHub
   - Select your repository

3. **Configure build:**
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Root directory:** `/` (leave default)
   - **Node version:** 18

4. **Deploy:**
   - Click "Save and Deploy"
   - Wait 2-3 minutes for build
   - Your site is live! 🎉

5. **Get your URL:**
   - Your site will be at: `https://YOUR-PROJECT-NAME.pages.dev`
   - You can customize this in project settings

### Step 5: Update Domain URLs (Important!)

After deployment, update these 3 files with your actual URL:

1. **`app/sitemap.ts`** - Line 5:
   ```typescript
   const baseUrl = "https://YOUR-PROJECT-NAME.pages.dev";
   ```

2. **`app/robots.ts`** - Line 9:
   ```typescript
   sitemap: "https://YOUR-PROJECT-NAME.pages.dev/sitemap.xml",
   ```

3. **`public/robots.txt`** - Line 3:
   ```
   Sitemap: https://YOUR-PROJECT-NAME.pages.dev/sitemap.xml
   ```

Then commit and push:
```bash
git add app/sitemap.ts app/robots.ts public/robots.txt
git commit -m "Update domain URLs"
git push
```

Cloudflare will automatically rebuild and redeploy!

## 🎯 Alternative: GitHub Pages (Also Free)

### Using GitHub Actions (Automatic)

1. **Push code to GitHub** (same as Step 3 above)

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: `gh-pages` (will be created automatically)
   - Folder: `/ (root)`
   - Click "Save"

3. **The workflow will deploy automatically!**
   - Go to Actions tab to see deployment progress
   - Your site will be at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME`

## ✅ Post-Deployment Checklist

- [ ] Site loads at deployed URL
- [ ] All pages work (test navigation)
- [ ] Contact form works (test mailto link)
- [ ] Mobile view looks good
- [ ] Domain URLs updated in code
- [ ] Custom domain set up (optional)

## 🆘 Troubleshooting

### "npm is not recognized"
- Node.js is not installed or not in PATH
- Install Node.js from nodejs.org
- Restart your terminal after installation

### Build fails
- Check Node.js version: `node --version` (needs 18+)
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again

### Deployment fails
- Check build logs in Cloudflare/GitHub
- Ensure `output: 'export'` is in `next.config.js`
- Verify build command is `npm run build`
- Verify output directory is `out`

### Pages show 404
- Check that `trailingSlash: true` is in `next.config.js`
- Verify all routes are properly defined
- Check browser console for errors

## 📞 Need Help?

- Check `DEPLOYMENT.md` for detailed instructions
- Check `QUICKSTART.md` for quick reference
- Review build logs in your hosting platform

---

**You're all set!** Your website should be live in about 10 minutes. 🚀
