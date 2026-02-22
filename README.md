# Curb Butlers

Website for **Curb Butlers**, a can-to-curb trash and recycling valet service in **Wesley Chapel, Florida**. Built for HOAs and neighborhoods (not individual homeowners).

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- Designed to add **Stripe** and a **client dashboard** (login/account) later

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — Development server
- `npm run build` — Production build
- `npm run start` — Run production build
- `npm run lint` — Run ESLint

## Site structure

- **Home** — Hero, Why Us, Services (HOA-focused), Testimonials, Service Area, Contact form, FAQ, Blog preview
- **Blog** — `/blog` index and `/blog/[slug]` posts (content in `src/lib/blog.ts` and inline in post page)
- **Dashboard** — `/dashboard` placeholder for future client login and Stripe billing

## Next steps (when you’re ready)

1. **Stripe** — Add Stripe for payments (e.g. `@stripe/stripe-js`, Stripe Checkout or Customer Portal). The contact form and dashboard page are ready to hook into your backend.
2. **Client dashboard** — Add auth (e.g. NextAuth.js, Clerk, or your own) and a protected `/dashboard` area for clients to manage service and payment methods.
3. **Contact form** — Connect the quote form to an API route that sends email (e.g. Resend, SendGrid) or saves to a database.

## Design

- Inspired by [Can to Curb](https://www.cantocurb.com) and similar service sites.
- Professional green/teal palette, clear CTAs, and copy focused on HOAs and communities.
- Responsive layout with a sticky header and mobile menu.
