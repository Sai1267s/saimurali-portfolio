import { useEffect, useState } from "react";
import { Code2, Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Journey", id: "journey" },
  { name: "Contact", id: "contact" },
];

const sectionIds = [
  "home",
  "about",
  "skills",
  "projects",
  "certificates",
  "resume",
  "journey",
  "contact",
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Track the current section without IntersectionObserver flickering.
  useEffect(() => {
    let ticking = false;

    const updateNavbar = () => {
      setScrolled(window.scrollY > 20);

      const marker = window.innerHeight * 0.35;
      let currentSection = "home";

      for (const id of sectionIds) {
        const section = document.getElementById(id);

        if (
          section &&
          section.getBoundingClientRect().top <= marker
        ) {
          currentSection = id;
        }
      }

      setActive((previous) =>
        previous === currentSection ? previous : currentSection
      );

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    updateNavbar();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Lock background scrolling when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navigateTo = (id) => {
    const section = document.getElementById(id);

    if (!section) return;

    setActive(id);
    setMenuOpen(false);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <header
        className={`ios-navbar ${
          scrolled ? "ios-navbar-scrolled" : ""
        }`}
      >
        <button
          type="button"
          className="ios-brand"
          onClick={() => navigateTo("home")}
          aria-label="Go to home"
        >
          <span className="ios-brand-icon">
            <Code2 size={20} />
          </span>

          <span>
            Sai<span className="ios-brand-dot">.</span>
          </span>
        </button>

        <nav
          className="ios-navbar-center"
          aria-label="Main navigation"
        >
          <div className="ios-nav-links">
            {links.map((link) => (
              <button
                type="button"
                key={link.id}
                onClick={() => navigateTo(link.id)}
                className="ios-nav-link"
              >
                <span className="ios-link-label">
                  {link.name}
                </span>
              </button>
            ))}
          </div>
        </nav>

        <button
          type="button"
          className="ios-menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      {menuOpen && (
        <>
          <button
            type="button"
            className="ios-menu-backdrop"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          />

          <nav
            className="ios-mobile-menu"
            aria-label="Mobile navigation"
          >
            <p className="ios-menu-title">
              Explore portfolio
            </p>

            {links.map((link, index) => (
              <button
                type="button"
                key={link.id}
                onClick={() => navigateTo(link.id)}
                className={`ios-mobile-link ${
                  active === link.id
                    ? "ios-mobile-link-active"
                    : ""
                }`}
              >
                <span className="ios-mobile-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span>{link.name}</span>

                <ArrowUpRight size={16} />
              </button>
            ))}
          </nav>
        </>
      )}
    </>
  );
}