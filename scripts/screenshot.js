/* eslint-disable no-console */
const { chromium } = require("@playwright/test");
const fs = require("fs");
const path = require("path");

const BASE_URL = process.env.BASE_URL || "http://localhost:3000";
const OUT_DIR = path.join(__dirname, "..", "screenshots");

const pages = [
  { path: "/", name: "home" },
  { path: "/services", name: "services" },
  { path: "/pricing", name: "pricing" },
  { path: "/about", name: "about" },
  { path: "/contact", name: "contact" },
];

const viewports = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 },
];

const themes = ["light", "dark"];

async function run() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const browser = await chromium.launch();

  for (const viewport of viewports) {
    for (const theme of themes) {
      const context = await browser.newContext({
        viewport: { width: viewport.width, height: viewport.height },
        colorScheme: theme,
      });
      const page = await context.newPage();

      for (const { path: route, name } of pages) {
        const url = `${BASE_URL}${route}`;
        console.log(`Capturing ${url} [${viewport.name}/${theme}]`);
        await page.goto(url, { waitUntil: "networkidle" });
        // Let scroll-reveal / blob animations settle.
        await page.waitForTimeout(500);
        const fileName = `${name}-${viewport.name}-${theme}.png`;
        await page.screenshot({
          path: path.join(OUT_DIR, fileName),
          fullPage: true,
        });
      }

      await context.close();
    }
  }

  await browser.close();
  console.log(`\nDone. Screenshots saved to ${OUT_DIR}`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
