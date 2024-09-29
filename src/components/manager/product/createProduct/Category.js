import { Button } from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import Select from "react-select";
import Switch from "@mui/material/Switch";
import AddVariant from "./AddVariant";

function Category({
  onCategoryChange,
  onSubCategoryChange,
  // onQuantityChange,
  // onSKUChange,
  onSellingTypeChange,
}) {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  // const [quantity, setQuantity] = useState("");
  // const [quantityError, setQuantityError] = useState("");
  const [sellingType, setSellingType] = useState("INSTORE");
  const hasFetched = useRef(false);

  

  const getSubCategories = async (id) => {
    try {
      const response = await fetch(
        `https://be-ecommerce-gaa8.onrender.com/api/v1/categories/subcategories/${id}`
      );
      const data = await response.json();
      console.log("SubCategories data:", data);
      setSubCategories(Array.isArray(data.data) ? data.data : []);
    } catch (error) {
      console.log(error);
      setSubCategories([]);
    }
  };

  const handleSellingTypeChange = (e) => {
    const selectedType = e.target.id;
    setSellingType(selectedType);
    onSellingTypeChange(selectedType);
  };
  console.log("category", categories);

  

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    const getCategories = async () => {
      try {
        const response = await fetch(
          "https://be-ecommerce-gaa8.onrender.com/api/v1/categories/parents"
        );
        const data = await response.json();
        setCategories(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  useEffect(() => {
    if (selectedCategoryId) {
      getSubCategories(selectedCategoryId);
    } else {
      setSubCategories([]);
    }
  }, [selectedCategoryId]);

  const handleCategoryChange = (e) => {
    const newCategoryId = e.target.value;
    setSelectedCategoryId(newCategoryId);
    onCategoryChange(newCategoryId);
  };

  

  return (
    <div
      style={{
        boxSizing: "border-box",
        marginBottom: "20px",
        position: "relative",
      }}
    >
      {/* Category Section */}
      <h3 className="mb-2 mt-5 text-lg font-bold">Category <span style={{color:"red"}}>*</span></h3>
      <div
        style={{
          width: "100%",
          marginBottom: "20px",
          border: "1px solid #d9d9d9",
          padding: "15px",
        }}
      >
        <label style={{ fontWeight: "500" }}>
          Product Category
        </label>
        <select
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            marginTop: "10px",
          }}
          onChange={handleCategoryChange}
          value={selectedCategoryId}
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <label style={{ fontWeight: "500" }}>
          Product Subcategory
        </label>
        <select
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            marginTop: "10px",
          }}
          onChange={(e) => onSubCategoryChange(e.target.value)}
        >
          <option value="">Select Subcategory</option>
          {subCategories.map((subCategory) => (
            <option key={subCategory.id} value={subCategory.id}>
              {subCategory.name}
            </option>
          ))}
        </select>
      </div>

     
      {/* Selling Type Section */}
      <div style={{ width: "100%", marginBottom: "20px" }}>
        <label className="mb-2 mt-5 text-lg font-bold">Selling Type <span style={{color:"red"}}>*</span></label>
        <div
          style={{
            padding: "10px",
            borderRadius: "4px",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            marginTop: "15px",
          }}
        >
          <div style={{ marginBottom: "10px" }}>
            <input
              type="checkbox"
              id="INSTORE"
              name="sellingType"
              checked={sellingType === "INSTORE"}
              onChange={handleSellingTypeChange}
            />
            <label htmlFor="INSTORE" style={{ marginLeft: "10px" }}>
              In-store selling only
            </label>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <input
              type="checkbox"
              id="ONLINE"
              name="sellingType"
              checked={sellingType === "ONLINE"}
              onChange={handleSellingTypeChange}
            />
            <label htmlFor="ONLINE" style={{ marginLeft: "10px" }}>
              Online selling only
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="BOTH"
              name="sellingType"
              checked={sellingType === "BOTH"}
              onChange={handleSellingTypeChange}
            />
            <label htmlFor="BOTH" style={{ marginLeft: "10px" }}>
              Available both in-store and online
            </label>
          </div>
        </div>
      </div>

     
    </div>
  );
}

export default Category;
