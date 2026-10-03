"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Trophy } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Button } from "./ui/button";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-background/85 backdrop-blur-md shadow-md py-2.5 border-b border-border/50" 
        : "py-4 bg-transparent"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="#home" className="flex items-center gap-2 group">
          <span className="text-lg md:text-xl font-headline font-bold text-foreground group-hover:text-primary transition-colors">
            Prathamesh Saharkar
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium text-muted-foreground px-2 py-0.5 rounded-full bg-secondary/60 border border-border/50">
            VIT Pune • Comp Engg
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-2.5 py-1.5 text-foreground hover:text-primary transition-colors rounded-md font-medium text-sm hover:bg-secondary/40",
                link.href === '#achievements' && "text-amber-600 dark:text-amber-400 font-semibold"
              )}
            >
              {link.href === '#achievements' ? (
                <span className="flex items-center gap-1">
                  <Trophy className="h-3.5 w-3.5 text-amber-500" />
                  {link.label}
                </span>
              ) : (
                link.label
              )}
            </Link>
          ))}
          <div className="pl-2">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Nav Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsOpen(!isOpen)} 
            aria-label="Toggle navigation menu"
            className="h-9 w-9"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5 text-foreground" />}
          </Button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-2 py-3 px-4 bg-background/95 backdrop-blur-lg shadow-xl border-b border-border/60">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 text-foreground hover:text-primary hover:bg-primary/10 transition-colors rounded-md text-sm font-medium flex items-center justify-between",
                  link.href === '#achievements' && "text-amber-600 dark:text-amber-400 font-semibold"
                )}
                onClick={() => setIsOpen(false)}
              >
                <span>{link.label}</span>
                {link.href === '#achievements' && (
                  <span className="text-[10px] bg-amber-500/20 text-amber-600 dark:text-amber-400 font-bold px-2 py-0.5 rounded-full">
                    Winner
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
