import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";

function Specification({ categoryID, onSpecificationChange }) {
  const [specValues, setSpecValues] = useState({}); // State to hold {key: value}

  const getCategoriesById = async (id) => {
    try {
      const response = await fetch(
        `https://be-ecommerce-gaa8.onrender.com/api/v1/categories/${id}`
      );
      const data = await response.json();
      const initialValues = {};
      data.data.specifications.forEach((spec) => {
        initialValues[spec] = ""; // Initialize each key with an empty string
      });
      setSpecValues(initialValues);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (categoryID) {
      getCategoriesById(categoryID);
    } else {
      setSpecValues({});
    }
  }, [categoryID]);

  const handleInputChange = (key, value) => {
    setSpecValues((prevValues) => ({
      ...prevValues,
      [key]: value, // Update the specific key's value
    }));
    onSpecificationChange({ ...specValues, [key]: value });
  };

  return (
    <div>
      <h3 className="mb-2 mt-5 text-lg font-bold">Specification</h3>
      <div className="border-2 px-5 py-4">
        <div className="py-3">
          <Accordion style={{ borderRadius: "10px" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ height: "40px" }}
            >
              <SportsVolleyballIcon sx={{ marginRight: "5px" }} />
              Specifications
            </AccordionSummary>
            <AccordionDetails>
              <ul className="list-specification">
                {Object.entries(specValues).map(([key, value]) => (
                  <li className=" bg-white py-2 transition ease-in-out duration-100 flex gap-2 items-center">
                    <label className="w-2/12">{key}</label>
                    <input
                      type="text"
                      className="w-10/12 py-1 px-3 border-2 border-gray-300 flex-1 rounded-lg"
                      value={specValues[key] || ""}
                      onChange={(e) => handleInputChange(key, e.target.value)}
                    />
                  </li>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Specification;
