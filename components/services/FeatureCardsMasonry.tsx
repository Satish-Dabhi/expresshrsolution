'use client';

import { FeatureCard } from "./FeatureCard";

interface FeatureCardItem {
  id: string;
  image?: string;
  title?: string;
  subtitle?: string;
  description?: string;
}

interface Props {
  items: FeatureCardItem[]; // MUST be 5 items
}

export default function FeatureCardsMasonry({ items }: Props) {
  if (items.length !== 5) {
    console.warn('FeatureCardsMasonry expects exactly 5 items');
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[800px] mx-auto w-full max-w-[1400px] px-6 md:px-0 py-24 md:py-20">
      {/* Column 1 */}
      <div className="flex flex-col gap-6 h-full">
        <FeatureCard item={items[0]} className="h-[65vh] lg:h-[70%]" />
        <FeatureCard item={items[1]} className="h-[35vh] lg:h-[30%]" />
      </div>

      {/* Column 2 */}
      <div className="h-[70vh] lg:h-full">
        <FeatureCard item={items[2]} className="h-full" />
      </div>

      {/* Column 3 */}
      <div className="flex flex-col gap-6 h-full">
        <FeatureCard item={items[3]} className="h-[35vh] lg:h-[30%]" />
        <FeatureCard item={items[4]} className="h-[65vh] lg:h-[70%]" />
      </div>
    </div>
  );
}
