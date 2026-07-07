import { cn } from '@/lib/cn'

type ButtonProps = {
  href: string
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
  className?: string
}

export function Button({
  href,
  variant = 'primary',
  children,
  className,
}: ButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-medium transition-all duration-200',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
        variant === 'primary' &&
          'bg-ink text-white shadow-[0_1px_2px_rgb(11_18_32/0.2)] hover:-translate-y-0.5 hover:bg-navy hover:shadow-[0_8px_24px_-6px_rgb(11_18_32/0.4)]',
        variant === 'secondary' &&
          'border border-line bg-white text-ink hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-card',
        className
      )}
    >
      {children}
    </a>
  )
}
