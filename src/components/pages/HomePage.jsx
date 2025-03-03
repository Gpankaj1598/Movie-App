

import React from 'react';
import Layout from '../layout/Layout';
import MovieGrid from '../sections/MovieGrid';
import useMovies from '../../hooks/useMovies';
import { fetchPopularMovies } from '../../services/api';

const HomePage = () => {
  const { 
    movies, 
    loading, 
    error, 
    page, 
    totalPages, 
    handlePageChange 
  } = useMovies(fetchPopularMovies);

  return (
    <Layout>
      <MovieGrid
        title="Popular Movies"
        movies={movies}
        loading={loading}
        error={error}
        page={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Layout>
  );
};

export default HomePage;