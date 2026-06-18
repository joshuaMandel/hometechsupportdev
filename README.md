# TechCare Home Services Website

A Next.js + Tailwind CSS marketing website for an in-home technology support
business serving the St. Louis metro. It acts as a landing page, services and
pricing info, an about page, and a contact page to capture leads and book
in-home visits.

## Pages

- **Home** (`/`) — hero, services overview, how-it-works, testimonials, CTAs
- **Services** (`/services`) — customer-facing breakdown of what we help with
- **Pricing** (`/pricing`) — plans, membership, and sample service rates
- **About** (`/about`) — why choose us and the areas we serve
- **Contact** (`/contact`) — contact details plus a demo lead-capture form
- Plus placeholder Privacy Policy and Terms of Service pages, and a 404 page

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
pages/            Route components (Next.js pages directory)
components/       Reusable UI components (NavBar, Footer, Layout, etc.)
styles/           Global CSS and Tailwind directives
```

## Contact form email

The contact form (`/contact`) POSTs to a Next.js API route
(`pages/api/contact.js`) that emails each lead to **jmandelmvp@gmail.com**
with a **high-priority flag** and an attention-grabbing subject line
(`🚨 NEW LEAD: …`).

Email is sent via [Resend](https://resend.com). To enable sending:

```bash
cp .env.example .env.local
```

1. Sign up at [resend.com](https://resend.com) and create an API key.
2. Put it in `.env.local` as `RESEND_API_KEY`.
3. Restart the dev server after editing env vars.

Until you verify your own sending domain in the Resend dashboard, emails must
be sent from their shared sandbox address (`onboarding@resend.dev`, already
set as the default `RESEND_FROM`)&mdash;replies still go to the lead's real
email via Reply-To. Until `RESEND_API_KEY` is set, the form returns a
friendly "email not configured yet" message instead of failing silently.

When deploying (e.g. to Vercel), set `RESEND_API_KEY` (and optionally
`CONTACT_TO` / `RESEND_FROM`) in that host's environment variables.

## Customizing

Other business details (hours, service area, testimonials) live in
`components/Footer.js`, `pages/contact.js`, `pages/about.js`, and the home page.
