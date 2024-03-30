import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import DetailsPage from './pages/Details';
import HomePage from './pages/Home';
import Layout from './components/Layout';
import useLoadAndCacheAllPokemons from './hooks/useLoadAndCacheAllPokemons';
import './App.css';


function App() {
  useLoadAndCacheAllPokemons();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/details/:pokemonId" element={<DetailsPage/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
