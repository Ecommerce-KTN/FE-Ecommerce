import React, { useState } from "react";

function Review() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    {/* review section */}
      <div className="bg-white rounded-2xl border-2 my-5 p-3">
        <div className="flex justify-between items-center">
          <div className="font-semibold">Reviews ({}) </div>
          <div className="font-medium">Write a Review</div>
        </div>
        <div className="flex justify-between items-center my-4">
          <div className="font-medium">Overall rating </div>
          <div className="font-medium">4.90 ⭐</div>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="text-center w-full bg-white border-2 rounded-lg py-2 transition ease-in-out delay-50 hover:bg-gray-200 "
            onClick={toggleMenu}
          >
            Show all
          </button>
        </div>
      </div>
      {/* show list review */}
      <div
        className={`fixed top-0 right-[-10px] h-full bg-gray-200 transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } w-64`}
      >
        {/* Nội dung menu */}
        <ul className="p-4 space-y-4">
          <li>Trang chủ</li>
          <li>Video</li>
          <li>Danh sách phát</li>
        </ul>
      </div>
    </>
  );
}

function ReviewList(){

  return (
    <div className="relative">
      <Review/>
    </div>
  );
};

export default ReviewList;
