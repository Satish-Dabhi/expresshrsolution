import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full">
      <div
        className="
          mx-auto max-w-[1400px]
          px-6 md:px-0
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
            src="/images/logos/footer-logo.png"
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
              Contact
            </h4>

            <ul className="space-y-4 text-gray-500 text-[18px] md:text-[24px] font-[Instrument_Sans]">
              <li>+91 99673 26161</li>
              <li>
                <Link
                  href="mailto:info@expresshrsolutions.com"
                  className="hover:text-gray-700"
                >
                  info@expresshrsolutions.com
                </Link>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div className="pt-5 md:pt-0">
            <h4 className="font-[600] text-[20px] md:text-[24px] mb-3 md:mb-5 text-black font-[Instrument_Sans]">
              Services
            </h4>

            <ul className="space-y-4 text-gray-500 text-[18px] md:text-[24px] font-[Instrument_Sans]">
              <li>
                <Link href="/services/warehouse">Warehouse</Link>
              </li>
              <li>
                <Link href="/services/workforce">Workforce</Link>
              </li>
              <li>
                <Link href="/services/facility">Facility</Link>
              </li>
              <li>
                <Link href="/services/governance">Governance</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
