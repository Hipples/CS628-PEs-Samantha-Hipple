import { useState } from 'react';
import { movies } from './movie-data';

import './movies.css'

const MovieList = () => {
  const [selectedGenre, setSelectedGenre] = useState('All Genres');

  const uniqueGenres = ['All Genres', ...new Set(movies.map(movie => movie.genre))];

  const filteredMovies = selectedGenre === 'All Genres' ? 
    movies : movies.filter(movie => movie.genre === selectedGenre);

  const handleMovieClick = (movie) => {
    alert(`You have clicked ${movie}!`)
  }

  return (
    <div>
      <h1>Movie List</h1>
      <select 
        className='movies-selector' 
        value={selectedGenre} 
        onChange={e => setSelectedGenre(e.target.value)}>

          {uniqueGenres.map(genre => <option key={genre} value={genre}>{genre}</option>)}

      </select>

      <ul>
        {filteredMovies.map(movie => (
          <li className='movie-card' 
            key={movie.title} 
            onClick={() => handleMovieClick(movie.title)}>

              <h2>{movie.title}</h2>
              <p>{movie.genre}</p>
              <p>Released: {movie.year}</p>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
