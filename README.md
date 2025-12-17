# �️ El Templo del Poster - Tienda de Posters Frikis

Una tienda online moderna para vender posters de anime, películas, series y videojuegos, con integración de pagos mediante Stripe.

## ✨ Características

- 🛍️ Catálogo de productos organizado por categorías
- 🛒 Carrito de compras funcional
- 💳 Pagos seguros con Stripe Checkout
- 📱 Diseño responsive (móvil y desktop)
- ⚡ Construido con Next.js 14 y TypeScript
- 🎨 Estilizado con Tailwind CSS

## 🚀 Instalación

### 1. Instalar dependencias

```bash
npm install
```

### 2. Configurar variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```env
# Stripe Keys (obtén estas claves desde https://dashboard.stripe.com/apikeys)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_tu_clave_publica_aqui
STRIPE_SECRET_KEY=sk_test_tu_clave_secreta_aqui

# URL de tu aplicación
NEXT_PUBLIC_URL=http://localhost:3000
```

### 3. Obtener las claves de Stripe

1. Ve a [https://dashboard.stripe.com/register](https://dashboard.stripe.com/register) y crea una cuenta
2. Activa el "Modo de prueba" (Test mode) en el dashboard
3. Ve a [Developers > API Keys](https://dashboard.stripe.com/test/apikeys)
4. Copia la **Publishable key** (pk_test_...) y la **Secret key** (sk_test_...)
5. Pégalas en tu archivo `.env.local`

### 4. Ejecutar el proyecto

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🧪 Probar los pagos

Para probar los pagos en modo de prueba, usa estos números de tarjeta de Stripe:

- **Tarjeta exitosa**: `4242 4242 4242 4242`
- **Fecha de expiración**: Cualquier fecha futura (ej: 12/34)
- **CVC**: Cualquier 3 dígitos (ej: 123)
- **Código postal**: Cualquier código postal

[Ver más tarjetas de prueba](https://stripe.com/docs/testing#cards)

## 📁 Estructura del Proyecto

```
WEB Posters/
├── app/
│   ├── api/
│   │   └── checkout/
│   │       └── route.ts          # API de Stripe Checkout
│   ├── cart/
│   │   └── page.tsx              # Página del carrito
│   ├── success/
│   │   └── page.tsx              # Página de éxito
│   ├── globals.css               # Estilos globales
│   ├── layout.tsx                # Layout principal
│   └── page.tsx                  # Página de inicio
├── components/
│   ├── Header.tsx                # Barra de navegación
│   └── ProductCard.tsx           # Tarjeta de producto
├── context/
│   └── CartContext.tsx           # Context API para el carrito
├── data/
│   └── products.ts               # Datos de productos
├── types/
│   └── index.ts                  # Tipos TypeScript
├── .env.local.example            # Ejemplo de variables de entorno
├── next.config.js
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 🎯 Funcionalidades

### Catálogo de Productos
- Grid responsive de productos
- Filtrado por categorías (Anime, Películas, Series, Videojuegos)
- Imágenes y descripciones de productos

### Carrito de Compras
- Añadir/eliminar productos
- Actualizar cantidades
- Cálculo automático del total
- Persistencia durante la sesión

### Checkout con Stripe
- Integración segura con Stripe Checkout
- Recopilación de dirección de envío
- Página de confirmación de pedido
- Limpieza automática del carrito tras compra exitosa

## 🛠️ Tecnologías Utilizadas

- **Next.js 14** - Framework React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos
- **Stripe** - Procesamiento de pagos
- **Context API** - Gestión de estado del carrito

## 📝 Personalización

### Añadir nuevos productos

Edita el archivo `data/products.ts`:

```typescript
{
  id: '9',
  name: 'Nuevo Poster',
  description: 'Descripción del poster',
  price: 24.99,
  image: 'URL_de_la_imagen',
  category: 'anime', // anime, movies, tv, games
}
```

### Cambiar colores

Edita `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#8B5CF6',    // Color principal
      secondary: '#EC4899',  // Color secundario
    },
  },
}
```

## 🚀 Despliegue en Producción

### Vercel (Recomendado)

1. Sube tu código a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Importa tu repositorio
4. Añade las variables de entorno en la configuración
5. Despliega

**Importante**: En producción, cambia las claves de Stripe de test (`pk_test_...`) a las claves live (`pk_live_...`).

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría hacer.

---

Hecho con ❤️ para los amantes de los posters frikis
