import React from "react";
import Image from "next/image"
import { HomeContainer, Product } from "../styles/pages/home"
import { GetServerSideProps } from "next" 

import { useKeenSlider } from 'keen-slider/react'

import { stripe } from "../lib/stripe"

import 'keen-slider/keen-slider.min.css'

import Stripe from "stripe"

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
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
    <HomeContainer ref={sliderRef} className="keen-slider">
        {
          products.map(product => {
            return (
              <Product key={product.id} className="keen-slider__slide">
                <Image src={product.imageUrl} width={520} height={480} alt="" />

                <footer>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </footer>
              </Product>
          )
        })
      }

      {/* <pre>{JSON.stringify(props.list)}</pre>
      <Product className="keen-slider__slide">
        <Image src={camiseta1} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta2} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta3} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta3} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product> */}
    </HomeContainer>
  )
}

// getServerSideProps - só funciona dentro das Pages
// Só devolve para o Front, quando tudo estiver carregado
// Nunca terá estado de loading
// Não fica acessível para usuário final
export const getServerSideProps: GetServerSideProps = async () => {
  
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
      //price: price.unit_amount / 100, // retorna em centavos
    }
  })

  return {
    props: {
      products
    }
  }
}