import Link from 'next/link'

export const metadata = {
  title: 'Savings Schemes - Handsbrew Forte',
  description: 'Choose from our wide range of tailored savings products designed to help you meet your financial goals.',
}

const savingsProducts = [
  { id: "ajo", title: "Ajo with Handsbrew", description: "Daily or weekly contribution scheme with a trackable record and bonus at the end of the cycle." },
  { id: "easy-save", title: "Easy Save", description: "Simple, flexible savings for everyday needs. Deposit any amount at any time." },
  { id: "fly", title: "Fly with Ease", description: "Save specifically for your travel needs and enjoy special travel benefits." },
  { id: "bond", title: "Employer & Employee's Bond", description: "A collaborative savings scheme between employers and employees for mutual benefit." },
  { id: "payroll", title: "Payroll Savings Scheme", description: "Automatic savings deducted directly from your salary." },
  { id: "school", title: "School with Ease", description: "Education-focused savings plan to help you prepare for school fees and expenses." },
  { id: "empowerment", title: "Empowerment Daily Savings", description: "Daily savings plan designed to empower you financially." },
  { id: "lump-sum", title: "Lump Sum Investment", description: "Invest a large sum and watch it grow with competitive returns." },
  { id: "freedom", title: "Freedom Savings Scheme", description: "Flexible savings with no restrictions on deposits or withdrawals." },
  { id: "target", title: "Target Savings", description: "Set a specific financial goal and target date, and we'll help you reach it systematically." },
]

export default function SavingsPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Page Header */}
      <section className="min-h-[400px] bg-slate-50 dark:bg-slate-900 pt-20">
        <div className="max-w-[1300px] mx-auto px-[clamp(16px,4vw,32px)]">
          <div className="max-w-3xl">
            <span className="text-secondary font-semibold uppercase tracking-widest text-sm">Secure Your Future</span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-4 mb-6">Savings Schemes</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Choose from our wide range of tailored savings products designed to help you meet your financial goals.
            </p>
          </div>
        </div>
      </section>

      {/* Savings Grid */}
      <section className="py-24">
        <div className="max-w-[1300px] mx-auto px-[clamp(16px,4vw,32px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {savingsProducts.map((product) => (
              <div
                key={product.id}
                id={product.id}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 p-8 hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{product.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">{product.description}</p>
                <Link
                  href="/application/savings"
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
