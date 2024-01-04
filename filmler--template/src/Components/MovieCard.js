import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <div style={{ margin: '20px' }}>
      <img src={movie.Poster} alt={movie.Title} style={{ width: '200px' }} />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
    </div>
  );
};

export default MovieCard;