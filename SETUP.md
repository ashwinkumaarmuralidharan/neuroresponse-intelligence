# Quick Setup Guide

## First Time Setup

1. **Install Node.js**
   - Download from [nodejs.org](https://nodejs.org/) (version 18 or higher)
   - Verify installation:
     ```bash
     node --version
     npm --version
     ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   - Open [http://localhost:3000](http://localhost:3000)

4. **Build for Production**
   ```bash
   npm run build
   ```
   - Output will be in the `out/` directory

## Common Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server (after build)
npm run lint         # Check for linting errors
```

## Project Structure

- `app/` - Next.js pages and routes
- `components/` - React components
- `content/posts/` - Markdown blog posts
- `lib/` - Utility functions
- `public/` - Static assets
- `styles/` - Global CSS

## Next Steps

1. Review and customize content in `app/` pages
2. Add/edit blog posts in `content/posts/`
3. Update contact email in `app/contact/page.tsx`
4. Customize colors in `tailwind.config.ts`
5. See `DEPLOYMENT.md` for deployment instructions
