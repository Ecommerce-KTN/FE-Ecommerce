import React, { useRef } from 'react'
function CreateProduct() {

  const height = useRef(window.innerHeight).current
  return (
    <div style={{flexDirection: "column", height:height}}>
        <div style={{ height: "15%", backgroundColor: "red"}}>
            <div>TopTitle</div>
        </div>
        <div style={{display:"flex",flexDirection:"row"}}>
            <div style={{width:"50%",height:height*0.85, backgroundColor:"blue"}}>
                <div>text</div>           // Kiệt
            </div>
            <div style={{width:"50%",height:height*0.85, backgroundColor:"red"}}>
                <div>AddImage</div>  //nguyên
            </div>
        </div>
    </div>
  )
}

export default CreateProduct