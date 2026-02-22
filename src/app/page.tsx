import Link from 'next/link'
import { Hero } from '@/components/home/Hero'
import { WhyUs } from '@/components/home/WhyUs'
import { Services } from '@/components/home/Services'
import { Testimonials } from '@/components/home/Testimonials'
import { ServiceArea } from '@/components/home/ServiceArea'
import { Contact } from '@/components/home/Contact'
import { FAQ } from '@/components/home/FAQ'
import { BlogPreview } from '@/components/home/BlogPreview'

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyUs />
      <Services />
      <Testimonials />
      <ServiceArea />
      <Contact />
      <FAQ />
      <BlogPreview />
    </>
  )
}
