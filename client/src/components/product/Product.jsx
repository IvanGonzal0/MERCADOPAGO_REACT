import {useState} from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import axios from 'axios';

import './Product.css';



const Product = () => {
    const [preferenceId, setPreferenceId] = useState(null);

    initMercadoPago('TEST-70793db1-7a2e-49ec-bf82-2d3559e763a7');

    const createPreference = async () => {
        try{
            const response = await axios.post('http://localhost:8080/create_preference', {
                description: 'Compra de producto',
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
                    <img src='/vite.svg' alt="Product Image" />
                    <h3>Producto</h3>
                    <p className='price'>$ 250</p>
                    <button onClick={handleBuy}>Comprar</button>
                    {preferenceId && <Wallet initialization={{ preferenceId }} />}
                </div>
            </div>
        </div>
    )
};
export default Product;
