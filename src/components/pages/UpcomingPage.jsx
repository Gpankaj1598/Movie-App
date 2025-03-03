

import React from 'react';
import Layout from '../layout/Layout';
import MovieGrid from '../sections/MovieGrid';
import useMovies from '../../hooks/useMovies';
import { fetchUpcomingMovies } from '../../services/api';

const UpcomingPage = () => {
  const { 
    movies, 
    loading, 
    error, 
    page, 
    totalPages, 
    handlePageChange 
  } = useMovies(fetchUpcomingMovies);

  return (
    <Layout>
      <MovieGrid
        title="Upcoming Movies"
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

export default UpcomingPage;