

import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} MovieFlix. All rights reserved.</p>
        <p>Powered by TMDB API</p>
      </div>
    </footer>
  );
};

export default Footer;