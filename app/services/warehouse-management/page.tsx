import ParallaxHero from "@/components/ParallaxHero";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Express HR Solution | Warehouse Management",
  description: "Learn more about our warehouse management services.",
};

export default function BulkCargoPage() {

  return (
    <>
      <ParallaxHero
        title="Warehouse Management"
        backgroundImage="/images/bg2.jpg"
      />

      <section id="single-blog" className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:space-x-12 mb-10">
            <div className="lg:w-1/2">
              <p className="mb-6">
                Consumer mandates are changing the way companies manage their supply chains. And warehouse operations today must be flexible to accommodate these market changes and disruptions. Companies are heavily investing in newer supply chain technologies to provide them with quicker response time and easier change management while managing inventory and productivity across their entire fulfilment cycle. Through these upgrades, companies are seeing a reduction in inventory levels and are achieving greater productivity in their supply chain.
              </p>
              <p>
                Express HR solutions warehouse management services (WMS) is the leading service provider for managing your warehouse operations.
              </p>
            </div>

            <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-5">
              <Image
                src="/images/warehouse-management.jpg"
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
            <p>Regardless of location, size, or processes, Express HR solutions offer trained staff for warehouse setup operations, which include but aren’t limited to:</p>
            <div className="container mx-auto px-6 lg:px-12 mb-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <ul className="list-disc list-inside space-y-2 text-gray-800">
                    <li>Warehouse Managers</li>
                    <li>SAP / ERP Operators</li>
                    <li>Pickers / Allocators</li>
                    <li>Process Associates</li>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc list-inside space-y-2 text-gray-800">
                    <li>Warehouse In-charge</li>
                    <li>Forklift Operators</li>
                    <li>Helpers</li>
                    <li>Scanners &amp; Loaders</li>
                  </ul>
                </div>
              </div>
            </div>
            <p>Whether the requirement is permanent or contractual, we can provide competent staff to fulfil your requirements and make them adapt to your facilities, increasing capabilities and reducing any human inefficiencies and error.</p>
            <p>Taking care of the complex payroll of a large number of employees will be one less trouble on your mind because we can handle it for you while keeping costs down. And of course, you also do not have to worry about compliance either, our experienced team will take care of it all for you by ensuring adherence to applicable laws and statutes, ensuring you have peace of mind at all times and no unnecessary legal penalty, fine or expense.</p>
            <p>And as your business grows and evolves, Express HR solutions adapt to meet your needs. As our clients attest, we do more than crunch numbers. We play a leading role in boosting bottom-line results and future growth. If yours is a company seeking improved performance, we would welcome the opportunity to show you how Express HR Solutions can simplify your operations, increase your profitability and help you grow.</p>
          </div>
        </div>
      </section>
    </>
  );
}
