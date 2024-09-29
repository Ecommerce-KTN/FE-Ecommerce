import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Manager from '../pages/manager/Manager';
import ProductDetail from '../pages/ProductDetail/ProductDetail';
import App from '../App';

const Stack = () => {
  return (
    <Routes>
      <Route index element={<App />} />
      <Route path="/Manager" element={<Manager />} />
      {/* Thêm tham số :id cho đường dẫn ProductDetail */}
      <Route path="/ProductDetail/:id" element={<ProductDetail />} />
    </Routes>
  );
};

export default Stack;