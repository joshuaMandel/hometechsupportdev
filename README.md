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

## Customizing

Business details (phone, email, hours, service area) are placeholders in
`components/Footer.js`, `pages/contact.js`, and the home page. Update those,
and wire the contact form up to your email or CRM of choice, before going live.
