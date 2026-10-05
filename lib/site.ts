/**
 * Central brand configuration.
 *
 * The brand name is referenced through this file across the website.
 */
export const SITE = {
  name: 'Vantura',
  claim: 'Websites that sell.',
  description:
    'Webdesign, online shops and relaunches — built with craft, motion and a clear call to action.',
  email: 'jk@vantura-studios.com',
  url: 'https://vantura-studios.com',
  locale: 'en_US',
} as const

export const MAIL_SUBJECT = encodeURIComponent(
  `Webdesign project inquiry (${SITE.name})`
)

export const CONTACT_HREF = `mailto:${SITE.email}?subject=${MAIL_SUBJECT}`
