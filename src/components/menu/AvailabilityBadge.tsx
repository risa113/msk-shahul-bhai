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
  const paddingClass = size === 'md' ? 'px-3.5 py-1.5 text-[11px]' : 'px-2.5 py-1 text-[10px]'

  return (
    <span
      className={`inline-flex items-center gap-1.5 border font-semibold tracking-[0.14em] uppercase ${paddingClass} ${
        isEveningSpecial
          ? 'border-[#D4AF37]/70 bg-[#5A0E19]/90 text-[#F5F0E8]'
          : 'border-[#D4AF37]/30 bg-[#171717]/85 text-[#CFC6B8]'
      }`}
    >
      {isEveningSpecial ? (
        <MoonStar className="h-3 w-3 shrink-0 text-[#D4AF37]" aria-hidden="true" />
      ) : (
        <Clock className="h-3 w-3 shrink-0 text-[#D4AF37]" aria-hidden="true" />
      )}
      <span>{label}</span>
    </span>
  )
}
