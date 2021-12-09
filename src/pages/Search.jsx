import { useParams } from 'react-router-dom';
import { SearchList } from '../components/SearchList';

const Search = () => {
  const { query } = useParams();

  return (
    <>
      <h1 className="page-title">Movie search</h1>

      <SearchList initialQuery={query} />
    </>
  );
};

export { Search };
