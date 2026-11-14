import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Products", href: "/#products" },
  { label: "Leadership Team", href: "/#team" },
  { label: "Customer Stories", href: "/#testimonials" },
  { label: "Contact & Orders", href: "/contact" },
];

const OFFERINGS = [
  { label: "Fresh Catfish Supply", href: "/#products" },
  { label: "Quality Catfish Fingerlings", href: "/#products" },
  { label: "Sustainable Solar Aquaculture", href: "/about" },
  { label: "Agribusiness Training & Advisory", href: "/contact" },
  { label: "Bulk & Restaurant Orders", href: "/contact" },
];

const SOCIAL_LINKS = [
  {
    label: "Follow Golden Basket on Facebook",
    href: "https://facebook.com",
    icon: FaFacebook,
  },
  {
    label: "Chat with Golden Basket on WhatsApp",
    href: "https://wa.me/256772421174",
    icon: FaWhatsapp,
  },
  {
    label: "Follow Golden Basket on X (Twitter)",
    href: "https://x.com",
    icon: FaXTwitter,
  },
  {
    label: "Subscribe to Golden Basket on YouTube",
    href: "https://youtube.com",
    icon: FaYoutube,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#102F14] text-white border-t border-[#e1bb3f]/25">
      {/* Main 4-Column Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1: Brand Info */}
        <div className="flex flex-col">
          <div className="mb-4 flex items-center gap-3.5">
            <Link
              href="/"
              className="rounded-full bg-light-gold-tint flex items-center justify-center w-16 h-16 ring-2 ring-[#e1bb3f]/40 shrink-0 shadow-md"
            >
              <Image
                src="/Images/GB_logo.png"
                alt="Golden Basket Logo"
                width={56}
                height={56}
                className="object-contain rounded-full"
              />
            </Link>
            <div>
              <h2 className="text-lg font-bold text-[#e1bb3f] leading-tight">
                Golden Basket Ltd
              </h2>
              <p className="text-xs text-[#F5E6A2]/90 font-medium italic mt-0.5">
                &ldquo;Your choice of value&rdquo;
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            Founded in 2019, Golden Basket Ltd is committed to transforming
            livelihoods across East Africa through sustainable solar-powered
            aquaculture, supplying premium catfish and fingerlings.
          </p>

          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#e1bb3f] hover:text-[#F5E6A2] hover:underline transition-colors w-fit"
          >
            <span>Learn more about our story</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-base font-semibold mb-4 text-[#e1bb3f] tracking-wide uppercase">
            Quick Links
          </h3>
          <ul className="space-y-2.5 text-sm">
            {QUICK_LINKS.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-gray-300 hover:text-[#e1bb3f] transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e1bb3f]/50 group-hover:bg-[#e1bb3f] transition-colors" />
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Our Offerings */}
        <div>
          <h3 className="text-base font-semibold mb-4 text-[#e1bb3f] tracking-wide uppercase">
            Our Offerings
          </h3>
          <ul className="space-y-2.5 text-sm">
            {OFFERINGS.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-gray-300 hover:text-[#e1bb3f] transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e1bb3f]/50 group-hover:bg-[#e1bb3f] transition-colors" />
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact & Connect */}
        <div>
          <h3 className="text-base font-semibold mb-4 text-[#e1bb3f] tracking-wide uppercase">
            Contact &amp; Connect
          </h3>
          <ul className="space-y-3 text-sm text-gray-300 mb-6">
            <li>
              <Link
                href="/contact"
                className="flex items-start gap-2.5 hover:text-[#e1bb3f] transition-colors"
              >
                <HiOutlineLocationMarker className="text-[#e1bb3f] text-lg shrink-0 mt-0.5" />
                <span>Wakiso District, Central Region, Uganda</span>
              </Link>
            </li>
            <li>
              <a
                href="mailto:info@goldenbasket.ug"
                className="flex items-center gap-2.5 hover:text-[#e1bb3f] transition-colors"
              >
                <MdEmail className="text-[#e1bb3f] text-lg shrink-0" />
                <span>info@goldenbasket.ug</span>
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <IoCall className="text-[#e1bb3f] text-lg shrink-0 mt-0.5" />
              <div className="flex flex-col space-y-0.5">
                <a
                  href="tel:+256772421174"
                  className="hover:text-[#e1bb3f] transition-colors"
                >
                  +256 772 421 174
                </a>
                <a
                  href="tel:+256756718377"
                  className="hover:text-[#e1bb3f] transition-colors"
                >
                  +256 756 718 377
                </a>
              </div>
            </li>
            <li>
              <a
                href="https://wa.me/256772421174"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#183113] bg-[#e1bb3f] hover:bg-[#f0cc55] px-3.5 py-2 rounded-lg transition-colors mt-1"
              >
                <FaWhatsapp className="text-base" />
                <span>Chat on WhatsApp</span>
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-2.5">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full bg-white/10 text-white hover:bg-[#e1bb3f] hover:text-[#183113] flex items-center justify-center transition-all duration-200 shadow-sm"
              >
                <Icon className="text-base" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-[#F5E6A2] text-[#183113] border-t border-[#e1bb3f]/40">
        <div className="max-w-7xl mx-auto px-6 py-3.5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs font-medium">
          <p>
            Copyright &copy; {new Date().getFullYear()} Golden Basket Limited.
            All rights reserved.
          </p>
          <p className="text-[#183113]/80">
            Sustainable Aquaculture &bull; Wakiso District, Uganda
          </p>
        </div>
      </div>
    </footer>
  );
}
