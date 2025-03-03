
import React, { createContext, useState, useContext } from 'react';
import { searchMovies } from '../services/api';

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchPage, setSearchPage] = useState(1);
  const [totalSearchPages, setTotalSearchPages] = useState(0);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState(null);

  const handleSearch = async (query, page = 1) => {
    if (!query.trim()) return;
    
    try {
      setIsSearching(true);
      setSearchQuery(query);
      const data = await searchMovies(query, page);
      setSearchResults(data.results);
      setTotalSearchPages(data.total_pages);
      setSearchPage(page);
      setIsSearching(false);
    } catch (error) {
      setSearchError('Failed to search movies. Please try again.');
      setIsSearching(false);
    }
  };

  const handleSearchPageChange = (newPage) => {
    setSearchPage(newPage);
    handleSearch(searchQuery, newPage);
    window.scrollTo(0, 0);
  };

  const clearSearch = () => {
    setSearchResults([]);
    setSearchQuery('');
    setSearchPage(1);
    setTotalSearchPages(0);
  };

  return (
    <MovieContext.Provider
      value={{
        searchResults,
        searchQuery,
        searchPage,
        totalSearchPages,
        isSearching,
        searchError,
        handleSearch,
        handleSearchPageChange,
        clearSearch
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => useContext(MovieContext);

export default MovieContext;