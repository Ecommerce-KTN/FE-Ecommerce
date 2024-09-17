import React, { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Option from "@mui/joy/Option";
import Select, { selectClasses } from "@mui/joy/Select";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import Input from "@mui/joy/Input";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { KeyboardArrowUp } from "@mui/icons-material";
import { useAsyncError } from "react-router-dom";

const data = [
  {
    ratingStar: 5,
    createdDay: "2024-09-15",
    title: "Great Product",
    description:
      "The product quality is excellent, very satisfied with my purchase.",
    recommend: "Highly recommended",
    fitting: "Perfect",
    shipping: true, // yes
  },
  {
    ratingStar: 4,
    createdDay: "2024-09-10",
    title: "Good Value",
    description: "Good value for the price. Could improve the packaging.",
    recommend: "Recommended",
    fitting: "Slightly loose",
    shipping: true, // yes
  },
  {
    ratingStar: 3,
    createdDay: "2024-09-05",
    title: "Average Product",
    description: "The product is okay, but didn’t meet my expectations.",
    recommend: "Not recommended",
    fitting: "Tight",
    shipping: false, // no
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
      <div className="bg-white rounded-lg mt-5">
        {/* start and date */}
        <div className="flex justify-between">
          <div>5 start</div>
          <div>dd/mm/yyyy</div>
        </div>
        {/* title and description */}
        <div>
          <h2>Title</h2>
          <div>Description</div>
        </div>
        {/* shipping */}
        <div className="flex justify-between">
          <div>Shipping</div>
          <div>Yes</div>
        </div>
        {/* Fitting */}
        <div className="flex justify-between">
          <div>Fitting</div>
          <div>True to size</div>
        </div>
        {/* Recommended */}
        <div className="flex justify-between">
          <div>Recommended</div>
          <div>10 - I'll recommended to everyone</div>
        </div>
      </div>
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
  const [selectedValue, setSelectedValue] = useState(null);
  const [status, setStatus] = useState(false);
  const handleClickStatus = () => {
    setStatus(!status);
  }

  const [selectedRating, setSelectedRating] = useState("★★★★★"); // Giá trị ngôi sao mặc định

  const handleSelect = (rating) => {
    setSelectedRating(rating);
    setIsOpen(false); // Đóng dropdown sau khi chọn
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  }

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

  return (
    <>
      {/* review section */}
      <div className="bg-white rounded-2xl border-2 my-5 p-3">
        <div className="flex justify-between items-center">
          <div className="font-semibold">Reviews ({ }) </div>
          <div className="font-medium">Write a Review</div>
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
        <div className="view-list-review m-4">
          <div className="flex justify-between">
            <div>Reviews ({ })</div>
            <button onClick={() => setIsOpen(false)}>
              <CloseIcon />
            </button>
          </div>
          {/* Body nội dung*/}
          {/* h-[calc(100dvh-100px)] mặc dù chưa hiểu rõ là như thế nào nhưng mà cái này nó sẽ giới hạn height và tạo ra sroll 
          overflow-y-scroll h-[calc(100dvh-120px)]
          */}
          <div className="">
            <div className="flex justify-between rounded-md bg-gray-300">
              <div>Overall rating</div>
              <div>
                4.74 <StarOutlinedIcon sx={{ color: "#eb345e" }} />
              </div>
            </div>
            <div className="flex justify-between">
              <Select
                value={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value)}
                indicator={<KeyboardArrowDown />}
                renderValue={(selected) => renderStars(selected)} // Hiển thị icon ngôi sao khi chọn
                sx={{
                  width: "100%",
                  [`& .${selectClasses.indicator}`]: {
                    transition: "0.2s",
                    [`&.${selectClasses.expanded}`]: {
                      transform: "rotate(-180deg)",
                    },
                  },
                }}
              >
                <Option value="1" data-icon="">
                  {renderStars(1)}
                </Option>
                <Option value="2">{renderStars(2)}</Option>
                <Option value="3">{renderStars(3)}</Option>
                <Option value="4">{renderStars(4)}</Option>
                <Option value="5">{renderStars(5)}</Option>
              </Select>
              <Select
                indicator={<KeyboardArrowDown />}
                sx={{
                  width: 240,
                  [`& .${selectClasses.indicator}`]: {
                    transition: "0.2s",
                    [`&.${selectClasses.expanded}`]: {
                      transform: "rotate(-180deg)",
                    },
                  },
                }}
              >
                <Option value="1">Most relevant</Option>
                <Option value="2">Most recent</Option>
                <Option value="3">By rating</Option>
              </Select>
            </div>
            <ListReview />
            <ListReview />
          </div>
          <div className="flex justify-center">
            <button
              className="bg-black rounded-lg text-white w-screen py-2"
              onClick={toggleWriteReview}
            >
              Write a Review
            </button>
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
            <div>Your name</div>
            <Input placeholder="Name" />
          </div>
          <div className="my-3">
            <div>Your email address</div>
            <Input placeholder="Email" />
          </div>
          <div className="my-3">
            <div>Score</div>
            <div className="relative">
              <button className="w-full text-left bg-white rounded-md py-1.5 px-[12px] flex justify-between" onClick={handleOpen}>
                <p>{selectedRating}</p>
                <div>{isOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}</div>
              </button>
              <div className={`bg-slate-50 absolute z-50 cursor-pointer w-full mt-2 rounded-md px-[12px] 
                transition-all ease-in-out duration-175 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                {rating.map((item) => (
                  <div className="py-2" key={item.value} onClick={() => handleSelect(item.icon)}>
                    {item.icon}
                  </div>
                ))}
              </div>

            </div>


          </div>
          <div>
            <div>Title</div>
            <Input placeholder="Choose a title" />
          </div>
          <div className="my-3">
            <div>Review</div>
            <textarea rows="5" cols="" className="rounded-lg w-full px-[12px] py-2.5 focus:outline-blue-700" placeholder="Write a review">
              {/* welcome to GeeksforGeeks Aman Rathod. A perfect Portal for Geeks */}
            </textarea>
            <p className="text-sm">
              Make sure you describe what you like and didn’t like about the
              product you feel other users should know about.
            </p>
          </div>
          <div className="my-3">
            <div>Recommended</div>
            <div className="flex gap-4">
              <button className={`btn-yes-no bg-white rounded-xl px-2.5 py-1 ${status ? 'bg-pink-600 text-white' : ''}`} onClick={handleClickStatus}>Yes</button>
              <button className="btn-yes-no bg-white rounded-xl px-2.5 py-1">No</button>
            </div>
          </div>
          <div className="my-3">
            <div>Fitting</div>
            <div className="flex gap-4">
              <button className="bg-white rounded-xl px-1.5 py-1">
                True to size
              </button>
              <button className="bg-white rounded-xl px-1.5 py-1">
                Tighter than expected
              </button>
              <button className="bg-white rounded-xl px-1.5 py-1">
                Larger than expected
              </button>
            </div>
          </div>
          <div className="my-3">
            <div>Did your order arrive within the time mentioned?</div>
            <div className="flex gap-4">
              <button className="bg-white rounded-xl px-2.5 py-1">Yes</button>
              <button className="bg-white rounded-xl px-2.5 py-1">No</button>
            </div>
          </div>
          <div className="flex sticky bottom-0 justify-between">
            <button className="bg-black text-white rounded-xl px-2.5 py-1 w-6/12">
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
