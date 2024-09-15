import { react, useState } from "react";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';

const Header = () => {
  const [ nav, setNav ] = useState( false );

  const handleScroll = () => {
    if ( window.scrollY >= 50 )
    {
      setNav( true );
    } else
    {
      setNav( false );
    }
  }

  window.addEventListener( "scroll", handleScroll );
  return (
    <div className={ `${ nav ? 'navbar active' : 'navbar' } border-b border-gray-300 top-0 z-50 bg-white` }>
      <header className="mx-auto w-10/12 ">
        {/* Logo Section */ }
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center">
            <div className="text-2xl font-extrabold text-gray-800">LOGOHERE</div>
          </div>
          {/* Search Section */ }
          <div className="flex items-center space-x-0 flex-grow justify-center">
            <input
              type="text"
              placeholder="Search Products"
              className="w-5/12 px-4 py-2 border border-gray-300 rounded-tl-lg rounded-bl-lg"
            />
            <select className="px-4 py-2.5 ml-50 border border-gray-300 h-200">
              <option value="all">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="books">Books</option>
              <option value="jewelry">Jewelry</option>
              {/* Add more categories as needed */ }
            </select>
            <button className="px-4 py-2 bg-black text-white rounded-tr-lg rounded-br-lg hover:bg-gray-700">
              <SearchOutlinedIcon />
            </button>
          </div>
          {/* User Section */ }
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <PersonOutlineOutlinedIcon sx={ { fontSize: 35 } } />
              <div>
                <div className="cursor-pointer text-gray-700 text-[10px]">Sign In</div>
                <div className="cursor-pointer text-gray-700">Account</div>
              </div>
            </div>
            <ForwardToInboxIcon />
            <FavoriteBorderIcon />
            <div className="flex items-center">
              <ShoppingCartOutlinedIcon sx={ { fontSize: 30 } } />
              <div>
                <div className="cursor-pointer text-gray-700 text-[10px]">Total</div>
                <div className="cursor-pointer text-gray-700">$0.00</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center justify-center ">
            <MenuOpenOutlinedIcon sx={ { marginRight: 1 } } />
            CATEGORIES
          </div>
          <div className="flex justify-end">
            <ul className="nav flex">
              <li><a href="#">Home</a></li>
              <li><a href="#">Today's Detail</a></li>
              <li><a href="#">Customer Services</a></li>
              <li><a href="#">Trending Products</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Special Offers</a></li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
