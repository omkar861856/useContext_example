import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
    const { cart, removeFromCart, clearCart } = useCart();

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? <p>Your cart is empty.</p> : (
                <ul>
                    {cart.map(product => (
                        <li key={product.id}>
                            {product.name} - ${product.price}
                            <button onClick={() => removeFromCart(product.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <button onClick={clearCart}>Clear Cart</button>
        </div>
    );
};

export default Cart;
