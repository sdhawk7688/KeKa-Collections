import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Sarees', href: '#sarees' },
  { label: 'Kurtis', href: '#kurtis' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-200 shadow-md shadow-forest-500/10 backdrop-blur-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src="/ChatGPT_Image_Jul_29,_2026,_05_06_19_PM.png"
            alt="KeKa Collections Logo"
            className="h-12 w-12 object-contain rounded-full"
          />
          <div className="leading-tight">
            <span className="block font-display text-xl font-semibold text-forest-600 tracking-wide">KeKa</span>
            <span className="block text-[10px] font-medium text-gold-600 tracking-[0.2em] uppercase">Collections</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-sm font-medium text-forest-600 hover:text-gold-500 tracking-wide transition-colors duration-200 relative group"
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold-400 group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 bg-forest-600 text-cream-100 px-5 py-2.5 text-sm font-medium tracking-wide hover:bg-forest-700 transition-colors duration-200 rounded-sm"
        >
          <ShoppingBag size={15} />
          Shop Now
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-forest-600"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-cream-200 border-t border-gold-200`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                className="text-forest-600 font-medium text-base hover:text-gold-500 transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 bg-forest-600 text-cream-100 px-5 py-2.5 text-sm font-medium"
            >
              <ShoppingBag size={15} />
              Shop Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
