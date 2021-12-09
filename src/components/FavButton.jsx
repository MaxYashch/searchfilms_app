import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  favoritesAdd,
  favoritesRemove,
  selectUser,
} from '../features/userSlice';

const FavButton = (props) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [favActive, setFavActive] = useState(false);
  const { imdbID } = props;

  useEffect(() => {
    setFavActive(user?.favorites.indexOf(imdbID) >= 0);
  }, [imdbID, user?.favorites]);

  const favoriteToggle = () => {
    if (user.favorites.indexOf(imdbID) >= 0) {
      dispatch(
        favoritesRemove({
          imdbID: imdbID,
        })
      );
    } else {
      dispatch(
        favoritesAdd({
          imdbID: imdbID,
        })
      );
    }
  };

  return (
    <button
      className={`fav-button ${favActive ? 'fav-button--active' : ''}`}
      onClick={() => favoriteToggle()}
    >
      Favorite
    </button>
  );
};

export { FavButton };
