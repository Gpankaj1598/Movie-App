
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../layout/Layout';
import MovieInfo from '../sections/MovieInfo';
import MovieCast from '../sections/MovieCast';
import { fetchMovieDetails, fetchMovieCast } from '../../services/api';

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMovieData = async () => {
      try {
        setLoading(true);
        const [movieData, creditsData] = await Promise.all([
          fetchMovieDetails(id),
          fetchMovieCast(id)
        ]);
        
        if (movieData.success === false) {
          throw new Error(movieData.status_message || 'Failed to fetch movie details');
        }
        
        setMovie(movieData);
        setCast(creditsData.cast || []);
        setLoading(false);
      } catch (error) {
        setError('Failed to load movie data. Please try again later.');
        setLoading(false);
      }
    };

    loadMovieData();
  }, [id]);

  return (
    <Layout>
      {loading && <div className="loading">Loading movie details...</div>}
      {error && <div className="error-message">{error}</div>}
      
      {!loading && !error && !movie && (
        <div className="not-found">Movie not found</div>
      )}
      
      {!loading && !error && movie && (
        <div className="movie-detail-page">
          <MovieInfo movie={movie} />
          <div className="detail-content">
            <MovieCast cast={cast} />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default MovieDetailPage;