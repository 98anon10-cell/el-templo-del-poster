'use client';

import { useState } from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import SearchBar from '@/components/SearchBar';

export default function TVPage() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const tvProducts = products.filter(p => p.category === 'tv');
  
  const filteredProducts = tvProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-rose-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-600 via-rose-500 to-red-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-white/5"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block mb-4 animate-float">
            <span className="text-6xl drop-shadow-2xl">📺</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Posters de Series
          </h1>
          <p className="text-xl text-pink-100">
            Tus series favoritas en formato poster
          </p>
        </div>
      </section>

      {/* Search and Products */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <SearchBar 
          onSearch={setSearchQuery}
          placeholder="Busca tu serie favorita..."
        />

        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">😢</div>
            <h3 className="text-2xl font-bold text-gray-600 mb-2">
              No se encontraron resultados
            </h3>
            <p className="text-gray-500">
              Intenta con otro término de búsqueda
            </p>
          </div>
        ) : (
          <>
            <div className="mb-8 text-center">
              <p className="text-gray-600 dark:text-gray-300">
                Mostrando <span className="font-bold text-pink-600 dark:text-pink-400">{filteredProducts.length}</span> {filteredProducts.length === 1 ? 'poster' : 'posters'}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
