'use client';

import Image from 'next/image';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border border-gray-100 dark:border-gray-700">
      <div className="relative h-80 bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-5">
        <div className="mb-3">
          <span className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-purple-600 dark:to-pink-600 text-white text-xs px-3 py-1.5 rounded-full font-semibold uppercase tracking-wide shadow-md">
            {product.category}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">{product.name}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-indigo-600 dark:text-purple-400">
            €{product.price.toFixed(2)}
          </span>
          
          <button
            onClick={handleAddToCart}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2.5 rounded-full font-bold hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-indigo-300/50 active:scale-95"
          >
            ✨ Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
}
