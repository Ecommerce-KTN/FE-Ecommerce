import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";

function Category({ onCategoryChange, onSubCategoryChange, onQuantityChange, onSKUChange, onSellingTypeChange }) {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [quantity, setQuantity] = useState("");
  const [quantityError, setQuantityError] = useState("");
  const [sellingType, setSellingType] = useState("inStore");

  const getSubCategories = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/v1/categories/by-parent/${id}`);
      const data = await response.json();
      console.log("SubCategories data:", data);
      setSubCategories(Array.isArray(data) ? data : []);
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

  const handleQuantityChange = (e) => {
    const value = e.target.value;

    if (/^\d*$/.test(value)) {
      if (value === "" || (parseInt(value, 10) >= 1 && parseInt(value, 10) <= 9999)) {
        setQuantity(value);
        setQuantityError("");
      } else {
        setQuantityError("Quantity must be between 1 and 9999.");
      }
    } else {
      setQuantityError("Please enter a valid number without commas or periods.");
    }
    onQuantityChange(value);
  };

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/v1/categories/parents");
        const data = await response.json();
        setCategories(data);
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
    <div style={{ boxSizing: "border-box", marginBottom: "20px" }}>
      {/* Category Section */}
      <h3>Category *</h3>
      <div
        style={{
          width: "96%",
          marginBottom: "20px",
          border: "1px solid #d9d9d9",
          padding: "10px",
        }}
      >
        <label style={{ fontWeight: "500", fontSize: "small" }}>Product Category</label>
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
        <label style={{ fontWeight: "500", fontSize: "small" }}>Subcategory</label>
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

      {/* Inventory Section */}
      <div style={{ width: "100%", marginBottom: "20px" }}>
        <label style={{ fontWeight: "bold" }}>Inventory</label>
        <div
          style={{
            display: "flex",
            gap: "20px",
            border: "1px solid #d9d9d9",
            padding: "10px",
            marginTop: "15px",
          }}
        >
          <form style={{ width: "35%" }}>
            <label style={{ display: "block", fontSize: "small" }}>Quantity</label>
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              placeholder="Quantity"
              min="1"
              max="9999"
              style={{
                width: "90%",
                flex: "1",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                marginTop: "10px",
                borderColor: quantityError ? "red" : "#ccc",
              }}
            />
            {quantityError && <p style={{ color: "red", fontSize: "small" }}>{quantityError}</p>}
          </form>
          <form style={{ width: "65%" }}>
            <label style={{ display: "block", fontSize: "small" }}>SKU (Optional)</label>
            <input
              type="text"
              placeholder="SKU (Optional)"
              onChange={(e) => onSKUChange(e.target.value)}
              style={{
                width: "90%",
                flex: "1",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                marginTop: "10px",
              }}
            />
          </form>
        </div>
      </div>

      {/* Selling Type Section */}
      <div style={{ width: "100%", marginBottom: "20px" }}>
        <label style={{ fontWeight: "bold" }}>Selling Type</label>
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
              id="inStore"
              name="sellingType"
              checked={sellingType === "inStore"}
              onChange={handleSellingTypeChange}
            />
            <label htmlFor="inStore" style={{ marginLeft: "10px"}}>
              In-store selling only
            </label>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <input
              type="checkbox"
              id="online"
              name="sellingType"
              checked={sellingType === "online"}
              onChange={handleSellingTypeChange}
            />
            <label htmlFor="online" style={{ marginLeft: "10px" }}>
              Online selling only
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="both"
              name="sellingType"
              checked={sellingType === "both"}
              onChange={handleSellingTypeChange}
            />
            <label htmlFor="both" style={{ marginLeft: "10px" }}>
              Available both in-store and online
            </label>
          </div>
        </div>
      </div>

      {/* Variant Section */}
      <div style={{ width: "100%" }}>
        <label style={{ fontWeight: "bold" }}>Variant</label>
        <div
          style={{
            border: "1px solid #d9d9d9",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "15px",
          }}
        >
          <p style={{ fontSize: "13px", marginLeft: "10px", fontWeight: "bold" }}>
            Product Variant
          </p>
          <Button
            style={{
              borderRadius: "4px",
              border: "none",
              backgroundColor: "#fff",
              color: "blue",
              textAlign: "right",
              textTransform: "none",
            }}
          >
            + Add Variant
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Category;
