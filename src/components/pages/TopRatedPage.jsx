

import React from 'react';
import Layout from '../layout/Layout';
import MovieGrid from '../sections/MovieGrid';
import useMovies from '../../hooks/useMovies';
import { fetchTopRatedMovies } from '../../services/api';

const TopRatedPage = () => {
  const { 
    movies, 
    loading, 
    error, 
    page, 
    totalPages, 
    handlePageChange 
  } = useMovies(fetchTopRatedMovies);

  return (
    <Layout>
      <MovieGrid
        title="Top Rated Movies"
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

export default TopRatedPage;