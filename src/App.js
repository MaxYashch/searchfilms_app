import { Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { NotFound } from './pages/NotFound';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import { MainPage } from './components/MainPage';
import { AuthProvider } from './hoc/AuthProvider';
import './styles/variables.css';
import './styles/reset.css';
import './styles/buttons.css';
import './styles/App.css';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<Homepage />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
// eslint-disable-next-line
