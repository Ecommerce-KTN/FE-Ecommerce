import React from "react";

function Category() {
  return (
    <div
      style={{
        width: "28.5rem",
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* Category Section */}
      <h3>Category</h3>
      <div style={{ width: "95%", marginBottom: "20px", border: "1px solid #d9d9d9", padding: "10px"}}>
        <label style={{ fontWeight: "500", fontSize: "small" }}>Product Category</label>
        <select
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            marginTop: "10px"
          }}
        >
          <option>Health & Medicine</option>
        </select>
        <label style={{ fontWeight: "500", fontSize: "small" }}>Product Category</label>
        <select
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            marginTop: "10px"
          }}
        >
          <option>Beauty</option>
        </select>
      </div>

      {/* Inventory Section */}
      <div style={{ width: "100%", marginBottom: "20px" }}>
        <label style={{ fontWeight: "bold" }}>Inventory</label>
        <div style={{ display: "flex", gap: "10px", border: "1px solid #d9d9d9", padding: "10px", marginTop: "15px"}}>
          <from>
            <label style={{ display: "block", fontSize: "small"}}>Quantity</label>
            <input
              type="number"
              placeholder="Quantity"
              style={{
                flex: "1",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                marginTop: "10px"
                
              }}
            />
          </from>
          <from>
            <label style={{ display: "block", fontSize: "small"}}>SKU(Optional)</label>
            <input
              type="text"
              placeholder="SKU(Optional)"
              style={{
                width: "120%",
                flex: "1",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                marginTop: "10px"
                
              }}
            />
          </from>
        </div>
      </div>

      {/* Selling Type Section */}
      <div style={{ width: "100%", marginBottom: "20px" }}>
        <label style={{ fontWeight: "bold" }}>Selling Type</label>
        <div
          style={{
            padding: "10px",
            borderRadius: "4px",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            marginTop: "15px"
          }}
        >
          <div style={{ marginBottom: "10px" }}>
            <input
              type="radio"
              id="inStore"
              name="sellingType"
              defaultChecked
            />
            <label htmlFor="inStore" style={{ marginLeft: "10px" }}>
              In-store selling only
            </label>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <input type="radio" id="online" name="sellingType" />
            <label htmlFor="online" style={{ marginLeft: "10px" }}>
              Online selling only
            </label>
          </div>
          <div>
            <input type="radio" id="both" name="sellingType" />
            <label htmlFor="both" style={{ marginLeft: "10px" }}>
              Available both in-store and online
            </label>
          </div>
        </div>
      </div>

      {/* Variant Section */}
      <div style={{ width: "100%"}}>
        <label style={{ fontWeight: "bold" }}>Variant</label>
        <form style={{border: "1px solid #d9d9d9", display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "15px"}}>
          <p style={{fontSize: "13px", marginLeft: "10px"}}>Product Variant</p>
          <button
            style={{
              width: "50%",
              padding: "10px",
              borderRadius: "4px",
              border: "none",
              backgroundColor: "#fff",
              color: "blue",
              textAlign: "right"
            }}
          >
            + Add Variant
          </button>
        </form>
      </div>
    </div>
  );
}

export default Category;
