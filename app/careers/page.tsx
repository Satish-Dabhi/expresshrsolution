import { CareerForm } from "@/components/contact/CareerForm";
import ContactInfo from "@/components/contact/ContactInfo";
import CurvedDivider from "@/components/CurvedDivider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Express HR Solution | Careers",
  description: "Get in touch with Express HR Solution.",
};

const heroContent = {
  textLines: ["Join Our Team"],
};

export default function ContactSection() {
  return (
    <>
      <section className="h-[13rem] w-full bg-white"></section>

      <div
        className="text-center text-[28px] sm:text-[40px] lg:text-[64px] font-semibold leading-tight mb-6"
      >
        Join Our Team
      </div>

      <CurvedDivider />

      <section className="py-8 md:py-16">
        <div className="mx-auto w-full lg:max-w-[1400px] px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Left section */}
            <div className="border-b lg:border-b-0 lg:border-r border-gray-200 pr-0 lg:pr-8 pb-8 lg:pb-0">
              <ContactInfo />
            </div>

            {/* Right section */}
            <div className="lg:col-span-2 space-y-24 pl-0 lg:pl-8">
              <h1
                className="text-[40px] lg:text-[64px] font-semibold mb-5 md:mb-12"
                style={{ lineHeight: '64px' }}
              >Careers
              </h1>
              <CareerForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
