"use client";

import { useEffect, useState } from "react";
import CookieSettings from "@/app/components/CookieSettings";
import Link from "next/link";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const [performance, setPerformance] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const saveConsent = (
    necessary: boolean,
    performanceCookies: boolean,
    marketingCookies: boolean,
  ) => {
    localStorage.setItem(
      "cookieConsent",
      JSON.stringify({
        necessary,
        performance: performanceCookies,
        marketing: marketingCookies,
      }),
    );
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    setPerformance(true);
    setMarketing(true);
    saveConsent(true, true, true);
  };

  const declineCookies = () => {
    setPerformance(false);
    setMarketing(false);
    saveConsent(true, false, false);
  };

  if (!showBanner && !showSettings) return null;

  return (
    <>
      {/* Main Cookie Banner - Compact width (310px) and minimal height spacing */}
      {showBanner && (
        <div className="fixed bottom-5 right-5 z-50 w-full max-w-[310px] rounded-[18px] bg-[#FFFDF5] p-3 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-[#EBE9E0]/40">
          {/* Inner Content Card Box - Reduced height with tight padding */}
          <div className="rounded-[12px] border border-[#EBE9E0] bg-[#F4F3EA] p-3">
            <h2 className="mb-1 text-[12px] font-bold text-[#213A70]">
              Cookies Policy
            </h2>

            <p className="text-[10.5px] leading-[1.45] text-[#5C5A52]">
              We use cookies and tools like Microsoft Clarity to improve your
              browsing experience, analyze site traffic, and support our leasing
              operations. By clicking{" "}
              <span className="font-semibold">'Accept All'</span>, you consent
              to our use of these tools.
              <br />
              View our{" "}
              <Link
                href="/legal"
                className="font-semibold text-gray-600 hover:text-gray-900 transition-colors"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          {/* Action Buttons Block - Slimmer vertical gap and tighter py paddings */}
          <div className="mt-2.5 space-y-1.5">
            <button
              onClick={acceptAll}
              className="w-full rounded-[10px] bg-[#213A70] py-1.5 text-[11px] font-bold text-white transition hover:bg-[#192D59]"
            >
              Accept All Cookies
            </button>

            <button
              onClick={declineCookies}
              className="w-full rounded-[10px] border border-[#213A70] bg-[#FFFDF5] py-1.5 text-[11px] font-bold text-[#213A70] transition hover:bg-gray-50"
            >
              Decline Non-Essential Cookies
            </button>

            <div className="text-center">
              <button
                onClick={() => setShowSettings(true)}
                className="text-[10.5px] font-bold text-[#213A70] tracking-wide hover:opacity-80 transition-opacity"
              >
                Cookies Settings
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Settings Modal */}
      <CookieSettings
        open={showSettings}
        performance={performance}
        marketing={marketing}
        setPerformance={setPerformance}
        setMarketing={setMarketing}
        onClose={() => setShowSettings(false)}
        onSave={() => saveConsent(true, performance, marketing)}
        onAcceptAll={acceptAll}
      />
    </>
  );
}
