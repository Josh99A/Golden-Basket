import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ArrowUpRight } from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Company Monograph", href: "/about" },
  { label: "Produce & Systems", href: "/#products" },
  { label: "Order & Stocking Calculator", href: "/#calculator" },
  { label: "Leadership Stewardship", href: "/#team" },
  { label: "Gayaza Dispatch Desk", href: "/contact" },
];

const OFFERINGS = [
  { label: "Fresh Whole & Dressed Catfish", href: "/contact?category=Fresh%20Catfish%20Order%20(Wholesale%2FRetail)" },
  { label: "Graded Catfish Fingerlings", href: "/contact?category=Catfish%20Fingerlings" },
  { label: "Kiln-Smoked & Value-Added Fish", href: "/#products" },
  { label: "Solar Tank Engineering & Advisory", href: "/contact?category=Farm%20Training%20%26%20Visit" },
  { label: "Institutional & Out-Grower Partnerships", href: "/contact?category=Agribusiness%20Partnership%20%2F%20Grant" },
];

const SOCIAL_LINKS = [
  {
    label: "WhatsApp Direct Dispatch",
    href: "https://wa.me/256772421174",
    icon: FaWhatsapp,
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: FaFacebook,
  },
  {
    label: "X (Twitter)",
    href: "https://x.com",
    icon: FaXTwitter,
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: FaYoutube,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0c1a0e] text-white border-t border-white/15">
      {/* Architectural 4-Column Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
        {/* Column 1: Enterprise Identity */}
        <div className="lg:col-span-4 p-8 sm:p-10 flex flex-col justify-between">
          <div>
            <div className="mb-6 flex items-center gap-3.5">
              <Link
                href="/"
                className="rounded-full bg-[#efe7d3] flex items-center justify-center w-14 h-14 border border-[#d9ae34]/60 shrink-0"
              >
                <Image
                  src="/Images/GB_logo.png"
                  alt="Golden Basket Logo"
                  width={48}
                  height={48}
                  className="object-contain rounded-full"
                />
              </Link>
              <div>
                <h2 className="font-display text-xl font-bold text-white leading-none">
                  Golden Basket Ltd
                </h2>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#d9ae34] mt-1.5">
                  Your Choice of Value • Est. 2019
                </p>
              </div>
            </div>

            <p className="text-sm text-[#efe7d3]/75 leading-relaxed mb-6">
              Ugandan aquaculture and agribusiness enterprise operating six solar-powered concrete
              tanks in Gayaza, Wakiso District alongside founding crop farmland in Bweyale,
              Kiryandongo District.
            </p>
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-[#d9ae34] hover:text-white transition-colors w-fit"
          >
            <span>Read Full Monograph</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Column 2: Directory */}
        <div className="lg:col-span-2 p-8 sm:p-10">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#d9ae34] mb-6">
            01 / Directory
          </h3>
          <ul className="space-y-3 text-sm">
            {QUICK_LINKS.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-[#efe7d3]/80 hover:text-[#d9ae34] transition-colors block"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Supply & Advisory */}
        <div className="lg:col-span-3 p-8 sm:p-10">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#d9ae34] mb-6">
            02 / Supply &amp; Advisory
          </h3>
          <ul className="space-y-3 text-sm">
            {OFFERINGS.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-[#efe7d3]/80 hover:text-[#d9ae34] transition-colors block"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Gayaza Dispatch Desk */}
        <div className="lg:col-span-3 p-8 sm:p-10 flex flex-col justify-between">
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#d9ae34] mb-6">
              03 / Gayaza Farm Desk
            </h3>
            <dl className="space-y-4 text-xs font-mono">
              <div>
                <dt className="text-white/45 uppercase">Aquaculture Hub</dt>
                <dd className="text-[#efe7d3] mt-0.5">
                  Gayaza, Wakiso District, Uganda
                </dd>
              </div>
              <div>
                <dt className="text-white/45 uppercase">Telephone &amp; WhatsApp</dt>
                <dd className="mt-0.5 space-y-1">
                  <a
                    href="tel:+256772421174"
                    className="block text-white hover:text-[#d9ae34] transition-colors"
                  >
                    +256 772 421 174
                  </a>
                  <a
                    href="tel:+256756718377"
                    className="block text-[#efe7d3]/80 hover:text-[#d9ae34] transition-colors"
                  >
                    +256 756 718 377
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-white/45 uppercase">Electronic Mail</dt>
                <dd className="mt-0.5">
                  <a
                    href="mailto:info@goldenbasket.ug"
                    className="text-white hover:text-[#d9ae34] transition-colors"
                  >
                    info@goldenbasket.ug
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/45">
              Connect
            </span>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-[#efe7d3]/75 hover:text-[#d9ae34] transition-colors"
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Colophon Bar */}
      <div className="bg-[#122615] border-t border-white/15">
        <div className="max-w-7xl mx-auto px-8 sm:px-10 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 font-mono text-[11px] text-[#efe7d3]/70">
          <p>
            &copy; {new Date().getFullYear()} GOLDEN BASKET LIMITED. ALL RIGHTS RESERVED.
          </p>
          <p className="uppercase tracking-widest text-[#d9ae34]">
            00°27&apos;N 32°36&apos;E • WAKISO &amp; KIRYANDONGO, UGANDA
          </p>
        </div>
      </div>
    </footer>
  );
}
