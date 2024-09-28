import { Link } from "react-router-dom";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarIcon from "@mui/icons-material/Star";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const products = [
  {
    id: "7f8e8e9b-1f23-4a45-b981-b12b1e4c2a3f",
    name: "Smart Watch",
    price: "$24.56",
    rating: "4.7",
    sold: "7,489",
    image: "../image/watch.png",
  },
  {
    id: "a4b8a4f3-5c3e-42d3-839a-4b8c1d7a1e3b",
    name: "Headphones",
    price: "$24.56",
    rating: "4.7",
    sold: "7,489",
    image: "../image/Headphones.png",
  },
  {
    id: "3f4e6f7b-49c5-4b87-90b9-7f3f3c2c8d71",
    name: "Smartphone",
    price: "$24.56",
    rating: "4.7",
    sold: "7,489",
    image: "../image/phone.png",
  },
  {
    id: "d6b4c8e6-7d7e-4f4a-8287-fc1e9d6b8c9d",
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

function Product({nameTitle}) {
  const [favorites, setFavorites] = useState({});

  const handleAddFavorite = (productId) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [productId]: !prevFavorites[productId], // Toggle trạng thái favorite
    }));
  };

  const handleAddToCart = (productName) => {
    alert(`${productName} added to cart!`);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Số slide hiển thị mặc định
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 640, // Mobile nhỏ hơn 640px
        settings: {
          slidesToShow: 1, // Hiển thị 1 slide
        },
      },
      {
        breakpoint: 768, // Tablet và laptop
        settings: {
          slidesToShow: 2, // Hiển thị 2 slide cho tablet
        },
      },
      {
        breakpoint: 1025, 
        settings: {
          slidesToShow: 3, 
        },
      }
    ],
  };
  

  return (
    <div>
      <div className="text-3xl font-semibold mb-6">{nameTitle}</div>
      <div className="slider-container relative mx-[-10px] py-3">
        <Slider {...settings}>
          {products.map((product) => (
            <div className="bg-white shadow-lg hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition-shadow duration-300 rounded-xl p-3 my-5" key={product.id}>
              <Link to="/ProductDetail">
                <div
                  className={`rounded-[10px] h-[300px] bg-[#efefef] flex justify-center items-center product-id-${product.id} relative`}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-w-[180px]"
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddFavorite(product.id);
                    }}
                    className="absolute top-3 left-3 rounded-full bg-white p-2"
                  >
                    {favorites[product.id] ? (
                      <FavoriteIcon sx={{
                        color: "rgb(247 74 73)"
                      }} />
                    ) : (
                      <FavoriteBorderIcon sx={{"&:hover": {
                        color: "rgb(247 74 73)", // Đổi màu khi hover
                      },}}/>
                    )}
                  </button>
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
                        <p className="bg-slate-300 rounded-md px-2">
                          {product.sold} Sold
                        </p>
                      </div>
                      <div className="flex gap-4 mt-2">
                        <p className="line-through text-zinc-400">
                          {product.price}
                        </p>
                        <p className="price font-bold">{product.price}</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="add-to-cart cursor-pointer"
                    onClick={() => handleAddToCart(product.name)}
                  >
                    +
                  </div>
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
