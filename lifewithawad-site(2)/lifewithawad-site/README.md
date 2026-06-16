# LifeWithAwad Website

A free-hosting-ready static website for the LifeWithAwad creator brand.

## Files

- `index.html` — website structure
- `styles.css` — full responsive cinematic design
- `script.js` — mobile menu, scroll animations, YouTube latest-video cards, featured latest upload

## YouTube auto-update setup

The site is connected to the LifeWithAwad YouTube channel ID:

`UCV_e8q6koAtP-dtfpjgqPDA`

The main reliable auto-updating area is the embedded YouTube uploads playlist:

`UUV_e8q6koAtP-dtfpjgqPDA`

The custom cards also try to pull the latest uploads through the channel RSS feed using RSS2JSON. If that service is temporarily unavailable, the embedded playlist still works as the fallback.

## What to edit later

Open `index.html` and replace these placeholder links when ready:

- Instagram link: `https://www.instagram.com/`
- TikTok link: `https://www.tiktok.com/`

The email is currently set to:

`mina.awad.448@gmail.com`

## Free hosting options

### Netlify Drop

1. Go to Netlify Drop.
2. Drag the full `lifewithawad-site` folder into the upload box.
3. Netlify gives you a free public link.

### GitHub Pages

1. Create a new GitHub repository.
2. Upload `index.html`, `styles.css`, and `script.js`.
3. Go to Settings → Pages.
4. Deploy from the main branch.

### Vercel

1. Create a free Vercel account.
2. Import a GitHub repository or drag in the project.
3. Deploy as a static site.
