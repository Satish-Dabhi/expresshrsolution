"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Client {
  name: string;
  logo: string;
  website?: string;
}

interface Props {
  clients: Client[];
}

export default function ClientLogos({ clients }: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
      }}
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
    >
      {clients.map((client, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 30, scale: 0.95 },
            visible: { opacity: 1, y: 0, scale: 1 },
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.08 }}
          className="group cursor-pointer flex items-center justify-center p-4 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all"
        >
          {client.website ? (
            <a
              href={client.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${client.name} website`}
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={120}
                height={60}
                className="object-contain max-h-16 mx-auto transition-transform group-hover:scale-105"
              />
            </a>
          ) : (
            <Image
              src={client.logo}
              alt={client.name}
              width={120}
              height={60}
              className="object-contain max-h-16 mx-auto opacity-90 transition-opacity duration-300"
            />
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}
