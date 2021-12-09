import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

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
