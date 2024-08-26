import React from 'react';
import '../App.css';

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

const Category = () => {
  return (
    <div className="categories">
      <div className="categories-header">
        <h2>Our Top Categories</h2>
        <button className="see-all">See All</button>
      </div>
      <div className="categories-list">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <div>{category.icon}</div>
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
