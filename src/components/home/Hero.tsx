import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-accent-dark">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Trash day, solved.
          </h1>
          <p className="mt-6 text-lg leading-8 text-primary-100">
            Professional can-to-curb service for HOAs and neighborhoods in Wesley Chapel. We move bins to the curb and back—reliably, on schedule, so your community stays clean and compliant.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/#contact" className="rounded-lg bg-white px-6 py-3 text-base font-semibold text-primary-700 shadow-sm hover:bg-primary-50 transition-colors">
              Request a quote for your HOA
            </Link>
            <Link href="/#services" className="rounded-lg border-2 border-white/80 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition-colors">
              View services
            </Link>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap gap-8 text-white/90">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-primary-200" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">Easy scheduling</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-primary-200" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">Fully insured</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-primary-200" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">Built for communities</span>
          </div>
        </div>
      </div>
    </section>
  )
}
