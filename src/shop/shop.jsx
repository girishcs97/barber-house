import React from 'react';
import { Navigation } from '../components/navigation';
import ProductCard from './productcard';
import './shop.css'

const Shop = () => {
    const products = [
        {
            id: 1,
            name: 'Barber Shop T-Shirt',
            price: 20.99,
            imageUrl: 'img/shop/barber_tshirt1.jpeg',
        },
        {
            id: 2,
            name: 'Classic Barber Comb Set',
            price: 12.99,
            imageUrl: 'img/shop/combo1.jpeg',
        },
        {
            id: 3,
            name: 'Stylish Barber Apron',
            price: 29.99,
            imageUrl: 'img/shop/stylish_apron1.jpeg',
        },
        {
            id: 4,
            name: 'Barber Shop T-Shirt',
            price: 20.99,
            imageUrl: 'img/shop/barber_tshirt2.jpeg',
        },
        {
            id: 5,
            name: 'Classic Barber Comb Set',
            price: 12.99,
            imageUrl: 'img/shop/combo2.jpeg',
        },
        {
            id: 6,
            name: 'Stylish Barber Apron',
            price: 29.99,
            imageUrl: 'img/shop/stylish_apron2.jpeg',
        },
    ];

    // Function to handle adding a product to the cart
    const handleAddToCart = (productId) => {
        // Implement logic to add product to cart (e.g., update state or call API)
        console.log(`Product added to cart: ${productId}`);
    };
    return (
        <>
            <Navigation isAdmin={true} />
            <div className="shop-page">
                <h2>Shop Our Merchandise</h2>
                <div className="product-list">
                    {products.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={() => handleAddToCart(product.id)}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}
export default Shop;