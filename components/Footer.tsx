"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full">
      <div
        className="
          mx-auto max-w-[1400px]
          px-6 md:px-10
          pr-0 md:pr-30
          py-20
          grid
          grid-cols-1 md:grid-cols-[auto_1fr]
          gap-x-40
          gap-y-16
          items-start
        "
      >
        {/* LOGO */}
        <div className="flex justify-start">
          <Image
            src="/images/logos/express-logo.png"
            alt="Express HR Solutions"
            width={417}
            height={141}
            className="w-[260px] md:w-[417px] h-auto object-contain"
          />
        </div>

        {/* CONTACT + SERVICES WRAPPER */}
        <div className="flex flex-col md:flex-row md:justify-end md:gap-x-12 text-left md:text-left">
          {/* CONTACT */}
          <div>
            <h4 className="font-[600] text-[20px] md:text-[24px] mb-3 md:mb-5 text-black font-[Instrument_Sans]">
              <Link href="/contact-us">Contact</Link>

            </h4>

            <ul className="space-y-4 text-gray-500 text-[18px] md:text-[20px] font-[Instrument_Sans]">
              <li>+91 99673 26161</li>

              <li>
                <Link
                  href="mailto:info@expresshrsolutions.com"
                  className="hover:text-gray-700 transition-colors"
                >
                  info@expresshrsolutions.com
                </Link>
              </li>

              {/* SOCIAL ICONS */}
              <li>
                <div className="flex items-center gap-5 pt-2">
                  <motion.a
                    href="https://www.linkedin.com/company/express-hr-solutions/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-500 hover:text-gray-800 transition-colors"
                  >
                    <Linkedin className="w-6 h-6 md:w-7 md:h-7" />
                  </motion.a>

                  <motion.a
                    href="https://www.instagram.com/expresshrsolutions?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-500 hover:text-gray-800 transition-colors"
                  >
                    <Instagram className="w-6 h-6 md:w-7 md:h-7" />
                  </motion.a>

                  <motion.a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-500 hover:text-gray-800 transition-colors"
                  >
                    <Twitter className="w-6 h-6 md:w-7 md:h-7" />
                  </motion.a>
                </div>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div className="pt-5 md:pt-0">
            <h4 className="font-[600] text-[20px] md:text-[24px] mb-3 md:mb-5 text-black font-[Instrument_Sans]">
              <Link href="/services">Services</Link>
            </h4>

            <ul className="space-y-4 text-gray-500 text-[18px] md:text-[20px] font-[Instrument_Sans]">
              <li>
                <Link href="/services">Warehouse</Link>
              </li>
              <li>
                <Link href="/services">Workforce</Link>
              </li>
              <li>
                <Link href="/services">Facility</Link>
              </li>
              <li>
                <Link href="/services">Governance</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
