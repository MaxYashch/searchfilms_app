import { MoviePoster } from './MoviePoster';

const MovieList = (props) => {
  const { movies = [] } = props;

  return (
    <div className="movie-list">
      {movies.length ? (
        movies.map((movie) => <MoviePoster key={movie.imdbID} movie={movie} />)
      ) : (
        <h4>Nothing found</h4>
      )}
    </div>
  );
};

export { MovieList };
