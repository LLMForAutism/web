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
          <a
            href="/#hero"
            className="text-xl font-bold text-primary hover:text-primary/80 transition-colors"
          >
            LLM For Autism
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Button
              variant="hero"
              onClick={() => scrollToSection("#get-involved")}
            >
              Jadi relawan
            </Button>

            <LangSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
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
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  {item.label}
                </a>
              ))}
              <Button
                variant="hero"
                onClick={() => scrollToSection("#get-involved")}
                className="w-full"
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
