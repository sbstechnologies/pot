import { siteConfig, footerLocation } from "@/app/config/content";
import { Home, MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

import Image from "next/image";
import { headerConfig } from "@/app/config/content";
import DisableInspect from "@/app/components/DisableInspect";

export default function Footer() {
  return (
    <section className="bg-[#0f1e48] px-6 xs:px-6 sm:px-6 md:px-20 lg:px-40 xl:px-40 xxl:px-80 mx-auto py-16 md:py-20 text-white">
      <div className="max-w-[1920px] mx-auto">
        {/* EQUAL 4 COLUMN LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* COLUMN 1 */}
          <div>
            {/* LOGO */}
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[12px] bg-[var(--primary)]">
                <Image
                  src="/images/logo.png"
                  alt={headerConfig.logo.alt_title}
                  width={38}
                  height={38}
                />
              </span>
              <div>
                <h3 className="font-serif text-[20px] leading-none text-white">
                  {siteConfig.name}
                </h3>

                <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-[#4f7fe0] font-semibold font-[Plus_Jakarta_Sans]">
                  A LIVENJOY COMMUNITY
                </p>
              </div>
            </div>

            {/* DESCRIPTION */}
            <p className="text-[15px] leading-[1.9] text-[#8e99ad] mb-8 font-[Plus_Jakarta_Sans]">
              Affordable, safe, and clean living at the intersection of comfort
              and community — in the heart of Sherman, TX.
            </p>

            {/* CONTACT */}
            <div className="space-y-5 text-[#97a3b7] text-[15px] font-[Plus_Jakarta_Sans]">
              <div className="flex items-start gap-3">
                <MapPin
                  size={17}
                  className="text-[#76a1ff] shrink-0 mt-[3px]"
                />

                <span>{siteConfig.address}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={17} className="text-[#76a1ff] shrink-0" />

                <span>{siteConfig.phone}</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={17} className="text-[#76a1ff] shrink-0" />

                <span>{siteConfig.email}</span>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={17} className="text-[#76a1ff] shrink-0 mt-[3px]" />

                <span>{siteConfig.hours}</span>
              </div>

              <div className="flex items-start gap-3">
                <span>{siteConfig.hours1}</span>
              </div>
            </div>

            {/* BUTTON */}
            <a
              href="/contact/"
              className="
                mt-10 inline-flex items-center gap-3
                rounded-full border border-[#24468d]
                bg-[#0d2347]
                px-7 py-4
                text-[15px] font-semibold text-white
                transition hover:bg-[#14315f]
                font-[Plus_Jakarta_Sans]
              "
            >
              Schedule a Private Tour
              <ArrowRight size={15} />
            </a>
          </div>

          {/* COLUMN 2 */}
          <div className="mt-14 lg:ml-20 md:mt-0">
            <h4 className="text-[15px] tracking-[0.18em] text-[#E09428] mb-8 font-[Plus_Jakarta_Sans]">
              EXPLORE
            </h4>

            <ul className="space-y-6 text-[#b2bccd] text-[15px] font-[Plus_Jakarta_Sans]">
              <li>
                <a href="/floor-plans/" className="hover:text-white transition">
                  Floor Plans
                </a>
              </li>

              <li>
                <a href="/gallery/" className="hover:text-white transition">
                  Gallery
                </a>
              </li>

              <li>
                <a href="/#amenities" className="hover:text-white transition">
                  Amenities
                </a>
              </li>

              <li>
                <a
                  href="/#neighborhood"
                  className="hover:text-white transition"
                >
                  Neighborhood
                </a>
              </li>
              <li>
                <a
                  href="/blog/"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Community & Events
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div className="mt-14 lg:ml-20 md:mt-0">
            <h4 className="text-[15px] tracking-[0.18em] text-[#E09428] mb-8 font-[Plus_Jakarta_Sans]">
              LEASING
            </h4>

            <ul className="space-y-6 text-[#b2bccd] text-[15px] font-[Plus_Jakarta_Sans]">
              <li>
                <a
                  href="https://livenjoy.myresman.com/Portal/Applicants/New/POTS?a=1588"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Apply Online
                </a>
              </li>

              <li>
                <a href="/contact/" className="hover:text-white transition">
                  Schedule a Tour
                </a>
              </li>

              <li>
                <a href="/#unit" className="hover:text-white transition">
                  Availability
                </a>
              </li>

              <li>
                <a href="/contact/" className="hover:text-white transition">
                  Pet Policy
                </a>
              </li>

              <li>
                <a href="/contact/" className="hover:text-white transition">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 4 */}
          <div className="lg:mt-0">
            <h4 className="text-[15px] tracking-[0.18em] text-[#E09428] mb-8 font-[Plus_Jakarta_Sans]">
              LOCATION
            </h4>

            {/* MAP */}
            <div className="rounded-[24px] overflow-hidden h-[220px] border border-white/10">
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  siteConfig.address,
                )}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* DISTANCE */}
            <div className="mt-6 space-y-4 text-[15px] font-[Plus_Jakarta_Sans]">
              {footerLocation.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between text-[#b2bccd]"
                >
                  <span>{item.label}</span>

                  <span className="text-[#3b82f6]">{item.distance}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {process.env.NODE_ENV === "production" && <DisableInspect />}
    </section>
  );
}
