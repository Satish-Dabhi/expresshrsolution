"use client";

import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import ContactField from "./ContactField";
import { toast } from "sonner";

const SERVICE_ID = "service_zau93j5";
const TEMPLATE_ID = "template_zbejmdo";
const PUBLIC_KEY = "6kGDlJChpjYuS0eJf";

export function CareerForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    try {
      emailjs
        .sendForm(SERVICE_ID!, TEMPLATE_ID!, formRef.current, PUBLIC_KEY!)
        .then(
          () => {
            toast.success("Application submitted successfully!");
            formRef.current?.reset();
          },
          (error) => {
            console.error(error);
            toast.error("Failed to submit application. Please try again.");
          }
        )
        .finally(() => setLoading(false));
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <p className="text-orange-500 font-medium text-[20px] md:text-[24px]">
        Get in touch with us for Career Opportunities
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ContactField label="Full Name" name="fullName" />
        <ContactField label="Email" name="email" type="email" />
        <ContactField label="Phone Number" name="phone" />
        <ContactField label="Role Interested In" name="position" />
        <ContactField label="City" name="city" />
      </div>

      <ContactField label="Message" name="message" textarea />

      <Button
        type="submit"
        disabled={loading}
        className="bg-orange-500 hover:bg-orange-600 text-white rounded-none px-10 disabled:opacity-60"
      >
        {loading ? "Submitting..." : "Submit"}
      </Button>
    </motion.form>
  );
}
