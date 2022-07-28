import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';
import { BackButton } from '../BackButton/BackButton';
import { Home } from '../Home/Home'
import { Types } from '../Types/Types';
import { SearchBar } from '../SearchBar/SearchBar';
import { PokemonInfo } from '../PokemonInfo/PokemonInfo';

function App() {
  return (
    <Router>
      <NavBar />
      <BackButton />
      <main>
        <Switch>
          <Route path='/types/:type'>
            <SearchBar />
          </Route>
          <Route path='/types'>
            <Types />
          </Route>
          <Route path='/pokedex/:param'>
            <PokemonInfo />
          </Route>
          <Route path='/pokedex'>
            <PokemonInfo />
          </Route>
          <Route path='/home'>           {/*For GitHub Pages */}
            <Home />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
