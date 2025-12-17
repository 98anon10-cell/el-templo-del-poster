'use client';

import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, total } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = async () => {
    console.log('🛒 Iniciando checkout...');
    console.log('🛒 Carrito:', cart);
    setIsProcessing(true);
    
    try {
      console.log('📡 Enviando petición a /api/checkout...');
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: cart.map((item) => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            image: item.image,
          })),
        }),
      });

      console.log('📡 Respuesta recibida:', response.status);
      const data = await response.json();
      console.log('📡 Data:', data);
      
      if (data.url) {
        console.log('✅ Redirigiendo a Stripe:', data.url);
        window.location.href = data.url;
      } else {
        console.error('❌ No se recibió URL de Stripe:', data);
        alert('Error: No se recibió URL de pago');
      }
    } catch (error) {
      console.error('❌ Error al procesar el pago:', error);
      alert('Error al procesar el pago. Por favor, inténtalo de nuevo.');
    } finally {
      setIsProcessing(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 py-12 relative overflow-hidden transition-colors duration-300">
        {/* Background decorative elements */}
        <div className="absolute top-10 right-20 w-64 h-64 bg-purple-200/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-72 h-72 bg-pink-200/15 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-12 text-center max-w-2xl mx-auto border border-purple-100 dark:border-gray-700">
            <div className="text-7xl mb-6 animate-bounce">🛒</div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Tu carrito está vacío
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              ¡Añade algunos posters increíbles a tu colección!
            </p>
            <Link
              href="/"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-full font-bold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              ✨ Explorar productos
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12 relative overflow-hidden transition-colors duration-300">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-20 w-64 h-64 bg-purple-200/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-20 w-72 h-72 bg-pink-200/15 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-5xl">🛒</span>
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Tu Carrito
            </h1>
            <div className="h-1.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mt-2 w-32"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-purple-100 dark:border-gray-700">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 p-6 border-b last:border-b-0 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-300"
                >
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded"
                    />
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
                    <p className="text-purple-600 dark:text-purple-400 font-semibold mt-1">
                      €{item.price.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-9 h-9 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full hover:from-indigo-200 hover:to-purple-200 transition-all font-bold text-indigo-700 shadow-md hover:shadow-lg transform hover:scale-110"
                    >
                      -
                    </button>
                    <span className="w-14 text-center font-bold text-lg text-indigo-700 dark:text-purple-400">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-9 h-9 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full hover:from-indigo-200 hover:to-purple-200 transition-all font-bold text-indigo-700 shadow-md hover:shadow-lg transform hover:scale-110"
                    >
                      +
                    </button>
                  </div>

                  <div className="text-right">
                    <p className="text-xl font-bold text-gray-800 dark:text-gray-100">
                      €{(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 dark:text-red-400 text-sm hover:text-red-700 dark:hover:text-red-300 mt-2">
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl p-6 sticky top-24 border-2 border-purple-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                📝 Resumen del pedido
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600 dark:text-gray-300">
                  <span>Subtotal</span>
                  <span>€{total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-300">
                  <span>Envío</span>
                  <span className="text-green-600 dark:text-green-400 font-semibold">GRATIS</span>
                </div>
                <div className="border-t pt-3 flex justify-between text-xl font-bold text-gray-800 dark:text-gray-100">
                  <span>Total</span>
                  <span>€{total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isProcessing}
                className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 text-white py-4 rounded-full font-bold text-lg hover:from-indigo-700 hover:to-violet-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl hover:shadow-indigo-300/50 relative overflow-hidden group"
              >
                <span className="relative z-10">
                  {isProcessing ? '⏳ Procesando...' : '✨ Proceder al pago 🔒'}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <p className="text-center text-gray-500 text-sm mt-4">
                Pago seguro con Stripe
              </p>

              <Link
                href="/"
                className="block text-center text-purple-600 hover:text-purple-800 mt-4"
              >
                ← Seguir comprando
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
