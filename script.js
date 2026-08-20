const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const header = document.querySelector(".site-header");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (menuToggle && nav) {
  menuToggle.setAttribute("aria-expanded", "false");

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("is-open");
    menuToggle.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(nav.classList.contains("is-open")));
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.classList.remove("is-open");
      menuToggle.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

const getHeaderOffset = () => {
  return header ? header.getBoundingClientRect().height + 18 : 0;
};

const animateScrollTo = (targetTop) => {
  const startTop = window.scrollY;
  const distance = targetTop - startTop;

  if (reduceMotion || Math.abs(distance) < 2) {
    window.scrollTo(0, targetTop);
    return;
  }

  const duration = Math.min(900, Math.max(420, Math.abs(distance) * 0.5));
  const startTime = performance.now();

  const easeOutQuart = (value) => 1 - Math.pow(1 - value, 4);

  const step = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startTop + distance * easeOutQuart(progress));

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};

const scrollToHash = (hash) => {
  if (!hash || hash === "#") return false;

  const target = document.getElementById(decodeURIComponent(hash.slice(1)));
  if (!target) return false;

  const top = target.getBoundingClientRect().top + window.scrollY - getHeaderOffset();
  animateScrollTo(Math.max(top, 0));
  return true;
};

document.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) return;

  const link = event.target.closest('a[href*="#"]');
  if (!(link instanceof HTMLAnchorElement)) return;

  const url = new URL(link.href, window.location.href);
  const isSamePage = url.origin === window.location.origin && url.pathname === window.location.pathname;

  if (!isSamePage || !url.hash || url.hash === "#") return;

  event.preventDefault();

  if (scrollToHash(url.hash)) {
    history.pushState(null, "", url.hash);
  }
});

window.addEventListener("load", () => {
  if (window.location.hash) {
    requestAnimationFrame(() => scrollToHash(window.location.hash));
  }
});

const navLinks = Array.from(document.querySelectorAll('.main-nav a[href^="#"], .footer-grid a[href^="#"]'));
const pageSections = navLinks
  .map((link) => document.getElementById(link.hash.slice(1)))
  .filter((section, index, sections) => section && sections.indexOf(section) === index);

const updateScrollState = () => {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
  document.documentElement.style.setProperty("--scroll-progress", `${Math.min(progress, 100)}%`);

  if (header) {
    header.classList.toggle("is-scrolled", window.scrollY > 18);
  }

  if (!pageSections.length) return;

  const currentPoint = window.scrollY + getHeaderOffset() + 90;
  let activeSection = pageSections[0];

  pageSections.forEach((section) => {
    if (section.offsetTop <= currentPoint) {
      activeSection = section;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.hash === `#${activeSection.id}`);
  });
};

let scrollTicking = false;
window.addEventListener("scroll", () => {
  if (scrollTicking) return;

  scrollTicking = true;
  requestAnimationFrame(() => {
    updateScrollState();
    scrollTicking = false;
  });
}, { passive: true });

const revealTargets = new Set(document.querySelectorAll([
  ".hero-copy",
  ".hero-media",
  ".stats-band div",
  ".section-heading",
  ".card-grid > *",
  ".about-section > *",
  ".about-mentor-list article",
  ".mission-card",
  ".focus-strip span",
  ".journey-gallery figure",
  ".timeline-grid article",
  ".faq-list details",
  ".contact-section > *"
].join(", ")));

revealTargets.forEach((element, index) => {
  element.classList.add("reveal-on-scroll");
  element.style.setProperty("--reveal-delay", `${Math.min((index % 6) * 70, 350)}ms`);
});

if ("IntersectionObserver" in window && !reduceMotion) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -12% 0px", threshold: 0.1 });

  revealTargets.forEach((element) => revealObserver.observe(element));
} else {
  revealTargets.forEach((element) => element.classList.add("is-visible"));
}

updateScrollState();
