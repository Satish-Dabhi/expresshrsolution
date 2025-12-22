"use client";

import Image from "next/image";

export type CapabilityItem = {
  number: string;
  title: string;
  description: string;
  list?: string[];
  outcome?: string;
  image: string;
};

export function ExtendedCapabilities({
  title,
  items,
}: {
  title: string;
  items: CapabilityItem[];
}) {
  return (
    <section className="mx-auto w-full max-w-[1400px] px-4 py-12">
      <div className="lg:flex lg:gap-16">
        {/* Left Sticky Title */}
        <div className="hidden lg:block lg:w-2/5 sticky top-24 self-start">
          <h2 className="text-[32px] md:text-[48px] lg:text-[64px] font-semibold pr-4 pt-20">
            {title}
          </h2>
        </div>

        {/* Right scrollable content */}
        <div className="lg:w-3/5">
          {items.map((item, i) => (
            <div key={i} className="mb-16">
              <div className="mb-4 w-3/4">
                <p className="text-4xl font-semibold">{item.number}</p>
                <h3 className="text-4xl font-semibold mb-2">{item.title}</h3>
                <p className="text-[20px] mb-2">{item.description}</p>

                {item.list && (
                  <ul className="list-disc pl-5 mb-2 space-y-1">
                    {item.list.map((li, idx) => (
                      <li key={idx}>{li}</li>
                    ))}
                  </ul>
                )}

                {item.outcome && (
                  <p className="text-[24px] text-[#AFAFAF] font-semibold">{item.outcome}</p>
                )}
              </div>

              {/* Image */}
              <div className="relative w-full h-[340px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile title at top */}
      <div className="lg:hidden mb-8">
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
    </section>
  );
}
