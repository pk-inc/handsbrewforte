'use client'

import { FormEvent } from 'react'

export default function SavingsApplicationPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('Application submitted! We will contact you shortly.')
  }

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="max-w-[1300px] mx-auto px-[clamp(16px,4vw,32px)]">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">Savings Application Form</h1>
        <form onSubmit={handleSubmit} className="max-w-2xl bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700">
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-slate-900 dark:text-white">Full Name</label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-slate-900 dark:text-white">Savings Plan</label>
            <select className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-secondary">
              <option>Ajo with Handsbrew</option>
              <option>Easy Save</option>
              <option>Target Savings</option>
              <option>Lump Sum Investment</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-secondary text-white px-8 py-3.5 font-bold rounded-full hover:bg-secondary/90 transition shadow-lg"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  )
}
