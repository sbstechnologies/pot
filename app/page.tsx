"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import Footer from "./components/Footer";
import LeasePortal from "./components/LeasePortal";
import { articles } from "@/app/config/content";

import PromoCardWidget from "./components/PromoCardWidget";
import Header from "./components/Header";
import HeaderTop from "./components/HeaderTop";
import { Instrument_Serif } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";

import { siteConfig } from "@/app/config/content";

import {
  Wrench,
  Clock,
  Droplets,
  Car,
  Phone,
  PawPrint,
  Shirt,
  Mail,
} from "lucide-react";
import {
  images,
  homePageConfig,
  plans,
  interiorPhotos,
  amenityPhotos,
  type PlanKey,
  type PreviewCategory,
  type AmenityCategory,
} from "@/app/config/content";
import FooterLegalBar from "./components/FooterLegalBar";
import ComplianceNotice from "./components/ComplianceNotice";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export default function Home() {
  const [tab, setTab] = useState("amenities");
  const [reviewIndex, setReviewIndex] = useState(0);

  const reviews = homePageConfig.residentVoices;
  const stories = homePageConfig.stories;
  const amenities = homePageConfig.amenities;

  const [selectedPlan, setSelectedPlan] = useState<PlanKey>("A1");
  const [bedroomType, setBedroomType] = useState<"1bed" | "2bed">("1bed");
  const [previewCategory, setPreviewCategory] =
    useState<PreviewCategory>("Living Room");
  const [amenityCategory, setAmenityCategory] =
    useState<AmenityCategory>("Pool");
  const [storyPage, setStoryPage] = useState(0);
  const totalStoryPages = Math.ceil(stories.length / 3);
  const [showTopBar, setShowTopBar] = useState(true);

  // ── Responsive carousel columns ──────────────────────────────────────────
  const [cols, setCols] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setCols(1);
      else if (window.innerWidth < 1024) setCols(2);
      else setCols(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, articles.length - cols);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset index when cols change so we never sit past the new maxIndex
  useEffect(() => {
    setCurrentIndex((prev) =>
      Math.min(prev, Math.max(0, articles.length - cols)),
    );
  }, [cols]);

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };
  const handleNext = () => {
    if (currentIndex < maxIndex) setCurrentIndex(currentIndex + 1);
  };

  const getAmenityIcon = (title = "") => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes("maintenance"))
      return <Wrench className="w-3 h-3" />;
    if (lowerTitle.includes("parking")) return <Car className="w-3 h-3" />;
    if (lowerTitle.includes("pool")) return <Droplets className="w-3 h-3" />;
    if (lowerTitle.includes("park")) return <PawPrint className="w-3 h-3" />;
    if (lowerTitle.includes("laundry")) return <Shirt className="w-3 h-3" />;
    return null;
  };

  // Card gap in px at each breakpoint (matches gap-4 sm:gap-5 lg:gap-6)
  const cardGap = cols === 1 ? 0 : cols === 2 ? 20 : 24;

  return (
    <>
      {/* ================= HERO SECTION ================= */}

      <section className="relative min-h-screen w-full overflow-hidden">
        <HeaderTop show={showTopBar} setShow={setShowTopBar} />

        <Header showTopBar={showTopBar} />

        <Image
          src={images.home22}
          alt={images.alt26}
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/50" />

        {/* MAIN LAYOUT WRAPPER (Now handles the entire animation entry) */}
        <div className="absolute inset-0 z-[2] flex items-center justify-center">
          <div
            className={`w-full max-w-[1920px] px-6 xs:px-6 sm:px-6 md:px-20 lg:px-40 xl:px-40 xxl:px-80 mx-auto flex flex-col items-center justify-center text-center text-white select-none animate-hero-container ${
              showTopBar ? "pt-20 md:pt-24" : "pt-12 md:pt-16"
            }`}
          >
            {/* 1. TOP BADGE STRIP */}
            <div className="mb-8 flex items-center gap-4 w-full max-w-[900px] justify-center">
              <div className="h-px flex-1 max-w-[72px] bg-[#F5F2ED]/15" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F5F2ED]/50">
                PARKS ON TAYLOR • SHERMAN, TX • NOW LEASING
              </span>
              <div className="h-px flex-1 max-w-[72px] bg-[#F5F2ED]/15" />
            </div>

            {/* 2. HERO HEADING */}
            <h1 className="font-['Instrument_Serif',Georgia,serif] text-[clamp(3rem,7.3vw,9.3rem)] leading-[1.05] tracking-[-0.03em] text-[#F5F2ED]">
              Affordable, Safe, and
              <br />
              <em className="inline-block italic text-[#E09428]/90">
                Clean Living in Sherman.
              </em>
            </h1>

            {/* 3. DIVIDER */}
            <div className="my-6 flex items-center gap-2.5">
              <div className="h-px w-[52px] bg-[#E09428]/45" />
              <div className="h-1 w-1 rounded-full bg-[#E09428]/60" />
              <div className="h-1 w-1 rounded-full bg-[#E09428]/35" />
              <div className="h-1 w-1 rounded-full bg-[#E09428]/60" />
              <div className="h-px w-[52px] bg-[#E09428]/45" />
            </div>

            {/* 4. SUBTEXT */}
            <p className="text-[clamp(12px,1.3vw,15px)] leading-[1.72] text-[#F5F2ED]/70 mb-10 max-w-[500px]">
              Responsive management and a community you can trust. Conveniently
              located near Fairway Park.
            </p>

            {/* 5. CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-[320px] sm:max-w-none">
              <a
                href="/#unit"
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3 rounded-full bg-[#1e3872] text-[#f5f2ed] text-[14px] font-bold shadow-[rgba(30,56,114,0.5)_0px_4px_22px] transition duration-300 hover:brightness-110"
              >
                <span>View Available Units</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>

              <a
                href="/contact/"
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-[#f5f2ed] text-[14px] font-semibold transition duration-300 hover:bg-white/10"
              >
                Schedule a Tour
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LEASE PORTAL ================= */}
      <div className="relative z-30 -mt-10 -mb-16 px-6 xs:px-6 sm:px-6 md:px-30 lg:px-60  xl:px-85 xxl:px-80">
        <div className="max-w-[1920px] mx-auto">
          <LeasePortal />
        </div>
      </div>

      {/* ================= UNIT OVERVIEW ================= */}
      <section
        id="unit"
        className="bg-[#f5f2ee] px-6 xs:px-6 sm:px-6 md:px-20 lg:px-40 xl:px-40 xxl:px-80 mx-autopt-24 sm:pt-28 md:pt-32 pb-10 sm:pb-12 md:pb-16 overflow-x-hidden"
      >
        <div className="max-w-[1920px] mx-auto">
          {/* TOP TEXT ROW */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-start">
            <div>
              <p className="text-[11px] sm:text-xs tracking-[2px] sm:tracking-[3px] uppercase text-[#50627a] mb-2 sm:mb-3 font-semibold font-[Plus_jakarta_Sans]">
                UNIT OVERVIEW
              </p>
              <h2 className="text-[30px] sm:text-[46px] md:text-[64px] leading-[0.95] font-[Instrument_Serif] text-[#2d3230]">
                Unified Living Hub
              </h2>
            </div>
            <p className="text-[15px] sm:text-base md:text-[18px] text-[#5a6260] leading-relaxed max-w-[760px] md:pt-2 font-[Plus_Jakarta_Sans]">
              Explore your future home with detailed floor plans, interior and
              community photographs.
            </p>
          </div>

          {/* ORANGE PROMO STRIP — stack at sm, row at md+ */}
          <div className="mt-8 bg-gradient-to-br from-[#e09428] to-[#c87818] rounded-[16px] p-4 sm:p-[14px_24px] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 flex-wrap shadow-[0_4px_28px_rgba(224,148,40,0.45)]">
            <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-4">
              <div className="px-3 py-1 rounded-full bg-[#f5f2ee]/20 border border-[#f5f2ee]/35 w-fit">
                <span className="font-[Plus_Jakarta_Sans] text-[10px] font-bold tracking-[0.14em] uppercase text-[#f5f2ee]">
                  Look &amp; Lease Special
                </span>
              </div>
              <div className="flex flex-col xs:flex-row flex-wrap items-start xs:items-center gap-2 sm:gap-3">
                <div className="flex flex-wrap gap-2">
                  <span
                    className="font-[Instrument_Serif] font-bold text-[20px] sm:text-[18px]
    font-size: 20px;
    letter-spacing: -0.02em sm:text-[18px] tracking-[-0.02em] text-[#f5f2ee] letter-spacing: -0.02em; leading-none   px-3 py-1  whitespace-nowrap"
                  >
                    Only $99 Total to Move In
                  </span>
                  <span className="font-[Plus_Jakarta_Sans] text-xs sm:text-[13px] font-semibold text-[#f5f2ee]/80 bg-[#f5f2ee]/15 px-3 py-1 rounded-full whitespace-nowrap">
                    1BR from $799 · A1–A3
                  </span>
                  <span className="font-[Plus_Jakarta_Sans] text-xs sm:text-[13px] font-semibold text-[#f5f2ee]/80 bg-[#f5f2ee]/15 px-3 py-1 rounded-full whitespace-nowrap">
                    2BR from $999 · B1–B3
                  </span>
                </div>
              </div>
            </div>
            <div className="w-fit">
              <a
                href="tel:9039616391"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#f5f2ee] text-[#a85e48] font-[Plus_Jakarta_Sans] text-[13px] font-bold decoration-none shrink-0 shadow-[0_2px_12px_rgba(0,0,0,0.14)] whitespace-nowrap transition-transform active:scale-[0.98]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                (903) 961-6391
              </a>
            </div>
          </div>

          {/* FILTER ROW */}
          <div className="mt-6 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4 font-[Plus_Jakarta_Sans]">
            {/* BEDROOM TYPE TABS */}
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setBedroomType("1bed");
                  setSelectedPlan("A1");
                }}
                className={`min-w-[130px] sm:min-w-[145px] rounded-[18px] border px-4 sm:px-5 py-3 sm:py-4 text-left transition ${
                  bedroomType === "1bed"
                    ? "bg-[#1e3872] border-[#1e3872] text-white shadow-[0_8px_20px_rgba(30,56,114,0.22)]"
                    : "bg-[#ece8e1] border-[#d7d1c7] text-[#2d3230]"
                }`}
              >
                <span className="block text-[14px] sm:text-[16px] font-semibold">
                  1 Bedroom
                </span>
                <span className="block text-[11px] sm:text-[13px] mt-1 opacity-85">
                  from $799/mo
                </span>
              </button>
              <button
                onClick={() => {
                  setBedroomType("2bed");
                  setSelectedPlan("B1");
                }}
                className={`min-w-[140px] sm:min-w-[155px] rounded-[18px] border px-4 sm:px-5 py-3 sm:py-4 text-left transition ${
                  bedroomType === "2bed"
                    ? "bg-[#1e3872] border-[#1e3872] text-white shadow-[0_8px_20px_rgba(30,56,114,0.22)]"
                    : "bg-[#ece8e1] border-[#d7d1c7] text-[#2d3230]"
                }`}
              >
                <span className="block text-[14px] sm:text-[16px] font-semibold">
                  2 Bedrooms
                </span>
                <span className="block text-[11px] sm:text-[13px] mt-1 opacity-85">
                  from $999/mo
                </span>
              </button>
            </div>

            {/* PLAN PILLS */}
            <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden font-[Plus_Jakarta_Sans]">
              {bedroomType === "1bed" ? (
                <>
                  {(["A1", "A2", "A3"] as const).map((plan) => (
                    <button
                      key={plan}
                      onClick={() => setSelectedPlan(plan)}
                      className={`shrink-0 rounded-full border px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm whitespace-nowrap transition ${
                        selectedPlan === plan
                          ? "border-[#1e3872] text-[#1e3872] bg-white font-semibold"
                          : "border-[#cfc8bc] text-[#5a6260] bg-transparent"
                      }`}
                    >
                      <span className="font-semibold mr-1.5">{plan}</span>
                      <span>{plan === "A1" ? "625 sq ft" : "724 sq ft"}</span>
                      <span className="ml-2 font-semibold">
                        {plan === "A1" ? "$799/mo" : "$849/mo"}
                      </span>
                    </button>
                  ))}
                </>
              ) : (
                <>
                  {(["B1", "B2", "B3"] as const).map((plan) => (
                    <button
                      key={plan}
                      onClick={() => setSelectedPlan(plan)}
                      className={`shrink-0 rounded-full border px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm whitespace-nowrap transition ${
                        selectedPlan === plan
                          ? "border-[#1e3872] text-[#1e3872] bg-white font-semibold"
                          : "border-[#cfc8bc] text-[#5a6260] bg-transparent"
                      }`}
                    >
                      <span className="font-semibold mr-1.5">{plan}</span>
                      <span>
                        {plan === "B1"
                          ? "850 sq ft"
                          : plan === "B2"
                            ? "886 sq ft"
                            : "1,003 sq ft"}
                      </span>
                      <span className="ml-2 font-semibold">
                        {plan === "B1"
                          ? "$999/mo"
                          : plan === "B2"
                            ? "$1,049/mo"
                            : "$1,099/mo"}
                      </span>
                    </button>
                  ))}
                </>
              )}
            </div>
          </div>

          {/* MAIN TWO-CARD LAYOUT */}
          <div className="mt-6 grid xl:grid-cols-[1.55fr_1fr] gap-5 sm:gap-7 items-stretch">
            {/* LEFT CARD */}
            <div className="rounded-[20px] sm:rounded-[26px] border border-[#ddd7cc] bg-[#fbfaf7] overflow-hidden shadow-[0_2px_8px_rgba(26,29,27,0.04)]">
              {/* TOP */}
              <div className="flex items-start justify-between gap-4 px-5 sm:px-6 md:px-7 py-4 sm:py-5 border-b border-[#ddd7cc]">
                <div>
                  <p className="text-[11px] tracking-[0.14em] uppercase text-[#5f6981] font-semibold mb-2">
                    {plans[selectedPlan].title}
                  </p>
                  <h3 className="font-[Instrument_Serif] text-[24px] sm:text-[28px] md:text-[36px] leading-none text-[#2d3230]">
                    {plans[selectedPlan].bed}, {plans[selectedPlan].bath}
                  </h3>
                </div>
                <div className="shrink-0 bg-[#1e3872] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-[16px] sm:text-[18px] md:text-[20px] font-semibold shadow-[0_8px_18px_rgba(30,56,114,0.22)] font-[Plus_Jakarta_Sans]">
                  {plans[selectedPlan].price}
                </div>
              </div>

              {/* FLOOR PLAN IMAGE */}
              <div className="relative h-[260px] sm:h-[360px] lg:h-[500px] border-b border-[#ddd7cc] bg-[white]">
                <Image
                  src={plans[selectedPlan].img}
                  alt={
                    selectedPlan === "A1"
                      ? images.alt1
                      : selectedPlan === "A2"
                        ? images.alt8
                        : selectedPlan === "A3"
                          ? images.alt9
                          : selectedPlan === "B1"
                            ? images.alt10
                            : selectedPlan === "B2"
                              ? images.alt11
                              : images.alt12
                  }
                  fill
                  sizes="(max-width: 1280px) 100vw, 60vw"
                  className="object-contain p-4 sm:p-6 md:p-8"
                />
              </div>

              {/* STATS */}
              <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-[#ddd7cc]">
                {[
                  {
                    label: "Bedroom",
                    value: plans[selectedPlan].bed,
                    border: "border-r",
                  },
                  {
                    label: "Bathroom",
                    value: plans[selectedPlan].bath,
                    border: "sm:border-r",
                  },
                  {
                    label: "Area",
                    value: plans[selectedPlan].area,
                    border: "border-t sm:border-t-0 border-r",
                  },
                  {
                    label: "Available",
                    value: "Jun 1",
                    border: "border-t sm:border-t-0",
                  },
                ].map(({ label, value, border }) => (
                  <div
                    key={label}
                    className={`py-4 sm:py-5 text-center ${border} border-[#ddd7cc]`}
                  >
                    <p className="font-[Instrument_Serif] text-[18px] sm:text-[20px] text-[#2d3230]">
                      {value}
                    </p>
                    <p className="text-[10px] sm:text-[11px] tracking-[0.12em] uppercase text-[#50627a] font-semibold mt-1">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              {/* FEATURES */}
              <div className="px-5 sm:px-6 md:px-7 py-4 sm:py-5 font-[Plus_Jakarta_Sans]">
                <p className="text-[11px] tracking-[0.16em] uppercase text-[#50627a] font-semibold mb-4">
                  Plan Features
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {[
                    {
                      title: "Highlights",
                      items: homePageConfig.planFeatures.highlights,
                    },
                    {
                      title: "Kitchen",
                      items: homePageConfig.planFeatures.kitchen,
                    },
                    {
                      title: "Interior",
                      items: homePageConfig.planFeatures.interior,
                    },
                  ].map(({ title, items }) => (
                    <div key={title}>
                      <p className="text-[12px] tracking-[0.12em] uppercase text-[#1e3872] font-semibold mb-3">
                        {title}
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-[13px] sm:text-[14px] text-[#5A6260]">
                        {items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="h-full rounded-[20px] sm:rounded-[26px] border border-[#ddd7cc] bg-[#fbfaf7] overflow-hidden shadow-[0_2px_8px_rgba(26,29,27,0.04)] flex flex-col font-[Plus_Jakarta_Sans]">
              {/* TAB SWITCH */}
              <div className="p-3 border-b border-[#ddd7cc] bg-[#f3f0ea]">
                <div className="grid grid-cols-2 rounded-[18px] bg-[#eceff3] p-1">
                  {["photos", "amenities"].map((t) => (
                    <button
                      key={t}
                      onClick={() => setTab(t)}
                      className={`rounded-[14px] py-2.5 sm:py-3 text-[14px] sm:text-[15px] font-semibold transition ${
                        tab === t
                          ? "bg-[#1e3872] text-white shadow-[0_4px_12px_rgba(30,56,114,0.18)]"
                          : "text-[#5a6260]"
                      }`}
                    >
                      {t === "photos" ? "Interior Photos" : "Amenities"}
                    </button>
                  ))}
                </div>
              </div>

              {/* SECONDARY FILTERS */}
              <div className="px-3 sm:px-4 py-3 border-b border-[#ddd7cc] bg-[#fbfaf7]">
                <div className="flex gap-2 sm:gap-3 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {tab === "photos"
                    ? (
                        [
                          "Living Room",
                          "Bedroom",
                          "Kitchen",
                          "Bathroom",
                        ] as const
                      ).map((item) => (
                        <button
                          key={item}
                          onClick={() => setPreviewCategory(item)}
                          className={`shrink-0 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 text-[13px] sm:text-[15px] border transition ${
                            previewCategory === item
                              ? "bg-[#1e3872] text-white border-[#1e3872]"
                              : "bg-[#eceff3] text-[#5a6260] border-[#cbd2d9]"
                          }`}
                        >
                          {item}
                        </button>
                      ))
                    : (["Pool", "Parking", "Park", "Laundry"] as const).map(
                        (item) => (
                          <button
                            key={item}
                            onClick={() => setAmenityCategory(item)}
                            className={`shrink-0 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 text-[13px] sm:text-[15px] border transition ${
                              amenityCategory === item
                                ? "bg-[#1e3872] text-white border-[#1e3872]"
                                : "bg-[#eceff3] text-[#5a6260] border-[#cbd2d9]"
                            }`}
                          >
                            {item}
                          </button>
                        ),
                      )}
                </div>
              </div>

              {/* IMAGE */}
              <div className="relative flex-1 min-h-[320px] sm:min-h-[420px] bg-[#ece8e1]">
                <Image
                  src={
                    tab === "photos"
                      ? interiorPhotos[previewCategory]
                      : amenityPhotos[amenityCategory]
                  }
                  alt={
                    tab === "photos"
                      ? previewCategory === "Living Room"
                        ? images.alt15
                        : previewCategory === "Bedroom"
                          ? images.alt4
                          : previewCategory === "Kitchen"
                            ? images.alt16
                            : images.alt2
                      : amenityCategory === "Pool"
                        ? images.alt13
                        : amenityCategory === "Parking"
                          ? images.alt14
                          : amenityCategory === "Park"
                            ? images.alt25
                            : amenityCategory === "Laundry"
                              ? images.alt25
                              : images.alt19
                  }
                  fill
                  sizes="(max-width: 1280px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
                  <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 text-[#5a6260] shadow flex items-center justify-center text-lg sm:text-xl">
                    ←
                  </button>
                  <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1e3872] text-white shadow flex items-center justify-center">
                    ⌂
                  </button>
                  <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 text-[#5a6260] shadow flex items-center justify-center text-lg sm:text-xl">
                    →
                  </button>
                </div>
              </div>

              {/* BOTTOM CONTENT */}
              <div className="px-4 sm:px-6 py-4 sm:py-5 border-t border-[#ddd7cc] bg-[#fbfaf7]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-[Instrument_Serif] text-[20px] sm:text-[22px] md:text-[28px] leading-none text-[#2d3230]">
                      {plans[selectedPlan].title}
                    </p>
                    <p className="text-[13px] sm:text-[15px] text-[#68706d] mt-2">
                      {plans[selectedPlan].area} · Available Jun 1, 2026
                    </p>
                  </div>
                  <div className="font-[Instrument_Serif] text-[20px] sm:text-[22px] text-[#1e3872] tracking-[-0.02em] whitespace-nowrap">
                    {plans[selectedPlan].price.replace("/mo", "")}
                    <span className="font-[Plus_Jakarta_Sans] text-[11px] sm:text-[12px] text-[#5a6260] font-medium tracking-normal">
                      /mo
                    </span>
                  </div>
                </div>
                <div className="mt-4 sm:mt-6 grid sm:grid-cols-2 gap-3">
                  <a
                    href="/contact/"
                    className="text-center w-full rounded-full border border-[#1e3872] text-[#1e3872] py-3.5 sm:py-4 px-5 text-[14px] sm:text-[15px] font-semibold hover:bg-[#f2f5fb] transition"
                  >
                    Schedule Tour
                  </a>
                  <a
                    href="https://livenjoy.myresman.com/Portal/Applicants/New/POTS?a=1588"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center rounded-full bg-[#1e3872] text-white py-3.5 sm:py-4 px-5 text-[14px] sm:text-[15px] font-semibold shadow-[0_8px_20px_rgba(30,56,114,0.18)] hover:bg-[#15306a] transition"
                  >
                    Apply Now →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM LINE */}
          <div className="hidden md:flex items-center gap-6 mt-12 text-[#9ba9bf]">
            <div className="h-px bg-[#d8dce2] flex-1" />
            <span className="text-[12px] tracking-[0.22em] uppercase font-semibold whitespace-nowrap font-[Plus_Jakarta_Sans]">
              Parks on Taylor · Unit Overview
            </span>
            <div className="h-px bg-[#d8dce2] flex-1" />
          </div>
        </div>
      </section>

      {/* ================= AMENITIES ================= */}
      <section
        id="amenities"
        className="bg-[#0c2340]  px-6 xs:px-6 sm:px-6 md:px-20 lg:px-40 xl:px-40 xxl:px-80 mx-auto py-14 md:py-20"
      >
        <div className="max-w-[1920px] mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-14 mb-10 md:mb-12">
            <div>
              <p className="font-[Plus_Jakarta_Sans] text-[12px] md:text-[13px] tracking-[0.24em] uppercase text-[#E09428] mb-4 font-semibold">
                Amenities
              </p>
              <h2 className="font-[Instrument_Serif] text-[36px] sm:text-[48px] md:text-[64px] lg:text-[72px] text-white leading-[0.95] tracking-[-0.03em]">
                Everything You Need,
                <br />
                Right Where You Live
              </h2>
            </div>
            <div className="md:flex md:items-center">
              <p className="font-[Plus_Jakarta_Sans] text-[15px] sm:text-[16px] md:text-[19px] leading-[1.75] text-[#9faac0] max-w-[680px]">
                Responsive maintenance and convenient on-site management are the
                backbone of life here — backed by covered parking, two pools,
                and a full appliance package to keep everyday living simple and
                reliable.
              </p>
            </div>
          </div>

          {/* AMENITY GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {amenities.map((item, i) => (
              <div
                key={i}
                className="relative h-[240px] sm:h-[280px] md:h-[310px] rounded-[20px] sm:rounded-[26px] overflow-hidden group shadow-md hover:shadow-[0_24px_70px_rgba(0,0,0,0.45)] hover:-translate-y-1 transition-all duration-300 ease-in-out"
              >
                <Image
                  src={item.img}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-[#0c2340]/0 group-hover:bg-[#0c2340]/25 transition duration-300" />
                <div className="font-[Plus_Jakarta_Sans] absolute top-4 sm:top-5 left-4 sm:left-5 z-10 bg-white/15 backdrop-blur-md text-white text-[10px] sm:text-xs font-semibold tracking-[0.13em] uppercase px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-1.5 border border-white/15">
                  {getAmenityIcon(item.title)}
                  <span>{item.tag}</span>
                </div>
                <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6 right-5 sm:right-6 z-10">
                  <p className="font-[Instrument_Serif] text-white text-[24px] sm:text-[28px] md:text-[34px] leading-none tracking-[-0.03em]">
                    {item.title}
                  </p>
                  <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    <p className="font-[Plus_Jakarta_Sans] text-[13px] sm:text-[14px] md:text-[15px] leading-[1.7] text-white/75 mt-3 max-w-[95%]">
                      {item.title === "Responsive Maintenance" &&
                        "Submit a request and our on-site maintenance team gets to work fast, professional, and hassle-free so your home stays in great shape."}
                      {item.title === "Convenient On-site Management" &&
                        "Our leasing office is right here in the community with real people, real answers, and support available throughout the week."}
                      {item.title === "Swimming Pools" &&
                        "Two clean, well-maintained pools with a sundeck and relaxing seating areas to cool off and unwind after a long day."}
                      {item.title === "Covered Parking" &&
                        "Reserved covered parking helps protect your vehicle from harsh weather, heat, and everyday wear."}
                      {item.title === "Dog Park" &&
                        "A dedicated fenced dog park gives pets plenty of space to run, play, and socialize close to home."}
                      {item.title === "On-Site Laundry" &&
                        "Clean and convenient laundry facilities are available on-site, just steps away from your apartment."}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ALSO INCLUDED */}
          <div className="mt-8 sm:mt-9 md:mt-10 rounded-[16px] sm:rounded-[18px] bg-[#112a4d] border border-white/10 px-4 sm:px-5 md:px-7 py-5 sm:py-6 md:py-7">
            <div className="flex flex-col lg:flex-row lg:items-start gap-4 sm:gap-5 lg:gap-7">
              <p className="font-[Plus_Jakarta_Sans] text-[12px] tracking-[0.24em] uppercase text-[#5f86c8] font-semibold whitespace-nowrap pt-2">
                Also Included
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {homePageConfig.alsoIncluded.map((item, i) => (
                  <span
                    key={i}
                    className="font-[Plus_Jakarta_Sans] inline-flex items-center gap-2 rounded-full border border-[#284a7a] bg-[#112f58] px-3 sm:px-4 py-1.5 sm:py-2 text-[13px] sm:text-[14px] md:text-[15px] font-medium text-[#c8d1df]"
                  >
                    <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#4778bd] text-[9px] text-[#7fb2ff]">
                      ✓
                    </span>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LOCATION INTRO ================= */}
      <section
        id="neighborhood"
        className="bg-[#f1eee9]  px-6 xs:px-6 sm:px-6 md:px-20 lg:px-40 xl:px-40 xxl:px-80 mx-auto py-12 sm:py-14 md:py-20"
      >
        <div className="max-w-[1920px] mx-auto grid md:grid-cols-2 gap-8 sm:gap-10 items-center">
          <div>
            <p className="font-[Plus_Jakarta_Sans] text-xs tracking-[3px] uppercase text-[#7b7f7d] mb-4 font-bold">
              Location · Sherman, TX
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-[Instrument_Serif] text-[#2d3230] leading-[1.2]">
              Fall in Love <br />
              With the Location.
            </h2>
          </div>
          <p className="font-[Plus_Jakarta_Sans] text-sm md:text-base text-[#5a6260] leading-relaxed max-w-xl">
            Parks on Taylor is literally across the street from Fairway Park and
            its beloved Splash Pad — and just 5 minutes from Sherman Town
            Center's restaurants, retail, and entertainment. The address sells
            itself.
          </p>
        </div>
      </section>

      {/* ================= LOCATION MAP + DESTINATIONS ================= */}
      <section className="bg-[#f1eee9] px-6 xs:px-6 sm:px-6 md:px-20 lg:px-40 xl:px-40 xxl:px-80 mx-autopb-14 sm:pb-16">
        <div className="max-w-[1920px] mx-auto grid md:grid-cols-2 gap-6 sm:gap-8 items-start">
          {/* MAP */}
          <div className="relative h-[280px] sm:h-[350px] md:h-[520px] rounded-2xl sm:rounded-3xl overflow-hidden border bg-[#f3efe8]">
            <div className="absolute inset-0">
              <iframe
                title="Parks on Taylor Location Map"
                src="https://www.google.com/maps?q=1200%20West%20Taylor%20Street%2C%20Sherman%2C%20TX%2075092&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="absolute inset-0 bg-[#f5f2ee]/20 pointer-events-none" />
            </div>
            <div className="absolute right-4 sm:right-6 top-4 sm:top-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center shadow">
              <span className="text-xs font-semibold text-[#1e3872]">N</span>
            </div>
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-[11px] text-[#5a6260]">
              <div className="flex mb-1">
                <div className="w-10 sm:w-14 h-2 bg-[#1e3872]" />
                <div className="w-6 sm:w-8 h-2 bg-[#c8d0db]" />
              </div>
              <div className="flex gap-4 sm:gap-6">
                <span>0</span>
                <span>0.5</span>
                <span>1 mi</span>
              </div>
            </div>
          </div>

          {/* DESTINATIONS */}
          <div className="space-y-5 sm:space-y-6">
            <div>
              <p className="font-[Plus_Jakarta_Sans] text-xs font-bold tracking-[2px] uppercase text-[#7b7f7d] mb-4">
                Key Destinations
              </p>
              <div className="space-y-3">
                {homePageConfig.keyDestinations.map((item) => {
                  const isFairwayPark = item.title
                    .toLowerCase()
                    .includes("fairway");
                  const isTownCenter = item.title
                    .toLowerCase()
                    .includes("town center");
                  const isHomeBase = item.title
                    .toLowerCase()
                    .includes("taylor");
                  const isFeatured = isFairwayPark || isTownCenter;

                  return (
                    <div
                      key={item.title}
                      className="bg-[#FDFCF0]/40 rounded-xl sm:rounded-2xl p-3 sm:p-[14px_18px] flex items-center justify-between border border-[#e3dfd8] shadow-[0_2px_8px_rgba(0,0,0,0.01)]"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        {isFairwayPark ? (
                          <div className="w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] rounded-[14px] sm:rounded-[18px] overflow-hidden shrink-0 border border-black/[0.04]">
                            <img
                              src="https://images.unsplash.com/photo-1696359668923-75dc8b0ee35f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200"
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ) : isTownCenter ? (
                          <div className="w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] rounded-[14px] sm:rounded-[18px] overflow-hidden shrink-0 border border-black/[0.04]">
                            <img
                              src="https://images.unsplash.com/photo-1631330200636-dea9b13ca2f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200"
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ) : isHomeBase ? (
                          <div className="w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] bg-[#dbe2ef]/50 border border-[#1e3872]/15 rounded-[14px] sm:rounded-[18px] flex items-center justify-center shrink-0 text-[#1e3872]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                              <polyline points="9 22 9 12 15 12 15 22" />
                            </svg>
                          </div>
                        ) : (
                          <div className="w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] bg-[#dbe2ef]/50 border border-[#1e3872]/15 rounded-[14px] sm:rounded-[18px] flex items-center justify-center shrink-0 text-[#1e3872]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                              <path d="M3 6h18" />
                              <path d="M16 10a4 4 0 0 1-8 0" />
                            </svg>
                          </div>
                        )}
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <p className="font-[Plus_Jakarta_Sans] font-bold text-[14px] sm:text-[16px] text-[#1a211f] tracking-tight leading-tight">
                              {item.title}
                            </p>
                            {isFeatured && (
                              <span
                                className={`font-[Plus_Jakarta_Sans] text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full border ${
                                  isTownCenter
                                    ? "text-[#e09428] bg-[#fff6ed] border-[#e09428]/20"
                                    : "text-[#2b7be0] bg-[#f0f7ff] border-[#2b7be0]/20"
                                }`}
                              >
                                Featured
                              </span>
                            )}
                          </div>
                          <p className="font-[Plus_Jakarta_Sans] text-xs text-[#7b7f7d] mt-0.5">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>

                      <div className="text-right shrink-0 ml-2 sm:ml-3">
                        <span
                          className={`font-[Plus_Jakarta_Sans] text-[11px] sm:text-xs font-medium px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full whitespace-nowrap inline-flex items-center gap-1 border ${
                            isHomeBase
                              ? "bg-[#dbe2ef] text-[#1e3872] border-[#1e3872]/10"
                              : isFairwayPark
                                ? "bg-[#e3edfa] text-[#2b7be0] border-[#2b7be0]/10"
                                : item.title.toLowerCase().includes("commons")
                                  ? "bg-[#e2eaf4] text-[#2a5a8f] border-[#2a5a8f]/10"
                                  : "bg-[#fef4e6] text-[#e09428] border-[#e09428]/10"
                          }`}
                        >
                          {isHomeBase && (
                            <svg
                              className="w-3 h-3 shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              strokeWidth="2.5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                              />
                            </svg>
                          )}
                          {isFairwayPark && (
                            <svg
                              className="w-3 h-3 shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              strokeWidth="2.5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                              />
                            </svg>
                          )}
                          {item.title.toLowerCase().includes("commons") && (
                            <svg
                              className="w-3 h-3 shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              strokeWidth="2.5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                              />
                            </svg>
                          )}
                          {isTownCenter && (
                            <svg
                              className="w-3 h-3 shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              strokeWidth="2.5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                              />
                            </svg>
                          )}
                          {item.badge}
                        </span>
                        {isFairwayPark && (
                          <p className="hidden md:block font-[Plus_Jakarta_Sans] text-[11px] text-[#7b7f7d] mt-1 tracking-tight">
                            Right Across the Street
                          </p>
                        )}
                        {item.title.toLowerCase().includes("commons") && (
                          <p className="hidden md:block font-[Plus_Jakarta_Sans] text-[11px] text-[#7b7f7d] mt-1 tracking-tight">
                            0.9 mi
                          </p>
                        )}
                        {isTownCenter && (
                          <p className="hidden md:block font-[Plus_Jakarta_Sans] text-[11px] text-[#7b7f7d] mt-1 tracking-tight">
                            1.4 mi
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* NEARBY CHIPS */}
            <div className="pt-4 sm:pt-5 border-t border-[#e3dfd8]">
              <p className="font-[Plus_Jakarta_Sans] text-xs tracking-[1.5px] font-bold uppercase text-[#5a6260] mb-3">
                Nearby Employers &amp; Schools
              </p>
              <div className="flex flex-wrap gap-2">
                {homePageConfig.nearbyPlaces.map((item) => (
                  <span
                    key={item}
                    className="text-[12px] font-semibold px-[13px] sm:px-[15px] py-1.5 sm:py-2 rounded-full bg-[#e8ecf4] text-[#1e3872] font-[Plus_Jakarta_Sans] inline-block border border-black/[0.01]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* PET PILL */}
            <div className="pt-1">
              <span className="font-[Plus_Jakarta_Sans] inline-flex items-center gap-2 text-xs font-bold bg-[#fdf3e7] text-[#d9871e] px-4 py-2.5 rounded-full border border-[#e09428]/15">
                <svg
                  className="w-3.5 h-3.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                >
                  <circle cx="11" cy="4" r="2" />
                  <circle cx="18" cy="8" r="2" />
                  <circle cx="20" cy="16" r="2" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"
                  />
                </svg>
                Pet friendly — cats &amp; dogs welcome
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= RESIDENT VOICES ================= */}
      <section
        id="residents"
        className="bg-[#0c2340]  px-6 xs:px-6 sm:px-6 md:px-20 lg:px-40 xl:px-40 xxl:px-80 mx-auto py-12 md:py-20 text-white overflow-hidden relative"
      >
        <div className="max-w-[900px] mx-auto text-center mb-8 md:mb-10 lg:mb-12 relative z-10">
          <p className="text-[10px] sm:text-xs tracking-[0.16em] uppercase text-[rgba(224,148,40,0.8)] mb-3 font-[Plus_Jakarta_Sans] font-extrabold">
            Resident Voices
          </p>
          <h2
            className={`text-2xl sm:text-3xl md:text-5xl ${instrumentSerif.className} font-normal tracking-tight text-[#f5f2ed] leading-tight`}
          >
            Real Stories. Real Residents.
          </h2>
          <p className="text-xs sm:text-sm md:text-[14px] text-[rgba(245,242,237,0.46)] mt-4 max-w-[480px] mx-auto font-[Plus_Jakarta_Sans] leading-[1.65]">
            We're not asking you to forget the past — we're asking for the
            chance to show what's changed.
          </p>
        </div>

        <div className="w-full max-w-[760px] xl:max-w-[820px] mx-auto relative">
          {/* REVIEW CARD */}
          <div
            className={`${instrumentSerif.className} bg-[rgba(245,242,237,0.04)] border border-[rgba(245,242,237,0.1)] rounded-[20px] sm:rounded-[24px] p-5 sm:p-8 md:p-10 xl:p-[46px] backdrop-blur-[18px] shadow-[0px_24px_64px_rgba(0,0,0,0.36),_inset_0px_1px_0px_rgba(255,255,255,0.05)] relative overflow-hidden`}
          >
            <div
              className={`${instrumentSerif.className} absolute -top-10 -left-10 w-[160px] h-[160px] rounded-full bg-[#1e3872] opacity-60 filter blur-[40px] pointer-events-none`}
            />

            {/* STARS */}
            <div
              className={`${instrumentSerif.className} flex items-center gap-1 mb-4 sm:mb-5`}
            >
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill={
                    i < reviews[reviewIndex].rating ? "#1E3872" : "transparent"
                  }
                  stroke={
                    i < reviews[reviewIndex].rating
                      ? "#1E3872"
                      : "rgba(245,242,237,0.20)"
                  }
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                </svg>
              ))}
              <span className="font-[Plus_Jakarta_Sans] text-[11px] font-semibold text-[rgba(245,242,237,0.38)] ml-1.5">
                {reviews[reviewIndex].rating}.0 / 5
              </span>
            </div>

            {/* QUOTE GLYPH — smaller on mobile */}
            <div className="font-serif text-[3rem] sm:text-[4.5rem] font-normal leading-[0.7] text-[rgba(224,148,40,0.25)] mb-4 select-none tracking-tight">
              &ldquo;
            </div>

            {/* REVIEW TEXT */}
            <p className="text-[14px] sm:text-[16px] md:text-[17px] xl:text-[1.22rem] font-serif italic leading-[1.68] text-[rgba(245,242,237,0.86)] mb-6 sm:mb-7">
              {reviews[reviewIndex].text}
            </p>

            {/* USER INFO */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-5 mt-6 sm:mt-8 font-[Plus_Jakarta_Sans]">
              <div className="flex items-center gap-3">
                <div className="w-[40px] h-[40px] sm:w-[42px] sm:h-[42px] rounded-full bg-[#1e3872] flex items-center justify-center text-[11px] sm:text-[12px] font-extrabold text-white tracking-wide shrink-0 shadow-[0_4px_14px_rgba(30,56,114,0.27)]">
                  {reviews[reviewIndex].initials}
                </div>
                <div>
                  <p className="text-[13px] font-bold text-[#f5f2ed]">
                    {reviews[reviewIndex].name}
                  </p>
                  <p className="text-[11px] text-[rgba(245,242,237,0.45)] mt-0.5">
                    {reviews[reviewIndex].role}
                  </p>
                </div>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[rgba(30,56,114,0.15)] border border-[rgba(100,140,210,0.26)] shrink-0 w-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(100,140,210,0.85)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span className="font-[Plus_Jakarta_Sans] text-[11px] font-bold text-[rgba(100,140,210,0.9)] tracking-wide">
                  {reviews[reviewIndex].years}
                </span>
              </div>
            </div>
          </div>

          {/* DESKTOP NAV */}
          <button
            type="button"
            onClick={() =>
              setReviewIndex(
                (reviewIndex - 1 + reviews.length) % reviews.length,
              )
            }
            className="hidden xl:flex absolute -left-16 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-[rgba(245,242,237,0.14)] bg-[rgba(245,242,237,0.05)] items-center justify-center hover:bg-[rgba(245,242,237,0.15)] transition-all duration-200 z-20 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(245,242,237,0.65)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:stroke-white transition-colors"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => setReviewIndex((reviewIndex + 1) % reviews.length)}
            className="hidden xl:flex absolute -right-16 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-[rgba(245,242,237,0.14)] bg-[rgba(245,242,237,0.05)] items-center justify-center hover:bg-[rgba(245,242,237,0.15)] transition-all duration-200 z-20 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(245,242,237,0.65)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:stroke-white transition-colors"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>

          {/* MOBILE NAV */}
          <div className="flex xl:hidden justify-center items-center gap-4 mt-6">
            <button
              type="button"
              onClick={() =>
                setReviewIndex(
                  (reviewIndex - 1 + reviews.length) % reviews.length,
                )
              }
              className="w-11 h-11 rounded-full border border-[rgba(245,242,237,0.14)] bg-[rgba(245,242,237,0.05)] flex items-center justify-center active:bg-white/10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(245,242,237,0.65)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => setReviewIndex((reviewIndex + 1) % reviews.length)}
              className="w-11 h-11 rounded-full border border-[rgba(245,242,237,0.14)] bg-[rgba(245,242,237,0.05)] flex items-center justify-center active:bg-white/10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(245,242,237,0.65)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* PAGINATION DOTS */}
        <div className="flex justify-center gap-2 mt-6 md:mt-8">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setReviewIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${idx === reviewIndex ? "w-7 bg-[#1e3872]" : "w-2 bg-[rgba(245,242,237,0.18)]"}`}
            />
          ))}
        </div>

        {/* TRUST PROMISES — grid on mobile, flex on sm+ */}
        <div className="mt-8 md:mt-11 pt-6 md:pt-9 border-t border-[rgba(245,242,237,0.07)]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-0 justify-items-start sm:justify-items-center max-w-[860px] mx-auto">
            {[
              {
                icon: (
                  <>
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                    <path d="m9 12 2 2 4-4" />
                  </>
                ),
                label: "Professionally Managed",
                sub: "LiveNJoy Management since 2025",
              },
              {
                icon: (
                  <>
                    <path d="M7 10v12" />
                    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
                  </>
                ),
                label: "Resident-First Approach",
                sub: "Maintenance · Communication · Care",
              },
              {
                icon: (
                  <>
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                    <path d="m9 12 2 2 4-4" />
                  </>
                ),
                label: "Honest & Transparent",
                sub: "No gimmicks — just a better home",
              },
            ].map(({ icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[rgba(30,56,114,0.2)] border border-[rgba(100,140,210,0.24)] flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(100,140,210,0.88)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {icon}
                  </svg>
                </div>
                <div>
                  <p className="font-[Plus_Jakarta_Sans] text-xs font-bold text-[rgba(245,242,237,0.82)]">
                    {label}
                  </p>
                  <p className="font-[Plus_Jakarta_Sans] text-[10px] text-[rgba(245,242,237,0.36)] mt-0.5">
                    {sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ARTICLES CAROUSEL ================= */}
      <section className="w-full bg-[#f5f2ed] py-14 sm:py-16 md:py-20 font-[Plus_Jakarta_Sans] antialiased select-none">
        <div className="mx-auto max-w-[1920px] px-6 xs:px-6 sm:px-6 md:px-20 lg:px-40 xl:px-40 xxl:px-80 mx-auto">
          {/* HEADER */}
          <div className="mb-8 sm:mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#5A6260]">
                Sherman Living Guide
              </p>
              <h2
                className={`${instrumentSerif.className} text-[28px] sm:text-4xl md:text-5xl lg:text-[54px] font-normal leading-[1.1] text-[#2D3230]`}
              >
                Stories from the Neighborhood
              </h2>
            </div>

            {/* CONTROLS */}
            <div className="flex items-center gap-2 sm:gap-3 pb-2 shrink-0">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`flex h-[38px] w-[38px] sm:h-[42px] sm:w-[42px] items-center justify-center rounded-full border border-black/5 transition-all duration-200 ${
                  currentIndex === 0
                    ? "bg-black/[0.02] text-[#2D3230] opacity-20 cursor-default"
                    : "bg-white text-[#1e3872] shadow-sm cursor-pointer hover:bg-white/80 active:scale-95"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex === maxIndex}
                className={`flex h-[38px] w-[38px] sm:h-[42px] sm:w-[42px] items-center justify-center rounded-full transition-all duration-200 ${
                  currentIndex === maxIndex
                    ? "border border-black/5 bg-black/[0.02] text-[#2D3230] opacity-20 cursor-default"
                    : "bg-[#1e3872] text-[#f5f2ed] shadow-[rgba(30,56,114,0.2)_0px_4px_12px] cursor-pointer hover:bg-[#152750] active:scale-95"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
              <div className="mx-1 sm:mx-2 h-5 w-px bg-[#D6D0C8]" />
              <button className="hidden sm:flex items-center gap-1 text-[13px] font-bold text-[#1e3872] hover:underline bg-none border-none cursor-pointer tracking-wide">
                View All{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          {/* CAROUSEL TRACK */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] pb-4"
              style={{
                gap: `${cardGap}px`,
                transform: `translateX(calc(-${currentIndex * (100 / cols)}% - ${(currentIndex * cardGap) / cols}px))`,
              }}
            >
              {articles.map((article) => (
                <div
                  key={article.id}
                  className="shrink-0"
                  style={{
                    width: `calc((100% - ${(cols - 1) * cardGap}px) / ${cols})`,
                  }}
                >
                  <article className="overflow-hidden rounded-[20px] sm:rounded-[24px] bg-[#fdfcfa] border border-[#e5e1dc]/40 shadow-[rgba(30,56,114,0.02)_0px_1px_4px]">
                    <div className="relative h-[200px] sm:h-[240px] overflow-hidden p-2.5 sm:p-3 pb-0">
                      <img
                        className="h-full w-full rounded-[14px] sm:rounded-[16px] object-cover"
                        src={article.image}
                        alt={article.title}
                      />
                      <div
                        className={`absolute left-5 sm:left-6 top-5 sm:top-6 rounded-full px-2.5 sm:px-3 py-1 text-[10px] font-bold tracking-wide ${article.categoryColor}`}
                      >
                        {article.category}
                      </div>
                      <div className="absolute right-5 sm:right-6 top-5 sm:top-6 flex items-center gap-1 rounded-full bg-black/60 px-2 sm:px-2.5 py-1 text-[10px] font-medium text-white/90 backdrop-blur-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        <span className="text-[9px] font-semibold text-white/80">
                          {article.readTime}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col p-4 sm:p-6 pt-4 sm:pt-5">
                      <div className="flex items-center gap-2 mb-3">
                        <div
                          className={`flex h-[20px] w-[20px] sm:h-[22px] sm:w-[22px] shrink-0 items-center justify-center rounded-full text-[8px] font-bold ${article.authorBg}`}
                        >
                          {article.authorInitials}
                        </div>
                        <span className="text-[11px] font-medium text-[#5A6260]">
                          {article.authorName}
                        </span>
                        <span className="text-[11px] text-[#A09890]">·</span>
                        <span className="text-[11px] text-[#A09890]">
                          {article.date}
                        </span>
                      </div>
                      <h3 className="font-serif text-[18px] sm:text-[21px] font-normal leading-[1.25] text-[#2D3230] mb-2 sm:mb-2.5 line-clamp-2 min-h-[44px] sm:min-h-[52px]">
                        {article.title}
                      </h3>
                      <p className="text-[12px] sm:text-[13px] font-light leading-relaxed text-[#5A6260]/90 mb-4 sm:mb-5 line-clamp-2 min-h-[34px] sm:min-h-[38px]">
                        {article.description}
                      </p>
                      <div className="flex items-center gap-1 text-[12px] font-bold text-[#1e3872] cursor-pointer hover:text-[#152750] transition-colors w-fit">
                        <span>Read Article</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="11"
                          height="11"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* PAGINATION DOTS */}
          <div className="mt-5 sm:mt-6 flex justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, dotIndex) => (
              <div
                key={dotIndex}
                onClick={() => setCurrentIndex(dotIndex)}
                className={`h-[7px] rounded-full cursor-pointer transition-all duration-300 ease-out ${
                  currentIndex === dotIndex
                    ? "w-6 bg-[#1e3872]"
                    : "w-[7px] bg-[#C8C3BB] hover:bg-[#C8C3BB]/80"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= LEASING CTA ================= */}
      <section
        id="leasing-cta"
        className="bg-[#0c1a3a] px-6 xs:px-6 sm:px-6 md:px-20 lg:px-40 xl:px-40 xxl:px-80 mx-auto py-16 sm:py-[100px] scroll-mt-[72px] relative overflow-hidden text-white"
      >
        {/* Radial Glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(60% 80%, rgba(30, 56, 114, 0.4) 0%, transparent 70%)",
          }}
        />

        {/* Decorative glyph — scaled per breakpoint */}
        <div className="absolute -right-[40px] sm:-right-[60px] -top-[60px] sm:-top-[80px] font-serif text-[10rem] sm:text-[18rem] lg:text-[28rem] leading-none text-[rgba(245,242,237,0.024)] tracking-[-0.05em] select-none pointer-events-none font-normal">
          P
        </div>

        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-[5.56vw] relative z-10 text-center">
          <p className="font-[Plus_Jakarta_Sans] text-[11px] font-bold tracking-[0.14em] uppercase text-[rgba(224,148,40,0.85)] mb-4">
            Ready to Begin?
          </p>

          <h2
            className={`${instrumentSerif.className} text-[clamp(2rem,5vw,4.2rem)] font-normal leading-[1.06] tracking-[-0.03em] text-[#f5f2ed] mb-5 max-w-[680px] mx-auto`}
          >
            Make Parks on Taylor
            <br />
            <span className="text-[rgba(245,242,237,0.6)] italic">
              Your Home
            </span>
          </h2>

          <p className="font-[Plus_Jakarta_Sans] text-[14px] sm:text-[16px] leading-[1.65] text-[rgba(245,242,237,0.55)] mb-8 sm:mb-11 max-w-[480px] mx-auto">
            Start your application online or schedule a private tour with our
            leasing team &mdash; we're available 7 days a week.
          </p>

          {/* CTA BUTTONS — stack on mobile */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-3.5 flex-wrap mb-10 sm:mb-12 px-4 sm:px-0">
            <a
              href="https://livenjoy.myresman.com/Portal/Applicants/New/POTS?a=1588"
              target="_blank"
              className="flex items-center justify-center gap-2 px-8 sm:px-9 py-4 sm:py-[15px] rounded-full bg-[#1e3872] text-[#f5f2ed] font-[Plus_Jakarta_Sans] text-[14px] sm:text-[15px] font-bold cursor-pointer shadow-[rgba(30,56,114,0.5)_0px_4px_24px] tracking-[0.01em] border-none outline-none hover:opacity-95 transition-opacity"
            >
              Apply Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a
              href="/contact/"
              className="flex items-center justify-center gap-2 px-8 sm:px-9 py-4 sm:py-[15px] rounded-full bg-transparent text-[rgba(245,242,237,0.85)] font-[Plus_Jakarta_Sans] text-[14px] sm:text-[15px] font-semibold border-[1.5px] border-[rgba(245,242,237,0.25)] cursor-pointer tracking-[0.01em] hover:bg-white/[0.03] transition-colors"
            >
              Schedule Private Tour
            </a>
          </div>

          {/* CONTACT INFO — stack on mobile */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 flex-wrap">
            <div className="flex items-center gap-3">
              <Phone size={17} className="text-[#76a1ff] shrink-0" />

              <span className="font-[Plus_Jakarta_Sans] text-[13px] text-[rgba(245,242,237,0.55)]">
                {siteConfig.phone}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={17} className="text-[#76a1ff] shrink-0" />

              <span className="font-[Plus_Jakarta_Sans] text-[13px] text-[rgba(245,242,237,0.55)]">
                {siteConfig.email}
              </span>
            </div>

            <div className="flex items-start gap-3">
              <Clock size={17} className="text-[#76a1ff] shrink-0 mt-[3px]" />

              <span className="font-[Plus_Jakarta_Sans] text-[13px] text-[rgba(245,242,237,0.55)]">
                {siteConfig.hours}
              </span>
            </div>

            <div className="flex items-start gap-3">
              <span className="font-[Plus_Jakarta_Sans] text-[13px] text-[rgba(245,242,237,0.55)]">
                {siteConfig.hours1}
              </span>
            </div>
          </div>
        </div>
      </section>

      <PromoCardWidget />

      <Footer />
      <ComplianceNotice />
      <FooterLegalBar />
    </>
  );
}
