// Centralized marketing imagery (Unsplash — free to use, no attribution required).
//
// To change any picture, just swap the photo id passed to `unsplash()` below
// for a different Unsplash photo id (the part after "/photo-" in an Unsplash
// URL). Nothing else needs to change.

const unsplash = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  hero: {
    src: "/images/hero.png",
    alt: "Gateway Tech technician helping an older adult with a laptop and smart home devices",
  },
  services: {
    src: "/images/services.png",
    alt: "Gateway Tech technicians helping customers with technology in their home",
  },
  about: {
    src: "/images/about.png",
    alt: "Gateway Tech technician and satisfied customer after a successful home tech visit",
  },
  cta: {
    // Warm in-home tech support scene
    src: unsplash("photo-1556742049-0cfed4f6a45d", 1200),
    alt: "A technician helping a customer at home with a smile",
  },
};
