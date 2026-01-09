"use client";

import { motion } from "framer-motion";
import { Building2, Mail, Phone } from "lucide-react";

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-10 text-sm text-left lg:ml-auto pt-0 md:pt-[115px]"
    >
      {/* Office */}
      <div>
        <div className="flex items-center gap-3">
          <Building2 className="text-[#A8A8A8]" size={26} />
          <p className="uppercase text-[20px] md:text-[24px] font-semibold text-[#A8A8A8]">
            Office
          </p>
        </div>
        <p className="text-[16px] md:text-[20px] mt-2 font-medium">
          Express HR Solutions Pvt. Ltd
          <br />
          3A, ARENJA ARCADE, SECTOR 17,
          <br />
          VASHI, Thane, Maharashtra, 400705
        </p>
      </div>

      {/* Email */}
      <div>
        <div className="flex items-center gap-3">
          <Mail className="text-[#A8A8A8]" size={26} />
          <p className="uppercase  text-[20px] md:text-[24px] font-semibold text-[#A8A8A8]">
            Email
          </p>
        </div>
        <p className="text-[16px] md:text-[20px] mt-2 font-medium">
          info@expresshrsolutions.com
        </p>
      </div>

      {/* Phone */}
      <div>
        <div className="flex items-center gap-3">
          <Phone className="text-[#A8A8A8]" size={26} />
          <p className="uppercase  text-[20px] md:text-[24px] font-semibold text-[#A8A8A8]">
            Phone
          </p>
        </div>
        <p className="text-[16px] md:text-[20px] mt-2 font-medium">
          +91 99673 26161
        </p>
      </div>
    </motion.div>
  );
}
