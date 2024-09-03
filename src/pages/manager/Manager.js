
import React, { useRef, useState } from 'react'
import SideBar from '../../components/manager/SideBar'
import ProductList from '../../components/manager/product/ProductList';



function Manager ()
{
  const [ selectedMenuItem, setSelectedMenuItem ] = useState( "My shop-Products" );
  const width = useRef( window.innerWidth ).current
  const height = useRef( window.innerHeight ).current
  const renderContent = () =>
  {
    switch ( selectedMenuItem )
    {
      case "My shop-Products":
        return <ProductList />;
      case "My shop-Order":
        return <div>Order Content</div>;
      case "My shop-Customer":
        return <div>Customer Content</div>;
      case "Page manager-Child 1":
        return <div>Page manager - Child 1 Content</div>;
      // Thêm các case khác tùy vào nội dung bạn muốn hiển thị
      default:
        return <div>Default Content</div>;
    }
  };
  return (

    <div style={ { display: "flex", flexDirection: "row", backgroundColor: '#F9F9F9', width: width, height: height } }>
      <div style={ { display: "flex", width: width * 0.19, height: '100%', backgroundColor: '#F9F9F9' } }>
        <SideBar onSelect={ setSelectedMenuItem } />
      </div>
      <div style={ { display: "flex", width: width * 0.81, height: '100%', backgroundColor: 'white', overflowY: 'auto' } }>
        { renderContent() }
      </div>
    </div>
  )
}

export default Manager