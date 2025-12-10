"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const contactInfo = [
    {
        icon: MapPin,
        title: "Address",
        details:
            "17/A, Arenja Arcade, Sector 17, Vashi, Navi Mumbai-400705",
    },
    {
        icon: Phone,
        title: "Phone",
        details: "022-27898875",
    },
    {
        icon: Mail,
        title: "Email",
        details: "gawade@thepragatigroup.com",
    },

];

export default function ContactInfo() {
    return (
        <div className="space-y-8">
            {contactInfo.map((info, index) => (
                <motion.div
                    key={index}
                    className="flex items-start space-x-5"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 250 }}
                >
                    <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                            <info.icon className="h-6 w-6 text-primary" />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-1">{info.title}</h4>
                        <p className="text-muted-foreground font-medium">{info.details}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
