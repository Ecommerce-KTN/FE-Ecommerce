import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarIcon from "@mui/icons-material/Star";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

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

function Product({ nameTitle }) {
  const [favorites, setFavorites] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleAddFavorite = (productId) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [productId]: !prevFavorites[productId],
    }));
  };

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
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  // Get list product
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://be-ecommerce-gaa8.onrender.com/api/v1/products'); // Endpoint để lấy tất cả danh mục

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseJson = await response.json();
        console.log('Fetched categories:', responseJson.data);

        if (Array.isArray(responseJson.data)) {
          setProducts(responseJson.data);
        } else if (responseJson.data) {
          setProducts([responseJson.data]); // Đóng gói đối tượng đơn lẻ vào mảng
        } else {
          setProducts([]);
        }

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="h-[500px] w-full my-16 pb-10">
      <div className="text-3xl font-semibold mb-6">{nameTitle}</div>
      <div className="slider-container relative mx-[-10px] py-3">
        <Slider {...settings}>
          {products.map((product) => (
            <div
              className="bg-white shadow-lg hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition-shadow duration-300 rounded-xl p-3 my-5 flex flex-col"
              key={product.id}
            >
              {/* Cập nhật phần Link */}
              <div
                onClick={() => {
                  window.location.href = `/ProductDetail/${product.id}`;
                }}
                className="cursor-pointer"
              >
                <div
                  className={`rounded-[10px] h-[300px] bg-[#efefef] flex justify-center items-center product-id-${product.id} relative`}
                >
                  <img
                    src={product.primaryImage}
                    alt={product.name}
                    className="max-w-[180px] bg-[#efefef]"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddFavorite(product.id);
                    }}
                    className="absolute top-3 left-3 rounded-full bg-white p-2"
                  >
                    {favorites[product.id] ? (
                      <FavoriteIcon sx={{ color: "rgb(247 74 73)" }} />
                    ) : (
                      <FavoriteBorderIcon sx={{ "&:hover": { color: "rgb(247 74 73)" } }} />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex-grow h-44">
                <h3
                  className="font-bold text-xl mt-3"
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    WebkitLineClamp: 2,
                    textOverflow: "ellipsis",
                  }}
                >
                  {product.name}
                </h3>
                <p className="text-sm text-zinc-400 mt-2">{product.brand}</p>
                <div className="flex justify-between">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex justify-between gap-2 mt-2">
                        <div className="flex justify-center items-center gap-1">
                          <StarIcon style={{ color: "#FF9A27" }} />
                          <p>{product.productVariants.avgRating?.rate || "N/A"}</p>
                        </div>
                        <p className="leading-snug">|</p>
                        <p className="bg-slate-300 rounded-md px-2">
                          {product.sold || "N/A"} Sold
                        </p>
                      </div>
                      <div className="flex gap-4 mt-2">
                        <p className="line-through text-zinc-400">{product.price}</p>
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
