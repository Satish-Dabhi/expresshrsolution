import ContactSectionClient from "@/components/contact/ContactSectionClient";
import ParallaxHero from "@/components/ParallaxHero";
import SectionDivider from "@/components/SectionDivider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Express HR Solution | Contact Us",
  description: "Get in touch with Express HR Solution.",
};

export default function ContactSection() {
  return (
    <>
      <ParallaxHero
        title="Contact Us"
        backgroundImage="/images/bg2.jpg"
      />
      <section id="contact" className="py-20 bg-background text-foreground">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-secondary text-center">
            Get in Touch
          </h3>

          <SectionDivider />
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ContactSectionClient />
          </div>
        </div>
      </section>
    </>
  );
}
