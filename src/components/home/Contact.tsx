'use client'

import { useState } from 'react'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <h2 className="section-heading">Request a quote</h2>
            <p className="section-subheading mx-auto">
              Tell us about your HOA or neighborhood. We’ll reach out to confirm details and provide a custom quote.
            </p>
          </div>
          {submitted ? (
            <div className="mt-12 rounded-2xl border border-primary-200 bg-primary-50 p-8 text-center">
              <p className="font-semibold text-primary-800">Thanks for reaching out.</p>
              <p className="mt-2 text-sm text-primary-700">
                We’ll get back to you shortly to discuss your community’s needs.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-12 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    required
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                />
              </div>
              <div>
                <label htmlFor="contact-interest" className="block text-sm font-medium text-gray-700">
                  I&apos;m interested in...
                </label>
                <select
                  id="contact-interest"
                  name="interest"
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                >
                  <option value="hoa">HOA / community-wide service</option>
                  <option value="neighborhood">Neighborhood block</option>
                  <option value="weekly">Weekly / biweekly service</option>
                  <option value="seasonal">Seasonal or on-demand</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="contact-location" className="block text-sm font-medium text-gray-700">
                  Community / property location
                </label>
                <input
                  type="text"
                  id="contact-location"
                  name="location"
                  placeholder="e.g. Wesley Chapel HOA name or neighborhood"
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                />
              </div>
              <div>
                <label htmlFor="contact-notes" className="block text-sm font-medium text-gray-700">
                  Notes / best time to call
                </label>
                <textarea
                  id="contact-notes"
                  name="notes"
                  rows={3}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                />
              </div>
              <button type="submit" className="btn-primary w-full sm:w-auto">
                Request quote
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
