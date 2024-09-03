import React from 'react';
import'../../App.css';



const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <h1>New Year Sale </h1>
        <h1>Offer 2024</h1>
        <h1>20% OFF</h1>
        <button className="banner-button">Start Shopping</button>
      </div>
      <img src='../image/banner.png' alt='Banner' />
    </div>
  );
};

export default Banner;
