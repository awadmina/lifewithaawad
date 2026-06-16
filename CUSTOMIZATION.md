# Quick Customization Checklist

## 🎯 Essential Updates (Before Going Live)

### 1. Social Media Links
Update these links in `index.html`:
- [ ] YouTube channel: Search for `@LifeWithAwad` and replace with your actual channel
- [ ] Instagram: Search for `lifewithaawad` and replace with your handle
- [ ] TikTok: Search for `lifewithaawad` and replace with your handle  
- [ ] Email: Search for `contact@lifewithawaad.com` and replace with your email

### 2. YouTube Videos
- [ ] Featured video: Find the line with `dQw4w9WgXcQ` and replace with your video ID
- [ ] Playlist: Update the channel name in the playlist embed if needed

### 3. Personal Copy
- [ ] Hero tagline: "Faith. Creativity. Life through my lens." (customize if desired)
- [ ] About section: Update "I'm Mina Awad..." with your actual bio
- [ ] Any other text that should reflect your brand voice

## 📸 Visual Assets (Optional but Recommended)

- [ ] Add product images for Beloved by LifeWithAwad shirts
- [ ] Add portfolio/project images to the Creative Work section
- [ ] Add favicon (16x16 and 32x32 icon)
- [ ] Add Open Graph images for social sharing (1200x630px)

## 🚀 Deployment Steps

### For GitHub Pages:
```bash
# Create new repo named: lifewithaawad.github.io
git init
git add .
git commit -m "Initial LifeWithAwad website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/lifewithaawad.github.io.git
git push -u origin main
```

### For Netlify/Vercel:
1. Connect GitHub repo to Netlify or Vercel
2. Deploy automatically (no build step needed)
3. Add custom domain in settings

## 🎨 Design Customization

### Color Scheme
If you want to change colors, edit the `:root` variables in `styles.css` (lines 1-16):
```css
--color-gold: #d4af37;        /* Main accent color */
--color-black: #0a0a0a;       /* Background */
--color-cream: #f5f1e8;       /* Text color */
```

### Font Size
The site uses responsive sizing with `clamp()`. All text scales automatically based on viewport width.

### Spacing & Margins
Adjust `--spacing-*` variables in `:root` if you want tighter or looser layout.

## ✨ Features You Have

✅ Fully responsive (mobile, tablet, desktop)
✅ Smooth scroll animations
✅ Hamburger menu for mobile
✅ YouTube embed with fallback
✅ Hover effects on all interactive elements
✅ Accessibility built-in (keyboard nav, screen readers)
✅ Fast loading (no dependencies, minimal JS)
✅ Faith-inspired aesthetic
✅ Premium, cinematic feel
✅ Easy to customize

## 📊 Analytics Setup (Optional)

To track visitor behavior, add Google Analytics ID to `index.html`:
1. Go to google.com/analytics
2. Set up a property for your domain
3. Copy your GA ID
4. Uncomment and add to `<head>` section

## 🎯 Next Steps

1. ✏️ Customize all links and text
2. 📸 Add your images (optional but recommended)
3. 🧪 Test locally: Open `index.html` in a browser
4. 🚀 Deploy to GitHub Pages, Netlify, or Vercel
5. 🌍 Add custom domain (optional)
6. 📈 Set up analytics (optional)

## 📱 Testing Checklist

Before going live, test on:
- [ ] Desktop (Chrome, Firefox, Safari, Edge)
- [ ] iPhone/iPad
- [ ] Android phone
- [ ] Tablet
- [ ] Fast 4G connection (mobile speed test)
- [ ] Slow 3G connection (check loading)

## 🆘 Common Issues

**YouTube embed not showing?**
- Check video ID is correct
- Ensure you're using the embed URL, not watch URL
- Test in different browsers

**Menu not closing on mobile?**
- This is fixed by the JavaScript
- Clear browser cache if still having issues

**Images not loading?**
- Ensure paths are correct (use relative paths)
- Check file extensions (.jpg, .png, .webp)

**Colors look different on phone?**
- This is normal—different screens have different color profiles
- Test on multiple devices

## 📞 File Locations

- HTML: `index.html`
- Styles: `styles.css` (all styling in one file)
- JavaScript: `script.js` (all interactivity in one file)
- Docs: `README.md` (full customization guide)
- This file: `CUSTOMIZATION.md`

## 🎬 Production Tips

1. **Minify CSS/JS** (optional): Use tools like cssminifier.com and jscompress.com for production
2. **Image Optimization**: Use tools like TinyPNG or ImageOptim
3. **CDN**: Use Netlify/Vercel for automatic CDN distribution
4. **Cache**: Set long expiration for static assets
5. **SEO**: Meta tags already included, but add Open Graph tags for social sharing

## 🔗 Useful Resources

- YouTube Channel Setup: youtube.com/creator_studio
- Domain Registration: namecheap.com, google.domains, gandi.net
- Email: Use custom email with your domain (Zoho Mail, Google Workspace)
- Icons: Icons already included with SVG (no external icon font)

---

**You're all set! This website is production-ready.**
Customize it, deploy it, and let your brand shine. 🌟

Faith. Creativity. Life through your lens.
