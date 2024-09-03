import React, { useState, useRef } from 'react'
import ProductImage from './ProductImage';
import Header from './Header';
import Shipping from './Shipping';
import Category from './Category';
import Pricing from './Pricing';
import Button from './Button';
import Description from './Description';


function CreateProduct ( { closeAddingProduct } )
{
  const width = useRef( window.innerWidth ).current
  return (
    <div style={ { display: "flex", flexDirection: "column", width: width, paddingLeft: "3rem", paddingRight: "3rem", backgroundColor: "white", height: '100%', overflow: 'auto' } }>
      <div style={ { marginTop: 20 } }>
        <Header closeAddingProduct={ () => closeAddingProduct } />
      </div>
      <div style={ { display: "flex", flexDirection: "row", backgroundColor: "white", gap: 20 } }>
        <div style={ { width: "48%" } }>
          <div>
            <h3>Description</h3>
            <div style={ { border: "1px solid #d9d9d9", padding: "10px", borderRadius: "5px" } }>
              <Description />
            </div>
          </div>

          <Category />

        </div>
        <div style={ { width: "48%" } }>
          <div>
            <h3>Product Images</h3>
            <ProductImage />
          </div>

          <div >
            <h3>Shipping and Delivery</h3>
            <div style={ { border: "1px solid #d9d9d9" } }>
              <Shipping />
            </div>
          </div>
          <div>
            <h3>Pricing</h3>
            <div style={ { border: "1px solid #d9d9d9", paddingTop: "30px" } }>
              <Pricing />
            </div>
          </div>
          <div style={ { marginTop: '20px' } }>
            <Button />
          </div>
        </div>

      </div>
    </div>
  );
}

export default CreateProduct;
