import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import ProductViewPage from './pages/ProductViewPage';
import Layout from './pages/Layout';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/products" element={<ProductListingPage />} />
          <Route path="/products/:id" element={<ProductViewPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;