import React from 'react';

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: 10, margin: 10, width: 250,  color: 'white' }}>
      <img src={posterURL} alt={title} width="100%" />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>⭐ {rating}</p>
    </div>
  );
};

export default MovieCard;
