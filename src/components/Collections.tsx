import React, { useState } from 'react';
import { Heart, Eye, ShoppingCart, Star } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isSale?: boolean;
}

const Collections: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Collections' },
    { id: 'rings', name: 'Rings' },
    { id: 'necklaces', name: 'Necklaces' },
    { id: 'earrings', name: 'Earrings' },
    { id: 'bracelets', name: 'Bracelets' },
  ];

  const products: Product[] = [
    {
      id: 1,
      name: "Diamond Eternity Ring",
      price: 2499,
      originalPrice: 2999,
      image: "https://images.pexels.com/photos/1454657/pexels-photo-1454657.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      category: "rings",
      rating: 4.9,
      reviews: 127,
      isSale: true
    },
    {
      id: 2,
      name: "Pearl Elegance Necklace",
      price: 1899,
      image: "https://images.pexels.com/photos/1721644/pexels-photo-1721644.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      category: "necklaces",
      rating: 4.8,
      reviews: 89,
      isNew: true
    },
    {
      id: 3,
      name: "Sapphire Drop Earrings",
      price: 1299,
      image: "https://images.pexels.com/photos/1454658/pexels-photo-1454658.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      category: "earrings",
      rating: 4.9,
      reviews: 156
    },
    {
      id: 4,
      name: "Gold Tennis Bracelet",
      price: 3299,
      image: "https://images.pexels.com/photos/1454660/pexels-photo-1454660.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      category: "bracelets",
      rating: 4.7,
      reviews: 98
    },
    {
      id: 5,
      name: "Vintage Rose Ring",
      price: 1799,
      image: "https://images.pexels.com/photos/1454661/pexels-photo-1454661.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      category: "rings",
      rating: 4.8,
      reviews: 234,
      isNew: true
    },
    {
      id: 6,
      name: "Crystal Statement Necklace",
      price: 2199,
      originalPrice: 2699,
      image: "https://images.pexels.com/photos/1454662/pexels-photo-1454662.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      category: "necklaces",
      rating: 4.9,
      reviews: 167,
      isSale: true
    },
    {
      id: 7,
      name: "Emerald Stud Earrings",
      price: 899,
      image: "https://images.pexels.com/photos/1454663/pexels-photo-1454663.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      category: "earrings",
      rating: 4.6,
      reviews: 78
    },
    {
      id: 8,
      name: "Diamond Chain Bracelet",
      price: 4199,
      image: "https://images.pexels.com/photos/1454664/pexels-photo-1454664.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      category: "bracelets",
      rating: 4.9,
      reviews: 145
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="collections" className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Exquisite Collections
          </h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated selection of fine jewelry, each piece crafted with passion and precision to celebrate life's most precious moments.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/25'
                  : 'bg-white text-amber-800 hover:bg-amber-100 border border-amber-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Badges */}
              <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                {product.isNew && (
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    NEW
                  </span>
                )}
                {product.isSale && (
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    SALE
                  </span>
                )}
              </div>

              {/* Wishlist Button */}
              <button className="absolute top-4 right-4 z-10 p-2 bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110">
                <Heart size={16} className="text-amber-600 hover:fill-current" />
              </button>

              {/* Product Image */}
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Actions */}
                <div className={`absolute inset-0 bg-black/40 flex items-center justify-center gap-3 transition-all duration-300 ${
                  hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <button className="p-3 bg-white rounded-full hover:bg-amber-50 transition-colors duration-300 transform hover:scale-110">
                    <Eye size={20} className="text-amber-600" />
                  </button>
                  <button className="p-3 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors duration-300 transform hover:scale-110">
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={14} 
                      className={`${i < Math.floor(product.rating) ? 'text-amber-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">({product.reviews})</span>
                </div>
                
                <h3 className="font-semibold text-amber-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                  {product.name}
                </h3>
                
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-amber-600">
                    ${product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-amber-600 to-amber-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105">
            Load More Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Collections;