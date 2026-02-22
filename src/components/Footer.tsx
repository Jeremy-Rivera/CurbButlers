import Link from 'next/link'

const footerLinks = {
  service: [
    { label: 'Services', href: '/#services' },
    { label: 'Service Area', href: '/#service-area' },
    { label: 'Pricing', href: '/#services' },
  ],
  company: [
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Contact', href: '/#contact' },
  ],
  account: [
    { label: 'Client Login', href: '/dashboard' },
    { label: 'Get a Quote', href: '/#contact' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="font-display text-xl font-bold text-primary-700">
              Curb Butlers
            </Link>
            <p className="mt-3 text-sm text-gray-600 max-w-xs">
              Professional can-to-curb trash and recycling valet service for HOAs and neighborhoods in Wesley Chapel, Florida.
            </p>
            <p className="mt-4 text-sm font-medium text-gray-900">Wesley Chapel, FL</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Service</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.service.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Company</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Account</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.account.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Curb Butlers. All rights reserved. Proudly serving Wesley Chapel, Florida.
          </p>
        </div>
      </div>
    </footer>
  )
}
