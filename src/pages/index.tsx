import React from "react";
import Image from "next/image"
import { HomeContainer, Product } from "../styles/pages/home"
import { GetStaticProps } from "next"
import Link from "next/link"
import Head from 'next/head'

import { useKeenSlider } from 'keen-slider/react'

import { stripe } from "../lib/stripe"

import 'keen-slider/keen-slider.min.css'

import Stripe from "stripe"

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[] // Array de produtos
}
export default function Home({ products }: HomeProps) {

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3, // 3 produtos por página
      spacing: 48 // espaçamento
    }
  });

  return (
    <>
      <Head>
        <title>Home | Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => {
          return (
            <Link href={`/product/${product.id}`} key={product.id} prefetch={false}>
              <Product className="keen-slider__slide">
                <Image src={product.imageUrl} width={520} height={480} alt="" />

                <footer>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </footer>
              </Product>
            </Link>
          )
        })}
      </HomeContainer>
    </>
                 
  )
}

// getServerSideProps - só funciona dentro das Pages
// Só devolve para o Front, quando tudo estiver carregado
// Nunca terá estado de loading
// Não fica acessível para usuário final
export const getStaticProps: GetStaticProps = async () => {
  
  // Lista todos os produtos do Stripe
  const response = await stripe.products.list({
    expand: ['data.default_price'] // pegando as propriedades do preço
  });

  const products = response.data.map(product => {
    //const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount / 100),
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // 2 hours,
  }
}