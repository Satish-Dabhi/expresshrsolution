"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ContactField from "./ContactField";

export function CareerForm() {
  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <p className="text-orange-500 font-medium text-[20px]">
        Get in touch with us for Career Opportunities
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ContactField label="Full Name" name="name" />
        <ContactField label="Email" name="email" type="email" />
        <ContactField label="Phone Number" name="phone" />
        <ContactField label="Role Interested In" name="position" />
        {/* CV Upload Field */}
        <ContactField label="Attach CV" name="cv" type="file" />
      </div>

      <ContactField label="Message" name="message" textarea />

      <Button
        type="submit"
        className="bg-orange-500 hover:bg-orange-600 text-white rounded-none px-10"
      >
        Submit
      </Button>
    </motion.form>
  );
}
