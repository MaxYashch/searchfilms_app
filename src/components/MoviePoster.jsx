import { Link } from 'react-router-dom';

const MoviePoster = (props) => {
  const { movie } = props;

  return (
    <Link to={`/movie/${movie.imdbID}`} className="movie-poster">
      <div className="movie-poster__view">
        {!movie.Poster || movie.Poster === 'N/A' ? (
          <div className="movie-poster__image-placeholder">no image</div>
        ) : (
          <img className="movie-poster__image" src={movie.Poster} />
        )}
      </div>
      <div className="movie-poster__main">
        {movie.Title && (
          <div className="movie-poster__title flc">{movie.Title}</div>
        )}
        {movie.Year && (
          <div className="movie-poster__year flc">{movie.Year}</div>
        )}
        {movie.Type && (
          <div className="movie-poster__type flc">{movie.Type}</div>
        )}
      </div>
    </Link>
  );
};

export { MoviePoster };
