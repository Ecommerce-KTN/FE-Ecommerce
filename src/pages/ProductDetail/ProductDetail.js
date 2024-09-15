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
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ReviewList from "./ReviewList";

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
          <Accordion style={{borderRadius: '10px'}}>
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
                    className="border-b-2 border-b-gray-200 bg-white py-2 last:border-b-0 transistion ease-in-out duration-100 hover:bg-gray-200"
                    key={index}
                  >
                    <a href="" className="block w-full h-full">{items.name}</a>
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
  return(
    <>
      <div>
        <p className="my-3 font-semibold">Delivery on March 5th-11th</p>
        <div className="flex justify-between">
          <button className="text-center text-white w-[29rem] bg-gray-900 border-2 rounded-lg py-2">Add to cart</button>
          <button className="p-2 rounded-lg border-2 border-black"><FavoriteBorderOutlinedIcon/></button>
        </div>
      </div>
    </>
  )
}


function ProductDetail() {
  return (
    <>
    <Header/>
    <div className="m-auto w-10/12 relative">
      
      <div className="flex">
        <div className="w-8/12 h-[280px] mr-5 ">
          <img src="https://cdn2.cellphones.com.vn/x/media/catalog/product/s/a/samsung_galaxy_s24_ultra_256gb_-_2.png"className="rounded-xl"></img>
        </div>
        <div className="w-4/12 ">
          <div className="flex gap-4 items-start">
            <div className="w-8/12">
              <h2 className="font-bold text-xl">Flamenco Frilled & High Waisted</h2>
              <p className="font-bold text-xl text-gray-400">Bikini</p>
            </div>
            <div className="w-4/12">
              <p className="font-bold line-through text-xl">$155</p>
              <p className="font-bold text-xl text-orange-600">$140</p>
            </div>
          </div>
          {/* color */}
          <div className="my-3">
            <div className="my-1">Color: {}</div>
            <div className="flex gap-3">
              <button className="bg-gray-300 min-w-[40px] min-h-[40px] rounded-lg focus:outline-none focus:ring focus:ring-gray-600"></button>
              <button className="bg-blue-500 min-w-[40px] min-h-[40px] rounded-lg focus:outline-none focus:ring focus:ring-gray-600"></button>
              <button className="bg-red-500 min-w-[40px] min-h-[40px] rounded-lg focus:outline-none focus:ring focus:ring-gray-600"></button>
              <button className="bg-gray-500 min-w-[40px] min-h-[40px] rounded-lg focus:outline-none focus:ring focus:ring-gray-600"></button>
            </div>
          </div>
          {/* ram */}
          <div className="my-3">
            <div className="my-1">Ram: {}</div>
            <div className="flex gap-3">
              <button className="min-w-[60px] min-h-[28px] rounded-lg ring-2 ring-slate-400 focus:ring focus:ring-gray-600">4GB</button>
              <button className="min-w-[60px] min-h-[28px] rounded-lg ring-2 ring-slate-400 focus:ring focus:ring-gray-600">8GB</button>
              <button className="min-w-[60px] min-h-[28px] rounded-lg ring-2 ring-slate-400 focus:ring focus:ring-gray-600">16GB</button>
              <button className="min-w-[60px] min-h-[28px] rounded-lg ring-2 ring-slate-400 focus:ring focus:ring-gray-600">32GB</button>
            </div>
          </div>
          {/* Storage */}
          <div className="my-3">
            <div className="my-1">Storage: {}</div>
            <div className="flex gap-3">
            <button className="min-w-[60px] min-h-[28px] rounded-lg ring-2 ring-slate-400 focus:ring focus:ring-gray-600">32GB</button>
              <button className="min-w-[60px] min-h-[28px] rounded-lg ring-2 ring-slate-400 focus:ring focus:ring-gray-600">64GB</button>
              <button className="min-w-[60px] min-h-[28px] rounded-lg ring-2 ring-slate-400 focus:ring focus:ring-gray-600">120GB</button>
              <button className="min-w-[60px] min-h-[28px] rounded-lg ring-2 ring-slate-400 focus:ring focus:ring-gray-600">280GB</button>
            </div>
          </div>
          {/* list */}
          <ListItem />
          <ReviewList/>
          <AddCart/>
        </div>
      </div>
      <div className="mt-28">
        <Product nameTitle={'You may also like'}/>
      </div>
    </div>
    </>
  );
}

export default ProductDetail;
