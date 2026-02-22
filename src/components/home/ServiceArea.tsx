const areas = [
  'Wesley Chapel',
  'New Tampa',
  'Lutz',
  'Land O\' Lakes',
  'Zephyrhills',
  'San Antonio',
  'Dade City',
  'Pasco County',
]

export function ServiceArea() {
  return (
    <section id="service-area" className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="section-heading">Proudly serving Wesley Chapel & beyond</h2>
          <p className="section-subheading mx-auto">
            We are a local business focused on HOAs and neighborhoods in the Wesley Chapel area and surrounding communities.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {areas.map((area) => (
            <span
              key={area}
              className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-gray-200"
            >
              {area}
            </span>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-gray-600">
          Don’t see your community? We likely cover you. <a href="/#contact" className="font-medium text-primary-600 hover:text-primary-700">Contact us</a> to confirm.
        </p>
      </div>
    </section>
  )
}
