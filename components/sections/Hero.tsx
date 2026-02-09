import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section
      className="relative pt-20 pb-24 overflow-hidden bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed min-h-[74.5vh]"
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative max-w-[1300px] mx-auto px-[clamp(16px,4vw,32px)] flex flex-col md:flex-row items-start gap-12 h-full">
        <div className="md:w-3/4 text-left z-10">
          <h1
            style={{ fontFamily: "'Inter', sans-serif", lineHeight: '1.2', marginBottom: '12px' }}
            className="text-3xl sm:text-4xl md:text-5xl text-white font-bold"
          >
            Helping Individuals & <br className="hidden sm:block" /> Businesses access <br className="hidden sm:block" />
            <span className="text-white">Smart Financial Solutions.</span>
          </h1>

          <p
            style={{ fontFamily: "'Inter', sans-serif", marginBottom: '28px' }}
            className="text-base md:text-lg font-semibold tracking-widest text-white uppercase"
          >
            TRUSTED. TRANSPARENT. RELIABLE
          </p>

          <div className="flex flex-row justify-start gap-4 sm:gap-6 items-center flex-wrap">
            <Link
              href="/application/loan"
              style={{ borderRadius: '50px' }}
              className="bg-white text-secondary px-8 py-3.5 font-bold uppercase flex items-center gap-2 hover:bg-slate-100 transition shadow-lg inline-block"
            >
              Loans <span className="material-icons text-sm">arrow_forward</span>
            </Link>
            <Link
              href="/savings"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: '700' }}
              className="text-white hover:text-slate-200 flex items-center gap-2 text-lg hover:underline"
            >
              Start Saving <span className="material-icons text-sm">arrow_forward</span>
            </Link>
          </div>

          <div className="mt-[calc(8rem-8vh)] flex flex-nowrap items-center gap-x-2 md:gap-x-8 justify-start w-full md:w-auto">
            <div className="text-center flex-1 md:flex-none">
              <p className="text-[0.7rem] sm:text-sm font-medium text-white/80 uppercase tracking-wide leading-tight">
                Assets Managed
              </p>
              <p className="text-xl sm:text-3xl font-bold text-white">N6.5bn+</p>
            </div>
            <div className="block w-px h-10 bg-white/20" />
            <div className="text-center flex-1 md:flex-none">
              <p className="text-[0.7rem] sm:text-sm font-medium text-white/80 uppercase tracking-wide leading-tight">
                Return Rates P.A
              </p>
              <p className="text-xl sm:text-3xl font-bold text-white">~15%</p>
            </div>
            <div className="block w-px h-10 bg-white/20" />
            <div className="text-center flex-1 md:flex-none">
              <p className="text-[0.7rem] sm:text-sm font-medium text-white/80 uppercase tracking-wide leading-tight">
                Clients
              </p>
              <p className="text-xl sm:text-3xl font-bold text-white">100+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
