

import React from 'react';
import Navbar from '../body/Navbar';
import Footer from '../body/Footer';

const Layout = ({ children }) => {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;