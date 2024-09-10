import React from 'react';
import '../../App.css';
import StarIcon from '@mui/icons-material/Star';

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
      <h2 className="text-[30px] font-bold">Popular Products 2023</h2>
      <div className="products-list">
        {products.map((product, index) => (
          <div className="product-card">
            <div key={index} className="product-image-container rounded-[10px]">
              <img src={product.image} alt={product.name} />
            </div>
            <div>
              <h3 className="font-bold text-xl">{product.name}</h3>
              <p className="text-sm text-zinc-400 mt-2">Brand Name</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex justify-between gap-2 mt-2">
                    <div className="flex justify-center items-center gap-1">
                      <StarIcon style={{color: "#FF9A27"}}/> 
                      <p>{product.rating}</p>
                    </div>
                    <p className="leading-snug">|</p>
                    <p className="bg-slate-300 rounded-md px-2">{product.sold} Sold</p>
                  </div>
                  <div className="flex gap-4 mt-2">
                    <p className="line-through text-zinc-400">{product.price}</p>
                    <p className="price font-bold">{product.price}</p>
                  </div>
                </div>
                <div className="add-to-cart" onClick={() => handleAddToCart(product.name)}>+</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;