import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <>
      <nav className="fixed w-full z-50 h-20 flex items-center justify-around">
        {/* Logo/Title */}
        <div>
          <a className="text-2xl md:text-4xl font-extrabold bg-gradient-to-l from-blue-800 via-red-400 to-cyan-400 bg-clip-text text-transparent" href={"#home"}>
            Vivin's Portfolio
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {navItems.map((nav, index) => (
            <a
              key={index}
              href={nav.href}
              className="font-bold text-lg text-white hover:text-blue-500 transition-colors"
            >
              {nav.name}
            </a>
          ))}
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen((res) => !res)}
        >
          {isMenuOpen ? <X className="text-white" /> : <Menu />}
        </button>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-gray-700">
          {navItems.map((nav, index) => (
            <a
              key={index}
              href={nav.href}
              className="text-2xl font-semibold text-white hover:text-cyan-300 transition-colors"
              onClick={() => setIsMenuOpen(false)} // close menu after click
            >
              {nav.name}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
