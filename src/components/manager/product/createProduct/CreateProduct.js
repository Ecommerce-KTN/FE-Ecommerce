import React, { useRef, useState } from 'react'

import { MdOutlineDriveFolderUpload } from "react-icons/md";
import Button from '@atlaskit/button'
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FiArrowLeft } from "react-icons/fi";

function CreateProduct() {
    const inputRef = useRef(null);
  
  const clickToUpload = () => {
    inputRef.current.click();
  }
  const height = useRef(window.innerHeight).current;
  return (
    <div style={{flexDirection: "column", height:height, paddingLeft: "4rem", paddingRight: "3rem"}}>
      <div style={{ height: "30%", backgroundColor: "", marginTop: "2.8rem"}}>
                  <div style={{display: "flex", justifyContent: "end"}}>
            <IoNotificationsOutline size='2rem'/>
            <AiOutlineQuestionCircle size='2rem'/>
            <Button>View Shop</Button>
        </div>
        <div style={{flexDirection:"row", display: "flex"}}>
            <div>
                <Button style={{padding: "20px" ,height: "60px", borderRadius: "5px", border: "1px solid #d9d9d9", marginRight: "15px", alignItem: "center"}}>
                    <FiArrowLeft />
                </Button>
            </div>
            <div>
                <p style={{marginTop: "0px", marginBottom: "0px"}}>Back to product list</p>
                <h2>Add New Product</h2>
            </div>

        </div>
      </div>
      <div style={{display:"flex",flexDirection:"row"}}>
        <div style={{width:"50%",height:height*0.85}}>
          <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', boxSizing: 'border-box' }}>
      {/* Category Section */}
      <div style={{ width: '100%', marginBottom: '20px' }}>
        <label style={{ fontWeight: 'bold' }}>Product Category</label>
        <select style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc' }}>
          <option>Health & Medicine</option>
        </select>
        <select style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}>
          <option>Beauty</option>
        </select>
      </div>

      {/* Inventory Section */}
      <div style={{ width: '100%', marginBottom: '20px' }}>
        <label style={{ fontWeight: 'bold' }}>Inventory</label>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input type="number" placeholder="Quantity" style={{ flex: '1', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          <input type="text" placeholder="SKU (Optional)" style={{ flex: '1', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
        </div>
      </div>

      {/* Selling Type Section */}
      <div style={{ width: '100%', marginBottom: '20px' }}>
        <label style={{ fontWeight: 'bold' }}>Selling Type</label>
        <div style={{ padding: '10px', borderRadius: '4px', backgroundColor: '#fff', border: '1px solid #ccc' }}>
          <div style={{ marginBottom: '10px' }}>
            <input type="checkbox" id="inStore" name="sellingType" defaultChecked />
            <label htmlFor="inStore" style={{ marginLeft: '10px' }}>In-store selling only</label>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <input type="checkbox" id="online" name="sellingType" />
            <label htmlFor="online" style={{ marginLeft: '10px' }}>Online selling only</label>
          </div>
          <div>
            <input type="checkbox" id="both" name="sellingType" />
            <label htmlFor="both" style={{ marginLeft: '10px' }}>Available both in-store and online</label>
          </div>
        </div>
      </div>

      {/* Variant Section */}
      <div style={{ width: '100%' }}>
        <label style={{ fontWeight: 'bold' }}>Variant</label>
        <button style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', backgroundColor: '#fff' }}>
          + Add Variant
        </button>
      </div>
    </div>
        </div>
        <div style={{width:"50%",height:height*0.85, backgroundColor:""}}>
            <div>
                <h3>Product Images</h3>
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
            </div>
        </div>
      </div>
    </div>

  );
}

export default CreateProduct;
