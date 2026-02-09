'use client'

import { FormEvent, useState } from 'react'

export default function CalculatorPage() {
  const [result, setResult] = useState<{
    monthlyPayment: number
    totalRepayment: number
  } | null>(null)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const amount = parseFloat(formData.get('amount') as string)
    const months = parseInt(formData.get('duration') as string)
    const rate = 0.05 // Example monthly interest rate of 5%

    if (isNaN(amount) || isNaN(months)) {
      alert('Please enter valid numbers')
      return
    }

    const interest = amount * rate * months
    const totalRepayment = amount + interest
    const monthlyPayment = totalRepayment / months

    setResult({
      monthlyPayment,
      totalRepayment,
    })
  }

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center">
      <div className="max-w-[1300px] mx-auto px-[clamp(16px,4vw,32px)] w-full">
        <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800 p-8 md:p-12 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-center mb-8 text-slate-900 dark:text-white">Loan Calculator</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2 font-semibold text-slate-900 dark:text-white">Loan Amount (₦)</label>
              <input
                type="number"
                name="amount"
                placeholder="e.g 500000"
                required
                className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold text-slate-900 dark:text-white">Duration (Months)</label>
              <select
                name="duration"
                className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-secondary"
              >
                <option value="3">3 Months</option>
                <option value="6">6 Months</option>
                <option value="12">12 Months</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-secondary text-white px-8 py-3.5 font-bold rounded-full hover:bg-secondary/90 transition shadow-lg"
            >
              Calculate Plan
            </button>
          </form>

          {result && (
            <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Estimated Repayment</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-2">
                <strong>Monthly Payment:</strong> ₦{result.monthlyPayment.toLocaleString('en-NG', { maximumFractionDigits: 2 })}
              </p>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                <strong>Total Repayment:</strong> ₦{result.totalRepayment.toLocaleString('en-NG', { maximumFractionDigits: 2 })}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">*Estimates based on standard rates. Terms apply.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
