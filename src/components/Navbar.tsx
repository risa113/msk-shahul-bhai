import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { BRAND, CONTACT_LINES, NAV_ITEMS, buildWhatsAppUrl } from '../data/restaurant'
import { InstagramBrandIcon, WhatsAppBrandIcon } from './BrandIcons'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!mobileOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [mobileOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-[#D4AF37]/20 bg-[#171717]/95 py-2.5 shadow-[0_14px_40px_rgba(0,0,0,0.7)] backdrop-blur-md'
          : 'bg-gradient-to-b from-[#101010]/90 via-[#171717]/55 to-transparent py-4'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <Link
          to="/"
          className="group flex shrink-0 items-center gap-3 focus-visible:outline-2"
          aria-label={`${BRAND.name} Home`}
        >
          <img
            src={BRAND.logoPath}
            alt="MSK Catering Service official logo"
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03] sm:h-14"
            width={46}
            height={56}
          />
          <div className="flex flex-col">
            <span className="font-serif text-lg leading-tight font-semibold tracking-wide text-[#F5F0E8] sm:text-xl">
              MSK Sahul Bhai
            </span>
            <span className="text-[10px] font-medium tracking-[0.24em] text-[#D4AF37] uppercase">
              Biryani &amp; Catering
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8" aria-label="Primary Navigation">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `relative py-2 text-xs font-medium tracking-[0.14em] uppercase transition-colors ${
                  isActive ? 'text-[#D4AF37]' : 'text-[#F5F0E8]/85 hover:text-[#F5F0E8]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{item.label}</span>
                  <span
                    className={`absolute inset-x-0 bottom-0 h-px bg-[#D4AF37] transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={CONTACT_LINES[0].telHref}
            className="hidden items-center gap-2 border border-[#D4AF37] bg-[#D4AF37] px-4 py-2.5 text-xs font-semibold tracking-[0.12em] text-[#171717] uppercase transition-colors hover:bg-[#E8CF7D] sm:inline-flex"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>Call Now</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center border border-[#D4AF37]/30 bg-[#171717]/95 text-[#F5F0E8] transition-colors hover:border-[#D4AF37] lg:hidden"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-nav-drawer"
          className="border-t border-[#D4AF37]/20 bg-[#171717]/98 px-6 pt-5 pb-8 backdrop-blur-lg lg:hidden"
        >
          <nav className="flex flex-col divide-y divide-[#D4AF37]/12" aria-label="Mobile Navigation">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `flex items-center justify-between py-3.5 text-sm font-medium tracking-[0.14em] uppercase transition-colors ${
                    isActive ? 'text-[#D4AF37]' : 'text-[#F5F0E8] hover:text-[#D4AF37]'
                  }`
                }
              >
                <span>{item.label}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]/60" />
              </NavLink>
            ))}
          </nav>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <a
              href={CONTACT_LINES[0].telHref}
              className="flex items-center justify-center gap-2 bg-[#D4AF37] px-4 py-3 text-xs font-semibold tracking-[0.14em] text-[#171717] uppercase"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>Call {CONTACT_LINES[0].display}</span>
            </a>
            <a
              href={buildWhatsAppUrl(
                CONTACT_LINES[0].rawDigits,
                'Hello MSK Sahul Bhai Biryani, I would like to enquire.'
              )}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 border border-[#D4AF37]/40 bg-[#5A0E19] px-4 py-3 text-xs font-semibold tracking-[0.14em] text-[#F5F0E8] uppercase"
            >
              <WhatsAppBrandIcon className="h-4 w-4 text-[#D4AF37]" />
              <span>WhatsApp Enquiry</span>
            </a>
          </div>

          <div className="mt-5 flex items-center justify-between border-t border-[#D4AF37]/15 pt-4 text-xs text-[#CFC6B8]">
            <a href={CONTACT_LINES[1].telHref} className="hover:text-[#D4AF37]">
              Alt: {CONTACT_LINES[1].display}
            </a>
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[#D4AF37]"
            >
              <InstagramBrandIcon className="h-3.5 w-3.5" />
              <span>{BRAND.instagramHandle}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
