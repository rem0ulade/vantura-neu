(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(pointer: fine)').matches;

  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) toggle.addEventListener('click', () => links.classList.toggle('open'));

  const revealItems = [...document.querySelectorAll('[data-reveal]')];
  if (reduceMotion) {
    revealItems.forEach((item) => item.classList.add('visible'));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    revealItems.forEach((item) => observer.observe(item));
  }

  if (!reduceMotion && finePointer) {
    const cursor = document.querySelector('.grace-cursor');
    const glow = document.querySelector('.grace-cursor-glow');
    let mx = -100, my = -100, gx = -100, gy = -100;

    window.addEventListener('pointermove', (event) => {
      mx = event.clientX;
      my = event.clientY;
      document.documentElement.classList.add('pointer-active');
    });

    document.addEventListener('pointerover', (event) => {
      const interactive = event.target.closest('a, button, [data-tilt]');
      if (cursor) cursor.classList.toggle('hovering', Boolean(interactive));
    });

    const draw = () => {
      gx += (mx - gx) * .14;
      gy += (my - gy) * .14;
      if (cursor) cursor.style.transform = `translate3d(${mx}px,${my}px,0)`;
      if (glow) glow.style.transform = `translate3d(${gx}px,${gy}px,0)`;
      requestAnimationFrame(draw);
    };
    requestAnimationFrame(draw);

    document.querySelectorAll('[data-tilt]').forEach((card) => {
      card.addEventListener('pointermove', (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - .5;
        const y = (event.clientY - rect.top) / rect.height - .5;
        card.style.setProperty('--tx', `${x * 6}deg`);
        card.style.setProperty('--ty', `${y * -6}deg`);
        card.style.setProperty('--gx', `${(x + .5) * 100}%`);
        card.style.setProperty('--gy', `${(y + .5) * 100}%`);
      });
      card.addEventListener('pointerleave', () => {
        card.style.setProperty('--tx', '0deg');
        card.style.setProperty('--ty', '0deg');
      });
    });
  }
})();
