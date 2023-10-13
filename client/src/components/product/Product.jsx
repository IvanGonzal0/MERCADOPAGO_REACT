import './Product.css';
import img from '../../assets/react.svg';

const Product = () => {
    return (
        <div className='card-product-container'>
            <div className='card-product'>
                <div className='card'>
                    <img src='/vite.svg' alt="Product Image" />
                    <h3>Producto</h3>
                    <p className='price'>$ 250</p>
                    <button>Comprar</button>
                </div>
            </div>
        </div>
    )
};
export default Product;
