import React, { useRef } from 'react'
import {Menu,MenuProps} from "antd"
import InsertChartIcon from '@mui/icons-material/InsertChart';
const icons=[InsertChartIcon,InsertChartIcon,InsertChartIcon,InsertChartIcon,InsertChartIcon,InsertChartIcon]
const labels=[{name:"Page manager", childs:["Child 1", "Child 2"]},
{name:"My shop", childs:["Products", "Order", "Customer"]},
{name:"Business analytics", childs:["Child 1", "Child 2"]},
{name:"Promotion", childs:[]},
{name:"Message", childs:[]},
{name:"Setting", childs:["Child 1", "Child 2"]}]

const menuSideBar: MenuProps['items'] = icons.map((icon, index) => {
  // Tạo đối tượng menuItem cơ bản
  const menuItem = {
    key: index,
    icon: React.createElement(icon),
    label: labels[index].name,
  };
  if (labels[index].childs.length > 0) {
    menuItem.children = labels[index].childs.map((childName, childIndex) => {
      return {
        key: `${index}-${childIndex}`, 
        label: childName,
      };
    });
  }

  return menuItem;
});
function SideBar() {
    const height = useRef(window.innerHeight).current
  return (
    <div style={{display: "flex",backgroundColor: "green", height:height}}>
        <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
              items={menuSideBar}
            />
    </div>
  )
}

export default SideBar