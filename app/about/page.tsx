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
  description: `Express HR Solutions is a workforce-powered operations company that delivers structured execution, compliant governance, and seamless on-ground performance across India’s supply chain ecosystem.

Backed by 15+ years of experience and our legacy, we blend people, process, and technology to run high-volume operational environments with precision.`,
};

const leaders: Leader[] = [
  {
    id: 1,
    name: "Rahul Das",
    role: "Director (Operations)",
    description:
      "Driving large-scale execution, warehouse performance, & workforce systems.",
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
    href: "/contact-us",
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
        description="To empower business with reliable, trained, and compliant workforce-powered operational system that scale."
        image="/images/about-mission.png"
      />

      <SplitFeatureSection
        title="Vision"
        description="To lead India’s transformation in on-ground execution — where skilled people and disciplined processes create predictable outcomes."
        image="/images/about-vision.png"
        reverse
      />

      <CoreValues />

      <CurvedDivider />

      <LeadershipSection leaders={leaders} />

      <div className="mt-30">
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
