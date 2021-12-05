import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { movieDetails } from '../api/api';

const MovieDetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!movie) {
      movieDetails({ imdbID: params.id }).then((result) => {
        setMovie(result);
        setLoading(false);
      });
    }
  });

  return (
    <>
      {movie && <h1 className="page-title">{movie.Title}</h1>}
      <div className="movie-details">
        {loading ? (
          <div className="movie-details__loading">Loading...</div>
        ) : (
          <>
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
