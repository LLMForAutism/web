'use client'

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import LangSwitcher from "./ui/lang-switcher";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Beranda", href: "/" },
    { label: "Misi", href: "#mission" },
    { label: "Program", href: "#programs" },
    { label: "Dampak", href: "#impact" },
    { label: "Galeri", href: "/gallery" },
    { label: "Tentang Kami", href: "/about" }
  ];

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/#hero"
            className="text-xl font-bold text-primary hover:text-primary/80 transition-colors"
          >
            LLM For Autism
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full group-hover:left-0"></span>
              </Link>
            ))}
            <Button
              variant="hero"
              onClick={() => scrollToSection("#get-involved")}
              className="cursor-pointer hover:shadow-md hover:scale-105 transition-all duration-200"
            >
              Jadi relawan
            </Button>

            <LangSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 rounded-md hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 font-medium py-3 px-3 rounded-md active:scale-95"
                >
                  {item.label}
                </Link>
              ))}
              <Button
                variant="hero"
                onClick={() => scrollToSection("#get-involved")}
                className="w-full mt-2 hover:shadow-md active:scale-95 transition-all duration-200"
              >
                Jadi relawan
              </Button>

              <LangSwitcher />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
