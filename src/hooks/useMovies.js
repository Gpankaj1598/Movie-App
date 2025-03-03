

import { useState, useEffect } from 'react';

const useMovies = (fetchFunction, initialPage = 1) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setLoading(true);
        const data = await fetchFunction(page);
        setMovies(data.results);
        setTotalPages(data.total_pages);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch movies. Please try again later.');
        setLoading(false);
      }
    };

    loadMovies();
  }, [fetchFunction, page]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
    window.scrollTo(0, 0);
  };

  return { movies, loading, error, page, totalPages, handlePageChange };
};

export default useMovies;