import { useEffect, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { CONTACT_LINES, buildWhatsAppUrl } from '../data/restaurant'
import { WhatsAppBrandIcon } from './BrandIcons'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export function Layout({ children }: { children: ReactNode }) {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname, hash])

  return (
    <div className="flex min-h-screen flex-col bg-cream text-ink">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-xs focus:font-semibold focus:text-brand-deep focus:shadow-md"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="flex-1 overflow-x-clip">
        <div key={pathname} className="msk-page-enter">
          {children}
        </div>
      </main>
      <Footer />

      <a
        href={buildWhatsAppUrl(
          CONTACT_LINES[0].rawDigits,
          'Hello MSK Shahul Bhai Biryani, I would like to enquire.'
        )}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp Enquiry"
        className="msk-whatsapp-float msk-btn group fixed right-5 bottom-5 z-40 inline-flex items-center gap-2.5 rounded-full border border-gold/70 bg-brand-primary px-4 py-3 text-xs font-semibold tracking-[0.12em] text-white uppercase shadow-[0_12px_28px_rgba(38,60,48,0.28)] backdrop-blur-md hover:border-gold hover:bg-brand-secondary"
      >
        <WhatsAppBrandIcon className="h-4 w-4 text-gold-soft transition-transform duration-300 group-hover:-rotate-12" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  )
}
