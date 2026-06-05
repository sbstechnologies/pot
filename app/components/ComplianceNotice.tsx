export default function ComplianceNotice() {
  return (
    <div className="bg-[#0f1e48] px-6 xs:px-6 sm:px-6 md:px-30 lg:px-60 xl:px-85 xxl:px-80 py-6 md:px-12 md:py-4 lg:px-24 lg:py-10">
      <div className="mx-auto flex max-w-[1920px] flex-col gap-6 rounded-[26px] bg-[#db8d1f] px-8 py-4 md:px-12 md:py-9 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="font-[Instrument_Serif] text-[36px] leading-none text-white md:text-[52px]">
            Equal Housing Opportunity
          </h2>

          <p className="font-[Plus_Jakarta_Sans] mt-3 text-[17px] text-white md:text-[18px]">
            Our community proudly welcomes Housing Choice Voucher households. We
            market all available restricted and non-restricted units to voucher
            holders and notify local housing authorities of voucher acceptance,
            operating in full compliance with Texas Section §394.0026(c)(7) and
            affirmative marketing policies.
          </p>
        </div>

        {/* STYLED BUTTON CONTAINER TO MATCH ATTACHED DESIGN */}
        <div className="shrink-0"></div>
      </div>
    </div>
  );
}
