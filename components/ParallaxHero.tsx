"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ParallaxHeroProps {
  title: string;
  backgroundImage: string;
}

const ParallaxHero: React.FC<ParallaxHeroProps> = ({ title, backgroundImage }) => {
  const pathname = usePathname();

  // Split pathname and filter out empty strings
  const pathSegments = pathname ? pathname.split("/").filter(Boolean) : [];

  // Helper to convert segment slug to readable text, e.g. 'about-us' => 'About Us'
  const formatSegment = (segment: string) =>
    segment
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

  // Build breadcrumb items with hrefs
  const breadcrumbs = pathSegments.map((segment, index) => {
    return {
      name: formatSegment(segment),
      href: "/" + pathSegments.slice(0, index + 1).join("/"),
    };
  });

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "600px",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-50"></div>

      {/* Centered content */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-4">
        <div className="text-center text-white max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">{title}</h1>
          <div className="mt-4 text-base sm:text-lg flex justify-center flex-wrap gap-1">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            {breadcrumbs.length > 0 &&
              breadcrumbs.map((crumb, idx) => (
                <React.Fragment key={crumb.href}>
                  <span className="mx-2">/</span>
                  {/* If last item, just plain text */}
                  {idx === breadcrumbs.length - 1 ? (
                    <span>{crumb.name}</span>
                  ) : (
                    <Link href={crumb.href} className="hover:underline">
                      {crumb.name}
                    </Link>
                  )}
                </React.Fragment>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxHero;
