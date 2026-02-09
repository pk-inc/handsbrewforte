export const metadata = {
  title: 'About Us - Handsbrew Forte Limited',
  description: 'Learn about Handsbrew Forte Limited, a licensed money lending organization recognized by the CBN since 2014.',
}

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="min-h-[400px] bg-slate-50 dark:bg-slate-900">
        <div className="max-w-[1300px] mx-auto px-[clamp(16px,4vw,32px)]">
          <div className="max-w-800 mx-auto text-center py-20">
            <span className="text-secondary font-semibold uppercase tracking-widest text-sm">Our Story</span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-4 mb-6">Building Wealth Together</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Incorporated in 2014, Handsbrew Forte Limited is a licensed money lending organization recognized by the
              CBN. We bridge the gap between your financial goals and reality.
            </p>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24">
        <div className="max-w-[1300px] mx-auto px-[clamp(16px,4vw,32px)]">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Integrity', description: 'We operate with complete transparency.' },
              { title: 'Excellence', description: 'Exceeding expectations every time.' },
              { title: 'Team Spirit', description: 'Collaborating for shared success.' },
              { title: 'Gratitude', description: 'We appreciate every opportunity to serve.' },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 p-8 hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{value.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="py-24 bg-[#2b426b] text-white">
        <div className="max-w-[1300px] mx-auto px-[clamp(16px,4vw,32px)]">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Investment Philosophy</h2>

          <div className="flex flex-col gap-8 max-w-3xl mx-auto">
            {[
              {
                title: 'Safety of Funds',
                description: 'Your security is our priority. We employ strict risk management policies.',
              },
              {
                title: 'Fair Returns',
                description: 'Competitive interest rates that beat the market.',
              },
              {
                title: 'Liquidity',
                description: 'Access your funds when you need them.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
              >
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="opacity-90">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
