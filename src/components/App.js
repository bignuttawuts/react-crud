import React from 'react';
import NavBar from '../containers/NavBar';
import DocumentList from '../containers/DocumentList';
import DocumentDetail from '../containers/DocumentDetail';
import Home from '../containers/Home';
import About from '../containers/About';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/documents/:documentId/:mode" component={DocumentDetail} />
        <Route path="/documents/:mode" component={DocumentDetail} />
        <Route path="/documents" component={DocumentList} />
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
