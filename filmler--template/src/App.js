import React, { useState, useEffect } from 'react';
import './App.css'; // Stil dosyasını içe aktar
import { fetchMovies } from './Services/OmdbService';
import MovieCard from './Components/MovieCard';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await fetchMovies('Batman');
      setMovies(results);
    };

    fetchData();
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Film Listesi</h1>
      </header>
      <div className="movie-grid">
        {movies.map(movie => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default App;