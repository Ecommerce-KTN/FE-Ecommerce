import React from 'react';

const categories = [
  { name: 'Electronics', icon: '📱' },
  { name: 'Books', icon: '📚' },
  { name: 'Jewelry', icon: '💍' },
  { name: 'Toys', icon: '🧸' },
  { name: 'Sports', icon: '⚽' },
  { name: 'Watches', icon: '⌚' },
  { name: 'Games', icon: '🎮' },
  { name: 'Fine Arts', icon: '🎨' },
  { name: 'Software', icon: '💻' },
  { name: 'Furniture', icon: '🛋️' },
];

function Category(){
  return (
    <div style={{margin: "20px 0" , padding: "0 50px" }}>
      <div style={{  display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px"}}>
        <h2>Our Top Categories</h2>
        <button style={{  textDecoration: "none", color: "#ff6f61", fontSize: "14px"}}>See All</button>
      </div>
      <div style={{  display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
        {categories.map((category, index) => (
          <div key={index} style={{  textAlign: "center", width: "9%", marginBottom: "20px"}}>
            <div>{category.icon}</div>
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
