

// API Configuration
export const API_KEY = 'c45a857c193f6302f2b5061c3b85e743';
export const BASE_URL = 'https://api.themoviedb.org/3';
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

// API Endpoints
export const ENDPOINTS = {
  popular: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US`,
  https: `api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  topRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  upcoming: `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US`,
  movieDetail: (id) => `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`,
  movieCredits: (id) => `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`,
  search: (query) => `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`
};