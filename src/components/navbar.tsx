"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import LangSwitcher from "./ui/lang-switcher";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Proyek", href: "#proyek" },
    { label: "Blog", href: "/blogs" },
    { label: "Tentang Kami", href: "/about" },
  ];

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/#hero"
            className="text-2xl font-bold transition-transform duration-200"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <span className="text-foreground">LLMFor</span>
            <span className="text-jade-green">Autism</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className={`relative text-base font-medium transition-colors duration-200 py-2 ${pathname === item.href
                    ? "text-jade-green after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-jade-green"
                    : "text-muted-foreground hover:text-jade-green"
                  }`}
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex gap-8">
            <Button
              variant="default"
              onClick={() => scrollToSection("#get-involved")}
              className="hidden md:flex bg-jade-green hover:bg-primary-dark text-white font-semibold px-6 py-2 rounded-lg hover:shadow-md hover:scale-105 transition-all duration-200 cursor-pointer"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Hubungi Kami
            </Button>

            <LangSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-jade-green hover:bg-primary/10 transition-all duration-200 rounded-md"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-in slide-in-from-top duration-200">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-base font-medium transition-all duration-200 py-3 px-4 rounded-md ${pathname === item.href
                      ? "text-jade-green bg-primary/10"
                      : "text-muted-foreground hover:text-jade-green hover:bg-primary/10"
                    }`}
                  style={{ fontFamily: "Poppins, sans-serif" }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <Button
                variant="default"
                onClick={() => scrollToSection("#get-involved")}
                className="w-full mt-2 bg-jade-green hover:bg-primary-dark text-white font-semibold rounded-lg hover:shadow-md active:scale-95 transition-all duration-200 cursor-pointer"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Hubungi Kami
              </Button>

              <div className="mt-2">
                <LangSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
