import { Metadata } from "next";

import CurvedDivider from "@/components/CurvedDivider";
import GridTypewriter from "@/components/GridTypewriter";
import CoreValues from "@/components/about/CoreValues";
import SplitFeatureSection from "@/components/about/SplitFeatureSection";

export const metadata: Metadata = {
  title: "Express HR Solution | About Us",
  description: "Learn more about Express HR Solution.",
};

const heroContent = {
  textLines: ["Who We Are"],
  description: `Express HR provides workforce-powered operational execution with compliance and governance, ensuring seamless on-ground performance accross India's supply chain ecosystem.

Backed by 15+ years of experience, we blend people, process, and technology to run high-volume operational environments with precision.`,
};

const rahulData = {
  id: 1,
  name: "Rahul Das",
  role: "Director, Operations",
  description: () => (
    <>
      Rahul Das transforms vision into disciplined, large-scale execution on the ground. An Electrical Engineering graduate from Rose-Hulman Institute of Technology, USA.<br />
      He leads PAN-India workforce deployment, 3PL operations, and logistics execution with engineering precision. His focus is on process control, consistency, and scalability, ensuring reliable outcomes at every site.
    </>
  ),
  image: "/images/leaders/rahul-das.png",
};

const rohitData = {
  id: 1,
  name: "Rohit Gaikwad",
  role: "Business Head, HR Operations & Supply Chain",
  description: () => (
    <>
      Rohit Gaikwad brings over 15 years of leadership across retail, workforce operations, and supply chain execution, with deep expertise in ER–IR, compliance governance, and SOP-driven scale. A commerce graduate from the University of Mumbai, he has led large-format retail and enterprise operations for brands.<br />
      At Express HR Solutions, he anchors operational strategy, workforce governance, and execution discipline, ensuring stability and compliance at scale.
    </>
  ),
  image: "/images/leaders/rohit-gaikwad-4.jpeg",
  reverse: true,
};

const careerContent = {
  textLines: ["Careers"],
  subTitle: "Join The Workforce Behind India’s Supply Chains",
  description: `On-ground and corporate roles with training, compliance, and career growth.`,
  button: {
    label: "Join the team",
    href: "/careers",
  },
};

export default function AboutSection() {
  return (
    <>
      <section className="h-[10rem] w-full bg-white"></section>

      <GridTypewriter
        textLines={heroContent.textLines}
        desc={heroContent.description}
      />

      <SplitFeatureSection
        title="Mission"
        image="/images/about-mission-mask.png"
        description={
          <>
            Our mission is to build and operate{" "}
            <span className="font-bold text-orange-500">workforce driven execution systems</span>{" "}
            that enable enterprises to scale with stability and compliance. By assuming{" "}
            <span className="font-bold text-orange-500">end-to-end responsibility for on ground operations</span>
            , we institutionalise discipline across people, processes, and governance reducing operational risk while ensuring continuity, regulatory alignment, and consistent performance at scale.
          </>
        }
        reverse
      />

      <SplitFeatureSection
        title="Vision"
        description={
          <>
            Our vision is to play a defining role in{" "}
            <span className="font-bold text-orange-500">India’s next phase of operational maturity</span>. Through structured execution, skilled workforce integration, and accountable systems, we aim to establish a {" "}
            <span className="font-bold text-orange-500">national benchmark for on-ground operations</span> where compliance is embedded, outcomes are predictable, and execution strength supports long-term enterprise and economic growth.
          </>
        } image="/images/vision-about.png"
      />

      <CoreValues />

      <CurvedDivider />

      <SplitFeatureSection
        title={rahulData?.name}
        description={rahulData?.description()}
        subDescription={rahulData?.role}
        image={rahulData?.image}
      />

      <SplitFeatureSection
        title={rohitData?.name}
        description={rohitData?.description()}
        subDescription={rohitData?.role}
        image={rohitData?.image}
        reverse
      />

      <div className="mt-10 md:mt-30">
        <GridTypewriter
          textLines={careerContent.textLines}
          subTitle={careerContent.subTitle}
          desc={careerContent.description}
          button={careerContent.button}
        />
      </div>
    </>
  );
}
