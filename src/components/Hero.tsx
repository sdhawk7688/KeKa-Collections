import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src=src="/KeKa-Collections/logo.png"
          alt="KeKa Collections"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900/90 via-forest-800/70 to-forest-700/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-gold-300 text-xs font-medium tracking-[0.3em] uppercase mb-6">
            <span className="h-px w-8 bg-gold-300" />
            KeKa Collections
          </span>
          <h1 className="font-display text-cream-100 text-5xl sm:text-6xl lg:text-7xl leading-[1.05] font-medium mb-6 text-balance">
            Timeless Sarees & Kurtis, Crafted with Love
          </h1>
          <p className="text-cream-200/90 text-lg leading-relaxed max-w-xl mb-10">
            Discover handpicked sarees and kurtis that celebrate the artistry of Indian textiles — from everyday elegance to bridal grandeur.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#sarees"
              className="group inline-flex items-center gap-2 bg-gold-400 text-forest-900 px-7 py-3.5 text-sm font-semibold tracking-wide hover:bg-gold-300 transition-colors duration-200 rounded-sm"
            >
              Explore Collection
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 border border-cream-200/40 text-cream-100 px-7 py-3.5 text-sm font-semibold tracking-wide hover:bg-cream-100/10 transition-colors duration-200 rounded-sm"
            >
              Our Story
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 text-cream-200/70">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <span className="w-px h-10 bg-cream-200/40 animate-pulse" />
      </div>
    </section>
  );
}
