"use client";

import { motion } from "framer-motion";

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
        space-y-10 
        text-sm 
        text-left 
        lg:text-right 
        lg:ml-auto
      "
    >
      <div>
        <p className="uppercase text-[24px] font-semibold text-[#A8A8A8]">
          Office
        </p>
        <p className="text-[20px] mt-2 font-medium">
          Express HR Solutions Pvt. Ltd
          <br />
          3A, ARENJA ARCADE, SECTOR 17,
          <br />
          VASHI, Thane, Maharashtra, 400705
        </p>
      </div>

      <div>
        <p className="uppercase text-[24px] font-semibold text-[#A8A8A8]">
          Email
        </p>
        <p className="text-[20px] mt-2 font-medium">
          info@expresshrsolutions.com
        </p>
      </div>

      <div>
        <p className="uppercase text-[24px] font-semibold text-[#A8A8A8]">
          Phone
        </p>
        <p className="text-[20px] mt-2 font-medium">+91 99673 26161</p>
      </div>
    </motion.div>
  );
}
