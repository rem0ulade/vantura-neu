(() => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  const setMenu = (open) => {
    links.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'Menü schließen' : 'Menü öffnen';
  };
  toggle.hidden = false;
  document.querySelector('.navigation').classList.add('enhanced');
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  links.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      toggle.focus();
    }
  });
  const tabs = [...document.querySelectorAll('[data-category]')];
  const panels = [...document.querySelectorAll('.menu-panel')];
  const showCategory = (id, focus = false) => {
    tabs.forEach((tab) => {
      const selected = tab.dataset.category === id;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
      if (selected && focus) tab.focus();
    });
    panels.forEach((panel) => { panel.hidden = panel.id !== id; });
  };
  document.querySelector('.menu-tabs').setAttribute('role', 'tablist');
  document.querySelector('.menu-sheet').classList.add('enhanced');
  tabs.forEach((tab, index) => {
    tab.setAttribute('role', 'tab');
    tab.id = 'tab-' + tab.dataset.category;
    tab.setAttribute('aria-controls', tab.dataset.category);
    tab.addEventListener('click', (event) => {
      event.preventDefault();
      showCategory(tab.dataset.category);
    });
    tab.addEventListener('keydown', (event) => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== undefined) {
        event.preventDefault();
        showCategory(tabs[next].dataset.category, true);
      }
    });
  });
  panels.forEach((panel) => {
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', 'tab-' + panel.id);
  });
  showCategory('pizza-pasta');
  const form = document.querySelector('#reservierungsformular');
  const date = form.elements.namedItem('date');
  const time = form.elements.namedItem('time');
  const status = document.querySelector('#reservation-status');
  const today = new Date();
  const localDate = (value) => [value.getFullYear(), String(value.getMonth() + 1).padStart(2, '0'), String(value.getDate()).padStart(2, '0')].join('-');
  date.min = localDate(today);
  const validateDate = () => {
    date.setCustomValidity('');
    time.setCustomValidity('');
    if (!date.value) return;
    const chosen = new Date(date.value + 'T12:00:00');
    const weekday = chosen.getDay();
    if (date.value < localDate(new Date())) date.setCustomValidity('Bitte wähle heute oder ein zukünftiges Datum.');
    else if (weekday === 1) date.setCustomValidity('Montags ist Ruhetag. Bitte wähle einen anderen Tag.');
    if (time.value) {
      const hour = Number(time.value.split(':')[0]);
      if (weekday === 6 && hour < 17) time.setCustomValidity('Samstags öffnen wir um 17 Uhr.');
      if (date.value === localDate(new Date()) && new Date(date.value + 'T' + time.value) <= new Date()) time.setCustomValidity('Bitte wähle eine Uhrzeit in der Zukunft.');
    }
  };
  form.addEventListener('input', () => { status.textContent = ''; validateDate(); });
  form.addEventListener('change', validateDate);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    validateDate();
    if (!form.reportValidity()) return;
    const formatted = new Intl.DateTimeFormat('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(new Date(date.value + 'T12:00:00'));
    status.textContent = 'So würde deine Anfrage aussehen: ' + formatted + ' um ' + time.value + ' Uhr, ' + form.elements.namedItem('guests').value + '. Dies ist nur eine Vorschau. Es wurde keine Reservierung vorgenommen und es wurden keine Daten versendet.';
    status.focus();
  });
})();

