import type { CSSProperties, ReactNode } from 'react'
import { useRepeatInView } from '../hooks/useRepeatInView'

export type RevealVariant =
  | 'fade-up'
  | 'editorial'
  | 'mask-reveal'
  | 'image-curtain'
  | 'cta-scale'
  | 'slide-left'
  | 'slide-right'
  | 'card-stagger'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  yOffset?: number
  variant?: RevealVariant
  once?: boolean
  threshold?: number
  rootMargin?: string
  as?: 'div' | 'section' | 'article' | 'figure' | 'li'
}

export function Reveal({
  children,
  className = '',
  delay = 0,
  variant = 'fade-up',
  once = false,
  threshold = 0.1,
  rootMargin = '0px 0px -6% 0px',
  as = 'div',
}: RevealProps) {
  const { ref, state } = useRepeatInView<HTMLDivElement>({
    once,
    threshold,
    rootMargin,
  })

  const style = delay > 0 ? ({ '--msk-delay': `${Math.round(delay * 1000)}ms` } as CSSProperties) : undefined
  const Tag = as

  return (
    <Tag
      ref={ref as never}
      data-motion={state}
      data-variant={variant}
      style={style}
      className={`msk-reveal ${className}`}
    >
      {children}
    </Tag>
  )
}

interface SectionHeadingProps {
  eyebrow: string
  title: string
  accentWord?: string
  description?: string
  align?: 'left' | 'center'
  variant?: 'light' | 'dark'
  as?: 'h1' | 'h2'
  animateMode?: 'none' | 'hero'
}

export function SectionHeading({
  eyebrow,
  title,
  accentWord,
  description,
  align = 'left',
  variant = 'light',
  as = 'h2',
  animateMode = 'none',
}: SectionHeadingProps) {
  const isCentered = align === 'center'
  const isDark = variant === 'dark'
  const HeadingTag = as
  const isHero = animateMode === 'hero'

  return (
    <div className={isCentered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <div
        className={`mb-4 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.26em] uppercase ${
          isDark ? 'text-gold' : 'text-brand-primary'
        } ${isCentered ? 'justify-center' : ''} ${isHero ? 'msk-hero-stagger' : ''}`}
        style={isHero ? ({ '--msk-hero-delay': '40ms' } as CSSProperties) : undefined}
      >
        <span className="h-px w-7 bg-gold" aria-hidden="true" />
        <span>{eyebrow}</span>
        {isCentered && <span className="h-px w-7 bg-gold" aria-hidden="true" />}
      </div>
      <HeadingTag
        className={`font-serif text-3xl leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.15rem] ${
          as === 'h1' ? 'font-extrabold' : 'font-bold'
        } ${isDark ? 'text-white' : 'text-ink'} ${isHero ? 'msk-hero-headline' : ''}`}
        style={isHero ? ({ '--msk-hero-delay': '120ms' } as CSSProperties) : undefined}
      >
        {title}{' '}
        {accentWord && (
          <em className={`italic ${isDark ? 'text-gold' : 'text-brand-primary'}`}>{accentWord}</em>
        )}
      </HeadingTag>
      {description && (
        <p
          className={`mt-5 text-sm leading-relaxed sm:text-base ${
            isDark ? 'text-cream/90' : 'text-muted'
          } ${isCentered ? 'mx-auto max-w-xl' : 'max-w-xl'} ${isHero ? 'msk-hero-copy' : ''}`}
          style={isHero ? ({ '--msk-hero-delay': '210ms' } as CSSProperties) : undefined}
        >
          {description}
        </p>
      )}
    </div>
  )
}
