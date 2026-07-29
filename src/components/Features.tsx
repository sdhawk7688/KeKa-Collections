import { Sparkles, Leaf, Heart, Award } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Handpicked Quality',
    desc: 'Each saree and kurti is hand-selected for fabric, weave, and finish.',
  },
  {
    icon: Leaf,
    title: 'Natural Fabrics',
    desc: 'Cotton, silk, and linen blends that breathe beautifully all day.',
  },
  {
    icon: Heart,
    title: 'Crafted with Love',
    desc: 'Partnering with skilled weavers and artisans across India.',
  },
  {
    icon: Award,
    title: 'Trusted by Many',
    desc: 'Loved by customers for consistent quality and elegant designs.',
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-cream-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-gold-500 text-xs font-medium tracking-[0.3em] uppercase">Why KeKa</span>
          <h2 className="font-display text-4xl sm:text-5xl text-forest-600 mt-3 mb-4">
            The KeKa Promise
          </h2>
          <p className="text-forest-700/70 text-base leading-relaxed">
            Every piece in our collection is chosen with intention — for the way it feels, the way it drapes, and the story it carries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group bg-cream-200 border border-gold-200/60 p-7 hover:shadow-lg hover:shadow-forest-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-forest-500/10 flex items-center justify-center mb-5 group-hover:bg-gold-400/20 transition-colors duration-300">
                <Icon size={22} className="text-forest-500 group-hover:text-gold-500 transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl font-semibold text-forest-600 mb-2">{title}</h3>
              <p className="text-sm text-forest-700/70 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
