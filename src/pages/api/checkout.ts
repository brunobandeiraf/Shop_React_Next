import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { priceId } = req.body; // pegar o preço do produto

  if (req.method !== "POST") {  // usuário tentar acessar a rota diretamente
    return res.status(405).json({ error: "Method not allowed." });
  }

  if (!priceId) { // se não tiver o produto 
    return res.status(400).json({ error: 'Price not found.' });
  }

  const successUrl = `${process.env.NEXT_URL}/success`; // sucesso
  const cancelUrl = `${process.env.NEXT_URL}/`; // home

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: [
      {
        price: priceId,
        quantity: 1,
      }
    ]
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url
  })
}