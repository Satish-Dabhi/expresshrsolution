import ParallaxHero from "@/components/ParallaxHero";
import SectionDivider from "@/components/SectionDivider";
import { Metadata } from "next";
import Image from "next/image";

import AnimatedCTA from "@/components/about/AnimatedCTA";
import AnimatedFeatureCards from "@/components/about/AnimatedFeatureCards";

export const metadata: Metadata = {
  title: "Express HR Solution | About Us",
  description: "Learn more about Express HR Solution.",
};

export default function AboutSection() {
  return (
    <>
      <ParallaxHero
        title="About Us"
        backgroundImage="/images/bg2.jpg"
      />

      {/* About Text Section */}
      <section className="py-20 bg-white text-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto text-center mb-28">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-snug text-primary">
              About Express HR Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
            <div className="w-full h-full flex justify-center">
              <Image
                width={600}
                height={400}
                src="/images/about.jpg"
                alt="About Express HR Solutions"
                className="rounded-3xl shadow-lg object-cover w-full max-w-md lg:max-w-lg"
              />
            </div>

            <div>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                At Express HR Solutions, we don’t just provide services; we orchestrate success. As one of India’s largest independent service-based companies, we stand tall with an employee base of 15,000+ dedicated professionals. Our Unique Expertise: Fueling Your Growth
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Remember, at Express HR Solutions, we don’t just promise solutions; we deliver transformation. Let’s embark on this journey together!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-100 text-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-secondary text-center">
            Our Features
          </h3>

          <SectionDivider />

          <AnimatedFeatureCards />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white text-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedCTA />
        </div>
      </section>
    </>
  );
}
