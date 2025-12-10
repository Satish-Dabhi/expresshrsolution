import ParallaxHero from "@/components/ParallaxHero";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Express HR Solution | Government Liaising",
  description: "Learn more about our government liaising services.",
};

export default function BulkCargoPage() {

  return (
    <>
      <ParallaxHero
        title="Government Liaising"
        backgroundImage="/images/bg2.jpg"
      />

      <section id="single-blog" className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:space-x-12 mb-10">
            <div className="lg:w-1/2">
              <p className="mb-6">
                One of Express HR&apos;s strengths is liaison services with the government for import and export in India. The weary standards of international standards. The terms like unique and imposing appear to be most suitable if one starts looking for the words to describe the quality of our services.              </p>
              <p>
                In addition to the optimum level of service, we offer them at a reasonable price. Express HR Solutions has been engaged with some sections to provide legal services to our clients. We are one of the providers of Liaison services for logistics in India that strengthen us to help clients in their A to Z logistics and supply chain barriers. With our legal liaison services, you can get hassle-free services at an affordable price. In India, listed companies provide legal liaison services all under one roof.
              </p>
            </div>

            <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-5">
              <Image
                src="/images/government-liaising.png"
                alt="Government Liaising"
                width={700}
                height={400}
                className="rounded-lg object-cover w-full h-auto"
                priority // for SSR optimization
              />
            </div>
          </div>

          {/* Second row */}
          <div>
            <p className="mb-6">
              Additionally, we provide our clients with liaising services for their import and export requirements. Products falling in different verticals require certifications for commercial purposes, and we help our clients match their requirements for certification fulfilment.

            </p>
            <p>
              Express HR Solutions has provided logistics liaison services in India to various clients numerous times and will continue to do so to help the business maintain a smooth operation.

            </p>
          </div>
        </div>
      </section>
    </>
  );
}
