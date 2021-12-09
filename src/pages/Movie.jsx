import { useParams } from 'react-router-dom';
import { MovieDetails } from '../components/MovieDetails';

const Movie = () => {
  const { id } = useParams();

  return <MovieDetails imdbID={id} />;
};

export { Movie };
