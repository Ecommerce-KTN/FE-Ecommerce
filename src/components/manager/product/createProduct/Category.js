import { Button } from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';
import CloseIcon from "@mui/icons-material/Close";
import Select from "react-select";

function Category({ onCategoryChange, onSubCategoryChange, onQuantityChange, onSKUChange, onSellingTypeChange }) {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [quantity, setQuantity] = useState("");
  const [quantityError, setQuantityError] = useState("");
  const [sellingType, setSellingType] = useState("inStore");
  const hasFetched = useRef(false);

  const [openVariant, setOpenVariant] = useState(false)
  const handleClickVariant = () => {
    setOpenVariant(!openVariant);
  }

  const optionsColor = [
    { value: 'red', label: 'Red' },
    { value: 'blue', label: 'Blue' },
    { value: 'gray', label: 'Gray' },
  ]

  const optionsRam = [
    { value: '4gb', label: '4GB' },
    { value: '8gb', label: '8GB' },
    { value: '16gb', label: '16GB' },
  ]

  const optionsStorage = [
    { value: '32gb', label: '32GB' },
    { value: '64gb', label: '64GB' },
    { value: '128gb', label: '128GB' },
  ]
  const [selectColor, setColor] = useState([]);
  const handleColor = (selectColor) => {
    setColor(selectColor);
  }

  const [selectRam, setRam] = useState([]);
  const handleRam = (selectRam) => {
    setRam(selectRam);
  }

  const [selectStorage, setStorage] = useState([]);
  const handleStorage = (selectStorage) => {
    setStorage(selectStorage);
  }

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
    if(hasFetched.current) return;
    hasFetched.current = true;

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
    <div style={{ boxSizing: "border-box", marginBottom: "20px", position: "relative" }}>
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
            onClick={handleClickVariant}
          >
            + Add Variant
          </Button>
          
        </div>
      </div>
      <div className={`${openVariant ? 'fixed top-0 bottom-0 w-8/12 h-full rounded-lg border-gray-300 bg-white z-50' : 'hidden'}`}>
        <div className="flex justify-center">
          <div className="text-center">Add Variant</div>
          <div onClick={() => setOpenVariant(false)}><CloseIcon/></div>
        </div>
        <div className="flex gap-4">
          <div>Primary Variant</div>
          <div>Primary Variant</div>
        </div>
        {/* chon ram, color, storage */}
        <div className="section-rsc">
          
          <div className="flex items-center gap-4 justify-center">
            <div><p>Color</p></div>
            <div className="w-5/12">
              <Select
              options={optionsColor}
              value={selectColor}
              onChange={handleColor}
              isMulti
              className=""
              />
            </div>
          </div>
          {/* section ram */}
          <div className="flex items-center gap-4 justify-center">
            <div><p>Ram</p></div>
            <div className="w-5/12">
              <Select
              options={optionsRam}
              value={selectRam}
              onChange={handleRam}
              isMulti
              classNaStorage
              />
            </div>
          </div>
          {/* section storage */}
          <div className="flex items-center gap-5 justify-center">
            <div><p>Storage</p></div>
            <div className="w-5/12">
              <Select
              options={optionsStorage}
              value={selectStorage}
              onChange={handleStorage}
              isMulti
              className=""
              />
            </div>
          </div>
        </div>
        {/* section variants images */}
        <div>
            <p>Variant Images</p>
            <div>
              {/*  */}
              <div className="flex gap-4 mt-5">
                <input type="text" placeholder="color" className="h-8"></input>
                <div className="w-full h-12 bg-gray-300"></div>
              </div>
              {/*  */}
              <div className="flex gap-4 mt-5">
                <input type="text" placeholder="color" className="h-8"></input>
                <div className="w-full h-12 bg-gray-300"></div>
              </div>
              {/*  */}
              <div className="flex gap-4 mt-5">
                <input type="text" placeholder="color" className="h-8"></input>
                <div className="w-full h-12 bg-gray-300"></div>
              </div>
              
            </div>
            
        </div>
        {/* product variant */}
        <div className="flex justify-between mt-5">
          <div>Product Variant</div>
          <div>
            <button className="bg-blue-500 text-white py-2 px-3 rounded-lg">Apply for all</button>
          </div>
        </div>
        {/* product */}
        <div className="flex justify-between">
          <div className="flex gap-3 items-center">
            <div>Price</div>
            <input type="text" className="px-3 py-2 rounded-lg "></input>
          </div>
          <div className="flex gap-3 items-center">
            <div>Price</div>
            <input type="text" className="px-3 py-2 rounded-lg "></input>
          </div>
          <div className="flex gap-3 items-center">
            <div>Price</div>
            <input type="text" className="px-3 py-2 rounded-lg "></input>
          </div>
          <div className="flex gap-3 items-center">
            <div>Price</div>
            <input type="text" className="px-3 py-2 rounded-lg "></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
