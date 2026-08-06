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
    name: 'Pure Karni Tussar Silk Saree - Magenta',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/image (1).jpeg',
    description: 'Premium Pure Karni Tussar Silk Saree in elegant magenta with rich zari woven border, intricate floral pallu and delicate buti motifs. Perfect for weddings, festivals and special occasions.',
  },
  {
    id: 2,
    name: 'Pure Karni Tussar Silk Saree - Royal Purple',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/image (2).jpeg',
    description: 'Royal purple Pure Karni Tussar Silk Saree featuring luxurious zari weaving, elegant paisley border and beautifully crafted floral pallu for a graceful traditional look.',
  },
  {
    id: 3,
    name: 'Pure Karni Tussar Silk Saree - Deep Violet',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/image (3).jpeg',
    description: 'Beautiful deep violet Pure Karni Tussar Silk Saree adorned with classic zari motifs and premium woven border. Ideal for festive celebrations and family occasions.',
  },
  {
    id: 4,
    name: 'Pure Karni Tussar Silk Saree - Wine',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/image (4).jpeg',
    description: 'Elegant wine coloured Pure Karni Tussar Silk Saree with shimmering zari border, intricate floral pallu and timeless traditional craftsmanship.',
  },
  {
    id: 5,
    name: 'Pure Karni Tussar Silk Saree - Emerald Green',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/image (5).jpeg',
    description: 'Premium emerald green Pure Karni Tussar Silk Saree featuring exquisite zari weaving, elegant paisley border and luxurious floral pallu for a royal appearance.',
  },
  {
    id: 6,
    name: 'Pure Karni Tussar Silk Saree - Sunset Orange',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/image (6).jpeg',
    description: 'Stunning sunset orange Pure Karni Tussar Silk Saree with rich golden zari work, intricate floral pallu and delicate woven motifs for festive elegance.',
  },
  {
    id: 7,
    name: 'Handloom Floral Linen Saree',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/image (7).jpeg',
    description: 'Soft handloom linen saree in natural beige with a rich brown floral woven border and matching tassel pallu. Lightweight, breathable and perfect for office wear, casual outings and festive occasions.',
  },
];

export const kurtis: Product[] = [
  {
    id: 7,
    name: 'Green Floral Embroidery Kurti',
    category: 'Kurti',
    image: 'KeKa-Collections/images/products/kurtee_(1).jpeg',
    description: 'Elegant dark green kurti with vibrant floral hand embroidery and a soft pink dupatta. Available M to 3XL.',
  },
  {
    id: 8,
    name: 'Rose Pink Embroidered Kurti',
    category: 'Kurti',
    image: 'KeKa-Collections/images/products/kurtee_(31).jpeg',
    description: 'Stunning rose pink kurti with dense floral embroidery on the neckline, paired with a printed green dupatta. Available M to XXL.',
  },
  {
    id: 9,
    name: 'Maroon Thread Work Kurti',
    category: 'Kurti',
    image: 'KeKa-Collections/images/products/kurtee_(32).jpeg',
    description: 'Deep maroon kurti with intricate thread work and scattered floral buds on the dupatta. Available M to 3XL.',
  },
  {
    id: 10,
    name: 'Grey Butterfly Kurti',
    category: 'Kurti',
    image: 'KeKa-Collections/images/products/kurtee_(33).jpeg',
    description: 'Sophisticated grey kurti featuring a butterfly motif embroidery with delicate mirror work. Available M to 3XL.',
  },
  {
    id: 11,
    name: 'Wine Tree Motif Kurti',
    category: 'Kurti',
    image: 'KeKa-Collections/images/products/kurtee_(34).jpeg',
    description: 'Rich wine-toned kurti with a painted tree of life motif and pearl detailing on the neckline. Available M to 3XL.',
  },
  {
    id: 12,
    name: 'Green Floral Embroidery Kurti',
    category: 'Kurti',
    image: 'KeKa-Collections/images/products/kurtee_(1).jpeg',
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
