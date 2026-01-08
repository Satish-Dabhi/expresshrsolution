import { Metadata } from "next";

import GridTypewriter from "@/components/GridTypewriter";
import SplitFeatureSection from "@/components/about/SplitFeatureSection";
import CoreValues from "@/components/about/CoreValues";
import CurvedDivider from "@/components/CurvedDivider";
import LeadershipSection from "@/components/about/LeadershipSection";

interface Leader {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
}

export const metadata: Metadata = {
  title: "Express HR Solution | About Us",
  description: "Learn more about Express HR Solution.",
};

const heroContent = {
  textLines: ["Who We Are"],
  description: `Express HR provides workforce-powered operational execution with compliance and governance, ensuring seamless on-ground performance accross India's supply chain ecosystem.

Backed by 15+ years of experience, we blend people, process, and technology to run high-volume operational environments with precision.`,
};

const leaders: Leader[] = [
  {
    id: 1,
    name: "Rahul Das",
    role: "Director, Operations",
    description:
      "Rahul Das transforms vision into disciplined, large-scale execution on the ground. An Electrical Engineering graduate from Rose-Hulman Institute of Technology, USA. He leads PAN-India workforce deployment, 3PL operations, and logistics execution with engineering precision. His focus is on process control, consistency, and scalability, ensuring reliable outcomes at every site.",
    image: "/images/leaders/rahul-das.png",
  },
  // {
  //   id: 2,
  //   name: "Mamta Das",
  //   role: "Founder & Chairperson",
  //   description:
  //     "Pioneering woman leader driving India’s workforce empowerment and governance excellence",
  //   image: "/images/leaders/mamta-das.png",
  // },
  // {
  //   id: 3,
  //   name: "Rishikant Shinde",
  //   role: "Governance Advisor",
  //   description:
  //     "Expert in labour compliance, Mathadi, industrial relations & welfare.",
  //   image: "/images/leaders/rishikant-shinde.png",
  // },
];

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
        description="To empower businesses with reliable and compliant workforce-driven operational system that scale."
        image="/images/mission-left.png"
        // topDecoration="/images/logos/right.svg"
      />

      <SplitFeatureSection
        title="Vision"
        description="To lead India’s transformation in on-ground execution — where skilled people and disciplined processes create predictable outcomes."
        image="/images/vision-right.png"
        // topDecoration="/images/logos/left.svg"
        reverse
      />

      <CoreValues />

      <CurvedDivider />

      <LeadershipSection leaders={leaders} />

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
