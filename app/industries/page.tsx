import { Metadata } from "next";

import CurvedDivider from "@/components/CurvedDivider";
import GridTypewriter from "@/components/GridTypewriter";
import StatementSection from "@/components/home/StatementSection";
import ScrollCards from "@/components/industries/ScrollCards";
import IndustryCarousel from "@/components/industries/IndustryCarousel";

export const metadata: Metadata = {
  title: "Express HR Solution | Industries",
  description: "Learn more about Express HR Solution.",
};

const heroContent = {
  textLines: ["Where We Deliver Impact"],
  description: "",
};

interface CardData {
  title: string;
  image: string;
  painPoints: string[];
  solutions: {
    label: string;
    description: string;
  }[];
  outcome: string;
}

/* ---------------- DATA ---------------- */

const cards: CardData[] = [
  {
    title: "FMCG & Food",
    image: "/videos/industries/FMCH_and_Food.mp4",
    painPoints: [
      "Expired or near-expiry stock reaching market",
      "Missed delivery timelines impacting distribution confidence",
      "Poor inventory visibility across high-volume SKUs",
      "FIFO failures at warehouse and dispatch level",
    ],
    solutions: [
      {
        label: "Expiry Control Audits",
        description:
          "Mandatory expiry checks at inbound, storage, and dispatch stages to ensure expired material is never delivered.",
      },
      {
        label: "Operational Discipline",
        description:
          "Structured shift planning and dispatch readiness to ensure consistent on-time deliveries.",
      },
      {
        label: "Inventory Lifecycle Audits",
        description:
          "Regular stock ageing and movement audits to maintain full inventory lifecycle control.",
      },
      {
        label: "Strategic FIFO Staging",
        description:
          "Dedicated FIFO and Best-before-Date zones for accurate material rotation and freshness compliance.",
      },
    ],
    outcome:
      "Reduced expiry losses, higher fill rates, and predictable store replenishment.",
  },
  {
    title: "Retail & Lifestyle",
    image: "/videos/industries/Retail_and_lifestyle.mp4",
    painPoints: [
      "High manpower attrition across stores and malls",
      "Inconsistent service quality impacting brand experience",
      "Delayed issue resolution at store level",
    ],
    solutions: [
      {
        label: "Targeted Hiring Models",
        description:
          "Manpower sourcing through local networks and social platforms to ensure faster, location-fit hiring.",
      },
      {
        label: "Manpower Sustainability Programs",
        description:
          "Recognition & rewards (R&R), engagement activities, and structured celebrations to improve retention.",
      },
      {
        label: "Real-Time Issue Resolution",
        description:
          "Defined escalation matrices and rapid response protocols for store-level manpower issues.",
      },
    ],
    outcome:
      "Stable staffing, improved in-store experience, and higher customer satisfaction.",
  },
  {
    title: "E-Commerce & Q-Commerce",
    image: "/videos/industries/E_commerce_and_q_commerce.mp4",
    painPoints: [
      "Stock unavailable due to poor assortment planning",
      "Over-commitment on delivery timelines without rider availability",
      "Product quality issues due to handling and packaging lapses",
    ],
    solutions: [
      {
        label: "Area-wise Assorted Mapping",
        description:
          "Inventory planning based on location-specific demand patterns to reduce stock-outs.",
      },
      {
        label: "Commitment-Based Delivery Planning",
        description:
          "Delivery promises aligned strictly with available workforce strength to avoid service failures.",
      },
      {
        label: "Quality Control at Source",
        description:
          "Material quality checks and neat, clean packaging standards before dispatch.",
      },
    ],
    outcome:
      "Higher order fulfilment, fewer cancellations, and consistent delivery performance.",
  },
  {
    title: "Pharma & Healthcare",
    image: "/videos/industries/Pharma_and_healthcare.mp4",
    painPoints: [
      "Risk of contamination or handling errors",
      "Strict compliance and document requirements",
      "Zero tolerance for delivery delays",
    ],
    solutions: [
      {
        label: "Trained & Controlled Workforce",
        description:
          "Dedicated teams trained for pharma-grade handling protocols.",
      },
      {
        label: "Process-Led Operations",
        description:
          "Clear SOPs for material movement, hygiene and documentation.",
      },
      {
        label: "Time-Critical Execution",
        description:
          "Shift planning and dispatch controls to meet strict delivery timelines.",
      },
    ],
    outcome:
      "Safe handling, audit-ready operations, and uninterrupted healthcare supply chains.",
  },
  {
    title: "Manufacturing & Packaging",
    image: "/videos/industries/Manufacturing_and_packaging.mp4",
    painPoints: [
      "Unavailability of skilled manpower during peak cycles",
      "Production delays due to raw material mismanagement",
    ],
    solutions: [
      {
        label: "Skilled Workforce Pooling/migrants",
        description:
          "Ready to deploy trained manpower for production, packing, and material handling.",
      },
      {
        label: "Inbound Material Coordination",
        description:
          "Structured unloading, staging, and internal movement to keep production lines uninterrupted.",
      },
    ],
    outcome:
      "Higher line efficiency, reduces downtime, and predictable production flow.",
  },
  {
    title: "Port, Rail & Industrial Infrastructure",
    image: "/videos/industries/Port_rail_and_Industrial.mp4",
    painPoints: [
      "Delays in rake unloading impacting downstream supply chains",
      "Safety risk in high-volume industrial environments",
      "Coordination challenges across multiple stakeholders",
    ],
    solutions: [
      {
        label: "Bulk & Rake Handling Expertise",
        description:
          "Experienced teams for high-volume train unloading and industrial material movement.",
      },
      {
        label: "Safety-First Execution",
        description:
          "PPE enforcement, site supervision, and shift-wise control.",
      },
      {
        label: "On-Ground Coordination",
        description:
          "Structured workforce deployment aligned with site timelines and operational plans.",
      },
    ],
    outcome:
      "Faster turnaround times, safer sites, and smooth industrial operations.",
  },
];

export default function AboutSection() {
  return (
    <>
      <section className="h-[5rem] w-full bg-white"></section>

      <GridTypewriter
        textLines={heroContent.textLines}
        desc={heroContent.description}
      />

      <section className="flex items-center justify-center w-full max-w-[1400px] py-10 md:py-15 mx-auto">
        <h2
          className="
      font-semibold leading-none
      text-[64px] max-[1199px]:text-[48px]
      text-center
    "
        >
          Industries served
        </h2>
      </section>

      <IndustryCarousel cards={cards} />

      {/* <ScrollCards /> */}

      <CurvedDivider />

      <StatementSection
        title={`Why This \nMatters`}
        description="Express HR does not sell manpower. We solve execution failures that impact revenue, compliance, and brand reputation—with disciplined operations and on-ground control."
      />
    </>
  );
}
