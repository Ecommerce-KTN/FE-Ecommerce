import React, { useRef } from 'react'
import ProductImage from './ProductImage';
import Header from './Header';
import Shipping from './Shipping';
import Category from './Category';
import Pricing from './Pricing';
import Button from './Button';
import Description from './Description';
function CreateProduct() {

  const height = useRef(window.innerHeight).current
  return (
    <div style={{flexDirection: "column", height:height, paddingLeft: "4rem", paddingRight: "3rem"}}>
        <div style={{ height: "30%", backgroundColor: "", marginTop: "2.8rem"}}>
            <Header/>
        </div>
        <div style={{display:"flex",flexDirection:"row"}}>
            
            <div style={{width:"50%",height:height*0.85, backgroundColor:""}}>
                <div>
                    <h3>Description</h3>
                    <div>
                        <Description/>
                    </div>
                </div>
                <div>
                    <Category />
                </div>
            </div>
            <div style={{width:"50%",height:height*0.85, backgroundColor:""}}>
                <div>
                    <h3>Product Images</h3>
                    <ProductImage/>
                </div>

                <div >
                    <h3>Shipping and Delivery</h3>
                    <div style={{border: "1px solid #d9d9d9", height: "15rem", width: "27rem"}}>
                        <Shipping/>
                        
                    </div>
                </div>
                <div>
                    <h3>Pricing</h3>
                    <div style={{border: "1px solid #d9d9d9", height: "7rem", width: "27rem", paddingTop: "30px"}}>
                        <Pricing/>
                    </div>
                </div>
                <div>
                    <Button/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateProduct