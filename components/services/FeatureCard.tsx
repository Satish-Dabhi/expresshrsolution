'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface FeatureCardItem {
    id: string;
    image?: string;
    title?: string;
    subtitle?: string;
    description?: string;
}

interface CardProps {
    item: FeatureCardItem;
    className?: string;
}

export function FeatureCard({ item, className }: CardProps) {
    const hasImage = Boolean(item.image);

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`relative rounded-2xl overflow-hidden ${hasImage ? '' : 'bg-[rgba(255,119,0,0.3)]'
                } ${className}`}
        >
            {/* Image */}
            {hasImage && (
                <Image
                    src={item.image!}
                    alt={item.title ?? 'feature'}
                    fill
                    className="object-cover"
                />
            )}

            {/* Bottom Gradient Overlay (image only) */}
            {hasImage && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            )}

            {/* Content */}
            {(item.title || item.description) && (
                <div className="absolute inset-0 p-5 flex flex-col justify-end z-10">
                    {item.title && (
                        <h3
                            className={`text-[20px] sm:text-[28px] md:text-[36px] font-semibold ${hasImage ? 'text-white' : 'text-gray-900'
                                }`}
                        >
                            {item.title}
                        </h3>
                    )}

                    {item.description && (
                        <p
                            className={`text-[16px] sm:text-[20px] md:text-[25px] font-semibold mt-1 ${hasImage ? 'text-gray-300' : 'text-gray-700'
                                }`}
                        >
                            {item.description}
                        </p>
                    )}
                </div>
            )}
        </motion.div>
    );
}
