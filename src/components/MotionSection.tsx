import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  yOffset?: number
}

export function Reveal({ children, className = '', delay = 0, yOffset = 18 }: RevealProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: yOffset }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
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
}

export function SectionHeading({
  eyebrow,
  title,
  accentWord,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const isCentered = align === 'center'

  return (
    <div className={isCentered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <div
        className={`mb-4 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.26em] text-[#D4AF37] uppercase ${
          isCentered ? 'justify-center' : ''
        }`}
      >
        <span className="h-px w-7 bg-[#D4AF37]/70" aria-hidden="true" />
        <span>{eyebrow}</span>
        {isCentered && <span className="h-px w-7 bg-[#D4AF37]/70" aria-hidden="true" />}
      </div>
      <h2 className="font-serif text-4xl leading-[1.06] font-normal tracking-tight text-[#F5F0E8] sm:text-5xl lg:text-[3.35rem]">
        {title}{' '}
        {accentWord && <em className="font-normal text-[#D4AF37] italic">{accentWord}</em>}
      </h2>
      {description && (
        <p
          className={`mt-5 text-sm leading-relaxed text-[#CFC6B8] sm:text-base ${
            isCentered ? 'mx-auto max-w-xl' : 'max-w-xl'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
