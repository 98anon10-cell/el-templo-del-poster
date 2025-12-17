'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [isLoading, setIsLoading] = useState(true);
  const { clearCart } = useCart();

  useEffect(() => {
    if (sessionId) {
      // Limpiar el carrito después de una compra exitosa
      clearCart();
      setIsLoading(false);
    }
  }, [sessionId, clearCart]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Procesando tu pedido...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-2xl p-12 text-center">
          <div className="text-6xl mb-6">🎉</div>
          
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            ¡Compra exitosa!
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Gracias por tu pedido. Recibirás un email de confirmación en breve.
          </p>

          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6 mb-8">
            <p className="text-gray-700 mb-2">
              <strong>Número de sesión:</strong>
            </p>
            <p className="text-sm text-gray-600 break-all font-mono">
              {sessionId}
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center gap-2 text-green-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Pago procesado exitosamente</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Email de confirmación enviado</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-purple-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              <span>Preparando tu pedido para envío</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105"
            >
              Seguir comprando
            </Link>
          </div>

          <p className="text-gray-500 text-sm mt-8">
            Si tienes alguna pregunta sobre tu pedido, contacta con nuestro servicio de atención al cliente.
          </p>
        </div>
      </div>
    </div>
  );
}
