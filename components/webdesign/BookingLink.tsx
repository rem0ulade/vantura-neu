'use client'

import { motion, type HTMLMotionProps } from 'framer-motion'
import { bookingHref } from '@/lib/booking'

type Props = Omit<HTMLMotionProps<'a'>, 'href'> & { placement: string }

export function BookingLink({ placement, children, onClick, ...props }: Props) {
  return (
    <motion.a
      {...props}
      href={bookingHref(placement)}
      data-booking-placement={placement}
      onClick={(event) => {
        event.currentTarget.href = bookingHref(placement, window.location.search)
        onClick?.(event)
      }}
    >
      {children}
    </motion.a>
  )
}
