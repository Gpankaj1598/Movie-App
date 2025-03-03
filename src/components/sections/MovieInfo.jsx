

import React from 'react';
import { IMAGE_BASE_URL } from '../../utils/constants';

const MovieInfo = ({ movie }) => {
  if (!movie) return null;

  // Format runtime to hours and minutes
  const formatRuntime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  // Format movie genres
  const formatGenres = (genres) => {
    return genres.map(genre => genre.name).join(', ');
  };

  // Calculate release year
  const releaseYear = movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A';

  // Format budget and revenue
  const formatCurrency = (amount) => {
    if (!amount) return 'N/A';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const backdropUrl = movie.backdrop_path 
    ? `${IMAGE_BASE_URL}${movie.backdrop_path}` 
    : 'https://via.placeholder.com/1280x720?text=No+Backdrop+Available';

  const posterUrl = movie.poster_path 
    ? `${IMAGE_BASE_URL}${movie.poster_path}` 
    : 'https://via.placeholder.com/500x750?text=No+Poster+Available';

  return (
    <div className="movie-info">
      <div className="movie-backdrop" style={{ backgroundImage: `url(${backdropUrl})` }}>
        <div className="backdrop-overlay">
          <div className="movie-detail-container">
            <div className="movie-poster">
              <img src={posterUrl} alt={movie.title} />
            </div>
            <div className="movie-details">
              <h1 className="movie-title">{movie.title} <span>({releaseYear})</span></h1>
              <div className="movie-meta">
                <span className="release-date">{movie.release_date}</span>
                <span className="runtime">{movie.runtime ? formatRuntime(movie.runtime) : 'N/A'}</span>
                <span className="genres">{movie.genres ? formatGenres(movie.genres) : 'N/A'}</span>
              </div>
              <div className="rating">
                <span className="rating-value">{movie.vote_average.toFixed(1)}</span>
                <span className="rating-count">({movie.vote_count} votes)</span>
              </div>
              <div className="tagline">{movie.tagline}</div>
              <div className="overview">
                <h3>Overview</h3>
                <p>{movie.overview || 'No overview available.'}</p>
              </div>
              <div className="movie-stats">
                <div className="stat-item">
                  <span className="stat-label">Status:</span>
                  <span className="stat-value">{movie.status}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Budget:</span>
                  <span className="stat-value">{formatCurrency(movie.budget)}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Revenue:</span>
                  <span className="stat-value">{formatCurrency(movie.revenue)}</span>
                </div>
                {movie.production_companies && movie.production_companies.length > 0 && (
                  <div className="stat-item">
                    <span className="stat-label">Production:</span>
                    <span className="stat-value">
                      {movie.production_companies.map(company => company.name).join(', ')}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;