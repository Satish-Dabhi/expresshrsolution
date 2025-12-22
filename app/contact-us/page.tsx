import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
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

      <GridTypewriter textLines={heroContent.textLines} desc={""} />

      <section className="px-6 md:px-20 py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left Forms */}
          <div className="lg:col-span-2 space-y-24">
            <h1 className="text-[28px] sm:text-[40px] lg:text-[64px] font-semibold mb-12">
              Contact Us
            </h1>

            <ContactForm
              title="Get in touch with us for any Business enquiries and questions"
              secondFieldLabel="Services Interested In"
            />

            <ContactForm
              title="Get in touch with us for Career Opportunities"
              secondFieldLabel="Role Interested In"
            />
          </div>

          {/* Right Info */}
          <ContactInfo />
        </div>
      </section>
    </>
  );
}
