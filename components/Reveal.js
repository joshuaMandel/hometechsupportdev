import { useEffect, useRef, useState } from "react";

export default function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  style,
  children,
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      className={`transition-all duration-700 ease-out ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
