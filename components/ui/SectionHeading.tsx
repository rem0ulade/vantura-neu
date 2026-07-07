import { cn } from '@/lib/cn'
import { Reveal } from '@/components/ui/Reveal'

export function SectionHeading({
  eyebrow,
  title,
  lead,
  dark = false,
  className,
}: {
  eyebrow: string
  title: string
  lead?: string
  dark?: boolean
  className?: string
}) {
  return (
    <Reveal className={cn('max-w-2xl', className)}>
      <p
        className={cn(
          'mb-4 text-[13px] font-semibold uppercase tracking-[0.18em]',
          dark ? 'text-slate-400' : 'text-accent'
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          'text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl',
          dark ? 'text-white' : 'text-ink'
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            'mt-6 text-lg leading-8',
            dark ? 'text-slate-300' : 'text-muted'
          )}
        >
          {lead}
        </p>
      )}
    </Reveal>
  )
}
