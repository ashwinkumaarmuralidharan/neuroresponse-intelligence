# NeuroResponse Intelligence Website

A modern, investor/clinic-ready website for NeuroResponse Intelligence, an AI/ML SaaS that predicts neurostimulator responder rates before surgery.

## 🚀 Quick Start

**New to this project?** Start here: **[START-HERE.md](./START-HERE.md)**

**Need to install Node.js?** See: **[INSTALL-NODEJS.md](./INSTALL-NODEJS.md)**

**Ready to deploy?** Follow: **[DEPLOY-NOW.md](./DEPLOY-NOW.md)**

## Features

- **Modern Stack**: Next.js 14+ with App Router, TypeScript, and Tailwind CSS
- **Static Export**: Fully static site for zero-cost hosting
- **SEO Optimized**: Complete metadata, sitemap, and robots.txt
- **Accessible**: WCAG-compliant with semantic HTML and ARIA labels
- **Responsive**: Mobile-first design that works on all devices
- **Blog System**: Markdown-based blog with 4 starter articles
- **Free Deployment**: Ready for Cloudflare Pages or GitHub Pages

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React + Custom SVG icons
- **Markdown**: gray-matter + remark
- **Deployment**: Static export (no server required)

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd neuroresponse-intelligence
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

To create a static export:

```bash
npm run build
```

The static files will be in the `out/` directory.

## Project Structure

```
/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout
│   ├── page.tsx           # Home page
│   ├── product/           # Product page
│   ├── vns-epilepsy/      # Use case page
│   ├── approach/          # Approach page
│   ├── team/              # Team page
│   ├── resources/         # Blog listing and posts
│   ├── contact/           # Contact page
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms of use
│   └── disclaimer/        # Disclaimer
├── components/            # React components
│   ├── ui/                # UI components (Button, Card, etc.)
│   ├── layout/            # Layout components (Navbar, Footer)
│   ├── sections/          # Section components (Hero, CTA, etc.)
│   └── icons/             # Custom SVG icons
├── content/               # Markdown blog posts
│   └── posts/             # Blog post markdown files
├── lib/                   # Utility functions
│   ├── markdown.ts        # Markdown parsing
│   └── utils.ts           # General utilities
├── public/                # Static assets
└── styles/                # Global styles
```

## Deployment

**📖 For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)**

### Quick Start

1. **Install dependencies and build:**
   ```bash
   npm install
   npm run build
   ```

2. **Choose your platform:**
   - **Cloudflare Pages** (Recommended - Free, fast CDN)
   - **GitHub Pages** (Free, integrated with GitHub)
   - **Netlify** (Free alternative)

3. **Automated deployment:**
   - GitHub Actions workflows are already configured in `.github/workflows/`
   - Just push to your repository and the workflows will handle deployment

### Deployment Options

- **Cloudflare Pages**: See [DEPLOYMENT.md](./DEPLOYMENT.md#option-1-cloudflare-pages-recommended---free)
- **GitHub Pages**: See [DEPLOYMENT.md](./DEPLOYMENT.md#option-2-github-pages)
- **Netlify**: See [DEPLOYMENT.md](./DEPLOYMENT.md#option-3-netlify-alternative-free-option)

### Post-Deployment Checklist

After deploying, remember to:
1. Update domain in `app/sitemap.ts` and `app/robots.ts`
2. Update contact email in `app/contact/page.tsx`
3. Test all pages and functionality
4. Set up custom domain (optional)

## Customization

### Updating Content

- **Pages**: Edit files in `app/` directory
- **Blog Posts**: Add markdown files to `content/posts/` with frontmatter
- **Components**: Modify components in `components/` directory

### Branding

- **Colors**: Update `tailwind.config.ts`
- **Logo**: Replace the WaveformIcon in `components/layout/Navbar.tsx`
- **Favicon**: Replace `public/favicon.ico`

### Contact Email

Update the contact email in `app/contact/page.tsx`:
```typescript
const CONTACT_EMAIL = "your-email@example.com";
```

## SEO

- All pages include proper metadata
- Sitemap is automatically generated at `/sitemap.xml`
- Robots.txt is configured at `/robots.txt`
- OpenGraph and Twitter card tags are included

## Accessibility

- Semantic HTML throughout
- ARIA labels where needed
- Keyboard navigation support
- WCAG AA color contrast compliance

## License

This project is proprietary. All rights reserved.

## Contact

For questions or support, contact: contact@neuroresponse.ai

---

**Note**: This product is in development and is not yet cleared for clinical use. See the [Disclaimer](/disclaimer) page for more information.
