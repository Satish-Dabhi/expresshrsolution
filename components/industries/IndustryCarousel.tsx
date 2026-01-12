'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface CardData {
    title: string;
    image: string;
    painPoints: string[];
    solutions: { label: string; description: string }[];
    outcome: string;
}

interface Props {
    cards: CardData[];
}

type AccordionKey = 'pain' | 'solutions' | 'outcome';

export default function IndustryCarousel({ cards }: Props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [openAccordion, setOpenAccordion] =
        useState<AccordionKey>('pain');

    const card = cards[activeIndex];

    return (
        <section className="mx-auto w-full max-w-[1400px] px-4 py-12">
            {/* MAIN */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                {/* LEFT – IMAGE / VIDEO */}
                <motion.div
                    key={card.image}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-2xl overflow-hidden bg-black"
                >
                    <video
                        src={card.image}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-[260px] md:h-[600px] object-cover"
                    />
                </motion.div>

                {/* RIGHT – CONTENT */}
                <div>
                    <motion.h2
                        key={card.title}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-[20px] sm:text-[28px] md:text-[36px] font-semibold mb-2"
                    >
                        {card.title}
                    </motion.h2>

                    <p className="text-gray-600 mb-6" style={{
                        fontFamily: "Instrument Sans",
                        fontSize: "clamp(18px, 1.6vw, 20px)",
                        lineHeight: "1.6",
                        maxWidth: "600px",
                    }}>
                        Our unwavering quality ensures you receive purity chemicals,
                        meeting your standards.
                    </p>

                    <Accordion
                        title="Pain Points"
                        isOpen={openAccordion === 'pain'}
                        onClick={() => setOpenAccordion('pain')}
                    >
                        <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
                            {card.painPoints.map((p, i) => (
                                <li key={i}
                                    style={{
                                        fontFamily: "Instrument Sans",
                                        fontWeight: 400,
                                        fontSize: "clamp(18px, 1.6vw, 20px)",
                                        lineHeight: "1.1",
                                    }}
                                >{p}</li>
                            ))}
                        </ul>
                    </Accordion>

                    <Accordion
                        title="Our Solutions"
                        isOpen={openAccordion === 'solutions'}
                        onClick={() => setOpenAccordion('solutions')}
                    >
                        <ul className="space-y-2 text-sm">
                            {card.solutions.map((s, i) => (
                                <li key={i}
                                    style={{
                                        fontFamily: "Instrument Sans",
                                        fontWeight: 400,
                                        fontSize: "clamp(18px, 1.6vw, 20px)",
                                        lineHeight: "1.3",
                                    }}
                                >
                                    <span className="font-semibold">{s.label}: </span>
                                    <span className="text-gray-600">{s.description}</span>
                                </li>
                            ))}
                        </ul>
                    </Accordion>

                    <Accordion
                        title="Outcome"
                        isOpen={openAccordion === 'outcome'}
                        onClick={() => setOpenAccordion('outcome')}
                    >
                        <p className="text-gray-600" style={{
                            fontFamily: "Instrument Sans",
                            fontSize: "clamp(18px, 1.6vw, 20px)",
                            lineHeight: "1.6",
                            maxWidth: "600px",
                        }}>{card.outcome}</p>
                    </Accordion>
                </div>
            </div>

            {/* DOTS */}
            <div className="flex justify-center mt-10 gap-2">
                {cards.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => {
                            setActiveIndex(i);
                            setOpenAccordion('pain');
                        }}
                        className="h-2 rounded-full transition-all"
                        style={{
                            width: i === activeIndex ? '32px' : '8px',
                            backgroundColor:
                                i === activeIndex
                                    ? 'var(--bright-orange)'
                                    : 'color-mix(in srgb, var(--bright-orange) 30%, transparent)',
                        }}
                    />
                ))}
            </div>

        </section>
    );
}

/* ---------------- ACCORDION ---------------- */

function Accordion({
    title,
    isOpen,
    onClick,
    children,
}: {
    title: string;
    isOpen: boolean;
    onClick: () => void;
    children: React.ReactNode;
}) {
    return (
        <div className="border-t border-gray-200 py-4">
            <button
                onClick={onClick}
                className="flex w-full items-center justify-between text-left"
            >
                <h3 className="text-[25px] font-semibold">{title}</h3>
                <span className="text-[25px]">{isOpen ? '−' : '+'}</span>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-3"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
