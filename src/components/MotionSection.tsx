import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  yOffset?: number
}

export function Reveal({ children, className = '', delay = 0, yOffset = 16 }: RevealProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: yOffset }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  )
}

interface SectionHeadingProps {
  eyebrow: string
  title: string
  accentWord?: string
  description?: string
  align?: 'left' | 'center'
  variant?: 'light' | 'dark'
}

export function SectionHeading({
  eyebrow,
  title,
  accentWord,
  description,
  align = 'left',
  variant = 'light',
}: SectionHeadingProps) {
  const isCentered = align === 'center'
  const isDark = variant === 'dark'

  return (
    <div className={isCentered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <div
        className={`mb-4 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.26em] uppercase ${
          isDark ? 'text-gold' : 'text-brand-primary'
        } ${isCentered ? 'justify-center' : ''}`}
      >
        <span className="h-px w-7 bg-gold" aria-hidden="true" />
        <span>{eyebrow}</span>
        {isCentered && <span className="h-px w-7 bg-gold" aria-hidden="true" />}
      </div>
      <h2
        className={`font-serif text-4xl leading-[1.06] font-normal tracking-tight sm:text-5xl lg:text-[3.35rem] ${
          isDark ? 'text-white' : 'text-ink'
        }`}
      >
        {title}{' '}
        {accentWord && (
          <em
            className={`font-normal italic ${isDark ? 'text-gold' : 'text-brand-primary'}`}
          >
            {accentWord}
          </em>
        )}
      </h2>
      {description && (
        <p
          className={`mt-5 text-sm leading-relaxed sm:text-base ${
            isDark ? 'text-cream/90' : 'text-muted'
          } ${isCentered ? 'mx-auto max-w-xl' : 'max-w-xl'}`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
