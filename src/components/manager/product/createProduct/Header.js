import React from 'react'
import Button from '@atlaskit/button'
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FiArrowLeft } from "react-icons/fi";
function Header() {
  return (
    <>
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
    </>
  )
}

export default Header;
