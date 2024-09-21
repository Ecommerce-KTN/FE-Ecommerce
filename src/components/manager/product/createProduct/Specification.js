import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";

const specification = [
  {
    name: "Specification",
    item: [
      { name: "Display" },
      { name: "Processor" },
      { name: "Battery" },
      { name: "Operating System" },
      { name: "Water Resistance" },
    ],
  },
  {
    name: "Dimension",
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

function Input() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false); // Chỉ mở panel được click, các panel khác sẽ đóng
  };

  return (
    <>
    <div className="border-2 px-5 py-4">
      
        {specification.map((data, index) => (
          <div className="py-3" key={index}>
            <Accordion
              expanded={expanded === index} // Kiểm tra xem có phải accordion đang mở hay không
              onChange={handleChange(index)} // Xử lý thay đổi trạng thái accordion
              style={{ borderRadius: '10px' }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={{ height: '40px' }}
              >
                <SportsVolleyballIcon sx={{ marginRight: "5px" }} />
                {data.name}
              </AccordionSummary>
              <AccordionDetails>
                <ul className="list-specification">
                  {data.item.map((items, idx) => (
                    <li
                      className=" bg-white py-2 transition ease-in-out duration-100 flex gap-2 items-center"
                      key={idx}
                    >
                      <label className='w-2/12'>{items.name}</label>
                      <input type='text' className='w-10/12 py-1 px-3 border-2 border-gray-300 flex-1 rounded-lg'/>
                    </li>
                  ))}
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
    </div>
    </>
  );
}

export default function Specification() {
  return (
    <div>
      <h3>Specification</h3>
      <Input />
    </div>
  );
}
