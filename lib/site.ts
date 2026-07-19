/**
 * Central brand configuration.
 *
 * The brand name is referenced through this file across the website.
 */
export const SITE = {
  name: 'Vantura',
  claim: 'Better decisions start with better data.',
  description:
    'We build reporting, dashboard and automation solutions for companies that want to understand what is happening in their business faster.',
  email: 'jk@vantura-studios.com',
  url: 'https://vantura-studios.com',
  locale: 'en_US',
} as const

export const MAIL_SUBJECT = encodeURIComponent(
  `Introductory call: Reporting & Data (${SITE.name})`
)

export const CONTACT_HREF = `mailto:${SITE.email}?subject=${MAIL_SUBJECT}`
