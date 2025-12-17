'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useTheme } from '@/context/ThemeContext';
import { useState } from 'react';

export default function Header() {
  const { cart } = useCart();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 text-white shadow-xl sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold hover:scale-105 transition-transform duration-300 flex items-center gap-2 group">
            <span className="text-3xl group-hover:animate-float">🏛️</span>
            <span className="bg-gradient-to-r from-amber-200 to-orange-200 bg-clip-text text-transparent">El Templo del Poster</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-amber-200 transition-all duration-300 font-medium relative group">
              Inicio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-200 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/anime" className="hover:text-amber-200 transition-all duration-300 font-medium relative group">
              Anime
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-200 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/movies" className="hover:text-amber-200 transition-all duration-300 font-medium relative group">
              Películas
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-200 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/tv" className="hover:text-amber-200 transition-all duration-300 font-medium relative group">
              Series
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-200 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/games" className="hover:text-amber-200 transition-all duration-300 font-medium relative group">
              Videojuegos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-200 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                console.log('Toggle theme clicked, current theme:', theme);
                toggleTheme();
              }}
              className="bg-white/20 backdrop-blur-sm p-2.5 rounded-full hover:bg-white/30 transition-all transform hover:scale-110 border border-white/30"
              aria-label="Toggle theme"
            >
              <span className="text-2xl">{theme === 'light' ? '🌙' : '☀️'}</span>
            </button>

            <Link 
              href="/cart" 
              className="relative bg-white text-indigo-700 px-6 py-2.5 rounded-full font-bold hover:shadow-lg hover:shadow-indigo-300/50 transition-all duration-300 transform hover:scale-105"
            >
              🛒 Carrito
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold animate-pulse shadow-lg">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
