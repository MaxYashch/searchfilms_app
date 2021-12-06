import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOut, selectUser } from '../features/userSlice';

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleSignOut = (e) => {
    e.preventDefault();
    dispatch(signOut());
  };

  return (
    <header className="page-header">
      <div className="container">
        <div className="page-header__layout">
          <Link to="/" className="page-header__logo">
            Searchfilms
          </Link>
          {user && (
            <nav className="page-header__nav top-nav">
              <Link to="/favorites" className="top-nav__link">
                Favorites
              </Link>
              <Link to="/history" className="top-nav__link">
                History
              </Link>
            </nav>
          )}
          <nav className="page-header__auth top-nav top-nav--auth">
            {user ? (
              <>
                <div className="top-nav__user">{user.name}</div>
                <Link
                  to="/signout"
                  className="top-nav__link"
                  onClick={(e) => handleSignOut(e)}
                >
                  Sign Out
                </Link>
              </>
            ) : (
              <>
                <Link to="/signin" className="top-nav__link">
                  Sign In
                </Link>
                <Link to="/signup" className="top-nav__link">
                  Sign Up
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
export { Header };
