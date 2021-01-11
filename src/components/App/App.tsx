import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from '@/components/Navbar';
import Filter from '@/components/Filter';
import Cards from '@/components/Card';
import About from '@/components/About';
import Main from '@/components/Main';
import Profile from '@/components/Profile';
import { Button } from 'react-bootstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = (): JSX.Element =>  {
  return (
<div>
  <Router>
  <NaviBar />
    <Switch>
      <Route exact path='/'>
        <Main />
      </Route>
      <Route exact path='/about'>
        <About />
      </Route>
      <Route exact path='/profile'>
        <Profile />
      </Route>
    </Switch>
  </Router>
  <Filter />
  <Cards />
  <Button variant="primary">Add recipe</Button>
</div>
);
}
export default App;
