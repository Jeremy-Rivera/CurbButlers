const testimonials = [
  {
    quote: 'Curb Butlers took trash day off our board’s plate. One less thing to manage, and our streets look consistently clean.',
    author: 'Board President',
    role: 'Wesley Chapel HOA',
    initial: 'M',
  },
  {
    quote: 'We needed a reliable partner for our community. They show up on schedule and our residents have stopped complaining about cans left at the curb.',
    author: 'Property Manager',
    role: 'Wesley Chapel neighborhood',
    initial: 'K',
  },
  {
    quote: 'Professional, responsive, and easy to work with. Our HOA signed a community-wide agreement and it’s been smooth from day one.',
    author: 'HOA Board Member',
    role: 'Wesley Chapel, FL',
    initial: 'R',
  },
]

export function Testimonials() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="section-heading">Trusted by local communities</h2>
          <p className="section-subheading mx-auto">
            HOAs and neighborhoods in Wesley Chapel rely on us for consistent, professional can-to-curb service.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="rounded-2xl border border-gray-200 bg-gray-50/50 p-6 shadow-sm"
            >
              <div className="flex items-center gap-1 text-primary-600">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mt-4 text-gray-700 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-sm font-semibold text-primary-700">
                  {t.initial}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.author}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
