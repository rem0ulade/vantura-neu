const PRESETS = {
  core: {
    name: 'Core Hub',
    description: 'Eine zentrale Oberfläche für Licht, Klima, Sicherheit, Energie, Medien und Termine.',
    kicker: 'Guten Abend',
    state: { lights: true, brightness: 55, tv: false, music: true, volume: 34, track: 0, climate: 22, secure: true, blinds: 62, away: false },
  },
  family: {
    name: 'Family Hub',
    description: 'Kalender, Listen, Routinen, Räume und Medien für einen Haushalt, in dem mehrere Menschen mitdenken.',
    kicker: 'Familienabend',
    state: { lights: true, brightness: 72, tv: true, music: false, volume: 18, track: 1, climate: 21, secure: true, blinds: 48, away: false },
  },
  comfort: {
    name: 'Comfort Hub',
    description: 'Klima, Licht, Jalousien, Musik und Routinen für ein Zuhause, das sich automatisch gut anfühlt.',
    kicker: 'Wohlfühlmodus',
    state: { lights: true, brightness: 38, tv: false, music: true, volume: 26, track: 2, climate: 23, secure: true, blinds: 35, away: false },
  },
  secure: {
    name: 'Secure Hub',
    description: 'Sensoren, Kameras, Netzwerk, Anwesenheit und Urlaubsszenen in einer ruhigen Sicherheitszentrale.',
    kicker: 'Sicherheitsstatus',
    state: { lights: false, brightness: 0, tv: false, music: false, volume: 12, track: 0, climate: 19, secure: true, blinds: 20, away: true },
  },
};

const TRACKS = ['Bonsai Mix', 'Low Tide', 'Take Me Higher', 'Sunday Morning'];

const tabButtons = document.querySelectorAll('[data-demo-tab]');
const sceneButtons = document.querySelectorAll('[data-scene]');
const demoName = document.getElementById('demo-name');
const demoDescription = document.getElementById('demo-description');
const demoKicker = document.getElementById('demo-kicker');
const demoStatus = document.getElementById('demo-status');
const demoCards = document.getElementById('demo-cards');

let activeDemo = 'core';
let activeScene = 'home';
let state = { ...PRESETS.core.state };

function energyUsage() {
  let watts = 118;
  if (state.lights) watts += 84;
  if (state.tv) watts += 132;
  if (state.music) watts += 18 + Math.round(state.volume * 0.25);
  watts += Math.round((state.brightness || 0) * 0.45);
  watts += Math.max(0, state.climate - 19) * 18;
  if ((state.blinds || 0) > 70) watts += 12;
  if (state.away) watts -= 64;
  return Math.max(72, watts);
}

function statusText() {
  if (state.away) return state.secure ? 'Unterwegs-Modus aktiv. Zuhause bleibt im Blick.' : 'Unterwegs, aber Sicherheit ist reduziert.';
  if (state.tv && state.lights) return 'Filmabend läuft. Licht ist gedimmt und Medien sind aktiv.';
  if (state.tv) return 'Fernseher läuft. Medien sind aktiv.';
  if (state.music && state.lights) return 'Wohnzimmer ist bereit. Musik und Licht laufen.';
  if (state.music) return 'Musik läuft. Licht bleibt aus.';
  if (!state.lights && !state.tv && !state.music) return 'Alles ruhig. Nur Basisgeräte bleiben aktiv.';
  return 'Alles läuft ruhig.';
}

function applyScene(scene) {
  activeScene = scene;
  if (scene === 'home') state = { ...PRESETS[activeDemo].state, away: false };
  if (scene === 'movie') state = { lights: true, brightness: 28, tv: true, music: false, volume: 22, track: state.track, climate: 22, secure: true, blinds: 42, away: false };
  if (scene === 'night') state = { lights: false, brightness: 0, tv: false, music: false, volume: 12, track: state.track, climate: 20, secure: true, blinds: 12, away: false };
  if (scene === 'away') state = { lights: false, brightness: 0, tv: false, music: false, volume: 10, track: state.track, climate: 18, secure: true, blinds: 20, away: true };

  sceneButtons.forEach((button) => button.classList.toggle('is-active', button.dataset.scene === scene));
}

function renderDemo() {
  const preset = PRESETS[activeDemo];
  if (!preset || !demoCards) return;

  const watts = energyUsage();
  demoName.textContent = preset.name;
  demoDescription.textContent = preset.description;
  demoKicker.textContent = preset.kicker;
  demoStatus.textContent = statusText();

  const cards = [
    {
      action: 'lights',
      label: 'Licht',
      value: state.lights ? 'An' : 'Aus',
      detail: state.lights ? `Wohnzimmer ${state.brightness}%` : 'Alle Lampen aus',
      tone: state.lights ? 'warm' : 'neutral',
      controls: 'brightness',
    },
    {
      action: 'tv',
      label: 'Fernseher',
      value: state.tv ? 'An' : 'Aus',
      detail: state.tv ? 'Filmabend bereit' : 'Medien pausiert',
      tone: state.tv ? 'blue' : 'neutral',
    },
    {
      action: 'music',
      label: 'Musik',
      value: state.music ? 'Läuft' : 'Pause',
      detail: state.music ? `${TRACKS[state.track]} · ${state.volume}%` : `${TRACKS[state.track]} pausiert`,
      tone: state.music ? 'green' : 'neutral',
      controls: 'music',
    },
    {
      action: 'climate',
      label: 'Klima',
      value: `${state.climate.toFixed(0)}°C`,
      detail: state.away ? 'Energiesparen aktiv' : 'Zieltemperatur',
      tone: 'cool',
      controls: true,
    },
    {
      action: 'blinds',
      label: 'Jalousien',
      value: `${state.blinds}%`,
      detail: state.blinds > 70 ? 'Sonnenschutz aktiv' : state.blinds < 25 ? 'Privatmodus' : 'Blendfrei am Sofa',
      tone: 'gold',
      controls: 'blinds',
    },
    {
      action: 'secure',
      label: 'Sicherheit',
      value: state.secure ? 'Alles zu' : 'Offen',
      detail: state.secure ? 'Türen und Fenster ok' : 'Fenster Büro prüfen',
      tone: state.secure ? 'green' : 'gold',
    },
    {
      action: 'energy',
      label: 'Energie',
      value: `${watts} W`,
      detail: state.away ? 'Reduzierter Verbrauch' : 'Live-Verbrauch',
      tone: watts > 330 ? 'gold' : 'blue',
      wide: true,
    },
  ];

  demoCards.innerHTML = cards
    .map((card) => {
      if (card.controls === true) {
        return `
          <article class="demo-card demo-card-${card.tone}">
            <span>${card.label}</span>
            <strong>${card.value}</strong>
            <small>${card.detail}</small>
            <div class="demo-card-controls" aria-label="Temperatur steuern">
              <button type="button" data-action="climate-down">-</button>
              <button type="button" data-action="climate-up">+</button>
            </div>
          </article>
        `;
      }

      if (card.controls === 'music') {
        return `
          <article class="demo-card demo-card-${card.tone}">
            <span>${card.label}</span>
            <strong>${card.value}</strong>
            <small>${card.detail}</small>
            <div class="demo-music-controls" aria-label="Musik steuern">
              <button type="button" data-action="track-prev">Zurück</button>
              <button type="button" data-action="music">${state.music ? 'Pause' : 'Play'}</button>
              <button type="button" data-action="track-next">Weiter</button>
            </div>
            <div class="demo-volume-controls" aria-label="Lautstärke steuern">
              <button type="button" data-action="volume-down">-</button>
              <div class="demo-meter"><span style="width: ${state.volume}%"></span></div>
              <button type="button" data-action="volume-up">+</button>
            </div>
          </article>
        `;
      }

      if (card.controls === 'brightness' || card.controls === 'blinds') {
        const meterValue = card.controls === 'brightness' ? state.brightness : state.blinds;
        const downAction = card.controls === 'brightness' ? 'brightness-down' : 'blinds-down';
        const upAction = card.controls === 'brightness' ? 'brightness-up' : 'blinds-up';
        return `
          <article class="demo-card demo-card-${card.tone}">
            <span>${card.label}</span>
            <strong>${card.value}</strong>
            <small>${card.detail}</small>
            <div class="demo-volume-controls" aria-label="${card.label} steuern">
              <button type="button" data-action="${downAction}">-</button>
              <div class="demo-meter"><span style="width: ${meterValue}%"></span></div>
              <button type="button" data-action="${upAction}">+</button>
            </div>
          </article>
        `;
      }

      return `
        <button class="demo-card demo-card-${card.tone}${card.wide ? ' demo-card-wide' : ''}" type="button" data-action="${card.action}">
          <span>${card.label}</span>
          <strong>${card.value}</strong>
          <small>${card.detail}</small>
        </button>
      `;
    })
    .join('');
}

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeDemo = button.dataset.demoTab;
    state = { ...PRESETS[activeDemo].state };
    activeScene = 'home';
    tabButtons.forEach((tab) => {
      const active = tab === button;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-selected', active ? 'true' : 'false');
    });
    applyScene(activeScene);
    renderDemo();
  });
});

sceneButtons.forEach((button) => {
  button.addEventListener('click', () => {
    applyScene(button.dataset.scene);
    renderDemo();
  });
});

demoCards?.addEventListener('click', (event) => {
  const action = event.target.closest('[data-action]')?.dataset.action;
  if (!action || action === 'energy') return;

  activeScene = 'custom';
  sceneButtons.forEach((button) => button.classList.remove('is-active'));

  if (action === 'lights') state.lights = !state.lights;
  if (action === 'tv') state.tv = !state.tv;
  if (action === 'music') state.music = !state.music;
  if (action === 'secure') state.secure = !state.secure;
  if (action === 'track-prev') {
    state.track = (state.track + TRACKS.length - 1) % TRACKS.length;
    state.music = true;
  }
  if (action === 'track-next') {
    state.track = (state.track + 1) % TRACKS.length;
    state.music = true;
  }
  if (action === 'volume-down') state.volume = Math.max(0, state.volume - 8);
  if (action === 'volume-up') {
    state.volume = Math.min(100, state.volume + 8);
    state.music = true;
  }
  if (action === 'brightness-down') {
    state.brightness = Math.max(0, state.brightness - 12);
    state.lights = state.brightness > 0;
  }
  if (action === 'brightness-up') {
    state.brightness = Math.min(100, state.brightness + 12);
    state.lights = true;
  }
  if (action === 'blinds-down') state.blinds = Math.max(0, state.blinds - 12);
  if (action === 'blinds-up') state.blinds = Math.min(100, state.blinds + 12);
  if (action === 'climate-down') state.climate = Math.max(16, state.climate - 1);
  if (action === 'climate-up') state.climate = Math.min(25, state.climate + 1);
  if (action !== 'climate-down' && action !== 'climate-up') state.away = false;

  renderDemo();
});

renderDemo();
