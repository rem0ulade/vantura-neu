/**
 * Central brand configuration.
 *
 * The brand name is referenced through this file across the website.
 */
export const SITE = {
  name: 'Vantura',
  claim: 'Websites that get you inquiries.',
  description:
    'Webdesign, online shops, relaunches and hosting. Clear structure, strong visuals, one contact path.',
  email: 'jk@vantura-studios.com',
  url: 'https://vantura-studios.com',
  locale: 'en_US',
} as const

export const MAIL_SUBJECT_EN = encodeURIComponent(
  `Webdesign project inquiry (${SITE.name})`
)

export const MAIL_SUBJECT_DE = encodeURIComponent(
  `Webdesign-Anfrage (${SITE.name})`
)

export const CONTACT_HREF = `mailto:${SITE.email}?subject=${MAIL_SUBJECT_EN}`
export const CONTACT_HREF_DE = `mailto:${SITE.email}?subject=${MAIL_SUBJECT_DE}`
