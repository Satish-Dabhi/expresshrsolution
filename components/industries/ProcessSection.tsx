'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

export interface StepItem {
    number: string;
    title: string;
    description: string;
}

interface ProcessSectionProps {
    steps: StepItem[];
    heading: React.ReactNode;
    subHeading?: string;
    footerText?: string;
}

export default function ProcessSection({
    steps,
    heading,
    subHeading = 'Structured Execution. Predictable Outcomes.',
    footerText = 'Start an execution-ready workforce partnership with Express HR',
}: ProcessSectionProps) {
    return (
        <section className="relative w-full bg-white px-6 py-20 text-black">
            <div className="mx-auto w-full max-w-[1400px]">
                {/* Header */}
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="mb-2 uppercase" style={{
                            fontFamily: "Instrument Sans",
                            fontWeight: 600,
                            fontSize: "24px",
                            lineHeight: "1.3",
                            color: "#AFAFAF",
                        }}>
                            {subHeading}
                        </p>
                        <h2 className="font-[Instrument Sans] font-semibold text-[32px] md:text-[48px] leading-[1.1] text-black">
                            {heading}
                        </h2>
                    </div>

                    {/* Right line */}
                    <div className="hidden h-px w-64 bg-gray-300 md:block" />
                </div>

                {/* Steps */}
                <div className="mt-8 md:mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex h-full flex-col justify-between rounded-2xl bg-gray-100 p-6 transition hover:shadow-md"
                        >
                            <div>
                                <span className="font-semibold text-orange-500" style={{
                                    fontFamily: "Instrument Sans",
                                    fontSize: "clamp(18px, 1.6vw, 20px)",
                                }}>
                                    {step.number}.
                                </span>
                                <h3 className="font-semibold text-black" style={{
                                    fontFamily: "Instrument Sans",
                                    fontSize: "clamp(18px, 1.6vw, 20px)",
                                    lineHeight: "1.6",
                                }}>
                                    {step.title}
                                </h3>
                            </div>

                            <p
                                className="text-gray-600 mt-8 text-[13px] md:text-[16px]"
                                style={{
                                    fontFamily: "Instrument Sans",
                                }}
                            >
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-16 flex flex-col items-center justify-between gap-6 rounded-2xl bg-gray-100 px-6 py-6 md:flex-row"
                >
                    <p className="text-sm text-gray-600">{footerText}</p>

                    <Link
                        href="/contact"
                        className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-orange-500"
                    >
                        Contact Us
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
