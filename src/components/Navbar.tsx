import { type CSSProperties, useEffect, useState } from 'react'
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
    const onScroll = () => setScrolled(window.scrollY > 24)
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
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ease-out ${
        scrolled
          ? 'border-b border-gold/30 bg-brand-primary/97 py-3 shadow-[0_12px_32px_rgba(63,9,19,0.24)] backdrop-blur-md'
          : 'border-b border-gold/20 bg-brand-primary/92 py-3 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <Link
          to="/"
          className="msk-nav-brand group flex shrink-0 items-center gap-3 focus-visible:outline-2"
          aria-label={`${BRAND.name} Home`}
        >
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-full bg-cream/95 p-1 ring-1 ring-gold/60 transition-transform duration-300 sm:h-13 sm:w-13 ${
              scrolled ? 'scale-[0.94] group-hover:scale-100' : 'group-hover:scale-[1.04]'
            }`}
          >
            <img
              src={BRAND.logoPath}
              alt="MSK Catering Service official logo"
              className="h-full w-auto object-contain"
              width={42}
              height={52}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg leading-tight font-semibold tracking-wide text-white sm:text-xl">
              MSK Shahul Bhai
            </span>
            <span className="text-[10px] font-medium tracking-[0.24em] text-gold-soft uppercase">
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
                `group relative py-2 text-xs font-medium tracking-[0.14em] uppercase transition-colors duration-200 ${
                  isActive ? 'text-gold-soft' : 'text-white/90 hover:text-gold-soft'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{item.label}</span>
                  <span
                    className={`msk-nav-underline absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-gold ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
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
            className="msk-btn group hidden items-center gap-2 rounded-full border border-gold/70 bg-white px-4 py-2 text-xs font-semibold tracking-[0.12em] text-brand-deep uppercase shadow-sm hover:bg-cream sm:inline-flex"
          >
            <Phone className="h-3.5 w-3.5 text-brand-primary transition-transform duration-300 group-hover:-rotate-12" />
            <span>Call Now</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="msk-btn inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border border-gold/40 bg-brand-deep/70 text-white hover:border-gold lg:hidden"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav-drawer"
        aria-hidden={!mobileOpen}
        data-open={mobileOpen ? 'true' : 'false'}
        className="msk-mobile-drawer absolute inset-x-0 top-full max-h-[calc(100svh-4.5rem)] overflow-y-auto border-t border-gold/25 bg-brand-primary px-6 pt-5 pb-8 shadow-xl lg:hidden"
      >
        <nav className="flex flex-col divide-y divide-white/15" aria-label="Mobile Navigation">
          {NAV_ITEMS.map((item, idx) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              tabIndex={mobileOpen ? 0 : -1}
              style={{ '--msk-item-delay': `${40 + idx * 45}ms` } as CSSProperties}
              className={({ isActive }) =>
                `msk-mobile-item flex items-center justify-between py-3.5 text-sm font-medium tracking-[0.14em] uppercase ${
                  isActive ? 'text-gold-soft' : 'text-white hover:text-gold-soft'
                }`
              }
            >
              <span>{item.label}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            </NavLink>
          ))}
        </nav>

        <div
          className="msk-mobile-item mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2"
          style={{ '--msk-item-delay': `${40 + NAV_ITEMS.length * 45}ms` } as CSSProperties}
        >
          <a
            href={CONTACT_LINES[0].telHref}
            tabIndex={mobileOpen ? 0 : -1}
            className="msk-btn flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-xs font-semibold tracking-[0.14em] text-brand-deep uppercase hover:bg-cream"
          >
            <Phone className="h-3.5 w-3.5 text-brand-primary" />
            <span>Call {CONTACT_LINES[0].display}</span>
          </a>
          <a
            href={buildWhatsAppUrl(
              CONTACT_LINES[0].rawDigits,
              'Hello MSK Shahul Bhai Biryani, I would like to enquire.'
            )}
            target="_blank"
            rel="noreferrer"
            tabIndex={mobileOpen ? 0 : -1}
            className="msk-btn flex items-center justify-center gap-2 rounded-lg border border-gold/60 bg-brand-deep px-4 py-3 text-xs font-semibold tracking-[0.14em] text-white uppercase hover:bg-brand-secondary"
          >
            <WhatsAppBrandIcon className="h-4 w-4 text-gold" />
            <span>WhatsApp Enquiry</span>
          </a>
        </div>

        <div
          className="msk-mobile-item mt-5 flex items-center justify-between border-t border-white/15 pt-4 text-xs text-cream"
          style={{ '--msk-item-delay': `${85 + NAV_ITEMS.length * 45}ms` } as CSSProperties}
        >
          <a href={CONTACT_LINES[1].telHref} tabIndex={mobileOpen ? 0 : -1} className="hover:text-gold-soft">
            Alt: {CONTACT_LINES[1].display}
          </a>
          <a
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noreferrer"
            tabIndex={mobileOpen ? 0 : -1}
            className="inline-flex items-center gap-1.5 text-gold-soft"
          >
            <InstagramBrandIcon className="h-3.5 w-3.5" />
            <span>{BRAND.instagramHandle}</span>
          </a>
        </div>
      </div>
    </header>
  )
}
