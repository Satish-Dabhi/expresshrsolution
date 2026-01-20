import { ContactForm } from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import CurvedDivider from "@/components/CurvedDivider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Express HR Solution | Contact Us",
  description: "Get in touch with Express HR Solution.",
};

const heroContent = {
  textLines: ["Lets Build Reliable", "Operations Together"],
};

export default function ContactSection() {
  return (
    <>
      <section className="h-[13rem] w-full bg-white"></section>

      {/* <GridTypewriter textLines={heroContent.textLines} desc={""} /> */}

      <div className="text-center text-[28px] sm:text-[40px] lg:text-[64px] font-semibold leading-tight mb-6">
        Lets Build Reliable Operations Together
      </div>

      <CurvedDivider />

      <section className="py-8 md:py-16">
        <div className="mx-auto w-full lg:max-w-[1400px] px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form — FIRST on mobile, SECOND on desktop */}
            <div className="order-1 lg:order-2 lg:col-span-2 space-y-24 pl-0 lg:pl-8">
              <h1 className="text-[40px] lg:text-[64px] font-semibold mb-5 md:mb-12 leading-[36px] sm:leading-[48px] lg:leading-[64px]">
                Contact Us
              </h1>
              <ContactForm />
            </div>

            {/* Contact Info — SECOND on mobile, FIRST on desktop */}
            <div className="order-2 lg:order-1 border-t lg:border-t-0 lg:border-r border-gray-200 pt-8 lg:pt-0 pr-0 lg:pr-8">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
