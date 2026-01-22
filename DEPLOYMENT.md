# Deployment Guide

This guide provides step-by-step instructions for deploying the NeuroResponse Intelligence website.

## Prerequisites

- Node.js 18+ and npm installed
- Git repository (GitHub, GitLab, or Bitbucket)
- Account for your chosen hosting platform

## Option 1: Cloudflare Pages (Recommended - Free)

### Automatic Deployment via Git

1. **Push your code to GitHub/GitLab/Bitbucket**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Go to Cloudflare Pages**
   - Visit [https://pages.cloudflare.com](https://pages.cloudflare.com)
   - Sign in with your Cloudflare account (create one if needed)

3. **Create a new project**
   - Click "Create a project"
   - Click "Connect to Git"
   - Select your repository

4. **Configure build settings**
   - **Framework preset**: Next.js (Static HTML Export)
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Root directory**: `/` (leave as default)
   - **Node version**: 18 or higher

5. **Deploy**
   - Click "Save and Deploy"
   - Your site will be live at `https://<project-name>.pages.dev`

6. **Custom Domain (Optional)**
   - Go to your project settings
   - Click "Custom domains"
   - Add your domain and follow DNS setup instructions

### Manual Deployment

1. **Build the site locally**
   ```bash
   npm install
   npm run build
   ```

2. **Upload to Cloudflare Pages**
   - Go to Cloudflare Pages dashboard
   - Click "Upload assets"
   - Drag and drop the `out` folder contents
   - Deploy

### Using GitHub Actions (Automated)

1. **Set up Cloudflare API tokens**
   - Go to Cloudflare Dashboard → My Profile → API Tokens
   - Create a token with "Cloudflare Pages:Edit" permissions
   - Note your Account ID from the dashboard

2. **Add secrets to GitHub**
   - Go to your GitHub repository → Settings → Secrets and variables → Actions
   - Add:
     - `CLOUDFLARE_API_TOKEN`: Your API token
     - `CLOUDFLARE_ACCOUNT_ID`: Your Account ID

3. **Push to trigger deployment**
   - The workflow in `.github/workflows/cloudflare-pages.yml` will automatically deploy on push to main/master

## Option 2: GitHub Pages

### Using GitHub Actions (Recommended)

1. **Enable GitHub Pages**
   - Go to your repository → Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` (will be created automatically)
   - Folder: `/ (root)`

2. **Push your code**
   ```bash
   git add .
   git commit -m "Setup GitHub Pages"
   git push
   ```

3. **Automatic deployment**
   - The workflow in `.github/workflows/deploy.yml` will automatically:
     - Build the site
     - Deploy to GitHub Pages
   - Your site will be live at `https://<username>.github.io/<repo-name>`

### Manual Deployment

1. **Build the site**
   ```bash
   npm install
   npm run build
   ```

2. **Deploy to gh-pages branch**
   ```bash
   git checkout --orphan gh-pages
   git rm -rf .
   cp -r out/* .
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   ```

## Option 3: Netlify (Alternative Free Option)

1. **Push to Git** (same as Cloudflare)

2. **Go to Netlify**
   - Visit [https://app.netlify.com](https://app.netlify.com)
   - Sign in with GitHub/GitLab/Bitbucket

3. **New site from Git**
   - Click "Add new site" → "Import an existing project"
   - Connect your repository

4. **Build settings**
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
   - **Node version**: 18

5. **Deploy**
   - Click "Deploy site"
   - Your site will be live at `https://<random-name>.netlify.app`

## Post-Deployment Steps

### 1. Update Domain in Code

After deployment, update the domain in these files:

- `app/sitemap.ts`: Change `https://neuroresponse.ai` to your actual domain
- `app/robots.ts`: Change `https://neuroresponse.ai` to your actual domain
- `public/robots.txt`: Change `https://neuroresponse.ai` to your actual domain

### 2. Update Contact Email

Update the contact email in `app/contact/page.tsx`:
```typescript
const CONTACT_EMAIL = "your-actual-email@example.com";
```

### 3. Test Your Site

- Visit all pages to ensure they load correctly
- Test the contact form (mailto link)
- Check mobile responsiveness
- Verify SEO metadata

### 4. Set Up Custom Domain (Optional)

1. **Cloudflare Pages**
   - Project Settings → Custom domains → Add domain
   - Follow DNS configuration instructions

2. **GitHub Pages**
   - Repository Settings → Pages → Custom domain
   - Add your domain and configure DNS

## Troubleshooting

### Build Fails

- Ensure Node.js 18+ is installed
- Run `npm install` to ensure all dependencies are installed
- Check for TypeScript errors: `npm run lint`
- Verify all markdown files in `content/posts/` have proper frontmatter

### Pages Not Loading

- Check that `output: 'export'` is set in `next.config.js`
- Verify all routes are properly defined
- Check browser console for errors

### Images Not Loading

- Ensure `images: { unoptimized: true }` is in `next.config.js`
- Use relative paths for images
- Check that images are in the `public` folder

### Blog Posts Not Showing

- Verify markdown files are in `content/posts/`
- Check that frontmatter includes: title, date, excerpt, slug
- Ensure file names match the slug in frontmatter

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build (requires build first)
npm run start
```

## Support

For deployment issues, check:
- Platform-specific documentation
- Next.js static export documentation
- Your hosting platform's support resources
