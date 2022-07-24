import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';
import { Home } from '../Home/Home'
import { Categories } from '../Categories/Categories';

function App() {
  return (
    <Router>
      <NavBar />
      <main>
        <Switch>
          <Route path='/categories'>
            <Categories />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
