
import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGE_BASE_URL } from '../../utils/constants';

const MovieCard = ({ movie }) => {
  const imageUrl = movie.poster_path 
    ? `${IMAGE_BASE_URL}${movie.poster_path}` 
    : 'https://via.placeholder.com/500x750?text=No+Image+Available';

  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <div className="movie-image">
          <img src={imageUrl} alt={movie.title} />
          <div className="rating">
            <span>{movie.vote_average.toFixed(1)}</span>
          </div>
        </div>
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;