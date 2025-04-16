import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-200 py-16">
      <div className="container mx-auto px-4">
        {/* grid dengan 5 kolom di desktop: branding, 3 kolom link, dan social icons */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          
          {/* Branding */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Palm Studio
            </h3>
            <p className="text-sm sm:text-base text-gray-600 max-w-xs leading-relaxed">
              Empower your digital presence with stunning, high‑performing websites.
            </p>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-bold text-lg text-gray-900 mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link href="#" className="hover:underline">
                  About us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-bold text-lg text-gray-900 mb-4">Services</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link href="#" className="hover:underline">
                  Web Design
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  E‑commerce
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  SEO &amp; Marketing
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link href="#" className="hover:underline">
                  Email
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  WhatsApp
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Help/FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Social Icons */}
          <div className="hidden md:flex justify-end items-start space-x-4">
            <Link
              href="#"
              aria-label="Facebook"
              className="bg-white text-gray-700 rounded-full p-3 shadow hover:opacity-90 transition"
            >
              <FaFacebookF className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="bg-gradient-to-tr from-[#DE33FF] to-[#5B2FFF] text-white rounded-full p-3 shadow hover:opacity-90 transition"
            >
              <FaInstagram className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              aria-label="Twitter"
              className="bg-white text-gray-700 rounded-full p-3 shadow hover:opacity-90 transition"
            >
              <FaTwitter className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <p className="mt-12 text-center text-sm text-gray-600">
          All rights reserved@palmstudio.co
        </p>
      </div>
    </footer>
  );
}
