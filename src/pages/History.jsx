import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MovieList } from '../components/MovieList';
import { selectUser, historyClear } from '../features/userSlice';
import { getMovieDetails } from '../api/api';

const History = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    const promises = user.history.map((imdbID) => {
      return getMovieDetails({ imdbID });
    });

    Promise.all(promises)
      .then((results) => {
        setMovies(results);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
      });
  }, [user?.history]);

  const clear = () => {
    dispatch(historyClear());
  };

  return (
    <>
      <h1 className="page-title">History</h1>
      {loading ? (
        <div className="movie-list-loading">Loading...</div>
      ) : error ? (
        <div className="movie-list-loading">Error. Try to reload the page.</div>
      ) : (
        <>
          <MovieList movies={movies} />
          {movies?.length > 0 && (
            <div className="movie-list-actions">
              <button className="btn btn--default" onClick={clear}>
                Clear history
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export { History };
