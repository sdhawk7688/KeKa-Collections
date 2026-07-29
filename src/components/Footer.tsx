import { Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-forest-800 text-cream-200/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/ChatGPT_Image_Jul_29,_2026,_05_06_19_PM.png"
              alt="KeKa Collections Logo"
              className="h-12 w-12 object-contain rounded-full bg-cream-100"
            />
            <div className="leading-tight">
              <span className="block font-display text-xl font-semibold text-cream-100">KeKa</span>
              <span className="block text-[10px] font-medium text-gold-300 tracking-[0.2em] uppercase">Collections</span>
            </div>
          </div>
          <p className="text-sm leading-relaxed max-w-sm">
            Curated sarees and kurtis celebrating the heritage of Indian textiles, crafted by artisans and delivered with care.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-display text-lg text-cream-100 mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#sarees" className="hover:text-gold-300 transition-colors">Sarees</a></li>
            <li><a href="#kurtis" className="hover:text-gold-300 transition-colors">Kurtis</a></li>
            <li><a href="#about" className="hover:text-gold-300 transition-colors">Our Story</a></li>
            <li><a href="#contact" className="hover:text-gold-300 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-lg text-cream-100 mb-4">Connect</h4>
          <div className="flex gap-3 mb-4">
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-forest-700 flex items-center justify-center hover:bg-gold-500 hover:text-forest-900 transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-forest-700 flex items-center justify-center hover:bg-gold-500 hover:text-forest-900 transition-colors">
              <Facebook size={18} />
            </a>
            <a href="mailto:hello@kekacollections.com" aria-label="Email" className="w-10 h-10 rounded-full bg-forest-700 flex items-center justify-center hover:bg-gold-500 hover:text-forest-900 transition-colors">
              <Mail size={18} />
            </a>
          </div>
          <p className="text-xs leading-relaxed">Bengaluru, Karnataka, India</p>
        </div>
      </div>

      <div className="border-t border-forest-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-cream-200/50">© {new Date().getFullYear()} KeKa Collections. All rights reserved.</p>
          <p className="text-xs text-cream-200/50">Crafted with love for Indian textiles.</p>
        </div>
      </div>
    </footer>
  );
}
