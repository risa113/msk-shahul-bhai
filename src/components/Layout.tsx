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
    <div className="flex min-h-screen flex-col bg-[#171717] text-[#F5F0E8]">
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
        className="fixed right-5 bottom-5 z-40 inline-flex items-center gap-2.5 border border-[#D4AF37]/55 bg-[#1b3a29]/95 px-4 py-3 text-xs font-semibold tracking-[0.12em] text-[#F5F0E8] uppercase shadow-[0_12px_30px_rgba(0,0,0,0.65)] backdrop-blur-md transition-transform hover:-translate-y-0.5 hover:bg-[#234a35]"
      >
        <WhatsAppBrandIcon className="h-4 w-4 text-[#D4AF37]" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  )
}

