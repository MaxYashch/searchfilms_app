import { Outlet, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { Header } from './Header';
import { Footer } from './Footer';
import { SignOut } from './SignOut';
import { SignIn } from '../pages/SignIn';
import { Homepage } from '../pages/Homepage';

const MainPage = () => {
  const user = useSelector(selectUser);
  return (
    <>
      {user ? <SignOut /> : <Header />}
      <main className="page-main">
        <div className="container">
          {/* {<SignOut /> ? <Outlet /> : <SignIn />} */}
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};
export { MainPage };
