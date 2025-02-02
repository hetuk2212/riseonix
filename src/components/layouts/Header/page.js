"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => pathname === path;

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header>
      <nav
        className="bg-black py-4 px-8 flex items-center justify-between"
        aria-label="Main Navigation"
      >
        <Link href="/" aria-label="Home">
          <img
            src="/images/icons/logo.png"
            alt="Main Logo"
            className="w-48"
            loading="lazy"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6">
          <li>
            <Link
              href="/"
              className="relative group text-white font-semibold text-lg"
            >
              Home
              <span
                className={`absolute left-0 -bottom-2 w-0 h-0.5 bg-white transition-all ${
                  isActive("/")
                    ? "w-full"
                    : "group-hover:w-full group-hover:h-0.5"
                }`}
              ></span>
            </Link>
          </li>

          <li>
            <Link
              href="/services"
              className="relative group text-white font-semibold text-lg"
            >
              Services
              <span
                className={`absolute left-0 -bottom-2 w-0 h-0.5 bg-white transition-all ${
                  isActive("/services")
                    ? "w-full"
                    : "group-hover:w-full group-hover:h-0.5"
                }`}
              ></span>
            </Link>
          </li>

          <li>
            <Link
              href="/portfolio"
              className="relative group text-white font-semibold text-lg"
            >
              Portfolio
              <span
                className={`absolute left-0 -bottom-2 w-0 h-0.5 bg-white transition-all ${
                  isActive("/portfolio")
                    ? "w-full"
                    : "group-hover:w-full group-hover:h-0.5"
                }`}
              ></span>
            </Link>
          </li>

          <li>
            <Link
              href="/blogs"
              className="relative group text-white font-semibold text-lg"
            >
              Blogs
              <span
                className={`absolute left-0 -bottom-2 w-0 h-0.5 bg-white transition-all ${
                  isActive("/blogs")
                    ? "w-full"
                    : "group-hover:w-full group-hover:h-0.5"
                }`}
              ></span>
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="relative group text-white font-semibold text-lg"
            >
              Contact
              <span
                className={`absolute left-0 -bottom-2 w-0 h-0.5 bg-white transition-all ${
                  isActive("/contact")
                    ? "w-full"
                    : "group-hover:w-full group-hover:h-0.5"
                }`}
              ></span>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button (visible on all screen sizes) */}
        <button
          aria-label="Toggle Menu"
          onClick={toggleMenu}
          className=" p-2 rounded focus:outline-none focus:ring-2 focus:ring-white"
        >
          <img
            src="/images/icons/menu.png"
            alt="Menu Icon"
            className="w-10 h-10"
          />
        </button>
      </nav>

      {/* Mobile Slider */}
      <div
  className={`fixed top-0 right-0 w-1/2 h-full bg-black transition-transform transform ${
    isMenuOpen ? "translate-x-0" : "translate-x-full"
  } z-50`}
>
  {/* Close Button */}
  <button
    aria-label="Close Menu"
    onClick={toggleMenu}
    className="absolute top-4 right-4 text-white text-3xl focus:outline-none"
  >
    &times; {/* You can also use an icon here */}
  </button>

  <ul className="flex flex-col items-center justify-center h-full gap-8 md:hidden">
    <li>
      <Link
        href="/"
        className="text-white font-semibold text-2xl"
        onClick={toggleMenu}
      >
        Home
      </Link>
    </li>

    <li>
      <Link
        href="/services"
        className="text-white font-semibold text-2xl"
        onClick={toggleMenu}
      >
        Services
      </Link>
    </li>

    <li>
      <Link
        href="/portfolio"
        className="text-white font-semibold text-2xl"
        onClick={toggleMenu}
      >
        Portfolio
      </Link>
    </li>

    <li>
      <Link
        href="/blogs"
        className="text-white font-semibold text-2xl"
        onClick={toggleMenu}
      >
        Blogs
      </Link>
    </li>

    <li>
      <Link
        href="/contact"
        className="text-white font-semibold text-2xl"
        onClick={toggleMenu}
      >
        Contact
      </Link>
    </li>
  </ul>
</div>

    </header>
  );
};

export default Header;
