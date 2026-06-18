// ===== CONFIG & CONSTANTS =====
// YouTube channel ID - replace with your channel ID
const CHANNEL_ID = "UCV_e8q6koAtP-dtfpjgqPDA";
// YouTube handle for display
const YOUTUBE_HANDLE = "LifeWithAwad";
// Number of videos to show in the grid
const VIDEO_LIMIT = 6;

// ===== DOM ELEMENTS =====
// Main page elements
const body = document.body;
const loader = document.querySelector("[data-loader]");
const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const progress = document.querySelector("[data-scroll-progress]");

// Video section elements
const videoGrid = document.getElementById("videoGrid");
const playlistTitle = document.querySelector("[data-playlist-title]");
const playlistDescription = document.querySelector("[data-playlist-description]");
const playlistLink = document.querySelector("[data-playlist-link]");

// Footer elements
const year = document.getElementById("year");

// ===== INITIALIZATION =====
// Set current year in footer
if (year) year.textContent = new Date().getFullYear();

// ===== PAGE LOADER =====
// Hide loading screen once the HTML is ready
window.addEventListener("DOMContentLoaded", () => {
  window.setTimeout(() => loader?.classList.add("is-hidden"), 80);
});

// ===== MOBILE MENU FUNCTIONALITY =====
// Close mobile navigation menu
const closeMenu = () => {
  body.classList.remove("menu-open");
  nav?.classList.remove("is-open");
  menuToggle?.setAttribute("aria-expanded", "false");
};

// Toggle menu on button click
menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  nav?.classList.toggle("is-open", !isOpen);
  body.classList.toggle("menu-open", !isOpen);
});

// Close menu when a nav link is clicked
nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

// Close menu on Escape key
window.addEventListener("keydown", (event) => { if (event.key === "Escape") closeMenu(); });

// ===== SCROLL INTERACTIONS =====
// Update header & scroll progress on scroll
const updateChrome = () => {
  // Add background to header when scrolled
  header?.classList.toggle("is-scrolled", window.scrollY > 12);

  // Update scroll progress bar width
  if (progress) {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    const pct = max > 0 ? (doc.scrollTop / max) * 100 : 0;
    progress.style.width = `${pct}%`;
  }
};

// Initial call and scroll listeners
updateChrome();
window.addEventListener("scroll", updateChrome, { passive: true });
window.addEventListener("resize", updateChrome);

// ===== REVEAL ANIMATIONS =====
// Animate elements when they enter viewport
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  // Fallback: show all if IntersectionObserver not supported
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

// ===== UTILITY FUNCTIONS =====
// Escape HTML special characters to prevent XSS
const escapeHtml = (value = "") => String(value).replace(/[&<>'"]/g, (char) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "'": "&#39;",
  '"': "&quot;",
}[char]));

// Format date string to readable format (e.g., "Jun 16, 2025")
const formatDate = (dateString) => {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return "Newest upload";
  return new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
};

// Extract YouTube video ID from item object
const getVideoId = (item) => {
  if (item.guid) return String(item.guid).replace("yt:video:", "");
  const match = item.link?.match(/[?&]v=([^&]+)/);
  return match ? match[1] : null;
};

// ===== VIDEO RENDERING =====
// Show error notice when videos can't load
const renderNotice = () => {
  if (!videoGrid) return;
  videoGrid.innerHTML = `
    <div class="video-notice">
      The custom video cards could not load right now, but the official YouTube playlist embed still stays connected to @${YOUTUBE_HANDLE} and can update from your uploads.
    </div>
  `;
};

// Update latest video details in the playlist panel
const updatePlaylistSummary = (item) => {
  const videoId = getVideoId(item);
  if (!videoId) return;

  const title = item.title || "Latest LifeWithAwad upload";
  const link = item.link || `https://www.youtube.com/watch?v=${videoId}`;

  if (playlistTitle) playlistTitle.textContent = title;
  if (playlistDescription) playlistDescription.textContent = `Published ${formatDate(item.pubDate || item.published)}. Watch the newest story from the LifeWithAwad`;
  if (playlistLink) playlistLink.href = link;
};

// Render video cards grid from YouTube feed items
const renderVideos = (items = []) => {
  if (!videoGrid) return;

  const videos = items.slice(0, VIDEO_LIMIT).map((item) => {
    const videoId = getVideoId(item);
    if (!videoId) return "";

    const title = escapeHtml(item.title || "Watch on YouTube");
    const link = escapeHtml(item.link || `https://www.youtube.com/watch?v=${videoId}`);
    const date = escapeHtml(formatDate(item.pubDate || item.published));
    const thumbnail = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

    return `
      <article class="video-card">
        <a class="video-thumb" href="${link}" target="_blank" rel="noopener" aria-label="Watch ${title} on YouTube">
          <img src="${thumbnail}" alt="${title}" loading="lazy" />
          <span class="play-badge">▶ Watch</span>
        </a>
        <div class="video-card-body">
          <h3 class="video-title"><a href="${link}" target="_blank" rel="noopener">${title}</a></h3>
          <div class="video-meta">
            <span>${date}</span>
            <span>@${YOUTUBE_HANDLE}</span>
          </div>
        </div>
      </article>
    `;
  }).join("");

  if (!videos.trim()) {
    renderNotice();
    return;
  }

  videoGrid.innerHTML = videos;
  updatePlaylistSummary(items[0]);
};

// ===== YOUTUBE FEED FETCHING =====
// Fetch latest videos from YouTube RSS feed and render them
const loadLatestVideos = async () => {
  // YouTube RSS URL for channel
  const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;
  // Convert RSS to JSON using free API
  const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("Video feed unavailable");

    const data = await response.json();
    if (!Array.isArray(data.items)) throw new Error("No videos returned");

    renderVideos(data.items);
  } catch (error) {
    console.warn(error);
    renderNotice();
  }
};

// ===== RUN ON PAGE LOAD =====
if (videoGrid) loadLatestVideos();
