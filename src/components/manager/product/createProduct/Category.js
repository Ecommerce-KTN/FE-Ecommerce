import { Button } from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import Select from "react-select";
import Switch from "@mui/material/Switch";
import AddVariant from "./AddVariant";

function UploadImage() {
  const [selectedImages, setSelectedImages] = useState([]);

  // fileObj = [];
  // fileArray = [];

  // uploadMultipleFiles(e) {
  //   this.fileObj.push(e.target.files)
  //   for (let i = 0; i < this.fileObj[0].length; i++) {
  //     this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
  //   }
  //   this.setState({ file: this.fileArray})
  // }

  // async onSubmit(e) {
  //   e.preventDefault();
  // }

  const handleImageUpload = (e) => {
    const files = e.target.files;
    const imageUrls = [];
    for (let i = 0; i < files.length; i++) {
      imageUrls.push(URL.createObjectURL(files[i]));
    }
    setSelectedImages(imageUrls); // Lưu trữ tất cả URL hình ảnh vào state
  };

  return (
    <div className="space-y-6">
      <input
        type="file"
        multiple={true}
        accept="image/*"
        onChange={handleImageUpload} // Xử lý nhiều file
      />

      <div className="grid grid-cols-7 gap-4 max-h-max">
        {" "}
        {/* Grid để hiển thị nhiều ảnh */}
        {selectedImages.map((image, index) => (
          <img
            key={index}
            src={image}
            width={200}
            height={200}
            className="max-h-[200px] object-contain"
            alt={`Uploaded ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function Category({
  onCategoryChange,
  onSubCategoryChange,
  onQuantityChange,
  onSKUChange,
  onSellingTypeChange,
}) {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [quantity, setQuantity] = useState("");
  const [quantityError, setQuantityError] = useState("");
  const [sellingType, setSellingType] = useState("inStore");
  const hasFetched = useRef(false);

  const [openVariant, setOpenVariant] = useState(false);

  const optionsColor = [
    { value: "red", label: "Red" },
    { value: "blue", label: "Blue" },
    { value: "gray", label: "Gray" },
  ];

  const optionsRam = [
    { value: "4gb", label: "4GB" },
    { value: "8gb", label: "8GB" },
    { value: "16gb", label: "16GB" },
  ];

  const optionsStorage = [
    { value: "32gb", label: "32GB" },
    { value: "64gb", label: "64GB" },
    { value: "128gb", label: "128GB" },
  ];

  const price = [
    { id: "price", label: "Price" },
    { id: "sale-price", label: "Sale Price" },
    { id: "mrsp-price", label: "MRSP Price" },
    { id: "quantity", label: "Quantity" },
  ];
  const [selectColor, setColor] = useState([]);
  const handleColor = (selectColor) => {
    setColor(selectColor);
  };

  const [selectRam, setRam] = useState([]);
  const handleRam = (selectRam) => {
    setRam(selectRam);
  };

  const [selectStorage, setStorage] = useState([]);
  const handleStorage = (selectStorage) => {
    setStorage(selectStorage);
  };

  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const handleClickVariant = () => {
    // Mở tab mới

    // Hiển thị overlay
    setOverlayVisible(true);
    setOpenVariant(!openVariant);
  };

  const closeOverlay = () => {
    setOverlayVisible(false); // Đóng overlay
  };

  const getSubCategories = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/categories/by-parent/${id}`
      );
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
      if (
        value === "" ||
        (parseInt(value, 10) >= 1 && parseInt(value, 10) <= 9999)
      ) {
        setQuantity(value);
        setQuantityError("");
      } else {
        setQuantityError("Quantity must be between 1 and 9999.");
      }
    } else {
      setQuantityError(
        "Please enter a valid number without commas or periods."
      );
    }
    onQuantityChange(value);
  };

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    const getCategories = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/v1/categories/parents"
        );
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

  const headers = [
    "Color",
    "Ram",
    "Storage",
    "SKU",
    "Quantity",
    "Price",
    "Sale Price",
    "MRSP Price",
  ];

  const data = [
    {
      color: "Blue",
      ram: "8GB",
      storage: "128GB",
      sku: "SKU12345",
      quantity: 50,
      price: "$500",
      salePrice: "$450",
      msrpPrice: "$550",
    },
    {
      color: "Red",
      ram: "16GB",
      storage: "256GB",
      sku: "SKU67890",
      quantity: 30,
      price: "$600",
      salePrice: "$550",
      msrpPrice: "$650",
    },
    // Add more rows as needed
  ];

  return (
    <div
      style={{
        boxSizing: "border-box",
        marginBottom: "20px",
        position: "relative",
      }}
    >
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
        <label style={{ fontWeight: "500", fontSize: "small" }}>
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
        <label style={{ fontWeight: "500", fontSize: "small" }}>
          Subcategory
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
            <label style={{ display: "block", fontSize: "small" }}>
              Quantity
            </label>
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
            {quantityError && (
              <p style={{ color: "red", fontSize: "small" }}>{quantityError}</p>
            )}
          </form>
          <form style={{ width: "65%" }}>
            <label style={{ display: "block", fontSize: "small" }}>
              SKU (Optional)
            </label>
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
            <label htmlFor="inStore" style={{ marginLeft: "10px" }}>
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

      {/* Have variant */}
      <div className="flex justify-between">
        <div className="font-bold">Have Variant?</div>
        <div>
          <Switch />
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
          <p
            style={{ fontSize: "13px", marginLeft: "10px", fontWeight: "bold" }}
          >
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
      {isOverlayVisible && (
        <AddVariant onClose={closeOverlay}></AddVariant>
        // <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-x-auto">
        //   <div className="relative bg-white w-8/12 mx-auto my-5 p-6 rounded-lg shadow-lg">
        //     <button
        //       className="absolute top-3 right-3 bg-blue-400 text-white px-4 py-1 rounded-lg"
        //       onClick={closeOverlay}
        //     >
        //       Close
        //     </button>
        //     <h2 className="text-2xl font-bold mb-4 text-center">Add Variant</h2>

        //     {/* Select Sections */}
        //     <div className="flex flex-col gap-4">
        //       <div className="flex items-center gap-4 justify-center py-4">
        //         <div className="w-1/4">
        //           <p>Color</p>
        //         </div>
        //         <div className="w-3/4">
        //           <Select
        //             options={optionsColor}
        //             value={selectColor}
        //             onChange={setColor}
        //             isMulti
        //           />
        //         </div>
        //       </div>

        //       <div className="flex items-center gap-4 justify-center py-4">
        //         <div className="w-1/4">
        //           <p>Ram</p>
        //         </div>
        //         <div className="w-3/4">
        //           <Select
        //             options={optionsRam}
        //             value={selectRam}
        //             onChange={setRam}
        //             isMulti
        //           />
        //         </div>
        //       </div>

        //       <div className="flex items-center gap-4 justify-center py-4">
        //         <div className="w-1/4">
        //           <p>Storage</p>
        //         </div>
        //         <div className="w-3/4">
        //           <Select
        //             options={optionsStorage}
        //             value={selectStorage}
        //             onChange={setStorage}
        //             isMulti
        //           />
        //         </div>
        //       </div>

        //       {/* Image Upload Section */}
        //       <div>
        //         <div>
        //           <p>Variant Images</p>
        //           <div>
        //             {/*  */}
        //             <div className="flex gap-4 mt-5">
        //               <input type="text" placeholder="Color" className="h-8 border-2 border-gray-200 rounded-lg px-3"></input>
        //               <div className="w-full h-12 bg-gray-300">
        //                 <UploadImage />
        //               </div>
        //             </div>
        //             {/*  */}
        //             <div className="flex gap-4 mt-5">
        //               <input type="text" placeholder="Color" className="h-8 border-2 border-gray-200 rounded-lg px-3"></input>
        //               <div className="w-full h-12 bg-gray-300"></div>
        //             </div>
        //             {/*  */}
        //             <div className="flex gap-4 mt-5">
        //               <input type="text" placeholder="Color" className="h-8 border-2 border-gray-200 rounded-lg px-3"></input>
        //               <div className="w-full h-12 bg-gray-300"></div>
        //             </div>
        //           </div>
        //         </div>
        //         {/* product variant */}
        //         <div className="flex justify-between my-10">
        //           <div>Product Variant</div>
        //           <div>
        //             <button className="bg-blue-500 text-white py-2 px-3 rounded-lg">
        //               Apply for all
        //             </button>
        //           </div>
        //         </div>
        //         {/* product */}
        //         <div className="flex justify-between">
        //           {price.map((item) => (
        //             <div className="flex gap-3 items-center">
        //               <div>{item.label}</div>
        //               <input
        //                 type="number"
        //                 className="px-3 py-2 rounded-lg border-2 border-gray-200 w-7/12"
        //               ></input>
        //             </div>
        //           ))}
        //         </div>

        //         {/* table */}
        //         <table className="w-full border-collapse border border-gray-300 mt-8">
        //           <thead>
        //             <tr>
        //               {headers.map((header, index) => (
        //                 <th key={index} className="border border-gray-300 p-2">
        //                   {header}
        //                 </th>
        //               ))}
        //             </tr>
        //           </thead>
        //           <tbody>
        //             {data.map((row, index) => (
        //               <tr key={index}>
        //                 <td className="border border-gray-300 p-2">{row.color}</td>
        //                 <td className="border border-gray-300 p-2">{row.ram}</td>
        //                 <td className="border border-gray-300 p-2">{row.storage}</td>
        //                 <td className="border border-gray-300 p-2">{row.sku}</td>
        //                 <td className="border border-gray-300 p-2">{row.quantity}</td>
        //                 <td className="border border-gray-300 p-2">{row.price}</td>
        //                 <td className="border border-gray-300 p-2">{row.salePrice}</td>
        //                 <td className="border border-gray-300 p-2">{row.msrpPrice}</td>
        //               </tr>
        //             ))}
        //           </tbody>
        //         </table>
        //       </div>
        //     </div>
        //   </div>
        // </div>
      )}
    </div>
  );
}

export default Category;
