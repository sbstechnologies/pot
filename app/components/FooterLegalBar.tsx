import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function FooterLegalBar() {
  return (
    <section className="bg-[#0c1a3a] px-10 md:px-10 lg:px-24  text-white">
      <div className="py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center text-[11px]">
          <span className="text-white/30">
            © 2026 Parks on Taylor · A LiveNJoy Community.
          </span>

          {[
            { label: "Privacy Policy", href: "/" },
            { label: "Terms of Use", href: "/" },
            { label: "Fair Housing", href: "/" },
            { label: "Accessibility", href: "/" },
          ].map((item) => (
            <div key={item.label} className="inline-flex items-center">
              <span className="mx-2 text-white/20">·</span>

              <Link
                href={item.href}
                className="text-white/40 hover:text-white/70 transition-colors"
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="text-[11px] font-semibold text-[#6B8FD4]/60 hover:text-[#6B8FD4] transition-colors">
            Built by the LiveNJoy Development Team →
          </button>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="w-9 h-9 rounded-lg border border-[#1E3872]/40 bg-[#1E3872]/15 flex items-center justify-center hover:bg-[#1E3872]/25 transition-all"
          >
            <ArrowUp size={14} className="text-white/60" />
          </button>
        </div>
      </div>
    </section>
  );
}
