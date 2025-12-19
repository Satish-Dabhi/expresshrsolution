import { Metadata } from "next";

import CurvedDivider from "@/components/CurvedDivider";
import GridTypewriter from "@/components/GridTypewriter";
import StatementSection from "@/components/home/StatementSection";
import ScrollCards from "@/components/industries/ScrollCards";

export const metadata: Metadata = {
  title: "Express HR Solution | Industries",
  description: "Learn more about Express HR Solution.",
};

const heroContent = {
  textLines: ["Where We Deliver Impact"],
  description: "",
};

export default function AboutSection() {
  return (
    <>
      <section className="h-[5rem] w-full bg-white"></section>

      <GridTypewriter
        textLines={heroContent.textLines}
        desc={heroContent.description}
      />

      <section className="flex items-center justify-center w-full max-w-[1400px] py-20 mx-auto">
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

      <ScrollCards />

      <CurvedDivider />

      <StatementSection
        title={`Why This \nMatters`}
        description="Express HR does not sell manpower. We solve execution failures that impact revenue, compliance, and brand reputation—with disciplined operations and on-ground control."
      />
    </>
  );
}
