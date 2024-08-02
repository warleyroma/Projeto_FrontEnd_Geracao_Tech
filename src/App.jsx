import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import ProductViewPage from './pages/ProductViewPage';
import Categories from './pages/Categories';
import MyOrders from './pages/MyOrders';
import Layout from './pages/Layout';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/products" element={<ProductListingPage />} />
          <Route path="/products/:id" element={<ProductViewPage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/myorders" element={<MyOrders />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;