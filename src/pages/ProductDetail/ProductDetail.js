import React from "react";
import Header from "../../components/app/Header";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import Button from "@mui/material/Button";

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
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ height: '40px'}}
            >
              <SportsVolleyballIcon sx={{ marginRight: "5px" }} />
              {data.name}
            </AccordionSummary>
            <AccordionDetails>
              <ul className="list-specification">
                {data.item.map((items, index) => (
                  <li
                    className="border-b-2 border-b-gray-200 py-2 last:border-b-0"
                    key={index}
                  >
                    <a href="">{items.name}</a>
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

function Review() {
    return (
        <>
            <div className="bg-white rounded-md border-2 my-5">
                <div className="flex justify-between items-center">
                    <div>Reviews ({}) </div>
                    <div>Write a Review</div>
                </div>
                <div className="flex justify-between items-center">
                    <div>Overall rating </div>
                    <div>4.90 ⭐</div>
                </div>
                <div className="flex justify-center items-center">
                    <button className="text-center w-full bg-white border-2 rounded-md">Show all</button>
                </div>
            </div>
        </>
    )
}


function ProductDetail() {
  return (
    <div className="m-auto w-10/12">
      <Header/>
      <div className="flex">
        <div className="w-7/12 bg-red-200">Ảnh Product</div>
        <div className="w-5/12 bg-blue-200">
          <div className="flex justify-between items-center">
            <div>
              <h2>Flamenco Frilled & High Waisted</h2>
              <p>Bikini</p>
            </div>
            <div>
              <p>$155</p>
              <p>$140</p>
            </div>
          </div>
          {/* color */}
          <div>
            <div>Color: {}</div>
            <div className="flex gap-3">
              <button className="bg-gray-300">gray</button>
              <button className="bg-blue-300">blue</button>
              <button className="bg-red-300">red</button>
              <button className="bg-gray-500">gray</button>
            </div>
          </div>
          {/* ram */}
          <div>
            <div>Ram: {}</div>
            <div className="flex gap-3">
              <button className="bg-gray-300">4GB</button>
              <button className="bg-gray-300">8GB</button>
              <button className="bg-gray-300">16GB</button>
              <button className="bg-gray-300">32GB</button>
            </div>
          </div>
          {/* Storage */}
          <div>
            <div>Storage: {}</div>
            <div className="flex gap-3">
              <button className="bg-gray-300">32GB</button>
              <button className="bg-gray-300">64GB</button>
              <button className="bg-gray-300">120GB</button>
              <button className="bg-gray-300">280GB</button>
            </div>
          </div>
          {/* list */}
          <ListItem />
          <Review/>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
