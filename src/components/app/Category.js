import React from 'react';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import ToysOutlinedIcon from '@mui/icons-material/ToysOutlined';
import SportsBaseballOutlinedIcon from '@mui/icons-material/SportsBaseballOutlined';
import WatchOutlinedIcon from '@mui/icons-material/WatchOutlined';
import VideogameAssetOutlinedIcon from '@mui/icons-material/VideogameAssetOutlined';
import DrawOutlinedIcon from '@mui/icons-material/DrawOutlined';
import FlutterDashOutlinedIcon from '@mui/icons-material/FlutterDashOutlined';
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';


const categories = [
  { name: 'Electronics', icon: <PhoneAndroidOutlinedIcon/> },
  { name: 'Books', icon: <DnsOutlinedIcon/> },
  { name: 'Jewelry', icon: <DiamondOutlinedIcon/> },
  { name: 'Toys', icon: <ToysOutlinedIcon/> },
  { name: 'Sports', icon: <SportsBaseballOutlinedIcon/> },
  { name: 'Watches', icon: <WatchOutlinedIcon/> },  
  { name: 'Games', icon: <VideogameAssetOutlinedIcon/> },
  { name: 'Fine Arts', icon: <DrawOutlinedIcon/> },
  { name: 'Software', icon: <FlutterDashOutlinedIcon/> },
  { name: 'Furniture', icon: <ChairOutlinedIcon/> },
];

function Category(){
  return (
    <div style={{ margin: "40px 0", padding: "0 0px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h2 className="text-[25px] font-bold">Our Top Categories</h2>
        <button style={{ textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>See All</button>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
        {categories.map((category, index) => (
          <div className="flex flex-col justify-center items-center">
            <div
              className="bg-slate-200 rounded-full flex justify-center items-center text-xl cursor-pointer"
              key={index}
              style={{ textAlign: "center", marginBottom: "10px", width: "80px", height: "80px" }}
            >
              {category.icon}
            
            </div>
            <div key={index} >{category.name}</div>
          </div>
        ))}
      </div>
    </div>
  );  
};

export default Category;
