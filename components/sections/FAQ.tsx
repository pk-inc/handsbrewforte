'use client'

import { useState } from 'react'

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0)

  const faqs = [
    {
      question: 'How do I apply for a loan?',
      answer:
        "Applying is easy! You can apply online through our 'Loan Application' page or visit our office with valid identification and proof of income. Our team will guide you through the quick process.",
    },
    {
      question: 'What documents do I need?',
      answer:
        "Typically, you'll need a valid government-issued ID (Passport, Driver's License, or NIN), recent passport photographs, and proof of address. For business loans, additional documents like CAC registration may be required.",
    },
    {
      question: 'How does the savings interest work?',
      answer:
        'Our savings plans offer competitive interest rates that accrue daily or monthly, depending on the plan. Interest is paid out at the end of the savings cycle or upon maturity. Layout details can be found on our Savings page.',
    },
    {
      question: 'Is my money safe with Handsbrew?',
      answer:
        'Absolutely. We are licensed and regulated by the Oyo State Government and recognized by the CBN. We follow strict financial protocols and your deposits are secure.',
    },
    {
      question: 'Can I withdraw my savings early?',
      answer:
        'Yes, for Easy Save plans. However, Target Savings and Ajo plans have specific terms and early withdrawal may affect your interest or bonuses. Contact us for details on your specific plan.',
    },
  ]

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800" id="faq">
      <div className="max-w-[1300px] mx-auto px-[clamp(16px,4vw,32px)]">
        <div className="mb-16">
          <h3 className="text-secondary font-semibold tracking-wider uppercase mb-2">Common Questions</h3>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
        </div>

        {/* Desktop: Split Panel Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8">
          {/* Questions List (Left) */}
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-full px-6 py-4 text-left rounded-lg transition border-l-4 ${
                  activeIndex === index
                    ? 'bg-slate-100 dark:bg-slate-800 border-secondary'
                    : 'bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border-transparent hover:border-secondary'
                }`}
              >
                <span className="font-bold text-slate-900 dark:text-white">{faq.question}</span>
              </button>
            ))}
          </div>

          {/* Answer Panel (Right) */}
          <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-8 border border-slate-200 dark:border-slate-800">
            <div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-4">{faqs[activeIndex].question}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{faqs[activeIndex].answer}</p>
            </div>
          </div>
        </div>

        {/* Mobile: Accordion Layout */}
        <div className="lg:hidden space-y-4">
          {faqs.map((faq, index) => (
            <MobileFAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}

function MobileFAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-slate-900 dark:text-white">{question}</span>
        <span
          className={`material-icons text-slate-400 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          expand_more
        </span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-800">
          {answer}
        </div>
      )}
    </div>
  )
}
