"use client";

import { Menu } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function Navigation() {
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 glass border-b">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-primary">
            A.I.M
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-smooth"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Drawer */}
          <Drawer direction="right">
            <DrawerTrigger asChild className="md:hidden">
              <button className="p-2 text-muted-foreground hover:text-foreground transition-smooth">
                <Menu size={24} />
              </button>
            </DrawerTrigger>
            <DrawerContent className="glass border-l">
              <DrawerHeader className="border-b border-border/50">
                <DrawerTitle className="text-2xl font-bold text-primary">
                  A.I.M
                </DrawerTitle>
              </DrawerHeader>
              <div className="flex flex-col p-4 gap-2">
                {navItems.map((item) => (
                  <DrawerClose key={item.href} asChild>
                    <a
                      href={item.href}
                      className="block px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-card/50 rounded-lg transition-smooth text-lg"
                    >
                      {item.label}
                    </a>
                  </DrawerClose>
                ))}
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </nav>
  );
}
