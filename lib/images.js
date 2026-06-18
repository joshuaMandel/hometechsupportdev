// Centralized marketing imagery (Unsplash — free to use, no attribution required).
//
// To change any picture, just swap the photo id passed to `unsplash()` below
// for a different Unsplash photo id (the part after "/photo-" in an Unsplash
// URL). Nothing else needs to change.

const unsplash = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  hero: {
    src: unsplash("photo-1600880292203-757bb62b4baf", 1400),
    alt: "Friendly technician helping a homeowner with a laptop at home",
  },
  services: {
    src: unsplash("photo-1531297484001-80022131f5a1", 1600),
    alt: "Home devices and gadgets set up and working together",
  },
  about: {
    src: unsplash("photo-1521791136064-7986c2920216", 1200),
    alt: "A technician and a happy customer shaking hands",
  },
  cta: {
    src: unsplash("photo-1486312338219-ce68d2c6f44d", 1200),
    alt: "A person comfortably using a laptop at home",
  },
};
