import { useState } from 'react'
import Product from './components/product/Product';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Product />
    </>
  )
}

export default App
