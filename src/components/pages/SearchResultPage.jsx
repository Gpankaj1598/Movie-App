
import React from 'react';
import Layout from '../layout/Layout';
import MovieGrid from '../sections/MovieGrid';
import { useMovieContext } from '../../context/MovieContext';

const SearchResultPage = () => {
  const { 
    searchResults, 
    searchQuery, 
    searchPage, 
    totalSearchPages, 
    isSearching, 
    searchError, 
    handleSearchPageChange 
  } = useMovieContext();

  return (
    <Layout>
      <MovieGrid
        title={`Search Results for "${searchQuery}"`}
        movies={searchResults}
        loading={isSearching}
        error={searchError}
        page={searchPage}
        totalPages={totalSearchPages}
        onPageChange={handleSearchPageChange}
      />
    </Layout>
  );
};

export default SearchResultPage;