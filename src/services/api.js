

import { ENDPOINTS } from '../utils/constants';

// Fetch popular movies
export const fetchPopularMovies = async (page = 1) => {
  try {
    const response = await fetch(`${ENDPOINTS.popular}&page=${page}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw error;
  }
};

// Fetch top rated movies
export const fetchTopRatedMovies = async (page = 1) => {
  try {
    const response = await fetch(`${ENDPOINTS.topRated}&page=${page}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching top rated movies:', error);
    throw error;
  }
};

// Fetch upcoming movies
export const fetchUpcomingMovies = async (page = 1) => {
  try {
    const response = await fetch(`${ENDPOINTS.upcoming}&page=${page}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching upcoming movies:', error);
    throw error;
  }
};

// Fetch movie details
export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await fetch(ENDPOINTS.movieDetail(movieId));
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

// Fetch movie cast
export const fetchMovieCast = async (movieId) => {
  try {
    const response = await fetch(ENDPOINTS.movieCredits(movieId));
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movie cast:', error);
    throw error;
  }
};

// Search movies
export const searchMovies = async (query, page = 1) => {
  try {
    const response = await fetch(`${ENDPOINTS.search(query)}&page=${page}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};