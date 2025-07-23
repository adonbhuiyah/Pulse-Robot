import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "";
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = "";
    }
  };

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 py-2 transition-all duration-300 sm:py-3 md:py-4",
        isScrolled
          ? "bg-white/80 shadow-sm backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#"
          className="flex items-center space-x-2"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
          aria-label="Pulse Robot"
        >
          <img src="/logo.svg" alt="Pulse Robot Logo" className="h-7 sm:h-8" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-8 lg:flex">
          <a
            href="#"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
          >
            Home
          </a>
          <a href="#tokenomics" className="nav-link">
            $ROBOT
          </a>

          <a
            target="_blank"
            href="https://chat.pulserobots.com"
            className="nav-link"
          >
            Chat with Atlas
          </a>
          <a
            href="/whitepaper.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            Whitepaper
          </a>
          <a href="#details" className="nav-link">
            Details
          </a>
          <a href="#features" className="nav-link">
            Features
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="relative z-50 p-3 text-gray-700 focus:outline-none lg:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#0d0c0c"
              viewBox="0 0 256 256"
            >
              <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#0d0c0c"
              viewBox="0 0 256 256"
            >
              <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex h-screen flex-col bg-white px-6 pt-24 transition-all duration-300 ease-in-out lg:hidden",
          isMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0",
        )}
      >
        <nav className="mt-8 flex flex-col items-center space-y-8 *:w-full *:rounded-lg *:px-6 *:py-3 *:text-center *:text-2xl *:font-bold">
          <a
            href="#"
            className="hover:bg-[rgb(255,237,213)]"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
              setIsMenuOpen(false);
              document.body.style.overflow = "";
            }}
          >
            Home
          </a>
          <a
            href="#tokenomics"
            className="hover:bg-[rgb(255,237,213)]"
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = "";
            }}
          >
            $ROBOT
          </a>
          <a
            target="_blank"
            href="https://chat.pulserobots.com"
            className="hover:bg-[rgb(255,237,213)]"
          >
            Chat with Atlas
          </a>
          <a
            href="/whitepaper.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-[rgb(255,237,213)]"
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = "";
            }}
          >
            Whitepaper
          </a>
          <a
            href="#details"
            className="hover:bg-[rgb(255,237,213)]"
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = "";
            }}
          >
            Details
          </a>
          <a
            href="#features"
            className="hover:bg-[rgb(255,237,213)]"
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = "";
            }}
          >
            Features
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
