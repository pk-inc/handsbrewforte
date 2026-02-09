export default function PartnersRegulators() {
  return (
    <div className="py-6 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-[clamp(16px,4vw,32px)] flex flex-col md:flex-row items-center gap-4 md:gap-8">
        <p className="text-center md:text-left text-xs font-semibold text-slate-400 uppercase tracking-widest whitespace-nowrap">
          Partners & Regulators
        </p>

        <div className="h-8 overflow-hidden relative w-full">
          <div className="animate-scroll-vertical flex flex-col gap-4">
            {/* Original Set */}
            <div className="flex flex-wrap justify-center md:justify-start gap-8 opacity-70 grayscale hover:grayscale-0 transition duration-500">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-semibold text-sm">
                <span className="material-icons text-secondary text-xl">account_balance</span> CBN Recognized
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-semibold text-sm">
                <span className="material-icons text-secondary text-xl">verified</span> Oyo State Licensed
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-semibold text-sm">
                <span className="material-icons text-secondary text-xl">groups</span> ANMI Member
              </div>
            </div>
            {/* Duplicate Set for Seamless Loop */}
            <div className="flex flex-wrap justify-center md:justify-start gap-8 opacity-70 grayscale hover:grayscale-0 transition duration-500">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-semibold text-sm">
                <span className="material-icons text-secondary text-xl">account_balance</span> CBN Recognized
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-semibold text-sm">
                <span className="material-icons text-secondary text-xl">verified</span> Oyo State Licensed
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-semibold text-sm">
                <span className="material-icons text-secondary text-xl">groups</span> ANMI Member
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
