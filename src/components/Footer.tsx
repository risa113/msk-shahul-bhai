import { ArrowUpRight, Clock, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { BRAND, CONTACT_LINES, NAV_ITEMS, buildWhatsAppUrl } from '../data/restaurant'
import { InstagramBrandIcon, WhatsAppBrandIcon } from './BrandIcons'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[#D4AF37]/25 bg-[#101010] text-[#F5F0E8]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-3.5">
              <img
                src={BRAND.logoPath}
                alt="MSK Catering Service official logo"
                loading="lazy"
                className="h-16 w-auto object-contain"
              />
              <div>
                <p className="font-serif text-2xl font-normal text-[#F5F0E8]">{BRAND.name}</p>
                <p className="text-[10px] tracking-[0.22em] text-[#D4AF37] uppercase">
                  {BRAND.cateringBrand}
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-xs text-xs leading-relaxed text-[#CFC6B8]">
              {BRAND.heroHeadline} Authentic biryani prepared with whole-spice aroma and warm
              hospitality for dine-in visits and event catering.
            </p>

            <a
              href={buildWhatsAppUrl(
                CONTACT_LINES[0].rawDigits,
                'Hello MSK Sahul Bhai Biryani, I would like to enquire about catering.'
              )}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 border border-[#D4AF37]/60 bg-[#5A0E19] px-5 py-3 text-xs font-semibold tracking-[0.14em] text-[#F5F0E8] uppercase transition-colors hover:border-[#D4AF37] hover:bg-[#6d1421]"
            >
              <WhatsAppBrandIcon className="h-3.5 w-3.5 text-[#D4AF37]" />
              <span>Enquire for Catering</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-[#D4AF37]" />
            </a>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[11px] font-semibold tracking-[0.22em] text-[#D4AF37] uppercase">
              Pages
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs text-[#E3DBCF]">
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="inline-block py-0.5 transition-colors hover:text-[#D4AF37]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[11px] font-semibold tracking-[0.22em] text-[#D4AF37] uppercase">
              Contact &amp; Social
            </h3>
            <ul className="mt-4 space-y-3 text-xs text-[#E3DBCF]">
              {CONTACT_LINES.map((line) => (
                <li key={line.id}>
                  <a
                    href={line.telHref}
                    className="inline-flex items-center gap-2 transition-colors hover:text-[#D4AF37]"
                  >
                    <Phone className="h-3.5 w-3.5 text-[#D4AF37]" />
                    <span>{line.display}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={BRAND.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-[#D4AF37]"
                >
                  <InstagramBrandIcon className="h-3.5 w-3.5 text-[#D4AF37]" />
                  <span>{BRAND.instagramHandle}</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href={BRAND.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-[#D4AF37]"
                >
                  <MapPin className="h-3.5 w-3.5 text-[#D4AF37]" />
                  <span>Google Maps Directions</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[11px] font-semibold tracking-[0.22em] text-[#D4AF37] uppercase">
              Visit Us
            </h3>
            <div className="mt-4 space-y-3 text-xs leading-relaxed text-[#CFC6B8]">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#D4AF37]" />
                <span>{BRAND.areaSummary} (Street address to be confirmed)</span>
              </p>
              <p className="flex items-start gap-2">
                <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#D4AF37]" />
                <span>Opening hours to be confirmed</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-[#D4AF37]/15 pt-6 text-[11px] text-[#988F82] sm:flex-row sm:items-center">
          <p>
            &copy; {year} {BRAND.name}. All rights reserved.
          </p>
          <p>{BRAND.orderingNotice}</p>
        </div>
      </div>
    </footer>
  )
}
