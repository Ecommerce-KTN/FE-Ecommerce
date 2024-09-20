import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";

const dataSpecification = [
  { lable: "Dispay", value: "display" },
  { lable: "Processor", value: "processor" },
  { lable: "Battery", value: "battery" },
  { lable: "Operating System", value: "os" },
]

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

function Input() {
  return (
    <>
      {specification.map((data) => (
        <div className="mt-2">
          <Accordion style={{ borderRadius: '10px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ height: '40px' }}
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
    </>

  )
}


export default function Specification() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Specification
        </AccordionSummary>
        <AccordionDetails>
          <Input />
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
