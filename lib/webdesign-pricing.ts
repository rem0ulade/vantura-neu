export const WEBSITE_PRICING = [
  { id: 'basic', name: 'Basic', setup: 450, monthly: 25 },
  { id: 'standard', name: 'Standard', setup: 980, monthly: 35 },
  { id: 'premium', name: 'Premium', setup: 1490, monthly: 80 },
] as const

export const WEBSITE_START_PRICE = WEBSITE_PRICING[0].setup
