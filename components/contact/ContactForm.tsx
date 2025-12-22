"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ContactField from "./ContactField";

type Props = {
  title: string;
  secondFieldLabel: string;
};

export default function ContactForm({ title, secondFieldLabel }: Props) {
  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <p className="text-orange-500 font-medium text-[20px]">{title}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ContactField label="Name" name="name" />
        <ContactField label="Email" name="email" type="email" />
        <ContactField label="Company" name="company" />
        <ContactField label={secondFieldLabel} name="interest" />
      </div>

      <ContactField label="Message" name="message" textarea />

      {/* Orange Submit Button */}
      <Button
        type="submit"
        className="bg-orange-500 hover:bg-orange-600 text-white rounded-none px-10"
      >
        Submit
      </Button>
    </motion.form>
  );
}
