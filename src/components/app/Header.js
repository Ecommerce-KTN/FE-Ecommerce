// Import các thư viện và icon cần thiết
import React, { useState } from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import MenuIcon from "@mui/icons-material/Menu"; // Icon hamburger menu
import CloseIcon from "@mui/icons-material/Close"; // Icon đóng menu
import {Link} from "react-router-dom";
// Danh sách header
const header = [
  { name: "Home", value: "home" },
  { name: "Today's Detail", value: "todays-detail" },
  { name: "Customer Services", value: "customer-services" },
  { name: "Trending Product", value: "trending-product" },
  { name: "Blog", value: "blog" },
  { name: "Special Offers", value: "special-offers" },
];

const Header = () => {
  // Trạng thái để quản lý hiển thị menu di động
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Hàm để toggle menu di động
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="fixed border-b border-gray-300 top-0 z-40 bg-white w-full">
      <header className="mx-auto w-10/12">
        {/* Phần Logo và Menu Icon */}
        <div className="flex justify-start items-center py-2">
          <div className="flex items-center">
            {/* Icon hamburger menu chỉ hiển thị trên mobile */}
            <button
              className="mr-4 lg:hidden"
              onClick={toggleMobileMenu}
              aria-label="Toggle Menu"
            >
              <MenuIcon fontSize="large" />
            </button>
            <Link to="/">
              <div className="text-2xl font-extrabold text-gray-800 cursor-pointer">
                LOGOHERE
              </div>
            </Link>
          </div>

          {/* Phần Tìm Kiếm */}
          <div className="flex items-center space-x-0 flex-grow justify-center">
            {/* Ô input tìm kiếm chỉ hiển thị trên màn hình lớn hơn sm */}
            <input
              type="text"
              placeholder="Search Products"
              className="hidden lg:block w-5/12 px-4 py-2 border border-gray-300 rounded-tl-lg rounded-bl-lg"
            />
            {/* Select category chỉ hiển thị trên màn hình lớn hơn sm */}
            <select className="hidden lg:block px-4 py-2.5 ml-2 border border-gray-300 h-10 rounded-r-lg">
              <option value="all">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="books">Books</option>
              <option value="jewelry">Jewelry</option>
              {/* Thêm các danh mục khác nếu cần */}
            </select>
            {/* Nút tìm kiếm: trên desktop hiển thị button */}
            <button className="px-4 py-2 bg-black text-white rounded-tr-lg rounded-br-lg hover:bg-gray-700 lg:block hidden">
              <SearchOutlinedIcon />
            </button>
            {/* Icon tìm kiếm cho mobile */}
            <button className="lg:hidden ml-2" aria-label="Search">
              <SearchOutlinedIcon />
            </button>
          </div>

          {/* Phần User chỉ hiển thị trên màn hình lớn hơn sm */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center">
              <PersonOutlineOutlinedIcon sx={{ fontSize: 35 }} />
              <div>
                <div className="cursor-pointer text-gray-700 text-[10px]">
                  Sign In
                </div>
                <div className="cursor-pointer text-gray-700">Account</div>
              </div>
            </div>
            <ForwardToInboxIcon />
            <FavoriteBorderIcon />
            <div className="flex items-center">
              <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
              <div>
                <div className="cursor-pointer text-gray-700 text-[10px]">
                  Total
                </div>
                <div className="cursor-pointer text-gray-700">$0.00</div>
              </div>
            </div>
          </div>
        </div>

        {/* Phần Categories chỉ hiển thị trên màn hình lớn hơn sm */}
        <div className="hidden lg:flex items-center justify-between py-6">
          <div className="flex items-center justify-center">
            <MenuOpenOutlinedIcon sx={{ marginRight: 1 }} />
            CATEGORIES
          </div>
          <div className="flex justify-end">
            <ul className="nav flex">
              {header.map((item) => (
                <li key={item.value} className="pl-5">
                  <a className="cursor-pointer" href={`#${item.value}`}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex">
          {/* Thanh menu di động */}
          <div className="bg-white w-3/4 max-w-sm h-full p-4 overflow-y-auto">
            {/* Nút đóng menu */}
            <button
              className="mb-4"
              onClick={toggleMobileMenu}
              aria-label="Close Menu"
            >
              <CloseIcon fontSize="large" />
            </button>
            {/* Danh sách menu */}
            <ul className="flex flex-col space-y-4">
              {header.map((item) => (
                <li key={item.value}>
                  <a className="text-gray-700 text-lg" href={`#${item.value}`}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            {/* Các hành động người dùng */}
            <div className="mt-6 border-t border-gray-300 pt-4">
              <div className="flex items-center space-x-4 mb-4">
                <PersonOutlineOutlinedIcon sx={{ fontSize: 30 }} />
                <div>
                  <div className="cursor-pointer text-gray-700 text-sm">
                    Sign In
                  </div>
                  <div className="cursor-pointer text-gray-700 text-sm">
                    Account
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <ForwardToInboxIcon />
                <span className="text-gray-700">Inbox</span>
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <FavoriteBorderIcon />
                <span className="text-gray-700">Favorites</span>
              </div>
              <div className="flex items-center space-x-4">
                <ShoppingCartOutlinedIcon sx={{ fontSize: 25 }} />
                <div>
                  <div className="cursor-pointer text-gray-700 text-sm">
                    Total
                  </div>
                  <div className="cursor-pointer text-gray-700 text-sm">
                    $0.00
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Click ngoài menu để đóng */}
          <div className="w-1/4 h-full" onClick={toggleMobileMenu}></div>
        </div>
      )}
    </div>
  );
};

export default Header;
