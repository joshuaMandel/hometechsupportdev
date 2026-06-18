import Head from "next/head";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ title, description, children }) {
  const pageTitle = title ? `${title} | Gateway Tech Home Services` : "Gateway Tech Home Services";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description || "Friendly in-home technology support for households and seniors in the St. Louis metro."} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:btn-primary"
      >
        Skip to content
      </a>
      <NavBar />
      <main id="main-content" className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        {children}
      </main>
      <Footer />
    </>
  );
}
