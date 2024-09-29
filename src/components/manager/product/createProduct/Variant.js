import { Button } from "@mui/material";
import AddVariant from "./AddVariant";
import { useState } from "react";

const Variant = () => {
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [openVariant, setOpenVariant] = useState(false);

  const handleClickVariant = () => {
    // Mở tab mới

    // Hiển thị overlay
    setOverlayVisible(true);
    setOpenVariant(!openVariant);
  };

  const closeOverlay = () => {
    setOverlayVisible(false); // Đóng overlay
  };
  return (
    <div>
      {/* Variant Section */}
      <div style={{ width: "100%" }}>
        <label className="mb-2 mt-5 text-lg font-bold">Variant</label>
        <div
          style={{
            border: "1px solid #d9d9d9",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "15px",
            alignItems: "center",
          }}
        >
          <p
            style={{ fontSize: "13px", marginLeft: "10px", fontWeight: "bold" }}
          >
            Product Variant
          </p>
          <Button
            style={{
              borderRadius: "4px",
              border: "none",
              backgroundColor: "#fff",
              color: "blue",
              textAlign: "right",
              textTransform: "none",
            }}
            onClick={handleClickVariant}
          >
            + Add Variant
          </Button>
        </div>
      </div>
      {isOverlayVisible && <AddVariant onClose={closeOverlay}></AddVariant>}
    </div>
  );
};

export default Variant;
