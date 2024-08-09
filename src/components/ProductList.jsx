import { useEffect, useState } from 'react';
import axios from 'axios';
import Product from './Product';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('https://fakestoreapi.com/products');
            setProducts(response.data);
        };
        fetchProducts();
    }, []);

    return (
        <div>
            {products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div> 
    );
};

export default ProductList;
