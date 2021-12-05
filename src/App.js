import { Routes, Route, Navigate } from 'react-router-dom';
// import { Navigate } from 'react-router';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import { Homepage } from './pages/Homepage';
import { NotFound } from './pages/NotFound';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import { Favorites } from './pages/Favorites';
import { History } from './pages/History';
import { MovieDetails } from './components/MovieDetails';
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
        <Route index element={<Homepage />} />
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
          <Route path=":id" element={<MovieDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
// eslint-disable-next-line
