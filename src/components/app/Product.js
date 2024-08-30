import React from 'react';

const products = [
  { name: 'Smart Watch', price: '$24.56', rating: '4.7', sold: '7,489', image: 'link-to-image-1' },
  { name: 'Headphones', price: '$24.56', rating: '4.7', sold: '7,489', image: 'link-to-image-2' },
  { name: 'Smartphone', price: '$24.56', rating: '4.7', sold: '7,489', image: 'link-to-image-3' },
  { name: 'Laptop', price: '$24.56', rating: '4.7', sold: '7,489', image: 'link-to-image-4' },
];

function Product () {
  return (
    <div style={{  margin: "40px 0", padding: "0 50px"}}>
      <h2>Popular Products 2023</h2> {/* Thêm tiêu đề giống mẫu */}
      <div style={{  display: "flex", justifyContent: "space-between"}}>
        {products.map((product, index) => (
          <div key={index} style={{  width: "23%", backgroundColor: "white", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", textAlign: "center", padding: "20px", marginBottom: "20px"}}>
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
