import { useState, useEffect } from 'react';

const FavButton = (props) => {
  const [favorites, setFavorite] = useState('');

  useEffect(async () => {
    let savedFavorite = await localStorage.getItem('favorites');
    if (savedFavorite) {
      setFavorite(savedFavorite);
    }
  }, []);

  const searchMovies = () => {
    console.log('G-Unit');
  };

  return (
    <button className="fav-button" onClick={() => searchMovies()}>
      Favorites
    </button>
  );
};

export { FavButton };
