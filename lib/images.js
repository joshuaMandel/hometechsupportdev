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
    // Young tech professional assisting a senior in their living room
    src: unsplash("photo-1551836022-d5d88e9218df", 1600),
    alt: "Young technician helping a homeowner with technology in their living room",
  },
  about: {
    src: unsplash("photo-1521791136064-7986c2920216", 1200),
    alt: "A technician and a happy customer shaking hands",
  },
  cta: {
    // Warm in-home tech support scene
    src: unsplash("photo-1556742049-0cfed4f6a45d", 1200),
    alt: "A technician helping a customer at home with a smile",
  },
};
