import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch (e) {}
  }

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative h-9 w-9 inline-flex items-center justify-center rounded-lg border border-border bg-surface-2 text-ink hover:border-brand transition-colors"
    >
      {/* Render icon only after mount to avoid hydration mismatch */}
      {mounted && (
        <span aria-hidden="true" className="text-base leading-none">
          {dark ? "☀️" : "🌙"}
        </span>
      )}
    </button>
  );
}
