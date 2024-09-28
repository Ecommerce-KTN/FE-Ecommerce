import React from "react";
import Header from "../../components/app/Header";
import Product from "../../components/app/Product";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import Button from "@mui/material/Button";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ReviewList from "./ReviewList";
import { useEffect } from "react";
import { useState } from "react";
import Banner from "../../../src/components/app/Banner";
import Footer from "../../../src/components/app/Footer";
import Asseenon from "../../../src/components/app/Asseenon";
import Bannerproductdetail from "./BannerProductDetail";

const specification = [
  {
    name: "Specification",
    item: [
      { name: "Display" },
      { name: "Processor" },
      { name: "Battery" },
      { name: "Opperating System" },
      { name: "Water Resistance" },
    ],
  },
  {
    name: "Demension",
    item: [
      { name: "Height" },
      { name: "Width" },
      { name: "Depth" },
      { name: "Weight" },
    ],
  },
  {
    name: "Camera",
    item: [{ name: "Front" }, { name: "Rear" }],
  },
];

function ListItem() {
  return (
    <div>
      {specification.map((data) => (
        <div className="mt-2">
          <Accordion style={{ borderRadius: "10px" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ height: "40px" }}
            >
              <SportsVolleyballIcon sx={{ marginRight: "5px" }} />
              {data.name}
            </AccordionSummary>
            <AccordionDetails>
              <ul className="list-specification">
                {data.item.map((items, index) => (
                  <li
                    className="border-b-2 border-b-gray-200 bg-white py-2 last:border-b-0 transistion ease-in-out duration-100"
                    key={index}
                  >
                    <a href="" className="block w-full h-full">
                      {items.name}
                    </a>
                  </li>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </div>
  );
}

function AddCart() {
  const [favorite, setAddFavorite] = useState(false);
  const handleChangeFavorite = () => {
    setAddFavorite(!favorite);
  };
  return (
    <>
      <div>
        <p className="my-3 font-semibold">Delivery on March 5th-11th</p>
        <div className="flex justify-between gap-4">
          <button className="text-center text-white w-[29rem] bg-gray-800 border-2 rounded-lg py-2">
            Add to cart
          </button>
          <button
            className="p-2 rounded-lg border-2 border-gray-500"
            onClick={handleChangeFavorite}
          >
            {favorite ? (
              <FavoriteBorderOutlinedIcon />
            ) : (
              <FavoriteIcon sx={{ color: "rgb(247 74 73)" }} />
            )}
          </button>
        </div>
      </div>
    </>
  );
}

function ProductDetail() {
  useEffect(() => {
    window.scrollTo(0, 0); // Cuộn lên đầu trang khi load trang
  }, []);

  const [color, setColor] = useState("");
  const [ram, setRam] = useState("");
  const [storage, setStorage] = useState("");

  const handleChangeColor = (color) => {
    setColor(color);
  };
  const handleChangeRam = (ram) => {
    setRam(ram);
  };
  const handleChangeStorage = (storage) => {
    setStorage(storage);
  };
  return (
    <>
      {/* <Header /> */}
      <Header/>
      <div className="w-11/12 relative mx-2 lg:mx-auto lg:mt-[10rem]">
        <div className="flex flex-col lg:flex-row">
          {/* Banner */}
          <div className="w-full lg:w-8/12 lg:mr-5">
            <Bannerproductdetail/>
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-4/12">
            <div className="flex flex-col sm:flex-row justify-between items-start">
              <div className="w-full sm:w-8/12">
                <h2 className="font-bold text-xl sm:text-2xl">
                  Flamenco Frilled & High Waisted
                </h2>
                <p className="font-bold text-lg sm:text-xl text-gray-400">
                  Bikini
                </p>
              </div>
              <div className="w-full sm:w-4/12 flex flex-col items-start mt-3 sm:mt-0">
                <p className="font-bold line-through text-lg sm:text-2xl opacity-60">
                  $155
                </p>
                <p className="font-bold text-2xl sm:text-3xl text-orange-600">
                  $140
                </p>
              </div>
            </div>

            {/* Color Selection */}
            <div className="my-3">
              <div className="my-2 font-bold">Color: {color}</div>
              <div className="flex gap-3">
                <button
                  onClick={() => handleChangeColor("Gray")}
                  className="bg-gray-300 min-w-[40px] min-h-[40px] rounded-lg focus:outline-none focus:ring focus:ring-gray-600"
                ></button>
                <button
                  onClick={() => handleChangeColor("Blue")}
                  className="bg-blue-500 min-w-[40px] min-h-[40px] rounded-lg focus:outline-none focus:ring focus:ring-gray-600"
                ></button>
                <button
                  onClick={() => handleChangeColor("Red")}
                  className="bg-red-500 min-w-[40px] min-h-[40px] rounded-lg focus:outline-none focus:ring focus:ring-gray-600"
                ></button>
                <button
                  onClick={() => handleChangeColor("Gray Bold")}
                  className="bg-gray-500 min-w-[40px] min-h-[40px] rounded-lg focus:outline-none focus:ring focus:ring-gray-600"
                ></button>
              </div>
            </div>

            {/* RAM Selection */}
            <div className="my-3">
              <div className="my-2 font-bold">Ram: {ram}</div>
              <div className="flex gap-3">
                <button
                  onClick={() => handleChangeRam("4GB")}
                  className="min-w-[60px] min-h-[28px] rounded-lg ring-2 ring-slate-400 focus:ring focus:ring-gray-600"
                >
                  4GB
                </button>
                <button
                  onClick={() => handleChangeRam("8GB")}
                  className="min-w-[60px] min-h-[28px] rounded-lg ring-2 ring-slate-400 focus:ring focus:ring-gray-600"
                >
                  8GB
                </button>
                <button
                  onClick={() => handleChangeRam("16GB")}
                  className="min-w-[60px] min-h-[28px] rounded-lg ring-2 ring-slate-400 focus:ring focus:ring-gray-600"
                >
                  16GB
                </button>
                <button
                  onClick={() => handleChangeRam("32GB")}
                  className="min-w-[60px] min-h-[28px] rounded-lg ring-2 ring-slate-400 focus:ring focus:ring-gray-600"
                >
                  32GB
                </button>
              </div>
            </div>

            {/* Storage Selection */}
            <div className="my-3">
              <div className="my-2 font-bold">Storage: {storage}</div>
              <div className="flex gap-3">
                <button
                  onClick={() => handleChangeStorage("32GB")}
                  className="min-w-[60px] min-h-[28px] rounded-lg ring-2 ring-slate-400 focus:ring focus:ring-gray-600"
                >
                  32GB
                </button>
                <button
                  onClick={() => handleChangeStorage("64GB")}
                  className="min-w-[60px] min-h-[28px] rounded-lg ring-2 ring-slate-400 focus:ring focus:ring-gray-600"
                >
                  64GB
                </button>
                <button
                  onClick={() => handleChangeStorage("120GB")}
                  className="min-w-[60px] min-h-[28px] rounded-lg ring-2 ring-slate-400 focus:ring focus:ring-gray-600"
                >
                  120GB
                </button>
                <button
                  onClick={() => handleChangeStorage("280GB")}
                  className="min-w-[60px] min-h-[28px] rounded-lg ring-2 ring-slate-400 focus:ring focus:ring-gray-600"
                >
                  280GB
                </button>
              </div>
            </div>

            {/* List of Specifications */}
            <ListItem />

            {/* Review List */}
            <ReviewList />

            {/* Add to Cart */}
            <AddCart />
          </div>
        </div>

        {/* Product Recommendations */}
        <div className="mt-28">
          <Product nameTitle={"You may also like"} />
        </div>
        <Asseenon/>
        <Footer/>
      </div>
    </>
  );
}

export default ProductDetail;