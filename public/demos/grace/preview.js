(() => {
  const brandStyles = document.createElement('link');
  brandStyles.rel = 'stylesheet';
  brandStyles.href = 'brand.css';
  document.head.appendChild(brandStyles);

  const appWindow = document.querySelector('.app-window');
  if (appWindow) {
    appWindow.innerHTML = '<img class="grace-product-shot" src="assets/grace-app-preview-fixed.svg" alt="The real Grace desktop workspace with chats, projects, agents and local controls" />';
  }

  const privacy = document.querySelector('.privacy-panel');
  if (privacy) {
    const identity = document.createElement('section');
    identity.className = 'grace-identity';
    identity.setAttribute('data-reveal', '');
    identity.innerHTML = `
      <div class="grace-identity-art" role="img" aria-label="Grace, the visual identity of the workspace"></div>
      <div class="grace-identity-copy">
        <div class="section-kicker">Meet Grace</div>
        <h2>Not just the name. The identity behind the workspace.</h2>
        <p>Grace represents calm control inside a complex system: many agents, models, tools and moving parts — brought together in one focused, private environment.</p>
        <p>She is the visual signature of the product and will appear throughout the workspace, website and future Grace experiences.</p>
        <span class="grace-signature">Grace · Your agent workspace</span>
      </div>`;
    privacy.parentNode.insertBefore(identity, privacy);
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(pointer: fine)').matches;

  const reveals = [...document.querySelectorAll('[data-reveal]')];
  if (reduceMotion) {
    reveals.forEach((el) => el.classList.add('visible'));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
    reveals.forEach((el) => observer.observe(el));
  }

  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-controls', 'primary-navigation');
    links.id = 'primary-navigation';

    const setMenuState = (open) => {
      links.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? 'Close' : 'Menu';
    };

    toggle.addEventListener('click', () => setMenuState(!links.classList.contains('open')));
    links.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => setMenuState(false));
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 720) setMenuState(false);
    });
  }

  if (!reduceMotion && finePointer) {
    const cursor = document.querySelector('.grace-cursor');
    const glow = document.querySelector('.grace-cursor-glow');
    let mouseX = -100;
    let mouseY = -100;
    let glowX = -100;
    let glowY = -100;

    const render = () => {
      glowX += (mouseX - glowX) * 0.14;
      glowY += (mouseY - glowY) * 0.14;
      if (cursor) cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      if (glow) glow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0)`;
      requestAnimationFrame(render);
    };

    window.addEventListener('pointermove', (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      document.documentElement.classList.add('pointer-active');
    });

    document.addEventListener('pointerover', (event) => {
      const interactive = event.target.closest('a, button, [data-tilt]');
      if (cursor) cursor.classList.toggle('hovering', Boolean(interactive));
    });

    document.querySelectorAll('[data-tilt]').forEach((card) => {
      card.addEventListener('pointermove', (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.setProperty('--tilt-x', `${x * 6}deg`);
        card.style.setProperty('--tilt-y', `${y * -6}deg`);
        card.style.setProperty('--glow-x', `${(x + 0.5) * 100}%`);
        card.style.setProperty('--glow-y', `${(y + 0.5) * 100}%`);
      });
      card.addEventListener('pointerleave', () => {
        card.style.setProperty('--tilt-x', '0deg');
        card.style.setProperty('--tilt-y', '0deg');
      });
    });

    const productWindow = document.querySelector('.app-window');
    if (productWindow) {
      productWindow.addEventListener('pointermove', (event) => {
        const rect = productWindow.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        productWindow.style.transform = `rotateY(${-4 + x * 3}deg) rotateX(${1.5 - y * 3}deg)`;
      });
      productWindow.addEventListener('pointerleave', () => {
        productWindow.style.transform = 'rotateY(-4deg) rotateX(1.5deg)';
      });
    }

    requestAnimationFrame(render);
  }
})();
