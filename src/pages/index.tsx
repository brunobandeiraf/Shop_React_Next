import React from "react";
import Image from "next/image"
import { HomeContainer, Product } from "../styles/pages/home"

import { useKeenSlider } from 'keen-slider/react'

import camiseta1 from '../assets/camisetas/1.png'
import camiseta2 from '../assets/camisetas/2.png'
import camiseta3 from '../assets/camisetas/3.png'

import 'keen-slider/keen-slider.min.css'

export default function Home(props: { list: any; }) {

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3, // 3 produtos por página
      spacing: 48 // espaçamento
    }
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <pre>{JSON.stringify(props.list)}</pre>
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
      </Product>
    </HomeContainer>
  )
}

// getServerSideProps - só funciona dentro das Pages
// Só devolve para o Front, quando tudo estiver carregado
// Nunca terá estado de loading
export const getServerSideProps = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000))

  console.log('rodou')

  return {
    props: {
      list: [1,2,3]
    }
  }
}