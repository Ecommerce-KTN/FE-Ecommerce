import React from 'react';
import '../App.css';

const products = [
  { name: 'Smart Watch', price: '$24.56', rating: '4.7', sold: '7,489', image: 'link-to-image-1' },
  { name: 'Headphones', price: '$24.56', rating: '4.7', sold: '7,489', image: 'link-to-image-2' },
  { name: 'Smartphone', price: '$24.56', rating: '4.7', sold: '7,489', image: 'link-to-image-3' },
  { name: 'Laptop', price: '$24.56', rating: '4.7', sold: '7,489', image: 'link-to-image-4' },
];

const Product = () => {
  return (
    <div className="products">
      <h2>Popular Products 2023</h2> {/* Thêm tiêu đề giống mẫu */}
      <div className="products-list">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Brand Name</p>
            <p>Rating: {product.rating}</p>
            <p>{product.sold} Sold</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
