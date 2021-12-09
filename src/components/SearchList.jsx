import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { movieSearch } from '../api/api';
import { MovieList } from './MovieList';

const SearchList = (props) => {
  const { short, initialQuery } = props;
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const submit = async (e, initial) => {
    e?.preventDefault();
    if (short) {
      if (query) {
        navigate('/search/' + query);
      }
    } else {
      const q = (initial && initialQuery) || query;
      // navigate('/search/' + q);
      setLoading(true);
      const result = await movieSearch({
        query: q,
      });
      setLoading(false);
      setMovies(result?.Search);
    }
  };

  useEffect(() => {
    if (initialQuery && !short) {
      setQuery(initialQuery);
      submit(null, true);
    }
  }, []);

  return (
    <>
      <form className="search-form" onSubmit={submit}>
        <div className="search-form__layout">
          <input
            type="search"
            className="field-input search-form__input"
            placeholder="Enter movie"
            required
            value={query}
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

      {!short && (
        <>
          {loading ? (
            <div className="movie-list-loading">Loading...</div>
          ) : (
            <MovieList movies={movies} />
          )}
        </>
      )}
    </>
  );
};

export { SearchList };
