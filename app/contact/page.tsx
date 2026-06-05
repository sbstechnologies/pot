"use client";

import LoriChatWidget from "../components/LoriChatWidget";
import PromoCardWidget from "../components/PromoCardWidget";
import HeaderOther from "../components/HeaderOther";
import Footer from "../components/Footer";
import { siteConfig, handleSubmit } from "@/app/config/content";
import FooterLegalBar from "../components/FooterLegalBar";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import ComplianceNotice from "../components/ComplianceNotice";

export default function Contact() {
  return (
    <>
      <PromoCardWidget />
      <HeaderOther />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-[#1f376d]  pt-32 pb-24 text-white px-10 xs:px-10 sm:px-10 md:px-30 lg:px-60 xl:px-85 xxl:px-80">
        <div className="relative z-10 max-w-4xl">
          <p className="text-xs tracking-[0.3em] text-[#E09428] mb-6 mt-[15px] font-bold uppercase">
            GET IN TOUCH
          </p>

          <h1 className="font-[Instrument_Serif] text-[64px] md:text-[70px] leading-[0.98] tracking-[-0.04em] text-[#F5F2ED]">
            We'd Love to <br />
            <span className="italic text-[#E39B2D]">Hear From You</span>
          </h1>

          <p className="mt-8 max-w-2xl font-[Plus_Jakarta_Sans] text-base leading-relaxed text-[#bfc6d6] md:text-lg">
            Ready to make Parks on Taylor your home? Our leasing team is
            standing by to answer questions, schedule tours, and walk you
            through the process.
          </p>
        </div>
      </section>

      {/* ===== CONTACT DETAILS + FORM ===== */}
      <section className="bg-[#f5f2ed] px-10 xs:px-10 sm:px-10 md:px-30 lg:px-60 xl:px-85 xxl:px-80 py-12 font-[Plus_Jakarta_Sans] md:px-10 lg:px-24 md:py-16">
        <div className="mx-auto grid max-w-[1920px] grid-cols-1 gap-10 xl:grid-cols-[0.9fr_1.25fr] xl:gap-12">
          {/* LEFT */}
          <div className="space-y-10">
            {/* ADDRESS */}
            <div>
              <p className="mb-4 font-[Plus_Jakarta_Sans] text-xs font-semibold tracking-[0.3em] text-[#E39B2D]">
                ADDRESS
              </p>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-xl text-[#1E3872]">
                  <MapPin
                    size={16}
                    className="shrink-0 mt-[2px] text-[#1E3872]"
                    strokeWidth={2}
                  />
                </div>

                <div>
                  <h3 className="text-[18px] font-semibold text-[#1f2937]">
                    Parks on Taylor
                  </h3>

                  <p className="mt-1 text-[16px] leading-[1.6] text-[#4b5563]">
                    {siteConfig.address}
                  </p>
                </div>
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <p className="mb-4 font-[Plus_Jakarta_Sans] text-xs font-semibold tracking-[0.3em] text-[#E39B2D]">
                CONTACT
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#cfd6e2] bg-[#eef2f8] text-sm text-[#1E3872]">
                    <Phone
                      size={16}
                      className="shrink-0 text-[#1E3872]"
                      strokeWidth={2}
                    />
                  </div>

                  <div>
                    <p className="text-xs font-semibold tracking-[0.08em] text-[#6b7280]">
                      LEASING OFFICE
                    </p>
                    <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}>
                      <p className="mt-1 cursor-pointer text-[17px] font-semibold text-[#163c84] hover:underline">
                        {siteConfig.phone}
                      </p>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#cfd6e2] bg-[#eef2f8] text-sm text-[#1E3872]">
                    <Mail
                      size={16}
                      className="shrink-0 text-[#1E3872]"
                      strokeWidth={2}
                    />
                  </div>

                  <div>
                    <p className="text-xs font-semibold tracking-[0.08em] text-[#6b7280]">
                      LEASING INQUIRIES
                    </p>
                    <a href={`mailto:${siteConfig.email}`}>
                      <p className="mt-1 break-all text-[17px] font-semibold text-[#163c84]">
                        {siteConfig.email}
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* OFFICE HOURS */}
            <div>
              <p className="mb-4 font-[Plus_Jakarta_Sans] text-xs font-semibold tracking-[0.3em] text-[#E39B2D]">
                OFFICE HOURS
              </p>

              <div className="flex items-start gap-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#cfd6e2] bg-[#eef2f8] text-sm text-[#1E3872]">
                  <Clock
                    size={16}
                    className="shrink-0 text-[#1E3872]"
                    strokeWidth={2}
                  />
                </div>

                <div className="w-full max-w-md space-y-1.5 text-[16px]">
                  <div className="flex justify-between gap-6 text-[#1f2937]">
                    <span>Monday – Friday</span>
                    <span className="font-semibold text-[#163c84]">
                      8:30 AM – 5:30 PM
                    </span>
                  </div>

                  <div className="flex justify-between gap-6 text-[#1f2937]">
                    <span>Saturday</span>
                    <span className="font-semibold text-[#163c84]">
                      10:00 AM – 4:00 PM
                    </span>
                  </div>

                  <div className="flex justify-between gap-6 text-[#1f2937]">
                    <span>Sunday</span>
                    <span className="font-semibold text-[#ef4444]">Closed</span>
                  </div>

                  <p className="pt-2 text-[15px] text-[#4b5563]">
                    Languages: English & Spanish
                  </p>
                </div>
              </div>
            </div>

            {/* MAP */}
            <div className="overflow-hidden rounded-[24px] border border-[#cfd6e2] bg-white shadow-sm">
              <div className="relative h-[320px] w-full">
                <iframe
                  src="https://www.google.com/maps?q=1200+W+Taylor+Street,+Sherman,+TX+75092&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>

              <div className="flex items-center justify-between px-5 py-4">
                <div>
                  <h3 className="font-[Plus_Jakarta_Sans] text-[16px] font-bold text-[#1E3872]">
                    Parks on Taylor
                  </h3>

                  <p className="mt-1 text-[14px] text-[#4b5563]">
                    ⌖ {siteConfig.address}
                  </p>
                </div>

                <a
                  href="https://maps.google.com/?q=1200+W+Taylor+Street,+Sherman,+TX+75092"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#1E3872] px-4 py-2 text-[13px] font-semibold text-white transition hover:bg-[#162c5a]"
                >
                  Open Map
                </a>
              </div>
            </div>

            {/* SOCIAL */}
            <div>
              <p className="mb-5 font-[Plus_Jakarta_Sans] text-xs font-semibold tracking-[0.3em] text-[#334155]">
                FOLLOW ALONG
              </p>

              <div className="flex gap-3">
                {[
                  { icon: FaInstagram, href: "#" },
                  { icon: FaFacebookF, href: "#" },
                  { icon: FaXTwitter, href: "#" },
                ].map(({ icon: Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#c6d0e0] bg-[#edf2fb] text-[#1E3872] transition hover:bg-[#1E3872] hover:text-white"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="overflow-hidden rounded-[26px] border border-[#e4e1db] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
            <div className="h-1 w-full bg-gradient-to-r from-[#1E3872] to-[#E39B2D]" />

            <div className="p-6 md:p-10 lg:p-14 xl:p-16 xxl:p-20">
              <h2 className="font-[Instrument_Serif] text-[30px] leading-[1.1] text-[#1f2937] md:text-[40px]">
                Send Us a Message
              </h2>

              <p className="mt-3 max-w-xl text-[16px] leading-[1.6] text-[#4b5563]">
                Questions about availability, pricing, or scheduling a tour?
                We're here to help.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[12px] font-semibold tracking-[0.12em] text-[#4b5563]">
                      FULL NAME *
                    </label>
                    <input
                      name="fullName"
                      type="text"
                      placeholder="Jane Smith"
                      required
                      className="w-full rounded-xl border border-[#cfd6e2] px-4 py-3 text-[15px] outline-none focus:border-[#1E3872]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[12px] font-semibold tracking-[0.12em] text-[#4b5563]">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="jane@email.com"
                      required
                      className="w-full rounded-xl border border-[#cfd6e2] px-4 py-3 text-[15px] outline-none focus:border-[#1E3872]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[12px] font-semibold tracking-[0.12em] text-[#4b5563]">
                      PHONE NUMBER
                    </label>
                    <input
                      name="phone"
                      type="text"
                      placeholder="(555) 000-0000"
                      className="w-full rounded-xl border border-[#cfd6e2] px-4 py-3 text-[15px] outline-none focus:border-[#1E3872]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[12px] font-semibold tracking-[0.12em] text-[#4b5563]">
                      SUBJECT
                    </label>
                    <select
                      name="subject"
                      className="w-full rounded-xl border border-[#cfd6e2] bg-white px-4 py-3 text-[15px] outline-none focus:border-[#1E3872]"
                    >
                      <option value="">I am a...</option>
                      <option value="Current Resident">Current Resident</option>
                      <option value="Future Resident">Future Resident</option>
                      <option value="Application Help">Application Help</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[12px] font-semibold tracking-[0.12em] text-[#4b5563]">
                    MESSAGE
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    placeholder="Tell us what you're looking for..."
                    className="w-full resize-none rounded-xl border border-[#cfd6e2] px-4 py-3 text-[15px] outline-none focus:border-[#1E3872]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#b7bfd0] py-4 text-[17px] font-semibold text-white transition hover:bg-[#a8b2c7]"
                >
                  → Submit Message
                </button>

                <p className="mt-2 text-center text-[13px] text-[#9aa3b2]">
                  We respond to all inquiries within 1 business day. ·{" "}
                  {siteConfig.phone}
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OFFER CTA ===== */}
      <section className="bg-[#f5f2ed] pb-14 px-10 xs:px-10 sm:px-10 md:px-30 lg:px-60 xl:px-85 xxl:px-80 md:pb-20">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-6 rounded-[26px] bg-[#db8d1f] px-8 py-7 md:px-12 md:py-9 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-white/90">
              LIMITED TIME OFFER
            </p>

            <h2 className="font-[Instrument_Serif] text-[36px] leading-none text-white md:text-[52px]">
              Look & Lease Special
            </h2>

            <p className="font-[Plus_Jakarta_Sans] mt-3 text-[17px] text-white md:text-[18px]">
              Only <span className="font-bold">$99 total to move in</span> —
              limited units available. Contact us today!
            </p>
          </div>

          {/* STYLED BUTTON CONTAINER TO MATCH ATTACHED DESIGN */}
          <div className="shrink-0">
            <a
              href={siteConfig.tel}
              className="inline-block rounded-[20px] bg-[#1a3a70] px-8 py-4 font-[Plus_Jakarta_Sans] text-sm font-semibold tracking-wide text-white shadow-[0_6px_20px_rgba(0,0,0,0.3)] transition-all duration-200 hover:bg-[#132b54] hover:scale-[1.02] active:scale-[0.98]"
            >
              Call Now: {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <ComplianceNotice />
      <FooterLegalBar />
    </>
  );
}
