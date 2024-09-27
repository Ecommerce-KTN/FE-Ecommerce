import { useState } from "react";

const Inventory = ({ onQuantityChange, onSKUChange }) => {
  const [quantity, setQuantity] = useState("");
  const [quantityError, setQuantityError] = useState("");

  const handleQuantityChange = (e) => {
    const value = e.target.value;

    if (/^\d*$/.test(value)) {
      if (
        value === "" ||
        (parseInt(value, 10) >= 1 && parseInt(value, 10) <= 9999)
      ) {
        setQuantity(value);
        setQuantityError("");
      } else {
        setQuantityError("Quantity must be between 1 and 9999.");
      }
    } else {
      setQuantityError(
        "Please enter a valid number without commas or periods."
      );
    }
    onQuantityChange(value);
  };
  return (
    <div style={{ width: "100%", marginBottom: "20px" }}>
      <label style={{ fontWeight: "bold" }}>Inventory</label>
      <div
        style={{
          display: "flex",
          gap: "20px",
          border: "1px solid #d9d9d9",
          padding: "10px",
          marginTop: "15px",
        }}
      >
        <form style={{ width: "35%" }}>
          <label style={{ display: "block", fontSize: "small" }}>
            Quantity
          </label>
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            placeholder="Quantity"
            min="1"
            max="9999"
            style={{
              width: "90%",
              flex: "1",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              marginTop: "10px",
              borderColor: quantityError ? "red" : "#ccc",
            }}
          />
          {quantityError && (
            <p style={{ color: "red", fontSize: "small" }}>{quantityError}</p>
          )}
        </form>
        <form style={{ width: "65%" }}>
          <label style={{ display: "block", fontSize: "small" }}>
            SKU (Optional)
          </label>
          <input
            type="text"
            placeholder="SKU (Optional)"
            onChange={(e) => onSKUChange(e.target.value)}
            style={{
              width: "90%",
              flex: "1",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              marginTop: "10px",
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default Inventory;
