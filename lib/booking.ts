import { BOOKING_HREF } from './site'

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const

export function bookingHref(placement: string, search = '') {
  const incoming = new URLSearchParams(search)
  const url = new URL(BOOKING_HREF)
  const fromGoogleAds = ['gclid', 'gbraid', 'wbraid'].some((key) => incoming.has(key))

  url.searchParams.set('utm_source', fromGoogleAds ? 'google' : 'vantura-studios.com')
  url.searchParams.set('utm_medium', fromGoogleAds ? 'cpc' : 'referral')
  url.searchParams.set('utm_campaign', 'vantura_website')
  url.searchParams.set('utm_content', placement)

  for (const key of UTM_KEYS) {
    const value = incoming.get(key)
    if (value) url.searchParams.set(key, value.slice(0, 255))
  }

  return url.toString()
}
