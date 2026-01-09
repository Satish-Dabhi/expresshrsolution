import { CareerForm } from "@/components/contact/CareerForm";
import ContactInfo from "@/components/contact/ContactInfo";
import CurvedDivider from "@/components/CurvedDivider";
import GridTypewriter from "@/components/GridTypewriter";
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
      <section className="h-[10rem] w-full bg-white"></section>

      <div
        className="text-center text-[28px] sm:text-[40px] lg:text-[64px] font-semibold leading-tight mb-6"
      >
        Join Our Team
      </div>

      <CurvedDivider />

      {/* <GridTypewriter textLines={heroContent.textLines} desc={""} /> */}

      <section className="px-6 md:px-20 py-8 md:py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <ContactInfo />
          <div className="lg:col-span-2 space-y-24">
            <h1 className="text-[40px] lg:text-[64px] font-semibold mb-5 md:mb-12" style={{ lineHeight: '64px' }}>
              Careers
            </h1>
            <CareerForm />
          </div>
        </div>
      </section>
    </>
  );
}
