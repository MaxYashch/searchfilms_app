import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { MovieList } from '../components/MovieList';
import { selectUser } from '../features/userSlice';
import { getMovieDetails } from '../api/api';

const Favorites = () => {
  const user = useSelector(selectUser);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    const promises = user.favorites.map((imdbID) => {
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
  }, [user?.favorites]);

  return (
    <>
      <h1 className="page-title">Favorites</h1>
      {loading ? (
        <div className="movie-list-loading">Loading...</div>
      ) : error ? (
        <div className="movie-list-loading">Error. Try to reload the page.</div>
      ) : (
        <MovieList movies={movies} />
      )}
    </>
  );
};

export { Favorites };
