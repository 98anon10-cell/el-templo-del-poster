'use client';

import { Mail, Instagram, Twitter, Facebook, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Sobre nosotros */}
          <div>
            <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
              <span className="text-3xl">🏛️</span>
              El Templo del Poster
            </h3>
            <p className="text-gray-400 mb-4">
              Tu destino para posters únicos de anime, películas, series y videojuegos. Calidad premium garantizada.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-indigo-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-indigo-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-indigo-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-white font-bold mb-4">Categorías</h4>
            <ul className="space-y-2">
              <li><a href="/anime" className="hover:text-white transition-colors">Anime</a></li>
              <li><a href="/movies" className="hover:text-white transition-colors">Películas</a></li>
              <li><a href="/tv" className="hover:text-white transition-colors">Series</a></li>
              <li><a href="/games" className="hover:text-white transition-colors">Videojuegos</a></li>
            </ul>
          </div>

          {/* Información */}
          <div>
            <h4 className="text-white font-bold mb-4">Información</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Envíos y Devoluciones</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Garantía de Calidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-white font-bold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-indigo-400" />
                <a href="mailto:hola@templodelposter.es" className="hover:text-white transition-colors">hola@templodelposter.es</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-indigo-400" />
                <span>+34 900 123 456</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-indigo-400 mt-1" />
                <span>Madrid, España</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-white font-bold mb-2">Suscríbete a nuestro newsletter</h4>
            <p className="text-gray-400 mb-4 text-sm">Recibe ofertas exclusivas y novedades</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:outline-none"
              />
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-2 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all">
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} El Templo del Poster. Todos los derechos reservados.</p>
          <div className="flex justify-center gap-6 mt-3">
            <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
