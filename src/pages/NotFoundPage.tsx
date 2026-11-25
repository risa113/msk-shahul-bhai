import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="flex min-h-[76vh] flex-col items-center justify-center bg-cream px-5 pt-28 pb-16 text-center">
      <span className="text-[11px] font-semibold tracking-[0.26em] text-brand-primary uppercase">
        Page Not Found
      </span>
      <h1 className="mt-4 font-serif text-5xl font-normal text-ink sm:text-6xl">
        Return to the <em className="text-brand-primary italic">Table</em>
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
        The page you requested could not be found. Explore our menu, signature crafts, catering, or
        visit details from our homepage.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2.5 rounded-lg bg-brand-primary px-6 py-3.5 text-xs font-semibold tracking-[0.14em] text-white uppercase shadow-sm transition-colors hover:bg-brand-secondary"
      >
        <ArrowLeft className="h-4 w-4 text-gold-soft" />
        <span>Back to Home</span>
      </Link>
    </section>
  )
}
