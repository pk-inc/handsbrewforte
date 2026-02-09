import Link from 'next/link'

export const metadata = {
  title: 'Business Solutions - Handsbrew Forte',
  description:
    'Handsbrew Forte business savings and credit solutions to support SMEs, corporates, and organizations with sustainable growth financing.',
}

const solutions = [
  {
    id: 'payroll',
    name: 'Payroll Savings Scheme',
    badge: 'Business Savings',
    description:
      'Structured savings deducted directly from staff salaries, helping organizations and employees build financial resilience.',
  },
  {
    id: 'bond',
    name: "Employer & Employee's Bond",
    badge: 'Partnership',
    description:
      'A collaborative scheme between employers and employees that fosters loyalty while building long-term financial security.',
  },
  {
    id: 'empowerment',
    name: 'Empowerment Daily Savings',
    badge: 'Micro Business',
    description:
      'Daily savings targeted at traders and micro businesses, making it easy to put something aside every day.',
  },
  {
    id: 'lease',
    name: 'HBF Micro Lease Scheme',
    badge: 'Asset Finance',
    description:
      'Leasing solutions that help businesses acquire essential equipment and assets without heavy upfront costs.',
  },
  {
    id: 'overdraft',
    name: 'Temporary Overdraft',
    badge: 'Working Capital',
    description:
      'Short-term credit facility designed to cover temporary cash flow gaps and keep your operations running smoothly.',
  },
  {
    id: 'salary',
    name: 'HBF Salary Advance (Corporate)',
    badge: 'Staff Welfare',
    description:
      'Salary advance for employees of partner organizations, helping staff handle urgent needs without disrupting productivity.',
  },
]

export default function BusinessSolutionsPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="bg-slate-950 text-white py-16">
        <div className="max-w-[1300px] mx-auto px-[clamp(16px,4vw,32px)] flex flex-col md:flex-row gap-10 md:items-center">
          <div className="flex-1">
            <span className="text-secondary font-semibold uppercase tracking-widest text-sm">
              Business Solutions
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Financial solutions that power business growth.
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              From payroll savings to micro-leasing and overdraft facilities, Handsbrew Forte partners with businesses
              to provide the right mix of savings and credit solutions for sustainable growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-secondary text-white px-8 py-3.5 font-bold rounded-full hover:bg-secondary/90 transition shadow-lg inline-flex items-center gap-2"
              >
                Talk to Our Team
                <span className="material-icons text-sm">call</span>
              </Link>
              <Link
                href="/loans"
                className="text-slate-200 font-semibold inline-flex items-center gap-2 hover:underline"
              >
                View Loan Products
                <span className="material-icons text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions grid */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-[1300px] mx-auto px-[clamp(16px,4vw,32px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <article
                key={solution.id}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-primary/5 text-primary font-semibold mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {solution.badge}
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{solution.name}</h2>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">{solution.description}</p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <Link
                    href={
                      solution.id === 'lease' || solution.id === 'overdraft' || solution.id === 'salary'
                        ? `/loans#${solution.id}`
                        : `/savings#${solution.id}`
                    }
                    className="text-secondary font-semibold hover:underline inline-flex items-center gap-1 text-sm"
                  >
                    Learn more
                    <span className="material-icons text-xs">arrow_forward</span>
                  </Link>
                  <Link
                    href={
                      solution.id === 'lease' || solution.id === 'overdraft' || solution.id === 'salary'
                        ? '/application/loan'
                        : '/application/savings'
                    }
                    className="text-sm font-semibold text-primary hover:text-secondary inline-flex items-center gap-1"
                  >
                    Get started
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

