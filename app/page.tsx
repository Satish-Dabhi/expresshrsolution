import StatementSection from "@/components/home/StatementSection";
import WarehouseStickySection from "@/components/home/WarehouseStickySection";

import AnimatedImageSection from "@/components/AnimatedImageSection";
import CurvedDivider from "@/components/CurvedDivider";
import IndustriesSticky from "@/components/home/IndustriesSticky";
import StatsSection from "@/components/home/StatsSection";
import TrustedHeading from "@/components/home/TrustedHeading";
import TrustedLogosGrid from "@/components/home/TrustedLogosGrid";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Express HR Solution | Home",
  description: "Welcome to Express HR Solution. We provide the best services.",
};

export default function Home() {
  return (
    <>
      <AnimatedImageSection
        image="/images/home-hero.jpg"
        title="Building India’s Most Reliable Workforce-Driven Logistics Ecosystem"
        subtitle=""
        // height="900px"
        titleMarginTop="10rem"
        animationDelay={2000}
      />

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

      {/* FULL WIDTH */}
      <IndustriesSticky
        items={[
          {
            image: "/images/industries.png",
            icon: "/images/logos/retail-e-commerce.svg",
            title: "Retail & E-commerce",
            points: [
              "Fast, scalable delivery for retail and online sales.",
              "Nationwide warehousing & distribution.",
              "Integrated returns management",
            ],
          },
          {
            image: "/images/industries.png",
            icon: "/images/logos/electronics-technology.svg",
            title: "Electronics & Technology",
            points: [
              "ESD safe handling",
              "Ground transportation",
            ],
          },
          {
            image: "/images/industries.png",
            icon: "/images/logos/fmcg-food.svg",
            title: "FMCG & Food",
            points: [
              "Safe, traceable logistics for healthcare essentials.",
              "Tamper-evident packaging",
              "Real-time tracking",
            ],
          },

          {
            image: "/images/industries.png",
            icon: "/images/logos/construction.svg",
            title: "Construction & Infrastructure",
            points: [
              "Workforce and logistics solutions for construction projects.",
              "handling heavy materials and equipment with safety as priority.",
            ],
          },
          {
            image: "/images/industries.png",
            icon: "/images/logos/oil-gas.svg",
            title: "Oil & Gas",
            points: [
              "Compliance-focused operations for the highly regulated oil and gas sector.",
              "Specialized training for handling sensitive materials.",
            ],
          },
          {
            image: "/images/industries.png",
            icon: "/images/logos/corporate-facilities.svg",
            title: "Corporate Facilities",
            points: [
              "End-to-end management of logistics and workforce requirements for corporate facilities across India.",
            ],
          },
        ]}
      />

      {/* <FlipkartBanner /> */}

      {/* FULL WIDTH */}
      <AnimatedImageSection
        image="/images/box.jpg"
        title='"Express HR Solutions turned finance from a bottleneck into a partner"'
        subtitle="Ankit Ahuja, XYZ Co."
          titleSpeed={100}
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
    </>
  );
}
