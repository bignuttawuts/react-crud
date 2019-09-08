import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import NavBar from '../containers/NavBar';
import Document from '../containers/Document';
import Home from '../containers/Home';
import About from '../containers/About';
import { Switch, Route } from 'react-router-dom';
import reducer from '../reducers/reducer';

const store = createStore(reducer)

function App() {
  return (
    <div>
      <Provider store={store}>
        <NavBar />
        <Switch>
          <Route path="/doc/:id" component={Document} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
