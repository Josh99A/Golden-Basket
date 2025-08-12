import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-[#102F14] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Company Info */}
        <div className="border-b md:border-b-0 md:border-r border-gray-600 pr-4">
          <div className="mb-4 flex items-center">
            <div className="rounded-full bg-[#F5E6A2] flex items-center justify-center w-20 h-20">
              <Image
                src="/Images/GB_logo.png"
                alt="Golden Basket Logo"
                width={70}
                height={70}
                className="object-contain rounded-full"
              />
            </div>
          </div>
          <h2 className="text-lg font-semibold mb-1 text-[#E3B23C]">
            Golden Basket Ltd
          </h2>
          <p className="text-sm mb-3">Your choice of value.</p>
          <p className="text-xs leading-relaxed mb-2">
            Founded in 2019, Golden Basket Ltd is committed to transforming
            livelihoods through sustainable agribusiness. We specialize in
            producing and supplying high-quality catfish.
          </p>
          <Link href="#" className="text-xs text-[#E3B23C] hover:underline">
            read more...
          </Link>
        </div>

        {/* Column 2: Explore */}
        <div className="border-b md:border-b-0 md:border-r border-gray-600 px-4">
          <h3 className="text-lg font-semibold mb-4 text-[#E3B23C]">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-[#E3B23C]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#E3B23C]">
                About us
              </Link>
            </li>
            <li>
              <Link href="/media" className="hover:text-[#E3B23C]">
                Media
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-[#E3B23C]">
                Products
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-[#E3B23C]">
                Projects
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="px-4">
          <h3 className="text-lg font-semibold mb-4 text-[#E3B23C]">
            Contact Information
          </h3>
          <div className="flex items-center gap-2 mb-3 text-sm">
            <HiOutlineLocationMarker className="text-[#E3B23C] text-lg" />
            <span>Wakiso district, Uganda</span>
          </div>
          <div className="flex items-center gap-2 mb-3 text-sm">
            <MdEmail className="text-[#E3B23C] text-lg" />
            <span>info@goldenbasket.ug</span>
          </div>
          <div className="flex items-center gap-2 mb-4 text-sm">
            <IoCall className="text-[#E3B23C] text-lg" />
            <span>0772421174 / 0756718377</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-2xl">
            <Link href="#" className="hover:opacity-80">
              <FaFacebook className="text-blue-500" />
            </Link>
            <Link href="#" className="hover:opacity-80">
              <FaWhatsapp className="text-green-500" />
            </Link>
            <Link href="#" className="hover:opacity-80">
              <FaXTwitter className="text-black bg-white rounded-full p-[2px]" />
            </Link>
            <Link href="#" className="hover:opacity-80">
              <FaYoutube className="text-red-600" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#F5E6A2] text-black text-center text-xs py-3">
        Copyright © {new Date().getFullYear()} Golden Basket Limited. All rights
        reserved.
      </div>
    </footer>
  );
}
