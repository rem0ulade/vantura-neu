/**
 * Zentrale Markenkonfiguration.
 *
 * Der Markenname wird ausschließlich über diese Datei referenziert —
 * eine Änderung hier benennt die gesamte Website um.
 */
export const SITE = {
  name: 'Vantura',
  claim: 'Bessere Entscheidungen beginnen mit besseren Daten.',
  description:
    'Wir entwickeln Reporting-, Dashboard- und Automatisierungslösungen für Unternehmen, die schneller verstehen wollen, was in ihrem Geschäft passiert.',
  email: 'jonathan.kokalj@gmail.com',
  url: 'https://vantura-studios.com',
  locale: 'de_DE',
} as const

export const MAIL_SUBJECT = encodeURIComponent(
  `Erstgespräch: Reporting & Daten (${SITE.name})`
)

export const CONTACT_HREF = `mailto:${SITE.email}?subject=${MAIL_SUBJECT}`
