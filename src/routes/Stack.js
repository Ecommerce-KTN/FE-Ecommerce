import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Manager from '../pages/manager/Manager'
import App from '../App'

const Stack = () => {
  return (
    <Routes>
      <Route index  element={<App />} />
      <Route path="/Manager" element={<Manager />} />
    </Routes>
  )
}

export default Stack