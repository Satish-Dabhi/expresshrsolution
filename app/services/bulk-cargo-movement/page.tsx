import ParallaxHero from "@/components/ParallaxHero";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Express HR Solution | Bulk Cargo Movement",
  description: "Learn more about our bulk cargo movement services.",
};

export default function BulkCargoPage() {

  return (
    <>
      <ParallaxHero
        title="Bulk Cargo Movement"
        backgroundImage="/images/bg2.jpg"
      />

      <section id="single-blog" className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:space-x-12 mb-10">
            <div className="lg:w-1/2">
              <p className="mb-6">
                A bulk carrier is a ship specially designed to transport unpackaged dry bulk cargo such as grains, coal, ore, steel coils, cement in its cargo holds. Dry bulk cargo can be very dense, corrosive, or abrasive, that may cause safety problems – cargo shifting, spontaneous combustion, cargo saturation – and threaten the vessel.
              </p>
              <p>
                On bulk carriers, crew are involved in operation, management and maintenance of the vessel, taking care of safety, navigation, maintenance and cargo care in accordance with international maritime legislation. Cargo loading operations vary in complexity where loading and discharging of cargo can take several days.
              </p>
            </div>

            <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-5">
              <Image
                src="/images/bulk-cargo.jpg"
                alt="Image showing the bulk cargo movement with a truck and goods"
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
              Express HR is the bulk carrier ship manager of choice for reputable ship owners thanks to its extensive track record in this space. Our bulk carrier charterers have very stringent requirements for quality ship management and asset preservation due to their own safety standards and benchmarks which are getting closer to those of oil majors. The quality of our people on shore and aboard have the best expertise and skills due to training as well as stringent hiring and selection criteria.
            </p>
            <p>
              As part of our operational excellence, Express HR possesses excellent Right Ship vessel inspection results, ensuring that ships under management are maintained in peak condition throughout the entire life span. We are in full compliance with International Safety Management (ISM) requirements to ensure safe and efficient vessel operations.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
