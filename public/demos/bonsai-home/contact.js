const SUPABASE_URL = 'https://ipckxwsgiilvzwehzary.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlwY2t4d3NnaWlsdnp3ZWh6YXJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ0Mjc5ODksImV4cCI6MjA5MDAwMzk4OX0.Tu8mu6T1nFgp6Pp1GnbnSSBVtg34XeHmfrQRX6dKKU4';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateContact(email, phone) {
  const trimmedEmail = email?.trim() || '';
  const trimmedPhone = phone?.trim() || '';

  if (!trimmedEmail && !trimmedPhone) {
    return { ok: false, message: 'Bitte E-Mail oder Telefon angeben.' };
  }

  if (trimmedEmail && !EMAIL_RE.test(trimmedEmail)) {
    return { ok: false, message: 'Bitte eine gültige E-Mail-Adresse eingeben.' };
  }

  return { ok: true, email: trimmedEmail, phone: trimmedPhone };
}

function setFormFeedback(form, type, message) {
  let feedback = form.querySelector('.contact-feedback');
  if (!feedback) {
    feedback = document.createElement('p');
    feedback.className = 'contact-feedback';
    feedback.setAttribute('role', 'status');
    feedback.setAttribute('aria-live', 'polite');
    form.appendChild(feedback);
  }

  feedback.classList.remove('contact-feedback--success', 'contact-feedback--error');
  feedback.classList.add(type === 'success' ? 'contact-feedback--success' : 'contact-feedback--error');
  feedback.textContent = message;
  feedback.hidden = !message;
}

function setFormLoading(form, loading) {
  const submitBtn = form.querySelector('button[type="submit"]');
  if (!submitBtn) return;

  if (loading) {
    submitBtn.dataset.originalLabel = submitBtn.textContent;
    submitBtn.textContent = 'Wird gesendet …';
    submitBtn.disabled = true;
  } else {
    if (submitBtn.dataset.originalLabel) {
      submitBtn.textContent = submitBtn.dataset.originalLabel;
    }
    submitBtn.disabled = false;
  }

  form.querySelectorAll('input:not([type="hidden"])').forEach((input) => {
    input.disabled = loading;
  });
}

async function submitInquiry({ email, phone, source, answers, tier, score, honeypot = '' }) {
  const validation = validateContact(email, phone);
  if (!validation.ok) {
    return { ok: false, message: validation.message };
  }

  const response = await fetch(`${SUPABASE_URL}/functions/v1/send-inquiry`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      apikey: SUPABASE_ANON_KEY,
    },
    body: JSON.stringify({
      email: validation.email,
      phone: validation.phone,
      source,
      answers,
      tier,
      score,
      honeypot,
    }),
  });

  if (!response.ok) {
    let message = 'Leider hat das nicht geklappt. Bitte versuch es nochmal oder ruf mich an.';
    try {
      const data = await response.json();
      if (data.error) message = data.error;
    } catch {
      // ignore
    }
    return { ok: false, message };
  }

  return { ok: true, message: 'Danke! Ich melde mich zeitnah bei dir.' };
}

function readHoneypot(form) {
  return form.querySelector('input[name="website"]')?.value || '';
}

function markInvalid(inputs) {
  inputs.forEach((input) => {
    if (input) input.classList.add('q-input-invalid');
  });
}

function clearInvalid(inputs) {
  inputs.forEach((input) => {
    if (input) input.classList.remove('q-input-invalid');
  });
}

async function handleInquiryFormSubmit(form, getPayload) {
  const payload = getPayload(form);
  const emailInput = form.querySelector('input[type="email"], input[name="email"]');
  const phoneInput = form.querySelector('input[type="tel"], input[name="phone"]');

  const validation = validateContact(payload.email, payload.phone);
  if (!validation.ok) {
    markInvalid([emailInput, phoneInput]);
    setFormFeedback(form, 'error', validation.message);
    (emailInput || phoneInput)?.focus();
    return;
  }

  clearInvalid([emailInput, phoneInput]);
  setFormLoading(form, true);
  setFormFeedback(form, 'error', '');

  try {
    const result = await submitInquiry({
      ...payload,
      email: validation.email,
      phone: validation.phone,
      honeypot: readHoneypot(form),
    });

    if (result.ok) {
      setFormFeedback(form, 'success', result.message);
      form.reset();
    } else {
      setFormFeedback(form, 'error', result.message);
    }
  } catch {
    setFormFeedback(form, 'error', 'Verbindungsfehler. Bitte später nochmal versuchen.');
  } finally {
    setFormLoading(form, false);
  }
}

function initIndexContactForm() {
  const form = document.getElementById('index-inquiry-form');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    handleInquiryFormSubmit(form, () => ({
      email: form.querySelector('#index-email')?.value,
      phone: form.querySelector('#index-phone')?.value,
      source: document.body.classList.contains('demo-page') ? 'demo' : 'index',
    }));
  });
}

window.BonsaiContact = {
  submitInquiry,
  handleInquiryFormSubmit,
  validateContact,
};

initIndexContactForm();
