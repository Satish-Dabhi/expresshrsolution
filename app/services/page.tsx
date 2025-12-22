import { Metadata } from "next";

import CurvedDivider from "@/components/CurvedDivider";
import GridTypewriter from "@/components/GridTypewriter";
import ReadyToMove from "@/components/ReadyToMove";
import { ExtendedCapabilities } from "@/components/services/ExtendedCapabilities";
import StickyScrollSection from "@/components/services/StickyScrollSection";
import StatsSection from "@/components/home/StatsSection";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Express HR Solution | Services",
  description: "Learn more about Express HR Solution.",
};

const warehouseData = [
  {
    title: "3PL Warehouse Management",
    image: "/images/services-bg.png",
    services: [
      "End-to-end warehouse operations",
      "Inventory tracking & SKU accuracy",
      "Pallet stacking & forklift movement",
      "Dock management & dispatch readiness",
      "Safety-first operations",
    ],
    outcome: ["Improved accuracy", "Reduced TAT", "Consistent fulfilment"],
  },
  {
    title: "4PL Workforce Deployment",
    image: "/images/services-bg.png",
    services: [
      "Skilled manpower for warehouse, factory & industrial sites",
      "Workforce planning & shift structuring",
      "Attendance, UAN, ESIC, PF & compliance workflows",
      "Real-time productivity tracking",
      "Training & skill development",
    ],
    outcome: ["Zero downtime", "High reliability", "Disciplined execution"],
  },
  {
    title: "Facility & Industrial Management",
    image: "/images/services-bg.png",
    services: [
      "Industrial housekeeping &  sanitation",
      "Equipment cleaning & floor care",
      "Waste management & segregation",
      "Preventive maintenance & safety zones",
    ],
    outcome: ["Cleaner", "Safer", "More productive environments"],
  },
  {
    title: "Governance, Compliance & On-ground control",
    image: "/images/services-bg.png",
    services: [
      "PPE audits, ID checks, statutory compliance",
      "Attendance, tracking & documentation",
      "MIS dashboards & transparency",
    ],
    outcome: ["100% compliant and Audit-ready operations."],
  },
];

const extendedCapabilitiesItems = [
  {
    number: "01",
    title: "Port & Rake Handling",
    description:
      "Skilled manpower & coordination for ship unloading, port movement & rail rack operations.",
    image: "/videos/warehouse.gif",
  },
  {
    number: "02",
    title: "Dark Store Management (B2C Micro-fulfillment)",
    description: "",
    list: [
      "Order picking and batching",
      "Real time inventory sync",
      "Expiry/freshness tracking",
      "Shelf management",
      "QC, packing & dispatch prep",
    ],
    outcome:
      "OUTCOME: Speed, accuracy & consistency for FMCG, Q-commerce & retail brands.",
    image: "/videos/warehouse.gif",
  },
  {
    number: "03",
    title: "Project & Government Liaison",
    description:
      "Labour law compliance, government approvals, vendor governance.",
    image: "/videos/warehouse.gif",
  },
  {
    number: "04",
    title: "End-to-End Operational Governance",
    description:
      "Audits, safety, compliance, site reporting, productivity measurements.",
    image: "/videos/warehouse.gif",
  },
];

const heroContent = {
  textLines: [
    "Integrated Services.",
    "Intelligent Execution.",
    "Compliant Operations.",
  ],
};

export default function Services() {
  return (
    <>
      <section className="h-[15rem] w-full bg-white"></section>

      <GridTypewriter textLines={heroContent.textLines} desc={""} />

      <StickyScrollSection items={warehouseData} />

      <CurvedDivider />

      <ExtendedCapabilities
        title="Extended Capabilities"
        items={extendedCapabilitiesItems}
      />

      <Image
        src="/images/hr-facade.png"
        alt="section image"
        width={1920}
        height={397}
        className="
          w-full 
          h-[220px]       
          md:h-[397px]   
          object-cover 
          opacity-100 
          rotate-0
        "
        priority
      />

      <div className="mx-auto w-full max-w-[1400px]">
        <StatsSection />
      </div>
    </>
  );
}
