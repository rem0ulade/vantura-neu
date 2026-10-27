(() => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  const setMenu = (open) => {
    links.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'Menü schließen' : 'Menü öffnen';
  };
  toggle.hidden = false;
  document.querySelector('.top').classList.add('enhanced');
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  links.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      toggle.focus();
    }
  });
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
    if (date.value < localDate(new Date())) date.setCustomValidity('Bitte wählen Sie heute oder ein zukünftiges Datum.');
    else if (weekday === 1) date.setCustomValidity('Montags ist Ruhetag. Bitte wählen Sie einen anderen Tag.');
    if (time.value) {
      const hour = Number(time.value.split(':')[0]);
      if (weekday === 6 && hour < 17) time.setCustomValidity('Samstags öffnen wir um 17 Uhr.');
      if (date.value === localDate(new Date()) && new Date(date.value + 'T' + time.value) <= new Date()) time.setCustomValidity('Bitte wählen Sie eine Uhrzeit in der Zukunft.');
    }
  };
  form.addEventListener('input', () => { status.textContent = ''; validateDate(); });
  form.addEventListener('change', validateDate);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    validateDate();
    if (!form.reportValidity()) return;
    const formatted = new Intl.DateTimeFormat('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(new Date(date.value + 'T12:00:00'));
    status.textContent = 'So würde Ihre Anfrage aussehen: ' + formatted + ' um ' + time.value + ' Uhr, ' + form.elements.namedItem('guests').value + '. Dies ist nur eine Vorschau. Es wurde keine Reservierung vorgenommen und es wurden keine Daten versendet.';
    status.focus();
  });
})();

