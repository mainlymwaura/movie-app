import React, { useState } from 'react';

const AddMovie = ({ addMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie({ ...newMovie, rating: Number(newMovie.rating) });
    setNewMovie({ title: '', description: '', posterURL: '', rating: 0 });
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: 20 }}>
      <input name="title" placeholder="Title" value={newMovie.title} onChange={handleChange} />
      <input name="description" placeholder="Description" value={newMovie.description} onChange={handleChange} />
      <input name="posterURL" placeholder="Poster URL" value={newMovie.posterURL} onChange={handleChange} />
      <input name="rating" type="number" placeholder="Rating" value={newMovie.rating} onChange={handleChange} />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;
