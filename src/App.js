import { Routes, Route, Navigate } from 'react-router-dom';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { NotFound } from './pages/NotFound';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import { Favorites } from './pages/Favorites';
import { History } from './pages/History';
import { Movie } from './pages/Movie';
import { MainPage } from './components/MainPage';
import './styles/variables.css';
import './styles/reset.css';
import './styles/tools.css';
import './styles/text.css';
import './styles/buttons.css';
import './styles/App.css';

function App() {
  const user = useSelector(selectUser);

  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route index element={<Home />} />
        <Route path="search" element={<Search />}>
          <Route path=":query" element={<Search />} />
        </Route>
        <Route
          path="favorites"
          element={user ? <Favorites /> : <Navigate to="/signin" />}
        />
        <Route
          path="history"
          element={user ? <History /> : <Navigate to="/signin" />}
        />
        <Route
          path="signin"
          element={user ? <Navigate to="/" /> : <SignIn />}
        />
        <Route
          path="signup"
          element={user ? <Navigate to="/" /> : <SignUp />}
        />
        <Route path="movie">
          <Route path=":id" element={<Movie />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
