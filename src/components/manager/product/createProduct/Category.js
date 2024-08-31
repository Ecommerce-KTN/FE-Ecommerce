import React from 'react';

function Category() {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px', boxSizing: 'border-box' }}>
      {/* Category Section */}
      <div style={{ width: '100%', marginBottom: '20px' }}>
        <label style={{ fontWeight: 'bold' }}>Product Category</label>
        <select style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc' }}>
          <option>Health & Medicine</option>
        </select>
        <select style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}>
          <option>Beauty</option>
        </select>
      </div>

      {/* Inventory Section */}
      <div style={{ width: '100%', marginBottom: '20px' }}>
        <label style={{ fontWeight: 'bold' }}>Inventory</label>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input type="number" placeholder="Quantity" style={{ flex: '1', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          <input type="text" placeholder="SKU (Optional)" style={{ flex: '1', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
        </div>
      </div>

      {/* Selling Type Section */}
      <div style={{ width: '100%', marginBottom: '20px' }}>
        <label style={{ fontWeight: 'bold' }}>Selling Type</label>
        <div style={{ padding: '10px', borderRadius: '4px', backgroundColor: '#fff', border: '1px solid #ccc' }}>
          <div style={{ marginBottom: '10px' }}>
            <input type="checkbox" id="inStore" name="sellingType" defaultChecked />
            <label htmlFor="inStore" style={{ marginLeft: '10px' }}>In-store selling only</label>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <input type="checkbox" id="online" name="sellingType" />
            <label htmlFor="online" style={{ marginLeft: '10px' }}>Online selling only</label>
          </div>
          <div>
            <input type="checkbox" id="both" name="sellingType" />
            <label htmlFor="both" style={{ marginLeft: '10px' }}>Available both in-store and online</label>
          </div>
        </div>
      </div>

      {/* Variant Section */}
      <div style={{ width: '100%' }}>
        <label style={{ fontWeight: 'bold' }}>Variant</label>
        <button style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', backgroundColor: '#fff' }}>
          + Add Variant
        </button>
      </div>
    </div>
  );
}

export default Category;
