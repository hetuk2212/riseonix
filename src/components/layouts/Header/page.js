"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  
  const isActive = (path) => pathname === path;

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

        <ul className="flex items-center gap-6">
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

        <button
          aria-label="Toggle Menu"
          className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-white"
        >
          <img
            src="/images/icons/menu.png"
            alt="Menu Icon"
            className="w-10 h-10"
          />
        </button>
      </nav>
    </header>
  );
};

export default Header;
