import { Outlet, Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { SignIn } from '../pages/SignIn';
import { Homepage } from '../pages/Homepage';

const MainPage = () => {
  return (
    <>
      <Header />
      <main className="page-main">
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};
export { MainPage };
