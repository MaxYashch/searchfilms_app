import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMovieDetails } from '../api/api';
import { historyAdd, selectUser } from '../features/userSlice';
import { FavButton } from '../components/FavButton';

const MovieDetails = (props) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const { imdbID } = props;
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovieDetails({ imdbID: imdbID }).then((result) => {
      setMovie(result);
      setLoading(false);
    });

    if (user) {
      dispatch(
        historyAdd({
          imdbID,
        })
      );
    }
  }, [imdbID]);

  return (
    <>
      {movie && <h1 className="page-title">{movie.Title}</h1>}
      <div className="movie-details">
        {loading ? (
          <div className="movie-details__loading">Loading...</div>
        ) : (
          <>
            {user && <FavButton imdbID={movie.imdbID} />}
            <div className="movie-details__view">
              {!movie.Poster || movie.Poster === 'N/A' ? (
                <div className="movie-details__image-placeholder">no image</div>
              ) : (
                <img className="movie-details__image" src={movie.Poster} />
              )}
            </div>
            {movie.Year && (
              <div className="movie-details__param flc">Year: {movie.Year}</div>
            )}
            {movie.Released && (
              <div className="movie-details__param flc">
                Released: {movie.Released}
              </div>
            )}
            {movie.Genre && (
              <div className="movie-details__param flc">
                Genre: {movie.Genre}
              </div>
            )}
            {movie.Director && (
              <div className="movie-details__param flc">
                Director: {movie.Director}
              </div>
            )}
            {movie.Writer && (
              <div className="movie-details__param flc">
                Writer: {movie.Writer}
              </div>
            )}
            {movie.Actors && (
              <div className="movie-details__param flc">
                Actors: {movie.Actors}
              </div>
            )}
            {movie.Language && (
              <div className="movie-details__param flc">
                Language: {movie.Language}
              </div>
            )}
            {movie.Plot && (
              <div className="movie-details__description flc">{movie.Plot}</div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export { MovieDetails };
