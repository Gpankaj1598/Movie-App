
import React from 'react';
import MovieCard from '../body/MovieCard';
import Pagination from '../body/Pagination';

const MovieGrid = ({ title, movies, loading, error, page, totalPages, onPageChange }) => {
  return (
    <div className="movie-grid-container">
      <h1 className="section-title">{title}</h1>
      
      {loading && <div className="loading">Loading movies...</div>}
      {error && <div className="error-message">{error}</div>}
      
      {!loading && !error && movies.length === 0 && (
        <div className="no-results">No movies found</div>
      )}
      
      {!loading && !error && movies.length > 0 && (
        <>
          <div className="movie-grid">
            {movies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
          
          <Pagination 
            currentPage={page} 
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </>
      )}
    </div>
  );
};

export default MovieGrid;