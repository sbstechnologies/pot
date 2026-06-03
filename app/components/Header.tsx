"use client";

import Link from "next/link";
import { useState } from "react";
import { headerConfig } from "@/app/config/content";
import { Instrument_Serif } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

type HeaderProps = {
  showTopBar: boolean;
};

export default function Header({ showTopBar }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed left-0 z-40 w-full transition-all duration-300 ${
        showTopBar ? "top-0 md:top-11" : "top-0"
      }`}
    >
      <div className="flex w-full items-center justify-between bg-white/80 px-6 py-4 md:px-12 lg:px-16 select-none">
        {/* BRAND IDENTITY / LOGO */}
        <div className="min-w-0">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3"
          >
            {/* Logo Icon Container */}
            <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[12px] bg-[var(--primary)]">
              <Image
                src="/images/logo.png"
                alt={headerConfig.logo.alt_title}
                width={38}
                height={38}
              />
            </span>

            <div className="min-w-0 flex flex-col justify-center">
              <p className={instrumentSerif.className}>
                {headerConfig.logo.title}
              </p>

              <p
                className={`mt-0.5 ${jakarta.className} text-[9px] font-bold uppercase tracking-[0.15em] text-[var(--light-grey)]/90`}
              >
                {headerConfig.logo.subtitle}
              </p>
            </div>
          </Link>
        </div>

        {/* DESKTOP NAV ARCHITECTURE */}
        <nav className="hidden items-center gap-6 font-[Plus_Jakarta_Sans] text-[14px] font-semibold text-[var(--grey)]/90 lg:flex xl:gap-8">
          {headerConfig.navLinks.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap transition duration-150 ease-in-out hover:text-[#1e3872]"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="whitespace-nowrap transition duration-150 ease-in-out hover:text-[#1e3872]"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        {/* DESKTOP CALL TO ACTION BUTTON */}
        <a
          href={headerConfig.applyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 whitespace-nowrap rounded-full bg-[#1e3872] px-6 py-3 font-[Plus_Jakarta_Sans] text-[13px] font-bold text-white transition duration-150 ease-in-out hover:bg-[#152750] hover:shadow-sm lg:inline-flex"
        >
          <span>{headerConfig.applyText}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>

        {/* MOBILE RESPONSIVE TRIGGER */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#d8d1c8] bg-white text-[#2d3230] shadow-sm lg:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-[2px] w-5 rounded-full bg-[#2d3230] transition-all ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-[2px] w-5 rounded-full bg-[#2d3230] transition-all ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-[2px] w-5 rounded-full bg-[#2d3230] transition-all ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* MOBILE INTERACTIVE NAV EXPANSION */}
      {open && (
        <div className="absolute left-0 top-full w-full border-t border-[#ded8cf] bg-[#f5f2ed] px-6 py-6 shadow-xl lg:hidden">
          <nav className="flex flex-col gap-2 font-[Plus_Jakarta_Sans]">
            {headerConfig.navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-[15px] font-semibold text-[#2d3230] transition hover:bg-white"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-[15px] font-semibold text-[#2d3230] transition hover:bg-white"
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
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[#1e3872] px-5 py-4 text-center text-[15px] font-semibold text-white shadow-[0_8px_22px_rgba(30,56,114,0.22)]"
            >
              <span>{headerConfig.applyText}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
