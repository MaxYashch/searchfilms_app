import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="page-header">
      <div className="container">
        <div className="page-header__layout">
          <Link to="/" className="page-header__logo">
            Searchfilms
          </Link>
          <nav className="page-header__nav top-nav">
            <Link to="/signin" className="top-nav__link">
              Sign In
            </Link>
            <Link to="/signup" className="top-nav__link">
              Sign Up
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
export { Header };
