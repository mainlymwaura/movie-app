import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <Link to={`/movie/${movie.id}`}>
            <img src={movie.posterURL} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>Rating: {movie.rating}/5</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;