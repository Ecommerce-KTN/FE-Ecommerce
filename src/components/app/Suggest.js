import React from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function ProductCard({ image, title, description, originalPrice, salePrice }) {
  return (
    <div className="flex mt-[10rem] space-x-4">
      {/* Main section with larger width */}
      <div className="w-8/12 bg-gray-50 rounded-lg shadow-md p-6 flex items-center">
        {/* Left side: Image */}
        <div className="w-1/2">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>

        {/* Right side: Product details */}
        <div className="w-1/2 pl-8">
          <p className="bg-slate-300 rounded-2xl text-sm px-3 py-1 inline-block mb-3">Top selling</p>
          <h2 className="text-3xl font-semibold">{title}</h2>
          <p className="text-gray-500 mt-3 text-lg">{description}</p>
          <div className="flex gap-5 items-center mt-6">
            <span className="text-gray-400 line-through text-lg">
              ${originalPrice}
            </span>
            <span className="text-black font-bold text-xl">${salePrice}</span>
          </div>
          <button className="bg-white hover:bg-blue-500 hover:text-white text-black font-bold py-3 px-6 rounded mt-6">
            <ShoppingCartOutlinedIcon/> Start Shopping
          </button>
        </div>
      </div>

      {/* Side section with smaller width */}
      <div className="flex flex-col w-4/12 space-y-4 flex-grow">
        {/* First product card */}
        <div className="relative p-4 bg-white shadow-lg rounded-lg w-full flex-grow">
          <div className="flex flex-col space-y-2 mt-2">
            <div className="text-gray-800 font-semibold text-xl leading-tight">
              Product Name Will Be Here To Be
            </div>
            <div className="text-gray-600 font-medium text-xl">$56.78</div>
          </div>
          <img
            src="https://m.media-amazon.com/images/I/51XVJI0FbfL._AC_SX679_.jpg"
            className="absolute bottom-5 right-5 w-28 h-28 object-contain"
            alt="Product"
          />
        </div>

        {/* Second product card */}
        <div className="relative p-4 bg-white shadow-lg rounded-lg w-full flex-grow">
          <div className="flex flex-col space-y-2 mt-2">
            <div className="text-gray-800 font-semibold text-xl leading-tight">
              Product Name Will Be Here To Be
            </div>
            <div className="text-gray-600 font-medium text-xl">$56.78</div>
          </div>
          <img
            src="https://m.media-amazon.com/images/I/711f6KLsMaL._AC_SL1500_.jpg"
            className="absolute bottom-5 right-5 w-28 h-28 object-contain"
            alt="Product"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
