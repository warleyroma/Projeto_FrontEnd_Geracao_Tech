import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout'; 
import Products from './pages/Products';
import './App.css';

const App = () => {

  return (
    <>
   
     <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
 
    </>
  )
}

export default App
