import { useState } from 'react'
import Product from './components/product/Product';
import { initMercadoPago } from "@mercadopago/sdk-react";


// REPLACE WITH YOUR PUBLIC KEY AVAILABLE IN: https://developers.mercadopago.com/panel
initMercadoPago('');

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Product />
    </>
  )
}

export default App
