export default function ValueProposition() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-[1300px] mx-auto px-[clamp(16px,4vw,32px)] mb-16">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
          Why Handsbrew?
        </h2>
        <div className="w-24 h-1 bg-secondary rounded-full" />
      </div>
      <div className="max-w-[1300px] mx-auto px-[clamp(16px,4vw,32px)] grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-xl transition duration-300">
          <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
            <span className="material-icons text-primary dark:text-blue-400 text-3xl">security</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 text-center md:text-left">
            Secure & Regulated
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-center md:text-left">
            Licensed since 2014. Your funds are managed in compliance with CBN and state regulations, ensuring total
            peace of mind.
          </p>
        </div>
        <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-xl transition duration-300">
          <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
            <span className="material-icons text-green-600 dark:text-green-400 text-3xl">trending_up</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 text-center md:text-left">
            Competitive Returns
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-center md:text-left">
            Beat inflation with interest rates that actually make a difference. We offer some of the best rates in the
            market.
          </p>
        </div>
        <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-xl transition duration-300">
          <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
            <span className="material-icons text-orange-600 dark:text-orange-400 text-3xl">schedule</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 text-center md:text-left">
            24h Loan Disbursal
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-center md:text-left">
            Need cash fast? Our salary advance and micro-lease schemes serve you with funds processed within 24 hours.
          </p>
        </div>
      </div>
    </section>
  )
}
