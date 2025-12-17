"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface NavLink {
  name: string;
  href: string;
  subLinks?: {
    name: string;
    href: string;
  }[];
}

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopSubmenuOpen, setDesktopSubmenuOpen] = useState<string | null>(
    null
  );
  const [mobileSubmenusOpen, setMobileSubmenusOpen] = useState<
    Record<string, boolean>
  >({});

  const pathname = usePathname();
  const submenuRef = useRef<HTMLUListElement | null>(null);

  const navLinks: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    {
      name: "Services",
      href: "/services",
      // subLinks: [
      //   { name: "Bulk Cargo Movement", href: "/services/bulk-cargo-movement" },
      //   { name: "Government Liaising", href: "/services/government-liaising" },
      //   {
      //     name: "Warehouse Management",
      //     href: "/services/warehouse-management",
      //   },
      //   { name: "Transportation", href: "/services/transportation" },
      // ],
    },
    { name: "Industries", href: "/our-clients" },
    { name: "Contact Us", href: "/contact-us" },
    { name: "Impact", href: "/blog" },
  ];

  // Toggle mobile submenu open/close by name
  const toggleMobileSubmenu = (name: string) => {
    setMobileSubmenusOpen((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  // Toggle desktop submenu open/close by name
  const toggleDesktopSubmenu = (name: string) => {
    setDesktopSubmenuOpen((prev) => (prev === name ? null : name));
  };

  // Close desktop submenu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // If click is outside submenu and not on toggle icon, close submenu
      if (
        submenuRef.current &&
        !submenuRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest(".submenu-toggle-icon")
      ) {
        setDesktopSubmenuOpen(null);
      }
    }
    if (desktopSubmenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [desktopSubmenuOpen]);

  return (
    <nav
      className="
    fixed left-1/2 -translate-x-1/2 z-50
    mt-20 w-[70%] py-4
    transition-all duration-300
    bg-[rgba(75,75,75,0.5)]
    border border-white/10
    rounded-2xl
  "
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 text-white font-semibold">
          <Image
            src="/images/logos/express-hr-logo.png"
            alt="Brand Logo"
            width={150}
            height={150}
            priority
            className="drop-shadow-2xl"
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-10 font-medium text-white">
          {navLinks.map((link) => (
            <li key={link.name} className={link.subLinks ? "relative" : ""}>
              {link.subLinks ? (
                <>
                  <div className="flex items-center space-x-1">
                    {/* Link text - navigates */}
                    <Link
                      href={link.href}
                      className={`transition-all duration-300 transform ${
                        pathname.startsWith(link.href)
                          ? "text-primary scale-110 -translate-y-0.5"
                          : "hover:text-primary"
                      }`}
                    >
                      {link.name}
                    </Link>

                    {/* Icon toggles submenu */}
                    <button
                      aria-haspopup="true"
                      aria-expanded={desktopSubmenuOpen === link.name}
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        toggleDesktopSubmenu(link.name);
                      }}
                      className="submenu-toggle-icon focus:outline-none"
                      tabIndex={0}
                    >
                      <ChevronDown
                        className={`w-4 h-4 mt-1 transition-transform ${
                          desktopSubmenuOpen === link.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* Dropdown Menu */}
                  {desktopSubmenuOpen === link.name && (
                    <ul
                      ref={submenuRef}
                      className="absolute top-8 left-0 bg-white text-black rounded-md shadow-lg p-3 w-44 z-50"
                    >
                      {link.subLinks.map((sublink) => (
                        <li key={sublink.href} className="mb-1 last:mb-0">
                          <Link
                            href={sublink.href}
                            className={`block px-2 py-1 rounded hover:bg-gray-100 transition-colors ${
                              pathname === sublink.href
                                ? "text-primary font-semibold"
                                : ""
                            }`}
                            onClick={() => setDesktopSubmenuOpen(null)} // close submenu on click
                          >
                            {sublink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  className={`transition-all duration-300 transform ${
                    pathname === link.href
                      ? "text-primary scale-110 -translate-y-0.5"
                      : "hover:text-primary hover:scale-105 hover:-translate-y-0.5"
                  }`}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pb-4 pt-2">
          <ul className="flex flex-col space-y-4 font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.subLinks ? (
                  <>
                    <button
                      onClick={() => toggleMobileSubmenu(link.name)}
                      className="flex items-center justify-between w-full text-white hover:text-primary focus:outline-none"
                      aria-expanded={
                        mobileSubmenusOpen[link.name] ? "true" : "false"
                      }
                      aria-controls={`submenu-${link.name}`}
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          mobileSubmenusOpen[link.name] ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileSubmenusOpen[link.name] && (
                      <ul
                        id={`submenu-${link.name}`}
                        className="pl-4 mt-2 space-y-2"
                        role="menu"
                      >
                        {link.subLinks.map((sublink) => (
                          <li key={sublink.href} role="none">
                            <Link
                              href={sublink.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`block text-sm transition-colors ${
                                pathname === sublink.href
                                  ? "text-primary"
                                  : "text-white hover:text-primary"
                              }`}
                              role="menuitem"
                            >
                              {sublink.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`transition-colors ${
                      pathname === link.href
                        ? "text-primary"
                        : "text-white hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
