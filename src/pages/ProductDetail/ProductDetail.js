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
import { useParams } from "react-router-dom";
import { specDisplayNames, getColorStyle } from "./SpecDisplayNames";
import { useMemo } from "react";

function ListItem({ specifications }) {
  // Trạng thái để quản lý Accordion đang mở
  const [expanded, setExpanded] = useState(false);

  // Sử dụng useMemo để tối ưu hóa hiệu suất
  const specsList = useMemo(() => {
    if (!specifications) return [];
    return Object.entries(specifications)
      .filter(
        ([key, value]) => value !== null && value !== undefined && value !== ""
      )
      .map(([key, value]) => ({
        key,
        value,
      }));
  }, [specifications]);

  // Hàm xử lý việc mở Accordion
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="mt-2">
      {/* Phần hiển thị Specification */}
      <Accordion
        expanded={expanded === "specification"}
        onChange={handleChange("specification")}
        style={{ borderRadius: "10px" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="specification-content"
          id="specification-header"
          sx={{ height: "40px" }}
        >
          <SportsVolleyballIcon sx={{ marginRight: "5px" }} />
          Specification
        </AccordionSummary>
        <AccordionDetails>
          <ul className="list-specification">
            {specsList.map((spec, index) => (
              <li
                className="border-b-2 border-b-gray-200 bg-white py-2 last:border-b-0 transition ease-in-out duration-100 flex justify-between"
                key={index}
              >
                <span className="font-semibold">{spec.key}</span>
                <span>{spec.value}</span>
              </li>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>

      {/* Phần hiển thị Dimension */}
      <div className="mt-4">
        <Accordion
          expanded={expanded === "dimension"}
          onChange={handleChange("dimension")}
          style={{ borderRadius: "10px" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="dimension-content"
            id="dimension-header"
            sx={{ height: "40px" }}
          >
            <SportsVolleyballIcon sx={{ marginRight: "5px" }} />
            Dimension
          </AccordionSummary>
          <AccordionDetails>
            <ul className="list-dimension">
              <li className="border-b-2 border-b-gray-200 bg-white py-2 last:border-b-0">
                {specifications.Dimension || "Not available"}
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
      </div>

      {/* Phần hiển thị Camera */}
      <div className="mt-4">
        <Accordion
          expanded={expanded === "camera"}
          onChange={handleChange("camera")}
          style={{ borderRadius: "10px" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="camera-content"
            id="camera-header"
            sx={{ height: "40px" }}
          >
            <SportsVolleyballIcon sx={{ marginRight: "5px" }} />
            Camera
          </AccordionSummary>
          <AccordionDetails>
            <ul className="list-camera">
              <li className="border-b-2 border-b-gray-200 bg-white py-2 last:border-b-0">
                <span className="font-semibold">Rear Camera:</span>{" "}
                {specifications["Rear Camera - Resolution (Multiple)"] ||
                  "Not available"}
              </li>
              <li className="border-b-2 border-b-gray-200 bg-white py-2 last:border-b-0">
                <span className="font-semibold">Front Camera:</span>{" "}
                {specifications["Front Camera - Resolution"] || "Not available"}
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
      </div>
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

const findVariant = (product, selectedColor, selectedRam, selectedStorage) => {
  return product.productVariants?.find(
    (variant) =>
      variant.attributes.COLOR === selectedColor &&
      variant.attributes.RAM === selectedRam &&
      variant.attributes.STORAGE === selectedStorage
  );
};

function ProductDetail() {
  // Cuộn lên đầu trang khi load trang
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Khai báo các state để lưu trữ lựa chọn người dùng
  const [color, setColor] = useState("");
  const [ram, setRam] = useState("");
  const [storage, setStorage] = useState("");
  const [selectedVariant, setSelectedVariant] = useState(null); // Thêm state này

  // Lấy ID từ URL và fetch dữ liệu sản phẩm qua API
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Khi người dùng chọn color, ram, storage, tìm biến thể sản phẩm phù hợp
  useEffect(() => {
    if (product && product.productVariants) {
      // Kiểm tra nếu product và productVariants tồn tại
      const variant = findVariant(product, color, ram, storage);
      setSelectedVariant(variant); // Sử dụng setSelectedVariant để lưu biến thể đã chọn
    }
  }, [color, ram, storage, product]);

  // Fetch dữ liệu sản phẩm
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://be-ecommerce-gaa8.onrender.com/api/v1/products/${id}`
        );
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);

        const responseJson = await response.json();
        console.log("Fetched product:", responseJson.data);

        setProduct(responseJson.data || null);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  // Xử lý các trạng thái chờ hoặc lỗi
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>No product found.</div>;

  console.log(findVariant);
  // Giao diện chi tiết sản phẩm
  return (
    <>
      <Header />
      <div className="w-11/12 relative mx-2 lg:mx-auto lg:mt-[10rem]">
        <div className="flex flex-col lg:flex-row lg:gap-5">
          {/* Banner hiển thị sản phẩm */}
          <div className="lg:w-8/12">
            <Bannerproductdetail
              productData={product}
              selectedVariant={selectedVariant}
            />
          </div>

          {/* Thông tin sản phẩm */}
          <div className="w-full lg:w-4/12">
            {/* Tên sản phẩm và giá */}
            <div className="flex flex-col sm:flex-row justify-between items-start">
              <div className="w-full sm:w-8/12">
                <h2 className="font-bold text-xl sm:text-2xl">
                  {product.name}
                </h2>
                <p className="font-bold text-lg sm:text-xl text-gray-400">
                  {product.brand}
                </p>
              </div>
              <div className="w-full sm:w-4/12 flex flex-col items-start mt-3 sm:mt-0">
                {selectedVariant ? (
                  <>
                    <p className="font-bold line-through text-lg sm:text-2xl opacity-60">
                      ${selectedVariant.basePrice}
                    </p>
                    <p className="font-bold text-2xl sm:text-3xl text-orange-600">
                      ${selectedVariant.discountPrice}
                    </p>
                  </>
                ) : (
                  <>
                    <p className="font-bold line-through text-lg sm:text-2xl opacity-60">
                      ${product.basePrice}
                    </p>
                    <p className="font-bold text-2xl sm:text-3xl text-orange-600">
                      ${product.discountPrice}
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Lựa chọn màu sắc */}
            <div className="my-3">
              <div className="my-2 font-bold">Color: {color}</div>
              <div className="flex gap-3">
                {product.attributes?.Color?.length > 0 ? (
                  product.attributes.Color.map((col, index) => (
                    <button
                      key={index}
                      onClick={() => setColor(col)}
                      className={`min-w-[40px] min-h-[40px] rounded-lg focus:outline-none focus:ring focus:ring-gray-600 ${getColorStyle(
                        col
                      )}`}
                    ></button>
                  ))
                ) : (
                  <div>No colors available.</div>
                )}
              </div>
            </div>

            {/* Lựa chọn RAM */}
            <div className="my-3">
              <div className="my-2 font-bold">RAM: {ram}</div>
              <div className="flex gap-3">
                {product.attributes?.RAM?.length > 0 ? (
                  product.attributes.RAM.map((memory, index) => (
                    <button
                      key={index}
                      onClick={() => setRam(memory)}
                      className={`min-w-[60px] min-h-[28px] rounded-lg ring-2 ring-slate-400 focus:ring focus:ring-gray-600 ${
                        ram === memory ? "ring-blue-500" : ""
                      }`}
                    >
                      {memory}
                    </button>
                  ))
                ) : (
                  <div>No RAM options available.</div>
                )}
              </div>
            </div>

            {/* Lựa chọn dung lượng lưu trữ */}
            <div className="my-3">
              <div className="my-2 font-bold">Storage: {storage}</div>
              <div className="flex gap-3">
                {product.attributes?.Storage?.length > 0 ? (
                  product.attributes.Storage.map((storageOption, index) => (
                    <button
                      key={index}
                      onClick={() => setStorage(storageOption)}
                      className={`min-w-[60px] min-h-[28px] rounded-lg ring-2 ring-slate-400 focus:ring focus:ring-gray-600 ${
                        storage === storageOption ? "ring-blue-500" : ""
                      }`}
                    >
                      {storageOption}
                    </button>
                  ))
                ) : (
                  <div>No storage options available.</div>
                )}
              </div>
            </div>

            {/* Thông số kỹ thuật sản phẩm */}
            <ListItem specifications={product.specifications || {}} />

            {/* Đánh giá sản phẩm */}
            <ReviewList />

            {/* Thêm vào giỏ hàng */}
            <AddCart />
          </div>
        </div>

        {/* Gợi ý sản phẩm khác */}
        <div className="">
          <Product nameTitle={"You may also like"} className=""/>
        </div>
        <div className="pt-1">
          <Asseenon />
        </div>        
        <Footer />
      </div>
    </>
  );
}

export default ProductDetail;
