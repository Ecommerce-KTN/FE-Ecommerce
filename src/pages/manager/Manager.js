
import React, { useRef } from 'react'
import SideBar from '../../components/manager/SideBar'
import CreateProduct from '../../components/manager/product/createProduct/CreateProduct'


function Manager() {
  const width = useRef(window.innerWidth).current
  const height = useRef(window.innerHeight).current
  return (

      <div style={{display: "flex"}}>
        <div style={{ width: width* 0.19, height:height}}>
          <SideBar  />
        </div>
        <div style={{ width: width* 0.81,height:height}}>
          <CreateProduct />
        </div>
      </div>
  )
}

export default Manager