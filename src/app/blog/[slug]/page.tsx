import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getBlogPost, getBlogPosts } from '@/lib/blog'

export async function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}
  return {
    title: `${post.title} | Curb Butlers Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Link href="/blog" className="text-sm font-medium text-primary-600 hover:text-primary-700">
        ← Back to blog
      </Link>
      <header className="mt-8">
        <time className="text-sm text-gray-500" dateTime={post.date}>
          {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </time>
        <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-gray-600">{post.excerpt}</p>
      </header>
      <div className="prose prose-gray mt-12 max-w-none">
        {post.slug === 'why-hoas-choose-can-to-curb' && (
          <>
            <p>
              HOAs and community boards are always looking for ways to reduce complaints, maintain property values, and simplify operations. Can-to-curb (trash valet) service is one of those rare solutions that does all three.
            </p>
            <h2>Fewer missed pickups</h2>
            <p>
              When residents forget to roll bins to the curb—or leave them out too long—the whole street is affected. A professional valet service follows municipal schedules so bins go out on time and come back the same day. That means fewer missed pickups and fewer violations.
            </p>
            <h2>Better curb appeal</h2>
            <p>
              Scattered or overflowing cans can make an otherwise well-kept community look unkempt. Consistent can-to-curb service keeps common areas and streets tidy, which supports property values and resident satisfaction.
            </p>
            <h2>One vendor, one invoice</h2>
            <p>
              Instead of every homeowner managing their own trash day, the HOA contracts with one provider. The board gets a single point of contact, predictable billing, and less administrative overhead. Many communities pass the cost through as a modest fee or include it in dues.
            </p>
            <p>
              If your Wesley Chapel HOA is considering can-to-curb service, we’d be happy to provide a custom quote. <Link href="/#contact" className="text-primary-600 hover:text-primary-700 font-medium">Get in touch</Link> to get started.
            </p>
          </>
        )}
        {post.slug === 'wesley-chapel-trash-schedules' && (
          <>
            <p>
              Keeping track of trash and recycling days can be tricky, especially with holidays and schedule changes. Here’s a quick reference for the Wesley Chapel area.
            </p>
            <h2>Pasco County</h2>
            <p>
              Wesley Chapel is in Pasco County. Residential trash and recycling pickup schedules vary by zone and provider. Check your utility or county solid waste page for your specific calendar.
            </p>
            <h2>Holidays</h2>
            <p>
              Many services delay pickup by one day after major holidays (e.g., Thanksgiving, Christmas, New Year’s Day). We monitor these changes and adjust our can-to-curb visits accordingly so your community never misses a pickup.
            </p>
            <p>
              Need a partner who handles the schedule for you? <Link href="/#contact" className="text-primary-600 hover:text-primary-700 font-medium">Contact Curb Butlers</Link> for HOA and neighborhood service in Wesley Chapel.
            </p>
          </>
        )}
      </div>
    </article>
  )
}
