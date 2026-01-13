"use client";

import Image from "next/image";

export type CapabilityItem = {
  number: string;
  title: string;
  description: string;
  list?: string[];
  outcome?: string;
  image: string;
  isVideo?: boolean;
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
        <div className="hidden lg:block lg:w-2/5 sticky top-[22%] self-start">
          <h2 className="text-[32px] md:text-[48px] lg:text-[64px] font-semibold pr-4 mb-16" style={{ lineHeight: '64px' }}>
            {title}
          </h2>
        </div>

        {/* Mobile title at top */}
        <div className="lg:hidden mb-8">
          <h2 className="text-[32px] md:text-[48px] lg:text-[64px] font-bold">{title}</h2>
        </div>

        {/* Right scrollable content */}
        <div className="lg:w-3/5">
          {items.map((item, i) => (
            <div key={i} className="mb-16">
              <div className="mb-4 w-full md:w-3/4">
                <p className=" text-[20px] sm:text-[28px] md:text-[36px] font-semibold">{item.number}</p>
                <h3 className=" text-[20px] sm:text-[28px] md:text-[36px] font-semibold mb-2">{item.title}</h3>
                <p className="text-[16px] md:text-[20px] mb-2">{item.description}</p>

                {item.list && (
                  <ul className="list-disc pl-5 mb-2 space-y-1">
                    {item.list.map((li, idx) => (
                      <li key={idx}
                        style={{
                          fontFamily: "Instrument Sans",
                          fontWeight: 400,
                          fontSize: "clamp(16px, 1.6vw, 20px)",
                          lineHeight: "1.1",
                        }}
                      >{li}</li>
                    ))}
                  </ul>
                )}

                {item.outcome && (
                  <p className="text-[24px] text-[#AFAFAF] font-semibold">{item.outcome}</p>
                )}
              </div>

              {/* Image */}
              {/* Media */}
              <div className="relative w-full h-[340px] overflow-hidden mt-8 rounded-[12px]">
                {item.isVideo ? (
                  <video
                    src={item.image}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                )}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
