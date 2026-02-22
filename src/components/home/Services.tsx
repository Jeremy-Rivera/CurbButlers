import Link from 'next/link'

const plans = [
  {
    name: 'HOA & community',
    description: 'Bulk service for entire neighborhoods and HOAs. Custom schedules, one invoice, and dedicated support for your board.',
    highlight: true,
    cta: 'Get a quote',
  },
  {
    name: 'Weekly / biweekly',
    description: 'Ongoing service for communities that want consistent, set-it-and-forget-it can-to-curb pickup on a fixed schedule.',
    highlight: false,
    cta: 'Learn more',
  },
  {
    name: 'Seasonal / on-demand',
    description: 'Flexible options for communities with seasonal needs or one-off events. No long-term commitment required.',
    highlight: false,
    cta: 'Learn more',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="section-heading">Hassle-free trash management</h2>
          <p className="section-subheading mx-auto">
            Simple, transparent pricing. We focus on HOAs and neighborhoods—so our plans are built for communities, not just single homes.
          </p>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-6 sm:p-8 ${
                plan.highlight
                  ? 'border-primary-500 bg-white shadow-lg ring-2 ring-primary-500'
                  : 'border-gray-200 bg-white'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary-600 px-3 py-1 text-xs font-semibold text-white">
                  Best for HOAs
                </div>
              )}
              <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
              <p className="mt-3 flex-1 text-sm text-gray-600 leading-relaxed">{plan.description}</p>
              <Link
                href="/#contact"
                className={`mt-6 inline-flex justify-center rounded-lg px-4 py-2.5 text-sm font-semibold ${
                  plan.highlight ? 'btn-primary' : 'btn-secondary'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-gray-500">
          Custom quotes for large communities. No long-term contract required—pause or cancel with notice.
        </p>
      </div>
    </section>
  )
}
