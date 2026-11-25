import { Clock, MoonStar } from 'lucide-react'

interface AvailabilityBadgeProps {
  label: string
  isEveningSpecial?: boolean
  size?: 'sm' | 'md'
}

export function AvailabilityBadge({
  label,
  isEveningSpecial = false,
  size = 'sm',
}: AvailabilityBadgeProps) {
  const paddingClass = size === 'md' ? 'px-3.5 py-1.5 text-[11px]' : 'px-3 py-1 text-[10px]'

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border font-semibold tracking-[0.12em] uppercase shadow-sm ${paddingClass} ${
        isEveningSpecial
          ? 'border-gold/75 bg-brand-primary text-white'
          : 'border-gold/50 bg-white/95 text-brand-deep backdrop-blur-sm'
      }`}
    >
      {isEveningSpecial ? (
        <MoonStar className="h-3 w-3 shrink-0 text-gold-soft" aria-hidden="true" />
      ) : (
        <Clock className="h-3 w-3 shrink-0 text-brand-primary" aria-hidden="true" />
      )}
      <span>{label}</span>
    </span>
  )
}
