'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export function LegacyRedirect({ to }: { to: string }) {
  const router = useRouter()

  useEffect(() => {
    router.replace(to)
  }, [router, to])

  return (
    <div className="grid min-h-screen place-items-center bg-paper px-6 font-mono text-sm text-ink">
      <p>
        Redirecting to <a href={to} className="underline decoration-signal decoration-2 underline-offset-4">{to}</a>
        …
      </p>
    </div>
  )
}
