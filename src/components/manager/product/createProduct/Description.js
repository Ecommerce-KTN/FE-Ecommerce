import React, { useState, useRef } from "react";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import Input from "@mui/joy/Input";
import Multiline from "./Multiline";
import { VscCloudUpload } from "react-icons/vsc";

function Description({ onDescriptionChange, onProductNameChange }) {
  const inputRef = useRef(null);
  const [productName, setProductName] = useState("");
  const [productError, setProductError] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [fileError, setFileError] = useState("");

  const validateProductName = (value) => {
    let error = "";
    const trimmedValue = value.trim();
    if (trimmedValue.length < 5) {
      error = "Product name must be at least 5 characters.";
    } else if (trimmedValue.length > 120) {
      error = "Product name cannot exceed 120 characters.";
    } else if (!trimmedValue) {
      error = "Product name cannot be empty.";
    }
    return error;
  };

  const validateDescription = (value) => {
    let error = "";
    const trimmedValue = value.trim();
    if (trimmedValue.length < 200) {
      error = "Description must be at least 200 characters.";
    } else if (trimmedValue.length > 1000) {
      error = "Description cannot exceed 1000 characters.";
    }
    return error;
  };

  const handleProductNameChange = (e) => {
    const value = e.target.value;
    const error = validateProductName(value);
    setProductError(error);
    setProductName(value);
    onProductNameChange(value);
  };

  const handleDescriptionChange = (value) => {
    const error = validateDescription(value);
    setDescriptionError(error);
    setDescription(value);
    onDescriptionChange(value);
  };

  const handleBlur = (e) => {
    if (e.target.id === "product-name" && productName.length > 120) {
      setProductName(productName.slice(0, 117) + "...");
    }
  };

  const clickToUpload = () => {
    inputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type !== "text/plain") {
        setFileError("Please upload a .txt file.");
        setDescription("");
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        const fileContent = event.target.result;
        const charCount = fileContent.length;
        if (charCount > 1000) {
          setFileError("The file contains more than 1000 characters.");
          setDescription(""); 
        } else {
          setFileError("");
          setDescription(fileContent);
          onDescriptionChange(fileContent);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <>
      <FormControl error={Boolean(productError)}>
        <FormLabel htmlFor="product-name">Product Name *</FormLabel>
        <Input
          id="product-name"
          value={productName}
          onChange={handleProductNameChange}
          onBlur={handleBlur}
          placeholder="Enter product name"
          maxLength={120}
        />
        {productError && <FormHelperText>{productError}</FormHelperText>}
      </FormControl>
      <FormControl style={{ marginTop: "15px" }} error={Boolean(descriptionError || fileError)}>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <FormLabel>Business Description *</FormLabel>
          <div onClick={clickToUpload}>
            <p style={{ cursor: "pointer", margin: "0px", color: "#1a1aff", fontSize : "15px", fontStyle : 'bold' }}><VscCloudUpload /> Upload .txt file</p>
            <input
              type="file"
              ref={inputRef}
              style={{ display: "none" }}
              accept=".txt"
              onChange={handleFileChange}
            />
          </div>
        </div>
        <Multiline value={description} onChange={handleDescriptionChange} />
        {(descriptionError || fileError) && <FormHelperText>{descriptionError || fileError}</FormHelperText>}
      </FormControl>
    </>
  );
}

export default Description;
