const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.getElementById('site-nav');
const navBackdrop = document.querySelector('.nav-backdrop');

function setNavOpen(open) {
  if (!header || !navToggle) return;
  header.setAttribute('data-nav-open', open ? 'true' : 'false');
  navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  navToggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
  document.body.classList.toggle('nav-open', open);
  if (navBackdrop) {
    navBackdrop.hidden = !open;
    navBackdrop.classList.toggle('is-visible', open);
    navBackdrop.setAttribute('aria-hidden', open ? 'false' : 'true');
  }
}

function updateHeader() {
  header?.setAttribute('data-scrolled', window.scrollY > 16 ? 'true' : 'false');
}

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

navToggle?.addEventListener('click', () => {
  const open = header?.getAttribute('data-nav-open') !== 'true';
  setNavOpen(open);
});

navBackdrop?.addEventListener('click', () => setNavOpen(false));

siteNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setNavOpen(false));
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 960) setNavOpen(false);
}, { passive: true });

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setNavOpen(false);
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const href = link.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    event.preventDefault();
    setNavOpen(false);
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.querySelectorAll('.reveal').forEach((el) => {
  if (prefersReducedMotion) {
    el.classList.add('is-visible');
  }
});

document.querySelectorAll('.hero .reveal').forEach((el) => {
  el.classList.add('is-visible');
});

if (!prefersReducedMotion) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.14, rootMargin: '0px 0px -8% 0px' }
  );

  document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => {
    revealObserver.observe(el);
  });

  const heroImage = document.querySelector('.hero-image');
  if (heroImage) {
    const onHeroScroll = () => {
      const offset = Math.min(window.scrollY, window.innerHeight);
      heroImage.style.transform = `scale(1.1) translateY(${offset * 0.28}px)`;
    };
    onHeroScroll();
    window.addEventListener('scroll', onHeroScroll, { passive: true });
  }

  const parallaxMeta = [...document.querySelectorAll('[data-parallax], .parallax-wrap')].map((el) => ({
    el,
    speed: Number(el.dataset.parallax) || 0.08,
  }));

  let parallaxTicking = false;

  function updateParallax() {
    parallaxTicking = false;
    const viewportMid = window.innerHeight * 0.5;

    parallaxMeta.forEach(({ el, speed }) => {
      const rect = el.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      const delta = (rect.top + rect.height * 0.5 - viewportMid) * speed;
      el.style.transform = `translate3d(0, ${delta.toFixed(2)}px, 0)`;
    });
  }

  function onParallaxScroll() {
    if (parallaxTicking) return;
    parallaxTicking = true;
    requestAnimationFrame(updateParallax);
  }

  if (parallaxMeta.length) {
    updateParallax();
    window.addEventListener('scroll', onParallaxScroll, { passive: true });
    window.addEventListener('resize', onParallaxScroll, { passive: true });
  }
}
