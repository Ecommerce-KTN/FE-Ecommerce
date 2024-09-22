import { Link } from 'react-router-dom';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarIcon from '@mui/icons-material/Star';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useState } from 'react';
const products = [
  {
    name: "Smart Watch",
    price: "$24.56",
    rating: "4.7",
    sold: "7,489",
    image: "../image/watch.png",
  },
  {
    name: "Headphones",
    price: "$24.56",
    rating: "4.7",
    sold: "7,489",
    image: "../image/Headphones.png",
  },
  {
    name: "Smartphone",
    price: "$24.56",
    rating: "4.7",
    sold: "7,489",
    image: "../image/phone.png",
  },
  {
    name: "Laptop",
    price: "$24.56",
    rating: "4.7",
    sold: "7,489",
    image: "../image/laptop.png",
  },
];

function SampleNextArrow(props) {

  const { onClick } = props;
  return (
    <div
      className="w-8 h-8 flex justify-center absolute items-center top-[-58px] right-[0px] z-10 cursor-pointer rounded-full bg-slate-200 p-1.5"
      onClick={onClick}
    >
      <KeyboardArrowRightIcon />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-8 h-8 flex justify-center absolute items-center top-[-58px] right-[50px] z-10 cursor-pointer rounded-full bg-slate-200 p-1.5"
      onClick={onClick}
    >
      <KeyboardArrowLeftIcon />
    </div>
  );
}

function Product() {

  const handleAddToCart = (productName) => {
    alert(`${productName} added to cart!`);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <div className="text-3xl font-semibold mb-6">Featured Products</div>
      <div className="slider-container relative mx-[-10px]">
        <Slider {...settings}>
          {products.map((product, index) => (
            <div className="" key={index}>
              <Link to="/ProductDetail">
                <div href="" className="rounded-[10px] h-[300px] bg-[#EFEFEF] flex justify-center items-center hover:shadow-xl transition-shadow duration-300">
                  <img src={product.image} alt={product.name} className="max-w-[180px]" />
                </div>
              </Link>
              
              <div>
                <h3 className="font-bold text-xl mt-3">{product.name}</h3>
                <p className="text-sm text-zinc-400 mt-2">Brand Name</p>

                <div className="flex justify-between">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex justify-between gap-2 mt-2">
                        <div className="flex justify-center items-center gap-1">
                          <StarIcon style={{ color: "#FF9A27" }} />
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
                  </div>
                  <div className="add-to-cart cursor-pointer" onClick={() => handleAddToCart(product.name)}>+</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      
    </div>
  );
}

export default Product;
