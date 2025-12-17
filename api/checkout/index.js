const Stripe = require('stripe');

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

module.exports = async function (context, req) {
  context.log('Checkout function procesando solicitud');

  if (req.method !== 'POST') {
    context.res = {
      status: 405,
      body: { error: 'Método no permitido' }
    };
    return;
  }

  try {
    const { items } = req.body;

    if (!items || items.length === 0) {
      context.res = {
        status: 400,
        body: { error: 'No items in cart' }
      };
      return;
    }

    const lineItems = items.map((item) => ({
      price_data: {
        currency: 'eur',
        product_data: {
          name: item.name,
          images: [item.image],
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/cart`,
      shipping_address_collection: {
        allowed_countries: ['ES', 'FR', 'DE', 'IT', 'PT', 'US', 'MX', 'AR'],
      },
    });

    context.res = {
      status: 200,
      body: { url: session.url }
    };
  } catch (error) {
    context.log.error('Error creating checkout session:', error);
    context.res = {
      status: 500,
      body: { error: error.message }
    };
  }
};
