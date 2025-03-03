
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MovieProvider } from './context/MovieContext';

import HomePage from './components/pages/HomePage';
import TopRatedPage from './components/pages/TopRatedPage';
import UpcomingPage from './components/pages/UpcomingPage';
import MovieDetailPage from './components/pages/MovieDetailPage';
import SearchResultPage from './components/pages/SearchResultPage';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <MovieProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/top-rated" element={<TopRatedPage />} />
          <Route path="/upcoming" element={<UpcomingPage />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />
          <Route path="/search" element={<SearchResultPage />} />
        </Routes>
      </MovieProvider>
    </BrowserRouter>
  );
}

export default App;