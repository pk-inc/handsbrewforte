import Link from 'next/link'

export const metadata = {
  title: 'Loans - Handsbrew Forte',
  description: 'Flexible financing options to meet your personal and business needs.',
}

const loanProducts = [
  { id: 'salary', title: 'HBF Salary Advance', description: 'Quick cash for salary earners to bridge financial gaps before payday.' },
  { id: 'appliance', title: 'Home Appliance Finance', description: 'Get the home appliances you need now and pay in convenient installments.' },
  { id: 'lease', title: 'HBF Micro Lease Scheme', description: 'Leasing solutions for small businesses to acquire equipment for growth.' },
  { id: 'overdraft', title: 'Temporary Overdraft', description: 'Short-term credit facility to cover temporary cash flow gaps.' },
]

export default function LoansPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Page Header */}
      <section className="min-h-[400px] bg-slate-50 dark:bg-slate-900 pt-20">
        <div className="max-w-[1300px] mx-auto px-[clamp(16px,4vw,32px)]">
          <div className="max-w-3xl">
            <span className="text-secondary font-semibold uppercase tracking-widest text-sm">Access Credit Funds</span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-4 mb-6">Loan Products</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Flexible financing options to meet your personal and business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Loans Grid */}
      <section className="py-24">
        <div className="max-w-[1300px] mx-auto px-[clamp(16px,4vw,32px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loanProducts.map((product) => (
              <div
                key={product.id}
                id={product.id}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 p-8 hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{product.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">{product.description}</p>
                <Link
                  href="/application/loan"
                  className="text-secondary font-semibold hover:underline inline-flex items-center gap-2"
                >
                  Apply Now <span className="material-icons text-sm">arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
