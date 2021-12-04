import { Outlet, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { Header } from './Header';
import { Footer } from './Footer';
import { SignOut } from './SignOut';

const MainPage = () => {
  const user = useSelector(selectUser);
  return (
    <>
      {user ? <SignOut /> : <Header />}
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
