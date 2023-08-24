import React from "react";
import { styled } from "../styles"

// 1ª param é a tag html
// 2ª param é o objeto com estilização
const Button = styled('button', {
  backgroundColor: '$green300',
  borderRadius: 4, // não precisa das aspas e nem dimensão
  border: 0,
  padding: '4px 8px',

  span: {
    fontWeight: 'bold'
  },

  '&:hover': { // obrigatório aspas
    filter: 'brightness(0.8)'
  }
})

export default function Home() {
  return (
    <Button>
      <span>Teste</span>
      Enviar
    </Button>
  )
}
