export function WhyUs() {
  const reasons = [
    {
      title: 'Never miss a pickup',
      description: 'We follow municipal schedules so bins go out on time, every time—rain or shine. Your HOA stays compliant and curb appeal stays high.',
      icon: 'calendar',
    },
    {
      title: 'Avoid fines',
      description: 'Many communities require cans off the curb within hours. We return bins promptly after collection so your neighborhood avoids violations.',
      icon: 'shield',
    },
    {
      title: 'Consistent curb appeal',
      description: 'No more scattered cans or forgotten bins. We keep common areas and streets tidy so your community looks its best year-round.',
      icon: 'sparkles',
    },
    {
      title: 'Set it and forget it',
      description: 'One contract, one point of contact. We handle scheduling and execution so board members and residents don’t have to think about trash day.',
      icon: 'check',
    },
  ]

  const icons: Record<string, React.ReactNode> = {
    calendar: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    shield: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    sparkles: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    check: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  }

  return (
    <section id="why-us" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="section-heading">Why communities choose us</h2>
          <p className="section-subheading mx-auto">
            A professional can-to-curb valet service built for worry-free HOA and neighborhood management in Wesley Chapel.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="relative rounded-2xl border border-gray-200 bg-gray-50/50 p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600 text-white">
                {icons[item.icon]}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
