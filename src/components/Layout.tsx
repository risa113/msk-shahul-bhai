import { useEffect, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { CONTACT_LINES, buildWhatsAppUrl } from '../data/restaurant'
import { WhatsAppBrandIcon } from './BrandIcons'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col bg-cream text-ink">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />

      <a
        href={buildWhatsAppUrl(
          CONTACT_LINES[0].rawDigits,
          'Hello MSK Sahul Bhai Biryani, I would like to enquire.'
        )}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp Enquiry"
        className="fixed right-5 bottom-5 z-40 inline-flex items-center gap-2.5 rounded-full border border-gold/70 bg-brand-primary px-4 py-3 text-xs font-semibold tracking-[0.12em] text-white uppercase shadow-[0_12px_28px_rgba(38,60,48,0.28)] backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-brand-secondary"
      >
        <WhatsAppBrandIcon className="h-4 w-4 text-gold-soft" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  )
}
