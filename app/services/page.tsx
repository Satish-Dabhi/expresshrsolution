import { Metadata } from "next";

import CurvedDivider from "@/components/CurvedDivider";
import GridTypewriter from "@/components/GridTypewriter";
import { ExtendedCapabilities } from "@/components/services/ExtendedCapabilities";
import FeatureCardsMasonry from "@/components/services/FeatureCardsMasonry";
import StickyScrollSection from "@/components/services/StickyScrollSection";

export const metadata: Metadata = {
  title: "Express HR Solution | Services",
  description: "Learn more about Express HR Solution.",
};

const warehouseData = [
  {
    title: "3PL Warehouse Management",
    image: "/images/services/01.png",
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
    image: "/images/services/02.png",
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
    image: "/images/services/03.png",
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
    image: "/images/services/04.png",
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
    image: "/videos/services/dark_store_graphics.gif",
  },
  {
    number: "03",
    title: "Project & Government Liaison",
    description:
      "Labour law compliance, government approvals, vendor governance.",
    image: "/videos/services/project-governance.mp4",
    isVideo: true
  },
  {
    number: "04",
    title: "End-to-End Operational Governance",
    description:
      "Audits, safety, compliance, site reporting, productivity measurements.",
    image: "/videos/services/end-to-end.mp4",
    isVideo: true
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
      <section className="h-[10rem] w-full bg-white"></section>

      <GridTypewriter textLines={heroContent.textLines} desc={""} />

      <StickyScrollSection items={warehouseData} />

      <CurvedDivider />

      <ExtendedCapabilities
        title="Extended Capabilities"
        items={extendedCapabilitiesItems}
      />

      <FeatureCardsMasonry
        items={[
          { id: '1', image: '/images/services/16000-workers-employed.png', title: '16,000+ Workers Empowered' },
          { id: '2', description: '98% Workforce Retention in Key Accounts' },
          {
            id: '3',
            image: '/images/services/100-satuatory-compliance.png',
            title: '100% Statutory Compliance',
          },
          { id: '4', description: '50+ Skill Development Initiatives' },
          {
            id: '5',
            image: '/images/services/ESG-and-safety-training-programs.png',
            title: 'ESG & Safety Training Programs',
          },
        ]}
      />

    </>
  );
}
