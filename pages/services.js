import Link from "next/link";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";

const services = [
  {
    title: "Wi-Fi & Home Networks",
    body: "We set up routers and mesh systems, eliminate dead zones, secure your network, and configure parental controls so every device connects reliably in every room.",
    items: ["Router & modem setup", "Mesh Wi-Fi for whole-home coverage", "Network troubleshooting", "Guest networks & parental controls"],
  },
  {
    title: "TV & Home Theater",
    body: "From mounting your TV safely on the wall to dialing in surround sound, we make your living room feel like a theater—with the cables tidied up.",
    items: ["TV wall mounting", "Soundbar & speaker setup", "Streaming device setup", "Home theater calibration"],
  },
  {
    title: "Computers & Phones",
    body: "New device? Slow device? We handle setup, data transfer, updates, speed-ups, and repairs so your computer and phone just work.",
    items: ["New computer & phone setup", "Data transfer & backups", "Speed-ups & tune-ups", "Virus removal & printer fixes"],
  },
  {
    title: "Smart Home Integration",
    body: "We install and connect smart speakers, lights, thermostats, cameras, and doorbells—and make them work together with your voice assistant.",
    items: ["Smart speakers & displays", "Smart lighting & thermostats", "Cameras & video doorbells", "Voice assistant & automations"],
  },
  {
    title: "Patient Tech Training",
    body: "One-on-one, jargon-free coaching for seniors and anyone who wants to feel confident. Learn your phone, email, video calls, online safety, and more at your own pace.",
    items: ["Smartphone & tablet basics", "Email, photos & video calls", "Online safety & scam avoidance", "Cloud storage & social media"],
  },
  {
    title: "Security & Data Protection",
    body: "We help keep you safe with strong passwords, firewall and firmware updates, and reliable backups—plus advice on spotting phishing and scams.",
    items: ["Security checkups", "Router firmware & firewall setup", "Automatic backups", "Phishing & password guidance"],
  },
];

export default function Services() {
  return (
    <Layout
      title="Services"
      description="In-home tech services: Wi-Fi, TVs, computers, phones, smart home, training, and security."
    >
      <PageHeader
        title="Our Services"
        subtitle="In-home help with all your everyday technology. If it has a screen, a plug, or a Wi-Fi connection, we can probably help."
      />

      <div className="grid sm:grid-cols-2 gap-6">
        {services.map((s) => (
          <div key={s.title} className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <h2 className="text-xl text-brand-dark mb-2">{s.title}</h2>
            <p className="text-gray-600 mb-4">{s.body}</p>
            <ul className="space-y-1">
              {s.items.map((i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span aria-hidden="true" className="text-brand font-bold">✓</span>
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-brand-light rounded-lg p-8 mt-10 text-center">
        <h2 className="text-2xl mb-2">Don&apos;t see exactly what you need?</h2>
        <p className="text-gray-700 mb-6">Just ask&mdash;we help with all kinds of everyday tech. Tell us what&apos;s going on and we&apos;ll let you know how we can help.</p>
        <Link href="/contact" className="inline-block bg-brand text-white px-6 py-3 rounded-md font-semibold hover:bg-brand-dark transition-colors">
          Get in Touch
        </Link>
      </div>
    </Layout>
  );
}
