import React from 'react';
import { useCart } from '../context/CartContext';

const Product = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div>
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default Product;
