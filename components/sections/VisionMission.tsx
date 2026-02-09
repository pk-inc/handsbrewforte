export default function VisionMission() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950" id="about">
      <div className="max-w-[1300px] mx-auto px-[clamp(16px,4vw,32px)]">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 bg-slate-900 text-white p-12 lg:p-16 flex flex-col justify-center relative overflow-hidden group rounded-2xl">
            <div
              className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-6">
                <span className="material-icons text-white">visibility</span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                To be a one-stop financial services solution hub providing world-class financial services in every
                African market. We envision a future where financial freedom is accessible to all.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 bg-slate-50 dark:bg-slate-800 p-12 lg:p-16 flex flex-col justify-center relative rounded-2xl">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <span className="material-icons text-9xl text-primary dark:text-white">track_changes</span>
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white dark:bg-slate-700 shadow-md rounded-lg flex items-center justify-center mb-6 text-secondary">
                <span className="material-icons">flag</span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                To provide excellent services to our internal and external customers every time. We are committed to
                integrity, transparency, and sustainable growth for our partners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
