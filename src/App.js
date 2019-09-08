import React from 'react';
import NavBar from './NavBar';
import Document from './Document';
import Home from './Home';
import About from './About';
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
