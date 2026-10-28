/* Lightweight particles and product previews. No tracking, no external requests. */
(() => {
  const hero = document.querySelector('.hero');
  const scene = document.querySelector('.home-scene');
  const dashboard = document.querySelector('.hero-dashboard');
  const canvas = document.querySelector('.particle-field');
  const toggle = document.querySelector('.motion-toggle');
  const ctx = canvas?.getContext('2d');
  if (!hero || !scene || !dashboard || !ctx || !toggle) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  const titles = { ankommen: 'Willkommen zu Hause.', filmabend: 'Zeit für deinen Lieblingsfilm.', nacht: 'Alles ruhig. Gute Nacht.' };
  const captions = { ankommen: 'Warmes Licht. Deine Musik. Dein Moment.', filmabend: 'Licht gedimmt. Vorhang zu. Film ab.', nacht: 'Lichter aus. Ruhe an. Entspannt einschlafen.' };
  document.querySelectorAll('[data-preset]').forEach(button => {
    button.addEventListener('click', () => {
      const preset = button.dataset.preset;
      scene.dataset.scene = preset;
      document.dispatchEvent(new CustomEvent('bonsai:scene', { detail: preset }));
      document.querySelectorAll('[data-preset]').forEach(other => other.setAttribute('aria-pressed', String(other === button)));
      document.getElementById('scene-title').textContent = titles[preset];
      document.getElementById('scene-caption').textContent = `Gestaltungsvorschau · ${captions[preset]}`;
      hero.style.setProperty('--scene-glow', {ankommen:'#fbe1d14d',filmabend:'#ece5df66',nacht:'#e5e5e54d'}[preset]);
    });
  });
  let width = 0, height = 0, particles = [], frame = 0, previous = 0;
  let visible = true, paused = false;
  const pointer = { x: -999, y: -999 };
  const active = () => !reduced.matches && !paused && visible && !document.hidden;
  function resize() {
    const rect = hero.getBoundingClientRect();
    width = rect.width; height = rect.height;
    const scale = Math.min(devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(width * scale); canvas.height = Math.round(height * scale);
    ctx.setTransform(scale, 0, 0, scale, 0, 0);
    particles = Array.from({length:width < 760 ? 30 : 65}, () => ({x:Math.random()*width,y:Math.random()*height,r:Math.random()*1.5+.4,v:Math.random()*.2+.06,phase:Math.random()*Math.PI*2}));
    draw(0);
  }
  function draw(delta) {
    ctx.clearRect(0, 0, width, height);
    for (const p of particles) {
      p.y -= p.v * delta; if(p.y < -5) p.y = height + 5;
      const x = p.x + Math.sin(p.phase + p.y * .004) * 18;
      const distance = Math.hypot(x-pointer.x, p.y-pointer.y);
      ctx.fillStyle = `rgba(23,25,28,${distance < 150 ? .7 : .23})`;
      ctx.beginPath(); ctx.arc(x,p.y,p.r,0,Math.PI*2); ctx.fill();
      if(distance < 130) {
        ctx.strokeStyle=`rgba(23,25,28,${(1-distance/130)*.16})`;
        ctx.beginPath(); ctx.moveTo(x,p.y); ctx.lineTo(pointer.x,pointer.y); ctx.stroke();
      }
    }
  }
  function animate(time) {
    frame = 0;
    if (!active()) return;
    draw(previous ? Math.min((time-previous)/16.67,2) : 1);
    previous = time; frame=requestAnimationFrame(animate);
  }
  function sync() {
    cancelAnimationFrame(frame); frame=0; previous=0;
    document.body.classList.toggle('motion-paused', paused || reduced.matches || document.hidden);
    hero.classList.toggle('effects-paused', !visible);
    toggle.hidden = reduced.matches;
    if (active()) frame=requestAnimationFrame(animate);
    else { pointer.x=-999; pointer.y=-999; scene.style.setProperty('--drift-x','0px'); scene.style.setProperty('--drift-y','0px'); draw(0); }
  }
  toggle.addEventListener('click', () => {
    paused=!paused; toggle.setAttribute('aria-pressed',String(paused));
    toggle.textContent=paused ? 'Animation fortsetzen' : 'Animation pausieren'; sync();
  });
  hero.addEventListener('pointermove', event => {
    if(!active() || !finePointer.matches || event.pointerType !== 'mouse') return;
    const rect=hero.getBoundingClientRect(); pointer.x=event.clientX-rect.left; pointer.y=event.clientY-rect.top;
    const sceneRect=scene.getBoundingClientRect();
    const x=Math.max(-.5,Math.min(.5,(event.clientX-sceneRect.left)/sceneRect.width-.5));
    const y=Math.max(-.5,Math.min(.5,(event.clientY-sceneRect.top)/sceneRect.height-.5));
    scene.style.setProperty('--drift-x',`${x*9}px`);
    scene.style.setProperty('--drift-y',`${y*7}px`);
  },{passive:true});
  hero.addEventListener('pointerleave',()=>{pointer.x=-999;pointer.y=-999;scene.style.setProperty('--drift-x','0px'); scene.style.setProperty('--drift-y','0px');});
  new ResizeObserver(resize).observe(hero);
  new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();}).observe(hero);
  document.addEventListener('visibilitychange',sync);
  reduced.addEventListener('change',sync);
  window.addEventListener('pagehide',()=>cancelAnimationFrame(frame));
  window.addEventListener('pageshow',sync);
  resize(); sync();
})();
