import { Link } from 'react-router-dom';
// import { SignIn } from '../pages/SignIn';
// import { Registration } from '../pages/Registration';

function Header() {
  return (
    <>
      <nav className="deep-orange accent-3">
        <div className="nav-wrapper">
          <a href="!" className="brand-logo left">
            Searchfilms
          </a>
          <ul id="nav-mobile" className="right">
            <Link to="/signin">Sign in</Link>
            <Link to="/registration">Registration</Link>
          </ul>
          {/* 
          <ul id="nav-mobile" className="right">
            <li>
              <a class="waves-effect deep-orange btn-small" href="!">
                Sign in
              </a>
            </li>
            <li>
              <a class="waves-effect deep-orange btn-small" href="!">
                Sign out
              </a>
            </li>{' '}
            <li>
              <a class="waves-effect deep-orange btn-small" href="!">
                Registration
              </a>
            </li>
          </ul> */}
        </div>
      </nav>
    </>
  );
}
export { Header };
