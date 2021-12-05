import { useState } from 'react';
import { movieSearch } from '../api/api';
import { MovieList } from '../components/MovieList';

const Homepage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await movieSearch({ query });
    setLoading(false);
    setMovies(result?.Search);
  };

  return (
    <>
      <h1 className="page-title">Movie search</h1>

      <form className="search-form" onSubmit={submit}>
        <div className="search-form__layout">
          <input
            type="search"
            className="field-input search-form__input"
            placeholder="Enter movie"
            required
            onChange={(e) => setQuery(e.target.value)}
          />

          <button
            type="submit"
            className="btn btn--primary search-form__button"
          >
            Search
          </button>
        </div>
      </form>

      {loading ? (
        <div className="movie-list-loading">Loading...</div>
      ) : (
        <MovieList movies={movies} />
      )}
    </>
  );
};

export { Homepage };
