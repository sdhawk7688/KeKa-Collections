import { useState } from 'react';
import { Eye } from 'lucide-react';

export interface Product {
  id: number;
  name: string;
  category: 'Saree' | 'Kurti';
  image: string;
  description: string;
  price?: number;
}

export const sarees: Product[] = [
  {
    id: 1,
    name: 'Pure Karni Tussar Silk Saree - Magenta',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/image (1).jpeg',
    price: 6000,
    description: 'Premium Pure Karni Tussar Silk Saree in elegant magenta with rich zari woven border, intricate floral pallu and delicate buti motifs. Perfect for weddings, festivals and special occasions.',
  },
  {
    id: 2,
    name: 'Pure Karni Tussar Silk Saree - Royal Purple',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/image (2).jpeg',
    price: 6000,
    description: 'Royal purple Pure Karni Tussar Silk Saree featuring luxurious zari weaving, elegant paisley border and beautifully crafted floral pallu for a graceful traditional look.',
  },
  {
    id: 3,
    name: 'Pure Karni Tussar Silk Saree - Deep Violet',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/image (3).jpeg',
    price: 6000,
    description: 'Beautiful deep violet Pure Karni Tussar Silk Saree adorned with classic zari motifs and premium woven border. Ideal for festive celebrations and family occasions.',
  },
  {
    id: 4,
    name: 'Pure Karni Tussar Silk Saree - Wine',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/image (4).jpeg',
    price: 6000,
    description: 'Elegant wine coloured Pure Karni Tussar Silk Saree with shimmering zari border, intricate floral pallu and timeless traditional craftsmanship.',
  },
  {
    id: 5,
    name: 'Pure Karni Tussar Silk Saree - Emerald Green',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/image (5).jpeg',
    price: 6000,
    description: 'Premium emerald green Pure Karni Tussar Silk Saree featuring exquisite zari weaving, elegant paisley border and luxurious floral pallu for a royal appearance.',
  },
  {
    id: 6,
    name: 'Pure Karni Tussar Silk Saree - Sunset Orange',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/image (6).jpeg',
    price: 6000,
    description: 'Stunning sunset orange Pure Karni Tussar Silk Saree with rich golden zari work, intricate floral pallu and delicate woven motifs for festive elegance.',
  },
  {
    id: 7,
    name: 'Handloom Floral Linen Saree',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/image (7).jpeg',
    price: 6000,
    description: 'Soft handloom linen saree in natural beige with a rich brown floral woven border and matching tassel pallu. Lightweight, breathable and perfect for office wear, casual outings and festive occasions.',
  },
  {
  id: 8,
  name: 'Pure Gachi Tussar Handloom Jamdani Saree',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/image (9).jpeg',
  price: 6000,
  description: 'Premium Pure Gachi Tussar Handloom Jamdani Saree featuring traditional handwoven artistry, elegant motifs and a luxurious drape. Perfect for weddings, festive occasions and cultural celebrations.',
},
{
  id: 9,
  name: 'Pure Gachi Tussar Handloom Jamdani Saree',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/image (10).jpeg',
  price: 5800,
  description: 'Exquisite Pure Gachi Tussar Handloom Jamdani Saree crafted with intricate weaving and timeless elegance for a graceful traditional look.',
},
{
  id: 10,
  name: 'Pure Gachi Tussar Handloom Jamdani Saree',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/image (11).jpeg',
  price: 6000,
  description: 'Beautiful handcrafted Gachi Tussar Jamdani Saree with premium quality fabric and intricate woven patterns for festive and special occasions.',
},
{
  id: 11,
  name: 'Pure Gachi Tussar Handloom Jamdani Saree',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/image (12).jpeg',
  price: 6000,
  description: 'Elegant handloom Jamdani saree woven from pure Gachi Tussar silk with rich craftsmanship and a sophisticated finish.',
},
{
  id: 12,
  name: 'Pure Gachi Tussar Handloom Jamdani Saree',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/image (13).jpeg',
  price: 6000,
  description: 'Luxurious Pure Gachi Tussar Jamdani Saree showcasing traditional weaving techniques and timeless elegance.',
},
{
  id: 13,
  name: 'Pure Gachi Tussar Handloom Jamdani Saree',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/image (14).jpeg',
  price: 5800,
  description: 'Classic handloom Gachi Tussar Jamdani Saree designed with intricate detailing and a graceful drape for every celebration.',
},
{
  id: 14,
  name: 'Pure Gachi Tussar Handloom Jamdani Saree',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/image (15).jpeg',
  price: 6000,
  description: 'Premium handcrafted Gachi Tussar Jamdani Saree combining heritage weaving with modern elegance.',
},
{
  id: 15,
  name: 'Premium Quality Dhakai Jamdani With BP',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/image (16).jpeg',
  price: 1300,
  description: 'Premium Quality Dhakai Jamdani Saree with matching blouse piece, lightweight fabric and elegant woven motifs for daily and festive wear.',
},
{
  id: 16,
  name: 'Premium Quality Dhakai Jamdani With BP',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/image (17).jpeg',
  price: 1300,
  description: 'Soft and comfortable Dhakai Jamdani Saree with blouse piece featuring beautiful traditional weaving and a graceful finish.',
},
{
  id: 17,
  name: 'Premium Quality Dhakai Jamdani With BP',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/image (18).jpeg',
  price: 1300,
  description: 'Elegant Dhakai Jamdani Saree with premium fabric and matching blouse piece, suitable for casual and festive occasions.',
},
{
  id: 18,
  name: 'Premium Quality Dhakai Jamdani With BP',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/image (19).jpeg',
  price: 1300,
  description: 'Beautiful Dhakai Jamdani Saree with woven detailing and blouse piece, offering comfort and timeless style.',
},
{
  id: 19,
  name: 'Premium Quality Dhakai Jamdani With BP',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/image (20).jpeg',
  price: 1300,
  description: 'Traditional Dhakai Jamdani Saree crafted with premium quality fabric and elegant motifs for everyday elegance.',
},
{
  id: 20,
  name: 'Premium Quality Dhakai Jamdani With BP',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/image (21).jpeg',
  price: 1400,
  description: 'Premium Dhakai Jamdani Saree with matching blouse piece featuring refined weaving and graceful appeal.',
},
{
  id: 21,
  name: 'Premium Quality Dhakai Jamdani With BP',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/image (22).jpeg',
  price: 1500,
  description: 'Stylish Dhakai Jamdani Saree with premium woven patterns and blouse piece, perfect for festive gatherings.',
},
{
  id: 22,
  name: 'Poly Shimmer Fabric Paired Embroidery',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/image (23).jpeg',
  price: 2500,
  description: 'Elegant Poly Shimmer Fabric Saree with exquisite embroidery work and matching blouse piece for parties and special occasions.',
},
{
  id: 23,
  name: 'Premium Cotton Silk With BP',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/image (24).jpeg',
  price: 2200,
  description: 'Premium Cotton Silk Saree with matching blouse piece, offering a soft feel, rich texture and elegant traditional styling.',
},
{
  id: 24,
  name: 'Semi & Pure Gadwal Silk & Pattu Sarees',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/image (25).jpeg',
  price: 2000,
  description: 'Beautiful Semi & Pure Gadwal Silk and Pattu Saree featuring classic weaving, vibrant colours and a graceful drape for festive occasions.',
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
  <h3 className="font-display text-lg font-semibold text-forest-600 mb-2">
    {product.name}
  </h3>

  <div className="flex items-center gap-2 mb-3">
    <span className="text-xl font-bold text-forest-600">
      ₹{product.price}
    </span>

    <span className="text-sm text-gray-400 line-through">
      ₹{Math.round((product.price ?? 0) / 0.7)}
    </span>

    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
      30% OFF
    </span>
  </div>

  <p className="text-xs text-forest-700/60 leading-relaxed line-clamp-2">
    {product.description}
  </p>
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
