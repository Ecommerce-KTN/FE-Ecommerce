// specDisplayNames.js
export const specDisplayNames = {
  CPUTYPE: "CPU Type",
  TECHNOLOGYMAINDISPLAY: "Display Technology",
  SIZEMAINDISPLAY: "Display Size",
  RESOLUTIONMAINDISPLAY: "Display Resolution",
  FRONTCAMERARESOLUTION: "Front Camera Resolution",
  REARCAMERARESOLUTION: "Rear Camera Resolution",
  BATERYCAPACITY: "Battery Capacity",
  OS: "Operating System",
  NFC: "NFC",
  DIMENSION: "Dimensions",
  WIFI: "WiFi",
  SIMSIZE: "SIM Size",
  GEARSUPPORT: "Gear Support",
  // Thêm các thông số kỹ thuật khác nếu cần
};

// Hàm xác định màu dựa trên tên màu
export const getColorStyle = (colorName) => {
  const colorMap = {
    Red: "bg-red-500",
    Blue: "bg-blue-500",
    Green: "bg-green-500",
    Yellow: "bg-yellow-500",
    Black: "bg-black",
    White: "bg-white border border-gray-300", // Nếu là màu trắng, cần thêm viền để dễ thấy
    // Thêm các màu khác nếu cần
  };

  // Kiểm tra nếu tên màu tồn tại trong map, nếu không trả về một màu mặc định
  return colorMap[colorName] || "bg-gray-500"; // Màu mặc định là xám
};

