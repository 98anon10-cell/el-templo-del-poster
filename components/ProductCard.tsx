'use client';

import Image from 'next/image';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { Star, TrendingUp, ShoppingCart, Truck } from 'lucide-react';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const isPopular = product.price > 20;
  const rating = (4 + Math.random()).toFixed(1);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border border-gray-100 dark:border-gray-700"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-80 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        {isPopular && (
          <div className="absolute top-3 left-3 z-10 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
            <TrendingUp className="w-3 h-3" />
            POPULAR
          </div>
        )}
        <div className="absolute top-3 right-3 z-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
          {rating}
        </div>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className={`object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-white text-sm font-semibold">
            <Truck className="w-4 h-4" />
            Envío GRATIS 24-48h
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <div className="mb-3">
          <span className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-purple-600 dark:to-pink-600 text-white text-xs px-3 py-1.5 rounded-full font-semibold uppercase tracking-wide shadow-md">
            {product.category}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 line-clamp-2 min-h-[56px]">{product.name}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between gap-3">
          <div>
            <span className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              €{product.price.toFixed(2)}
            </span>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Envío incluido</p>
          </div>
          
          <button
            onClick={handleAddToCart}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-3 rounded-xl font-bold hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-indigo-300/50 active:scale-95 flex items-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
}
