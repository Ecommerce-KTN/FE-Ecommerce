import React, { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Option from "@mui/joy/Option";
import Select, { selectClasses } from "@mui/joy/Select";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";

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
function ListReview() {
  return (
    <>
      <div className="bg-white rounded-lg">
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
    <StarOutlinedIcon key={index} />
  ));
}

function Review() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden"; // Tắt thanh cuộn
    } else {
      document.body.style.overflowY = "auto"; // Bật lại thanh cuộn
    }

    // Cleanup để reset overflow về trạng thái bình thường khi component bị unmount
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isOpen]);

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
          <div className="font-medium">4.90 {renderStars(1)}</div>
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
        className={`fixed top-3 bottom-3 right-0 bg-gray-200 transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen
            ? "translate-x-0"
            : "translate-x-full overflow-y-hidden opacity-50"
        } w-2/6 rounded-lg`}
      >
        {/* Nội dung menu */}
        <div className="m-4">
          <div className="flex justify-between">
            <div>Reviews ({})</div>
            <button onClick={() => setIsOpen(false)}>
              <CloseIcon />
            </button>
          </div>
          {/* Body nội dung*/}
          {/* h-[calc(100dvh-100px)] mặc dù chưa hiểu rõ là như thế nào nhưng mà cái này nó sẽ giới hạn height và tạo ra sroll */}
          <div className="overflow-y-scroll h-[calc(100dvh-100px)]">
            <div className="flex justify-between rounded-md bg-gray-300">
              <div>Overall rating</div>
              <div>
                4.74 <StarOutlinedIcon sx={{ color: "#eb345e" }} />
              </div>
            </div>
            <div className="flex justify-between">
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
                <Option value="1">Read all</Option>
                <Option value="2">{renderStars(1)}</Option>
                <Option value="3">{renderStars(2)}</Option>
                <Option value="4">{renderStars(3)}</Option>
                <Option value="4">{renderStars(4)}</Option>
                <Option value="4">{renderStars(5)}</Option>
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
            <ListReview />
            <ListReview />
            <ListReview />
            <ListReview />
            
          </div>
          <div className="flex justify-center">
            <button className="bg-black rounded-lg text-white w-screen py-2">Write a Review</button>
          </div>
        </div>
      </div>
    </>
  );
}

function ReviewList() {
  return (
    <div className="relative">
      <Review />
    </div>
  );
}

export default ReviewList;
