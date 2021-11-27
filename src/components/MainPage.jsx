import { Outlet, Link } from 'react-router-dom';
import { Footer } from './Footer';

const MainPage = () => {
  return (
    <>
      <nav className="deep-orange accent-3">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">
            Searchfilms
          </Link>
          <ul id="nav-mobile" className="right headerLinks">
            <Link to="/signin">Sign In</Link>
            <Link to="/registration">Registration</Link>
          </ul>
        </div>
      </nav>

      <main className="container">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export { MainPage };
