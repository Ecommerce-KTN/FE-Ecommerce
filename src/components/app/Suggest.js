import React from 'react';

function ProductCard({ image, title, description, originalPrice, salePrice }) {
    return (
    
        <div className="flex mt-[10rem]">
          <div className="bg-white rounded-lg shadow-md p-5 ">
              <img src={image} alt={title} className="w-full h-48 object-cover mb-4" />
              <h2 className="text-lg font-medium">{title}</h2>
              <p className="text-gray-500">{description}</p>
              <div className="flex justify-between items-center mt-4">
                  <span className="text-gray-400 line-through">${originalPrice}</span>
                  <span className="text-green-500 font-bold">${salePrice}</span>
              </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                  Start Shopping
              </button>
          </div>
          <div className="flex flex-col">
            <div className="bg-slate-200 h-36">123</div>
            <div className="bg-pink-300 h-36">345</div>
          </div>
        </div>
    );
}

export default ProductCard;