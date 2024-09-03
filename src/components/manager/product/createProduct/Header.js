import React from 'react';
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import { IconButton, Button } from '@mui/material';

function Header ( { closeAddingProduct } )
{

  return (
    <>
      <div style={ { display: "flex", justifyContent: "end" } }>
        <IconButton><IoNotificationsOutline size='25px' color='black' /></IconButton>
        <IconButton><AiOutlineQuestionCircle size='25px' color='black' /></IconButton>
        <Button color='inherit'>View Shop</Button>
      </div>
      <div style={ { flexDirection: "row", display: "flex", height: "50px" } }>
        <div>
          <Button
            style={ { height: "50px", width: "50px", borderRadius: "5px", border: "1px solid #d9d9d9", marginRight: "15px", alignItem: "center" } }
            onClick={ closeAddingProduct() }
          >
            <FiArrowLeft color='gray' size='20' />
          </Button>
        </div>
        <div style={ { flexDirection: "column", display: "flex", height: "55px", justifyContent: "space-between" } }>
          <div style={ { fontSize: "14px", color: "gray" } }>Back to product list</div>
          <div style={ { fontSize: "23px", fontWeight: "bold" } }>Add New Product</div>
        </div>
      </div>
    </>
  );
}

export default Header;
