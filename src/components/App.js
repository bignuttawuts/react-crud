import React from 'react';
import NavBar from '../containers/NavBar';
import Document from '../containers/Document';
import Home from '../containers/Home';
import About from '../containers/About';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/doc/:id" component={Document} />
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
