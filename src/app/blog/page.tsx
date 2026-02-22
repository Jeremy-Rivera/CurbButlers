import Link from 'next/link'
import { getBlogPosts } from '@/lib/blog'

export const metadata = {
  title: 'Blog | Curb Butlers',
  description: 'Tips for HOAs, community managers, and local trash and recycling info in Wesley Chapel, FL.',
}

export default function BlogPage() {
  const posts = getBlogPosts()

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Blog
      </h1>
      <p className="mt-2 text-lg text-gray-600">
        Tips for HOAs and community managers, plus local trash and recycling info.
      </p>
      <ul className="mt-12 space-y-8">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group block rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
            >
              <time className="text-sm text-gray-500" dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </time>
              <h2 className="mt-2 text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                {post.title}
              </h2>
              <p className="mt-2 text-gray-600">{post.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
