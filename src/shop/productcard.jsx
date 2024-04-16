import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  const { name, price, imageUrl } = product;

  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} />
      <div className="product-details">
        <h4>{name}</h4>
        <p>${price}</p>
        <button onClick={onAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
