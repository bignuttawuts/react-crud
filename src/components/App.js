import React from 'react';
import NavBar from '../containers/NavBar';
import DocumentList from '../containers/DocumentList';
import DocumentDetail from '../containers/DocumentDetail';
import ResourceList from '../containers/ResourceList';
import ResourceDetail from '../containers/ResourceDetail';
import Home from '../containers/Home';
import About from '../containers/About';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar />
      <section className="section">
        <div className="container">
          <Switch>
            <Route path="/documents/:documentId/:mode" component={DocumentDetail} />
            <Route path="/documents/:mode" component={DocumentDetail} />
            <Route path="/documents" component={DocumentList} />

            <Route path="/resources/:resouceId/:mode" component={ResourceDetail} />
            <Route path="/resources/:mode" component={ResourceDetail} />
            <Route path="/resources" component={ResourceList} />

            <Route path="/about" component={About} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </section>
    </div>
  );
}

export default App;
