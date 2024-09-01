import { useState, useRef } from "react";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
function ProductImage() {
  
  const inputRef = useRef(null);
  
  const clickToUpload = () => {
    inputRef.current.click();
  }
  return (
    <>
      <div style={{backgroundColor: "", height: "10rem", width: "70%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingLeft: "15px", paddingRight: "15px", border: "1px solid #d9d9d9", borderRadius: "5px"}}>
        <div onClick={clickToUpload} style={{backgroundColor: "Lightblue", width: "20%", border: "3px solid blue", borderStyle: "dashed", borderRadius: "5px"}}>
          <MdOutlineDriveFolderUpload />
          <p>Click to upload or drag and drop</p>
          <input type="file" ref={inputRef} style={{display: "none"}}></input>
        </div>
        <div style={{backgroundColor: "Lightgreen", width: "20%"}}>
          <MdOutlineDriveFolderUpload />
          <p>Click to upload or drag and drop</p>
        </div>
        <div style={{backgroundColor: "Lightyellow", width: "20%"}}>
          <MdOutlineDriveFolderUpload />
          <p>Click to upload or drag and drop</p>
        </div>
      </div>
    </>
  )
}
export default ProductImage