// src/pages/Layout.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';

const Layout = ({children}) => {
  return (
    <div>
      <Header />
      <main>
      {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
