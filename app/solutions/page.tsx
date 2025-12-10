"use client";

import { motion, Variants, easeOut } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Building2, 
  Factory, 
  Stethoscope, 
  GraduationCap 
} from "lucide-react";
import ParallaxHero from "@/components/ParallaxHero";

export default function SolutionsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  const solutions = [
    {
      icon: Building2,
      title: "Recruitment",
      description: "We provide the best recruitment solutions for your business.",
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      icon: Factory,
      title: "Temporary Staffing",
      description: "We provide temporary staffing solutions to meet your business needs.",
      color: "text-pumpkin-orange",
      bg: "bg-pumpkin-orange/10",
    },
    {
      icon: Stethoscope,
      title: "Labour Law Compliance",
      description: "We ensure that your business is compliant with all the labour laws.",
      color: "text-aqua-green",
      bg: "bg-aqua-green/10",
    },
    {
      icon: GraduationCap,
      title: "Payroll Management",
      description: "We provide the best payroll management solutions for your business.",
      color: "text-bright-orange",
      bg: "bg-bright-orange/10",
    },
  ];

  return (
    <>
      <ParallaxHero
        title="Our Solutions"
        backgroundImage="/images/hero-img.webp"
      />
      <section id="solutions" className="py-20 bg-background text-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="max-w-6xl mx-auto"
          >
            {/* Solutions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 250 }}
              >
                <Card className="h-full border border-border bg-card rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${solution.bg}`}>
                      <solution.icon className={`h-8 w-8 ${solution.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground">{solution.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
}
