import { ArrowUpRight, Clock, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { BRAND, CONTACT_LINES, NAV_ITEMS, buildWhatsAppUrl } from '../data/restaurant'
import { InstagramBrandIcon, WhatsAppBrandIcon } from './BrandIcons'
import { Reveal } from './MotionSection'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t-2 border-gold/45 bg-brand-deep text-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
          <Reveal variant="fade-up" className="lg:col-span-4">
            <Link to="/" className="group inline-flex items-center gap-3.5">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cream p-1.5 ring-1 ring-gold/60 transition-transform duration-300 group-hover:scale-[1.04]">
                <img
                  src={BRAND.logoPath}
                  alt="MSK Catering Service official logo"
                  loading="lazy"
                  decoding="async"
                  width={42}
                  height={52}
                  className="h-full w-auto object-contain"
                />
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-white">{BRAND.name}</p>
                <p className="text-[10px] tracking-[0.22em] text-gold uppercase">
                  {BRAND.cateringBrand}
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-xs text-xs leading-relaxed text-cream/85">
              <strong className="font-semibold text-gold-soft">
                Since {BRAND.establishedYear} — {BRAND.heritageTagline}
              </strong>{' '}
              Signature biryanis, evening Arabian-style Mandi (6:30 PM onwards), speciality gravies,
              and welcoming catering across Melapalayam and Tirunelveli.
            </p>

            <a
              href={buildWhatsAppUrl(
                CONTACT_LINES[0].rawDigits,
                'Hello MSK Shahul Bhai Biryani, I would like to enquire about catering.'
              )}
              target="_blank"
              rel="noreferrer"
              className="msk-btn group mt-6 inline-flex items-center gap-2 rounded-lg border border-gold/60 bg-brand-primary px-5 py-3 text-xs font-semibold tracking-[0.14em] text-white uppercase hover:bg-brand-secondary"
            >
              <WhatsAppBrandIcon className="h-3.5 w-3.5 text-gold" />
              <span>Enquire for Catering</span>
              <ArrowUpRight className="msk-arrow-diag h-3.5 w-3.5 text-gold" />
            </a>
          </Reveal>

          <Reveal variant="fade-up" delay={0.06} className="lg:col-span-3">
            <h3 className="font-sans text-[11px] font-bold tracking-[0.22em] text-gold uppercase">
              Explore Pages
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs text-cream/85">
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="inline-block py-0.5 transition-[color,transform] duration-200 hover:translate-x-0.5 hover:text-gold-soft"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/menu/mandi/"
                  className="inline-block py-0.5 transition-[color,transform] duration-200 hover:translate-x-0.5 hover:text-gold-soft"
                >
                  Mandi Specials (6:30 PM)
                </Link>
              </li>
              <li>
                <Link
                  to="/wedding-catering/"
                  className="inline-block py-0.5 transition-[color,transform] duration-200 hover:translate-x-0.5 hover:text-gold-soft"
                >
                  Wedding &amp; Bulk Catering
                </Link>
              </li>
            </ul>
          </Reveal>

          <Reveal variant="fade-up" delay={0.12} className="lg:col-span-3">
            <h3 className="font-sans text-[11px] font-bold tracking-[0.22em] text-gold uppercase">
              Contact &amp; Social
            </h3>
            <ul className="mt-4 space-y-3 text-xs text-cream/85">
              {CONTACT_LINES.map((line) => (
                <li key={line.id}>
                  <a
                    href={line.telHref}
                    className="group inline-flex items-center gap-2 transition-colors hover:text-gold-soft"
                  >
                    <Phone className="h-3.5 w-3.5 text-gold transition-transform duration-300 group-hover:-rotate-12" />
                    <span>{line.display}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={BRAND.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 transition-colors hover:text-gold-soft"
                >
                  <InstagramBrandIcon className="h-3.5 w-3.5 text-gold" />
                  <span>{BRAND.instagramHandle}</span>
                  <ArrowUpRight className="msk-arrow-diag h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href={BRAND.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 transition-colors hover:text-gold-soft"
                >
                  <MapPin className="h-3.5 w-3.5 text-gold" />
                  <span>Google Maps Directions</span>
                  <ArrowUpRight className="msk-arrow-diag h-3 w-3" />
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal variant="fade-up" delay={0.18} className="lg:col-span-2">
            <h3 className="font-sans text-[11px] font-bold tracking-[0.22em] text-gold uppercase">
              Visit Us
            </h3>
            <div className="mt-4 space-y-3 text-xs leading-relaxed text-cream/80">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
                <span>{BRAND.areaSummary} (Street address to be confirmed)</span>
              </p>
              <p className="flex items-start gap-2">
                <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
                <span>Mandi: 6:30 PM onwards · Full hours to be confirmed</span>
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-gold/25 pt-6 text-[11px] text-cream/65 sm:flex-row sm:items-center">
          <p>
            &copy; {year} {BRAND.name}. All rights reserved.
          </p>
          <p>{BRAND.orderingNotice}</p>
        </div>
      </div>
    </footer>
  )
}
