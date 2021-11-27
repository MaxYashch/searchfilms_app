import { Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { NotFound } from './pages/NotFound';
import { Registration } from './pages/Registration';
import { SignIn } from './pages/SignIn';
import { MainPage } from './components/MainPage';

import { AuthProvider } from './hoc/AuthProvider';
import './styles/App.css';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<Homepage />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="registration" element={<Registration />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
// eslint-disable-next-line
