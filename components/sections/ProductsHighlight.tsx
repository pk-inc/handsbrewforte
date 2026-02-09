'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ProductsHighlight() {
  const [activeTab, setActiveTab] = useState<'savings' | 'loans'>('savings')

  return (
    <section
      className="py-24 relative overflow-hidden bg-cover bg-center bg-fixed"
      id="products"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-slate-900/85" />
      <div className="max-w-[1300px] mx-auto px-[clamp(16px,4vw,32px)] relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white">Our Services</h2>
          <div className="flex justify-start md:justify-end">
            <div className="bg-white dark:bg-slate-800 p-1 rounded-full inline-flex border border-slate-200 dark:border-slate-700 shadow-sm">
              <button
                onClick={() => setActiveTab('savings')}
                className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === 'savings' ? 'tab-active' : 'tab-inactive'
                }`}
              >
                Savings Plans
              </button>
              <button
                onClick={() => setActiveTab('loans')}
                className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === 'loans' ? 'tab-active' : 'tab-inactive'
                }`}
              >
                Loan Products
              </button>
            </div>
          </div>
        </div>

        {/* Savings Content */}
        {activeTab === 'savings' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
            <div className="glass-card p-8 rounded-2xl hover:bg-secondary hover:text-white transition-all duration-300 group">
              <span className="material-icons text-secondary group-hover:text-white text-4xl mb-4 transition-colors duration-300">
                savings
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-white mb-2 transition-colors duration-300">
                Ajo with Handsbrew
              </h3>
              <p className="text-slate-500 group-hover:text-white/90 mb-6 text-sm transition-colors duration-300">
                Daily or weekly contribution scheme with a trackable record and cycle bonuses.
              </p>
              <Link
                href="/savings#ajo"
                className="text-primary group-hover:text-white font-semibold text-sm hover:underline transition-colors duration-300"
              >
                Learn more &rarr;
              </Link>
            </div>
            <div className="glass-card p-8 rounded-2xl hover:bg-secondary hover:text-white transition-all duration-300 group">
              <span className="material-icons text-secondary group-hover:text-white text-4xl mb-4 transition-colors duration-300">
                account_balance_wallet
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-white mb-2 transition-colors duration-300">
                Easy Save
              </h3>
              <p className="text-slate-500 group-hover:text-white/90 mb-6 text-sm transition-colors duration-300">
                Simple, flexible savings for everyday needs. Deposit any amount at any time.
              </p>
              <Link
                href="/savings#easy-save"
                className="text-primary group-hover:text-white font-semibold text-sm hover:underline transition-colors duration-300"
              >
                Learn more &rarr;
              </Link>
            </div>
            <div className="glass-card p-8 rounded-2xl hover:bg-secondary hover:text-white transition-all duration-300 group">
              <span className="material-icons text-secondary group-hover:text-white text-4xl mb-4 transition-colors duration-300">
                track_changes
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-white mb-2 transition-colors duration-300">
                Target Savings
              </h3>
              <p className="text-slate-500 group-hover:text-white/90 mb-6 text-sm transition-colors duration-300">
                Set a specific financial goal and target date, and we'll help you reach it systematically.
              </p>
              <Link
                href="/savings#target"
                className="text-primary group-hover:text-white font-semibold text-sm hover:underline transition-colors duration-300"
              >
                Learn more &rarr;
              </Link>
            </div>
          </div>
        )}

        {/* Loans Content */}
        {activeTab === 'loans' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
            <div className="glass-card p-8 rounded-2xl hover:bg-secondary hover:text-white transition-all duration-300 group">
              <span className="material-icons text-secondary group-hover:text-white text-4xl mb-4 transition-colors duration-300">
                payments
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-white mb-2 transition-colors duration-300">
                HBF Salary Advance
              </h3>
              <p className="text-slate-500 group-hover:text-white/90 mb-6 text-sm transition-colors duration-300">
                Quick cash for salary earners to bridge financial gaps before payday.
              </p>
              <Link
                href="/loans#salary"
                className="text-primary group-hover:text-white font-semibold text-sm hover:underline transition-colors duration-300"
              >
                Learn more &rarr;
              </Link>
            </div>
            <div className="glass-card p-8 rounded-2xl hover:bg-secondary hover:text-white transition-all duration-300 group">
              <span className="material-icons text-secondary group-hover:text-white text-4xl mb-4 transition-colors duration-300">
                kitchen
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-white mb-2 transition-colors duration-300">
                Home Appliance Finance
              </h3>
              <p className="text-slate-500 group-hover:text-white/90 mb-6 text-sm transition-colors duration-300">
                Get the home appliances you need now and pay in convenient installments.
              </p>
              <Link
                href="/loans#appliance"
                className="text-primary group-hover:text-white font-semibold text-sm hover:underline transition-colors duration-300"
              >
                Learn more &rarr;
              </Link>
            </div>
            <div className="glass-card p-8 rounded-2xl hover:bg-secondary hover:text-white transition-all duration-300 group">
              <span className="material-icons text-secondary group-hover:text-white text-4xl mb-4 transition-colors duration-300">
                store
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-white mb-2 transition-colors duration-300">
                HBF Micro Lease
              </h3>
              <p className="text-slate-500 group-hover:text-white/90 mb-6 text-sm transition-colors duration-300">
                Leasing solutions for small businesses to acquire equipment for growth.
              </p>
              <Link
                href="/loans#lease"
                className="text-primary group-hover:text-white font-semibold text-sm hover:underline transition-colors duration-300"
              >
                Learn more &rarr;
              </Link>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <Link href="/savings" className="text-white font-medium hover:text-secondary hover:underline transition">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
