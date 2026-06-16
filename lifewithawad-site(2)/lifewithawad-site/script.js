const CHANNEL_ID = "UCV_e8q6koAtP-dtfpjgqPDA";
const YOUTUBE_HANDLE = "LifeWithAwad";
const VIDEO_LIMIT = 6;

const body = document.body;
const loader = document.querySelector("[data-loader]");
const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const progress = document.querySelector("[data-scroll-progress]");
const videoGrid = document.getElementById("videoGrid");
const year = document.getElementById("year");
const featureTitle = document.querySelector("[data-feature-title]");
const featureDescription = document.querySelector("[data-feature-description]");
const featureLink = document.querySelector("[data-feature-link]");
const featureIframe = document.querySelector("[data-feature-iframe]");

if (year) year.textContent = new Date().getFullYear();

window.addEventListener("load", () => {
  window.setTimeout(() => loader?.classList.add("is-hidden"), 380);
});

const closeMenu = () => {
  body.classList.remove("menu-open");
  nav?.classList.remove("is-open");
  menuToggle?.setAttribute("aria-expanded", "false");
};

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  nav?.classList.toggle("is-open", !isOpen);
  body.classList.toggle("menu-open", !isOpen);
});

nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
window.addEventListener("keydown", (event) => { if (event.key === "Escape") closeMenu(); });

const updateChrome = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);

  if (progress) {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    const pct = max > 0 ? (doc.scrollTop / max) * 100 : 0;
    progress.style.width = `${pct}%`;
  }
};

updateChrome();
window.addEventListener("scroll", updateChrome, { passive: true });
window.addEventListener("resize", updateChrome);

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
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const escapeHtml = (value = "") => String(value).replace(/[&<>'"]/g, (char) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "'": "&#39;",
  '"': "&quot;",
}[char]));

const formatDate = (dateString) => {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return "Newest upload";
  return new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
};

const getVideoId = (item) => {
  if (item.guid) return String(item.guid).replace("yt:video:", "");
  const match = item.link?.match(/[?&]v=([^&]+)/);
  return match ? match[1] : null;
};

const renderNotice = () => {
  if (!videoGrid) return;
  videoGrid.innerHTML = `
    <div class="video-notice">
      The custom video cards could not load right now, but the official YouTube playlist embed still stays connected to @${YOUTUBE_HANDLE} and can update from your uploads.
    </div>
  `;
};

const updateFeaturedVideo = (item) => {
  const videoId = getVideoId(item);
  if (!videoId) return;

  const title = item.title || "Latest LifeWithAwad upload";
  const link = item.link || `https://www.youtube.com/watch?v=${videoId}`;

  if (featureTitle) featureTitle.textContent = title;
  if (featureDescription) featureDescription.textContent = `Published ${formatDate(item.pubDate || item.published)}. Watch the newest story from the LifeWithAwad channel.`;
  if (featureLink) featureLink.href = link;
  if (featureIframe) featureIframe.src = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
};

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
  updateFeaturedVideo(items[0]);
};

const loadLatestVideos = async () => {
  const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;
  const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

  try {
    const response = await fetch(apiUrl, { cache: "no-store" });
    if (!response.ok) throw new Error("Video feed unavailable");

    const data = await response.json();
    if (!Array.isArray(data.items)) throw new Error("No videos returned");

    renderVideos(data.items);
  } catch (error) {
    console.warn(error);
    renderNotice();
  }
};

loadLatestVideos();
