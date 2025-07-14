import React from 'react';
import { Link, useParams } from 'react-router-dom';

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find(movie => movie.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-details">
      <Link to="/" className="back-button">← Back to Home</Link>
      <h2>{movie.title}</h2>
      <div className="details-content">
        <img src={movie.posterURL} alt={movie.title} className="detail-poster" />
        <div className="detail-info">
          <p><strong>Rating:</strong> {movie.rating}/5</p>
          <p><strong>Description:</strong> {movie.description}</p>
          <div className="trailer-container">
            <h3>Trailer</h3>
            <iframe 
              width="560" 
              height="315" 
              src={movie.trailerLink} 
              title={`${movie.title} Trailer`}
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;