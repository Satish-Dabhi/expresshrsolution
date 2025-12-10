import React from "react";

interface SectionDividerProps {
  color?: string; // Tailwind color class or hex
  width?: string; // Tailwind width class or custom
  className?: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({
  color = "bg-[#c27b7f]/40",
  width = "w-48", // ~200px
  className = "",
}) => {
  return (
    <div
      className={`relative ${width} h-[1px] ${color} mx-auto my-8 ${className}`}
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="250"
    >
      {/* Left triangle */}
      <span
        className={`absolute top-1/2 -translate-y-1/2 left-[50%] w-[18px] h-[18px] ${color} rotate-45`}
      ></span>

      {/* Right triangle */}
      <span
        className={`absolute top-1/2 -translate-y-1/2 right-[50%] w-[18px] h-[18px] ${color} rotate-45`}
      ></span>
    </div>
  );
};

export default SectionDivider;
