# Pre-Deployment Checklist

Use this checklist before deploying your site to ensure everything is configured correctly.

## ✅ Configuration

- [ ] **Domain Updated**
  - [ ] `app/sitemap.ts` - Update baseUrl (line 5)
  - [ ] `app/robots.ts` - Update sitemap URL (line 9)
  - [ ] `public/robots.txt` - Update sitemap URL (line 3)

- [ ] **Contact Information**
  - [ ] `app/contact/page.tsx` - Update CONTACT_EMAIL constant (line 6)
  - [ ] Verify mailto links work correctly

- [ ] **Branding** (if customizing)
  - [ ] Logo updated in `components/layout/Navbar.tsx`
  - [ ] Favicon replaced in `public/` (icon.svg or favicon.ico)
  - [ ] Colors customized in `tailwind.config.ts` (if needed)

## ✅ Content Review

- [ ] All page content reviewed and accurate
- [ ] Team information correct in `app/team/page.tsx`
- [ ] Blog posts reviewed in `content/posts/`
- [ ] Legal pages (Privacy, Terms, Disclaimer) reviewed
- [ ] No placeholder text remaining
- [ ] No "NS-Predict.ai" references (should be "NeuroResponse Intelligence")

## ✅ Build & Test

- [ ] Dependencies installed: `npm install`
- [ ] Build succeeds: `npm run build`
- [ ] Build verification passes: `npm run verify`
- [ ] Local testing: `npm run dev` - all pages load correctly
- [ ] No console errors in browser
- [ ] All links work (no 404s)
- [ ] Mobile responsiveness checked
- [ ] Contact form works (mailto opens correctly)

## ✅ SEO & Metadata

- [ ] All pages have unique titles and descriptions
- [ ] OpenGraph tags present (check with [opengraph.xyz](https://www.opengraph.xyz/))
- [ ] Sitemap generates correctly (`/sitemap.xml`)
- [ ] Robots.txt accessible (`/robots.txt`)
- [ ] Favicon displays correctly

## ✅ Accessibility

- [ ] Semantic HTML used throughout
- [ ] ARIA labels present where needed
- [ ] Keyboard navigation works
- [ ] Color contrast meets WCAG AA (use [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/))
- [ ] Images have alt text (if any added)

## ✅ Deployment Setup

- [ ] Git repository created and code pushed
- [ ] GitHub Actions workflows configured (if using)
- [ ] Cloudflare/GitHub Pages/Netlify account ready
- [ ] Environment variables set (if needed)
- [ ] Custom domain DNS configured (if using)

## ✅ Post-Deployment

- [ ] Site loads at deployed URL
- [ ] All pages accessible
- [ ] HTTPS enabled (automatic on most platforms)
- [ ] Analytics configured (if using)
- [ ] Custom domain working (if configured)
- [ ] Test contact form from live site
- [ ] Share with team for final review

## 📝 Notes

- Remember to update domain URLs after first deployment
- Keep `DEPLOYMENT.md` handy for reference
- Test on multiple devices and browsers
- Monitor for any build errors in deployment logs

---

**Ready to deploy?** Follow the instructions in [DEPLOYMENT.md](./DEPLOYMENT.md)
