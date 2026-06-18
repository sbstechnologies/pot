"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import { headerConfig } from "@/app/config/content";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

type HeaderProps = {
  showTopBar?: boolean;
};

export default function HeaderOther({ showTopBar = true }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        showTopBar ? "top-0" : "top-0"
      }`}
    >
      <div className="border-b border-gray-200/50 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-8xl items-center justify-between px-6 xs:px-6 sm:px-6 xl:px-40 xxl:px-80">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex min-w-0 items-center gap-2 md:gap-3"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[var(--primary)]">
              <Image
                src="/images/logo.png"
                alt={headerConfig.logo.alt_title}
                width={40}
                height={40}
                priority
              />
            </div>

            <div className="min-w-0">
              <p
                className={`${instrumentSerif.className} truncate font-semibold text-gray-700 transition-colors hover:text-[#1e3872] md:text-lg`}
              >
                {headerConfig.logo.title}
              </p>

              <p
                className={`${jakarta.className} text-[8px] font-bold uppercase tracking-[0.15em] text-[var(--light-grey)] md:text-[9px]`}
              >
                {headerConfig.logo.subtitle}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
            {headerConfig.navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[#2d3230] transition-colors hover:text-[#1e3872]"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-semibold text-[#2d3230] transition-colors hover:text-[#1e3872]"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          {/* Desktop CTA */}
          <a
            href={headerConfig.applyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-[#1e3872] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#152750] hover:shadow-md lg:inline-flex"
          >
            <span>{headerConfig.applyText}</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-sm lg:hidden"
          >
            <span className="relative block h-5 w-5">
              <span
                className={`absolute left-0 top-1 h-0.5 w-5 rounded-full bg-[#2d3230] transition-all duration-300 ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-2.5 h-0.5 w-5 rounded-full bg-[#2d3230] transition-all duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-4 h-0.5 w-5 rounded-full bg-[#2d3230] transition-all duration-300 ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {open && (
          <div className="border-t border-gray-200 bg-white shadow-lg lg:hidden">
            <nav className="flex flex-col gap-1 p-8">
              {headerConfig.navLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-4 py-3 text-sm font-medium text-[#2d3230] transition hover:bg-gray-50"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-4 py-3 text-sm font-medium text-[#2d3230] transition hover:bg-gray-50"
                  >
                    {link.label}
                  </Link>
                ),
              )}

              <a
                href={headerConfig.applyLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#1e3872] px-5 py-3 text-sm font-semibold text-white"
              >
                <span>{headerConfig.applyText}</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
