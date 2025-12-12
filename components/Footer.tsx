import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full">
            <div
                className="
          mx-auto w-full max-w-[1400px]
          px-6 md:px-0 
          py-20
          grid grid-cols-1 md:grid-cols-[auto_1fr_1fr]
          gap-20 md:gap-40
          items-start
        "
            >
                {/* Logo */}
                <div className="flex items-start">
                    <Image
                        src="/images/logos/footer-logo.png"
                        alt="Express HR Solutions"
                        width={417}
                        height={141}
                        className="w-[417px] h-auto max-w-full object-contain"
                    />
                </div>

                {/* Contact */}
                <div>
                    <h4 className="font-[600] text-[24px] leading-[100%] text-black mb-6 font-[Instrument_Sans]">
                        Contact
                    </h4>

                    <ul className="space-y-4 text-gray-500 font-[Instrument_Sans] text-[24px] leading-[100%] font-normal">
                        <li>+0000 0000</li>

                        <li>
                            <Link href="mailto:team@expresshr.com" className="hover:text-gray-700">
                                team@expresshr.com
                            </Link>
                        </li>

                        <li>
                            <Link href="mailto:team@expresshr.com" className="hover:text-gray-700">
                                team@expresshr.com
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="font-[600] text-[24px] leading-[100%] text-black mb-6 font-[Instrument_Sans]">
                        Services
                    </h4>

                    <ul className="space-y-4 text-gray-500 font-[Instrument_Sans] text-[24px] leading-[100%] font-normal">
                        <li>
                            <Link href="/services/warehouse" className="hover:text-gray-700">
                                Warehouse
                            </Link>
                        </li>
                        <li>
                            <Link href="/services/workforce" className="hover:text-gray-700">
                                Workforce
                            </Link>
                        </li>
                        <li>
                            <Link href="/services/facility" className="hover:text-gray-700">
                                Facility
                            </Link>
                        </li>
                        <li>
                            <Link href="/services/governance" className="hover:text-gray-700">
                                Governance
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
