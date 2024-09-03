import React, { useState } from 'react';
import { ConfigProvider, Menu } from 'antd';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InsertChartOutlinedRoundedIcon from '@mui/icons-material/InsertChartOutlinedRounded';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
const icons = [ HomeOutlinedIcon, StorefrontOutlinedIcon, InsertChartOutlinedRoundedIcon, LocalOfferOutlinedIcon, TextsmsOutlinedIcon, SettingsOutlinedIcon ];
const labels = [
  { name: "Page manager", childs: [ "Child 1", "Child 2" ] },
  { name: "My shop", childs: [ "Products", "Order", "Customer" ] },
  { name: "Business analytics", childs: [ "Child 1", "Child 2" ] },
  { name: "Promotion", childs: [] },
  { name: "Message", childs: [] },
  { name: "Setting", childs: [ "Child 1", "Child 2" ] }
];

function SideBar ( { onSelect } )
{
  // Trạng thái lưu các submenu đang mở
  const [ openKeys, setOpenKeys ] = useState( [ 'My shop' ] );
  const [ selectedKeys, setSelectedKeys ] = useState( [ 'My shop-Products' ] );

  const menuSideBar = icons.map( ( icon, index ) =>
  {
    const menuItem = {
      key: labels[ index ].name,
      icon: React.createElement( icon ),
      label: labels[ index ].name

    };

    if ( labels[ index ].childs.length > 0 )
    {
      menuItem.children = labels[ index ].childs.map( ( childName ) => ( {
        key: `${ labels[ index ].name }-${ childName }`,
        label: (
          <div style={ { position: 'absolute', left: 15, top: 0 } } >
            <div style={ { display: "flex", left: -20 } }>
              { childName }
            </div>
          </div>
        ),
        style: {
          marginLeft: "15%",
          width: '85%'
        }
      } ) );
    }

    return menuItem;
  } );

  const onOpenChange = ( keys ) =>
  {
    const latestOpenKey = keys.find( key => !openKeys.includes( key ) );

    if ( latestOpenKey )
    {
      const latestOpenKeyLevel = getLevel( latestOpenKey );
      const filteredKeys = keys.filter( key => getLevel( key ) < latestOpenKeyLevel );

      setOpenKeys( filteredKeys.concat( latestOpenKey ) );
    } else
    {
      setOpenKeys( keys );
    }
  };

  const getLevel = ( key ) =>
  {
    const item = labels.find( item => item.name === key );
    return item ? 1 : 0;
  };

  return (
    <ConfigProvider
      theme={ {
        components: {
          Menu: {
            colorBgMenuItem: '#F9F9F9',
            colorText: '#2B2B2B',
            itemBg: '#F9F9F9',
            itemActiveBg: 'white',
            itemSelectedBg: 'white',
            subMenuItemBg: '#F9F9F9',

          },
        },
      } }
    >

      <div style={ { display: "flex", flexDirection: 'column', height: '100%', width: '100%' } }>
        {/* avata và tên user */ }
        <div style={ { display: "flex", alignItems: 'center', height: 60, borderBottom: '1px solid #ccc', marginLeft: 20 } }>
          <div style={ { width: 40, height: 40, borderRadius: '50%', backgroundColor: 'gray' } } />
          <div style={ { marginLeft: 10 } }>User Name</div>
        </div>
        <Paper component="form" sx={ { m: '10px 20px', p: '0px 4px', display: 'flex', alignItems: 'center', width: '85%', bgcolor: '#F9F9F9' } }>
          <IconButton type="button" sx={ { p: '5px' } } aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase sx={ { ml: 1, flex: 1 } } placeholder="Search" />
        </Paper>
        <Menu
          mode="inline"
          theme="light"
          openKeys={ openKeys }
          selectedKeys={ selectedKeys }
          onOpenChange={ onOpenChange }
          style={ { display: "flex", flexDirection: 'column', height: '100%', width: '100%' } }
          items={ menuSideBar }
          onClick={ ( { key } ) =>
          {
            onSelect( key );
            setSelectedKeys( [ key ] );
          } }
        />
      </div>
    </ConfigProvider>
  );
}

export default SideBar;
