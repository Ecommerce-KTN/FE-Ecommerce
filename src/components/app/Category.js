import React, { useEffect, useState } from 'react';
import * as MaterialIcons from '@mui/icons-material'; // Import tất cả các icon
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'; // Icon mặc định

function Category() {
  const [categories, setCategories] = useState([]); // Lưu trữ danh sách danh mục
  const [loading, setLoading] = useState(true); // Trạng thái tải
  const [error, setError] = useState(null); // Lưu trữ lỗi nếu có

  // Hàm để lấy component icon dựa trên tên icon
  const getIconComponent = (iconName) => {
    // Kiểm tra nếu iconName không phải là chuỗi, trả về icon mặc định
    if (typeof iconName !== 'string') {
      return <HelpOutlineIcon />;
    }

    // Loại bỏ hậu tố 'Icon' nếu có
    const formattedIconName = iconName.endsWith('Icon') ? iconName.slice(0, -4) : iconName;

    // Lấy component icon từ MaterialIcons
    const IconComponent = MaterialIcons[formattedIconName];

    // Trả về component icon nếu tồn tại, ngược lại trả về icon mặc định
    return IconComponent ? <IconComponent style={{ fontSize: 35 }}/> : <HelpOutlineIcon style={{ fontSize: 35 }}/>;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://be-ecommerce-gaa8.onrender.com/api/v1/categories'); // Endpoint để lấy tất cả danh mục

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseJson = await response.json();
        console.log('Fetched categories:', responseJson.data);

        if (Array.isArray(responseJson.data)) {
          setCategories(responseJson.data);
        } else if (responseJson.data) {
          setCategories([responseJson.data]); // Đóng gói đối tượng đơn lẻ vào mảng
        } else {
          setCategories([]);
        }

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!Array.isArray(categories) || categories.length === 0) return <div>No categories available</div>;

  return (
    <div style={{ margin: "40px 0", padding: "0 0px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h2 className="text-[25px] font-bold">Our Top Categories</h2>
        <button style={{ textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>See All</button>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
        {categories.map(cate => (
          <div key={cate.id} className="flex flex-col justify-center items-center" style={{ margin: "10px" }}>
            <div
              className="bg-slate-200 rounded-full flex justify-center items-center text-xl cursor-pointer"
              style={{ textAlign: "center", marginBottom: "10px", width: "80px", height: "80px" }}
            >
              {getIconComponent(cate.icon)}
            </div>
            <div>{cate.name}</div>
            {console.log("cate name: " + cate.name)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
