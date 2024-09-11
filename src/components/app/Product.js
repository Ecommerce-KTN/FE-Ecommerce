import React from 'react';
import '../../App.css';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const products = [
  { name: 'Smart Watch', price: '$24.56', rating: '4.7', sold: '7,489', image: '../image/watch.png' },
  { name: 'Headphones', price: '$24.56', rating: '4.7', sold: '7,489', image: '../image/Headphones.png' },
  { name: 'Smartphone', price: '$24.56', rating: '4.7', sold: '7,489', image: '../image/phone.png' },
  { name: 'Laptop', price: '$24.56', rating: '4.7', sold: '7,489', image: '../image/laptop.png' },
];

function ButtonHeart() {
  return (
    <>
      <button className="rounded-full bg-white p-2 absolute top-5 left-5"><FavoriteBorderIcon/></button>
    </>
  )
}
const Product = () => {
  const handleAddToCart = (productName) => {
    alert(`${productName} added to cart!`);
  };

  return (
    <div className="products">
      <div className="flex justify-between items-start mb-3">
        <h2 className="text-[30px] font-bold mb-4">Popular Products 2023</h2>
        <div className="flex space-x-2">
          <button className="rounded-full bg-slate-200 p-1.5"><KeyboardArrowLeftIcon/></button>
          <button className="rounded-full bg-slate-200 p-1.5"><KeyboardArrowRightIcon/></button>
        </div>
      </div>
      <div className="products-list">
        {products.map((product, index) => (
          <div className="product-card relative">
            <ButtonHeart className=""/>
            <div key={index} className="product-image-container rounded-[10px]">
              <img src={product.image} alt={product.name} />
            </div>
            <div>
              <h3 className="font-bold text-xl mt-3">{product.name}</h3>
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