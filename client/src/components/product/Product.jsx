import { useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";

import "./Product.css";

const Product = () => {
  const [preferenceId, setPreferenceId] = useState(null);

  initMercadoPago("");

  const createPreference = async () => {
    try {
      const response = await axios.post("http://localhost:8080/create_preference", {
        title: "Producto 1",
        price: 250,
        quantity: 1,
      });

      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };

  return (
    <div className='card-product-container'>
      <div className='card-product'>
        <div className='card'>
          <img src='/vite.svg' alt='Product Image' />
          <h3>Producto 1</h3>
          <p className='price'>250 $</p>
          <button onClick={handleBuy}>Buy</button>
          {preferenceId && <Wallet initialization={{ preferenceId }} />}
        </div>
      </div>
    </div>
  );
};

export default Product;
