import React from 'react';
import '../../App.css';

const products = [
  { name: 'Smart Watch', price: '$24.56', rating: '4.7', sold: '7,489', image: '../image/watch.png' },
  { name: 'Headphones', price: '$24.56', rating: '4.7', sold: '7,489', image: '../image/Headphones.png' },
  { name: 'Smartphone', price: '$24.56', rating: '4.7', sold: '7,489', image: '../image/phone.png' },
  { name: 'Laptop', price: '$24.56', rating: '4.7', sold: '7,489', image: '../image/laptop.png' },
];

const Product = () => {
  const handleAddToCart = (productName) => {
    alert(`${productName} added to cart!`);
  };

  return (
    <div className="products">
      <h2>Popular Products 2023</h2>
      <div className="products-list">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <div className="product-image-container">
              <img src={product.image} alt={product.name} />
              <div className="add-to-cart" onClick={() => handleAddToCart(product.name)}>+</div>
            </div>
            <h3>{product.name}</h3>
            <p>Brand Name</p>
            <p>Rating: {product.rating}</p>
            <p>{product.sold} Sold</p>
            <p className="price">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
