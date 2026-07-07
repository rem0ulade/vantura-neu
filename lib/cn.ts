/** Minimaler classNames-Helfer — vermeidet eine zusätzliche Dependency. */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}
