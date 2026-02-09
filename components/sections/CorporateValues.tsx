export default function CorporateValues() {
  const values = [
    {
      icon: 'verified_user',
      title: 'Integrity',
      description: 'We uphold honesty and transparency in all our dealings, building trust with every interaction.',
    },
    {
      icon: 'emoji_events',
      title: 'Excellence',
      description: 'We strive for the highest standards in service delivery, continuously improving to exceed expectations.',
    },
    {
      icon: 'groups',
      title: 'Team Spirit',
      description: 'We collaborate and support each other, fostering a culture of unity and shared success.',
    },
    {
      icon: 'favorite',
      title: 'Gratitude',
      description: 'We appreciate our clients and partners, recognizing that our success is built on their trust.',
    },
  ]

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-[1300px] mx-auto px-[clamp(16px,4vw,32px)]">
        <div className="mb-16">
          <h3 className="text-secondary font-semibold tracking-wider uppercase mb-2">What We Stand For</h3>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Our Corporate Values</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-primary hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <span className="material-icons text-primary group-hover:text-white text-3xl transition-colors duration-300">
                  {value.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{value.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
