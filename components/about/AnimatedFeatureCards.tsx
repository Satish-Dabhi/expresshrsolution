"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, TrendingUp, Trophy, Users } from "lucide-react";

const features = [
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "Maximizing Customer Lifetime Value:",
    desc: "We understand that customers are the lifeblood of any business. Our strategies foster strong, lasting relationships to maximize retention and lifetime value.",
  },
  {
    icon: <Trophy className="w-10 h-10 text-pumpkin-orange" />,
    title: "Boosting Competitive Advantage:",
    desc: "In today’s fast-paced world, staying ahead is vital. We arm you with tools and strategies to outperform your competition consistently.",
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-aqua-green" />,
    title: "Driving Productivity:",
    desc: "From streamlining operations to smart automation, our productivity-driven approach ensures efficient results at every level.",
  },
  {
    icon: <Rocket className="w-10 h-10 text-bright-orange" />,
    title: "Stimulating Growth:",
    desc: "Growth is intentional. We help you plan and execute expansion strategies that are scalable and sustainable.",
  },
];

export default function AnimatedFeatureCards() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.2, delayChildren: 0.3 },
        },
      }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10"
    >
      {features.map((feature, idx) => (
        <motion.div
          key={idx}
          variants={{
            hidden: { opacity: 0, y: 50, scale: 0.95 },
            visible: { opacity: 1, y: 0, scale: 1 },
          }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="h-full flex"
        >
          <Card className="flex flex-col h-full w-full p-6 rounded-2xl shadow-md bg-white border border-gray-200 hover:shadow-xl transition-shadow">
            <CardContent className="flex flex-col flex-1 items-center text-center">
              <div className="mb-4">{feature.icon}</div>
              <h4 className="text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {feature.desc}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
