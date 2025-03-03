

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMovieContext } from '../../context/MovieContext';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { handleSearch } = useMovieContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      handleSearch(searchTerm);
      navigate('/search');
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">MovieFlix</Link>
        </div>
        
        <div className="nav-links">
          <Link to="/" className="nav-link">Popular</Link>
          <Link to="/top-rated" className="nav-link">Top Rated</Link>
          <Link to="/upcoming" className="nav-link">Upcoming</Link>
        </div>
        
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;