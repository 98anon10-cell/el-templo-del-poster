import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  const categories = [
    { id: 'anime', name: 'Anime', emoji: '🎌' },
    { id: 'movies', name: 'Películas', emoji: '🎬' },
    { id: 'tv', name: 'Series', emoji: '📺' },
    { id: 'games', name: 'Videojuegos', emoji: '🎮' },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-100/10 rounded-full blur-3xl"></div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-violet-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-white/5"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block mb-6 animate-float">
            <span className="text-7xl drop-shadow-2xl">🏛️</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg">
            El Templo del Poster
          </h1>
          <p className="text-xl md:text-3xl mb-8 text-indigo-100 font-medium drop-shadow-md">
            ✨ Decora tu espacio con tus personajes favoritos ✨
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg font-semibold">
            <a href="/anime" className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full border border-white/30 hover:bg-white/30 transition-all cursor-pointer hover:scale-110 transform">🎌 Anime</a>
            <a href="/movies" className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full border border-white/30 hover:bg-white/30 transition-all cursor-pointer hover:scale-110 transform">🎬 Películas</a>
            <a href="/tv" className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full border border-white/30 hover:bg-white/30 transition-all cursor-pointer hover:scale-110 transform">📺 Series</a>
            <a href="/games" className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full border border-white/30 hover:bg-white/30 transition-all cursor-pointer hover:scale-110 transform">🎮 Videojuegos</a>
          </div>
        </div>
      </section>

      {/* Products by Category */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        {categories.map((category) => {
          const categoryProducts = products.filter(
            (p) => p.category === category.id
          );

          if (categoryProducts.length === 0) return null;

          return (
            <section key={category.id} id={category.id} className="mb-20">
              <div className="flex items-center mb-10 gap-4">
                <span className="text-5xl">{category.emoji}</span>
                <div>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-purple-400 dark:to-pink-400">
                    {category.name}
                  </h2>
                  <div className="h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mt-2 w-24"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categoryProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© 2025 El Templo del Poster. Todos los derechos reservados.</p>
          <p className="text-gray-400 text-sm">
            Pagos seguros con Stripe 🔒
          </p>
        </div>
      </footer>
    </main>
  );
}
