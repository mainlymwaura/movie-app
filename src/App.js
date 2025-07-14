import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import MovieDetails from './components/MovieDetails';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Inception',
      description: 'A mind-bending thriller about dream infiltration.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg',
      rating: 5,
      trailerLink: 'https://www.youtube.com/embed/YoHD9XEInc0'
    },
    {
      id: 2,
      title: 'Interstellar',
      description: 'Space exploration to save humanity from extinction.',
      posterURL: 'https://m.media-amazon.com/images/I/91kFYg4fX3L._SY679_.jpg',
      rating: 4,
      trailerLink: 'https://www.youtube.com/embed/zSWdZVtXT7E'
    },
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [rateFilter, setRateFilter] = useState(0);

  const addMovie = (movie) => {
    const newMovie = { ...movie, id: movies.length + 1 };
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) && 
      movie.rating >= rateFilter
  );

  return (
    <Router>
      <div className="App">
        <h1>🎬 My Movie App</h1>
        <Routes>
          <Route path="/" element={
            <>
              <Filter setTitleFilter={setTitleFilter} setRateFilter={setRateFilter} />
              <AddMovie addMovie={addMovie} />
              <MovieList movies={filteredMovies} />
            </>
          } />
          <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;