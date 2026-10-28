/* Local dashboard simulation; never controls devices or sends data. */
(() => {
  const panels = [...document.querySelectorAll('[data-dashboard]')];
  const presets = {
    ankommen: { light:75,temp:22,music:true,greeting:'Schön, dass du da bist.',track:'Lieblingsmusik' },
    filmabend: { light:20,temp:21,music:false,greeting:'Dein Abend. Dein Lieblingsfilm.',track:'Filmabend' },
    nacht: { light:0,temp:19,music:false,greeting:'Dein Zuhause kommt zur Ruhe.',track:'Schlafenszeit' }
  };
  let state = { ...presets.ankommen }, mode = 'ankommen';
  function render() {
    panels.forEach(panel => {
      panel.dataset.mode = mode;
      panel.dataset.music = state.music ? 'on' : 'off';
      panel.dataset.lights = state.light ? 'on' : 'off';
      panel.querySelector('[data-home-greeting]').textContent = state.greeting;
      panel.querySelector('[data-light-value]').textContent = state.light;
      panel.querySelector('[data-light-range]').value = state.light;
      panel.querySelector('[data-light-toggle]').setAttribute('aria-pressed',String(state.light > 0));
      panel.querySelector('[data-light-label]').textContent = state.light === 0 ? 'Licht ausgeschaltet' : state.light < 35 ? 'Sanft gedimmt' : 'Warm & einladend';
      panel.style.setProperty('--light-progress', `${state.light}%`);
      panel.querySelector('[data-temp-value]').textContent = state.temp;
      panel.querySelector('[data-temp-change="-1"]').disabled = state.temp <= 16;
      panel.querySelector('[data-temp-change="1"]').disabled = state.temp >= 26;
      panel.querySelector('[data-track]').textContent = state.track;
      panel.querySelector('[data-music-status]').textContent = state.music ? 'Musik läuft · Vorschau ohne Ton' : 'Musik pausiert';
      const play = panel.querySelector('[data-music-toggle]');
      play.setAttribute('aria-pressed',String(state.music));
      play.setAttribute('aria-label',state.music ? 'Musik pausieren' : 'Musik abspielen');
      play.textContent = state.music ? 'Ⅱ' : '▷';
    });
  }
  panels.forEach(panel => {
    panel.querySelector('[data-light-range]').addEventListener('input',e=>{state.light=Number(e.target.value);render();});
    panel.querySelector('[data-light-toggle]').addEventListener('click',()=>{state.light=state.light ? 0 : 75;render();});
    panel.querySelectorAll('[data-temp-change]').forEach(button=>button.addEventListener('click',()=>{state.temp=Math.max(16,Math.min(26,state.temp+Number(button.dataset.tempChange)));render();}));
    panel.querySelector('[data-music-toggle]').addEventListener('click',()=>{state.music=!state.music;render();});
  });
  document.addEventListener('bonsai:scene',event=>{
    if(!Object.hasOwn(presets,event.detail)) return;
    mode=event.detail; state={...presets[mode]}; render();
  });
  render();
})();
