import { React } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import { Header } from './components/Header';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <>
      <Router basename="/searchfilms">
        <Header />
        <Main className="container content">
          <Switch>
            <Route component={NotFound} />
          </Switch>
        </Main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
