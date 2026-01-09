import { ContactForm } from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import CurvedDivider from "@/components/CurvedDivider";
import GridTypewriter from "@/components/GridTypewriter";
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
      <section className="h-[10rem] w-full bg-white"></section>

      {/* <GridTypewriter textLines={heroContent.textLines} desc={""} /> */}

      <div
        className="text-center text-[28px] sm:text-[40px] lg:text-[64px] font-semibold leading-tight mb-6"
      >
        Lets Build Reliable Operations Together
      </div>

      <CurvedDivider />

      <section className="px-6 md:px-20 py-8 md:py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <ContactInfo />

          <div className="lg:col-span-2 space-y-24">
            <h1 className="text-[40px] lg:text-[64px] font-semibold mb-5 md:mb-12" style={{ lineHeight: '64px' }}>
              Contact Us
            </h1>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
