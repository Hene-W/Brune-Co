import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Menu", href: "#menu" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-cream/80 backdrop-blur-sm border-b border-brown/10">
      <nav
        aria-label="Main navigation"
        className="flex items-center justify-between px-6 py-4 md:px-12"
      >
        <a href="#" className="font-heading text-lg font-medium text-dark">
          Brune & Co.
        </a>

        {/* Liens desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted hover:text-dark transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#reservation"
          className="hidden md:inline-block bg-gold text-dark px-5 py-2 rounded-full text-sm font-medium"
        >
          Find your table
        </a>

        {/* Bouton menu mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="md:hidden text-dark"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Menu mobile */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-1 px-6 pb-4 animate-fade-in-up">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-sm text-dark"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default Navbar