import React, { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Option from "@mui/joy/Option";
import Select, { selectClasses } from "@mui/joy/Select";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import Input from "@mui/joy/Input";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { KeyboardArrowUp } from "@mui/icons-material";

const data = [
  {
    ratingStar: "★★★★★",
    createdDay: "Sep 19, 2024",
    title: "Great Product",
    description:
      "The product quality is excellent, very satisfied with my purchase.",
    recommend: "Highly recommended",
    fitting: "Perfect",
    shipping: 'Yes', // yes
  },
  {
    ratingStar: "★★★★★",
    createdDay: "Sep 19, 2024",
    title: "Good Value",
    description: "Good value for the price. Could improve the packaging.",
    recommend: "Recommended",
    shipping: "Yes", // yes
  },
  {
    ratingStar:"★★★★★",
    createdDay: "Sep 19, 2024",
    title: "Average Product",
    description: "The product is okay, but didn’t meet my expectations.",
    recommend: "Not recommended",
    shipping: "Yes", // no
  },
];

const rating = [
  { icon: "★", value: 1 },
  { icon: "★★", value: 2 },
  { icon: "★★★", value: 3 },
  { icon: "★★★★", value: 4 },
  { icon: "★★★★★", value: 5 },
];
function ListReview() {
  return (
    <>
      {data.map((item) => (
        <div className="bg-white rounded-lg my-5 p-3">
          {/* start and date */}
          <div className="flex justify-between">
            <div className="text-pink-600 text-[22px]">{item.ratingStar}</div>
            <div>{item.createdDay}</div>
          </div>
          {/* title and description */}
          <div className="py-4">
            <h2 className="font-bold">{item.title}</h2>
            <div>{item.description}</div>
          </div>
          {/* shipping */}
          <div className="flex justify-between py-3 border-y-[1px] border-gray-200 text-base font-medium">
            <div>Shipping</div>
            <div>{item.shipping}</div>
          </div>
          {/* Recommended */}
          <div className="flex justify-between py-3 text-base font-medium">
            <div>Recommended</div>
            <div>{item.recommend}</div>
          </div>
        </div>
      ))}
    </>
  );
}

function renderStars(count) {
  return Array.from({ length: count }, (_, index) => (
    <StarOutlinedIcon key={index} sx={{ fontSize: "12px" }} />
  ));
}

function Review() {
  const [isOpen, setIsOpen] = useState(false);
  const [isWrite, setIsWrite] = useState(false);
  const [status, setStatus] = useState(null);

  const [selectedRating, setSelectedRating] = useState("★★★★★"); // Giá trị ngôi sao mặc định

  const handleSelect = (rating) => {
    setSelectedRating(rating);
    setIsOpen(false); // Đóng dropdown sau khi chọn
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const toggleTab = () => {
    setIsOpen(!isOpen);
  };

  const toggleWriteReview = () => {
    setIsWrite(!isWrite);
    setIsOpen(false);
  };

  // useEffect(() => {
  //   if (isOpen) {
  //     document.body.style.overflowY = "hidden"; // Tắt thanh cuộn
  //   } else {
  //     document.body.style.overflowY = "auto"; // Bật lại thanh cuộn
  //   }

  //   // Cleanup để reset overflow về trạng thái bình thường khi component bị unmount
  //   return () => {
  //     document.body.style.overflowY = "auto";
  //   };
  // }, [isOpen]);

  const [selectedButton, setSelectedButton] = useState(null); // State lưu button được chọn

  const handleButton = (button) => {
    setSelectedButton(button); // Cập nhật state khi button được click
  };

  const [selectedOrder, setSelectedOrder] = useState(null); // State lưu button được chọn

  const handleOrder = (button) => {
    setSelectedOrder(button); // Cập nhật state khi button được click
  };

  const [titleReview, setTitleReview] = useState("");

  const handleChangeTitle = (e) => {
    setTitleReview(e.target.value);
    console.log("Title Review:", titleReview);
  };
  const [descriptionReview, setDescriptionReview] = useState("");
  const handleDescriptionReview = (e) => {
    setDescriptionReview(e.target.value);
    console.log("desription: ", descriptionReview);
  };

  const [score, setScore] = useState("");
  const handleScore = (e) => {
    setScore(e.target.value);
    console.log(e.target.value);
    switch (e.target.value) {
      case "0":
        return console.log("★");
      case "1":
        return console.log("★★");
      case "2":
        return console.log("★★★");
      case "3":
        return console.log("★★★★");
      case "4":
        return console.log("★★★★★");
    }
  };

  const renderScore = (score) => {
    switch(score) {
      case "0":
        return "★";
      case "1":
        return "★★";
      case "2":
        return "★★★";
      case "3":
        return "★★★★";
      case "4":
        return "★★★★★";
      default:
        return ""; // Trường hợp mặc định khi score không phải là 0-4
    }
  };
  

  const writeReview = () => {
    data.push({
      ratingStar: renderScore(score),
      createdDay: "2024-09-15",
      title: titleReview,
      description: descriptionReview,
      recommend: selectedButton,
      shipping: selectedOrder,
    });
    console.log(data);
  };

  return (
    <>
      {/* review section */}
      <div className="bg-white rounded-2xl border-2 my-5 p-3">
        <div className="flex justify-between items-center">
          <div className="font-semibold">Reviews ({ }) </div>
          <div className="font-medium cursor-pointer" onClick={toggleWriteReview}>Write a Review</div>
        </div>
        <div className="flex justify-between items-center my-4">
          <div className="font-medium">Overall rating </div>
          <div className="font-medium">4.90 {renderStars(1)}</div>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="text-center w-full bg-white border-2 rounded-lg py-2 transition ease-in-out delay-50 hover:bg-gray-200"
            onClick={toggleTab}
          >
            Show all
          </button>
        </div>
      </div>
      {/* show list review */}
      <div
        className={`fixed top-3 bottom-3 right-0 bg-gray-200 transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? "translate-x-0" : "translate-x-full opacity-50"
          } w-4/12 rounded-lg`}
      >
        {/* Nội dung Review */}
        <div className="view-list-review">
          <div className="flex justify-between h-12 items-center px-3 mt-1">
            <div className="font-bold text-base">Reviews ({ })</div>
            <button onClick={() => setIsOpen(false)}>
              <CloseIcon />
            </button>
          </div>
          {/* Body nội dung*/}
          {/* h-[calc(100dvh-100px)] mặc dù chưa hiểu rõ là như thế nào nhưng mà cái này nó sẽ giới hạn height và tạo ra sroll 
          overflow-y-scroll h-[calc(100dvh-120px)]
          */}
          <div className="overflow-x-auto h-[calc(100dvh-100px)] px-3">
            <div className="">
              <div className="flex justify-between items-center rounded-lg bg-gray-300 px-[12px] py-2">
                <div className="font-bold">Overall rating</div>
                <div className="flex items-center justify-center gap-1">
                  <div className="font-bold">4.74</div>
                  <div className="text-pink-600 text-[22px]">★</div>
                </div>
              </div>
              <div className="flex justify-between gap-2 mt-5">
                <select className="filter-rating w-6/12 px-[12px] py-2.5 rounded-lg">
                  <option>Read all</option>
                  <option>★</option>
                  <option>★★</option>
                  <option>★★★★</option>
                  <option>★★★★★</option>
                </select>
                <div className="relative w-6/12">
                  <select className="filter-view appearance-none w-full px-[12px] py-2.5 rounded-lg">
                    <option className="mt-3">Most relevant</option>
                    <option>Most recent</option>
                    <option>By rating</option>
                  </select>
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              <ListReview />
            </div>
            <div className="flex justify-center sticky bottom-0">
              <button
                className="bg-black rounded-lg text-white w-screen py-2"
                onClick={toggleWriteReview}
              >
                Write a Review
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Write review */}
      <div
        className={`write-review top-3 right-0 bottom-3 fixed bg-gray-100 transform transition-transform duration-300 ease-in-out z-50 ${isWrite ? "translate-x-0 " : "translate-x-full "
          } w-2/6 rounded-lg`}
      >
        <div className="flex justify-between">
          <div>Write a Review</div>
          <button onClick={() => setIsWrite(false)}>
            <CloseIcon />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto overflow-x-hidden h-[calc(100dvh-70px)] px-4">
          <div className="flex gap-4 bg-white rounded-lg">
            <div className="w-max">
              <img
                src="https://cdn.shopify.com/s/files/1/0515/8079/7116/files/PDP4-5_DaphneStills_SS_dbdce076-1797-41fb-af0f-5391459bdca0_1000x.png.webp?v=1725270498"
                className="w-14 h-14"
              ></img>
            </div>
            <div>
              <p>Name of Product</p>
              <p>Category</p>
              <p>$</p>
            </div>
          </div>
          <div className="my-3">
            <div className="mb-1.5">Your name</div>
            <Input placeholder="Name" />
          </div>
          <div className="my-3">
            <div className="mb-1.5">Your email address</div>
            <Input placeholder="Email" />
          </div>
          <div className="my-3">
            <div className="mb-1.5 mt-5">Score</div>
            <div className="relative">
              <select
                className="filter-rating w-full px-[12px] py-2.5 rounded-lg"
                onChange={handleScore}
                value={score}
              >
                <option value="0">★</option>
                <option value="1">★★</option>
                <option value="2">★★★</option>
                <option value="3">★★★★</option>
                <option value="4" selected>
                  ★★★★★
                </option>
              </select>
            </div>
          </div>
          <div>
            <div className="mb-1.5" >Title</div>
            <Input
              placeholder="Choose a title"
              onChange={handleChangeTitle}
              value={titleReview}
            />
          </div>
          <div className="my-3">
            <div className="mb-1.5">Review</div>
            <textarea
              rows="5"
              cols=""
              className="rounded-lg w-full px-[12px] py-2.5 focus:outline-blue-700"
              placeholder="Write a review"
              onChange={handleDescriptionReview}
              value={descriptionReview}
            >
              {/* welcome to GeeksforGeeks Aman Rathod. A perfect Portal for Geeks */}
            </textarea>
            <p className="text-sm text-gray-400">
              Make sure you describe what you like and didn’t like about the
              product you feel other users should know about.
            </p>
          </div>
          <div className="my-3">
            <div className="mb-1.5">Recommended</div>
            <div className="flex gap-4">
              <button
                className={`btn-yes-no rounded-xl px-2.5 py-1 ${selectedButton === "yes"
                    ? "bg-pink-600 text-white"
                    : "bg-white text-black"
                  }`}
                onClick={() => handleButton("yes")}
              >
                Yes
              </button>
              <button
                className={`btn-yes-no rounded-xl px-2.5 py-1 ${selectedButton === "no"
                    ? "bg-pink-600 text-white"
                    : "bg-white text-black"
                  }`}
                onClick={() => handleButton("no")}
              >
                No
              </button>
            </div>
          </div>

          <div className="my-3">
            <div className="mb-1.5">Did your order arrive within the time mentioned?</div>
            <div className="flex gap-4">
              <button
                className={`btn-yes-no1 rounded-xl px-2.5 py-1 ${selectedOrder === "Yes"
                    ? "bg-pink-600 text-white"
                    : "bg-white text-black"
                  }`}
                onClick={() => handleOrder("Yes")}
              >
                Yes
              </button>
              <button
                className={`btn-yes-no1 rounded-xl px-2.5 py-1 ${selectedOrder === "No"
                    ? "bg-pink-600 text-white"
                    : "bg-white text-black"
                  }`}
                onClick={() => handleOrder("No")}
              >
                No
              </button>
            </div>
          </div>
          <div className="flex sticky bottom-0 justify-between">
            <button
              className="bg-black text-white rounded-xl px-2.5 py-1 w-6/12"
              onClick={writeReview}
            >
              Save
            </button>
            <button
              className="bg-white rounded-xl border-1 border-black px-2.5 py-1 w-6/12"
              onClick={() => setIsWrite(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function ReviewList() {
  return (
    <div className="">
      <Review />
    </div>
  );
}

export default ReviewList;
