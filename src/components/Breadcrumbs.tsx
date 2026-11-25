import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { BreadcrumbItem } from '../seo/seoConfig'

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  variant?: 'light' | 'dark'
}

export function Breadcrumbs({ items, variant = 'dark' }: BreadcrumbsProps) {
  if (items.length <= 1) return null
  const isDark = variant === 'dark'

  return (
    <nav aria-label="Breadcrumb" className="mb-5">
      <ol
        className={`flex flex-wrap items-center gap-1.5 text-[11px] font-medium tracking-[0.14em] uppercase ${
          isDark ? 'text-cream/85' : 'text-muted'
        }`}
      >
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1
          return (
            <li key={item.path} className="inline-flex items-center gap-1.5">
              {idx > 0 && (
                <ChevronRight
                  className={`h-3.5 w-3.5 ${isDark ? 'text-gold-soft/80' : 'text-gold'}`}
                  aria-hidden="true"
                />
              )}
              {isLast ? (
                <span aria-current="page" className={isDark ? 'text-gold-soft' : 'text-brand-primary'}>
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className={`transition-colors ${
                    isDark ? 'hover:text-white' : 'hover:text-brand-primary'
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

