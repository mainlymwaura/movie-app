import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A mind-bending thriller.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg',
      rating: 5,
    },
    {
      title: 'Interstellar',
      description: 'Space exploration to save humanity.',
      posterURL: 'https://m.media-amazon.com/images/I/91kFYg4fX3L._SY679_.jpg',
      rating: 4,
    },
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [rateFilter, setRateFilter] = useState(0);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) && movie.rating >= rateFilter
  );

  return (
    <div className="App">
      <h1>🎬 My Movie App</h1>
      <Filter setTitleFilter={setTitleFilter} setRateFilter={setRateFilter} />
      <AddMovie addMovie={addMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
