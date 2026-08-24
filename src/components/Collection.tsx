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
    name: 'Mashru Katan Silk Saree Magenta',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/image (1).jpeg',
    price: 2000,
    description: 'Mashru Katan Silk Saree in elegant magenta with rich zari woven border, intricate floral pallu and delicate buti motifs. Perfect for weddings, festivals and special occasions.',
  },
  {
    id: 2,
    name: 'Mashru Katan Silk Saree - Royal Purple',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/image (2).jpeg',
    price: 2000,
    description: 'Royal purple Mashru Katan Silk Saree featuring luxurious zari weaving, elegant paisley border and beautifully crafted floral pallu for a graceful traditional look.',
  },
  {
    id: 3,
    name: 'Mashru Katan Silk Saree - Deep Violet',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/image (3).jpeg',
    price: 2000,
    description: 'Beautiful deep violet Mashru Katan Silk Saree  adorned with classic zari motifs and premium woven border. Ideal for festive celebrations and family occasions.',
  },
  {
    id: 4,
    name: 'Mashru Katan Silk Saree - Wine',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/image (4).jpeg',
    price: 1800,
    description: 'Elegant wine coloured Mashru Katan Silk Saree with shimmering zari border, intricate floral pallu and timeless traditional craftsmanship.',
  },
  {
    id: 5,
    name: 'Mashru Katan Silk Saree  - Emerald Green',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/image (5).jpeg',
    price: 2000,
    description: 'Premium emerald green Mashru Katan Silk Saree featuring exquisite zari weaving, elegant paisley border and luxurious floral pallu for a royal appearance.',
  },
  {
    id: 6,
    name: 'Mashru Katan Silk Saree  - Sunset Orange',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/image (6).jpeg',
    price: 2000,
    description: 'Stunning sunset orange Mashru Katan Silk Saree with rich golden zari work, intricate floral pallu and delicate woven motifs for festive elegance.',
  },
  {
    id: 7,
    name: 'Semi Gadwal Pattu Saree',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/image (7).jpeg',
    price: 1700,
    description: 'Soft Semi Gadwal Pattu Saree with a rich brown floral woven border and matching tassel pallu. Lightweight, breathable and perfect for office wear, casual outings and festive occasions.',
  },
  {
  id: 8,
  name: 'Semi Gadwal Pattu Sareee',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/image (9).jpeg',
  price: 1700,
  description: 'Semi Gadwal Pattu Sareefeaturing traditional handwoven artistry, elegant motifs and a luxurious drape. Perfect for weddings, festive occasions and cultural celebrations.',
},
{
  id: 9,
  name: 'Semi Gadwal Pattu Saree',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/image (10).jpeg',
  price: 1800,
  description: 'Semi Gadwal Pattu Saree crafted with intricate weaving and timeless elegance for a graceful traditional look.',
},
{
  id: 10,
  name: 'Semi Gadwal Pattu Saree',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/image (11).jpeg',
  price: 1600,
  description: 'Beautiful handcrafted Semi Gadwal Pattu Sareee with premium quality fabric and intricate woven patterns for festive and special occasions.',
},
{
  id: 11,
  name: 'Semi Gadwal Pattu Saree Saree',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/image (12).jpeg',
  price: 1700,
  description: 'Semi Gadwal Pattu Saree woven from pure Gachi Tussar silk with rich craftsmanship and a sophisticated finish.',
},
{
  id: 12,
  name: 'Semi Gadwal Pattu Saree',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/image (13).jpeg',
  price: 1800,
  description: 'Luxurious Pure Semi Gadwal Pattu Saree showcasing traditional weaving techniques and timeless elegance.',
},
{
  id: 13,
  name: 'Semi Gadwal Pattu Saree',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/image (14).jpeg',
  price: 1700,
  description: 'Classic Semi Gadwal Pattu Saree designed with intricate detailing and a graceful drape for every celebration.',
},
{
  id: 14,
  name: 'Premium Quality Dhakai Jamdani With BP',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/image (15).jpeg',
  price: 1300,
  description: 'Premium Quality Dhakai Jamdani With BP combining heritage weaving with modern elegance.',
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
  name: 'Premium Poly Shimmer Silk',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/image (22).jpeg',
  price: 1500,
  description: 'Premium Poly Shimmer Silk saree with premium woven patterns and blouse piece, perfect for festive gatherings.',
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
  id: 25,
  name: 'Replica Pochampally Ikat Saree With Blouse Piece',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/replica1 (1).jpeg',
  price: 1800,
  description: 'Replica Pochampally Ikat Saree with matching blouse piece featuring traditional woven patterns and elegant craftsmanship.',
},
{
  id: 26,
  name: 'Replica Pochampally Ikat Saree With Blouse Piece',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/replica1 (2).jpeg',
  price: 2000,
  description: 'Replica Pochampally Ikat Saree with matching blouse piece featuring traditional woven patterns and elegant craftsmanship.',
},
{
  id: 27,
  name: 'Replica Pochampally Ikat Saree With Blouse Piece',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/replica1 (3).jpeg',
  price: 1800,
  description: 'Replica Pochampally Ikat Saree with matching blouse piece featuring traditional woven patterns and elegant craftsmanship.',
},
{
  id: 28,
  name: 'Replica Pochampally Ikat Saree With Blouse Piece',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/replica1 (4).jpeg',
  price: 2000,
  description: 'Replica Pochampally Ikat Saree with matching blouse piece featuring traditional woven patterns and elegant craftsmanship.',
},
{
  id: 29,
  name: 'Replica Pochampally Ikat Saree With Blouse Piece',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/replica1 (5).jpeg',
  price: 1800,
  description: 'Replica Pochampally Ikat Saree with matching blouse piece featuring traditional woven patterns and elegant craftsmanship.',
},
{
  id: 30,
  name: 'Replica Pochampally Ikat Saree With Blouse Piece',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/replica1 (6).jpeg',
  price: 2000,
  description: 'Replica Pochampally Ikat Saree with matching blouse piece featuring traditional woven patterns and elegant craftsmanship.',
},
{
  id: 31,
  name: 'Replica Pochampally Ikat Saree With Blouse Piece',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/replica1 (7).jpeg',
  price: 1800,
  description: 'Replica Pochampally Ikat Saree with matching blouse piece featuring traditional woven patterns and elegant craftsmanship.',
},
{
  id: 32,
  name: 'Replica Pochampally Ikat Saree With Blouse Piece',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/replica1 (8).jpeg',
  price: 2000,
  description: 'Replica Pochampally Ikat Saree with matching blouse piece featuring traditional woven patterns and elegant craftsmanship.',
},
{
  id: 33,
  name: 'Replica Pochampally Ikat Saree With Blouse Piece',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/replica1 (9).jpeg',
  price: 1800,
  description: 'Replica Pochampally Ikat Saree with matching blouse piece featuring traditional woven patterns and elegant craftsmanship.',
},
{
  id: 34,
  name: 'Replica Pochampally Ikat Saree With Blouse Piece',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/replica1 (10).jpeg',
  price: 2000,
  description: 'Replica Pochampally Ikat Saree with matching blouse piece featuring traditional woven patterns and elegant craftsmanship.',
},
{
  id: 35,
  name: 'Replica Pochampally Ikat Saree With Blouse Piece',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/replica1 (11).jpeg',
  price: 1800,
  description: 'Replica Pochampally Ikat Saree with matching blouse piece featuring traditional woven patterns and elegant craftsmanship.',
},
{
  id: 36,
  name: 'Replica Pochampally Ikat Saree With Blouse Piece',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/replica1 (12).jpeg',
  price: 2000,
  description: 'Replica Pochampally Ikat Saree with matching blouse piece featuring traditional woven patterns and elegant craftsmanship.',
},
{
  id: 37,
  name: 'Replica Pochampally Ikat Saree With Blouse Piece',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/replica1 (13).jpeg',
  price: 1800,
  description: 'Replica Pochampally Ikat Saree with matching blouse piece featuring traditional woven patterns and elegant craftsmanship.',
},
{
  id: 38,
  name: 'Replica Pochampally Ikat Saree With Blouse Piece',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/replica1 (14).jpeg',
  price: 2000,
  description: 'Replica Pochampally Ikat Saree with matching blouse piece featuring traditional woven patterns and elegant craftsmanship.',
},
{
  id: 39,
  name: 'Replica Pochampally Ikat Saree With Blouse Piece',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/replica1 (15).jpeg',
  price: 1800,
  description: 'Replica Pochampally Ikat Saree with matching blouse piece featuring traditional woven patterns and elegant craftsmanship.',
},
{
  id: 40,
  name: 'Replica Pochampally Ikat Saree With Blouse Piece',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/replica1 (16).jpeg',
  price: 2000,
  description: 'Replica Pochampally Ikat Saree with matching blouse piece featuring traditional woven patterns and elegant craftsmanship.',
},
{
  id: 41,
  name: 'Replica Pochampally Ikat Saree With Blouse Piece',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/replica1 (17).jpeg',
  price: 1800,
  description: 'Replica Pochampally Ikat Saree with matching blouse piece featuring traditional woven patterns and elegant craftsmanship.',
},
{
  id: 42,
  name: 'Replica Pochampally Ikat Saree With Blouse Piece',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/replica1 (18).jpeg',
  price: 2000,
  description: 'Replica Pochampally Ikat Saree with matching blouse piece featuring traditional woven patterns and elegant craftsmanship.',
},
{
  id: 43,
  name: 'Replica Pochampally Ikat Saree With Blouse Piece',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/replica1 (19).jpeg',
  price: 1800,
  description: 'Replica Pochampally Ikat Saree with matching blouse piece featuring traditional woven patterns and elegant craftsmanship.',
},
{
  id: 44,
  name: 'Replica Pochampally Ikat Saree With Blouse Piece',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/replica1 (20).jpeg',
  price: 2000,
  description: 'Replica Pochampally Ikat Saree with matching blouse piece featuring traditional woven patterns and elegant craftsmanship.',
},
{
  id: 45,
  name: 'Replica Pochampally Ikat Saree With Blouse Piece',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/replica1 (21).jpeg',
  price: 1800,
  description: 'Replica Pochampally Ikat Saree with matching blouse piece featuring traditional woven patterns and elegant craftsmanship.',
},

  {
    id: 46,
    name: 'Bengal Tussar',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/Bengal Tussar (1).jpeg',
    price: 3000,
    description: 'Bengal Tussar',
  },
  {
    id: 47,
    name: 'Bengal Tussar',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/Bengal Tussar (2).jpeg',
    price: 3000,
    description: 'Bengal Tussar',
  },
  {
    id: 48,
    name: 'Bengal Tussar',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/Bengal Tussar (3).jpeg',
    price: 3000,
    description: 'Bengal Tussar',
  },
  {
    id: 49,
    name: 'Bengal Tussar',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/Bengal Tussar (4).jpeg',
    price: 3000,
    description: 'Bengal Tussar',
  },
  {
    id: 50,
    name: 'Bengal Tussar',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/Bengal Tussar (5).jpeg',
    price: 3000,
    description: 'Bengal Tussar',
  },
  {
    id: 51,
    name: 'Bengal Tussar',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/Bengal Tussar (6).jpeg',
    price: 3000,
    description: 'Bengal Tussar',
  },
  {
    id: 52,
    name: 'Bengal Tussar',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/Bengal Tussar (7).jpeg',
    price: 3000,
    description: 'Bengal Tussar',
  },
  {
    id: 53,
    name: 'Bengal Tussar',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/Bengal Tussar (8).jpeg',
    price: 3000,
    description: 'Bengal Tussar',
  },
  {
    id: 54,
    name: 'Bengal Tussar',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/Bengal Tussar (9).jpeg',
    price: 3000,
    description: 'Bengal Tussar',
  },
  {
    id: 55,
    name: 'Bengal Tussar',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/Bengal Tussar (10).jpeg',
    price: 3000,
    description: 'Bengal Tussar',
  },
  {
    id: 56,
    name: 'Bengal Tussar',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/Bengal Tussar (11).jpeg',
    price: 3000,
    description: 'Bengal Tussar',
  },
  {
    id: 57,
    name: 'Bengal Tussar',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/Bengal Tussar (12).jpeg',
    price: 3000,
    description: 'Bengal Tussar',
  },
  {
    id: 58,
    name: 'Bengal Tussar',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/Bengal Tussar (13).jpeg',
    price: 3000,
    description: 'Bengal Tussar',
  },
  {
    id: 59,
    name: 'Bengal Tussar',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/Bengal Tussar (14).jpeg',
    price: 3000,
    description: 'Bengal Tussar',
  },
  {
    id: 60,
    name: 'Handloom khadi cotton sarees with a Blouse Piece',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/Handloom khadi cotton sarees with a Blouse Piece(1).jpeg',
    price: 900,
    description: 'Handloom khadi   cotton sarees with a Blouse Piece',
  },
  {
    id: 61,
    name: 'Handloom khadi   cotton sarees with a Blouse Piece',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/Handloom khadi cotton sarees with a Blouse Piece(2).jpeg',
    price: 900,
    description: 'Handloom khadi   cotton sarees with a Blouse Piece',
  },
  {
    id: 62,
    name: 'Handloom khadi   cotton sarees with a Blouse Piece',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/Handloom khadi cotton sarees with a Blouse Piece(3).jpeg',
    price: 900,
    description: 'Handloom khadi   cotton sarees with a Blouse Piece',
  },
  {
    id: 63,
    name: 'Handloom khadi   cotton sarees with a Blouse Piece',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/Handloom khadi cotton sarees with a Blouse Piece(4).jpeg',
    price: 900,
    description: 'Handloom khadi   cotton sarees with a Blouse Piece',
  },
  {
    id: 64,
    name: 'Handloom khadi   cotton sarees with a Blouse Piece',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/Handloom khadi cotton sarees with a Blouse Piece(5).jpeg',
    price: 900,
    description: 'Handloom khadi   cotton sarees with a Blouse Piece',
  },
  {
    id: 65,
    name: 'Handloom khadi   cotton sarees with a Blouse Piece',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/Handloom khadi cotton sarees with a Blouse Piece(6).jpeg',
    price: 900,
    description: 'Handloom khadi   cotton sarees with a Blouse Piece',
  },
  {
    id: 66,
    name: 'Handloom khadi   cotton sarees with a Blouse Piece',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/Handloom khadi cotton sarees with a Blouse Piece(7).jpeg',
    price: 900,
    description: 'Handloom khadi   cotton sarees with a Blouse Piece',
  },
  {
    id: 67,
    name: 'Kantha Stitch Sarees   Authentic Handmade Collection',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/Kantha Stitch Sarees Authentic Handmade Collection (1).jpeg',
    price: 1250,
    description: 'Kantha Stitch Sarees   Authentic Handmade Collection',
  },
  {
    id: 68,
    name: 'Kantha Stitch Sarees   Authentic Handmade Collection',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/Kantha Stitch Sarees Authentic Handmade Collection (2).jpeg',
    price: 1250,
    description: 'Kantha Stitch Sarees   Authentic Handmade Collection',
  },
  {
    id: 69,
    name: 'Kantha Stitch Sarees   Authentic Handmade Collection',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/Kantha Stitch Sarees Authentic Handmade Collection (3).jpeg',
    price: 1250,
    description: 'Kantha Stitch Sarees   Authentic Handmade Collection',
  },
  {
    id: 70,
    name: 'Kantha Stitch Sarees   Authentic Handmade Collection',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/Kantha Stitch Sarees Authentic Handmade Collection (4).jpeg',
    price: 1250,
    description: 'Kantha Stitch Sarees   Authentic Handmade Collection',
  },
  {
    id: 71,
    name: 'Kantha Stitch Sarees   Authentic Handmade Collection',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/Kantha Stitch Sarees Authentic Handmade Collection (5).jpeg',
    price: 1250,
    description: 'Kantha Stitch Sarees   Authentic Handmade Collection',
  },
  {
    id: 72,
    name: 'Maheshwari Silk   Sarees With Hand Printed With BP',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/Maheshwari Silk Sarees With Hand Printed With BP (1).jpeg',
    price: 2600,
    description: 'Maheshwari Silk   Sarees With Hand Printed With BP',
  },
  {
    id: 73,
    name: 'Maheshwari Silk   Sarees With Hand Printed With BP',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/Maheshwari Silk Sarees With Hand Printed With BP (2).jpeg',
    price: 2600,
    description: 'Maheshwari Silk   Sarees With Hand Printed With BP',
  },
  {
    id: 74,
    name: 'Maheshwari Silk   Sarees With Hand Printed With BP',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/Maheshwari Silk Sarees With Hand Printed With BP (3).jpeg',
    price: 2600,
    description: 'Maheshwari Silk   Sarees With Hand Printed With BP',
  },
  {
    id: 75,
    name: 'Maheshwari Silk   Sarees With Hand Printed With BP',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/Maheshwari Silk Sarees With Hand Printed With BP (4).jpeg',
    price: 2600,
    description: 'Maheshwari Silk   Sarees With Hand Printed With BP',
  },
  {
    id: 76,
    name: 'Maheshwari Silk   Sarees With Hand Printed With BP',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/Maheshwari Silk Sarees With Hand Printed With BP (5).jpeg',
    price: 2600,
    description: 'Maheshwari Silk   Sarees With Hand Printed With BP',
  },
  {
    id: 77,
    name: 'Maheshwari Silk   Sarees With Hand Printed With BP',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/Maheshwari Silk Sarees With Hand Printed With BP (6).jpeg',
    price: 2600,
    description: 'Maheshwari Silk   Sarees With Hand Printed With BP',
  },
  {
    id: 78,
    name: 'Maheshwari Silk   Sarees With Hand Printed With BP',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/Maheshwari Silk Sarees With Hand Printed With BP (7).jpeg',
    price: 2600,
    description: 'Maheshwari Silk   Sarees With Hand Printed With BP',
  },
  {
    id: 79,
    name: 'Maheshwari Silk   Sarees With Hand Printed With BP',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/Maheshwari Silk Sarees With Hand Printed With BP (8).jpeg',
    price: 2600,
    description: 'Maheshwari Silk   Sarees With Hand Printed With BP',
  },
  {
    id: 80,
    name: 'Maheshwari Silk   Sarees With Hand Printed With BP',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/Maheshwari Silk Sarees With Hand Printed With BP (9).jpeg',
    price: 2600,
    description: 'Maheshwari Silk   Sarees With Hand Printed With BP',
  },
  {
    id: 81,
    name: 'Maheshwari Silk   Sarees With Hand Printed With BP',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/Maheshwari Silk Sarees With Hand Printed With BP (10).jpeg',
    price: 2600,
    description: 'Maheshwari Silk   Sarees With Hand Printed With BP',
  },
  {
    id: 82,
    name: 'Maheshwari Silk   Sarees With Hand Printed With BP',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/Maheshwari Silk Sarees With Hand Printed With BP (11).jpeg',
    price: 2600,
    description: 'Maheshwari Silk   Sarees With Hand Printed With BP',
  },
  {
    id: 83,
    name: 'Maheshwari Silk   Sarees With Hand Printed With BP',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/Maheshwari Silk Sarees With Hand Printed With BP (12).jpeg',
    price: 2600,
    description: 'Maheshwari Silk   Sarees With Hand Printed With BP',
  },
  {
    id: 84,
    name: 'Maheshwari Silk   Sarees With Hand Printed With BP',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/Maheshwari Silk Sarees With Hand Printed With BP (13).jpeg',
    price: 2600,
    description: 'Maheshwari Silk   Sarees With Hand Printed With BP',
  },
  {
    id: 85,
    name: 'Maheshwari Silk   Sarees With Hand Printed With BP',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/Maheshwari Silk Sarees With Hand Printed With BP (14).jpeg',
    price: 2600,
    description: 'Maheshwari Silk   Sarees With Hand Printed With BP',
  },
  {
    id: 86,
    name: 'Maheshwari Silk   Sarees With Hand Printed With BP',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/Maheshwari Silk Sarees With Hand Printed With BP (15).jpeg',
    price: 2600,
    description: 'Maheshwari Silk   Sarees With Hand Printed With BP',
  },
  {
    id: 87,
    name: 'Maheshwari Silk   Sarees With Hand Printed With BP',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/Maheshwari Silk Sarees With Hand Printed With BP (16).jpeg',
    price: 2600,
    description: 'Maheshwari Silk   Sarees With Hand Printed With BP',
  },
  {
    id: 88,
    name: 'Maheshwari Silk   Sarees With Hand Printed With BP',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/Maheshwari Silk Sarees With Hand Printed With BP (17).jpeg',
    price: 2600,
    description: 'Maheshwari Silk   Sarees With Hand Printed With BP',
  },
  {
    id: 89,
    name: 'Maheshwari Silk   Sarees With Hand Printed With BP',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/Maheshwari Silk Sarees With Hand Printed With BP (18).jpeg',
    price: 2600,
    description: 'Maheshwari Silk   Sarees With Hand Printed With BP',
  },
  {
    id: 92,
    name: 'Reshamkota Saree with   Chikankari Work',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/Reshamkota Saree with Chikankari Work (1).jpeg',
    price: 1900,
    description: 'Reshamkota Saree with   Chikankari Work',
  },
  {
    id: 93,
    name: 'Reshamkota Saree with   Chikankari Work',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/Reshamkota Saree with Chikankari Work (2).jpeg',
    price: 1900,
    description: 'Reshamkota Saree with   Chikankari Work',
  },
  {
    id: 94,
    name: 'Reshamkota Saree with   Chikankari Work',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/Reshamkota Saree with Chikankari Work (3).jpeg',
    price: 1900,
    description: 'Reshamkota Saree with   Chikankari Work',
  },
  {
    id: 95,
    name: 'Reshamkota Saree with   Chikankari Work',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/Reshamkota Saree with Chikankari Work (4).jpeg',
    price: 1900,
    description: 'Reshamkota Saree with   Chikankari Work',
  },
  {
    id: 96,
    name: 'Premium Quality Soft Tussar ',
    category: 'Saree',
    image: '/KeKa-Collections/images/products/soft tussar (1).jpeg',
    price: 1800,
    description: 'Premium Quality Soft Tussar',
  },
  {
  id: 97,
  name: 'Premium Quality Soft Tussar',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/soft tussar (2).jpeg',
  price: 1800,
  description: 'Premium Quality Soft Tussar'
},
{
  id: 98,
  name: 'Premium Quality Soft Tussar',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/soft tussar (3).jpeg',
  price: 1800,
  description: 'Premium Quality Soft Tussar'
},
{
  id: 99,
  name: 'Premium Quality Soft Tussar',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/soft tussar (4).jpeg',
  price: 1800,
  description: 'Premium Quality Soft Tussar'
},
{
  id: 100,
  name: 'Premium Quality Soft Tussar',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/soft tussar (5).jpeg',
  price: 1800,
  description: 'Premium Quality Soft Tussar'
},
{
  id: 101,
  name: 'Premium Quality Soft Tussar',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/soft tussar (6).jpeg',
  price: 1800,
  description: 'Premium Quality Soft Tussar'
},
{
  id: 102,
  name: 'Viscose   Khadi Handloom Saree With a Blouse piece ',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/Viscose Khadi Handloom Saree With a Blouse piece (1).jpeg',
  price: 1300,
  description: 'Viscose   Khadi Handloom Saree With a Blouse piece'
},
{
  id: 103,
  name: 'Viscose   Khadi Handloom Saree With a Blouse piece ',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/Viscose Khadi Handloom Saree With a Blouse piece (2).jpeg',
  price: 1300,
  description: 'Viscose   Khadi Handloom Saree With a Blouse piece'
},
{
  id: 104,
  name: 'Viscose   Khadi Handloom Saree With a Blouse piece ',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/Viscose Khadi Handloom Saree With a Blouse piece (3).jpeg',
  price: 1300,
  description: 'Viscose   Khadi Handloom Saree With a Blouse piece'
},
{
  id: 105,
  name: 'Viscose   Khadi Handloom Saree With a Blouse piece ',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/Viscose Khadi Handloom Saree With a Blouse piece (4).jpeg',
  price: 1300,
  description: 'Viscose   Khadi Handloom Saree With a Blouse piece'
},
{
  id: 106,
  name: 'Applique Work Sarees For Women ',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/applique (1).jpeg',
  price: 1300,
  description: 'Applique Work Sarees For Women '
},
{
  id: 107,
  name: 'Applique Work Sarees For Women ',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/applique (2).jpeg',
  price: 1300,
  description: 'Applique Work Sarees For Women '
},
{
  id: 108,
  name: 'Applique Work Sarees For Women ',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/applique (3).jpeg',
  price: 1300,
  description: 'Applique Work Sarees For Women '
},
{
  id: 109,
  name: 'Applique Work Sarees For Women ',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/applique (4).jpeg',
  price: 1300,
  description: 'Applique Work Sarees For Women '
},
{
  id: 110,
  name: 'Applique Work Sarees For Women ',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/applique (5).jpeg',
  price: 1300,
  description: 'Applique Work Sarees For Women '
},
{
  id: 111,
  name: 'Applique Work Sarees For Women ',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/applique (6).jpeg',
  price: 1300,
  description: 'Applique Work Sarees For Women '
},
{
  id: 112,
  name: 'Applique Work Sarees For Women ',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/applique (7).jpeg',
  price: 1300,
  description: 'Applique Work Sarees For Women '
},
{
    id: 113,
  name: 'Jamdani with Katadhan Work',
  category: 'Saree',
  image: '/KeKa-Collections/images/products/Katadhan-1.jpeg',
  price: 2800,
  description: 'Katdhana Work Jamdani'
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
  const [quickView, setQuickView] = useState(false);

  return (
    <>
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

          <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <button
              type="button"
              onClick={() => setQuickView(true)}
              className="w-full bg-gold-400 text-forest-900 py-2.5 text-xs font-semibold tracking-wide flex items-center justify-center gap-2 hover:bg-gold-300 transition-colors"
            >
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
            <span className="text-xl font-bold text-red-600">
              PRICE: ₹{product.price}
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

      {quickView && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
          onClick={() => setQuickView(false)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-cream-50 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setQuickView(false)}
              aria-label="Close quick view"
              className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-white/90 text-forest-900 text-2xl flex items-center justify-center hover:bg-gold-400 transition-colors"
            >
              ×
            </button>

            <div className="grid md:grid-cols-2">
              <div className="bg-cream-200 min-h-[320px]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full max-h-[70vh] object-contain"
                />
              </div>

              <div className="p-6 sm:p-10 flex flex-col justify-center">
                <span className="text-gold-500 text-xs font-semibold tracking-[0.25em] uppercase mb-3">
                  {product.category}
                </span>

                <h2 className="font-display text-3xl text-forest-600 mb-5">
                  {product.name}
                </h2>

                <div className="flex items-center gap-3 flex-wrap mb-6">
                  <span className="text-2xl font-bold text-red-600">
                    PRICE: ₹{product.price}
                  </span>
                  <span className="text-base text-gray-400 line-through">
                    ₹{Math.round((product.price ?? 0) / 0.7)}
                  </span>
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                    30% OFF
                  </span>
                </div>

                <p className="text-forest-700/70 leading-relaxed mb-8">
                  {product.description}
                </p>

                <button
                  type="button"
                  onClick={() => setQuickView(false)}
                  className="w-full bg-forest-600 text-cream-100 py-3 text-sm font-semibold tracking-wide hover:bg-forest-700 transition-colors rounded-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
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
          {[...products]
  .sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity))
  .map((p) => (
    <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
