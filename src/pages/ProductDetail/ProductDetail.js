import React from "react";
import Header from "../../components/app/Header";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

function ProductDetail() {
  return (
    <div className="container">
      <Header />
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
          <div>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Accordion 1
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                    <li className="border-b-2 border-black"><a href="">Display</a></li>
                    <li><a href="">Processor</a></li>
                    <li><a href="">Battery</a></li>
                    <li><a href="">Opperating System</a></li>
                    <li><a href="">Water Resistance</a></li>
                </ul>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                Accordion 2
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                Accordion Actions
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
              <AccordionActions>
                <Button>Cancel</Button>
                <Button>Agree</Button>
              </AccordionActions>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
