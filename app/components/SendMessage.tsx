"use client";
import { siteConfig, handleSubmit } from "@/app/config/content";

export default function SendMessage() {
  return (
    <div className="overflow-hidden rounded-[26px] border border-[#e4e1db] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
      <div className="h-1 w-full bg-gradient-to-r from-[#1E3872] to-[#E39B2D]" />

      <div className="p-6 md:p-10 lg:p-14 xl:p-16 xxl:p-20">
        <h2 className="font-[Instrument_Serif] text-[30px] leading-[1.1] text-[#1f2937] md:text-[40px]">
          Send Us a Message
        </h2>

        <p className="mt-3 max-w-xl text-[16px] leading-[1.6] text-[#4b5563]">
          Questions about availability, pricing, or scheduling a tour? We're
          here to help.
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
  );
}
