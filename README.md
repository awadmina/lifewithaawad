# LifeWithAwad — Premium Creator Website

A cinematic, modern, and responsive static website built for the LifeWithAwad brand. Faith-inspired, visually stunning, and fully customizable.

## 🎬 Features

- **Fully Responsive**: Works beautifully on desktop, tablet, and mobile devices
- **Cinematic Design**: Premium gradients, glassmorphism, smooth animations, and floating elements
- **Faith-Inspired Aesthetic**: Deep blacks, warm gold, cream accents, and meaningful design
- **No Framework Dependencies**: Pure HTML, CSS, and JavaScript—easy to host anywhere
- **Smooth Animations**: Scroll reveals, hover effects, animated gradients, and entrance animations
- **Accessible**: Semantic HTML, keyboard navigation, and screen reader support
- **Fast Loading**: Optimized CSS and minimal JavaScript

## 📁 File Structure

```
Personal Website/
├── index.html       # Main HTML structure with all sections
├── styles.css       # Complete styling with responsive design
├── script.js        # Interactivity: menu, animations, scroll behavior
└── README.md        # This file
```

## 🎨 Sections Included

1. **Navigation Bar** - Fixed, responsive hamburger menu on mobile
2. **Hero Section** - Cinematic title, tagline, CTA buttons, and animated video mockup
3. **What is LifeWithAwad** - Four pillar cards explaining the brand
4. **Latest Videos** - YouTube video grid with embed fallback
5. **Featured Video** - Large "Start Here" section with YouTube embed
6. **Content Pillars** - Four-column showcase (Faith, Life, Visuals, Clothing)
7. **Beloved by LifeWithAwad** - Merch/clothing preview with three product cards
8. **Creative Portfolio** - Six-card grid for showcasing work categories
9. **About** - Personal bio section
10. **Call to Action** - Final section with subscribe/contact buttons
11. **Footer** - Links, social icons, and copyright

## 🔧 Customization Guide

### 1. Update Social Media Links

In `index.html`, search for these sections and replace with your actual links:

```html
<!-- YouTube Channel -->
href="https://www.youtube.com/@LifeWithAwad"

<!-- Instagram Profile -->
href="https://www.instagram.com/lifewithaawad"

<!-- TikTok Profile -->
href="https://www.tiktok.com/@lifewithaawad"

<!-- Email Contact -->
href="mailto:contact@lifewithawaad.com"
```

### 2. Update YouTube Embeds

**Featured Video** (Line ~285):
```html
<iframe
    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
    ...
</iframe>
```

Replace `YOUR_VIDEO_ID` with your actual YouTube video ID.

**Latest Videos Playlist** (Line ~258):
```html
<iframe
    src="https://www.youtube.com/embed?listType=user_uploads&list=LifeWithAwad"
    ...
</iframe>
```

Replace `LifeWithAwad` with your actual YouTube channel name or use the playlist ID if available.

### 3. Add Real Product Images for Merch

In the `.merch-image-placeholder` divs, replace with actual images:

```html
<div class="merch-image-placeholder">
    <img src="jesus-saves-shirt.jpg" alt="Jesus Saves Shirt" />
</div>
```

### 4. Add Portfolio Images

In the `.portfolio-placeholder` divs, add your actual project images:

```html
<div class="portfolio-placeholder">
    <img src="church-film-thumbnail.jpg" alt="Church Film" />
</div>
```

### 5. Update Brand Colors (Optional)

Edit `:root` CSS variables in `styles.css`:

```css
:root {
    --color-gold: #d4af37;              /* Change gold accent color */
    --color-black: #0a0a0a;             /* Change black/background */
    --color-charcoal: #1a1a1a;          /* Change dark gray */
    --color-cream: #f5f1e8;             /* Change cream/text color */
    --color-brown: #3d2817;             /* Change brown accent */
}
```

### 6. Update Copy/Text

All text is easy to find in `index.html`:
- Hero tagline: "Faith. Creativity. Life through my lens."
- About section: "I'm Mina Awad, a creator building..."
- Section titles and descriptions

Simply search and replace with your own copy.

### 7. Add Favicon

Add a favicon to the `<head>` section:

```html
<link rel="icon" type="image/x-icon" href="favicon.ico">
```

## 🚀 Deployment

### Option 1: GitHub Pages (Free)

1. Create a GitHub repository named `lifewithaawad.github.io`
2. Push your files to the `main` branch
3. Your site is live at `https://lifewithaawad.github.io`

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/lifewithaawad/lifewithaawad.github.io.git
git push -u origin main
```

### Option 2: Netlify (Free)

1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git" and connect your GitHub repo
3. Deploy is automatic on every push
4. Custom domain available (paid)

### Option 3: Vercel (Free)

1. Go to [vercel.com](https://vercel.com)
2. Connect your GitHub account
3. Import your repository
4. Deploy is automatic

### Option 4: Self-Hosted

1. Upload files to your web hosting provider
2. No build process needed—it's static HTML/CSS/JS
3. Ensure `.htaccess` (Apache) or equivalent redirects work if needed

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 769px - 1023px
- **Mobile**: 768px and below
- **Small Mobile**: 480px and below

All designs are tested and optimized for each breakpoint.

## 🎯 Performance Tips

- Images: Use optimized JPG/WebP formats, consider lazy loading for production
- CSS: Already minified and using CSS variables for efficiency
- JavaScript: Minimal script—no external dependencies
- Hosting: Static site = very fast, low bandwidth costs

## 🔐 Analytics (Optional)

To add Google Analytics:

1. Get your Google Analytics ID
2. Add this to the `<head>` section of `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'YOUR_GA_ID');
</script>
```

The `trackEvent()` function in `script.js` is already set up to send events.

## 🎨 Design System

### Colors
- **Primary**: Gold (#d4af37) - CTA, highlights, hover states
- **Background**: Black (#0a0a0a) - Main background
- **Text**: Cream (#f5f1e8) - Primary text color
- **Accents**: Brown, charcoal gradients for depth

### Typography
- **Font**: System fonts (Segoe UI, Tahoma, Geneva) for fast loading
- **Sizing**: Responsive using `clamp()` for all font sizes
- **Weight**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Spacing
- Uses CSS variables for consistent spacing: `--spacing-xs` through `--spacing-3xl`
- Based on 0.5rem units for flexibility

### Effects
- **Transitions**: Smooth 0.3s default, 0.6s for slower animations
- **Hover**: Scale, shadow, color, and translate transforms
- **Animations**: Scroll reveals, floating elements, shimmer effects

## 📞 Support & Updates

To modify or enhance:
- **Navigation**: Edit `.nav-menu` items
- **Sections**: Each section is clearly marked in HTML with `<!-- ====== Section Name ====== -->`
- **Colors**: Change CSS variables in `:root`
- **Animations**: Modify `@keyframes` in `styles.css`
- **Interactivity**: Add to `script.js`

## 🙏 Faith-First Design

This website intentionally blends faith, creativity, and storytelling:
- Warm color palette suggests purpose and meaning
- Language is inspiring and intentional
- Design space reflects the personal brand without being preachy
- Every element serves the narrative of purpose-driven content

## 📄 License

© 2026 LifeWithAwad. All rights reserved.

---

**Built with purpose. Made with care. Designed for impact.**

LifeWithAwad — Faith. Creativity. Life through my lens.
