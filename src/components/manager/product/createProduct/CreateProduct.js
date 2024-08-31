import React, { useRef, useState } from 'react'
import ProductImage from './ProductImage';
import Header from './Header';

function CreateProduct() {

  const height = useRef(window.innerHeight).current
  return (
    <div style={{flexDirection: "column", height:height, paddingLeft: "4rem", paddingRight: "3rem"}}>
        <div style={{ height: "30%", backgroundColor: "", marginTop: "2.8rem"}}>
            <Header/>
        </div>
        <div style={{display:"flex",flexDirection:"row"}}>
            <div style={{width:"50%",height:height*0.85, backgroundColor:""}}>
                <div>text</div>           // Kiệt
            </div>
            <div style={{width:"50%",height:height*0.85, backgroundColor:""}}>
                <div>
                    <h3>Product Images</h3>
                    <ProductImage/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateProduct