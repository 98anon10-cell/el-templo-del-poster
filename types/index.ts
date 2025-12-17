export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'anime' | 'movies' | 'tv' | 'games';
  priceId?: string; // Stripe Price ID
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}
