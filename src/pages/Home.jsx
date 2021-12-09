import { SearchList } from '../components/SearchList';

const Home = () => {
  return (
    <>
      <h1 className="page-title">Searchfilms is a movie search service</h1>

      <SearchList short={true} />

      <div className="article flc">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eos,
          laboriosam impedit, blanditiis recusandae maxime reiciendis ut amet
          officiis ex eligendi tempora dolores deserunt dolorum vel quasi ipsum
          nesciunt explicabo.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eos,
          laboriosam impedit, blanditiis recusandae maxime reiciendis ut amet
          officiis ex eligendi tempora dolores deserunt dolorum vel quasi ipsum
          nesciunt explicabo.
        </p>
      </div>
    </>
  );
};

export { Home };
