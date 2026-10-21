import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setVisible(true);

      const target = event.target;
      setHovering(
        target instanceof Element &&
          Boolean(
            target.closest(
              "a, button, input, textarea, select, [role='button']"
            )
          )
      );
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        opacity: visible ? 1 : 0,
        transition: "opacity 180ms ease",
      }}
    >
      <div
        className="absolute rounded-full border border-blue-300/80"
        style={{
          width: hovering ? 42 : 12,
          height: hovering ? 42 : 12,
          left: hovering ? -21 : -6,
          top: hovering ? -21 : -6,
          background: hovering
            ? "rgba(96, 165, 250, 0.10)"
            : "rgba(96, 165, 250, 0.95)",
          boxShadow: "0 0 24px rgba(59, 130, 246, 0.35)",
          transition:
            "width 180ms ease, height 180ms ease, left 180ms ease, top 180ms ease, background 180ms ease",
        }}
      />
    </div>
  );
}
