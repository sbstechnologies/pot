export default function ComplianceNotice() {
  return (
    <div className="rounded-2xl border border-[#d8e0ef] bg-[#f5f2ed] px-10 py-6 md:px-12 md:py-8 lg:px-24 lg:py-10">
      <div className="mb-3 flex items-center gap-2">
        <span className="rounded-full bg-[#1E3872] px-3 py-1 text-xs font-semibold text-white">
          Equal Housing Opportunity
        </span>
      </div>

      <p className="text-sm leading-7 text-slate-700">
        Our community proudly welcomes Housing Choice Voucher households. We
        market all available restricted and non-restricted units to voucher
        holders and notify local housing authorities of voucher acceptance,
        operating in full compliance with Texas Section §394.0026(c)(7) and
        affirmative marketing policies.
      </p>
    </div>
  );
}
