import Link from 'next/link'

export const metadata = {
  title: 'Client Login | Curb Butlers',
  description: 'Sign in to your Curb Butlers account to manage service and payments.',
}

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-lg px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h1 className="font-display text-2xl font-bold text-gray-900">Client login</h1>
        <p className="mt-2 text-sm text-gray-600">
          Sign in to manage your community’s service, update payment methods, or view your account. Dashboard and Stripe integration coming soon.
        </p>
        <div className="mt-8 rounded-lg border border-amber-200 bg-amber-50 p-4">
          <p className="text-sm font-medium text-amber-800">Coming soon</p>
          <p className="mt-1 text-sm text-amber-700">
            We’re building a secure client portal where you can log in, view schedules, and pay with Stripe. In the meantime, please contact us for any account or billing questions.
          </p>
        </div>
        <Link
          href="/#contact"
          className="mt-6 inline-block btn-primary"
        >
          Contact us
        </Link>
        <Link
          href="/"
          className="mt-4 block text-center text-sm font-medium text-primary-600 hover:text-primary-700"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  )
}
