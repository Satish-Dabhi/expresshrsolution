"use client";

import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import ContactField from "./ContactField";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    try {
      // Optional: log form values
      const formData = new FormData(formRef.current);
      console.log(Object.fromEntries(formData.entries()));

      await emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          formRef.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        )
        .then(
          () => {
            alert("Application submitted successfully!");
            formRef.current?.reset();
          },
          (error) => {
            console.error(error);
            alert("Failed to submit application. Please try again.");
          }
        )
        .finally(() => setLoading(false));
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again.");
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
      <p className="text-orange-500 font-medium text-[20px]">
        Get in touch with us for any Business enquiries and questions
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ContactField label="Name" name="name" />
        <ContactField label="Email" name="email" type="email" />
        <ContactField label="Company" name="company" />
        <ContactField label="Services Interested In" name="interest" />
      </div>

      <ContactField label="Message" name="message" textarea />

      <Button
        type="submit"
        disabled={loading}
        className="bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white rounded-none px-10"
      >
        {loading ? "Sending..." : "Submit"}
      </Button>
    </motion.form>
  );
}
