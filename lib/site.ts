/**
 * Central brand configuration.
 *
 * The brand name is referenced through this file across the website.
 */
export const SITE = {
  name: 'Vantura',
  claim: 'Webdesign für Unternehmen.',
  description:
    'Professionelle Firmenwebsites, Relaunches und Landingpages. Design und Umsetzung mit Vantura Studios. Kostenloses Erstgespräch buchen.',
  email: 'jk@vantura-studios.com',
  url: 'https://vantura-studios.com',
  locale: 'de_DE',
} as const

export const MAIL_SUBJECT_EN = encodeURIComponent(
  `Webdesign project inquiry (${SITE.name})`
)

export const MAIL_SUBJECT_DE = encodeURIComponent(
  `Webdesign-Anfrage (${SITE.name})`
)

export const CONTACT_HREF = `mailto:${SITE.email}?subject=${MAIL_SUBJECT_EN}`
export const CONTACT_HREF_DE = `mailto:${SITE.email}?subject=${MAIL_SUBJECT_DE}`

export const BOOKING_HREF = 'https://calendly.com/hello-jonathankokalj/kennenlernen'

