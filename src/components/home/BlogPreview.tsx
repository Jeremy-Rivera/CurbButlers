import Link from 'next/link'

const posts = [
  {
    slug: 'why-hoas-choose-can-to-curb',
    title: 'Why HOAs choose can-to-curb service',
    excerpt: 'How a single valet service can simplify trash day for entire communities and improve curb appeal.',
    date: '2024-02-15',
  },
  {
    slug: 'wesley-chapel-trash-schedules',
    title: 'Wesley Chapel trash & recycling schedules',
    excerpt: 'A quick reference for pickup days and holidays in the Wesley Chapel area.',
    date: '2024-02-01',
  },
]

export function BlogPreview() {
  return (
    <section className="bg-white py-16 sm:py-20 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="section-heading">From our blog</h2>
            <p className="section-subheading mt-1">
              Tips for HOAs and community managers, plus local trash and recycling info.
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden shrink-0 text-sm font-semibold text-primary-600 hover:text-primary-700 sm:block"
          >
            View all posts →
          </Link>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl border border-gray-200 bg-gray-50/50 p-6 transition-shadow hover:shadow-md"
            >
              <time className="text-sm text-gray-500" dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </time>
              <h3 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 sm:hidden">
          <Link href="/blog" className="text-sm font-semibold text-primary-600 hover:text-primary-700">
            View all posts →
          </Link>
        </div>
      </div>
    </section>
  )
}
