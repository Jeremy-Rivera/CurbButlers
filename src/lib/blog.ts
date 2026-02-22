export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  content?: string
}

const posts: BlogPost[] = [
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

export function getBlogPosts(): BlogPost[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug)
}
