import { useState, useRef } from "react";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import img1 from "./image/img1.jpg";
import img2 from "./image/img2.jpg";
import img3 from "./image/img3.jpg";
function ProductImage() {
  
  const inputRef = useRef(null);
  
  const clickToUpload = () => {
    inputRef.current.click();
  }
  return (
    <>
      <div style={{backgroundColor: "", height: "10rem", width: "70%", display: "flex", flexDirection: "row", gap: "20px", alignItems: "center", paddingLeft: "15px", paddingRight: "15px", border: "1px solid #d9d9d9", borderRadius: "5px"}}>
        <div onClick={clickToUpload} style={{backgroundColor: "#efeff5", width: "7rem", height: "7rem", border: "2px solid #8080ff", borderStyle: "dashed", borderRadius: "5px"}}>
          <p style={{textAlign: "center", fontSize: "small", marginTop: "2.5rem"}}>Click to upload or drag and drop</p>
          <input type="file" ref={inputRef} style={{display: "none"}}></input>
        </div>
        <div style={{backgroundColor: "", width: "7rem", height: "7rem"}}>
          <img src={img1} style={{width: "100%"}}/>
        </div>
        <div style={{backgroundColor: "", width: "7rem", height: "7rem"}}>
          <img src={img2} style={{width: "100%"}}/>
        </div>
      </div>
    </>
  )
}
export default ProductImage