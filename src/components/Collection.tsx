import { useState } from 'react';
import { Eye } from 'lucide-react';

export interface Product {
  id: number;
  name: string;
  category: 'Saree' | 'Kurti';
  image: string;
  description: string;
}

export const sarees: Product[] = [
  {
    id: 1,
    name: 'Royal Pink Silk Saree',
    category: 'Saree',
    image: 'https://images.pexels.com/photos/35108809/pexels-photo-35108809.jpeg?auto=compress&cs=tinysrgb&w=900',
    description: 'Intricate pink silk with woven gold motifs — perfect for weddings and festivities.',
  },
  {
    id: 2,
    name: 'Bengaluru Luxe Drape',
    category: 'Saree',
    image: 'https://images.pexels.com/photos/27575104/pexels-photo-27575104.jpeg?auto=compress&cs=tinysrgb&w=900',
    description: 'A luxurious drape paired with traditional temple jewelry for regal occasions.',
  },
  {
    id: 3,
    name: 'Vibrant Heritage Saree',
    category: 'Saree',
    image: 'https://images.pexels.com/photos/28943670/pexels-photo-28943670.jpeg?auto=compress&cs=tinysrgb&w=900',
    description: 'Bold colors and elegant borders for a striking everyday celebration look.',
  },
  {
    id: 4,
    name: 'Pink Silk with Gold Jewelry',
    category: 'Saree',
    image: 'https://images.pexels.com/photos/35108811/pexels-photo-35108811.jpeg?auto=compress&cs=tinysrgb&w=900',
    description: 'Soft pink silk that glows indoors — a graceful choice for evening events.',
  },
  {
    id: 5,
    name: 'Red & Gold Traditional',
    category: 'Saree',
    image: 'https://images.pexels.com/photos/17468599/pexels-photo-17468599.jpeg?auto=compress&cs=tinysrgb&w=900',
    description: 'Classic red and gold weave embodying timeless traditional elegance.',
  },
  {
    id: 6,
    name: 'Ornate Bridal Drape',
    category: 'Saree',
    image: 'https://images.pexels.com/photos/17152210/pexels-photo-17152210.jpeg?auto=compress&cs=tinysrgb&w=900',
    description: 'Ornate bridal saree with elegant makeup and jewelry styling.',
  },
];

export const kurtis: Product[] = [
  {
    id: 7,
    name: 'Green Floral Embroidery Kurti',
    category: 'Kurti',
    image: '/images/products/kurtee_(1).jpeg',
    description: 'Elegant dark green kurti with vibrant floral hand embroidery and a soft pink dupatta. Available M to 3XL.',
  },
  {
    id: 8,
    name: 'Rose Pink Embroidered Kurti',
    category: 'Kurti',
    image: '/images/products/kurtee_(31).jpeg',
    description: 'Stunning rose pink kurti with dense floral embroidery on the neckline, paired with a printed green dupatta. Available M to XXL.',
  },
  {
    id: 9,
    name: 'Maroon Thread Work Kurti',
    category: 'Kurti',
    image: '/images/products/kurtee_(32).jpeg',
    description: 'Deep maroon kurti with intricate thread work and scattered floral buds on the dupatta. Available M to 3XL.',
  },
  {
    id: 10,
    name: 'Grey Butterfly Kurti',
    category: 'Kurti',
    image: '/images/products/kurtee_(33).jpeg',
    description: 'Sophisticated grey kurti featuring a butterfly motif embroidery with delicate mirror work. Available M to 3XL.',
  },
  {
    id: 11,
    name: 'Wine Tree Motif Kurti',
    category: 'Kurti',
    image: '/images/products/kurtee_(34).jpeg',
    description: 'Rich wine-toned kurti with a painted tree of life motif and pearl detailing on the neckline. Available M to 3XL.',
  },
  {
    id: 12,
    name: 'Green Floral Embroidery Kurti',
    category: 'Kurti',
    image: '/images/products/kurtee_(1).jpeg',
    description: 'Elegant dark green kurti with vibrant floral hand embroidery and a soft pink dupatta. Available M to 3XL.',
  },
];

function ProductCard({ product }: { product: Product }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="group relative bg-cream-200 overflow-hidden border border-gold-200/50 hover:shadow-xl hover:shadow-forest-500/10 transition-all duration-500"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${hover ? 'scale-110' : 'scale-100'}`}
        />
        <div className={`absolute inset-0 bg-forest-900/30 transition-opacity duration-500 ${hover ? 'opacity-100' : 'opacity-0'}`} />
        <span className="absolute top-3 left-3 bg-cream-100/90 text-forest-600 text-[10px] font-semibold tracking-[0.15em] uppercase px-3 py-1">
          {product.category}
        </span>
        <div className={`absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500`}>
          <button className="w-full bg-gold-400 text-forest-900 py-2.5 text-xs font-semibold tracking-wide flex items-center justify-center gap-2 hover:bg-gold-300 transition-colors">
            <Eye size={14} />
            Quick View
          </button>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-forest-600 mb-1">{product.name}</h3>
        <p className="text-xs text-forest-700/60 leading-relaxed line-clamp-2">{product.description}</p>
      </div>
    </div>
  );
}

export default function Collection({ id, title, subtitle, products }: { id: string; title: string; subtitle: string; products: Product[] }) {
  return (
    <section id={id} className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-gold-500 text-xs font-medium tracking-[0.3em] uppercase">Collection</span>
          <h2 className="font-display text-4xl sm:text-5xl text-forest-600 mt-3 mb-4">{title}</h2>
          <p className="text-forest-700/70 text-base leading-relaxed">{subtitle}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
