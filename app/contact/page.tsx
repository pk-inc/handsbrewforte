'use client'

import { FormEvent } from 'react'

export default function ContactPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission
    alert('Thank you for your message! We will get back to you within 24 hours.')
  }

  return (
    <div className="pt-32 pb-24">
      <section className="min-h-[500px] py-20">
        <div className="max-w-[1300px] mx-auto px-[clamp(16px,4vw,32px)]">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1">
              <span className="text-secondary font-semibold uppercase tracking-widest text-sm">Get in Touch</span>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-4 mb-6">
                We're here to help.
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">
                Have questions about our products or need assistance with your account? Reach out to us.
              </p>

              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700">
                <div className="mb-6">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Visit Us</h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    No. 5, Elekuku layout, Behind Item7, Ring-road, Ibadan, Oyo State
                  </p>
                </div>
                <div className="mb-6">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Call Us</h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    +234 810 554 8192
                    <br />
                    +234 817 215 1421
                  </p>
                </div>
                <div className="mb-6">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Email Us</h4>
                  <p className="text-slate-600 dark:text-slate-400">info@handsbrew.com.ng</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Opening Hours</h4>
                  <p className="text-slate-600 dark:text-slate-400">Mon - Fri: 8:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>

            <div className="flex-1 bg-white dark:bg-slate-800 p-10 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700">
              <form onSubmit={handleSubmit}>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send a Message</h3>
                <div className="mb-5">
                  <label className="block mb-2 font-semibold text-slate-900 dark:text-white">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
                <div className="mb-5">
                  <label className="block mb-2 font-semibold text-slate-900 dark:text-white">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
                <div className="mb-5">
                  <label className="block mb-2 font-semibold text-slate-900 dark:text-white">Message</label>
                  <textarea
                    rows={5}
                    placeholder="How can we help you?"
                    required
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-secondary text-white px-8 py-3.5 font-bold rounded-full hover:bg-secondary/90 transition shadow-lg"
                >
                  Send Message
                </button>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-4 text-center">
                  We typically reply within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
