// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import ProductViewPage from './pages/ProductViewPage';
import Layout from './pages/Layout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route  element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/products" element={<ProductListingPage />} />
          <Route path="/product/:id" element={<ProductViewPage />} /> 
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
