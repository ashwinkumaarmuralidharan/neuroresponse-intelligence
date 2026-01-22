# 🚀 START HERE - Get Your Website Live

Welcome! This guide will get your NeuroResponse Intelligence website deployed in the fastest way possible.

## ⚡ Quick Start (5 Steps)

### ✅ Step 1: Install Node.js
**If you see "node is not recognized" when running commands:**

1. Go to https://nodejs.org/
2. Download the **LTS version** (18 or higher)
3. Run the installer (keep default options)
4. **Restart your PowerShell/terminal**
5. Verify: Run `node --version` (should show v18+)

📖 **Detailed instructions:** See `INSTALL-NODEJS.md`

### ✅ Step 2: Build the Website

**Option A: Use the automated script (Windows)**
```powershell
.\setup-and-deploy.ps1
```

**Option B: Manual commands**
```bash
npm install
npm run build
npm run verify
```

### ✅ Step 3: Create GitHub Repository

1. Go to https://github.com/new
2. Name: `neuroresponse-intelligence`
3. Make it **Public**
4. Click "Create repository"
5. Copy the repository URL

### ✅ Step 4: Push Code to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

### ✅ Step 5: Deploy to Cloudflare Pages

1. Go to https://pages.cloudflare.com/
2. Sign in (free account)
3. Click "Create a project" → "Connect to Git"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Output directory: `out`
6. Click "Save and Deploy"
7. Wait 2-3 minutes
8. **Your site is live!** 🎉

## 📋 What You Get

- ✅ Professional website
- ✅ All pages working
- ✅ Mobile responsive
- ✅ SEO optimized
- ✅ Free hosting (Cloudflare Pages)
- ✅ Free custom domain option
- ✅ Automatic deployments on git push

## 🎯 Your Site URL

After deployment, your site will be at:
```
https://YOUR-PROJECT-NAME.pages.dev
```

You can customize this in Cloudflare Pages settings.

## 📝 After Deployment

1. **Update domain URLs** in:
   - `app/sitemap.ts`
   - `app/robots.ts`
   - `public/robots.txt`

2. **Update contact email** in:
   - `app/contact/page.tsx`

3. **Test everything:**
   - Visit all pages
   - Test contact form
   - Check mobile view

## 🆘 Need Help?

- **Node.js installation:** `INSTALL-NODEJS.md`
- **Detailed deployment:** `DEPLOY-NOW.md`
- **Full documentation:** `README.md`
- **Quick reference:** `QUICKSTART.md`

## ⏱️ Time Estimate

- Node.js installation: 5 minutes
- Building website: 2 minutes
- GitHub setup: 3 minutes
- Cloudflare deployment: 5 minutes
- **Total: ~15 minutes**

---

**Ready?** Start with Step 1 above! 🚀
