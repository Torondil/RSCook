import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from '@/components/Navbar';
import Filter from '@/components/Filter';
import Cards from '@/components/Card/Cards';
import About from '@/components/About';
import Main from '@/components/Main/';
import Profile from '@/components/Profile';
import { Button } from 'react-bootstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = (): JSX.Element =>  {
  return (
<div>
  <NaviBar />
  <Router>
    <Switch>
      <Route exact path='/#main' component={ Main } />
      <Route exact path='/#about' component={ About } />
      <Route exact path='/#profile' component={ Profile } />
    </Switch>
  </Router>
  <Main />
  <Filter />
  <Cards />
  <Button variant="primary">Add recipe</Button>
</div>
);
}
export default App;
