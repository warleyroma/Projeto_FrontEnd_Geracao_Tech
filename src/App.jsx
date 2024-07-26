import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from './pages/Layout'; 
import Products from './pages/Products';
import HomePage from './pages/HomePage';
import './App.css';
import ProductListingPage from './pages/ProductListingPage'; 
const App = () => {

  return (
    <>
   
     <Router>
      <Routes>
       
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/produtos" element={<ProductListingPage />} /> {/* Nova rota */}
      </Routes>
    </Router>
    
    </>
  )
}

export default App
