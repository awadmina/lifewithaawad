// ====== Hamburger Menu Toggle ======
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ====== Scroll Reveal Animation ======
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = entry.target.getAttribute('data-delay') || 0;
            setTimeout(() => {
                entry.target.style.animation = `revealUp 0.6s ease forwards`;
            }, delay);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('[data-reveal]').forEach(element => {
    observer.observe(element);
});

// ====== Staggered Reveal for Multiple Elements ======
function staggerReveal(containerSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const elements = container.querySelectorAll('[data-reveal]');
    elements.forEach((el, index) => {
        el.setAttribute('data-delay', index * 100);
    });
}

// Apply stagger effect to card grids
staggerReveal('.pillars-grid');
staggerReveal('.videos-grid');
staggerReveal('.merch-grid');
staggerReveal('.portfolio-grid');
staggerReveal('.pillars-showcase');

// ====== Smooth Scroll for Anchor Links ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ====== Active Navigation Link on Scroll ======
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ====== Navbar Background on Scroll ======
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.borderBottomColor = 'rgba(212, 175, 55, 0.2)';
    } else {
        navbar.style.borderBottomColor = 'rgba(212, 175, 55, 0.1)';
    }
});

// ====== Dynamic YouTube Videos Loading (Optional Enhancement) ======
// This attempts to fetch the latest videos from YouTube channel
// Note: This requires server-side proxy or CORS handling
// For now, the static embed serves as fallback

async function loadYouTubeVideos() {
    const channelName = 'LifeWithAwad';
    const videosGrid = document.getElementById('videos-grid');

    // IMPORTANT: YouTube embeds may be blocked by CORS policies
    // The iframe embed below serves as the reliable fallback
    // To implement dynamic loading:
    // 1. Use YouTube Data API with a backend server
    // 2. Or use an RSS feed reader for the channel
    // 3. The current embed will automatically show latest uploads

    // Placeholder for future implementation
    console.log('YouTube videos are loaded via embedded iframe');
    console.log('To update videos: Upload to your YouTube channel @' + channelName);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadYouTubeVideos();
    console.log('LifeWithAwad website loaded successfully');
});

// ====== Scroll to Top Button (Optional) ======
function createScrollToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'scroll-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: rgba(212, 175, 55, 0.9);
        color: #0a0a0a;
        border: none;
        cursor: pointer;
        font-size: 1.5rem;
        font-weight: bold;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
    `;

    document.body.appendChild(button);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });

    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

createScrollToTopButton();

// ====== Prevent Menu Close on Outside Click (Already Handled) ======
// Menu closes on link click, which is the desired behavior

// ====== Performance: Throttle Scroll Events ======
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ====== Add CSS Class to Nav on Scroll ======
const scrollHandler = throttle(() => {
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 2px 10px rgba(212, 175, 55, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
}, 100);

window.addEventListener('scroll', scrollHandler);

// ====== Keyboard Navigation Support ======
document.addEventListener('keydown', (e) => {
    // ESC to close menu
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }

    // Allow tab navigation
    // Browser handles this by default
});

// ====== Fade In Hero on Load ======
window.addEventListener('load', () => {
    const heroContent = document.querySelector('.hero-content');
    const heroVisual = document.querySelector('.hero-visual');

    if (heroContent) {
        heroContent.style.animation = 'slideInLeft 0.8s ease forwards';
    }
    if (heroVisual) {
        heroVisual.style.animation = 'slideInRight 0.8s ease forwards';
    }
});

// ====== Utility: Log Analytics (Optional) ======
function trackEvent(eventName, eventData = {}) {
    // This is where you would integrate Google Analytics, Mixpanel, etc.
    // Example:
    // gtag('event', eventName, eventData);
    console.log(`Event: ${eventName}`, eventData);
}

// Track button clicks
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const buttonText = btn.textContent.trim();
        trackEvent('button_click', { button: buttonText });
    });
});

// ====== Responsive Video Embeds ======
function makeVideosResponsive() {
    const videos = document.querySelectorAll('iframe[src*="youtube"]');
    videos.forEach(video => {
        const wrapper = document.createElement('div');
        wrapper.style.position = 'relative';
        wrapper.style.paddingBottom = '56.25%';
        wrapper.style.height = '0';
        wrapper.style.overflow = 'hidden';
        wrapper.style.borderRadius = '8px';

        const iframe = video.cloneNode(true);
        iframe.style.position = 'absolute';
        iframe.style.top = '0';
        iframe.style.left = '0';
        iframe.style.width = '100%';
        iframe.style.height = '100%';

        wrapper.appendChild(iframe);
        video.parentNode.replaceChild(wrapper, video);
    });
}

document.addEventListener('DOMContentLoaded', makeVideosResponsive);

console.log('All JavaScript functionality loaded for LifeWithAwad');
