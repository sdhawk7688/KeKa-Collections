export default function About() {
  return (
    <section id="about" className="py-24 bg-forest-600 text-cream-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern opacity-40" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-gold-400/40" />
          <img
            src="https://images.pexels.com/photos/8886950/pexels-photo-8886950.jpeg?auto=compress&cs=tinysrgb&w=1000"
            alt="Embroidered fabric detail"
            className="relative w-full h-[420px] object-cover"
          />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold-400/40" />
        </div>
        <div>
          <span className="text-gold-300 text-xs font-medium tracking-[0.3em] uppercase">Our Story</span>
          <h2 className="font-display text-4xl sm:text-5xl text-cream-100 mt-3 mb-6 leading-tight">
            Woven with Heritage, Worn with Pride
          </h2>
          <p className="text-cream-200/80 leading-relaxed mb-5">
            KeKa Collections was born from a love for Indian textiles and the artisans who keep these traditions alive. We travel across weaving clusters to bring you sarees and kurtis that carry a story in every thread.
          </p>
          <p className="text-cream-200/80 leading-relaxed mb-8">
            From the softest cottons for daily wear to the most opulent silks for your celebrations, every piece is curated to help you feel graceful, confident, and connected to your roots.
          </p>
          <div className="grid grid-cols-3 gap-6 border-t border-cream-200/20 pt-6">
            <div>
              <div className="font-display text-3xl text-gold-300 font-semibold">500+</div>
              <div className="text-xs text-cream-200/60 tracking-wide uppercase mt-1">Happy Customers</div>
            </div>
            <div>
              <div className="font-display text-3xl text-gold-300 font-semibold">120+</div>
              <div className="text-xs text-cream-200/60 tracking-wide uppercase mt-1">Unique Designs</div>
            </div>
            <div>
              <div className="font-display text-3xl text-gold-300 font-semibold">15+</div>
              <div className="text-xs text-cream-200/60 tracking-wide uppercase mt-1">Weaver Partners</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
