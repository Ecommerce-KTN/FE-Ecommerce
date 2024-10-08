import React, { useRef, useState } from 'react';
import { ConfigProvider, Menu } from 'antd';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InsertChartOutlinedRoundedIcon from '@mui/icons-material/InsertChartOutlinedRounded';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import avatarUser from './product/createProduct/image/imguser.jpg';
// icon logout
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
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
  const height = useRef( window.innerHeight ).current
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
      style={ { display: "flex", flexDirection: 'column', height: height, width: '100%' } }
    >

      <div style={ { display: "flex", flexDirection: 'column', height: '100%', width: '100%', backgroundColor: '#F9F9F9' } }>
        <div style={ { display: "flex", alignItems: 'center', height: 60, margin: 25 } }>
          <div style={ { width: 40, height: 40, borderRadius: '50%' } }>
            <img src={avatarUser} style={{height:"40px", width:"40px", borderRadius: '50%' }}></img>
          </div>
          <div style={ { marginLeft: 10 } }>Manager</div>
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
        {/* ở cuối cùng là email và icon material logout */ }
        <div style={ { display: "flex", alignItems: 'center', justifyContent: 'space-between', height: 60, marginLeft: 20, marginBottom: 20 } }>
          <div style={ { display: 'flex', flexDirection: 'row', alignItems: 'center' } }>
            <div style={ { width: 40, height: 40, borderRadius: '50%'} } >
            <img src={avatarUser} style={{height:"40px", width:"40px", borderRadius: '50%' }}></img>
            </div>
            <div style={ { marginLeft: 10, flexDirection: 'column' } }>
              <div style={ { fontWeight: 'bold', fontSize: 15 } }>Manager</div>
              <div style={ { fontSize: 13 } }>email@gmail.com</div>
            </div>
          </div>
          <IconButton style={ { marginRight: 10 } }>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>
    </ConfigProvider>
  );
}

export default SideBar;
