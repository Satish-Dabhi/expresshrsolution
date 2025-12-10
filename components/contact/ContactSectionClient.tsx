"use client";

import dynamic from "next/dynamic";

const ContactInfo = dynamic(() => import("@/components/contact/ContactInfo"), { ssr: false });
const ContactForm = dynamic(() => import("@/components/contact/ContactForm"), { ssr: false });

export default function ContactSectionClient() {
  return (
    <>
      <ContactForm />

      <ContactInfo />
    </>
  );
}
