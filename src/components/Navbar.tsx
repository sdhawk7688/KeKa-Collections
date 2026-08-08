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
          ? 'bg-[#f0e8d9] shadow-md shadow-forest-500/10'
          : 'bg-[#f0e8d9]'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* =====================================================
            LOGO
            Shows only the upper Peacock + K from logo.png
            with KeKa Collections text beside it.
        ====================================================== */}
        <a
          href="#home"
          className="flex items-center gap-3 shrink-0"
          aria-label="KeKa Collections"
        >
          {/* Cropped upper part of the existing logo */}
          <div
            className="relative w-[88px] h-[68px] overflow-hidden shrink-0"
            style={{ backgroundColor: '#f0e8d9' }}
          >
            <img
              src="/KeKa-Collections/logo.png"
              alt="KeKa logo"
              className="absolute max-w-none h-auto w-[190px]"
              style={{
                left: '-43px',
                top: '-10px',
                mixBlendMode: 'multiply',
              }}
            />
          </div>

          {/* Brand text */}
          <div className="leading-none">
            <h1 className="font-display text-2xl text-forest-600">
              KeKa
            </h1>

            <p className="text-xs tracking-[0.3em] uppercase text-gold-500 mt-1">
              Collections
            </p>
          </div>
        </a>

        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}
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

        {/* =====================================================
            SHOP NOW BUTTON
        ====================================================== */}
        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 bg-forest-600 text-cream-100 px-5 py-2.5 text-sm font-medium tracking-wide hover:bg-forest-700 transition-colors duration-200 rounded-sm"
        >
          <ShoppingBag size={15} />
          Shop Now
        </a>

        {/* =====================================================
            MOBILE MENU BUTTON
        ====================================================== */}
        <button
          className="md:hidden p-2 text-forest-600"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-[#f0e8d9] border-t border-gold-200`}
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
