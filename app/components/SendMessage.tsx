"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import { siteConfig } from "../config/content";

export default function SendMessage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      fullName: formData.get("fullName")?.toString().trim() || "",
      email: formData.get("email")?.toString().trim() || "",
      phone: formData.get("phone")?.toString().trim() || "",
      subject: formData.get("subject")?.toString().trim() || "",
      message: formData.get("message")?.toString().trim() || "",
    };

    if (!data.fullName || !data.email || !data.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(data.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (data.phone && !/^[0-9+\-\s()]{8,15}$/.test(data.phone)) {
      toast.error("Please enter a valid phone number.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json().catch(() => null);

      if (res.ok) {
        toast.success(
          result?.message ||
            "Thank you! Your message has been sent successfully.",
        );

        form.reset();
      } else {
        toast.error(result?.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Contact Form Error:", error);

      toast.error("Unable to connect to the server. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

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
                disabled={loading}
                className="w-full rounded-xl border border-[#cfd6e2] px-4 py-3 text-[15px] outline-none transition focus:border-[#1E3872] disabled:cursor-not-allowed disabled:bg-gray-100"
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
                disabled={loading}
                className="w-full rounded-xl border border-[#cfd6e2] px-4 py-3 text-[15px] outline-none transition focus:border-[#1E3872] disabled:cursor-not-allowed disabled:bg-gray-100"
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
                type="tel"
                placeholder="+91 98765 43210"
                disabled={loading}
                className="w-full rounded-xl border border-[#cfd6e2] px-4 py-3 text-[15px] outline-none transition focus:border-[#1E3872] disabled:cursor-not-allowed disabled:bg-gray-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-[12px] font-semibold tracking-[0.12em] text-[#4b5563]">
                SUBJECT
              </label>

              <select
                name="subject"
                disabled={loading}
                className="w-full rounded-xl border border-[#cfd6e2] bg-white px-4 py-3 text-[15px] outline-none transition focus:border-[#1E3872] disabled:cursor-not-allowed disabled:bg-gray-100"
              >
                <option value="">Select a subject</option>
                <option value="Current Resident">Current Resident</option>
                <option value="Future Resident">Future Resident</option>
                <option value="Application Help">Application Help</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-[12px] font-semibold tracking-[0.12em] text-[#4b5563]">
              MESSAGE *
            </label>

            <textarea
              name="message"
              rows={6}
              required
              disabled={loading}
              placeholder="Tell us what you're looking for..."
              className="w-full resize-none rounded-xl border border-[#cfd6e2] px-4 py-3 text-[15px] outline-none transition focus:border-[#1E3872] disabled:cursor-not-allowed disabled:bg-gray-100"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full rounded-xl py-4 text-[17px] font-semibold text-white transition duration-300 ${
              loading
                ? "cursor-not-allowed bg-gray-400"
                : "bg-[#1E3872] hover:bg-[#162b59]"
            }`}
          >
            {loading ? "Sending Message..." : "→ Submit Message"}
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
