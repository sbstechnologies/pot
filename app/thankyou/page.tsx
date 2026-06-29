"use client";

import PromoCardWidget from "@/app/components/PromoCardWidget";
import HeaderOther from "@/app/components/HeaderOther";
import Footer from "@/app/components/Footer";
import { siteConfig } from "@/app/config/content";
import FooterLegalBar from "@/app/components/FooterLegalBar";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ComplianceNotice from "@/app/components/ComplianceNotice";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();

  return (
    <>
      <PromoCardWidget />
      <HeaderOther />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#1f376d] pt-32 pb-24 text-white px-6 md:px-20 lg:px-40">
        <div className="relative z-10 max-w-4xl">
          <p className="text-xs tracking-[0.3em] text-[#E09428] mb-6 mt-[15px] font-bold uppercase">
            GET IN TOUCH
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#F5F2ED]">
            We'd Love to <br />
            <span className="italic text-[#E39B2D]">Hear From You</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-[#bfc6d6] md:text-lg">
            Ready to make Parks on Taylor your home? Our leasing team is
            standing by to answer questions, schedule tours, and walk you
            through the process.
          </p>
        </div>
      </section>

      {/* CONTACT + THANK YOU */}
      <section className="bg-[#f5f2ed] px-6 md:px-20 lg:px-24 py-12 md:py-16">
        <div className="mx-auto grid max-w-[1920px] grid-cols-1 gap-10 xl:grid-cols-2 xl:gap-12">
          {/* LEFT SECTION */}
          <div className="space-y-10">
            <div>
              <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-[#E39B2D]">
                ADDRESS
              </p>

              <div className="flex items-start gap-4">
                <MapPin size={18} className="mt-1 text-[#1E3872]" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Parks on Taylor
                  </h3>
                  <p className="mt-1 text-base text-gray-600">
                    {siteConfig.address}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-[#E39B2D]">
                CONTACT
              </p>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <Phone size={18} className="text-[#1E3872]" />
                  <a
                    href={siteConfig.tel}
                    className="text-[#163c84] font-semibold"
                  >
                    {siteConfig.phone}
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <Mail size={18} className="text-[#1E3872]" />
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-[#163c84] font-semibold"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>

            <div>
              <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-[#E39B2D]">
                OFFICE HOURS
              </p>

              <div className="space-y-2 text-gray-700">
                <p>Monday – Friday: 8:30 AM – 5:30 PM</p>
                <p>Saturday: 10:00 AM – 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* THANK YOU SECTION */}
          <div className="flex items-center justify-center">
            <motion.div
              className="w-full max-w-3xl rounded-3xl bg-white shadow-xl overflow-hidden"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="h-1.5 bg-gradient-to-r from-[#1f376d] to-[#E39B2D]" />

              <div className="px-6 py-10 md:px-12 md:py-14 text-center">
                <div className="mb-5 text-5xl">🎉</div>

                <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
                  Thank You For <br />
                  Contacting Us!
                </h1>

                <div className="mt-6">
                  <p className="text-sm md:text-xl font-semibold text-gray-700">
                    Our team will quickly reach back to you!
                  </p>

                  <p className="mt-3 text-sm md:text-base text-gray-500">
                    We respond to all inquiries within 1 business day.
                  </p>
                </div>

                <button
                  onClick={() => router.push("/")}
                  className="mt-10 w-full rounded-2xl bg-[#1f376d] py-4 text-base md:text-lg font-semibold text-white hover:bg-[#162a52] transition"
                >
                  Go Back To Home
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <ComplianceNotice />
      <FooterLegalBar />
    </>
  );
}
