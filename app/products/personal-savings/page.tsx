import Link from 'next/link'

export const metadata = {
  title: 'Personal Savings - Handsbrew Forte',
  description:
    'Explore Handsbrew Forte personal savings products designed to help individuals save, grow wealth, and reach financial goals with ease.',
}

const products = [
  {
    id: 'easy-save',
    name: 'Easy Save',
    badge: 'Flexible',
    description:
      'Simple, flexible savings for everyday needs. Deposit any amount at any time and access funds when you need them.',
  },
  {
    id: 'ajo',
    name: 'Ajo with Handsbrew',
    badge: 'Daily / Weekly',
    description:
      'Traditional contribution scheme with modern tracking. Save daily or weekly and enjoy bonuses at the end of the cycle.',
  },
  {
    id: 'target',
    name: 'Target Savings',
    badge: 'Goal-Based',
    description:
      'Set a specific financial goal and target date. We help you build the discipline to reach that goal systematically.',
  },
  {
    id: 'lump-sum',
    name: 'Lump Sum Investment',
    badge: 'Investment',
    description:
      'Invest a lump sum for a fixed period and earn competitive returns that beat traditional savings accounts.',
  },
  {
    id: 'freedom',
    name: 'Freedom Savings Scheme',
    badge: 'Flexible',
    description:
      'A highly flexible savings scheme with minimal restrictions on deposits and withdrawals while still earning returns.',
  },
  {
    id: 'school',
    name: 'School with Ease',
    badge: 'Education',
    description:
      'Education-focused savings to help you conveniently plan and pay for school fees and related expenses.',
  },
]

export default function PersonalSavingsPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="bg-slate-50 dark:bg-slate-900 py-16">
        <div className="max-w-[1300px] mx-auto px-[clamp(16px,4vw,32px)]">
          <div className="max-w-3xl">
            <span className="text-secondary font-semibold uppercase tracking-widest text-sm">
              Personal Savings
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-4 mb-6">
              Save smarter, live better.
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Handsbrew Forte personal savings products are designed to help individuals build financial discipline,
              protect their future, and achieve life goals with ease and transparency.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/application/savings"
                className="bg-secondary text-white px-8 py-3.5 font-bold rounded-full hover:bg-secondary/90 transition shadow-lg inline-flex items-center gap-2"
              >
                Start Saving
                <span className="material-icons text-sm">arrow_forward</span>
              </Link>
              <Link
                href="/savings"
                className="text-secondary font-semibold inline-flex items-center gap-2 hover:underline"
              >
                View All Savings Products
                <span className="material-icons text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section className="py-16">
        <div className="max-w-[1300px] mx-auto px-[clamp(16px,4vw,32px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <article
                key={product.id}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-secondary/10 text-secondary font-semibold mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    {product.badge}
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{product.name}</h2>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">{product.description}</p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <Link
                    href={`/savings#${product.id}`}
                    className="text-secondary font-semibold hover:underline inline-flex items-center gap-1 text-sm"
                  >
                    Learn more
                    <span className="material-icons text-xs">arrow_forward</span>
                  </Link>
                  <Link
                    href="/application/savings"
                    className="text-sm font-semibold text-primary hover:text-secondary inline-flex items-center gap-1"
                  >
                    Apply now
                    <span className="material-icons text-xs">chevron_right</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

