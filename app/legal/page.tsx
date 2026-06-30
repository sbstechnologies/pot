"use client";

import PromoCardWidget from "@/app/components/PromoCardWidget";
import HeaderOther from "@/app/components/HeaderOther";
import Footer from "@/app/components/Footer";
import { siteConfig } from "@/app/config/content";
import FooterLegalBar from "@/app/components/FooterLegalBar";

import ComplianceNotice from "@/app/components/ComplianceNotice";
import { motion, Variants } from "framer-motion";

export default function Contact() {
  const fadeUp: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <>
      <PromoCardWidget />
      <HeaderOther />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-[#1f376d]  pt-32 pb-24 text-white px-6 xs:px-6 sm:px-6 md:px-20 lg:px-40 xl:px-40 xxl:px-80 mx-auto">
        <div className="relative z-10 max-w-4xl">
          <p className="text-xs tracking-[0.3em] text-[#E09428] mb-6 mt-[15px] font-bold uppercase">
            LEGAL INFO
          </p>

          <h1 className="font-[Instrument_Serif] text-[56px] md:text-[56px] leading-[0.98] tracking-[-0.04em] text-[#F5F2ED]">
            Legal Policies <br />
            <span className="italic text-[#E39B2D]">& Disclosures</span>
          </h1>

          <p className="mt-8 max-w-2xl font-[Plus_Jakarta_Sans] text-base leading-relaxed text-[#bfc6d6] md:text-lg"></p>
        </div>
      </section>

      <section className="bg-[#F5F2ED] px-6 md:px-12 lg:px-24 xl:px-40 py-14 md:py-20">
        <div className="mx-auto max-w-[1400px]">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-14 text-center"
          >
            <h2 className="font-[Instrument_Serif] text-[42px] md:text-[56px] leading-none text-[#232323] mb-4 transition-all duration-300 hover:text-[#E39B2D]">
              Privacy Policy & Terms of Use
            </h2>

            <p className="mx-auto mt-4 max-w-3xl font-[Plus_Jakarta_Sans] text-[15px] md:text-[17px] leading-relaxed text-[#6A6A6A]">
              Please read our privacy policy and terms carefully before using
              the website.
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15 }}
            className="space-y-12"
          >
            {[
              {
                title: "Privacy Policy",
                text: "This privacy policy (“policy”) will help you understand how Parks on Taylor and its professional management, LiveNJoy Management, (“us”, “we”, “our”) use and protect the data you provide to us when you visit and use our website (“website”, “service”). We reserve the right to change this policy at any given time, of which you will be promptly updated. If you want to make sure that you are up to date with the latest changes, we advise you to frequently visit this page.",
              },
              {
                title: "Our Cookies Policy",
                text: "Once you agree to allow our website to use cookies, you also agree to use the data it collects regarding your online behavior (analyze web traffic, web pages you spend the most time on, and websites you visit). The data we collect by using cookies is used to customize our website to your needs. After we use the data for statistical analysis, the data is completely removed from our systems. Please note that cookies don’t allow us to gain control of your computer in any way. They are strictly used to monitor which pages you find useful and which you do not so that we can provide a better experience for you. If you want to disable cookies, you can do it by accessing the settings of your browser.",
              },
              {
                title: "Links to Other Websites",
                text: "Our website contains links that lead to other websites. If you click on these links, Parks on Taylor and LiveNJoy Management are not held responsible for your privacy protection. Visiting those websites is not governed by this privacy policy agreement. Make sure to read the privacy policy documentation of the website you go to from our website.",
              },
              {
                title: "Text Messaging",
                text: "In the event that you opt-in to receive text messages from our property, you may receive messages related to your lease, maintenance requests, community events, upcoming payments, and other information related to the community in which you live. At any point in time, if you desire to stop receiving text messages from us, simply respond with the word STOP and you will be unsubscribed from further communication. If you would like to opt-in again, this can be done from within the resident portal. As always, message and data rates may apply for any messages sent to you from us and to us from you.",
              },
              {
                title: "Terms of Use",
                text: "Welcome to Parks on Taylor. By accessing and using this website, you agree to comply with and be bound by the following terms and conditions of use, which govern Parks on Taylor and LiveNJoy Management’s relationship with you in relation to this website.",
              },
              {
                title: "User Eligibility & Accuracy",
                text: "By utilizing our online pre-application, scheduling tools, or contact forms, you agree to provide true, accurate, and current information. Attempting to submit fraudulent information or masquerading as another individual is strictly prohibited.",
              },
              {
                title: "Intellectual Property",
                text: "This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, original digital illustrations, floor plans, and photography. Reproduction or unauthorized scraping of this content for commercial purposes is prohibited without prior written consent.",
              },
              {
                title: "Limitation of Liability",
                text: "The information contained on this website is for general information purposes only. While we endeavor to keep pricing, specials, and unit availability accurate and up to date based on our property management data, real-time availability is subject to change. Neither we nor any third parties provide any warranty or guarantee as to the absolute accuracy or timeliness of the information found on this website for any particular purpose.",
              },

              {
                title: "Fair Housing Statement",
                text: "Parks on Taylor is committed to compliance with all federal, state, and local fair housing laws. We operate under a strict Resident-First Approach and do not discriminate against any person because of race, color, religion, sex, handicap, familial status, national origin, or source of income. In full compliance with Texas Department of Housing and Community Affairs (TDHCA) requirements and Section §394.0026(c)(7), our community proudly welcomes Housing Choice Voucher (Section 8) households. All restricted and non-restricted rental units are marketed openly, and our leasing team works actively with local housing authorities to ensure equal access to clean, safe, and affordable housing in Sherman, TX.",
              },
              {
                title: "Accessibility Statement",
                text: "LiveNJoy Management is dedicated to providing a digital environment that is accessible to all individuals, including those with disabilities. We actively design and maintain the Parks on Taylor website to align with the Web Content Accessibility Guidelines (WCAG) core principles. Our goal is to ensure a frictionless experience for every visitor. If you are experiencing difficulty accessing any content, interactive modules, or online application flows on this website, or if you require assistance with any part of our site, please contact our leasing office at (903) 961-6391 or email us at potmanager@livenjoymgt.com during regular business hours, and we will be happy to assist you.",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeUp}>
                <h3 className="font-[Instrument_Serif] text-[28px] md:text-[34px] text-[#232323] mb-4 transition-all duration-300 hover:text-[#E39B2D]">
                  {item.title}
                </h3>

                <p className="font-[Plus_Jakarta_Sans] text-[15px] md:text-[16px] leading-[2] text-[#5F5F5F]">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* ===== OFFER CTA ===== */}
      <section className="bg-[#f5f2ed] pb-14 px-6 xs:px-6 sm:px-6 md:px-20 lg:px-40 xl:px-40 xxl:px-80 mx-automd:pb-20">
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
