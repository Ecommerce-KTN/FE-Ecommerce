import React, { useRef } from 'react';
import Category from './Category'; 
// import { Category } from '@mui/icons-material';

function CreateProduct() {
  const height = useRef(window.innerHeight).current;

  return (
    <div style={{ flexDirection: "column", height: height }}>
      <div style={{ height: "15%", backgroundColor: "red" }}>
        <div>TopTitle</div>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ width: "50%", height: height * 0.85, backgroundColor: "white" }}>
          <Category />
        </div>
        <div style={{ width: "50%", height: height * 0.85, backgroundColor: "red" }}>
          <div>AddImage</div>
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;
