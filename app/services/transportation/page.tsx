import ParallaxHero from "@/components/ParallaxHero";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Express HR Solution | Transportation",
  description: "Learn more about our transportation services.",
};

export default function BulkCargoPage() {

  return (
    <>
      <ParallaxHero
        title="Transportation"
        backgroundImage="/images/bg2.jpg"
      />

      <section id="single-blog" className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:space-x-12 mb-10">
            <div className="lg:w-1/2">
              <h3 className="text-3xl font-bold mb-8 text-secondary">
                Goods Transportation Vehicles
              </h3>
              <p className="mb-6">
                Supply chains are fast evolving to meet with competitive market offerings at higher speeds and lower costs. Transportation plays a crucial part in the success of modern day supply chains. Keeping in time with schedules, ensuring efficiency and keeping costs low has become a challenge that decides the success or failure of supply chains.
              </p>
              <p>
                Allow Express HR solutions to overcome this challenge for you. With a fleet of dedicated transportation vehicles and diligent drivers, we can meet your transportation and logistics requirements for your goods and for crucial last mile deliveries in a timely and cost efficient manner, keeping up with your schedules and deadlines, so you can rest assured your operations are not halted.
              </p>
            </div>

            <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-5">
              <Image
                src="/images/transportation.jpg"
                alt="Warehouse Management"
                width={700}
                height={400}
                className="rounded-lg object-cover w-full h-auto"
                priority // for SSR optimization
              />
            </div>
          </div>

          {/* Second row */}
          <div>
            <p>You do not have to worry about the maintenance of multiple vehicles which can usually become a time consuming, expensive and worrisome task. We also ensure there is no downtime to you because of such tasks. Plus, you don’t have to worry about finding qualified drivers to drive those transportation vehicles, performing background checks or managing the subsequent payroll, we take care of it all for you.</p>
            <div>
              <h4 className="text-2xl font-bold mt-8 mb-3 text-secondary">Heavy Vehicles for Transportation of Staff</h4>
              <p>Ensuring staff can arrive at your facilities on time ensures that your supply chain operations go on uninterrupted and on schedule. A single delay can cause a domino effect on other related operations by disrupting schedules and tasks, causing inefficiencies throughout your operations.</p>
              <p>We at Express HR solutions offer transportation services for staff via heavy vehicles such as buses to ensure staff can arrive on time, safely, and in a cost-efficient manner to keep your operations going without causing unnecessary downtime.</p>
            </div>

            <div>
              <h4 className="text-2xl font-bold mt-8 mb-3 text-secondary">Executive Class Vehicles for Managers / Officers / Senior Employees</h4>
              <p>Express HR solutions can offer appropriate executive class vehicles and chauffeurs for your top executives for their safety and convenience so they can travel comfortably. Our professional chauffeurs are well versed with local routes, diligent and drive safely to ensure your executives have a reliable and safe journey, every single time.</p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
