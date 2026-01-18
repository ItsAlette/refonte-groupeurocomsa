"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { label: "Home Page", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Contact Us", href: "/contact-us" },
];

function Logo() {
  return (
    <div className="flex items-center gap-3 ">
      
      <span className="leading-none">
        <span className="block text-base font-medium uppercase tracking-widest text-gray-900">
          Group
        </span>
        <span className="inline-flex items-baseline gap-1 text-2xl font-bold tracking-wide text-[#233876]">
          Eurocom
          <span className="text-[10px] font-semibold text-gray-700">(SA)</span>
        </span>
      </span>
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-18 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => {
              const isActive = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`relative h-16 flex items-center font-medium transition-colors
                    ${isActive ? "text-gray-900" : "text-gray-500 hover:text-gray-900"}`}
                >
                  {l.label}
                  {isActive && (
                    <span className="absolute bottom-3 left-0 right-0 h-[2px] bg-[#233876] rounded-t" />
                  )}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? (
              <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                <path
                  d="M6 6l12 12M18 6l-12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          id="mobile-nav"
          className={`md:hidden border-t border-gray-100 bg-white shadow-sm overflow-hidden transition-[max-height] duration-300 ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col py-2">
            {links.map((l) => {
              const isActive = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`px-2 py-3 text-base font-medium transition-colors
                    ${isActive ? "text-gray-900" : "text-gray-600 hover:text-gray-900"}`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}




/* import Link from "next/link";

const links = [
  { label: "Home Page", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold">
          Group Eurocomsa
        </Link>

        <nav className="flex gap-6 text-sm text-gray-700">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-black">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
*/
