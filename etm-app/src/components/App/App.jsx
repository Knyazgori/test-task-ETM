import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Card from '../Card/Card';
import CardList from '../CardList/CardList';
import Filter from '../Filter/Filter';
import Home from '../Home/Home';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/catalog'>
          <Filter />
          <CardList />
        </Route>
        <Route exact path='/catalog/:id'>
          <Card />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
