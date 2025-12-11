import HeroRevealSection from "@/components/home/HeroRevealSection";
import StatementSection from '@/components/home/StatementSection';
import WarehouseStickySection from '@/components/home/WarehouseStickySection';

import CurvedDivider from "@/components/home/CurvedDivider";
import IndustriesSticky from "@/components/home/IndustriesSticky";
import ReadyToMove from "@/components/home/ReadyToMove";
import StatsSection from "@/components/home/StatsSection";
import TestimonialRevealSection from "@/components/home/TestimonialRevealSection";
import TrustedHeading from "@/components/home/TrustedHeading";
import TrustedLogosGrid from "@/components/home/TrustedLogosGrid";
import { Metadata } from "next";
import Image from "next/image";
import AnimatedImageSection from "@/components/AnimatedImageSection";

export const metadata: Metadata = {
  title: "Express HR Solution | Home",
  description: "Welcome to Express HR Solution. We provide the best services.",
};

export default function Home() {
  return (
    <>
      {/* FULL WIDTH SECTIONS (stay untouched) */}
      <HeroRevealSection />

      {/* CONTAINER SECTIONS */}
      <div className="mx-auto w-full max-w-[1400px]">
        <StatementSection
          title={`From warehouses\nto workforces`}
          description="Express HR Solutions delivers execution excellence backed by compliant governance and on-ground productivity."
        />
      </div>

      {/* FULL WIDTH SECTIONS */}
      <WarehouseStickySection />
      <CurvedDivider />

      {/* CONTAINER */}
      <div className="mx-auto w-full max-w-[1400px]">
        <StatementSection
          title={`Built for Critical\nIndustries`}
          description="We support companies in Food, Pharma, Retail, and Manufacturing with Tailored Logistics."
        />
      </div>

      {/* FULL WIDTH */}
      <IndustriesSticky
        items={[
          {
            image: "/images/industries.png",
            title: "Retail & E-commerce",
            points: [
              "Distribution & warehousing solutions tailored for modern retail and e-commerce operations, with emphasis on speed and accuracy.",
            ],
          },
          {
            image: "/images/transportation.jpg",

            title: "FMCG & Food",
            points: [
              "Safe, traceable logistics for healthcare essentials.",
              "Tamper-evident packaging",
              "Real-time tracking",
            ],
          },
          {
            image: "/images/warehouse-management.jpg",
            title: "Electronics & Technology",
            points: [
              "ESD-safe handling & packaging",
              "Express air & ground transport",
              "Customs-ready documentation support",
            ],
          },
          {
            image: "/images/industries.png",
            title: "Construction & Infrastructure",
            points: [
              "Workforce and logistics solutions for construction projects, handling heavy materials and equipment with safety as priority.",
            ],
          },
          {
            image: "/images/transportation.jpg",
            title: "Oil & Gas",
            points: [
              "Compliance-focused operations for the highly regulated oil and gas sector, with specialized training for handling sensitive materials.",
            ],
          },
          {
            image: "/images/warehouse-management.jpg",
            title: "Corporate Facilities",
            points: [
              "End-to-end management of logistics and workforce requirements for corporate facilities across India."],
          },
        ]}
      />

      {/* FULL WIDTH */}
      {/* <TestimonialRevealSection /> */}

      <AnimatedImageSection
        image="/images/box.jpg"
        title="Express HR Solutions turned finance from a bottleneck into a partner"
        subtitle="Ankit Ahuja, XYZ Co."
        height="900px"
      />

      {/* CONTAINER */}
      <div className="mx-auto w-full max-w-[1400px]">
        <TrustedHeading />
      </div>

      <TrustedLogosGrid />

      {/* FULL WIDTH IMAGE */}
      <Image
        src="/images/hr-facade.png"
        alt="section image"
        width={1920}
        height={397}
        className="
          w-full 
          h-[220px]       /* mobile */
          md:h-[397px]    /* desktop */
          object-cover 
          opacity-100 
          rotate-0
        "
        priority
      />

      {/* CONTAINER */}
      <div className="mx-auto w-full max-w-[1400px]">
        <StatsSection />
      </div>

      <CurvedDivider />

      {/* CONTAINER */}
      <div className="mx-auto w-full max-w-[1400px]">
        <ReadyToMove />
      </div>
    </>
  );
}

