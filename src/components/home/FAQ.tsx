'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'How does the can-to-curb service work?',
    answer: 'Once we agree on a schedule, our team visits your community before trash pickup, moves bins from storage to the curb, and returns after collection to put empty bins back. We follow your municipality’s schedule so pickups are never missed.',
  },
  {
    question: 'Do you serve HOAs and entire neighborhoods?',
    answer: 'Yes. We focus on HOAs and neighborhoods rather than individual homes. We offer community-wide plans with one point of contact, custom schedules, and bulk pricing. Contact us for a quote tailored to your community.',
  },
  {
    question: 'How many cans are included?',
    answer: 'Standard service includes a set number of cans per stop. For HOA and multi-unit communities we provide custom quotes based on your number of homes and cans. Extra cans can be added for an additional fee.',
  },
  {
    question: 'Do you return cans from the curb?',
    answer: 'Yes. Service is round-trip: we put cans at the curb before pickup and return them to their storage area after collection. That keeps properties tidy and helps avoid fines for cans left out too long.',
  },
  {
    question: 'How will we know when service is done?',
    answer: 'We can send email or text confirmations after each visit so your board or residents know the job was completed.',
  },
  {
    question: 'What about locked gates or access?',
    answer: 'We need clear access to can storage areas. If your community has gates or codes, share those details when you sign up so we can complete service on schedule.',
  },
  {
    question: 'What happens on holidays or bad weather?',
    answer: 'We follow municipal holiday and delay schedules. We operate in most weather; in case of extreme conditions we’ll communicate any changes and reschedule as needed.',
  },
  {
    question: 'Is there a long-term contract?',
    answer: 'No. Many communities use us year-round, but you can choose seasonal, weekly, or on-demand service. You can pause or cancel with notice—no long-term contract required.',
  },
  {
    question: 'How do we pay?',
    answer: 'We’ll support secure payments (including Stripe) so you can pay by card. Billing is per visit or on a schedule that fits your HOA. Details will be provided when you sign up.',
  },
]

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="section-heading">Common questions</h2>
          <p className="section-subheading mx-auto">
            Have a different question? Use the contact form or give us a call.
          </p>
        </div>
        <div className="mt-12 space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-200 bg-white shadow-sm"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-gray-900"
                onClick={() => setOpenId(openId === i ? null : i)}
                aria-expanded={openId === i}
              >
                {faq.question}
                <span className="ml-2 shrink-0 text-gray-500">
                  {openId === i ? (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                  )}
                </span>
              </button>
              {openId === i && (
                <div className="border-t border-gray-100 px-5 py-4">
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
